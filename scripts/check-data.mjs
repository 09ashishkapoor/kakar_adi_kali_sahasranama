import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { readSourceEntries } from '../src/lib/names.js';

const OUT = join(process.cwd(), 'src', 'data', 'names.json');
const REQUIRED = [
	'position',
	'title',
	'nameSlug',
	'slug',
	'devanagari',
	'iast',
	'source',
	'alternates',
	'meaning',
	'intro',
	'elaboration',
	'rangeSlug',
	'foldKey',
];

if (!existsSync(OUT)) {
	console.error('src/data/names.json is missing — run: npm run data:build');
	process.exit(1);
}

const raw = readFileSync(OUT, 'utf8').trim();
const entries = JSON.parse(raw);

if (!Array.isArray(entries) || entries.length !== 1000) {
	console.error(`src/data/names.json must contain 1000 entries, found ${entries.length}`);
	process.exit(1);
}

const seen = new Set();
for (const entry of entries) {
	for (const key of REQUIRED) {
		if (!(key in entry)) {
			console.error(`src/data/names.json entry ${entry.position ?? '?'} is missing "${key}"`);
			process.exit(1);
		}
	}
	if (seen.has(entry.position)) {
		console.error(`duplicate position ${entry.position} in src/data/names.json`);
		process.exit(1);
	}
	seen.add(entry.position);
}

if (existsSync(join(process.cwd(), 'output_names'))) {
	const fresh = readSourceEntries();
	if (raw !== JSON.stringify(fresh)) {
		console.error('src/data/names.json is stale — run: npm run data:build');
		process.exit(1);
	}
	console.log(`data ok: ${entries.length} entries, JSON matches the Markdown source`);
} else {
	console.log(`data ok: ${entries.length} entries (Markdown source not present)`);
}
