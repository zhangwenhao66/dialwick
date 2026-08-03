import { describe, expect, it } from 'vitest';
import { dialingGuides, getDialingGuide } from '../src/lib/internationalDialing';

describe('internationalDialing', () => {
	it('has exactly 10 entries, matching the 10 "how to call X from us" keywords in the word list', () => {
		expect(dialingGuides.length).toBe(10);
	});

	it('every slug is unique', () => {
		const slugs = dialingGuides.map((g) => g.slug);
		expect(new Set(slugs).size).toBe(slugs.length);
	});

	it('Canada is the one entry with no exit code, since it shares the NANP with the US', () => {
		const canada = getDialingGuide('how-to-call-canada-from-us');
		expect(canada?.countryCode).toBe('1');
		expect(canada?.exitCode).toBe('(none)');
	});

	it('Italy keeps the leading 0 for landlines, unlike the other 9 countries', () => {
		const italy = getDialingGuide('how-to-call-italy-from-us');
		expect(italy?.format).toContain('INCLUDING the leading 0');
	});

	it('Mexico is documented post-2019 reform: no extra digit for mobiles', () => {
		const mexico = getDialingGuide('how-to-call-mexico-from-us');
		expect(mexico?.format).toBe('011 + 52 + 10-digit number');
		expect(mexico?.quirk).toContain('2019');
	});

	it('an unknown slug returns undefined', () => {
		expect(getDialingGuide('how-to-call-narnia-from-us')).toBeUndefined();
	});
});
