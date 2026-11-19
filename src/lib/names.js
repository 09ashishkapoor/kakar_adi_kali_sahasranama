import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { inline, fold, slugify, displayName } from './text.js';

export { inline, fold, slugify, displayName };

/**
 * Parses the Markdown source in output_names/ into the structures every page
 * needs. This is the only module that knows the Markdown shape; a malformed
 * entry fails the build with the file name.
 */

const SOURCE_DIR = join(process.cwd(), 'output_names');

function fail(file, what) {
	throw new Error(`output_names/${file}: missing ${what}`);
}

function parseFile(file) {
	const raw = readFileSync(join(SOURCE_DIR, file), 'utf8').replace(/\r\n/g, '\n');
	const position = Number(file.slice(0, 4));

	const title = raw.match(/^##\s+(.+)$/m)?.[1]?.trim() ?? fail(file, 'a "## Name" heading');
	const devanagari = raw.match(/^\*\*Devanagari:\*\*\s*(.+?)\s*$/m)?.[1] ?? fail(file, 'Devanagari');
	const iast = raw.match(/^\*\*IAST:\*\*\s*(.+?)\s*$/m)?.[1] ?? fail(file, 'IAST');
	const meaning = raw.match(/^\*\*Meaning:\*\*\s*(.+)$/m)?.[1]?.trim() ?? fail(file, 'Meaning');
	const source = raw.match(/^\s*(?:-\s*)?\*\*Source transliteration:\*\*\s*(.+)$/m)?.[1]?.trim() ?? fail(file, 'the source transliteration');

	const spelledBlock = raw.split(/^### Also spelled\s*$/m)[1]?.split(/^### /m)[0] ?? '';
	const alternates = spelledBlock
		.split('\n')
		.map((l) => l.match(/^-\s+(.+)$/)?.[1]?.trim())
		.filter((v) => v && !/^\*\*Source transliteration:\*\*/.test(v));

	const whatBlock = raw.split(/^### What .+? means\s*$/m)[1]?.split(/^### /m)[0]?.trim() ?? '';
	const intro = whatBlock
		.split(/\n{2,}/)
		.map((p) => `<p>${displayName(inline(p.trim()))}</p>`)
		.join('');

	const elaborationMd = raw.split(/^#### Elaboration\s*$/m)[1]?.trim() ?? '';
	const blocks = [];
	for (const block of elaborationMd.split(/\n{2,}/)) {
		const text = block.trim();
		if (!text) continue;

		// A block that opens with a bold-only line is a section head followed by prose.
		const lead = text.match(/^\*\*(.+?)\*\*[ \t]*\n+([\s\S]+)$/);
		if (lead) {
			blocks.push({ type: 'h3', html: displayName(inline(lead[1])) });
			blocks.push({ type: 'p', html: displayName(inline(lead[2].replace(/\n/g, ' '))) });
			continue;
		}

		const head = text.match(/^\*\*(.+?)\*\*[ \t]*$/s);
		if (head) blocks.push({ type: 'h3', html: displayName(inline(head[1])) });
		else blocks.push({ type: 'p', html: displayName(inline(text.replace(/\n/g, ' '))) });
	}

	const nameSlug = slugify(title);
	return {
		position,
		title,
		nameSlug,
		slug: `${String(position).padStart(4, '0')}-${nameSlug}`,
		devanagari,
		iast,
		source,
		alternates,
		meaning,
		intro,
		elaboration: blocks,
		rangeSlug: rangeSlugFor(position),
		foldKey: fold([title, devanagari, iast, source, ...alternates, meaning].join(' ')),
	};
}

export function rangeSlugFor(position) {
	const start = Math.floor((position - 1) / 100) * 100 + 1;
	return `${start}-${start + 99}`;
}

let cache = null;

export function getContent() {
	if (cache) return cache;

	const files = readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.md')).sort();
	const entries = files.map(parseFile);

	const seen = new Set();
	for (const e of entries) {
		if (seen.has(e.position)) throw new Error(`duplicate position ${e.position}`);
		seen.add(e.position);
	}
	if (entries.length !== 1000) throw new Error(`expected 1000 entries, found ${entries.length}`);

	// One page per position: 1,000 pages. Repeated English titles can differ in
	// Sanskrit form or meaning, so they are not merged; each page cross-links the
	// other positions of the same title.
	const pages = entries.map((entry) => ({ ...entry, alsoAt: [] }));

	const byName = new Map();
	for (const page of pages) {
		const list = byName.get(page.nameSlug) ?? [];
		list.push(page);
		byName.set(page.nameSlug, list);
	}
	for (const list of byName.values()) {
		if (list.length < 2) continue;
		for (const page of list) {
			page.alsoAt = list
				.filter((other) => other !== page)
				.map((other) => ({
					position: other.position,
					slug: other.slug,
					title: other.title,
					devanagari: other.devanagari,
					iast: other.iast,
				}));
		}
	}

	const slugSet = new Set(pages.map((p) => p.slug));

	const ranges = [];
	for (let start = 1; start <= 1000; start += 100) {
		const slice = entries.filter((e) => e.position >= start && e.position < start + 100);
		ranges.push({
			slug: rangeSlugFor(start),
			start,
			end: start + 99,
			entries: slice,
			first: slice[0],
			last: slice[slice.length - 1],
		});
	}

	// A name page whose slug collides with a range slug would break routing.
	for (const r of ranges) {
		if (slugSet.has(r.slug)) throw new Error(`name slug collides with range slug: ${r.slug}`);
	}

	cache = { entries, pages, ranges, total: entries.length, pageCount: pages.length };
	return cache;
}
