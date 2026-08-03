#!/usr/bin/env python3
"""Build src/lib/data/zipCounty.json from GeoNames' US postal code export.

Why GeoNames and not USPS directly: USPS does not publish a downloadable
ZIP<->city<->county dataset (its public "ZIP Code Lookup" is a JS form, not
an API). GeoNames' US postal code file is compiled from USPS/Census public
data and distributed under CC BY 4.0 -- the same free-public-data pattern
used elsewhere in this matrix (e.g. FactCrumbs' Wikipedia/Wikidata sourcing).
Every row traces back to a real USPS ZIP; this script does not invent or
interpolate any ZIP<->county mapping.

This script is NOT run at build time. Re-run manually to refresh the
dataset; commit the regenerated zipCounty.json as its own change and
re-run `npm test` -- tests/zipCodes.test.ts spot-checks known city/county
pairs (e.g. Chicago IL -> Cook County) and will fail if extraction breaks.

Usage: python3 scripts/extract-zip-county.py
"""

import json
import sys
import urllib.request
import zipfile
from io import BytesIO
from pathlib import Path

SOURCE_URL = "https://download.geonames.org/export/zip/US.zip"
OUT_PATH = Path(__file__).resolve().parent.parent / "src" / "lib" / "data" / "zipCounty.json"
RETRIEVED_DATE = "2026-08-03"

# GeoNames US.txt columns (tab-separated, no header row):
# country, postal_code, place_name, admin_name1(state), admin_code1(state abbr),
# admin_name2(county), admin_code2, admin_name3, admin_code3, lat, lon, accuracy


def main() -> None:
	req = urllib.request.Request(SOURCE_URL, headers={"User-Agent": "dialwick-data-build/1.0"})
	with urllib.request.urlopen(req, timeout=60) as resp:
		blob = resp.read()

	with zipfile.ZipFile(BytesIO(blob)) as zf:
		raw = zf.read("US.txt").decode("utf-8")

	rows = []
	seen_zips_with_place = set()
	for line in raw.splitlines():
		if not line.strip():
			continue
		parts = line.split("\t")
		if len(parts) < 6:
			continue
		_, zip_code, place, state, state_code, county = parts[0:6]
		key = (zip_code, place)
		if key in seen_zips_with_place:
			continue
		seen_zips_with_place.add(key)
		rows.append([zip_code, place, state, state_code, county])

	if len(rows) < 40000:
		print(f"ERROR: expected >=40000 US ZIP rows, got {len(rows)}. Source may be truncated -- "
			"aborting.", file=sys.stderr)
		sys.exit(1)

	out = {
		"source": SOURCE_URL,
		"license": "CC BY 4.0 (GeoNames.org), compiled from USPS/Census public data",
		"retrieved": RETRIEVED_DATE,
		"columns": ["zip", "place", "state", "stateCode", "county"],
		"rowCount": len(rows),
		"rows": rows,
	}

	OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
	OUT_PATH.write_text(json.dumps(out, ensure_ascii=False), encoding="utf-8")
	print(f"Wrote {len(rows)} ZIP/county rows to {OUT_PATH}")


if __name__ == "__main__":
	main()
