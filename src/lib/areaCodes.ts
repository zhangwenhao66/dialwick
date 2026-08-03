/**
 * NANP area code registry, built from src/lib/data/areaCodesRaw.json (see
 * scripts/extract-area-codes.py for provenance -- extracted from Wikipedia's
 * "List of North American Numbering Plan area codes", itself compiled from
 * NANPA/FCC assignment records). Do not hand-edit areaCodesRaw.json; re-run
 * the extraction script and let tests/areaCodes.test.ts catch regressions.
 */
import raw from './data/areaCodesRaw.json';

export type AreaCodeKind =
	| 'geographic'
	| 'toll-free'
	| 'premium-rate'
	| 'reserved'
	| 'special-use'
	| 'personal-communications';

export interface AreaCodeRecord {
	code: string;
	/** Raw "Numbering plan area or use" cell -- state/province/territory + city detail, or a non-geographic use description. */
	location: string;
	/** Year or full date the code went into service; empty string if never assigned. */
	dateEstablished: string;
	/** Split/overlay history and other notes, verbatim from the source. */
	notes: string;
	kind: AreaCodeKind;
}

export interface RegionGroup {
	name: string;
	codes: string[];
}

function classify(location: string): AreaCodeKind {
	const l = location.toLowerCase();
	if (l.includes('toll-free')) return 'toll-free';
	if (l.includes('premium-rate')) return 'premium-rate';
	if (l.includes('personal communications')) return 'personal-communications';
	if (l.includes('not assignable') || l.includes('n11 code')) return 'special-use';
	if (l.includes('not in use') || l.includes('reserved') || l.includes('not assigned')) return 'reserved';
	return 'geographic';
}

export const areaCodes: AreaCodeRecord[] = raw.records.map((r) => ({
	...r,
	kind: classify(r.location),
}));

const byCode = new Map(areaCodes.map((r) => [r.code, r]));

/** Look up a single area code's registry record. Returns undefined for out-of-range or unassigned codes. */
export function getAreaCode(code: string): AreaCodeRecord | undefined {
	return byCode.get(code);
}

/** Codes actually assigned to a geographic numbering plan area (excludes toll-free/premium/reserved/special-use). */
export const geographicAreaCodes: AreaCodeRecord[] = areaCodes.filter((r) => r.kind === 'geographic');

export const stateAreaCodes: RegionGroup[] = raw.states;
export const provinceAreaCodes: RegionGroup[] = raw.provinces;
export const nationAreaCodes: RegionGroup[] = raw.nations;

/** Case-insensitive lookup across US states, Canadian provinces, and other NANP member nations/territories. */
export function getCodesForRegion(name: string): string[] | undefined {
	const target = name.trim().toLowerCase();
	const all = [...stateAreaCodes, ...provinceAreaCodes, ...nationAreaCodes];
	return all.find((g) => g.name.toLowerCase() === target)?.codes;
}

/**
 * Parses the "notes" field's overlay/split chain into structured events,
 * e.g. "1990: split to create 908 1997: split to create 973 2001: overlaid
 * by 551" -> [{year:1990, kind:'split', code:'908'}, ...]. Best-effort: the
 * source notes are free text, so this only extracts the "<year>: <split to
 * create|overlaid by> <code>" pattern and silently skips anything else.
 * Use for building "born from area code X in <year>" narrative content --
 * always cross-check the raw `notes` string too before publishing a claim.
 */
export interface OverlayEvent {
	year: number;
	kind: 'split' | 'overlay';
	code: string;
}

export function parseOverlayEvents(notes: string): OverlayEvent[] {
	const events: OverlayEvent[] = [];
	const re = /(\d{4}):\s*(split to create|overlaid by)\s*(\d{3})/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(notes)) !== null) {
		events.push({
			year: Number(m[1]),
			kind: m[2] === 'split to create' ? 'split' : 'overlay',
			code: m[3],
		});
	}
	return events;
}
