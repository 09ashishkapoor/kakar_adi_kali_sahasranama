import { getContent } from '../lib/names.js';

/** The prebuilt search index: one row per unique name page. */
export function GET() {
	const { namePages } = getContent();
	const rows = namePages.map((page) => {
		const first = page.occurrences[0];
		return {
			s: page.slug,
			n: page.positions[0],
			t: page.title,
			d: first.devanagari,
			i: first.iast,
			m: first.meaning,
			f: page.occurrences.map((o) => o.foldKey).join(' '),
		};
	});

	return new Response(JSON.stringify(rows), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
		},
	});
}
