import { describe, expect, it } from 'vitest';
import { formatForDialing } from '../src/lib/dialFormatter';
import { dialingGuides, getDialingGuide, type DialingGuide } from '../src/lib/internationalDialing';

/** Digits only, ignoring spaces/dashes/parens and any trailing note like "(Vatican City landline)". */
function digitsOf(s: string): string {
	return s.replace(/\D/g, '');
}

function guide(slug: string): DialingGuide {
	const g = getDialingGuide(slug);
	if (!g) throw new Error(`missing test fixture guide: ${slug}`);
	return g;
}

describe('formatForDialing', () => {
	it('covers all 10 countries in dialingGuides with at least one passing case', () => {
		expect(dialingGuides.length).toBe(10);
	});

	// -----------------------------------------------------------------
	// One real-number case per country, derived from that guide's own
	// `example` field: we reconstruct a plausible domestic-style input a
	// user would actually type, and assert the formatter reproduces the
	// digits of `example` (spacing/punctuation may legitimately differ).
	// -----------------------------------------------------------------

	it('Mexico: post-2019 plain 10-digit number needs no transformation', () => {
		const g = guide('how-to-call-mexico-from-us');
		const result = formatForDialing('55 1234 5678', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
		expect(result.exitCodeFormat.startsWith('011 52 ')).toBe(true);
		expect(result.plusFormat.startsWith('+52 ')).toBe(true);
	});

	it('Mexico: strips an obsolete 045 mobile prefix from an old-style input', () => {
		const g = guide('how-to-call-mexico-from-us');
		const result = formatForDialing('045 55 1234 5678', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('Mexico: strips an obsolete 01 long-distance prefix', () => {
		const g = guide('how-to-call-mexico-from-us');
		const result = formatForDialing('01 55 1234 5678', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('Canada: NANP number, no exit code, no leading zero to drop', () => {
		const g = guide('how-to-call-canada-from-us');
		const result = formatForDialing('416 555 0199', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
		// No "011" exit code should appear anywhere -- Canada doesn't have one.
		expect(result.exitCodeFormat).not.toContain('011');
		expect(result.exitCodeFormat.startsWith('1 ')).toBe(true);
	});

	it('Canada: strips a redundant leading 1 if the user includes it', () => {
		const g = guide('how-to-call-canada-from-us');
		const result = formatForDialing('1-416-555-0199', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('UK: drops the domestic trunk 0 from the area code', () => {
		const g = guide('how-to-call-uk-from-us');
		const result = formatForDialing('020 7946 0958', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
		expect(result.exitCodeFormat).not.toContain('44 020');
	});

	it('Germany: drops the domestic trunk 0 from the area code', () => {
		const g = guide('how-to-call-germany-from-us');
		const result = formatForDialing('030 12345678', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('France: drops the leading 0, leaving a 9-digit number', () => {
		const g = guide('how-to-call-france-from-us');
		const result = formatForDialing('01 42 68 53 00', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('Italy: KEEPS the leading 0 for a landline number, unlike every other country here', () => {
		const g = guide('how-to-call-italy-from-us');
		const result = formatForDialing('06 6982', g);
		expect(result.warning).toBeUndefined();
		// example is "011 39 06 6982 (Vatican City landline)" -- strip the trailing note before comparing.
		const exampleDigits = digitsOf(g.example.replace(/\(.*\)/, ''));
		expect(digitsOf(result.exitCodeFormat)).toBe(exampleDigits);
		expect(result.exitCodeFormat).toContain('39 06');
	});

	it('Italy: a mobile number (no leading 0 to begin with) passes through unchanged', () => {
		const g = guide('how-to-call-italy-from-us');
		const result = formatForDialing('347 123 4567', g);
		expect(result.warning).toBeUndefined();
		expect(result.exitCodeFormat).toBe('011 39 3471234567');
		expect(result.plusFormat).toBe('+39 3471234567');
	});

	it('Japan: drops the domestic trunk 0 (landline, 9 digits after)', () => {
		const g = guide('how-to-call-japan-from-us');
		const result = formatForDialing('03-1234-5678', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('Japan: a mobile number is 10 digits after the trunk 0 is dropped', () => {
		const g = guide('how-to-call-japan-from-us');
		const result = formatForDialing('090-1234-5678', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf('011 81 9012345678'));
	});

	it('India: drops a leading 0 if present in front of an STD code', () => {
		const g = guide('how-to-call-india-from-us');
		const result = formatForDialing('098765 43210', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('India: a mobile number already written as plain 10 digits (no leading 0) needs no change', () => {
		const g = guide('how-to-call-india-from-us');
		const result = formatForDialing('98765 43210', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('Philippines: drops the leading 0 from a mobile number', () => {
		const g = guide('how-to-call-philippines-from-usa');
		const result = formatForDialing('0917 123 4567', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	it('Australia: drops the leading 0 from an area code', () => {
		const g = guide('how-to-call-australia-from-us');
		const result = formatForDialing('02 9374 4000', g);
		expect(result.warning).toBeUndefined();
		expect(digitsOf(result.exitCodeFormat)).toBe(digitsOf(g.example));
	});

	// -----------------------------------------------------------------
	// Malformed / wrong-length input -- must warn, never fabricate a number.
	// -----------------------------------------------------------------

	it('returns a warning and no formatted output for empty input', () => {
		const g = guide('how-to-call-uk-from-us');
		const result = formatForDialing('', g);
		expect(result.warning).toBeTruthy();
		expect(result.exitCodeFormat).toBe('');
		expect(result.plusFormat).toBe('');
	});

	it('returns a warning and no formatted output for non-numeric input', () => {
		const g = guide('how-to-call-uk-from-us');
		const result = formatForDialing('not a phone number', g);
		expect(result.warning).toBeTruthy();
		expect(result.exitCodeFormat).toBe('');
	});

	it('returns a warning (not a wrong number) when a UK input is too short', () => {
		const g = guide('how-to-call-uk-from-us');
		const result = formatForDialing('020 794', g);
		expect(result.warning).toBeTruthy();
		expect(result.exitCodeFormat).toBe('');
	});

	it('returns a warning when a Mexican input has the wrong digit count', () => {
		const g = guide('how-to-call-mexico-from-us');
		const result = formatForDialing('55 1234 567', g);
		expect(result.warning).toBeTruthy();
		expect(result.warning).toContain('10 digits');
	});

	it('returns a warning when a Canadian input has too many digits', () => {
		const g = guide('how-to-call-canada-from-us');
		const result = formatForDialing('416 555 0199 99', g);
		expect(result.warning).toBeTruthy();
	});

	it('returns a warning when an Italian input is unreasonably short', () => {
		const g = guide('how-to-call-italy-from-us');
		const result = formatForDialing('06', g);
		expect(result.warning).toBeTruthy();
	});
});
