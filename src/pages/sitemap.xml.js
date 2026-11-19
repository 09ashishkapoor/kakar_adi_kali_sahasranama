import { getContent } from '../lib/names.js';
import { SITE_URL } from '../lib/site.js';

export function GET() {
	const { pages, ranges } = getContent();

	const staticPages = ['/', '/names/', '/kakaradi-kali-sahasranama/', '/kali-sahasranama-lyrics/', '/kali-sahasranama-benefits/', '/kali-sahasranama-pdf/', '/about/', '/sources/', '/privacy/'];

	const urls = [
		...staticPages.map((path) => ({ loc: `${SITE_URL}${path}`, priority: path === '/' ? '1.0' : '0.8' })),
		...ranges.map((range) => ({ loc: `${SITE_URL}/names/${range.slug}/`, priority: '0.7' })),
		...pages.map((page) => ({ loc: `${SITE_URL}/names/${page.slug}/`, priority: '0.6' })),
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		({ loc, priority }) =>
			`	<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`,
	)
	.join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
		},
	});
}
