#!/usr/bin/env node
/**
 * Post-build guard. Fails if dist/ contains a file type that must never ship,
 * or if any internal link points at a page that does not exist.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
const ALLOWED = new Set(['.html', '.css', '.js', '.json', '.xml', '.txt', '.webmanifest', '.webp', '.avif', '.png', '.svg', '.ico', '.woff2', '.pdf']);
const CLOUDFLARE = new Set(['_headers', '_redirects']);
const FORBIDDEN = /(^|\/)(private|output_names)(\/|$)|\.(md|csv|tsv|dat)$/i;

function walk(dir, out = []) {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walk(full, out);
		else out.push(full);
	}
	return out;
}

if (!existsSync(DIST)) {
	console.error('dist/ not found — run the build first.');
	process.exit(1);
}

const files = walk(DIST);
const problems = [];

for (const file of files) {
	const rel = file.slice(DIST.length + 1).replace(/\\/g, '/');
	if (FORBIDDEN.test(rel)) problems.push(`forbidden path in dist/: ${rel}`);
	const ext = extname(file).toLowerCase();
	const name = rel.split('/').pop();
	if (!ALLOWED.has(ext) && !CLOUDFLARE.has(name)) problems.push(`unexpected file type in dist/: ${rel}`);
}

let links = 0;
for (const file of files.filter((f) => f.endsWith('.html'))) {
	const html = readFileSync(file, 'utf8');
	for (const href of html.matchAll(/href="(\/[^"#?]*)"/g)) {
		const target = href[1];
		links++;
		const path = join(DIST, target);
		const ok = target.endsWith('/')
			? existsSync(join(path, 'index.html'))
			: existsSync(path) || existsSync(join(path, 'index.html'));
		if (!ok) problems.push(`broken link ${target} in ${file.slice(DIST.length + 1)}`);
	}
}

if (problems.length) {
	const unique = [...new Set(problems)];
	console.error(`check failed — ${unique.length} problem(s):`);
	for (const p of unique.slice(0, 40)) console.error('  ' + p);
	if (unique.length > 40) console.error(`  … and ${unique.length - 40} more`);
	process.exit(1);
}

console.log(`check ok: ${files.length} files, ${links} internal links, no forbidden paths.`);
