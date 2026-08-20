/**
 * International dialing reference for the 10 "how to call X from the US"
 * pages. Country calling codes are ITU-T E.164 assignments (uncontested,
 * standard public data -- the same numbers published by the ITU and every
 * carrier). The dialing-format nuances (leading-zero handling, mobile
 * reform history) were verified against current sources on 2026-08-03:
 * Mexico's 2019 dialing-plan reform (dropped the old 044/045 mobile
 * prefixes) and Italy's leading-zero exception were each independently
 * confirmed via web search before publication -- see the "how to call
 * mexico from us" and "how to call italy" articles' Sources sections for
 * the specific citations used. Re-verify any of these before reusing them
 * if this file is edited later; dialing-plan reforms do happen.
 */

export interface DialingGuide {
	slug: string;
	country: string;
	countryCode: string;
	/** International exit/access code to dial from the US or Canada before the country code. */
	exitCode: string;
	/** Whether callers can substitute "+" for the exit code on a mobile/VoIP device. */
	plusWorks: boolean;
	/** Human-readable dialing format, e.g. "011 + 52 + 10-digit number". */
	format: string;
	/** Worked example, fully formatted. */
	example: string;
	/** The specific quirk that makes this country's dialing format different from the generic "drop the leading 0" rule -- or confirms it follows that rule. */
	quirk: string;
}

export const dialingGuides: DialingGuide[] = [
	{
		slug: 'how-to-call-mexico-from-us',
		country: 'Mexico',
		countryCode: '52',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 52 + 10-digit number',
		example: '011 52 55 1234 5678',
		quirk:
			"Mexico's August 2019 dialing-plan reform eliminated the old 01 (domestic long-distance), 044, and 045 (mobile) prefixes. Every Mexican number, landline or mobile, is now a plain 10-digit number with no extra digit for cell phones -- a lot of older \"how to call Mexico\" guides still online are describing a format that stopped working years ago.",
	},
	{
		slug: 'how-to-call-canada-from-us',
		country: 'Canada',
		countryCode: '1',
		exitCode: '(none)',
		plusWorks: true,
		format: '1 + area code + 7-digit number',
		example: '1 416 555 0199',
		quirk:
			"Canada isn't really an \"international call\" from the US at all: Canada and the US share the same North American Numbering Plan, so a Canadian number is just 1 + a 3-digit area code + a 7-digit number -- the identical format as calling long-distance within the US, no 011 exit code and no separate country code to dial.",
	},
	{
		slug: 'how-to-call-uk-from-us',
		country: 'United Kingdom',
		countryCode: '44',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 44 + area code (drop the 0) + local number',
		example: '011 44 20 7946 0958',
		quirk:
			'UK numbers are written domestically with a leading 0 (London\'s area code is written "020"), and that 0 is a trunk prefix you drop when dialing from abroad -- the international version of a London number starts 011 44 20, not 011 44 020.',
	},
	{
		slug: 'how-to-call-germany-from-us',
		country: 'Germany',
		countryCode: '49',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 49 + area code (drop the 0) + local number',
		example: '011 49 30 12345678',
		quirk:
			'Same trunk-prefix rule as most of Europe: Berlin\'s domestic area code is 030, but the leading 0 is dropped internationally, so it becomes 011 49 30.',
	},
	{
		slug: 'how-to-call-france-from-us',
		country: 'France',
		countryCode: '33',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 33 + local number (drop the leading 0)',
		example: '011 33 1 42 68 53 00',
		quirk:
			'French numbers are written domestically as a 10-digit number starting with 0 (Paris numbers start 01); drop that 0 when dialing from the US, leaving a 9-digit number after +33.',
	},
	{
		slug: 'how-to-call-italy-from-us',
		country: 'Italy',
		countryCode: '39',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 39 + full number, INCLUDING the leading 0 for landlines',
		example: '011 39 06 6982 (Vatican City landline)',
		quirk:
			"Italy is the exception to the leading-zero rule nearly every other country follows: Italian landline numbers keep their leading 0 even when dialed from abroad (Rome is 06, Milan is 02), because Italy's phone system treats the 0 as part of the subscriber number, not a trunk prefix. Mobile numbers, which start with 3, never had a leading 0 to begin with. Dropping the 0 out of habit is the single most common reason US-to-Italy landline calls fail to connect.",
	},
	{
		slug: 'how-to-call-japan-from-us',
		country: 'Japan',
		countryCode: '81',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 81 + area code (drop the 0) + local number',
		example: '011 81 3 1234 5678',
		quirk:
			'Tokyo\'s domestic area code is 03; the 0 is a trunk prefix dropped internationally, leaving 011 81 3.',
	},
	{
		slug: 'how-to-call-india-from-us',
		country: 'India',
		countryCode: '91',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 91 + 10-digit number (drop the leading 0)',
		example: '011 91 98765 43210',
		quirk:
			'The 0 in front of an Indian STD (long-distance) code or mobile number is a domestic dialing cue, not part of the number itself -- international callers skip it and dial the 10 digits straight after +91.',
	},
	{
		slug: 'how-to-call-philippines-from-usa',
		country: 'Philippines',
		countryCode: '63',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 63 + area/mobile code (drop the 0) + local number',
		example: '011 63 917 123 4567',
		quirk:
			'Philippine mobile numbers are written domestically starting with 0 (e.g. 0917...); drop that 0 when dialing from the US, same trunk-prefix rule as landline area codes like Manila\'s 02.',
	},
	{
		slug: 'how-to-call-australia-from-us',
		country: 'Australia',
		countryCode: '61',
		exitCode: '011',
		plusWorks: true,
		format: '011 + 61 + area code (drop the 0) + local number',
		example: '011 61 2 9374 4000',
		quirk:
			"Sydney's area code, 02, covers the whole Central East region -- the ACT and most of New South Wales, plus a small slice of Victoria -- but not every NSW address: a handful of border areas, like Broken Hill, fall under a different region's code instead. Drop the 0 when dialing from the US, leaving 011 61 2. Australian mobile numbers (04xx) follow the same rule -- drop the 0, keep the rest.",
	},
];

const bySlug = new Map(dialingGuides.map((g) => [g.slug, g]));

export function getDialingGuide(slug: string): DialingGuide | undefined {
	return bySlug.get(slug);
}
