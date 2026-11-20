/**
 * Site constants. SITE_URL is the only place the canonical origin is defined.
 * The registered canonical host is the default; set SITE_URL to override it.
 */
export const SITE_URL = (process.env.SITE_URL || 'https://kakaradikalisahasranama.com').replace(/\/+$/, '');

export const SITE_NAME = 'Kakar Adi Kali Sahasranama';
export const SITE_DEV = 'ककार आदि काली सहस्रनाम';
export const SITE_LATIN = 'Kakar Adi Kali';
export const SITE_TITLE = 'Kakar Adi Kali Sahasranama (Kakaradi) — 1,000 Names of Maa Kali';
export const SITE_DESCRIPTION =
	'The Kakar Adi Kali Sahasranama — also written Kakaradi Kali Sahasranama. All 1,000 names of Maa Kali with Devanagari, IAST, alternate spellings and a meaning for each, readable on a phone.';

export const OG_IMAGE = '/img/deity-og-1200x630.jpg';
export const THEME_COLOR_LIGHT = '#faf3e3';
export const THEME_COLOR_DARK = '#1a1410';

/** Credit for the deity plate, as it appears on the photograph itself. */
export const IMAGE_CREDIT = 'Tryst With Kaali — Praveen Radhakrishnan';
