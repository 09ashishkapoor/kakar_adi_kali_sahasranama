import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { readSourceEntries } from '../src/lib/names.js';

const OUT = join(process.cwd(), 'src', 'data', 'names.json');
const entries = readSourceEntries();

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, `${JSON.stringify(entries)}\n`, 'utf8');

console.log(`wrote ${entries.length} entries to ${OUT}`);
