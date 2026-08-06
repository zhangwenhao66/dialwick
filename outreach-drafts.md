# DialWick outreach drafts (podcast guest pitches)

Research date: 2026-08-04, first-ever podcast guest-pitch pass for DialWick. Drafts humanized via the `humanizer` skill and each sent through an independent reviewer agent before send/no-send decisions. See `podcast-pitch-log.md` for the full log of podcasts checked and review outcomes.

---

## Pitch 1 — The MapScaping Podcast

- Show: https://mapscaping.com/podcast/ (also on Podbean, Apple Podcasts, Spotify)
- Host: Daniel O'Donohue
- Cadence: weekly-ish, episodes roughly every 5-8 days
- Contact used: info@MapScaping.com (found via search; guest-guidelines page at mapscaping.com/guest/ describes what makes a good guest but has no separate application form)
- Recent episode referenced: "Cloud Native for the Rest of Us" with Nissim Lebovits, city planner and geospatial data scientist, published July 21, 2026
- Fit note: this is a plausible-but-not-perfect fit. MapScaping's usual guests are GIS/geospatial industry practitioners and founders; DialWick is a solo-built reference site rather than a GIS company. The pitch is honest about that and leans on the show's explicit "digital geography" scope and its history of featuring solo builders' data-engineering stories.

**Email:**

Subject: Guest idea: treating US area code data like a testable dataset, not a lookup table

Hi Daniel,

The Nissim Lebovits episode on cloud native for small teams with no budget stuck with me, because it's basically the constraint I built under. I run DialWick, a reference site for US/Canada area codes, ZIP codes, and international dialing codes. Instead of copying a table off Wikipedia once and calling it done, I treated the whole thing as a dataset that has to stay correct: 800 NANP area codes, every 3-digit code from 200 to 999, sourced from Wikipedia's numbering plan records and cross-checked against GeoNames' postal data. I wrote an automated test suite that spot-checks specific facts independently of how the data was scraped, things like confirming 213 really did split into 310, 323, and 818 before 738 overlaid it, or that 907 has never split since 1957.

Most "area code lookup" sites are static and go stale the moment a split or overlay happens (Colorado's getting its sixth area code, 748, this year). I think consumer-facing geographic reference data has the same staleness and provenance problems as any other geospatial dataset, just with almost nobody treating it that way. I'd like to talk through what building those regression tests taught me about GeoNames' data quality versus Wikipedia's, and where each one actually gets it wrong.

Happy to do a pre-interview whenever works. Thanks for considering it.

Owen Zhang
contact@dialwick.com

**Independent review outcome:** see podcast-pitch-log.md

---

## Pitch 2 — Easy Prey Podcast

- Show: https://www.easyprey.com/
- Host: Chris Parker (founder of WhatIsMyIPAddress.com)
- Cadence: active, weekly or near-weekly (confirmed episode dated July 2, 2026, with newer-looking episodes listed above it on the site)
- Contact used: contact form at https://www.easyprey.com/contact/ (no direct guest-pitch email found; sent to main account per site process below)
- Recent episode referenced: "Google Maps Scams" with Mike Blumenthal, co-founder/analyst at Near Media, published July 2, 2026
- Fit note: good fit. Past guests include independent analysts and researchers of specific scam vectors (not only cybersecurity-vendor executives), which matches an independent reference-site operator explaining a narrow, well-documented scam pattern.

**Email:**

Subject: Guest idea: the "scam area code" myth, and the one real exception

Hi Chris,

The Mike Blumenthal episode on Google Maps scams was a good reminder that most scam-adjacent internet questions have a more specific real answer than the panicked version people search for. I run DialWick, a reference site for US/Canada area codes and ZIP codes. One of the most common questions I see people ask is some version of "is area code X a scam number," and the honest answer, backed by the FCC and FTC's own guidance, is that domestic scammers don't have their own area codes at all. They fake yours, through neighbor spoofing, specifically because a familiar area code makes an unknown call feel trustworthy.

There is exactly one real, documented exception, and it's a good one: eight Caribbean nations and territories are full members of the North American Numbering Plan, so their numbers look exactly like a normal US area code with no indication they're international. That's what makes the "one ring" (Wangiri) scam work. A call rings once from one of those ten codes, curiosity drives the callback, and the callback connects to a premium international line. I'd like to come on and walk through that distinction, plus what the caller ID spoofing data actually shows about why "which area codes are dangerous" is the wrong question to begin with.

Let me know if it'd be a fit. Happy to share more background first.

Owen Zhang
contact@dialwick.com

**Independent review outcome:** see podcast-pitch-log.md

---

## Pitch 3 — New Jersey State Library, "Telephone & People Directories" ready-reference guide (2026-08-06, resource-suggestion email, not a guest post)

- Page: https://libguides.njstatelib.org/ready_reference/telephone (last updated Jul 6, 2026, actively maintained)
- Contact used: hhusted@njstatelib.org (the "Report a problem" mailto link on the guide, associated with a "H. Husted" byline on njstatelib.org's own site — full name not confirmed, so the email is addressed generically rather than guessing)
- Why this page: it already links out to All Area Codes Search (allareacodes.com), AnyWho, and Whitepages for area code/directory lookups — a direct topical match, and a genuinely curated academic reference guide rather than a paid directory or guest-post farm.
- Fact-checked against `src/data/guides.ts` and the live site: the 213/310/323/818/738 area code split-and-overlay example matches the `california-area-codes` guide content; ZIP code county breakdowns and USPS/Census sourcing match `src/pages/zip-codes/index.astro`; international dialing guides (Mexico, Philippines, US country code) match `src/data/guides.ts`.

**Email:**

Subject: Resource suggestion for your Telephone & People Directories guide

Hi,

I was reading through your Telephone & People Directories ready-reference guide and noticed it links out to All Area Codes Search, AnyWho, and Whitepages for area code and directory lookups. I run a similar reference site, DialWick, and wanted to flag it in case it's useful to add alongside those.

It covers every US and Canadian area code, using the North American Numbering Plan Administrator's assignment history to show which older code each one split or was overlaid from, and when. For example, 213 split into 310, 323, and 818 before 738 overlaid it. There are also city-level ZIP code lookups with county breakdowns from USPS and Census data, plus international dialing guides based on current FCC/ITU-T conventions. Each page links its primary source at the bottom.

Site: https://dialwick.com/
Area codes: https://dialwick.com/area-codes/
ZIP codes: https://dialwick.com/zip-codes/

No obligation either way, just thought it might round out the directory section of that guide. Happy to answer any questions about sourcing.

Thanks for maintaining the guide,
Owen Zhang
contact@dialwick.com

**Independent review outcome: "can send"** — no duplicate-outreach risk (empty Gmail search for hhusted@njstatelib.org and njstatelib.org, no prior JSON record), every factual claim verified against `src/data/guides.ts` (213/310/323/818/738 area code split history, ZIP county-breakdown sourcing, international dialing FCC/ITU-T references), target page confirmed real via curl with all three cited resources (All Area Codes Search/AnyWho/Whitepages) genuinely present, tone read as a genuine one-off note not a template, no AI-writing tells found. **Sent 2026-08-06** to hhusted@njstatelib.org, Gmail message ID 19fd724590af47cb.
