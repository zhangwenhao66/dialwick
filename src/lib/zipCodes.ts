/**
 * US ZIP code / place / county registry, built from src/lib/data/zipCounty.json
 * (see scripts/extract-zip-county.py for provenance -- GeoNames' US postal
 * code export, CC BY 4.0, compiled from USPS/Census public data). Do not
 * hand-edit zipCounty.json; re-run the extraction script and let
 * tests/zipCodes.test.ts catch regressions.
 */
import raw from './data/zipCounty.json';

export interface ZipRecord {
	zip: string;
	place: string;
	state: string;
	stateCode: string;
	county: string;
}

const rows: ZipRecord[] = (raw.rows as [string, string, string, string, string][]).map(
	([zip, place, state, stateCode, county]) => ({ zip, place, state, stateCode, county }),
);

const byZip = new Map(rows.map((r) => [r.zip, r]));

export function lookupZip(zip: string): ZipRecord | undefined {
	return byZip.get(zip);
}

/** All ZIP rows whose place name matches `city` (case-insensitive) within a state, e.g. getZipsByCity('Atlanta', 'GA'). */
export function getZipsByCity(city: string, stateCode: string): ZipRecord[] {
	const c = city.trim().toLowerCase();
	const s = stateCode.trim().toUpperCase();
	return rows.filter((r) => r.place.toLowerCase() === c && r.stateCode === s);
}

/** Distinct counties a city's ZIP codes fall into -- most cities are one county, but plenty straddle two or more. */
export function getCountiesForCity(city: string, stateCode: string): string[] {
	return [...new Set(getZipsByCity(city, stateCode).map((r) => r.county))].sort();
}

export function getZipsByState(stateCode: string): ZipRecord[] {
	const s = stateCode.trim().toUpperCase();
	return rows.filter((r) => r.stateCode === s);
}

/** Distinct city/place names sharing a ZIP code's first N digits (e.g. a 3-digit sectional center prefix). */
export function getZipsByPrefix(prefix: string): ZipRecord[] {
	return rows.filter((r) => r.zip.startsWith(prefix));
}

export const zipRecordCount = rows.length;
