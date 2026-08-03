import { describe, expect, it } from 'vitest';
import {
	areaCodes,
	geographicAreaCodes,
	getAreaCode,
	getCodesForRegion,
	parseOverlayEvents,
} from '../src/lib/areaCodes';

describe('structural invariants (source: Wikipedia "List of North American Numbering Plan area codes", retrieved 2026-08-03)', () => {
	it('has exactly 800 registry rows -- every 3-digit code from 200 to 999, since range/list rows in the source (e.g. "285-287", "880,881,882") are expanded to one record per code', () => {
		expect(areaCodes.length).toBe(800);
	});

	it('covers every code from 200 to 999 with no gaps', () => {
		const codes = new Set(areaCodes.map((r) => r.code));
		for (let n = 200; n <= 999; n++) {
			expect(codes.has(String(n))).toBe(true);
		}
	});

	it('has no duplicate codes', () => {
		const codes = areaCodes.map((r) => r.code);
		expect(new Set(codes).size).toBe(codes.length);
	});

	it('every code is a 3-digit string', () => {
		for (const r of areaCodes) {
			expect(r.code).toMatch(/^\d{3}$/);
		}
	});

	it('geographic codes are a strict, non-trivial subset of all codes', () => {
		expect(geographicAreaCodes.length).toBeGreaterThan(300);
		expect(geographicAreaCodes.length).toBeLessThan(areaCodes.length);
	});
});

describe('spot-checks against independently verified facts (not derived from the implementation)', () => {
	it('213 -- Los Angeles, established 1947, five splits + a 2017 overlay merge + 2024 overlay by 738', () => {
		const r = getAreaCode('213');
		expect(r?.location).toContain('Los Angeles');
		expect(r?.dateEstablished).toBe('1947');
		expect(r?.notes).toContain('split to create 714');
		expect(r?.notes).toContain('split to create 818');
		expect(r?.notes).toContain('split to create 310');
		expect(r?.notes).toContain('split to create 323');
		expect(r?.notes).toContain('overlaid by 738');
		expect(r?.kind).toBe('geographic');
	});

	it('646 -- Manhattan overlay on 212, went into service July 1, 1999', () => {
		const r = getAreaCode('646');
		expect(r?.location).toContain('Manhattan');
		expect(r?.dateEstablished).toBe('July 1, 1999');
		expect(r?.notes).toContain('Overlaid on 212');
	});

	it('212 -- original Manhattan code from 1947, lost the outer boroughs to 718 in 1984/1992', () => {
		const r = getAreaCode('212');
		expect(r?.dateEstablished).toBe('1947');
		expect(r?.notes).toContain('split to create 718');
		expect(r?.notes).toContain('the Bronx switched to 718');
	});

	it('202 -- all of Washington, D.C., established 1947, overlaid by 771 in 2021', () => {
		const r = getAreaCode('202');
		expect(r?.location).toBe('Washington, D.C. (all)');
		expect(r?.notes).toContain('overlaid by 771');
	});

	it('907 -- statewide Alaska code since 1957 (no splits, ever)', () => {
		const r = getAreaCode('907');
		expect(r?.location).toContain('Alaska');
		expect(r?.dateEstablished).toBe('1957');
	});

	it('787 -- Puerto Rico, a 1996 split of 809, later overlaid by 939 in 2001', () => {
		const r = getAreaCode('787');
		expect(r?.location).toBe('Puerto Rico');
		expect(r?.notes).toContain('Split of 809');
		expect(r?.notes).toContain('overlaid by 939');
	});

	it('204 -- Manitoba, all of it, with two overlays (431 in 2012, 584 in 2022)', () => {
		const r = getAreaCode('204');
		expect(r?.location).toBe('Manitoba (all)');
		expect(r?.notes).toContain('overlaid by 431');
		expect(r?.notes).toContain('overlaid by 584');
	});

	it('800, 888 classify as toll-free, not geographic', () => {
		expect(getAreaCode('800')?.kind).toBe('toll-free');
		expect(getAreaCode('888')?.kind).toBe('toll-free');
	});

	it('900 classifies as premium-rate', () => {
		expect(getAreaCode('900')?.kind).toBe('premium-rate');
	});

	it('911 classifies as special-use (N11 emergency code, not assignable to a numbering plan area)', () => {
		expect(getAreaCode('911')?.kind).toBe('special-use');
	});

	it('555 and 456 classify as reserved (not in geographic service)', () => {
		expect(getAreaCode('555')?.kind).toBe('reserved');
		expect(getAreaCode('456')?.kind).toBe('reserved');
	});

	it('an unassigned/nonexistent code returns undefined', () => {
		expect(getAreaCode('999999')).toBeUndefined();
	});
});

describe('state/province/nation groupings', () => {
	it('Texas includes 214, 469, 512, 713, 817, 972 among its codes', () => {
		const codes = getCodesForRegion('Texas');
		expect(codes).toBeDefined();
		for (const c of ['214', '469', '512', '713', '817', '972']) {
			expect(codes).toContain(c);
		}
	});

	it('California includes 213, 310, 323, 415, 619, 818, 949 among its codes', () => {
		const codes = getCodesForRegion('California');
		for (const c of ['213', '310', '323', '415', '619', '818', '949']) {
			expect(codes).toContain(c);
		}
	});

	it('Ontario (a Canadian province) includes 416 and 647 (Toronto)', () => {
		const codes = getCodesForRegion('Ontario');
		expect(codes).toContain('416');
		expect(codes).toContain('647');
	});

	it('an unknown region name returns undefined', () => {
		expect(getCodesForRegion('Narnia')).toBeUndefined();
	});
});

describe('parseOverlayEvents', () => {
	it('extracts a mixed split/overlay chain in order', () => {
		const events = parseOverlayEvents(getAreaCode('213')!.notes);
		expect(events).toEqual([
			{ year: 1951, kind: 'split', code: '714' },
			{ year: 1957, kind: 'split', code: '805' },
			{ year: 1984, kind: 'split', code: '818' },
			{ year: 1991, kind: 'split', code: '310' },
			{ year: 1998, kind: 'split', code: '323' },
			{ year: 2024, kind: 'overlay', code: '738' },
		]);
	});

	it('returns an empty array for notes with no matching pattern', () => {
		expect(parseOverlayEvents('')).toEqual([]);
		expect(parseOverlayEvents(getAreaCode('907')!.notes)).toEqual([]);
	});
});
