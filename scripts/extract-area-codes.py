#!/usr/bin/env python3
"""Build src/lib/data/areaCodesRaw.json from Wikipedia's "List of North
American Numbering Plan area codes".

Why Wikipedia and not NANPA's own site: NANPA (nationalnanpa.com) publishes
assignment data as PDFs/CSVs behind forms not amenable to scripted access.
Wikipedia's list is a maintained secondary compilation of the same NANPA
assignment records (each area code's individual Wikipedia article cites
NANPA / FCC dockets), organized as a single scrapeable table -- the same
kind of "official reference table, machine-extracted" pattern CalcBadger
uses for its SAT score table (see calcbadger/src/lib/satScore.ts).

This script is NOT run at build time. Re-run it manually only when the
area code registry needs refreshing (new area codes activate every year or
two); commit the regenerated areaCodesRaw.json as its own change so the
diff is reviewable, and re-run `npm test` afterwards -- tests/areaCodes.test.ts
spot-checks specific rows against independently-verified facts and will
fail loudly if extraction breaks.

Requires: pip install beautifulsoup4 lxml

Usage: python3 scripts/extract-area-codes.py
"""

import json
import re
import sys
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

SOURCE_URL = "https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes"
OUT_PATH = Path(__file__).resolve().parent.parent / "src" / "lib" / "data" / "areaCodesRaw.json"
RETRIEVED_DATE = "2026-08-03"


def fetch_html() -> str:
	req = urllib.request.Request(SOURCE_URL, headers={"User-Agent": "dialwick-data-build/1.0"})
	with urllib.request.urlopen(req, timeout=30) as resp:
		return resp.read().decode("utf-8")


def parse_group_table(table) -> list[dict]:
	out = []
	rows = table.find_all("tr")
	for r in rows[1:]:
		cells = r.find_all("td")
		if len(cells) < 2:
			continue
		name = cells[0].get_text(" ", strip=True)
		name = re.sub(r"\s*\(\s*list\s*\)\s*$", "", name, flags=re.IGNORECASE).strip()
		codes_raw = cells[1].get_text(" ", strip=True)
		codes = [c.strip() for c in codes_raw.split(",") if c.strip()]
		out.append({"name": name, "codes": codes})
	return out


def main() -> None:
	html = fetch_html()
	soup = BeautifulSoup(html, "lxml")
	tables = soup.find_all("table", class_="wikitable")
	if len(tables) < 11:
		print(f"ERROR: expected at least 11 wikitables, found {len(tables)}. Page structure "
			"may have changed -- inspect manually before trusting output.", file=sys.stderr)
		sys.exit(1)

	# Tables 0-7: the full 200-999 code registry (Code / Location or use / Date established / Notes).
	# Some rows cover an unassigned *range* (e.g. "285-287", en-dash or hyphen)
	# rather than a single code -- reserved/available-for-future-assignment
	# blocks that Wikipedia collapses into one row. Expand each into one
	# record per code so every 3-digit code 200-999 is individually
	# lookupable; the expanded records all carry the identical
	# location/notes text from the source row (no data invented, just
	# distributed across the block it describes).
	records = []
	for t in tables[0:8]:
		rows = t.find_all("tr")
		for r in rows[1:]:
			cells = r.find_all("td")
			if len(cells) < 3:
				continue
			code_cell = cells[0].get_text(strip=True)
			location = cells[1].get_text(" ", strip=True)
			date = cells[2].get_text(strip=True) if len(cells) > 2 else ""
			notes = cells[3].get_text(" ", strip=True) if len(cells) > 3 else ""

			range_match = re.match(r"^(\d{3})[–\-](\d{3})$", code_cell)
			if range_match:
				lo, hi = int(range_match.group(1)), int(range_match.group(2))
				codes = [str(n) for n in range(lo, hi + 1)]
			elif re.match(r"^\d{3}(,\d{3})+$", code_cell):
				codes = code_cell.split(",")
			else:
				codes = [code_cell]

			for code in codes:
				records.append({"code": code, "location": location, "dateEstablished": date, "notes": notes})

	codes_seen = [r["code"] for r in records]
	if len(codes_seen) != len(set(codes_seen)):
		print("ERROR: duplicate area codes found in extraction -- aborting.", file=sys.stderr)
		sys.exit(1)

	# Table 8: US states -> codes. Table 9: Canadian provinces -> codes. Table 10: NANP member nations -> codes.
	states = parse_group_table(tables[8])
	provinces = parse_group_table(tables[9])
	nations = parse_group_table(tables[10])

	out = {
		"source": SOURCE_URL,
		"license": "CC BY-SA 4.0 (Wikipedia); facts/data are not independently copyrightable",
		"retrieved": RETRIEVED_DATE,
		"recordCount": len(records),
		"records": records,
		"states": states,
		"provinces": provinces,
		"nations": nations,
	}

	OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
	OUT_PATH.write_text(json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
	print(f"Wrote {len(records)} area code records, {len(states)} states, {len(provinces)} provinces, "
		f"{len(nations)} nations to {OUT_PATH}")


if __name__ == "__main__":
	main()
