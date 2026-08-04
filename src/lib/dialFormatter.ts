/**
 * Turns a user-typed local phone number into a dialable international
 * number, using the per-country rules already documented (in prose) in
 * `internationalDialing.ts`'s `quirk` field.
 *
 * This is deliberately NOT one generic "strip the leading 0" function
 * applied to all 10 countries -- that would be wrong for at least three of
 * them:
 *   - Mexico: no leading-0 trunk prefix to strip at all. The quirk is that
 *     *old* guides add an obsolete 01/044/045 prefix; those get stripped
 *     if present, but a plain 10-digit number needs no transformation.
 *   - Canada: shares the North American Numbering Plan with the US. There
 *     is no exit code and no leading zero to drop -- it's just
 *     1 + area code + 7-digit number, same as a US long-distance call.
 *   - Italy: the ONE country in this list that keeps its leading 0 for
 *     landlines when dialed internationally. Mobile numbers (which start
 *     with 3) never had a leading 0 to begin with, so they pass through
 *     unchanged either way.
 * The other seven (UK, Germany, France, Japan, India, Philippines,
 * Australia) do follow a "drop the domestic trunk 0" rule, but each has
 * its own expected national-number length used to sanity-check the input
 * -- see the per-country cases below.
 */

import type { DialingGuide } from './internationalDialing';

export interface DialFormatResult {
	/** Full number dialable using the exit code (e.g. "011 44 20 7946 0958"). Empty if the input couldn't be confidently formatted. */
	exitCodeFormat: string;
	/** Full number using "+" instead of the exit code, when the country supports it. Empty if not applicable or not confidently formatted. */
	plusFormat: string;
	/** Set when the input looks malformed (wrong digit count, empty, non-numeric). When set, the formats above are left empty rather than guessing. */
	warning?: string;
}

function stripNonDigits(input: string): string {
	return input.replace(/\D/g, '');
}

function buildResult(guide: DialingGuide, digits: string, warning?: string): DialFormatResult {
	if (warning) {
		// Never hand back a "complete" looking number we're not confident in --
		// show the warning instead of a silently-wrong dialable string.
		return { exitCodeFormat: '', plusFormat: '', warning };
	}
	const exitPrefix = guide.exitCode && guide.exitCode !== '(none)' ? `${guide.exitCode} ` : '';
	const exitCodeFormat = `${exitPrefix}${guide.countryCode} ${digits}`.trim();
	const plusFormat = guide.plusWorks ? `+${guide.countryCode} ${digits}` : '';
	return { exitCodeFormat, plusFormat };
}

/**
 * Formats a user-entered local number into a dialable international number
 * for the given country's DialingGuide. Pure function, no DOM/IO.
 */
export function formatForDialing(localNumber: string, guide: DialingGuide): DialFormatResult {
	const raw = stripNonDigits(localNumber);

	if (raw.length === 0) {
		return {
			exitCodeFormat: '',
			plusFormat: '',
			warning: 'Enter your local number above (digits only -- spaces, dashes, and parentheses are fine).',
		};
	}

	let digits = raw;

	switch (guide.countryCode) {
		case '52': {
			// Mexico: 2019 reform removed the old 01 (domestic long-distance) and
			// 044/045 (mobile) prefixes. Every number is now a plain 10-digit
			// number. Strip an obsolete prefix if someone typed one from an old guide.
			if (digits.length === 13 && (digits.startsWith('044') || digits.startsWith('045'))) {
				digits = digits.slice(3);
			} else if (digits.length === 12 && digits.startsWith('01')) {
				digits = digits.slice(2);
			}
			if (digits.length !== 10) {
				return buildResult(
					guide,
					digits,
					`Mexican numbers are 10 digits since the 2019 dialing-plan reform, with no 01/044/045 prefix needed. That input has ${digits.length} digit${digits.length === 1 ? '' : 's'} after removing any legacy prefix -- double-check it.`,
				);
			}
			break;
		}
		case '1': {
			// Canada: same North American Numbering Plan as the US -- no exit
			// code, no leading zero. Just 3-digit area code + 7-digit number.
			if (digits.length === 11 && digits.startsWith('1')) {
				digits = digits.slice(1);
			}
			if (digits.length !== 10) {
				return buildResult(
					guide,
					digits,
					`Canadian numbers need a 3-digit area code plus a 7-digit number (10 digits total). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '39': {
			// Italy: the exception -- landline numbers KEEP their leading 0
			// when dialed internationally (it's part of the subscriber number,
			// not a trunk prefix). Mobile numbers start with 3 and never had a
			// leading 0. Either way, no digit gets stripped here.
			if (digits.length < 6 || digits.length > 11) {
				return buildResult(
					guide,
					digits,
					`That doesn't look like a complete Italian number (roughly 6-11 digits including the area code, and landline numbers keep their leading 0). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '44': {
			// UK: domestic numbers are written with a leading trunk 0
			// (London's area code is "020"); drop it internationally. UK
			// national numbers are a fixed 10 digits without that 0.
			if (digits.startsWith('0')) digits = digits.slice(1);
			if (digits.length !== 10) {
				return buildResult(
					guide,
					digits,
					`UK numbers are 10 digits once the leading trunk 0 is dropped (e.g. London's "020" becomes "20"). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '49': {
			// Germany: same trunk-0 rule as the UK, but German area codes and
			// subscriber numbers vary more in length, so only a loose sanity
			// range applies rather than one fixed digit count.
			if (digits.startsWith('0')) digits = digits.slice(1);
			if (digits.length < 4 || digits.length > 11) {
				return buildResult(
					guide,
					digits,
					`That doesn't look like a complete German number once the leading trunk 0 is dropped (expected roughly 4-11 digits). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '33': {
			// France: domestic numbers are a fixed 10 digits starting with 0
			// (Paris numbers start "01"); drop that 0, leaving 9 digits.
			if (digits.startsWith('0')) digits = digits.slice(1);
			if (digits.length !== 9) {
				return buildResult(
					guide,
					digits,
					`French numbers are 9 digits once the leading 0 is dropped (e.g. Paris's "01" becomes "1"). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '81': {
			// Japan: same trunk-0 rule. Landline national numbers are 9 digits
			// after the 0 is dropped (e.g. Tokyo's 03 area code); mobile
			// numbers are 10 (e.g. 090-xxxx-xxxx).
			if (digits.startsWith('0')) digits = digits.slice(1);
			if (digits.length !== 9 && digits.length !== 10) {
				return buildResult(
					guide,
					digits,
					`Japanese numbers are 9 digits (landline) or 10 digits (mobile) once the leading trunk 0 is dropped. That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '91': {
			// India: the leading 0 in front of an STD code or mobile number is
			// a domestic dialing cue, not part of the number -- drop it if
			// present, but plenty of numbers (esp. mobiles) are already
			// written as a plain 10-digit number with no leading 0 at all.
			if (digits.length === 11 && digits.startsWith('0')) {
				digits = digits.slice(1);
			}
			if (digits.length !== 10) {
				return buildResult(
					guide,
					digits,
					`Indian numbers are 10 digits (the leading 0 in front of an STD code or mobile number, if present, isn't part of the number). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '63': {
			// Philippines: same trunk-0 rule as the UK -- mobile numbers are
			// domestically written starting with 0 (e.g. "0917..."); drop it.
			if (digits.startsWith('0')) digits = digits.slice(1);
			if (digits.length !== 10) {
				return buildResult(
					guide,
					digits,
					`Philippine numbers are 10 digits once the leading trunk 0 is dropped (e.g. mobile "0917..." becomes "917..."). That input has ${digits.length}.`,
				);
			}
			break;
		}
		case '61': {
			// Australia: same trunk-0 rule for both landline area codes (e.g.
			// Sydney's "02") and mobile numbers ("04xx..."); national numbers
			// are a fixed 9 digits after the 0 is dropped.
			if (digits.startsWith('0')) digits = digits.slice(1);
			if (digits.length !== 9) {
				return buildResult(
					guide,
					digits,
					`Australian numbers are 9 digits once the leading trunk 0 is dropped (e.g. Sydney's "02" becomes "2"). That input has ${digits.length}.`,
				);
			}
			break;
		}
		default: {
			return buildResult(
				guide,
				digits,
				`No dialing-format rule is configured for ${guide.country} yet.`,
			);
		}
	}

	return buildResult(guide, digits);
}
