import { describe, expect, it } from 'vitest';
import {
	getCountiesForCity,
	getZipsByCity,
	getZipsByState,
	lookupZip,
	zipRecordCount,
} from '../src/lib/zipCodes';

describe('structural invariants (source: GeoNames.org US postal code export, CC BY 4.0, retrieved 2026-08-03)', () => {
	it('has at least 40,000 ZIP rows', () => {
		expect(zipRecordCount).toBeGreaterThanOrEqual(40000);
	});

	it('every ZIP is 5 digits', () => {
		expect(lookupZip('30303')?.zip).toBe('30303');
		expect(lookupZip('10001')?.zip).toBe('10001');
	});
});

describe('spot-checks against independently verified facts (not derived from the implementation)', () => {
	it('60601 (downtown Chicago) is in Cook County, IL -- Chicago is Cook County\'s seat', () => {
		const r = lookupZip('60601');
		expect(r?.place).toBe('Chicago');
		expect(r?.stateCode).toBe('IL');
		expect(r?.county).toBe('Cook');
	});

	it('77002 (downtown Houston) is in Harris County, TX -- Houston is Harris County\'s seat', () => {
		const r = lookupZip('77002');
		expect(r?.place).toBe('Houston');
		expect(r?.stateCode).toBe('TX');
		expect(r?.county).toBe('Harris');
	});

	it('30303 (downtown Atlanta) is in Fulton County, GA -- Atlanta is Fulton County\'s seat', () => {
		const r = lookupZip('30303');
		expect(r?.place).toBe('Atlanta');
		expect(r?.stateCode).toBe('GA');
		expect(r?.county).toBe('Fulton');
	});

	it('10001 (Manhattan) is in New York County, NY -- Manhattan and New York County are coextensive', () => {
		const r = lookupZip('10001');
		expect(r?.place).toBe('New York');
		expect(r?.stateCode).toBe('NY');
		expect(r?.county).toBe('New York');
	});

	it('an unassigned ZIP returns undefined', () => {
		expect(lookupZip('00000')).toBeUndefined();
	});
});

describe('getZipsByCity / getCountiesForCity', () => {
	it('Atlanta, GA has dozens of ZIP codes and is not a single-ZIP city', () => {
		const zips = getZipsByCity('Atlanta', 'GA');
		expect(zips.length).toBeGreaterThan(20);
		expect(zips.every((z) => z.stateCode === 'GA')).toBe(true);
	});

	it('Atlanta straddles more than one county (Fulton and DeKalb)', () => {
		const counties = getCountiesForCity('Atlanta', 'GA');
		expect(counties).toContain('Fulton');
		expect(counties).toContain('DeKalb');
	});

	it('city lookup is case-insensitive', () => {
		expect(getZipsByCity('atlanta', 'ga').length).toBe(getZipsByCity('Atlanta', 'GA').length);
	});

	it('an unknown city returns an empty array, not undefined', () => {
		expect(getZipsByCity('Nowhereville', 'ZZ')).toEqual([]);
	});
});

describe('getZipsByState', () => {
	it('Texas has thousands of ZIP codes, all tagged TX', () => {
		const zips = getZipsByState('TX');
		expect(zips.length).toBeGreaterThan(1500);
		expect(zips.every((z) => z.stateCode === 'TX')).toBe(true);
	});
});
