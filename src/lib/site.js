/**
 * Site constants. Change SITE_URL when the domain is registered — it is the
 * only place the canonical origin is defined. Until then the build defaults to
 * the Cloudflare Pages hostname.
 */
export const SITE_URL = (process.env.SITE_URL || 'https://kakar-adi-kali-sahasranama.pages.dev').replace(/\/+$/, '');

export const SITE_NAME = 'Kakar Adi Kali Sahasranama';
export const SITE_DEV = 'ककार आदि काली सहस्रनाम';
export const SITE_LATIN = 'Kakar Adi Kali';
export const SITE_TITLE = 'Kakar Adi Kali Sahasranama — 1,000 Names of Maa Kali';
export const SITE_DESCRIPTION =
	'The Kakar Adi Kali Sahasranama, all 1,000 names of Maa Kali: Devanagari, IAST, alternate spellings and a meaning for every name, arranged as a book you can read on a phone.';

export const OG_IMAGE = '/img/deity-og-1200x630.webp';
export const THEME_COLOR_LIGHT = '#faf3e3';
export const THEME_COLOR_DARK = '#1a1410';

/** Credit for the deity plate, as it appears on the photograph itself. */
export const IMAGE_CREDIT = 'Tryst With Kaali — Praveen Radhakrishnan';
