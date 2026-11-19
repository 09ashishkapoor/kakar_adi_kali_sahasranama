/** Text helpers shared by the build and the browser. No node imports here. */

export const escapeHtml = (s) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Inline Markdown: **bold** then *italic*. Escape first, so no raw HTML passes. */
export function inline(md) {
	return escapeHtml(md)
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/**
 * The prose in output_names/ writes the title as one word, "Kakaradi".
 * The site always shows it as three: Kakar Adi Kali Sahasranama.
 * Source files are never edited; the substitution happens at render time.
 */
export const displayName = (s) =>
	s.replace(/Kakaradi(\s+Kali)?\s+Sahasranama/g, 'Kakar Adi Kali Sahasranama').replace(/Kakaradi/g, 'Kakar Adi');

/** Diacritic-insensitive key: kālī → kali, Krīṃ → krim. Devanagari passes through. */
export const fold = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export const slugify = (s) =>
	fold(s)
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
