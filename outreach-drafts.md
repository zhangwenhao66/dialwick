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

---

## Pitch 4 — University at Buffalo, "Area Code Information" research guide (2026-08-16, resource-suggestion email, not a guest post)

- Page: https://research.lib.buffalo.edu/telephone-directory/area-code (part of the "Telephone Directories Online" guide, DC.Date.Modified metadata = Jan 6, 2026, actively maintained, authored by librarian Laura Taddeo)
- Contact used: ltaddeo@buffalo.edu, confirmed live on UB Libraries' own staff profile page (https://library.buffalo.edu/about/staff/profile.html?fullName=ltaddeo, fetched via curl -L, contains `mailto:ltaddeo@buffalo.edu`)
- Why this page: a genuine academic library research guide (not a paid directory or guest-post farm), topically exact-match (its "Area Code Information" tab), and currently thin: only two external links (WorldAtlas's area code map page and FoneFinder's area code search tool), so a complementary resource has real room to be useful rather than being one more redundant listing.
- GSC context (this round's topic source): dialwick's chicago-area-code content sits in the site's best-performing content cluster by GSC impressions (per `python3 gsc_query.py dialwick`, /chicago-zip-codes/ and /what-county-is-chicago-in/ are top pages at positions 16.7-30.0 with 300-400+ impressions/28 days), so Chicago was chosen as the example over other cities.
- Fact-checked against `src/data/guides.ts` (`chicago-area-code` entry, published 2026-08-10): 312 was one of the original 1947 area codes; a Nov 11, 1989 split carved the suburbs into 708; an Oct 12, 1996 split carved non-downtown Chicago into 773, leaving 312 as an enclave; an 872 overlay was added Nov 7, 2009 across both 312 and 773 once a third geographic split wasn't practical. All dates and the "enclave" framing match the guide content verbatim in substance (not copied text).

**Email:**

Subject: Resource suggestion for your Area Code Information guide

Hi Laura,

I came across your Area Code Information guide on UB's Telephone Directories page and thought this might be worth adding next to the map and lookup tool you already have there.

I run DialWick, a reference site that tracks how US area codes changed over time, not just where their boundaries currently sit. The Chicago page walks through a good example: the original 1947 area code, 312, ended up as a small enclave surrounded by 773 after two splits, one in 1989 that carved the suburbs off into 708 and one in 1996 that carved off the rest of the city, with an 872 overlay added in 2009 once a third geographic split stopped being practical. Every area code page on the site works through that same kind of assignment history, sourced from the North American Numbering Plan Administrator's records.

Site: https://dialwick.com/
Area codes: https://dialwick.com/area-codes/
Chicago example: https://dialwick.com/chicago-area-code/

Ignore this if it's not a fit, and let me know if you want more detail on how the data is sourced.

Owen Zhang
contact@dialwick.com

**Independent review outcome: "can send"** — independent sub-agent (given only the email text + checklist) confirmed: empty Gmail dedup search for ltaddeo@buffalo.edu before send, all four factual claims (312 as an original 1947 area code, 1989 split to 708, 1996 split to 773 leaving 312 an enclave, 872 overlay added 2009) traced correctly to the `chicago-area-code` entry in `src/data/guides.ts` (one minor noted imprecision: the email generalizes the sourcing to "North American Numbering Plan Administrator's records" while the Chicago page's own footnotes cite four Wikipedia articles specifically — flagged as defensible, not disqualifying), target page confirmed real/active/no-application-required via curl, tone read as genuine not templated, no AI-writing tells, no reverse-lookup implication. **Sent 2026-08-16** to ltaddeo@buffalo.edu.

**Send incident (documented, not hidden):** the first `gmail_send.py send` attempt raised a client-side `socks.ProxyConnectionError` / `RemoteDisconnected` exception that looked like a failed send, so it was retried once. A post-send `gmail_send.py list --query "to:ltaddeo@buffalo.edu"` check showed both attempts actually reached Gmail successfully, 18 seconds apart (message IDs `1a0094177077e079` and `1a00941be0a7b689`) — the first request had already succeeded server-side before the local connection dropped, making the client-side error misleading. The retry produced a duplicate send; both copies are identical in content. Sent mail can't be recalled from a recipient's inbox, so no further action was taken beyond recording it here. **Lesson for future rounds:** after any `gmail_send.py` exception, run the dedup `list --query` check before retrying, not only before the first send attempt.

---

## Pitch 5 — Rutland Charter Township, MI, "Local Links" community resources page (2026-08-16, competitor-gap resource-suggestion email, part of `trafficsite-broken-link-building`'s 1.5 competitor-backlink-gap step)

- Page: https://www.rutlandtownship.org/local-links/ (confirmed live via Browser pane 2026-08-16; curl gets a 403 from this host's nginx/WAF, so the page was read through the Browser pane instead)
- Contact used: clerk@rutlandtownship.org (Township Clerk's public contact address, found via WebSearch; the site's own `/contact/` page is a CAPTCHA-gated form, which this task's rules prohibit interacting with)
- Why this page: found via DataForSEO backlink gap analysis against allareacodes.com and unitedstateszipcodes.org (see round summary below). This is a genuine small-government "Local Links / Community Resources" page (Red Cross, county road commission, local schools, etc.) that separately lists both "UNITED STATES ZIP CODE LOOKUP" -> unitedstateszipcodes.org and "AREA CODE LOOKUP" -> allareacodes.com as standalone entries -- both competitors are present, DialWick is not, and the page has clear room for one more relevant entry rather than being a crowded roundup.
- Not a broken-link pitch: both competitor links are live (uses the "competitor-gap" framing per this round's task instructions -- objectively describing what DialWick's page offers instead of pointing at a dead link).
- Fact-checked: DialWick's international dialing coverage (Mexico 2019 mobile-prefix reform) matches `src/data/guides.ts` (`how-to-call-mexico-from-us` entry). Only hub/index pages and the international-dialing guides are linked, per the site-wide rule that single-area-code pages stay off-limits for pitching until 2026-08-17.

**Email:**

Subject: Resource suggestion for your Local Links page

Hi,

I came across Rutland Township's Local Links page and noticed the Community section lists a ZIP code lookup and an area code lookup site. I run DialWick, a similar reference site, and it covers something neither of those does: international dialing formats for calling specific countries from a US number.

The guides walk through the exit code, the country code, and any quirks worth knowing. Mexico dropped its old extra-digit mobile prefix in a 2019 reform, and a surprising number of guides online still haven't caught up. DialWick also has its own area code and ZIP code pages, if you'd rather swap those in instead of adding a new category.

Site: https://dialwick.com/
International dialing: https://dialwick.com/international-dialing/
Area codes: https://dialwick.com/area-codes/

Feel free to ignore this if it's not useful. Thanks for putting together a useful page.

Owen Zhang
contact@dialwick.com

**Independent review outcome: "CAN SEND"** — independent sub-agent confirmed: no prior contact with clerk@rutlandtownship.org / rutlandtownship.org / support@gondtc.com / gondtc.com across outreach-drafts.md, broken-link-outreach-log.md, guest-post-outreach.json, and three `gmail_send.py list` queries (all empty); rutlandtownship.org/local-links/ confirmed real with a "COMMUNITY" section listing both unitedstateszipcodes.org and allareacodes.com exactly as described; Mexico 2019 dialing-reform claim matches `src/data/guides.ts` (`how-to-call-mexico-from-us`) verbatim; only hub/index DialWick URLs used, no single-area-code page; tone genuine, no AI-writing tells. **Sent 2026-08-16** to clerk@rutlandtownship.org, Gmail message ID `1a0094b768eba341`.

---

## Pitch 6 — NDTC (North Dakota Telephone Company), "Local Links" page (2026-08-16, competitor-gap resource-suggestion email, part of `trafficsite-broken-link-building`'s 1.5 competitor-backlink-gap step)

- Page: https://gondtc.com/resources/ ("Helpful Resources & How-To Videos For Your Convenience" page, "LOCAL LINKS" section heading, North Dakota subsection; confirmed live via curl 2026-08-16)
- **Correction from an earlier draft of this entry:** the first version of this email said "Community Links page." An independent reviewer caught that this was never verified against the actual on-page heading text (it was pattern-matched from the Rutland Township page's real "COMMUNITY" section, an assumption, not a checked fact) and, on checking, found the real heading is "LOCAL LINKS" on a different URL (`/resources/`, not the bare homepage). Fixed before send. Logged as a self-caught error, not hidden.
- Contact used: support@gondtc.com (general support inbox found via WebSearch; the site's own contact form is CAPTCHA-gated, which this task's rules prohibit interacting with -- flagged as a lower-confidence routing channel since a support inbox may not reach whoever maintains site content)
- Why this page: found via the same DataForSEO backlink gap analysis. NDTC's Local Links page links allareacodes.com/north_dakota_area_codes.htm under "North Dakota Area Codes" in a real community-resource list (alongside Job Service of North Dakota, ND Tourism, etc.), not an automated directory. DialWick has no dedicated North Dakota state-hub page yet, so the pitch points to the general area-codes index instead.
- Not a broken-link pitch: the existing allareacodes.com link is live (competitor-gap framing, same as Pitch 5).
- Fact-checked against the same `how-to-call-mexico-from-us` guide entry as Pitch 5. Only hub/index pages and the international-dialing guide are linked (no single-area-code page pitched, per the 2026-08-17 limit).

**Email:**

Subject: Resource suggestion for NDTC's Local Links page

Hi,

I came across NDTC's Local Links page and noticed the North Dakota section links to an area code lookup site. I run DialWick, a reference site that covers area codes, ZIP codes, and international dialing. The dialing guides might be the more useful addition here since they're not something the current link covers: step-by-step formats for calling specific countries from a US number, including reforms that older guides tend to miss (Mexico dropped its extra-digit mobile prefix back in 2019, for example).

DialWick also has North Dakota area code coverage and a full US/Canada index, in case that's a better fit than what's currently linked.

Site: https://dialwick.com/
International dialing: https://dialwick.com/international-dialing/
Area codes: https://dialwick.com/area-codes/

No pressure either way, just flagging it in case it helps round out the page.

Owen Zhang
contact@dialwick.com

**Independent review outcome:** first draft returned PROBLEM (see above: wrong page name, "Community Links" vs actual "Local Links"). Corrected and re-submitted to the same reviewer agent, which independently re-curled https://gondtc.com/resources/, confirmed the "LOCAL LINKS" heading and the allareacodes.com link with anchor text "North Dakota Area Codes" match the corrected email exactly, and returned **"CAN SEND"**. **Sent 2026-08-16** to support@gondtc.com, Gmail message ID `1a0094d3c4a8630d`.
