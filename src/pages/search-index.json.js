import { getContent } from '../lib/names.js';

/** The prebuilt search index: one row per position page. */
export function GET() {
	const { pages } = getContent();
	const rows = pages.map((page) => ({
		s: page.slug,
		n: page.position,
		t: page.title,
		d: page.devanagari,
		i: page.iast,
		m: page.meaning,
		f: page.foldKey,
	}));

	return new Response(JSON.stringify(rows), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
		},
	});
}
