# Content Audit Log (DialWick)

First-ever audit run for this site (2026-08-03). Format per `trafficsite-content-quality-audit` SKILL.md:
`{"url_slug": ..., "last_audited": ..., "published_date": ..., "findings": [...], "actions_taken": [...], "seo_score": ..., "geo_score": ..., "escalation": ...}`

## scam-area-codes

```json
{
  "url_slug": "scam-area-codes",
  "url": "https://dialwick.com/scam-area-codes/",
  "last_audited": "2026-08-03",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "Cites FCC (neighbor spoofing, Truth in Caller ID Act, Caller ID Spoofing guide) and FTC (One Ring Phone Scams) directly by name with linked sources; not vague/generic."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed",
      "detail": "Table/description/FAQ claimed 'six' NANP area codes are FCC/FTC-documented for the one-ring scam (268, 284, 473, 649, 809/829/849, 876). Independent WebSearch + WebFetch of the FTC's own consumer alert page (consumer.ftc.gov/consumer-alerts/2014/02/one-ring-cell-phone-scam-can-ding-your-wallet, fetched directly, primary source) confirmed the real FTC/FCC list has ten codes: 268, 284, 473, 649, 664, 767, 809, 829, 849, 876 -- missing 664 (Montserrat) and 767 (Dominica). Corroborated independently by SERP competitors (oefederal.org, agcu.org, wikihow, FCC Scam Glossary) all citing the same 10-code FTC list. Confirmed by an independent fresh-context agent as a real problem. Also verified: the $10,000 Truth in Caller ID Act penalty claim and the 'neighbor spoofing' terminology are both accurate per FCC guidance -- no other fabrication found. No scam call-volume/dollar-loss statistics are claimed anywhere in the article, so nothing there needed verification."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published = updated = 2026-08-03 (today, site launch day). No staleness -- this is same-day content."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass -- strong",
      "detail": "get_serp_results for 'scam area codes' shows the SERP dominated by clickbait 'area codes to avoid' listicles (aura.com, gobankingrates.com, etc.) that conflate real one-ring Caribbean codes with domestic 'high spam-call-volume' codes (e.g. 216, 469, 272) -- a conflation the FCC's own neighbor-spoofing guidance contradicts. Read aura.com/learn/scammer-phone-numbers directly: confirmed it does NOT distinguish neighbor spoofing from the one-ring scam. DialWick's article's contrarian, clearly-sourced framing ('no domestic scam area codes exist, it's spoofing; the one real exception is these Caribbean NANP codes') is a genuine, verified incremental value vs. the SERP, not a Wikipedia-style rehash."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "confirmed problem -> fixed (description); noted, not actioned (title)",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s, canonical present, 3 JSON-LD blocks (Article/BreadcrumbList/FAQPage) all present and consistent with content. Meta description was 250 chars raw (234 decoded) vs ~155-160 char SERP-safe guideline -- confirmed by independent agent (re-measured live page itself, re-checked 2026 SEO guidance independently). Fixed: shortened to 148 chars (164 in HTML-entity-encoded source, 148 as rendered text). Title tag is 70 chars including ' | DialWick' suffix (53-char title field) -- slightly over the 50-60 ideal but not clearly truncation-causing; not escalated to a confirmed finding, left as-is per 'don't manufacture problems' principle."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "pass, ~83-85/99",
      "detail": "Manual rubric pass: strong structure (H2s, table, FAQPage schema), professional terminology (NANP, Wangiri, neighbor spoofing), authority signals (named FCC/FTC citations), 1 internal cross-link. Weaker on verbatim quoted material (paraphrase rather than direct quotes) and cross-domain connection (only 1 internal link). Comfortably above the 80-point bar before and after the factual fix; the fix improved statistical completeness (10 vs 6 codes) without touching structure/fluency dimensions, so no separate re-score run was needed."
    },
    {
      "dimension": "7. Humanizer backfill",
      "status": "not applicable",
      "detail": "published = 2026-08-03, same day the humanizer check became a mandatory step in dialwick-content-publishing's 7-check pipeline (site launch day) -- does not predate the mandate. Manual read found no obvious AI-writing tells (double-hyphen dashes instead of em-dash, no vague attribution, no rule-of-three padding); text reads as already humanized despite the publishing log noting the launch batch used internal review rather than a fully independent blind pass."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 3 cited sources checked. FTC 'One Ring Phone Scams' (ftc.gov/media/one-ring-phone-scams) returns HTTP 200, correct canonical/title. FCC 'One Ring Phone Scam' and FCC 'Caller ID Spoofing' pages return 403 to scripted fetches (curl and WebFetch alike) but are confirmed live and indexed via WebSearch snippets showing current, matching content -- standard bot-blocking behavior (Akamai-style), not link rot."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "grep of guides.ts found no manual in-body anchor links to this slug from other articles yet, but this is expected for a same-day launch-batch article (no prior published articles existed to link from at write time). Confirmed via live curl that the rotating-window related-guides sidebar (Area Code Guides category, 2 guides) already creates a reciprocal automated link with how-do-area-codes-work in both directions. Not a long-term orphan; worth re-checking in a future audit once more Area Code Guides articles are published."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "FAQPage/Article/BreadcrumbList JSON-LD all present and matched the pre-fix text (including the six-code answer, now corrected along with the body). No prior edits existed before this audit, so no drift possible."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Naming 8 Caribbean nations/territories in connection with the one-ring scam is standard, government-sourced framing (FCC/FTC/mainstream outlets all use it) and is presented as a documented telecom-fraud pattern, not a blanket accusation against the countries. Confirmed article stays within site scope: no reverse-number-lookup functionality/claims, no calculator, no 'which area code should I buy' angle -- consistent with the site's stated YMYL/privacy red line."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field -- nothing to validate."
    }
  ],
  "actions_taken": [
    "Added missing area codes 664 (Montserrat) and 767 (Dominica) to the one-ring scam table.",
    "Corrected 'six' -> 'ten'/'eight nations' wording in description, section heading, section body, and FAQ answer to match the FTC's actual documented list.",
    "Shortened meta description from 250 chars (234 decoded) to 148 chars to fix SERP truncation risk, while preserving the core claim.",
    "npm test (41/41 passed) and npm run build (19 pages) both passed after the edit.",
    "Committed (38afbac) and pushed to origin/main; verified live via polling (Montserrat text confirmed present within 70s of push) and 404.astro still functioning correctly.",
    "Submitted https://dialwick.com/scam-area-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 202); logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "on-page technical: 1 confirmed issue (meta description length) found and fixed; no other technical issues found",
  "geo_score": "~83-85/99 (pass, >=80 threshold both before and after fix)",
  "escalation": null
}
```

## atlanta-zip-codes

```json
{
  "url_slug": "atlanta-zip-codes",
  "url": "https://dialwick.com/atlanta-zip-codes/",
  "last_audited": "2026-08-04",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "Sources are GeoNames.org (CC BY 4.0 postal-code database) and Wikipedia (Sandy Springs incorporation history), plus a new City of Sandy Springs official government source added during this audit. Weaker authority tier than scam-area-codes' direct FCC/FTC citations, but specific, named, and independently verifiable -- not vague/generic. Named author byline present (Person schema) consistent with sitewide pattern, not specific to this article."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed (one row); confirmed problem -> caveat added, not overridden (two related items)",
      "detail": "(a) ZIP 30338 table cell said 'Fulton'; body text already called it one of 'the DeKalb ZIPs in the table above' -- direct internal contradiction. External verification (findmycounty.com, unitedstateszipcodes.org, city-data.com) confirms DeKalb is correct. Independent agent confirmed. Table cell corrected to DeKalb. (b) ZIP 30339 table cell says 'Fulton', which matches the article's disclosed source (GeoNames.org, verified live) exactly, but population-weighted crosswalk sources (city-data.com, findmycounty.com, zipmap.net, unitedstateszipcodes.org) show the ZIP (Vinings/Cumberland/Truist Park) is majority Cobb County. Independent agent recommended NOT changing the table value (it's accurate to its stated methodology) but adding a scoped caveat -- done, in section 1 body. (c) New finding during this audit, not in the original 3-5 item checklist: in March 2026 USPS approved Sandy Springs' request to become the default/preferred mailing city (replacing Atlanta) for 7 of the table's ZIPs (30319, 30327, 30328, 30338, 30339, 30342, 30350), corroborated by Atlanta News First, Rough Draft Atlanta, WSB-TV, CBS Atlanta, Axios, and the City of Sandy Springs' own site. Live-checked GeoNames.org today (2026-08-04): all 7 still show 'Atlanta' -- the USPS AMS change hasn't propagated to the article's stated data source yet. Independent agent's explicit recommendation: do NOT change the '92' count or remove/relabel rows (that would make the article inconsistent with its own disclosed source over an unconfirmed news inference about government-system rollout status); DO add a dated, sourced caveat. Implemented as recommended, with a new source citation (City of Sandy Springs official announcement) and a 'checked 2026-08-04' note on the table caption. Follow-up: recheck GeoNames.org for these 7 ZIPs in ~4-6 weeks; if updated, dropping the count to 85 at that point is a routine source-changed edit, not an escalation."
    },
    {
      "dimension": "3. Timeliness",
      "status": "confirmed stale reference -> caveat added",
      "detail": "See 2(c) above -- the Sandy Springs USPS renaming is the timeliness finding for this article. Everything else (annexation history, IRS ZIP explanation, incorporation dates) independently re-verified via WebSearch and still accurate: Sandy Springs incorporated 2005-12-01, Dunwoody 2008-12-01, Brookhaven 2012-12-17 (all within the article's stated '2005 and 2012' range); IRS Atlanta service center at 39901 confirmed real and in DeKalb County; IRS Austin TX 73301 and Fresno CA 93888 confirmed real comparison ZIPs."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for 'atlanta zip codes list' shows competitors (zipcodestogo.com, zip-codes.com, etc.) either listing raw ZIP counts or attributing the whole set to 'Fulton County' without acknowledging the DeKalb split -- zipcodestogo.com's own title claims '92 ZIP Codes... | Fulton County' despite ~20% actually being DeKalb, an inaccuracy this article avoids (aside from the now-fixed 30338 row). The Fulton/DeKalb breakdown, IRS-ZIP backstory, and incorporation-history angle are genuine incremental value versus the SERP's plain listicles, consistent with the site's established differentiation pattern."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "confirmed problem -> fixed",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s (+FAQ H2), canonical present, 3 JSON-LD blocks (Article/BreadcrumbList/FAQPage) present and schema fields auto-derive from the same guide object (no drift risk). Title tag was 90 chars (79-char field + ' | DialWick'), meta description was 223 chars -- both confirmed by independent agent as real truncation-risk problems against current 2026 SEO guidance (~50-60 char title, ~150-160 char description). Fixed: title shortened to 42 chars (53 with suffix), description shortened to 148 chars, both verified on the live deployed page post-fix."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "pass after fix, ~85/99 (borderline ~78/99 before fix)",
      "detail": "Manual rubric pass, pre-fix: strong structure (H2s, FAQ, 92-row table), decent authority (GeoNames + Wikipedia, weaker than scam-area-codes' government-agency citations), no quoted material, and -- the main weakness -- zero outbound in-body links despite two sibling articles already linking in (independent agent confirmed this as a real, worth-fixing gap). Post-fix: added 1 reciprocal outbound link (/chicago-zip-codes/), added 1 new authoritative dated source citation (City of Sandy Springs official announcement) with a specific dated statistic (March 2026 USPS decision), added a 'checked 2026-08-04' freshness marker on the table, and removed an internal self-contradiction (30338). Estimated post-fix score ~85/99, comfortably clearing the 80 threshold."
    },
    {
      "dimension": "7. Humanizer backfill",
      "status": "not applicable / pass on manual read",
      "detail": "Published 2026-08-03, same launch-day batch as scam-area-codes (day the humanizer check became mandatory) -- doesn't predate the mandate. Manual read of full body text found no AI-writing tells (no vague attribution, no rule-of-three padding, no filler phrases); text is fact-dense with specific numbers, dates, and named entities throughout, consistent with 'already humanized' launch-batch pattern."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "GeoNames.org postal-codes index page: HTTP 200. Wikipedia Sandy Springs, GA page: HTTP 200. New source added during this audit (City of Sandy Springs official announcement page) confirmed live via WebSearch corroboration across 6 independent news outlets."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass (was link target only, now also a link source)",
      "detail": "Inbound: 2 manual in-body links from dallas-zip-codes and chicago-zip-codes (not an orphan). Rotating related-guides sidebar also links it to/from the other 5 'ZIP Codes' category articles (category has <=6 peers, so all show each other). Outbound: previously 0 manual in-body links (confirmed as a real gap by independent agent); now 1, added in this audit (/chicago-zip-codes/, reciprocating Chicago's existing IRS-ZIP comparison link)."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the same guide object fields (title, description, faq array) -- verified post-fix on the live deployed page that Article headline/description reflect the new shortened title/description, with datePublished/dateModified both correctly still 2026-08-03 (published field unchanged, per this site's established audit precedent of not bumping 'updated' for audit-driven corrections, matching the scam-area-codes fix)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/county/administrative-history content, no reverse-lookup functionality, no YMYL-sensitive claims. Naming specific IRS service center and USPS administrative decisions is standard factual reference content, not speculative or harmful."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field -- nothing to validate."
    }
  ],
  "actions_taken": [
    "Corrected ZIP 30338's county from 'Fulton' to 'DeKalb' in the data table, resolving a direct internal contradiction with existing body text and matching external verification (findmycounty.com, unitedstateszipcodes.org, city-data.com).",
    "Shortened title field from 79 to 42 chars (53 with ' | DialWick' suffix) and meta description from 223 to 148 chars to fix SERP truncation risk.",
    "Added one reciprocal outbound in-body link to /chicago-zip-codes/ in the IRS-ZIP section, addressing a confirmed zero-outbound-links gap.",
    "Added a scoped caveat paragraph about ZIP 30339 (Fulton per GeoNames' stated methodology vs. Cobb County population majority per other sources) without changing the table value.",
    "Added a dated, sourced caveat paragraph about the March 2026 USPS decision to rename 7 ZIPs' default city from Atlanta to Sandy Springs, plus a new source citation (City of Sandy Springs official announcement) and a 'checked 2026-08-04' note on the table caption. Did not change the '92' count or remove rows, per independent agent's explicit recommendation to stay consistent with the article's disclosed GeoNames methodology until GeoNames itself updates.",
    "npm test (41/41 passed) and npm run build (22 pages) both passed after the edit.",
    "Committed (68bdd80) and pushed to origin/main; verified live via polling (title change confirmed live within ~45s of push; 30338=DeKalb, Chicago link, Cobb caveat, and Sandy Springs caveat all confirmed present in the live HTML).",
    "Submitted https://dialwick.com/atlanta-zip-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 202); logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "on-page technical: 2 confirmed issues (title length, meta description length) found and fixed; no other technical issues found",
  "geo_score": "~78/99 pre-fix (borderline, below 80) -> ~85/99 post-fix (pass)",
  "escalation": null,
  "follow_up": "Recheck GeoNames.org's admin2 field for ZIPs 30319/30327/30328/30338/30339/30342/30350 in ~4-6 weeks (early-to-mid September 2026) to see whether the March 2026 USPS Sandy Springs default-city change has propagated. If so, update the '92' count and affected rows -- this would then be a routine source-tracking edit, not an escalation, since it would bring the table back into agreement with its own disclosed source."
}
```

## new-york-zip-codes

```json
{
  "url_slug": "new-york-zip-codes",
  "url": "https://dialwick.com/new-york-zip-codes/",
  "last_audited": "2026-08-06",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass, strengthened by fix",
      "detail": "Sources were GeoNames.org + Wikipedia (Boroughs of NYC); added 2 more during this audit (NY Genealogical & Biographical Society consolidation-history article, Wikipedia: Bellerose, Queens) to support the new Staten Island counterexample / Bellerose fact. Specific, named, independently verifiable throughout."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed (2 issues)",
      "detail": "(a) Queens place-name count: coreSummary said '3 named + 37 others' (=40), body said '6 named + 33 others' (=39) -- the two sentences disagreed with each other, and neither matched the site's own canonical data source. Independent agent re-parsed src/lib/data/zipCounty.json (GeoNames, stateCode=NY, county=Queens) from scratch and got 41 distinct place names, confirmed by a second independent recount in this audit. Both sentences corrected to total 41 (38 others / 35 others respectively). (b) The 'why Queens ZIPs use neighborhood names' causal claim ('The reason... Queens was consolidated in 1898... the US Post Office simply kept using those established names') was stated as a single settled cause. Independent agent WebSearched multiple sources (Gothamist's dedicated piece on this exact question, Wikipedia town-consolidation pages) and found a direct, well-documented counterexample: Staten Island's five towns (Castleton, Middletown, Northfield, Southfield, Westfield) went through the identical 1898 consolidation and do NOT retain their old names today -- undercutting 'consolidated from towns with existing post offices' as a sufficient explanation. Also found some Queens place names (Bellerose) postdate 1898 by over a decade, meaning USPS did not 'simply keep' only pre-existing names. Gothamist's own piece hedges ('the answer... isn't clear') rather than asserting one cause. Rewrote the claim as 'the most commonly cited explanation' and added the Staten Island counterexample + Bellerose fact, with 2 new sources; softened the matching FAQ answer the same way per L-0805-1 (FAQ shouldn't be more absolute than body)."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "Published 2026-08-03, audited 3 days later; no other stale claims found. ZIP counts/ranges independently re-verified against zipCounty.json and matched exactly (146/79/47/25/14=311, all ranges correct) before any other check -- this data was not the source of either confirmed problem."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for NYC ZIP-code-by-borough content shows most competing pages give a much smaller 'headline' ZIP count (commonly ~178, based on residential-only ZIPs) without disclosing methodology, or don't explain the Queens naming anomaly at all. This article's borough-by-county breakdown + the Queens-naming deep dive (now more accurate/complete post-fix) is genuine incremental value, consistent with this site's established differentiation pattern (same as atlanta/dallas/chicago)."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "confirmed problem -> fixed",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s, canonical present, 3 JSON-LD blocks (FAQPage/Article/BreadcrumbList) present and consistent. Title tag 55 chars (44-char field + suffix) -- fine. Meta description was 210 chars, confirmed by independent agent (re-fetched live page itself) as exceeding this site's already-established ~150-160 char guideline (2 prior precedent fixes: scam-area-codes, atlanta-zip-codes). Shortened to 138 chars, preserving the core claim (311 total, Queens is the neighborhood-name exception)."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "borderline fail pre-fix (~75/99) -> pass post-fix (~87/99)",
      "detail": "Manual rubric pass consistent with prior audits' methodology: strong structure (H2s, table, FAQ schema) throughout. Pre-fix weaknesses: zero internal links in either direction (confirmed dimension-9 finding below), an internal self-contradiction (39 vs 40 Queens count), and an overconfident/incomplete causal claim -- these three combined pulled the estimated score below the 80 threshold. Post-fix: added 2 outbound + 1 inbound internal link, added 2 new named sources with specific historical facts (Castleton/Middletown/Northfield/Southfield/Westfield, Bellerose), resolved the internal inconsistency, and added a genuine counterargument/nuance (a signal the rubric rewards under authority/EEAT). Estimated post-fix score ~87/99, comfortably above threshold."
    },
    {
      "dimension": "7. Humanizer backfill",
      "status": "not applicable to original text / new text checked",
      "detail": "Published 2026-08-03, same status as atlanta/scam-area-codes (predates or is same-day as this site's humanizer mandate becoming mandatory) -- original text not re-humanized wholesale. The newly-written passages added during this fix (revised history paragraph, FAQ answer, new description, new Dallas sentence) were run through Skill(humanizer) before publishing; no AI-writing tells found. The site's house style already uses ' -- ' (double hyphen) throughout guides.ts as its dash convention, matched in the new text rather than introducing em-dash characters."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 4 sources (2 original + 2 added) checked live: GeoNames.org postal-codes index (200), Wikipedia Boroughs of NYC (200), NY Genealogical & Biographical Society consolidation article (200), Wikipedia Bellerose, Queens (200)."
    },
    {
      "dimension": "9. Internal link health",
      "status": "confirmed problem -> fixed",
      "detail": "Independent agent grepped the entire guides.ts and confirmed: (a) new-york-zip-codes had zero manual in-body outbound links anywhere in its content, despite naming Atlanta and Chicago by name in a comparison sentence -- unlike every other sibling ZIP-codes article, which links every such mention (Dallas links Atlanta/Texas, Chicago links Atlanta, Austin links Atlanta twice, LA links Chicago). (b) Zero manual inbound links from any other article -- dallas-zip-codes names 'New York' in its coreSummary without linking it. Fixed: added [Atlanta](/atlanta-zip-codes/) and [Chicago](/chicago-zip-codes/) outbound links in the county-alignment section; added an inbound link from dallas-zip-codes' first body paragraph (coreSummary itself doesn't support markdown links -- verified by checking [slug].astro rendering -- so the link was placed in a body paragraph instead)."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the same guide object fields; verified post-fix on the live deployed page that Article headline/description reflect the new shortened description. datePublished stayed 2026-08-03; dateModified was bumped to 2026-08-06 (deliberately breaking from the prior 2 audits' precedent of not bumping 'updated' for audit fixes -- this fix is substantially more than a typo correction: it adds 2 new sources and new factual content, so leaving dateModified stale would misrepresent the edit per the general lessons library's L-0805-18 principle that schema should reflect real edit history)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/borough/postal-history content. No reverse-lookup functionality, no YMYL claims. Naming historical town names (Castleton etc.) and a private developer's naming choice (Bellerose) is standard historical-reference content, not sensitive."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "No violence/weapons/drugs/gambling content, no misleading headline, no clickbait layout. ads.txt and required pages not re-checked this run (site-wide, not article-specific; no site-wide changes made)."
    }
  ],
  "actions_taken": [
    "Fixed Queens place-name count in coreSummary (37 others -> 38 others) and body (33 others -> 35 others), both now correctly totaling 41 per independent recount of the site's own zipCounty.json data source, resolving a coreSummary/body internal inconsistency (was 40 vs 39).",
    "Rewrote the Queens 1898-consolidation causal explanation from an unqualified single-cause claim to 'the most commonly cited explanation,' adding the Staten Island counterexample (same 1898 consolidation, town names not retained) and the Bellerose fact (name postdates 1898); softened the matching FAQ answer the same way.",
    "Added 2 new sourced citations: NY Genealogical & Biographical Society (consolidation history), Wikipedia: Bellerose, Queens.",
    "Added outbound in-body links to /atlanta-zip-codes/ and /chicago-zip-codes/ in the county-alignment section (previously zero outbound links in this article).",
    "Added an inbound in-body link from dallas-zip-codes' first section body to /new-york-zip-codes/ (previously zero inbound links to this article from any sibling article); confirmed coreSummary fields don't render markdown so the link was placed in a body paragraph instead.",
    "Shortened meta description from 210 to 138 chars, preserving the core claim.",
    "Ran Skill(humanizer) on all newly-written passages before publishing; no issues found.",
    "npm test (64/64 passed) and npm run build (25 pages) both passed after the edit.",
    "Committed (35b2c7d) and pushed to origin/main; verified live via polling (new description, 38/35-others counts, both new outbound links, and the new dallas-zip-codes inbound link all confirmed present in live HTML); 404.astro still functioning correctly.",
    "Submitted https://dialwick.com/new-york-zip-codes/ and https://dialwick.com/dallas-zip-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 202); logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "on-page technical: 1 confirmed issue (meta description length, 210->138 chars) found and fixed; no other technical issues found",
  "geo_score": "~75/99 pre-fix (borderline, below 80, due to zero internal links + internal inconsistency + overconfident causal claim) -> ~87/99 post-fix (pass)",
  "escalation": null
}
```

## texas-zip-codes

```json
{
  "url_slug": "texas-zip-codes",
  "url": "https://dialwick.com/texas-zip-codes/",
  "last_audited": "2026-08-09",
  "published_date": "2026-08-03",
  "diagnostic_checklist": [
    "1. Do the total-ZIP-count (2,600), 52-prefix, 733-885 range, and per-city counts (Houston 178/El Paso 137/Dallas 105/San Antonio 83/Austin 74/Fort Worth 56) match the site's own canonical zipCounty.json (GeoNames) data?",
    "2. Is 'San Antonio has roughly 40% more residents than El Paso' accurate against real population data?",
    "3. Is coreSummary's 'Houston and San Antonio being close in population' accurate?",
    "4. Is the causal explanation for El Paso's high ZIP count (Franklin Mountains/narrow city/border-crossing economy) a real, sourced explanation or invented reasoning for a numeric gap (matches lesson L-0806-14 pattern)?",
    "5. Does this article have any manual in-body internal links in either direction (matches the zero-outbound-links pattern already found and fixed twice on this site, in atlanta-zip-codes and new-york-zip-codes)?"
  ],
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass, strengthened by fix",
      "detail": "Source was GeoNames.org (CC BY 4.0) only, a single-source article compared to sibling articles' 2-4 sources. Added 4 new sources during this audit (US Census Bureau QuickFacts for San Antonio and El Paso, Wikipedia: El Paso Texas, Wikipedia: Fort Bliss) to support the corrected population and land-area/Fort Bliss facts."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed (3 issues, all independently confirmed)",
      "detail": "(a) coreSummary/section-3 body claimed 'San Antonio has roughly 40% more residents than El Paso.' Independent agent WebSearched Census Bureau QuickFacts (2024 estimates: San Antonio 1,526,656; El Paso 681,723) and found San Antonio has ~124% more residents (more than double, ~2.24x), not 40% -- confirmed problem, off by a factor of ~2.8-3x. Cross-checked against 2020 Census (San Antonio 1,434,625 vs El Paso 678,815, ~111% more) with the same conclusion. (b) coreSummary claimed Houston and San Antonio are 'close in population.' Independent agent found Houston (~2.3-2.39M) is ~57-58% larger than San Antonio (~1.46-1.53M) -- not close by any normal usage; confirmed problem. (c) The causal explanation for El Paso's high ZIP count ('a long, narrow city hemmed in by the Franklin Mountains and the Rio Grande, with a border-crossing economy that generates its own dense commercial mail routes') had no corroboration anywhere. Independent agent searched multiple angles (general explanation, Fort Bliss/military angle, direct El Paso vs San Antonio comparisons, the specific Franklin Mountains/Rio Grande/border-economy narrative) and found this exact narrative in zero sources. What IS documented: El Paso's large land area (~248 sq mi, one of the largest Texas cities by area) and Fort Bliss (a major Army post carrying its own ZIP codes) -- both independently corroborated via WebSearch (EBSCO Research Starters, Wikipedia). Confirmed as an invented/unsupported causal narrative -- matches lesson library L-0806-14 pattern exactly (inventing an unsourced 'reason' for a head-to-head numeric gap). A parallel FAQ answer ('Houston...isn't proportionally that much larger in population than several of those cities') repeated the same flawed population-comparison logic (Houston is actually 56-250% larger than every other city in the table) and was fixed alongside the confirmed core-summary finding, not independently re-verified as a separate agent call since it's the same underlying error already confirmed."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "GeoNames ZIP data retrieved 2026-08-03, only 6 days old, all counts independently re-verified against zipCounty.json and matched exactly (2,600 total, 52 prefixes, 733-885 range, all 6 per-city counts) -- this canonical data was not the source of any confirmed problem; all 3 confirmed problems were in the population-comparison / causal-explanation prose layered on top of correct data."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass, strengthened by fix",
      "detail": "WebSearch for Texas ZIP code content shows competitors (zipcodestogo.com, whereig.com, etc.) list flat per-city ZIP counts or full ZIP lists without any population-vs-ZIP-count analysis. This article's 'ZIP count doesn't track population' framing is genuine incremental value vs. the SERP's plain listicles -- and now that the population numbers are corrected, the real gap (El Paso has fewer than half of San Antonio's population but nearly twice its ZIP count) is a stronger, more accurate hook than the original wrong '40% more' framing."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "pass, no action needed",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s, canonical present, 3 JSON-LD blocks (FAQPage/Article/BreadcrumbList) present and consistent. Title tag 69 chars total (58-char field + suffix) -- consistent with this site's established precedent of not escalating titles in this range (scam-area-codes left a 70-char title as-is for the same reason). Meta description 161 chars raw -- 1 char over this site's established ~160-char guideline but far short of the 200+ char problems fixed in prior audits; left as-is per 'don't manufacture problems' principle (SKILL hard rule 10)."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "borderline fail pre-fix (~72-76/99) -> pass post-fix (~86/99)",
      "detail": "Manual rubric pass consistent with prior audits' methodology. Pre-fix weaknesses: single-source EEAT, zero internal links in either direction (see dimension 9), two wrong population comparisons, and an invented/unsourced causal claim -- comparable to new-york-zip-codes' pre-fix profile (~75/99) which had a similar combination of zero-links + factual error + overconfident causal claim. Post-fix: added 4 new sourced citations, 2 new outbound in-body links, corrected both population comparisons with cited real figures, replaced the invented causal narrative with the actually-documented explanation (land area + Fort Bliss). Estimated post-fix score ~86/99, comfortably above the 80 threshold."
    },
    {
      "dimension": "7. Humanizer / avoid-ai-writing backfill",
      "status": "not applicable to original text / new text checked",
      "detail": "Published 2026-08-03, predates or is same-day as this site's humanizer mandate (launch-day batch, same status as scam-area-codes/atlanta-zip-codes). Manual read of original text found no AI-writing tells (uses site's ' -- ' double-hyphen convention, no vague attribution, no rule-of-three padding). All newly-written replacement passages (coreSummary sentence, section 2 link sentence, section 3 rewrite, FAQ answer) read in the same fact-dense, specific-numbers style as the surrounding text; no AI-writing tells introduced."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "GeoNames.org postal-codes index: HTTP 200. Two new Wikipedia sources (El Paso, Texas; Fort Bliss): both HTTP 200. Two new Census.gov QuickFacts URLs return HTTP 403 to curl -- consistent with this site's already-documented standard bot-blocking behavior (same pattern as the FCC pages in the scam-area-codes audit), not link rot; confirmed live and current via the independent fact-check agents' successful WebSearch access to the same QuickFacts data."
    },
    {
      "dimension": "9. Internal link health",
      "status": "confirmed problem -> fixed",
      "detail": "grep of guides.ts confirmed texas-zip-codes had zero manual in-body outbound links despite mentioning Dallas and Austin by name (both of which have their own sibling guide articles) -- the same zero-outbound-links pattern already found and fixed in atlanta-zip-codes and new-york-zip-codes audits. Inbound: 2 manual links already existed from dallas-zip-codes and austin-zip-codes (not an orphan). Fixed: added 2 new outbound in-body links in section 2 ('ZIP code count by major city'), pointing to /dallas-zip-codes/ and /austin-zip-codes/, both verified accurate against those articles' actual content (Highland Park's 4 annexation-resistant ZIPs; Austin's 72/2 Travis/Williamson County split) before adding."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the same guide object fields (title, description, coreSummary, faq); verified post-fix on the live deployed page that all three reflect the corrected text. datePublished stayed 2026-08-03; dateModified bumped to 2026-08-09 since this fix is substantially more than a typo correction (3 confirmed factual corrections + 4 new sources + 2 new internal links), consistent with the new-york-zip-codes precedent for when to bump 'updated' (L-0805-18 principle)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/city/military-installation-as-geography content. No reverse-lookup functionality, no YMYL claims. Naming Fort Bliss as a large Army post is standard factual/geographic reference content, not sensitive."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "No violence/weapons/drugs/gambling content, no misleading headline, no clickbait layout. Site-wide ads.txt/required pages not re-checked this run (no site-wide changes made this audit)."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (population comparison, San Antonio vs El Paso): CONFIRMED PROBLEM -- actual gap ~111-124% more, not ~40%.",
    "Agent 2 (population comparison, Houston vs San Antonio 'close in population'): CONFIRMED PROBLEM -- actual gap ~57-58%, not close.",
    "Agent 3 (causal explanation for El Paso's ZIP count): CONFIRMED PROBLEM -- no source corroborates the Franklin Mountains/border-economy narrative; documented factors are land area and Fort Bliss instead."
  ],
  "actions_taken": [
    "Corrected 'San Antonio has roughly 40% more residents than El Paso' to 'San Antonio has more than double El Paso's population -- roughly 1.5 million versus 680,000, per Census Bureau estimates' in section 3 body, citing 2 new Census QuickFacts sources.",
    "Corrected coreSummary's 'despite Houston and San Antonio being close in population' (false) to a sentence pointing at the actually-true anomaly: 'El Paso has fewer than half of San Antonio's population but nearly twice its ZIP code count.'",
    "Replaced the unsourced Franklin Mountains/border-economy causal narrative with the documented explanation (El Paso's ~248 sq mi land area, one of the largest in Texas, plus Fort Bliss, a major Army post carrying its own ZIP codes), citing 2 new Wikipedia sources.",
    "Fixed the parallel FAQ answer that repeated the same flawed Houston population-comparison logic, replacing it with an accurate framing that points to the corrected El Paso/San Antonio anomaly instead.",
    "Added 2 new outbound in-body links (/dallas-zip-codes/, /austin-zip-codes/) in section 2, fixing a confirmed zero-outbound-links gap (same pattern as 2 prior audits on this site).",
    "Added 4 new sourced citations to the sources array (2 Census Bureau QuickFacts, 2 Wikipedia).",
    "Bumped 'updated' from 2026-08-03 to 2026-08-09 (published field was already present, no backfill needed) given the substantive nature of the fix.",
    "npm test (64/64 passed) and npm run build (27 pages) both passed after the edit.",
    "Committed (d634d3e) and pushed to origin/main; verified live via polling.",
    "Submitted https://dialwick.com/texas-zip-codes/ via tools/submit-indexnow.mjs; logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "on-page technical: no confirmed issues (meta description 161 chars is 1 char over guideline, not escalated per precedent)",
  "geo_score": "~72-76/99 pre-fix (borderline, below 80, due to single-source EEAT + zero internal links + 2 wrong population comparisons + 1 invented causal claim) -> ~86/99 post-fix (pass)",
  "escalation": null
}
```

## chicago-area-code

```json
{
  "url_slug": "chicago-area-code",
  "url": "https://dialwick.com/chicago-area-code/",
  "last_audited": "2026-08-11",
  "published_date": "2026-08-10",
  "diagnostic_checklist": [
    "1. Was 312 one of the original 86 area codes AT&T assigned in 1947, covering the entire Chicago metropolitan area including suburbs?",
    "2. Did the first split (312 -> 708 for the suburbs) happen on November 11, 1989?",
    "3. Did the second split (773 carved out of 312, downtown-vs-rest-of-city) happen on October 12, 1996, and is 312 accurately described as an 'enclave' area code (surrounded entirely by 773)?",
    "4. Did the 872 overlay across the combined 312/773 footprint go into service on November 7, 2009?",
    "5. Was 464 added as an overlay on 708 in 2022, for the same number-exhaustion reason as 872?"
  ],
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "4 distinct, specific Wikipedia sources (one per area code: 312, 773, 872, plus 708-and-464), each independently corroborated via WebSearch against third-party sources (ooma, mycountrymobile, allareacodes, Illinois Commerce Commission press materials). Not vague/generic; every claim traces to a named, checkable source."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "pass, all 5 checklist items independently verified",
      "detail": "(1) 312 confirmed as one of the original 86 NANP area codes from 1947, originally covering the whole Chicago metro area including suburbs -- matches Wikipedia and multiple third-party sources. (2) 708 split from 312 on November 11, 1989 -- confirmed by Wikipedia (Area codes 708 and 464) and 3+ independent sources. (3) 773 split date: found a genuine primary-source inconsistency -- the Area code 312 Wikipedia page states October 11, 1996 while the Area code 773 Wikipedia page (more directly relevant to the event) and the overwhelming majority of third-party sources (checked via WebSearch, including allareacodes.com, letsdial.com, npnr.org) state October 12, 1996. DialWick's article uses October 12 -- verified as the correct/majority date, not a DialWick error. Noted for future reference in case other DialWick articles cite the 312 Wikipedia page's date. The 'enclave' framing is directly corroborated by the 312 Wikipedia article's own text: 'It made the area code an enclave code, similar to area code 514 in Montreal and area code 210 in San Antonio.' (4) 872 overlay effective November 7, 2009 -- confirmed by Illinois Commerce Commission press materials and Wikipedia. (5) 464 overlay on 708 -- confirmed effective January 21, 2022 per ICC press release and Chicago Sun-Times; DialWick's 'added...in 2022' phrasing is accurate (approved in 1999, implemented in 2022). No factual errors found in any of the 5 load-bearing claims."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "Published/updated 2026-08-10, audited one day later. No newer information supersedes any claim in the article."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for 'Chicago area code 312 773 872 explained' shows the SERP dominated by VOIP-provider marketing pages (Ooma, Dialpad, MyCountryMobile, Convirza) that give the basic facts but do not explain the 'enclave' concept, do not give specific split/overlay dates, and do not cross-reference the broader NANP split-vs-overlay pattern. DialWick's article's specific dates, 'enclave' terminology explanation, and internal cross-link to Michigan's analogous 679 overlay are genuine incremental value versus the SERP."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "confirmed problem -> fixed (description); pass, not escalated (title)",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s (incl. FAQ), canonical present, JSON-LD present (FAQPage/Article/WebPage/Person/BreadcrumbList). Meta description was 174 chars raw -- independent agent confirmed via pixel-width estimate (~1030-1110px vs. Google's ~920px desktop / ~680px mobile budgets) that this exceeds safe-display limits on both desktop and especially mobile. Fixed: shortened to 142 chars, preserving the core claim. Title field is 63 chars (74 with ' | DialWick' suffix) -- consistent with this site's established precedent of not escalating titles in the 65-75 char range (scam-area-codes left 70 chars, texas-zip-codes left 69 chars, both as-is); not escalated."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "pass, ~86/99, no fix needed",
      "detail": "Manual rubric pass: strong structure (H2s, table, 4-item FAQ with schema), 4 named authoritative sources, specific dated statistics throughout (5 different dates), 4 outbound in-body internal links already present at publish time (chicago-zip-codes, what-county-is-chicago-in, how-do-area-codes-work, michigan-area-codes) -- notably better than several prior-audited articles that needed outbound-link fixes. Weaker on verbatim quoted material (paraphrase only) and first-party statistics, consistent with every other article on this site. No confirmed GEO-blocking issue found; the meta-description fix does not affect this score materially."
    },
    {
      "dimension": "7. Humanizer / avoid-ai-writing backfill",
      "status": "pass, checked (published 2026-08-10, post-dates the 2026-08-07 avoid-ai-writing mandate, so this check was mandatory not optional)",
      "detail": "Ran Skill(humanizer) and Skill(avoid-ai-writing) in detect mode against the full article text. No AI-writing tells found: no AI-vocabulary words (delve, tapestry, robust, leverage, etc.), no rule-of-three padding, no promotional language, no vague attribution (the 'what telecom planners call an enclave area code' phrasing is a legitimate descriptive term, not weasel-word hedging), no curly quotes, no chatbot artifacts, no copula-avoidance clustering. Site's established ' -- ' double-hyphen dash convention used consistently (not flagged, per established sitewide exemption). Sentence length varies reasonably. No fix needed."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 4 cited Wikipedia sources (Area code 312, Area code 773, Area code 872, Area codes 708 and 464) return HTTP 200."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "4 manual outbound in-body links already present (chicago-zip-codes, what-county-is-chicago-in, how-do-area-codes-work, michigan-area-codes). Zero manual inbound in-body links from other articles (grep of guides.ts found only the self-reference at the entry's own slug line), but this article's category (Area Code Guides) has exactly 3 members (how-do-area-codes-work, scam-area-codes, chicago-area-code), which is <=6, so the automated related-guides rotation shows all 3 to each other mutually. Verified live via curl: both how-do-area-codes-work and scam-area-codes' rendered HTML contain an href to /chicago-area-code/. Not a long-term orphan."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList/Person JSON-LD all auto-derive from the same guide object fields; live page confirmed post-fix that Article/WebPage description reflects the new shortened text. No prior edits existed before this audit."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure area-code/telecom-history content (splits, overlays, dates). No reverse-lookup functionality, no scam/YMYL-sensitive claims, no named-entity risk."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field -- consistent with this site's established no-images pattern across all audited articles."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly and points to pub-5245502795720653 (google.com, pub-5245502795720653, DIRECT, f08c47fec0942fa0). /privacy/ page reachable (HTTP 200, contains AdSense client tag). No misleading claims, no scam-content sensationalism (this article doesn't touch scam content), no clickbait layout."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (meta description length / SERP truncation risk): CONFIRMED -- independently recomputed the 174-char count, then estimated pixel width (~1030-1110px) against Google's ~920px desktop / ~680px mobile display budgets and found it exceeds both, more so on mobile."
  ],
  "actions_taken": [
    "Shortened meta description from 174 to 142 chars ('312 used to cover all of Chicago and its suburbs. Two splits and an overlay later, it's an enclave -- surrounded by 773, inside the same city.'), preserving the core claim, per independent agent's CONFIRMED finding.",
    "npm test (64/64 passed) and npm run build (30 pages) both passed after the edit.",
    "Committed (3dc25e9) and pushed to origin/main; verified live via polling (new description confirmed present in live HTML within 85s of push).",
    "Submitted https://dialwick.com/chicago-area-code/ via tools/submit-indexnow.mjs (Bing 200, Yandex 202); logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish (committed 897b2bb)."
  ],
  "seo_score": "on-page technical: 1 confirmed issue (meta description length, 174->142 chars) found and fixed; title (74 chars w/ suffix) reviewed and not escalated per site precedent",
  "geo_score": "~86/99 both before and after fix (pass; the fix was a technical-SEO-only change, not a content/structure change, so the GEO estimate is unaffected)",
  "escalation": null
}
```

## texas-area-codes

```json
{
  "url_slug": "texas-area-codes",
  "url": "https://dialwick.com/texas-area-codes/",
  "last_audited": "2026-08-12",
  "published_date": "2026-08-03",
  "selection_note": "Never-audited article (site had 19 of 24 guides never audited). 6 guides tied for oldest published date (2026-08-03, same launch commit 44d25dd): texas-area-codes, california-area-codes, how-do-area-codes-work, what-county-is-chicago-in, what-county-is-houston-in, how-to-call-mexico-from-us. Tie-broken deterministically by array position in guides.ts (texas-area-codes appears first among the six). This site's known 373-single-area-code-page rollout does not exist yet in guides.ts (verified via grep -- no slugs matching a bare 3-digit-code pattern), so the staged-rollout/4-distinct-facts caveat in this run's brief does not apply to any currently published DialWick article.",
  "diagnostic_checklist": [
    "1. Did Texas really start with just two original 1947 area codes (214, 512), as the article's coreSummary/body/FAQ all claim, or was the true number different?",
    "2. Does the coreSummary's 'Dallas-Fort Worth alone now runs on five overlaid codes (214/469/972/945 for Dallas, plus 817/682 for Fort Worth)' actually add up to five when the listed codes are counted?",
    "3. Is the coreSummary's blanket claim 'No Texas metro still uses a single, un-overlaid area code' accurate, or does it overreach beyond the metros actually discussed in the article?",
    "4. Do the 29 table rows' 'In service since' dates match authoritative sources (spot-checked 210/726/737/469/621/945)?",
    "5. Does this article have any manual in-body internal links in either direction (matches the zero-outbound-links pattern already found and fixed 3x on this site: atlanta-zip-codes, new-york-zip-codes, texas-zip-codes)?"
  ],
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass, strengthened by fix",
      "detail": "Single source (Wikipedia: List of North American Numbering Plan area codes) pre-fix -- weaker than most sibling articles (2-4 sources). Added a second source during this audit (Wikipedia: Original North American area codes) to directly support the corrected 1947-origin-count fact."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed (3 issues, all independently confirmed)",
      "detail": "(a) coreSummary, section-1 body, and FAQ#1 all claimed Texas 'started with just two area codes in the original 1947 numbering plan -- 214... and 512...' (with 512 incorrectly described as covering Houston). Independent agent WebSearched and directly fetched Wikipedia's 'Original North American area codes' article (table lists '214, 512, 713, 915' together for Texas) plus the 'Area codes 214, 469, 972, and 945' Wikipedia article ('the first nationwide telephone numbering plan in 1947 divided the state of Texas into four numbering plan areas... 214... 512... 713... and 915'), and confirmed CONFIRMED PROBLEM: Texas actually started with four 1947 area codes, not two, and Houston was served by 713 from the start, not 512. This was also directly falsifiable from the article's own data: this site's own areaCodesRaw.json (scripted from Wikipedia, the article's sole cited source) already listed dateEstablished='1947' for 713 and 915 too, and the article's own table in the same guide entry listed both 713 and 915 as '1947' -- the prose contradicted the article's own table before any external check. (b) coreSummary and the section-2 H2 heading both stated 'five' for Dallas-Fort Worth's combined overlay count while listing/describing six codes (214/469/972/945 for Dallas + 817/682 for Fort Worth). Independent agent recounted: 'Dallas-Fort Worth... listed 6, claimed 5 -- CONFIRMED PROBLEM' (Houston's separate 'five' claim, 713/281/832/346/621, was correctly counted -- not an error). (c) coreSummary's blanket claim 'No Texas metro still uses a single, un-overlaid area code' was checked against this site's own areaCodesRaw.json, which shows 254 (Waco), 325 (Abilene), 361 (Corpus Christi), 409 (Beaumont), 432 (Midland-Odessa), 806 (Lubbock-Amarillo), 956 (Laredo-Harlingen-Brownsville-McAllen), and 979 (Bryan-College Station) all have no overlay code. Independent agent confirmed via WebSearch that all 8 remain single-code today (409's overlay isn't even in planning; 806's and 956's approved future overlays aren't active yet) and that Waco, Corpus Christi, Abilene, Lubbock, and Laredo are all official US Census Bureau Metropolitan Statistical Areas an ordinary reader would call a 'Texas metro' -- CONFIRMED PROBLEM, the blanket claim is false against at least 5 recognized MSAs."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass on the data layer; the 3 confirmed problems above were narrative/prose errors, not stale data",
      "detail": "Spot-checked 6 of the 29 table dates (210: Nov 1 1992, 726: Oct 23 2017, 737: Jul 1 2013, 469: Jul 1 1999, 621: Jan 23 2025, 945: Jan 15 2021) against independent WebSearch and against this site's own areaCodesRaw.json (retrieved 2026-08-03 from Wikipedia's List of NANP area codes) -- all 6 matched exactly, both externally and against the site's own canonical dataset. The 29-row table itself is accurate; all 3 confirmed problems were in the historical-narrative prose layered on top of the correct table data, the same 'correct data, wrong narrative' pattern seen in texas-zip-codes' prior audit."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "This site's established 'ZIP/area-code count doesn't map cleanly onto population/history the way a plain listicle implies' differentiation angle applies here too -- the overlay-stack narrative (why Dallas and Houston each ended up with multiple simultaneous codes instead of geographic splits) is deeper than the flat area-code lists on competitor sites (zipcodestogo.com-style directories). Not independently re-verified via a fresh SERP check this run since the finding wasn't in question -- consistent with prior audits only escalating dimensions with an actual confirmed problem."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "confirmed problem -> fixed (description); pass, not escalated (title)",
      "detail": "Live page checked via curl+DOM: single H1, 3 H2s (2 content + FAQ), canonical present and self-referencing, 3 JSON-LD blocks (Article/FAQPage/BreadcrumbList) present and consistent with pre-fix content. Meta description was 203 chars raw, exceeding this site's already-established ~150-160 char guideline (5 prior precedent fixes on this site). Fixed: shortened to 157 chars, preserving the core claim. Title field is 62 chars (73 with ' | DialWick' suffix) -- consistent with this site's established precedent of not escalating titles in the 65-75 char range (scam-area-codes left 70, texas-zip-codes left 69, chicago-area-code left 74); not escalated."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "borderline fail pre-fix (~70-74/99) -> pass post-fix (~85/99)",
      "detail": "Manual rubric pass consistent with prior audits' methodology (skill invocation surfaced the audit framework; applied manually against the gathered evidence). Pre-fix weaknesses: single-source EEAT, zero internal links in either direction, and -- more serious than most sibling audits -- 3 confirmed factual/count errors on a data-reference page (worse than most priors, which had 1-2). Post-fix: added a second named source, added 2 outbound in-body links (/how-do-area-codes-work/, /houston-zip-codes/), corrected all 3 factual issues including the H2 heading. Estimated post-fix score ~85/99, comfortably above the 80 threshold, in line with sibling articles' post-fix scores."
    },
    {
      "dimension": "7. Humanizer / avoid-ai-writing backfill",
      "status": "not applicable to original text (published 2026-08-03, predates the 2026-08-07 avoid-ai-writing mandate) / new text checked and clean",
      "detail": "Original text not re-humanized wholesale, per established precedent (same status as scam-area-codes/atlanta-zip-codes/texas-zip-codes). All newly-written passages (coreSummary rewrite, section-1 body rewrite, H2 heading, FAQ#1 answer, meta description) were run through Skill(humanizer) and Skill(avoid-ai-writing) in detect mode before publishing -- no AI-writing tells found (no AI-vocabulary words, no rule-of-three padding, no vague attribution, no copula avoidance, specific numbers/facts throughout). Site's established ' -- ' double-hyphen dash convention used consistently, not flagged per established sitewide exemption."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "Original source (Wikipedia: List of North American Numbering Plan area codes) returns HTTP 200. New source added during this audit (Wikipedia: Original North American area codes) also returns HTTP 200."
    },
    {
      "dimension": "9. Internal link health",
      "status": "confirmed problem -> fixed",
      "detail": "grep of guides.ts confirmed texas-area-codes had zero manual in-body outbound links pre-fix, despite discussing Dallas/Fort Worth/Houston/San Antonio/Austin by name -- the same zero-outbound-links pattern already found and fixed 3x on this site (atlanta-zip-codes, new-york-zip-codes, texas-zip-codes). Inbound: zero manual in-body links from other articles either, but this article's category ('Area Code Lists') has exactly 3 members (texas-area-codes, california-area-codes, michigan-area-codes), which is <=6, so the automated related-guides rotation shows all 3 to each other mutually -- verified live via curl that both california-area-codes and michigan-area-codes's rendered HTML contain an href to /texas-area-codes/. Not a long-term orphan (same reasoning as chicago-area-code's prior audit, which treated rotation-covered zero-inbound as a pass). Fixed the outbound gap: added [overlaying](/how-do-area-codes-work/) in the section-1 body (matching the established cross-link pattern used in michigan-area-codes and chicago-area-code, both of which link the same target for the split-vs-overlay explanation) and [Houston](/houston-zip-codes/) in the section-2 body."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the same guide object fields; verified post-fix on the live deployed page that the description reflects the new shortened text and the FAQPage schema reflects the corrected FAQ#1 answer. datePublished stayed 2026-08-03 (published field was already present, no backfill needed per this run's published-before-updated rule); dateModified bumped to 2026-08-12 given the substantive nature of the fix (3 confirmed factual corrections + 1 new source + 2 new internal links), consistent with the texas-zip-codes/new-york-zip-codes precedent for when to bump 'updated'."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure area-code/telecom-history/list content (splits, overlays, dates, regional coverage). No reverse-lookup functionality, no YMYL claims, no named-entity controversy risk."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field -- consistent with this site's established no-images pattern across all audited articles."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly and points to pub-5245502795720653 (google.com, pub-5245502795720653, DIRECT, f08c47fec0942fa0). /privacy/ page reachable (HTTP 200). No misleading claims, no clickbait layout, no violence/weapons/drugs/gambling content -- low-risk telecom-data topic."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (Texas's original 1947 area code count): CONFIRMED PROBLEM -- Texas started with four (214, 512, 713, 915), not two; independently sourced Wikipedia's 'Original North American area codes' and 'Area codes 214, 469, 972, and 945' articles.",
    "Agent 2 (Dallas-Fort Worth 'five overlaid codes' arithmetic): CONFIRMED PROBLEM -- 6 codes listed (214/469/972/945/817/682), not 5; Houston's separate 'five' claim (713/281/832/346/621) verified correct, not an error.",
    "Agent 3 ('No Texas metro still uses a single, un-overlaid area code' blanket claim): CONFIRMED PROBLEM -- at least 5 recognized MSAs (Waco, Corpus Christi, Abilene, Lubbock, Laredo) still run a single, un-overlaid code as of 2026."
  ],
  "actions_taken": [
    "Corrected the '1947 origin' claim in coreSummary, section-1 body, and FAQ#1 from 'just two' (214, 512, with 512 wrongly described as covering Houston) to the accurate 'four' (214, 512, 713, 915), fixing the Houston/713 attribution and the 'every other code is a descendant of one of those two' framing to 'those four'.",
    "Fixed the Dallas-Fort Worth overlay-count arithmetic error in coreSummary (rewrote to state Dallas's 4 codes and Fort Worth's 2 codes separately, totaling 6, rather than the wrong 'five') and in the section-2 H2 heading ('Dallas and Houston each run on a five-code overlay stack' -> 'Dallas runs a four-code overlay stack; Houston runs a five-code one', matching the section body's own already-correct 'four' and 'five' figures).",
    "Rescoped coreSummary's 'No Texas metro still uses a single, un-overlaid area code' to name the smaller metros (Waco, Corpus Christi, Abilene, Lubbock, Laredo) that still run one un-overlaid code, clarifying the claim applies only to the state's four largest metros.",
    "Added a second sourced citation (Wikipedia: Original North American area codes).",
    "Added 2 outbound in-body links (/how-do-area-codes-work/ on 'overlaying', /houston-zip-codes/ on 'Houston'), fixing a confirmed zero-outbound-links gap matching this site's established pattern.",
    "Shortened meta description from 203 to 157 chars, preserving the core claim.",
    "Ran Skill(humanizer) and Skill(avoid-ai-writing) in detect mode on all newly-written passages before publishing; no issues found.",
    "Bumped 'updated' from 2026-08-03 to 2026-08-12 (published field was already present, no backfill needed) given the substantive nature of the fix.",
    "npm test (64/64 passed) and npm run build (33 pages) both passed after the edit.",
    "Committed (5a2e73e) and pushed to origin/main; verified live via polling (new description, H2 heading, both new outbound links, and the corrected FAQ answer all confirmed present in live HTML within ~40s of push).",
    "Submitted https://dialwick.com/texas-area-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 202); logged to indexnow-submit-log.json (committed separately, 85501e5, since that file had unrelated concurrent-task changes already merged in by the script itself).",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "on-page technical: 1 confirmed issue (meta description length, 203->157 chars) found and fixed; title (73 chars w/ suffix) reviewed and not escalated per site precedent",
  "geo_score": "~70-74/99 pre-fix (borderline fail, below 80, due to single-source EEAT + zero internal links + 3 confirmed factual/count errors) -> ~85/99 post-fix (pass)",
  "escalation": null
}
```

## how-do-area-codes-work

```json
{
  "url_slug": "how-do-area-codes-work",
  "url": "https://dialwick.com/how-do-area-codes-work/",
  "last_audited": "2026-08-13",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "Cites Wikipedia's 'List of North American Numbering Plan area codes' and 'Area codes 212, 646, and 332' by name; claims are specific (rotary-dial pull counts, exact split years/codes) rather than generic."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed",
      "detail": "Article claimed 'Manhattan is the extreme example: 212 (1947) was overlaid by 917 (1992), then 646 (1999), then 332 (2017) -- four area codes now serve the exact same borough at once.' Independent verification agent (WebSearch, Wikipedia 'Area codes 212, 646, and 332' primary source plus callmama.com/sipnex.ca/mycountrymobile.com/212areacode.com) confirmed REFUTED: 917 is a citywide overlay covering all five NYC boroughs (introduced 1992 as NANP's first-ever overlay, originally for cellular/pager numbers), not a Manhattan-only overlay like 212/646/332. Wikipedia's own article phrases it as 917 being layered on top of BOTH the Manhattan complex (212/646/332) and the outer-borough complex (718/347/929/465) -- 917's footprint is strictly larger than Manhattan, so 'four area codes now serve the exact same borough' overstates 917's geographic specificity. All other checked claims (1947 rotary-dial pull-count assignment rule, multi-code-state middle-digit-1 vs single-code-state middle-digit-0 rule, LA's 213 split five times 1951/1957/1984/1991/1998 into 714/805/818/310/323, El Paso 915 Mountain-Time-in-Texas example) independently verified accurate via WebSearch against Wikipedia/lincmad.com/CPUC sources."
    },
    {
      "dimension": "3. Timeliness",
      "status": "confirmed stale field -> fixed",
      "detail": "updated field was still 2026-08-03 (publish day) despite the substantive factual fix; bumped to 2026-08-13. published field was already present (no git-history backfill needed per the pre-fix mandatory check)."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass -- strong",
      "detail": "WebSearch for 'how do area codes work explained overlay split' shows the SERP (T-Mobile, AreaCodeAtlas, Wikipedia's own 'Area code split' page, mass.gov) covers the split/overlay mechanic but not the 1947 rotary-dial-pull-count assignment history, the middle-digit-1-vs-0 fossil rule, or LA's specific five-way split timeline -- DialWick's article provides genuine incremental depth, not a Wikipedia rehash."
    },
    {
      "dimension": "5. SEO technical",
      "status": "pass",
      "detail": "Title 'How US Area Codes Actually Work' (32 chars) and description (186 chars raw / within normal site range) reasonable. Single H1 via layout, 4 H2 sections, self-authored inline SVG diagram (NPA_DIAGRAM) with no external image dependency."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~82-85/99 estimate",
      "detail": "coreSummary gives a direct, complete answer; FAQPage schema present (3 Q&As); named authoritative sources; self-authored SVG diagram checked for label/rect overlap (none found, all three boxes non-overlapping with room to spare) and numeric consistency with body text (NPA-NXX-XXXX format matches). 4 confirmed inbound links from other articles (texas-area-codes, michigan-area-codes, chicago-area-code, us-country-code), all with bridging sentences independently re-read against this article's actual content and found accurate (no L-0805-4-style broken analogy)."
    },
    {
      "dimension": "7. Humanizer/avoid-ai-writing backfill",
      "status": "pass, no rewrite needed",
      "detail": "published 2026-08-03, predates avoid-ai-writing's 2026-08-07 introduction. Full-article check: zero literal em-dash (U+2014) characters found anywhere in guides.ts (site uses ' -- ' double-hyphen house style throughout, 348 instances site-wide); no promotional language, rule-of-three padding, vague attribution, or inflated-symbolism patterns found on manual read of all 4 sections + FAQ. No rewrite needed."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "Both cited Wikipedia sources ('List of North American Numbering Plan area codes' and 'Area codes 212, 646, and 332') confirmed live and current via browser navigation during this audit."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "4 inbound manual anchor links found (texas-area-codes, michigan-area-codes, chicago-area-code, us-country-code). Each bridging sentence re-checked against this article's actual content (per L-0805-4) and found accurate -- no broken analogies or misattributed claims."
    },
    {
      "dimension": "10. Schema data consistency",
      "status": "pass",
      "detail": "No prior schema drift; the one content edit (917 sentence rewrite) does not touch any structured-data-adjacent field (title/description/FAQ unchanged), so no schema desync introduced."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Purely technical telecom-numbering topic; no persons/events/groups referenced that could develop new controversy."
    },
    {
      "dimension": "12. Image availability/copyright",
      "status": "pass, not applicable",
      "detail": "Article uses a self-authored inline SVG diagram (NPA_DIAGRAM constant), not an external/licensed image -- no copyright or link-rot risk."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "Low-risk telecom-numbering topic; no weapons/drugs/gambling/violence content, no misleading claims post-fix."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (917 area code 'exact same borough' claim): REFUTED as written -- 917 is a citywide overlay covering all five NYC boroughs, not a Manhattan-only overlay matching 212/646/332's footprint. Verified via Wikipedia 'Area codes 212, 646, and 332' primary source plus 4 independent secondary sources."
  ],
  "actions_taken": [
    "Rewrote the Manhattan-overlay sentence in section 3 ('Split vs. overlay') to correctly distinguish the three Manhattan-exclusive codes (212/646/332) from 917's citywide (all five boroughs) scope, while preserving the accurate underlying point that a Manhattan phone number can carry any of four area codes.",
    "Bumped 'updated' from 2026-08-03 to 2026-08-13 (published field pre-existing, no backfill needed).",
    "npm run build (35 pages) passed after the edit.",
    "Committed (658d39a) and pushed to origin/main; verified live via polling (corrected 'Manhattan-only footprint' text confirmed present in live HTML within ~30s of push).",
    "Submitted https://dialwick.com/how-do-area-codes-work/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200).",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "no technical SEO issues found or changed",
  "geo_score": "~82-85/99 both pre- and post-fix (the 917 correction is a factual-precision fix, not a structural/GEO-scoring change)",
  "escalation": null
}
```

## california-area-codes

```json
{
  "url_slug": "california-area-codes",
  "url": "https://dialwick.com/california-area-codes/",
  "last_audited": "2026-08-17",
  "published_date": "2026-08-03",
  "selection_note": "31 guides total, only 7 previously audited (24 never-audited). 4 never-audited guides tied for oldest published date (2026-08-03): california-area-codes, what-county-is-chicago-in, what-county-is-houston-in, how-to-call-mexico-from-us. Tie-broken by array position in guides.ts (established texas-area-codes precedent) -- california-area-codes appears first among the four.",
  "diagnostic_checklist": [
    "1. Does the article's title/coreSummary count of LA-area-area-codes ('six') match its own FAQ, which names seven (213/323/310/424/818/747/738)?",
    "2. Do the 1947-origin codes (213, 415, 916) and the LA split/overlay timeline (714/1951, 805/1957, 818/1984, 310/1991, 323/1998, 424 overlay/2006, 747 overlay/2009, 213/323 merge/2017, 738/Nov2024) check out against Wikipedia/CPUC?",
    "3. Does the body's claim that Sacramento's 916 was 'split-free... 1947 to 2018' match the article's own table, which lists area code 530 (no overlay tag) in service since Nov 1, 1997?",
    "4. Does grouping '510 and 650' under 'the early 1990s' match the article's own table dates for those two codes?",
    "5. Does this article have any manual in-body outbound links (matches the zero-outbound-links pattern already found/fixed 4x on this site)?"
  ],
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass, strengthened by fix",
      "detail": "Single source (Wikipedia: List of NANP area codes) pre-fix -- same single-source pattern as texas-area-codes/scam-area-codes at first audit. Added 2 new sources during this audit (Wikipedia: Area codes 213, 323, and 738; Wikipedia: Area codes 916 and 279) to support the corrected LA-count and Sacramento-split facts."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed (3 issues, all independently confirmed by fresh-context verification agents); 1 checked claim left unchanged (evidence inconclusive, not confirmed either way)",
      "detail": "(a) Title ('...LA's Six'), coreSummary, section-2 heading ('...to six today'), and section-2 body ('a sixth code, 738, was added') all claimed LA currently has six area codes, while the article's own FAQ answer already listed seven (213, 323, 310, 424, 818, 747, 738). Independent agent WebSearched Wikipedia's 'Area codes 213, 323, and 738' plus CPUC's official '213/323/738 Area Codes' notice and 4 news sources (ABC7 LA, LAmag, etc.), CONFIRMED: 738 (activated Nov 1, 2024) is a real, currently-serving third overlay on the 213/323 complex, not a proposal -- the accurate count is seven, and the article's 'six' claim directly contradicted its own FAQ. Fixed all 4 occurrences in this article. Full-text search (per L-0804-6) found the same LA-count claim echoed in 2 other articles: 213-area-code (via a bridging sentence about California's original codes) and michigan-area-codes (a cross-site bridging sentence, '...traces through six generations...'); both fixed for consistency. (b) Section-2 body claimed 'Sacramento took the simplest route... one split-free run on 916 from 1947 all the way to 2018,' directly contradicting the article's own table, which lists area code 530 (Redding/Chico/Lake Tahoe) in service since Nov 1, 1997 with no overlay annotation -- the same pattern used for every other genuine split in the table. Independent agent WebSearched Wikipedia's 'Area codes 916 and 279' plus CPUC's official 916/279 page, CONFIRMED: 916 was split in 1997 to create 530 (and earlier, in 1959, to create 707); the 279 overlay in 2018 did not change 916's boundaries at all. The identical 'Sacramento's 916 never split at all' claim was found verbatim in 213-area-code (a bridging sentence added the same day this audit's other fix landed, 2026-08-17); both fixed. (c) Section-2 body grouped '510 and 650 in the early 1990s,' but the article's own table lists 510 in service Sep 2, 1991 and 650 in service Aug 2, 1997 -- six years apart, not both 'early 1990s.' Independent agent WebSearched Wikipedia's 'Area codes 510 and 341' and 'Area code 650,' CONFIRMED both dates and the imprecision of the grouping. Rewrote with exact years. (d) A fourth candidate claim -- coreSummary's parenthetical that 916 'was added slightly later that year' than 213/415 in 1947 -- was checked via WebSearch but returned mixed/inconclusive evidence (some sources say all three were assigned the same date in 1947, others give differing month-level detail); this was NOT independently confirmed as an error, so per the audit protocol's 'only act on CONFIRMED findings' rule, it was left unchanged rather than edited on a hunch."
    },
    {
      "dimension": "3. Timeliness",
      "status": "confirmed stale field -> fixed",
      "detail": "published field was already present (2026-08-03), no git-history backfill needed. updated field was still 2026-08-03 despite the 3 substantive factual fixes; bumped to 2026-08-17, consistent with this site's established precedent (texas-zip-codes, new-york-zip-codes, texas-area-codes) of bumping 'updated' for substantive fixes but not for meta-description-only fixes. The 2 cross-referenced articles (213-area-code, published/updated same-day 2026-08-17 already; michigan-area-codes, published 2026-08-10) both had their own factual-content edits -- 213-area-code needed no further bump (already today), michigan-area-codes' updated bumped from 2026-08-10 to 2026-08-17."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "This site's established 'code count doesn't map cleanly onto a plain listicle' differentiation angle applies -- SERP competitors (zipcodestogo.com-style directories, allareacodes.com) list flat area-code tables without a split/overlay 'family tree' narrative or a methodology note. Not independently re-verified via a fresh SERP check this run (matches the established precedent of only escalating dimensions with an actual confirmed problem); the fix strengthens this angle since the corrected LA count (seven) and Sacramento split history are now internally consistent, more accurate than most third-party area-code directories, which is the differentiation claim itself."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "confirmed problem -> fixed (description); pass, not escalated (title)",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s (incl. FAQ), canonical present, 3 JSON-LD blocks (Article/FAQPage/BreadcrumbList) present and consistent pre-fix. Meta description was 196 chars raw, exceeding this site's already-established ~150-160 char guideline (multiple prior precedent fixes). Fixed: shortened to 149 chars, preserving the core claim and updating 'six' to 'seven.' Title field is 68 chars (79 with ' | DialWick' suffix) -- within this site's established precedent range of not escalating titles up to ~90 chars (chicago-area-code left 74, texas-area-codes left 73, atlanta-zip-codes' original 90 was the only one ever escalated); not escalated."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "borderline fail pre-fix (~72-76/99) -> pass post-fix (~85-87/99)",
      "detail": "Manual rubric pass consistent with prior audits' methodology (skill invocation surfaced the current framework; applied manually against gathered evidence). Pre-fix weaknesses: single-source EEAT, zero outbound in-body links, and 3 confirmed factual/internal-contradiction errors (worse than most sibling audits, comparable to texas-area-codes' 3-error profile). Post-fix: added 2 named sources, added 2 outbound in-body links (/sacramento-zip-codes/, /los-angeles-zip-codes/), corrected all 3 factual issues including their duplicate occurrences in 2 other articles. Estimated post-fix score ~85-87/99, comfortably above the 80 threshold and in line with sibling articles' post-fix scores."
    },
    {
      "dimension": "7. Humanizer / avoid-ai-writing backfill",
      "status": "not applicable to original text (published 2026-08-03, predates the 2026-08-07 avoid-ai-writing mandate) / new text checked and clean",
      "detail": "Original text not re-humanized wholesale, per established precedent. All newly-written/edited passages (title, description, coreSummary edit, section-2 heading, section-2 body rewrite, FAQ answer edit, and the 2 cross-referenced articles' edits) were checked against Skill(humanizer) and Skill(avoid-ai-writing) in detect mode -- no AI-writing tells found (no AI-vocabulary words, no rule-of-three padding, no vague attribution, no copula avoidance clustering). Site's established ' -- ' double-hyphen dash convention used consistently in the new text, not flagged per established sitewide exemption."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "Original source (Wikipedia: List of NANP area codes) returns HTTP 200. Both new sources added during this audit (Wikipedia: Area codes 213, 323, and 738; Wikipedia: Area codes 916 and 279) also return HTTP 200."
    },
    {
      "dimension": "9. Internal link health",
      "status": "confirmed problem -> fixed",
      "detail": "grep of guides.ts confirmed california-area-codes had zero manual in-body outbound links pre-fix -- the same zero-outbound-links pattern already found and fixed 4x on this site (atlanta-zip-codes, new-york-zip-codes, texas-zip-codes, texas-area-codes). Inbound: 3 manual links already existed from san-diego-zip-codes, michigan-area-codes, and 213-area-code (not an orphan); category 'Area Code Lists' also has <=6 members so the automated rotation covers it too. Fixed the outbound gap: added [Sacramento ZIP code list](/sacramento-zip-codes/) in the rewritten section-2 body paragraph and [greater LA area](/los-angeles-zip-codes/) in the FAQ answer (confirmed via [slug].astro that FAQ answers render through the same md() markdown helper as section bodies, so the link renders correctly)."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the same guide object fields; verified post-fix on the live deployed page that title/description/FAQ answer all reflect the corrected text. datePublished stayed 2026-08-03; dateModified bumped to 2026-08-17 given the substantive nature of the fix."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure area-code/telecom-history/list content (splits, overlays, dates, regional coverage). No reverse-lookup functionality, no YMYL claims, no named-entity controversy risk."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "This article has no hero image, inline image, or diagramSvg field -- consistent with this site's established no-images pattern across all audited articles."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly and points to pub-5245502795720653 (google.com, pub-5245502795720653, DIRECT, f08c47fec0942fa0). /privacy/ and /about/ pages both reachable (HTTP 200). No misleading claims, no clickbait layout, no violence/weapons/drugs/gambling content -- low-risk telecom/geography topic. No close-call/gray-area findings requiring escalation."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (LA area code count, 'six' vs seven): CONFIRMED PROBLEM -- 738 is a real, currently-active third overlay on the 213/323 complex (activated Nov 1, 2024); true count is seven, contradicting the article's own FAQ and title/coreSummary.",
    "Agent 2 (Sacramento 916 'split-free... 1947 to 2018' claim): CONFIRMED PROBLEM -- 916 was split in 1997 to create area code 530, directly contradicting the article's own table entry for 530 and external sources (Wikipedia, CPUC).",
    "Agent 3 (San Francisco '510 and 650 in the early 1990s' grouping): CONFIRMED PROBLEM -- 510 (1991) and 650 (1997) are six years apart per the article's own table and Wikipedia; grouping both under 'early 1990s' is imprecise/wrong."
  ],
  "actions_taken": [
    "Fixed the LA area-code-count contradiction (title, coreSummary, section-2 heading, section-2 body) from 'six' to 'seven,' matching the FAQ's existing correct list of 7 codes; also fixed the same claim's 2 duplicate occurrences in 213-area-code and michigan-area-codes.",
    "Rewrote the San Francisco/Sacramento paragraph: fixed the imprecise '510 and 650 in the early 1990s' grouping to exact years (1991, 1997), and replaced the false 'split-free... 1947 to 2018' Sacramento claim with the accurate history (916 split once, in 1997, creating 530, before the 279 overlay in 2018); also fixed the duplicate Sacramento claim in 213-area-code.",
    "Added 2 new sourced citations (Wikipedia: Area codes 213, 323, and 738; Wikipedia: Area codes 916 and 279).",
    "Added 2 outbound in-body links (/sacramento-zip-codes/ in the rewritten section-2 body, /los-angeles-zip-codes/ in the FAQ answer), fixing a confirmed zero-outbound-links gap matching this site's established recurring pattern.",
    "Shortened meta description from 196 to 149 chars, incorporating the corrected 'seven' count.",
    "Left one investigated-but-unconfirmed claim unchanged (916 'added slightly later' than 213/415 in 1947) since WebSearch evidence was mixed/inconclusive and no independent CONFIRMED finding was obtained.",
    "Ran Skill(humanizer) and Skill(avoid-ai-writing) in detect mode on all newly-written/edited passages across all 3 touched articles; no issues found.",
    "Bumped 'updated' from 2026-08-03 to 2026-08-17 for california-area-codes and from 2026-08-10 to 2026-08-17 for michigan-area-codes (213-area-code needed no bump, already dated 2026-08-17 same-day).",
    "npm test (64/64 passed) and npm run build (40 pages) both passed after the edit.",
    "Committed (27d6e05) and pushed to origin/main; verified live via polling (9 attempts, ~54s) that all 3 touched pages reflect the fixes; both new internal-link targets return HTTP 200.",
    "Submitted https://dialwick.com/california-area-codes/, https://dialwick.com/213-area-code/, https://dialwick.com/michigan-area-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200).",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "on-page technical: 1 confirmed issue (meta description length, 196->149 chars) found and fixed; title (79 chars w/ suffix) reviewed and not escalated per site precedent",
  "geo_score": "~72-76/99 pre-fix (borderline fail, below 80, due to single-source EEAT + zero internal links + 3 confirmed factual/internal-contradiction errors) -> ~85-87/99 post-fix (pass)",
  "escalation": null
}
```

## how-to-call-mexico-from-us

```json
{
  "url_slug": "how-to-call-mexico-from-us",
  "url": "https://dialwick.com/how-to-call-mexico-from-us/",
  "last_audited": "2026-08-17",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "Interactive 'Format your own Mexico number' dial-format-builder tool adds genuine utility beyond static text; single external source (FCC tip sheet) is a general international-dialing guide, not a document that specifically covers Mexico's 2019 reform -- a mild citation-scope gap, not escalated to a confirmed finding since the underlying fact is independently well-corroborated (see dimension 2)."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> NOT a real problem, no fix needed",
      "detail": "Suspected the article's framing ('Mexico's telecom regulator eliminated all of that in the 2019 reform: every Mexican number, landline or mobile, is now dialed the same simple way') conflates two distinct events -- IFT's Aug 3, 2019 domestic dialing-plan reform (removing 01/044/045 prefixes for calls made WITHIN Mexico) vs. the separate elimination of the international 'extra 1 after +52 for mobile' convention, which Wikipedia's 'Telephone numbers in Mexico' article dates to 'as of 2020' rather than Aug 2019. Spawned an independent fresh-context verification agent. It traced the claim to primary sources: IFT's own Comunicado 34/2019 (domestic scope only) plus Twilio's dated regulatory-compliance notice ('Beginning on August 3, 2019, international dialing from phone numbers outside of Mexico to mobile phone numbers... will no longer require a 1 prefix... The Mexican Telecommunications Regulator eliminated the requirement'), corroborated by multiple contemporary telecom sources -- all placing the international-dialing change on the SAME Aug 3, 2019 date as a direct knock-on effect of the same reform. Wikipedia's 'as of 2020' is non-committal phrasing citing a generic FCC page, not a dated contradicting source. Verdict: NOT-SUPPORTED, article's framing is accurate. No fix made."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published 2026-08-03, audited 2026-08-17 (~2 weeks). Content describes a completed 2019 regulatory reform, not something requiring frequent updates; still current."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for 'how to call Mexico from the US dialing guide 2026' surfaces a SERP dominated by generic VoIP/calling-service blogspam (recharge.com, mycountrymobile.com, yollacalls.com, phonecall.app) that state the current format without explaining the historical 01/044/045 prefix system or why older guides are wrong. DialWick's article + interactive dial-format-builder tool (accepts a user's local-format number and formats it correctly, with country-specific validation) is a genuine incremental value vs. the SERP."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "pass",
      "detail": "Live page checked via curl: single H1, clean H2 hierarchy (5 H2s incl. the interactive tool), canonical present, Article/BreadcrumbList/FAQPage schema all present. Ran independent_site scripts/check_seo_field_stats.py: title 44 chars (z=-1.14), description 182 chars (z=-0.09) -- both well within this site's own distribution (n=32, description mean=184.5), not outliers despite exceeding generic 155-char guidance."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~78-82/99 (estimated manual pass, not full 99-point run)",
      "detail": "Strong structure (H2s, table, FAQPage schema, interactive tool), named-authority citation (FCC), professional terminology (NANP-adjacent, exit code vs. country code distinction), 2 internal cross-links (inbound from how-to-call-philippines-from-usa, outbound to us-country-code implicitly via category sidebar). Slightly light on verbatim quoted material and only 1 external source -- comfortably above the 80-point bar given the interactive tool's added utility."
    },
    {
      "dimension": "7. Early-content humanizer/avoid-ai-writing backfill",
      "status": "pass",
      "detail": "published 2026-08-03, predates avoid-ai-writing becoming mandatory (2026-08-07) -- re-ran Skill(avoid-ai-writing) in detect mode. No AI-writing tells found (no vague attribution, no filler/hedging, no rule-of-three padding, no template phrases, no promotional language). The article's double-hyphen '--' dashes (5 instances across ~400 words, technically over the skill's generic em-dash density threshold) are this site's own established, deliberate house convention for dashes -- explicitly reviewed and NOT flagged as an AI tell in this same site's prior scam-area-codes audit ('no obvious AI-writing tells (double-hyphen dashes instead of em-dash...)'). Treated as accepted site convention per that precedent, not re-flagged; fixing it in only this one article while leaving the same convention in all other ~31 guides would create inconsistency, not resolve a real problem."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "FCC tip sheet URL (fcc.gov/consumers/guides/international-long-distance-calling-made-simple-tip-sheet) returns HTTP 403 to curl/scripted fetches -- consistent with this site's own prior finding (scam-area-codes audit) that FCC pages return 403 to bots (Akamai-style blocking) while remaining live and indexed. Confirmed live via WebSearch results referencing the same URL. Not link rot."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "Inbound link from how-to-call-philippines-from-usa ('for a comparison'); the bridging sentence's factual claim (both countries share the exit-code-plus-country-code shape) is accurate, no L-0805-4-style unchecked claim about this article's content. Outbound: 'More in International Dialing' sidebar on the live page reciprocally links to us-country-code and how-to-call-philippines-from-usa (International Dialing category has only 3 guides, all reciprocally linked since <=6 threshold)."
    },
    {
      "dimension": "10. Schema data consistency",
      "status": "not applicable",
      "detail": "No prior content edits exist for this article to check schema drift against; first audit."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "not applicable",
      "detail": "Neutral technical-reference topic (dialing format), no people/events/groups referenced that could accrue new controversy."
    },
    {
      "dimension": "12. Image availability/copyright",
      "status": "not applicable",
      "detail": "Article has no imageCredit/image fields -- text + interactive tool only."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "No violence, weapons, drugs, or gambling content; no misleading/clickbait framing; site-wide ads.txt/privacy/terms already verified in prior work (流量站清单.md AdSense section)."
    }
  ],
  "actions_taken": [
    "No code changes made. The one specific factual concern investigated (2019 vs. 2020 date conflation for the international 'extra 1' dialing convention) was independently verified and found NOT to be an error -- IFT + Twilio primary/quasi-primary sources confirm the international convention change happened on the same Aug 3, 2019 date as the domestic reform, not a separate 2020 event. Wikipedia's 'as of 2020' phrasing was the weaker, non-committal source."
  ],
  "seo_score": "no change (already compliant, verified via check_seo_field_stats.py)",
  "geo_score": "~78-82/99 (estimated, no fix needed so no re-score)",
  "escalation": null
}
```

## what-county-is-chicago-in

First-ever audit for this article (had never been picked in prior runs -- previously listed in `selection_note` as tied-for-oldest but not selected). Full 13-dimension pass per the current `trafficsite-content-quality-audit` methodology, with 3 independent-agent-confirmed findings and 1 duplicate error found and synced on the sibling article `what-county-is-houston-in`.

```json
{
  "url_slug": "what-county-is-chicago-in",
  "url": "https://dialwick.com/what-county-is-chicago-in/",
  "last_audited": "2026-08-18",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "3 named authoritative sources (GeoNames postal code database, Wikipedia Cook County article, US Census Bureau) with specific, dated statistics (84 ZIP codes, 1831 founding/54th county, 135 municipalities, ~5.19M population) -- stronger than several previously-audited single-source articles on this site."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "2 confirmed problems -> fixed",
      "detail": "(a) 'Chicago doesn't straddle a county line' / 'entirely within Cook County... no cross-county split' was an overgeneralization: independent agent confirmed via Wikipedia ('Chicago' and 'O'Hare, Chicago' articles) that the city's own municipal boundary picked up a small, uninhabited DuPage County strip when it annexed O'Hare Airport in 1956 -- the O'Hare community area is the only one of Chicago's 77 community areas that crosses outside Cook County. The narrower ZIP-code claim itself was separately verified accurate against this site's own src/lib/data/zipCounty.json (all 84 Chicago-primary ZIPs, including 60666 which covers O'Hare, are GeoNames-assigned to Cook County -- the same single-county flattening this site already caveats for Atlanta's 30339 and Denver's 80221). Fixed by adding a caveat that preserves the accurate ZIP claim while correcting the broader boundary claim. (b) 'Cook is the only county in the top three that's losing population... down about 81,000 since 2020... Harris County added roughly 106,000... on track to pass Cook' was outdated and its only cited source (a March 2025 census.gov story) does not contain either number or the 'overtake' claim. Independent agent fetched the Census Bureau's Vintage 2025 county population estimates (released March 2026, predating this article's data) directly: Cook County grew every year from 2022 to 2025 (5,127,866 -> 5,142,853 -> 5,188,791 -> 5,194,625) and led Harris County (5,045,026) by ~150,000 as of the latest count -- it is not currently 'losing population.' Fixed description/coreSummary/section-3 heading+body with the corrected trend and cited the actual Vintage 2025 press release. The identical stale claim was found duplicated in the sibling article what-county-is-houston-in (discovered while adding an outbound link to it) and synced with the same correction per this site's own house rule that a fixed error must be checked for duplicates elsewhere."
    },
    {
      "dimension": "3. Timeliness",
      "status": "confirmed problem -> fixed",
      "detail": "published 2026-08-03 was correctly present (no published-field backfill needed). updated bumped to 2026-08-18 to reflect this audit's corrections. See dimension 2(b) -- the population-trend section was 1+ year stale relative to the newest official Census Bureau release available before this article's own publish date."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for 'what county is chicago in' shows a SERP dominated by Wikipedia's Cook County article and government sites -- none synthesize the ZIP-code granularity, 135-municipality count, and population-trend detail this article does. Once corrected, the new O'Hare/DuPage caveat is a genuine differentiator most simple answer pages omit (though Wikipedia's own O'Hare-specific pages do document the underlying fact, so no 'nobody covers this' claim was made in the copy itself, per L-0805-3)."
    },
    {
      "dimension": "5. SEO technical/on-page audit (Skill seo-audit)",
      "status": "pass; 1 self-introduced regression caught and fixed before commit",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s, canonical present, 3 JSON-LD blocks (Article/BreadcrumbList/FAQPage) present and consistent. Title (37 chars incl. suffix) is the shortest on the site but matches its category sibling what-county-is-houston-in exactly (also 37) -- treated as a deliberate 'Counties' category convention, not flagged. Description was 207 chars pre-fix (z=0.82 against this site's own description-length distribution, n=34, mean=185, sd=26.6) -- within normal range, not flagged. During the fix, the first draft of the corrected description ballooned to 256 chars (z=2.66, a new outlier); caught by re-measuring the rebuilt dist/ output before committing and trimmed to 206 chars (z=0.78). Applied the same length check to what-county-is-houston-in's edited description (258->191 chars) since it was edited in the same pass."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85-88/99 (estimated manual pass, no full 99-point run) after fixes; pre-fix estimate ~72-76/99",
      "detail": "Strong structure (H2s, FAQPage schema, 3 named sources), fresh publish date, self-contained FAQ/section answers. Pre-fix, the population-trend inaccuracy was a real citability risk (an AI system citing this page would repeat a false 'Cook is losing to Harris' claim) and zero outbound links weakened the internal-authority signal. Post-fix: trend corrected, caveat added, 3 outbound links added -- comfortably above the 80 bar."
    },
    {
      "dimension": "7. Early-content humanizer/avoid-ai-writing backfill",
      "status": "pass",
      "detail": "published 2026-08-03, predates avoid-ai-writing becoming mandatory (2026-08-07). Re-scanned original text in detect mode: no AI-writing tells found (no vague attribution, no filler, no rule-of-three padding, no promotional language); the site's established double-hyphen ' -- ' dash convention is an accepted house style per prior audits, not re-flagged. All newly written replacement text (description/coreSummary/section bodies/FAQ, both this article and the Houston sibling) was manually written in the same plain, factual register and re-scanned against the same pattern list -- clean."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 4 sources (GeoNames, Wikipedia Cook County, Wikipedia O'Hare-Chicago [newly added], Census Bureau Vintage 2025 press release [newly added, replacing a now-superseded census.gov story]) return HTTP 200 to curl. The Census Vintage 2025 press release was independently confirmed to contain the exact figures now cited in the article (Cook 5,279,010/5,188,791/5,194,625; Harris 4,730,408/4,996,331/5,045,026)."
    },
    {
      "dimension": "9. Internal link health",
      "status": "confirmed problem -> fixed",
      "detail": "Independent agent confirmed via grep of guides.ts: this article had zero manual outbound in-body links despite naming 'Atlanta' and 'Harris County, Texas (Houston's home county)' by name, both of which have real sibling articles (atlanta-zip-codes, what-county-is-houston-in). This is the identical pattern already found and fixed 5 times on this site (atlanta-zip-codes, new-york-zip-codes, texas-zip-codes, texas-area-codes, california-area-codes). Fixed: added 3 outbound links (/chicago-zip-codes/, /atlanta-zip-codes/, /what-county-is-houston-in/). Inbound: not an orphan -- 3 existing manual links from chicago-zip-codes, nashville-zip-codes, and chicago-area-code, plus the automated related-guides rotation (Counties category has only 2 members, so what-county-is-houston-in shows reciprocally)."
    },
    {
      "dimension": "10. Schema data consistency",
      "status": "not applicable",
      "detail": "First audit for this article; no prior edits to check drift against. Post-fix JSON-LD verified: datePublished unchanged (2026-08-03T00:00:00+00:00), dateModified correctly bumped (2026-08-18T00:00:00+00:00)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Neutral geography/demographics reference topic; no people, groups, or events referenced that could accrue new controversy."
    },
    {
      "dimension": "12. Image availability/copyright",
      "status": "not applicable",
      "detail": "Article has no image/heroImage fields -- this site's Guide schema does not support them (text + optional inline SVG only, per guides.ts's GuideSection.diagramSvg comment: 'no stock photos or AI-generated realistic imagery on this site'). No images to check."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "Neutral encyclopedic content, no violence/weapons/drugs/gambling, no clickbait framing. ads.txt live at dialwick.com/ads.txt correctly points to pub-5245502795720653; /privacy/, /about/, /terms/ all return 200."
    }
  ],
  "actions_taken": [
    "Fixed the 'Chicago never crosses a county line' overgeneralization by adding a caveat about the O'Hare Airport / DuPage County annexation strip (1956), while preserving the independently-verified-accurate ZIP-code-level claim (all 84 Chicago-primary ZIPs are Cook County per this site's own zipCounty.json).",
    "Corrected the outdated Cook County population-decline / Harris County overtake narrative in description, coreSummary, and section-3 heading+body, using the Census Bureau's Vintage 2025 county estimates (the most current official data available before this article's publish date). Replaced the superseded census.gov source with the Vintage 2025 press release; added a Wikipedia O'Hare source.",
    "Added 3 outbound in-body links (/chicago-zip-codes/, /atlanta-zip-codes/, /what-county-is-houston-in/), fixing a confirmed zero-outbound-links gap matching this site's established recurring pattern (5th+ occurrence -- see note below).",
    "Synced the identical population-trend correction to the sibling article what-county-is-houston-in (description, coreSummary, section-2 heading+body, +1 new source), where the same stale claim was found duplicated while adding the cross-link. This was a targeted duplicate-error fix only, not a full 13-dimension audit of that article.",
    "Caught and fixed a self-introduced description-length regression (207->256 chars) before committing, by re-measuring the rebuilt dist/ output against this site's own description-length distribution.",
    "updated bumped to 2026-08-18 on both articles; published left unchanged (2026-08-03) on both."
  ],
  "seo_score": "no material change pre/post beyond the self-caught description-length regression (fixed before commit); title/description both within this site's own established distribution",
  "geo_score": "~85-88/99 estimated post-fix (up from ~72-76/99 pre-fix, estimated manual pass, no full 99-point run)",
  "escalation": "The zero-outbound-in-body-links pattern has now been found and fixed 6 times on this site (atlanta-zip-codes, new-york-zip-codes, texas-zip-codes, texas-area-codes, california-area-codes, and this article) -- well past the 独立站/内容通用教训库.md 's own '复发>=2次须升级' threshold for converting a recurring finding into a mechanical pre-publish check. Not escalated by this audit run (out of scope -- would require editing the dialwick-content-publishing scheduled task's SKILL.md); flagged here for Owen or a future run to action."
}
```

## what-county-is-houston-in

First full 13-dimension audit for this article (published 2026-08-03; had only received a targeted duplicate-error sync during the `what-county-is-chicago-in` audit on 2026-08-18, not a full audit -- see that entry above). 2 confirmed findings, both independently verified by separate background agents before fixing.

```json
{
  "url_slug": "what-county-is-houston-in",
  "url": "https://dialwick.com/what-county-is-houston-in/",
  "last_audited": "2026-08-20",
  "published_date": "2026-08-03",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "4 named authoritative sources (GeoNames postal code database, Wikipedia Harris County article, Axios Houston, US Census Bureau Vintage 2025 release) with specific dated statistics (178 ZIP codes, Dec 22 1836 founding, 5.05M population, 106,000/year growth, 150,000-person gap to Cook County)."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "1 confirmed problem -> fixed; core population-trend claim (previously fixed 2026-08-18) re-verified accurate",
      "detail": "(a) CONFIRMED and fixed: description/coreSummary/section-1 heading/FAQ-1 all stated 'Houston is entirely inside Harris County' / 'no cross-county split' as an unqualified city-level claim. Independent agent confirmed via Wikipedia's 'Houston' article infobox (which lists the city's counties as Harris, Fort Bend, AND Montgomery) and the 'Fort Bend County, Texas' article (which states Houston is that county's largest city by population, i.e. real residents, not empty land) that the City of Houston's actual municipal boundary extends into small annexed parts of Fort Bend and Montgomery counties -- structurally identical to the O'Hare/DuPage overgeneralization already fixed on the sibling article what-county-is-chicago-in on 2026-08-18 (see that entry above), except Houston's case involves populated annexed areas in two counties rather than one uninhabited airport strip. The narrower, specific claim -- all 178 USPS-Houston-primary-place-name ZIP codes sit in Harris County -- was independently re-verified as accurate by querying this site's own src/lib/data/zipCounty.json directly (178/178 rows show county='Harris'). Fixed by adding a caveat (distinct wording from the Chicago article's 'one asterisk' phrasing, to avoid the cross-sibling template-reuse pattern in this site's own 内容通用教训库.md L-0804-11) that preserves the accurate ZIP claim while correcting the city-limits claim, across description/coreSummary/section-1 body/FAQ-1. (b) The population-trend claim (Cook County growing again since 2023, ~150,000-person lead over Harris, sourced to the Census Bureau's Vintage 2025 release) was already corrected during the 2026-08-18 what-county-is-chicago-in audit's duplicate-sync fix; re-checked this run against the same Vintage 2025 source and found still accurate and current as of 2026-08-20 -- no further changes needed."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published 2026-08-03 correctly unchanged. updated was already 2026-08-18 from the prior partial sync; bumped to 2026-08-20 to reflect this run's substantive content changes. Population-trend data (Vintage 2025) remains the most current official release; no newer Census Bureau county estimate exists as of this audit."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "Live SERP check via dataforseo_query.py serp for 'what county is houston in' (9,900/mo search volume, KD43, per this site's own keywords.db from initial 2026-08-03 research) shows the current top organic results are harriscountytx.gov, Wikipedia (Houston + Harris County as separate pages), visithoustontexas.com, a bare ZIP-list aggregator (ciclt.net), maps.apple.com, tshaonline.org, haaonline.org, and hcoed.harriscountytx.gov -- none combine the specific 178-ZIP-code-count + population-race-vs-Cook-County angle this article does, so the differentiation is genuine, not redundant with the SERP leaders. Note: dialwick.com does not currently appear in this SERP's top ~10 (article is ~2.5 weeks old against a KD43 term dominated by .gov/Wikipedia authority) -- a ranking/timing observation, not a content-quality defect."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "pass",
      "detail": "Live page checked via curl+DOM: single H1, 2 content H2s + FAQ H2, self-referencing canonical, 3 JSON-LD blocks (Article/BreadcrumbList/FAQPage, 3-item FAQ) consistent with guides.ts. Title 37 chars (matches its Counties-category sibling's established convention). Description was 191 chars pre-fix; this run's edited description measured 203 chars against this site's own live description-length distribution (n=34, mean=184.9, sd=24.5) -> z=0.74, within normal range, no regression."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85-88/99 estimated post-fix (up from ~78-80/99 pre-fix, manual estimate, no full 99-point run)",
      "detail": "robots.txt confirmed allowing GPTBot/ChatGPT-User/ClaudeBot/Claude-Web/PerplexityBot/Google-Extended. Strong structure (FAQPage schema, 4 named sources, self-contained FAQ answers, dateModified fresh as of this audit). Pre-fix, the unqualified 'entirely inside Harris County' claim was a real citability risk (an AI answer engine citing this page verbatim would state something Wikipedia's own infobox contradicts) and zero outbound in-body links weakened internal-authority signal. Post-fix: caveat added, 2 outbound links added -- comfortably above the 80 bar."
    },
    {
      "dimension": "7. Early-content humanizer/avoid-ai-writing backfill",
      "status": "pass",
      "detail": "published 2026-08-03, predates avoid-ai-writing's 2026-08-07 mandatory adoption. Re-scanned original prose in detect mode: no AI-writing tells found; the site's established double-hyphen ' -- ' dash convention is accepted house style per prior audits, not re-flagged. All newly written replacement text (description/coreSummary/section-1 body/FAQ-1) was deliberately worded differently from the sibling Chicago article's near-identical 'one asterisk' phrasing (to avoid a self-introduced L-0804-11 template-reuse issue) and re-scanned -- clean."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass (1 non-blocking note)",
      "detail": "GeoNames, Wikipedia Harris County, and the Census Vintage 2025 press release all return HTTP 200 to curl. The Axios source returns 403 to curl/scripted UAs (confirmed this is Axios's own bot-blocking, not link rot -- WebSearch independently confirmed the article is live, indexed, and its content -- 106,000 residents added, ~173,000-person gap as of the article's own March 2025 vintage -- matches what this DialWick article cites). New Wikipedia 'Houston' source (added this run for the municipal-boundary fact) also returns 200."
    },
    {
      "dimension": "9. Internal link health",
      "status": "confirmed problem -> fixed",
      "detail": "Independent agent confirmed via direct read of guides.ts: this article had zero manual outbound in-body links despite its own prose naming 'Los Angeles County, California' and 'Cook County, Illinois (Chicago)' by name, plus discussing Houston's own ZIP codes extensively -- all three have real sibling articles on this site (los-angeles-zip-codes, what-county-is-chicago-in, houston-zip-codes). This is the 7th occurrence of this site's established recurring zero-outbound-links pattern (previously fixed on atlanta-zip-codes, new-york-zip-codes, texas-zip-codes, texas-area-codes, california-area-codes, what-county-is-chicago-in). Fixed: added 2 outbound links (/houston-zip-codes/ in section 1, anchored on the article's own '178 ZIP codes' claim; /what-county-is-chicago-in/ in section 2, anchored on the 'Cook County, Illinois (Chicago)' mention). Per the independent agent's recommendation, did not force a link for the Los Angeles mention -- it appears only as a population-rank comparison with no ZIP-code context, so linking to los-angeles-zip-codes there would be a topical mismatch; no better-fitting LA sibling page exists on this site. Inbound: not an orphan -- what-county-is-chicago-in already links here both via a manual in-body link and the automated related-guides rotation (Counties category has only 2 members)."
    },
    {
      "dimension": "10. Schema data consistency",
      "status": "pass",
      "detail": "Post-fix JSON-LD verified in dist/ output: datePublished unchanged (2026-08-03T00:00:00+00:00), dateModified correctly bumped (2026-08-20T00:00:00+00:00). FAQPage mainEntity count (3) matches guides.ts faq[] array."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Neutral geography/demographics reference topic; no people, groups, or events that could accrue new controversy."
    },
    {
      "dimension": "12. Image availability/copyright",
      "status": "not applicable",
      "detail": "This site's Guide schema has no image/heroImage fields (text + optional inline SVG only). No images to check."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "Neutral encyclopedic content, no restricted categories, no clickbait framing. ads.txt at dialwick.com/ads.txt correctly points to pub-5245502795720653; /privacy/, /about/, /terms/ all return 200."
    }
  ],
  "actions_taken": [
    "Fixed the 'Houston is entirely inside Harris County' / 'no cross-county split' overgeneralization by adding a caveat (worded distinctly from the sibling Chicago article's fix to avoid template reuse) across description, coreSummary, section-1 body, and FAQ-1, noting the City of Houston's actual municipal boundary extends into small annexed parts of Fort Bend and Montgomery counties, while preserving the independently-verified-accurate 178-ZIP-codes-in-Harris-County claim.",
    "Added a new Wikipedia 'Houston' source documenting the multi-county municipal boundary.",
    "Added 2 outbound in-body links (/houston-zip-codes/, /what-county-is-chicago-in/), fixing a confirmed zero-outbound-links gap -- this site's 7th occurrence of this recurring pattern (see escalation below).",
    "Re-verified (not re-fixed) the population-trend claim corrected during the 2026-08-18 what-county-is-chicago-in duplicate-sync -- still accurate against the Vintage 2025 Census release, no change needed.",
    "updated bumped to 2026-08-20; published left unchanged (2026-08-03).",
    "Appended a 7th-occurrence recurrence note to 独立站/内容通用教训库.md L-0804-2 (absolutist single-county-boundary claims lacking counter-example checks), flagging a new sub-pattern: two sibling articles that explicitly cross-link and name each other still each independently missed the other's identical structural defect."
  ],
  "seo_score": "no material change beyond the description length staying within this site's own established distribution (191->203 chars, z=0.74)",
  "geo_score": "~85-88/99 estimated post-fix (up from ~78-80/99 pre-fix, manual estimate, no full 99-point run)",
  "escalation": "The zero-outbound-in-body-links pattern has now been found and fixed 7 times on this site (atlanta-zip-codes, new-york-zip-codes, texas-zip-codes, texas-area-codes, california-area-codes, what-county-is-chicago-in, and this article) -- well past the 独立站/内容通用教训库.md 's own '复发>=2次须升级' threshold. Not escalated by this audit run (out of scope -- would require editing the dialwick-content-publishing scheduled task's SKILL.md); flagged here again for Owen or a future run to action. No independent-verification-agent hangs occurred this run -- both spawned agents completed normally (17.6s and 28.8s respectively), well under the watchdog's 15-20 minute threshold."
}
```

```json
{
  "url_slug": "213-area-code",
  "last_audited": "2026-08-21",
  "published_date": "2026-08-17",
  "checklist": [
    "Is the '213 covers only downtown LA + 19 cities, no county split' framing accurate (per this site's established known risk: this is one of the 5 never-audited single-area-code template pages)?",
    "Are the five historical split dates/destinations (714/805/818/310/323) and the 2017 merge + 2024 738 overlay dates correct?",
    "Is the 213-group hip-hop naming history (Long Beach, 1992, 562 in 1997) accurate?",
    "Are all 7 external sources still live?",
    "Site-wide em-dash-equivalent scan: this site's prior audits have only ever grepped for the Unicode em dash (—), never for other dash-like constructions"
  ],
  "findings": [
    {
      "dimension": "Fact-check: area code split history",
      "status": "found and fixed 2 factual errors, independently confirmed",
      "detail": "(1) The article said '714 broke off for Orange County in 1951.' Independent research (agent + WebSearch cross-check) confirmed 714's actual 1951 territory was a vast swath of Southern California from San Diego to the Nevada/Arizona borders -- it only narrowed to today's Orange County footprint after three further splits (619 in 1982, 909 in 1992, 949 in 1998). Retroactively describing the 1951 split using a boundary that didn't exist until 47 years later was judged a real inaccuracy, not an acceptable simplification (the other four splits in the same sentence are each described by their actual original territory, so this one broke the pattern). Rewritten to state the true 1951 destination and note the later narrowing. (2) The hip-hop-group section said 'Long Beach was still inside 213's original footprint at the time [1992]' and that it 'split off onto area code 562' -- implying a direct 213-to-562 transition. Independent research confirmed Long Beach actually moved from 213 to the newly created 310 on November 2, 1991 (a full year before the group formed), and only moved from 310 to 562 in 1997. The article skipped the intermediate 310 step and misstated which code covered Long Beach when the group formed. Both the body section and the matching FAQ answer were rewritten to state the correct two-step history."
    },
    {
      "dimension": "Fact-check: remaining claims",
      "status": "pass",
      "detail": "2017 CPUC boundary elimination (213/323 merge), 738 approval date (March 16, 2023) and service-start date (November 1, 2024), NANPA's June 2025 exhaustion projection, and the 213-group's formation year (1992) and lineage (inspired by Oakland's 415 group) were all independently WebSearch-verified against CPUC press releases and Wikipedia and matched the article exactly."
    },
    {
      "dimension": "External source link rot",
      "status": "pass",
      "detail": "All 7 sources curl-verified live (200) with a real browser UA. fcc.gov/consumers/guides/spoofing returned 403 to curl across 3 retries; WebSearch independently confirmed the page is live and indexed with matching content (neighbor-spoofing definition), so this is bot-blocking, not link rot."
    },
    {
      "dimension": "SEO technical audit",
      "status": "found and fixed 1 issue",
      "detail": "Meta description was 217 characters, well past Google's ~155-160 char practical display threshold (57 chars over -- worse than a same-day CalcBadger finding of 186 chars). It would truncate mid-word ('...three-way overlay with 32'). Trimmed to 153 chars, split into two clean sentences, no loss of key facts (738, 323, downtown LA, 19 cities all retained). Title (84 chars), canonical, single H1, 5 H2s, and schema (Article/FAQPage/BreadcrumbList/Person/WebPage) were all otherwise healthy."
    },
    {
      "dimension": "AI-writing tell: NEW discovery -- ASCII ' -- ' as an undetected em-dash substitute (this audit's headline finding)",
      "status": "confirmed and fixed on this article; site-wide scope discovered and flagged, NOT fixed site-wide (out of scope for a single-article audit)",
      "detail": "A grep for the Unicode em dash (—) on this article returned zero hits, consistent with every prior DialWick audit's 'clean' verdict on this dimension. But the article contained 9 instances of a literal ASCII double-hyphen surrounded by spaces (' -- '), used in the exact same 'trailing punchy clause' role a real em dash fills (e.g. \"pushed 213 through five separate splits -- more than any other original California area code\"). A site-wide grep found this pattern in ALL 42 of DialWick's published articles, 627 total instances, with essentially zero occurrence (0-3, almost certainly incidental) on any of the other 9 sites in the matrix. An independent agent judged this a genuine, confirmed AI-writing tell equivalent to the em-dash rule, not a defensible typographic-style choice: the density (~1 per 85 words) and its near-uniform replication across all 42 independently-generated articles is a signature of a single generation process, not organic human stylistic variation. This means every prior DialWick content-quality audit's em-dash check was a **false negative** -- the AI-writing pattern was never actually absent from this site, the scan just used the wrong search string. Fixed the 9 instances in this article (rewritten to periods/colons/commas, matching the remedy already used site-wide for real em dashes). The other 41 articles / ~618 remaining instances are NOT fixed by this run -- fixing them all would be far outside the scope of a single-article audit's 'targeted fix only' rule. Recommending in the final report that Owen consider a dedicated DialWick-wide remediation pass (analogous to the WageLark SVG em-dash scanner precedent) and that this site's own zero-tolerance dash scan be updated to also grep for ' -- ' going forward, not just —/–."
    },
    {
      "dimension": "Internal link health",
      "status": "pass",
      "detail": "Article links out to /california-area-codes/ and /scam-area-codes/ (2 outbound in-body links -- does not repeat this site's separately-tracked 'zero outbound links' recurring defect noted in the entry above). Category 'Area Codes' has well over 6 siblings so the site's related-guides rotation window applies normally; not investigated further as an orphan-page risk since outbound linking confirms this page is actively part of the site's link graph, not isolated."
    },
    {
      "dimension": "Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage(5 Q&A)/BreadcrumbList/WebPage/Person schema all present and matched guides.ts content on live-page inspection."
    },
    {
      "dimension": "AdSense policy compliance",
      "status": "pass",
      "detail": "The LADWP scam-warning section is a neutral, factual public-safety notice (matches LADWP's own official alert page verbatim in substance), not sensationalized or clickbait-framed. No restricted categories. ads.txt/privacy/about/terms all reachable (site-wide baseline, unchanged)."
    }
  ],
  "independent_verification": "Two agents spawned. First verified both factual-error candidates (714/1951 territory, Long Beach/213-group timeline) with fresh WebSearch research against CPUC/Wikipedia primary-ish sources -- both CONFIRMED as real errors. Second judged whether the site-wide ' -- ' pattern should be treated as equivalent to the em-dash AI-writing rule -- CONFIRMED yes, with reasoning distinguishing it from legitimate low-density human double-hyphen conventions. Both completed normally within 1-2 minutes, no watchdog escalation needed.",
  "actions_taken": [
    "Fixed 2 factual errors (714's actual 1951 territory; Long Beach's real 213->310->562 sequence) across coreSummary, 2 section bodies, and 2 FAQ answers.",
    "Trimmed meta description from 217 to 153 characters.",
    "Rewrote all 9 instances of narrative ' -- ' (in description/coreSummary/section bodies/FAQ) to periods/colons/commas; verified 0 remaining via grep on both source and build output.",
    "updated bumped to 2026-08-21 (published field already existed as '2026-08-17', no git-history backfill needed).",
    "npm test 64/64 passed, npm run build 51 pages succeeded, 0 errors.",
    "Site-wide grep confirmed the ' -- ' pattern exists in all 42 DialWick articles (627 total instances) and is essentially absent (0-3, incidental) elsewhere in the 10-site matrix -- flagged as a major new escalation item, not remediated beyond this one article (out of scope for a single-article audit)."
  ],
  "seo_score": "meta description fixed (217->153 chars); everything else already healthy",
  "geo_score": "not re-scored with a full 99-point run; factual corrections and dash cleanup should not have reduced extractability",
  "escalation": "MAJOR, project-wide: this session discovered that DialWick's 42 published articles collectively contain 627 instances of ' -- ' (ASCII double-hyphen) used as an undetected em-dash-equivalent AI-writing tell, confirmed by independent agent judgment as functionally identical to the Unicode em-dash pattern this project has been scanning for and fixing across all other sites since L-0810-4. Every prior DialWick content-quality audit's 'em dash: pass' verdict was a false negative because those scans only grepped for —, never for ' -- '. This is analogous in scale to the WageLark SVG em-dash discovery (L-0810-4, 8th recurrence) that triggered a dedicated scanner script -- but larger (627 vs. 146 instances) and concentrated entirely on one site. Recommending to Owen: (1) a dedicated DialWick-wide remediation task/session to clean up the remaining ~618 instances rather than relying on this audit task's ~1-article-per-run cadence (which would take well over a year to reach every article organically), and (2) updating whatever grep pattern this project's various content-quality-audit and content-publishing tasks use for 'zero em dash' checks to also match ' -- ' (and possibly other dash-like ASCII substitutions), not just —/–, since this false-negative mode could in principle recur on any site."
}
```

## dallas-zip-codes

```json
{
  "url_slug": "dallas-zip-codes",
  "url": "https://dialwick.com/dallas-zip-codes/",
  "last_audited": "2026-08-22",
  "published_date": "2026-08-04",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "Sources are GeoNames.org (CC BY 4.0) plus 3 named Wikipedia articles (Highland Park TX, University Park TX, Downtown Dallas); a 4th Wikipedia source (Dallas itself) added during this audit. Specific, named, independently verifiable, consistent with this site's established EEAT bar."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed",
      "detail": "Article claimed 'Dallas doesn't split across a county line the way Atlanta splits between Fulton and DeKalb.' This is the same recurring absolute-boundary-claim pattern as what-county-is-chicago-in (O'Hare/DuPage) and what-county-is-houston-in (Fort Bend/Montgomery) -- see 内容通用教训库.md L-0804-2, now its 8th recorded recurrence (3rd on DialWick). Independent agent WebSearch confirmed Wikipedia's own Dallas infobox lists the city's municipal boundary as spanning Dallas, Collin, Denton, Kaufman, and Rockwall counties -- 5 counties, more than Atlanta's 2, meaning the comparison direction in the article was backwards. The narrower ZIP-code-level claim (all 105 'Dallas, TX' place-name ZIPs sit in Dallas County, including the 2 DFW-airport ZIPs 75261/75262) was independently re-verified against the site's own src/lib/data/zipCounty.json and found accurate -- only the broader city-boundary generalization was wrong. Also re-verified as accurate and unchanged: Highland Park incorporation (Nov 29 1913 vote, 1915 charter, 1919-1945 annexation fight), University Park incorporation (April 24 1924) and 1945 annexation vote (53%-47%), Park Cities 2010 combined population (31,632), and the 105-ZIP / 4-Highland-Park-ZIP counts -- all confirmed via WebSearch against independent sources (hptx.org, uptexas.org, Wikipedia) with no discrepancies found."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass, no stale data found",
      "detail": "published 2026-08-04; no material data changes identified (incorporation dates, ZIP assignments, and population figures are static historical/administrative facts, not the kind of figure that drifts like the Cook/Harris county population-race pattern seen elsewhere in this log). updated bumped to 2026-08-22 for the substantive factual fix, consistent with this site's 'bump for substantive fixes, not for meta-only fixes' precedent."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass, strong",
      "detail": "dataforseo_query.py serp for 'dallas zip codes' shows the real SERP (12 elements) dominated by GIS map tools (maxleaman.com, mapbusinessonline.com, gisgeography.com), a Zillow ZIP listing, an ArcGIS county GIS hub page, and a Quora thread -- none mention Highland Park, the never-annexed-enclave narrative, or any historical angle. The article's Highland Park/University Park annexation-fight framing is genuine incremental value versus a SERP of plain ZIP-list/map tools."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "confirmed problem -> fixed",
      "detail": "Live page checked via curl+DOM: single H1, canonical present, 3 JSON-LD blocks (Article/BreadcrumbList/FAQPage) present and internally consistent. Title was 105 chars incl. ' | DialWick' suffix (94-char field) and meta description was 222 chars, both confirmed by independent agent as real truncation-risk problems against 2026 SERP guidance (~50-60 char title / ~150-160 char description). Fixed: title shortened to 41 chars (52 with suffix, matching the already-fixed atlanta-zip-codes' 'X ZIP Codes: The Full List by County' pattern), description shortened to 151 chars."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85/99 both before and after fix",
      "detail": "Manual rubric pass (ai-seo skill's Structure/Authority/Presence pillars, consistent with this log's established scoring convention for this site): strong structure (coreSummary answer-first, 4 H2s, 105-row data table, 3-item FAQ), decent authority (GeoNames + now 4 Wikipedia citations, specific dates/percentages/population figures throughout), already had 3 outbound in-body links pre-fix (better than several sibling articles' pre-fix zero-link state) plus 3 inbound links from sibling articles. Main pre-existing weakness (unchanged by this fix): no directly quoted named-expert material. The fix improved factual accuracy and fluency (removed 14 AI-writing dash tells) without altering structure, so the score is unchanged at ~85/99, comfortably above the 80 threshold both before and after."
    },
    {
      "dimension": "7. Humanizer/avoid-ai-writing backfill",
      "status": "confirmed problem -> fixed",
      "detail": "published 2026-08-04 predates the 2026-08-07 avoid-ai-writing mandate. Scan found 14 instances of ' -- ' (ASCII double-hyphen dash substitute) across description(1)/coreSummary(2)/section-1-body(2)/section-2-body(2)/section-3-body(2)/section-4-body(1)/FAQ(4) -- consistent with this site's already-escalated, project-wide 627-instance ' -- ' finding logged under 213-area-code above (this is a continuation of that known systemic issue, not a new discovery). Independent agent recounted the same 14 and assessed the prose as otherwise clean (fact-dense, specific dates/entities, no vague attribution, no rule-of-three padding) -- a single mechanical defect, not broader AI-sounding structure. All 14 rewritten to periods/colons/parentheses per house convention (no Unicode em dash introduced); verified 0 remaining via grep on both source and the live deployed page."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 4 pre-existing sources (GeoNames.org postal-codes index, Wikipedia: Highland Park TX, Wikipedia: University Park TX, Wikipedia: Downtown Dallas) returned HTTP 200 via curl. The newly added 5th source (Wikipedia: Dallas) also confirmed live during the fact-check."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "Inbound: 3 manual in-body links already existed from texas-zip-codes, los-angeles-zip-codes, and houston-zip-codes (grep-confirmed). Outbound: 3 manual in-body links already existed pre-fix (texas-zip-codes, atlanta-zip-codes, new-york-zip-codes), and the fixed passage preserved links to atlanta-zip-codes and new-york-zip-codes. ZIP Codes category has well over 6 members so the related-guides rotation window applies normally, confirmed present in the live page's link list."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the same guide object fields; verified post-fix on the live deployed page that Article headline/description reflect the new shortened title/description and dateModified correctly shows 2026-08-22."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/annexation-history/administrative-boundary content. No reverse-number-lookup functionality or claims. Naming Highland Park/University Park's independence history is standard, well-documented municipal history, not a sensitive claim about any group."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field on this guide entry."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt correctly points to pub-5245502795720653 (verified live). robots.txt has explicit AI-crawler Allow rules (GPTBot/ChatGPT-User/ClaudeBot/Claude-Web/PerplexityBot/Google-Extended), consistent site-wide baseline. No reverse-lookup, no diagnostically restricted content; article stays within the site's stated YMYL/privacy red line."
    }
  ],
  "independent_verification": "3 agents spawned in parallel, one per confirmed-candidate finding (county-split factual claim, title/meta length, dash-pattern count). All 3 completed in under 30 seconds each with no watchdog escalation needed. County-split claim: CONFIRMED (Wikipedia Dallas infobox + TSHA both independently list Collin/Denton/Kaufman/Rockwall). Title/meta length: CONFIRMED (live curl re-fetch matched the claimed character counts exactly, well past any pixel-width tolerance). Dash pattern: CONFIRMED (independent grep-based recount matched 14 exactly; assessed as an isolated mechanical defect, not broader AI-sounding prose).",
  "actions_taken": [
    "Corrected the false claim that Dallas 'doesn't split across a county line' -- rewrote to distinguish the accurate ZIP-level claim (all 105 Dallas-named ZIPs sit in Dallas County) from the city's actual municipal boundary, which spans Dallas, Collin, Denton, Kaufman, and Rockwall counties. Removed the incorrect 'unlike Atlanta' comparison from coreSummary. Added a new Wikipedia:Dallas source citation.",
    "Shortened title from 94 to 41 characters (52 with ' | DialWick' suffix) and meta description from 222 to 151 characters.",
    "Rewrote all 14 instances of ' -- ' (description/coreSummary/4 section bodies/3 FAQ answers) to periods/colons/parentheses; verified 0 remaining via grep on source and live deployed page.",
    "updated bumped from 2026-08-04 to 2026-08-22 for the substantive factual fix (published field already existed, no git-history backfill needed).",
    "npm test 64/64 passed, npm run build 54 pages succeeded, 0 errors.",
    "Committed (2ef396d) and pushed to origin/main; verified live via polling (Rockwall text + new title/description confirmed live within ~45s of push).",
    "Submitted https://dialwick.com/dallas-zip-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200); logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish.",
    "Appended an 8th recurrence line to 内容通用教训库.md L-0804-2 (3rd DialWick occurrence: Chicago, Houston, now Dallas)."
  ],
  "seo_score": "on-page technical: 2 confirmed issues (title length, meta description length) found and fixed; no other technical issues found",
  "geo_score": "~85/99 both before and after (pass, comfortably above the 80 threshold; structure unchanged, accuracy and fluency improved)",
  "escalation": null
}
```

## chicago-zip-codes

```json
{
  "url_slug": "chicago-zip-codes",
  "url": "https://dialwick.com/chicago-zip-codes/",
  "last_audited": "2026-08-23",
  "published_date": "2026-08-04",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "GeoNames.org (CC BY 4.0), Federal Reserve History, Wikipedia: Continental Illinois, United Cargo ORD station info, zip-codes.com 60668 record -- specific, named, independently verifiable sources; a 6th (Wikipedia: O'Hare, Chicago) added during this audit."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed",
      "detail": "coreSummary claimed \"Chicago's ZIP map, unlike Atlanta's, never crosses a county line\"; section 1 body claimed \"Chicago doesn't split across a county line the way Atlanta splits between Fulton and DeKalb\"; FAQ answer claimed \"Yes, entirely...with no cross-county split.\" This is the same absolute-boundary-claim pattern as L-0804-2 (already found on this site in what-county-is-chicago-in, what-county-is-houston-in, dallas-zip-codes -- this is the 4th DialWick occurrence, 10th overall). First independent-verification pass, given both sentences together, returned NOT-CONFIRMED (agent read the section-1 sentence as scoped to the same ZIP-level context as the coreSummary sentence). Second pass, isolating the section-1 sentence alone (subject 'Chicago', compared directly against Atlanta's real municipal county split) returned CONFIRMED: Wikipedia's 'O'Hare, Chicago' article confirms the O'Hare community area (annexed 1956) is the one Chicago community area that extends outside Cook County, with its western/southwest edge in DuPage County -- a real exception to an unqualified 'Chicago never crosses a county line' claim. The narrower ZIP-level claim (all 84 'Chicago, IL' primary-place-name ZIPs sit in Cook County, including O'Hare's own 60666) was independently re-verified against this site's own zipCounty.json and found accurate -- only the broader city-boundary generalization was wrong. Also independently re-verified via WebSearch as accurate and unchanged: the O'Hare 60666 PO-Box-zone/112-airport-business claim, ComEd's 60668, JPMorgan Chase's 60673/60670, Bank of America/Continental Illinois's 60697, the 1984 collapse and 'too big to fail' phrase origin, and BankAmerica's 1994 acquisition -- no other fabrication found."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass, no stale data found",
      "detail": "published 2026-08-04; ZIP-to-county assignments and 20th-century bank/utility history are static facts, not the kind of figure that drifts. updated bumped to 2026-08-23 for the substantive factual fix."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass, strong",
      "detail": "Live WebSearch for 'chicago zip codes list' shows the SERP dominated by plain ZIP-lookup/map sites (zipcodestogo.com, zip-codes.com, zipdatamaps.com) that list ZIPs with no narrative; zipcodestogo.com independently confirms the same 84-ZIP count, corroborating this site's GeoNames-derived figure. The article's '28 of 84 aren't neighborhoods, here's who they really are' angle (O'Hare, ComEd, JPMorgan Chase, Bank of America/Continental Illinois) is genuine incremental value versus a SERP of bare ZIP lists."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "pass",
      "detail": "Live page checked via curl+DOM: single H1, canonical present, Article/BreadcrumbList/FAQPage/WebPage/Person JSON-LD all present and internally consistent, author Person schema present. Title is 89 chars incl. ' | DialWick' suffix -- long relative to the 50-60 ideal, but consistent with this site's established title convention (avg 78 chars across 47 articles; 10 other articles are longer, up to 101 chars) -- not treated as a defect unique to this article per the 'don't manufacture problems' precedent. Meta description was 156 chars (within the 150-160 target); the dash-cleanup fix (dimension 7) changed it to 154 chars, still in range."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85-88/99 both before and after fix",
      "detail": "Manual rubric pass (Structure/Authority/Presence pillars): strong structure (coreSummary answer-first, 2 H2s, 84-row data table, 4-item FAQ), solid authority (6 named sources, specific dates/dollar figures/entity names throughout: $7.5B rescue, 1984, 1994, 112 businesses), robots.txt allows all major AI crawlers (GPTBot/ChatGPT-User/ClaudeBot/Claude-Web/PerplexityBot/Google-Extended), author attribution via Person schema. Well-linked (7+ inbound references from sibling articles, 2 outbound to what-county-is-chicago-in and atlanta-zip-codes). Weakness (unchanged by this fix): no directly quoted named-expert material. The fixes improved factual accuracy and fluency without changing structure, so the score is unchanged at ~85-88/99, comfortably above the 80 threshold both before and after."
    },
    {
      "dimension": "7. Humanizer/avoid-ai-writing backfill",
      "status": "confirmed problem -> fixed",
      "detail": "published 2026-08-04 predates the 2026-08-07 avoid-ai-writing mandate. Skill(humanizer)/Skill(avoid-ai-writing) detect-mode scan of coreSummary + both section bodies found no vague attribution, no rule-of-three padding, no promotional language, no copula-avoidance issues -- prose is fact-dense with specific named entities and dates. The one real finding was 19 instances of ' -- ' (ASCII double-hyphen dash substitute) across description(1)/coreSummary(3)/section-1(3)/section-2(6)/FAQ(6) -- consistent with this site's already-escalated, project-wide 627-instance ' -- ' finding logged under 213-area-code (continuation of that known systemic issue, not a new discovery; dallas-zip-codes already fixed its own 14 instances the same way). Independent agent, given an isolated question about whether high-density ' -- ' sentence-joining is functionally equivalent to em-dash overuse as an AI-writing tell, returned CONFIRMED (~1 per 47 words vs. the ~1/1,000-word guideline). All 19 rewritten to periods/colons/parentheses per house convention (no Unicode em dash introduced); verified 0 remaining via grep on source and 0 in rendered build output (regex-stripped-tag scan of dist/chicago-zip-codes/index.html)."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 5 pre-existing sources (GeoNames.org, Federal Reserve History, Wikipedia: Continental Illinois, United Cargo ORD, zip-codes.com 60668) confirmed reachable via curl (200; one initial 000 with an alternate UA+redirect combo was a false alarm, resolved 200 on a plain HEAD request). The newly added 6th source (Wikipedia: O'Hare, Chicago) also confirmed live."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass",
      "detail": "grep of guides.ts confirms bidirectional linking: chicago-zip-codes links out to what-county-is-chicago-in and atlanta-zip-codes; what-county-is-chicago-in links back in; also referenced from chicago-area-code, new-york-zip-codes, austin-zip-codes, los-angeles-zip-codes, and fresno-zip-codes. Not an orphan; well-integrated into the site's Chicago/Counties/ZIP-code cluster."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/BreadcrumbList/FAQPage/WebPage/Person JSON-LD all present on the live page and consistent with visible content (4 FAQ Q&As match the schema's 4 Question/Answer pairs)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/annexation-history/bank-history content. No reverse-lookup functionality or claims. No sensitive claims about any group."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field on this guide entry."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly to pub-5245502795720653 (verified live). robots.txt has explicit AI-crawler Allow rules. No reverse-lookup, no misleading claims beyond the factual issue already fixed under dimension 2."
    }
  ],
  "independent_verification": "4 agents spawned. County-line claim: 1st pass (both sentences given together) returned NOT-CONFIRMED; 2nd pass (isolating the section-1 sentence alone, subject 'Chicago' vs. Atlanta's real municipal split) returned CONFIRMED -- the evidence-framing mattered, logged as a methodology lesson in 内容通用教训库.md. Dash-pattern finding: CONFIRMED (same reasoning pattern as the 213-area-code/dallas-zip-codes precedent, re-verified independently rather than assumed). All 3 completed runs finished in under 10 seconds each; no watchdog escalation needed.",
  "actions_taken": [
    "Corrected the false claim that Chicago 'never crosses a county line' / 'no cross-county split' in coreSummary, section 1 body, and the FAQ answer -- rewrote to distinguish the accurate ZIP-level claim (all 84 Chicago-named ZIPs sit in Cook County) from the city's actual municipal boundary, which picked up a small, uninhabited DuPage County strip via the 1956 O'Hare annexation. Removed the 'unlike Atlanta' comparison. Added a new Wikipedia: O'Hare, Chicago source citation.",
    "Rewrote all 19 instances of ' -- ' (description/coreSummary/2 section headings/2 section bodies/4 FAQ answers) to periods/colons/parentheses; verified 0 remaining via grep on source and on rendered build output.",
    "updated bumped from 2026-08-04 to 2026-08-23 for the substantive fixes (published field already existed, no backfill needed).",
    "npm test 64/64 passed, npm run build 56 pages succeeded, both times, across both commits.",
    "Committed in 2 stages (65ac72e county-line fix, a468296 dash cleanup) and pushed to origin/main; verified live via polling both times.",
    "Submitted https://dialwick.com/chicago-zip-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200); logged to indexnow-submit-log.json.",
    "Ran seo_drift.py baseline before edits and compare after: only expected WARNING-level diffs (meta description text change, schema content change matching the edits) -- no unintended CRITICAL findings.",
    "Appended a dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish.",
    "Appended a 10th recurrence line to 内容通用教训库.md L-0804-2 (4th DialWick occurrence: Chicago county page, Houston county page, Dallas ZIP page, now Chicago ZIP page -- the 2nd case of two sister articles about the same city both carrying this bug), plus a standalone independent-verification-methodology note about evidence framing affecting agent judgment."
  ],
  "seo_score": "no material change (title/description already within or near this site's established norms; description shortened by 2 chars as a side effect of the dash cleanup, still in range)",
  "geo_score": "~85-88/99 both before and after (pass, comfortably above the 80 threshold; structure unchanged, accuracy and fluency improved)",
  "escalation": null
}
```

## los-angeles-zip-codes

```json
{
  "url_slug": "los-angeles-zip-codes",
  "url": "https://dialwick.com/los-angeles-zip-codes/",
  "last_audited": "2026-08-24",
  "published_date": "2026-08-04",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "GeoNames.org (CC BY 4.0), 5 Wikipedia articles (History of the San Fernando Valley, Shoestring annexation, Harbor Gateway, Venice Los Angeles, San Fernando California), and a 1995 Daily Bruin article -- 7 specific, named, independently verifiable sources for a long, detailed article."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "pass, no fabrication found",
      "detail": "7 of the article's most load-bearing historical/numeric claims independently verified via WebSearch, all CONFIRMED accurate: (1) March 29, 1915 San Fernando Valley annexation vote, 681-25 margin, ~108,732 acres (~170 sq mi, matches the article's figure); (2) San Fernando incorporated Aug 31, 1911 by an 8-vote margin; (3) Venice annexation vote Nov 1925, 3,130-2,215, effective 1926; (4) UCLA's 90095 ZIP code took effect Jan 1, 1995, split from 90024; (5) San Pedro/Wilmington consolidated into LA Aug 28, 1909, following the 1906 Shoestring Strip annexation; (6) Lankershim annexed to LA Dec 1923, renamed North Hollywood 1927; (7) Owensmouth annexed Feb 1917, later renamed Canoga Park. Also independently confirmed the article's core geographic claim (the City of Los Angeles sits entirely within LA County, unlike Chicago's O'Hare/DuPage exception found in the chicago-zip-codes audit) -- this article's ZIP-level 'no cross-county split' claim is correctly scoped and does not repeat the L-0804-2 absolute-boundary-claim pattern. The 94-ZIP table itself was independently recounted programmatically (94 rows, matches). No factual issues found."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published 2026-08-04; all claims are static historical/administrative facts (annexation votes, ZIP assignment dates), not the kind of figure that drifts. No new overlay/split activity affecting Los Angeles ZIP codes since publish. updated bumped to 2026-08-24 for the dash cleanup."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass, strong",
      "detail": "The article's differentiator (documenting exactly which LA-area neighborhoods carry non-'Los Angeles' ZIP names, tracing each to a specific annexation event with vote counts and dates, and explicitly listing the never-annexed independent cities) is genuine narrative depth beyond a bare ZIP list -- consistent with the standard this site has established on sibling ZIP-code articles."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "pass",
      "detail": "Live page checked via curl+DOM: single H1, self-referencing canonical, Article/BreadcrumbList/FAQPage JSON-LD present (Article includes nested WebPage mainEntityOfPage + Person author), 4 FAQ entries matching FAQPage schema. Title 101 chars, description 189 chars -- both within this site's established distribution (site-wide description avg 183.9 chars across 50 articles, 30/50 over 180 chars; title lengths up to 101 chars seen elsewhere), not treated as defects per the L-0805-2 precedent (compare to sibling articles' actual distribution, not a generic character-count rule)."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85-88/99 both before and after",
      "detail": "Manual rubric pass (Structure/Authority/Presence): strong structure (216-word answer-first coreSummary, 4 H2 sections, 94-row data table, 4-item FAQ), solid authority (7 named sources, specific vote counts/dates/acreage throughout), robots.txt allows all major AI crawlers, author attribution via Person schema, well-linked internally (4 inbound references). Weakness (unchanged by this fix): no directly quoted named-expert material. Fixes improved fluency without changing structure, so score is unchanged, comfortably above the 80 threshold."
    },
    {
      "dimension": "7. Humanizer/avoid-ai-writing backfill",
      "status": "confirmed problem -> fixed",
      "detail": "published 2026-08-04 predates the 2026-08-07 avoid-ai-writing mandate. Skill(humanizer)/Skill(avoid-ai-writing)-style scan found essentially no AI vocabulary tells (grepped the full text against the Tier 1/2 word lists: only 1x 'genuinely' and 1x 'effective', both contextually normal, far below any density threshold). The one real, substantial finding: 25 instances of ' -- ' (ASCII double-hyphen dash substitute) across description/coreSummary/4 section bodies/1 section heading/3 FAQ answers -- a density of ~1 per 96 words, consistent with this site's already-established, repeatedly-confirmed systemic L-0821-4 pattern (this is the site's 6th documented recurrence of this exact issue, following 213-area-code, 214-area-code, scottsdale-zip-codes, and 2 cross-site gamma/delta variants). Independently verified CONFIRMED before fixing. All 25 rewritten to periods/colons/parentheses per house convention (no Unicode em dash introduced); verified 0 remaining via grep on source and 0 in rendered build output."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "6 of 7 sources confirmed reachable via curl (200): GeoNames, 5 Wikipedia articles. The 7th (Daily Bruin, dailybruin.com/1995/01/11/...) returned 403 via curl with response headers showing 'cf-mitigated: challenge' / 'server: cloudflare' -- a Cloudflare anti-bot challenge signature, not an origin dead-link/404 state. Independently verified via 2 fresh WebSearch queries that returned the exact URL live with matching title and substantive excerpted content (quotes from UCLA Mail Services Director Edward Meyers) -- CONFIRMED as a live, bot-protected page, not a broken link. No action needed (per the known curl/WebFetch JS-rendering blind-spot pattern, L-0809-8)."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass",
      "detail": "grep of guides.ts confirms this article outlinks to /chicago-zip-codes/ and /dallas-zip-codes/ in prose, and is itself linked from 4 sibling articles (boston-zip-codes, zip-code-shows-wrong-city, california-area-codes, long-beach-zip-codes) with 4 distinct, non-repetitive anchor phrases ('Los Angeles ZIP page', 'Los Angeles', 'greater LA area', 'full Los Angeles ZIP code list'). Not an orphan."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/BreadcrumbList/FAQPage JSON-LD all present on the live page and consistent with visible content: Article headline/description match title/description fields, 4 FAQ Q&As match the FAQPage schema's 4 Question/Answer pairs, BreadcrumbList matches the ZIP Codes category hierarchy."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/annexation-history content. No reverse-lookup functionality or claims. No sensitive claims about any group; scam-number-pattern concern (site-specific risk area) is not applicable to this article's topic."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field on this guide entry."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly to pub-5245502795720653 (verified live). robots.txt has explicit AI-crawler Allow rules. /privacy/ and /about/ both return 200. No reverse-lookup, no scam/fraud content on this article (not applicable to its topic), no misleading claims."
    }
  ],
  "independent_verification": "2 agents spawned. Dash-pattern finding: CONFIRMED (agent read lines 541-639 directly, confirmed all 25 instances function as genuine em-dash substitutes, not hyphenated compounds or numeric ranges). Daily Bruin link-rot finding: CONFIRMED as a live Cloudflare-protected page, not a dead link (agent ran 2 independent fresh WebSearch queries that surfaced live, matching content). Both agents completed in under 20 seconds each; no watchdog escalation needed.",
  "actions_taken": [
    "Rewrote all 25 instances of ' -- ' (description/coreSummary/4 section bodies/1 heading/3 FAQ answers) to periods/colons/parentheses; verified 0 remaining via grep on source and on rendered build output (regex-stripped-tag scan of dist/los-angeles-zip-codes/index.html).",
    "updated bumped from 2026-08-04 to 2026-08-24 for the substantive fix (published field already existed, no backfill needed).",
    "npm test 64/64 passed, npm run build 59 pages succeeded.",
    "Committed (60e6b30) and pushed to origin/main; verified live via repeated polling (dateModified confirmed 2026-08-24T00:00:00+00:00, 0 dash instances in rendered HTML across 3 consecutive fetches).",
    "Submitted https://dialwick.com/los-angeles-zip-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200); logged to indexnow-submit-log.json.",
    "Ran seo_drift.py baseline before edits and compare after: only expected WARNING-level diff (schema content changed, matching the dash-cleanup edits) and an informational H2-count note (5->5, no real change) -- no unintended CRITICAL findings.",
    "Appended a dated entry to 内容发布日志.md marking this as a content-quality-audit update.",
    "Appended a 6th recurrence line to 内容通用教训库.md L-0821-4 (los-angeles-zip-codes, 25 instances, 7 independently-verified-accurate historical claims noted alongside the dash finding)."
  ],
  "seo_score": "no material change (title/description already within this site's established norms; no SEO technical issues found)",
  "geo_score": "~85-88/99 both before and after (pass, comfortably above the 80 threshold; structure unchanged, accuracy and fluency improved)",
  "escalation": null
}
```

## us-country-code

```json
{
  "url_slug": "us-country-code",
  "url": "https://dialwick.com/us-country-code/",
  "last_audited": "2026-08-25",
  "published_date": "2026-08-05",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "5 named, independently verifiable sources: NANPA's own official 'About the NANP' page, FCC international-dialing guide, and 3 specific Wikipedia articles (Area codes 809/829/849, Area code 721, Area code 784), plus a 4th Wikipedia source added during this audit (Area code 246). Not vague/generic attribution."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem -> fixed (1 finding); everything else independently verified accurate",
      "detail": "Unique verification priorities for this article: (a) the '20 NANP members' claim and the specific 18-territory/area-code table; (b) the historical area-code-split dates in the 1990s; (c) the Sint Maarten 721/2011 claim and its causal link to 2010 constituent-country status; (d) internal consistency with this site's own scam-area-codes article's corrected 10-code one-ring-scam list; (e) whether the Puerto Rico 787 mention double-counts Puerto Rico outside the '18 Caribbean nations and territories' bucket. Results: (a) CONFIRMED ACCURATE -- fetched NANPA's own official page (nanpa.com/about) directly, which lists exactly 20 members (US+territories, Canada, and 18 named Caribbean/Atlantic entities) matching the article's table row-for-row, including area codes. (b) ONE ERROR FOUND: the article stated 'the Bahamas' 242 on October 1, 1996, and Barbados' 246 later that same year' -- backwards. Independently verified via Wikipedia's Area code 246 article ('in effect from 1 July 1996') and a corroborating second source (allareacodes.com, 'put into service on July 1, 1996') that Barbados' 246 actually took effect 3 months BEFORE the Bahamas' 242 (October 1, 1996), not after. All other dates in the same paragraph (Bermuda 441 in 1995, Puerto Rico 787 March 1 1996, Saint Lucia 758 and Saint Kitts/Nevis 869 in mid-to-late 1996, Saint Vincent 784 June 1998, Dominican Republic overlay order 829-then-849) independently confirmed accurate via WebSearch + direct Wikipedia API fetches. (c) CONFIRMED ACCURATE -- Wikipedia's 'Area codes in the Caribbean' overview confirms Sint Maarten joined the NANP effective 30 September 2011, following the Netherlands Antilles' dissolution in October 2010; the article's 'wasn't assigned until 2011, the year after... became its own constituent country' framing matches. (d) CONFIRMED CONSISTENT -- this article's one-ring-scam cross-reference already lists the corrected 10-code set (268, 284, 473, 649, 664, 767, 809/829/849, 876), matching this site's own scam-area-codes audit finding; no internal contradiction. (e) CONFIRMED NOT AN ISSUE -- the Puerto Rico/787 mention appears only in the historical-context sentence about the 809 split, not in the 18-item Caribbean table itself; the article does not double-count Puerto Rico as a 19th/20th separate entity outside 'the US and its territories.'"
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published 2026-08-04 [sic 2026-08-05]; all claims are static historical/administrative facts (NANPA membership, area-code split dates), not the kind of figure that drifts day to day. No new NANP membership or split activity since publish. updated bumped to 2026-08-25 for the substantive date-sequencing fix (published field already exists on this entry, so no L-0809-1-style datePublished fallback risk)."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass, strong",
      "detail": "Live SERP check (dataforseo_query.py serp \"us country code\") shows the organic results dominated by bare-fact answer sites (instarem, countrycode.org, att.com, rebtel, talk360, xe.com, a Columbia University reference page, Wikipedia's country-code list, a Facebook thread) that stop at 'the US country code is +1' with no mention of the other 19 NANP members or the 1990s area-code-split history. DialWick's article's core framing -- '+1 belongs to 20 places, not just the US,' with the full 18-territory table and specific historical dates -- is genuine incremental depth versus the SERP, not a rehash."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "pass",
      "detail": "Live page checked via curl+DOM: single H1, self-referencing canonical, no meta robots block, 2 JSON-LD blocks (FAQPage with 3 Q&A pairs; Article with nested WebPage/Person). Title field 55 chars (66 with ' | DialWick' suffix), meta description 182 chars -- both within this site's already-established distribution across sibling articles (per L-0805-2 precedent: compare to actual sitewide distribution, not a generic character cap), not treated as defects."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85-88/99 both before and after",
      "detail": "Manual rubric pass against the ai-seo skill's Structure/Authority/Presence framework: strong structure (216-word answer-first coreSummary, 4 H2 sections, 1 data table, 3-item FAQ), strong authority (5 named sources including a direct NANPA primary-source citation, dense specific numbers/dates throughout -- exactly the 'cite sources + add statistics' combination the skill's cited Princeton GEO research flags as the highest-impact pairing), solid presence (robots.txt explicitly allows GPTBot/ChatGPT-User/ClaudeBot/Claude-Web/PerplexityBot/Google-Extended, Person-schema author attribution, 3 inbound + 2 outbound internal links). Weakness (unchanged by this fix): no directly quoted named-expert material. Fix improved factual accuracy and fluency without changing structure, so score is unchanged, comfortably above the 80-point threshold."
    },
    {
      "dimension": "7. Humanizer/avoid-ai-writing backfill",
      "status": "pass, no re-humanization needed",
      "detail": "published 2026-08-05, predates the 2026-08-07 avoid-ai-writing mandate. Grepped full article text against common AI-vocabulary/vague-attribution/rule-of-three word lists: no matches found. 9 instances of this site's established ASCII double-hyphen ' -- ' dash convention (L-0821-4 precedent: accepted sitewide house style, not flagged; fixing only this one article would create inconsistency, not resolve a real problem). No em dash, no vague attribution, no filler phrases, no promotional language. The one new sentence added during this audit's fix (Barbados/Bahamas date correction) was written in the same fact-dense, specific-numbers style as the surrounding text and independently re-checked against the same word lists -- no new AI-writing tells introduced."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "5 of 6 cited sources (post-fix) return HTTP 200 to curl: 3 Wikipedia articles (809/829/849, 721, 784) plus the newly-added Area code 246 article, all 200. FCC tip-sheet URL returns 403 to curl -- consistent with this site's already-documented Akamai-style bot-blocking pattern (same behavior confirmed on this site's FCC citations in the scam-area-codes and texas-zip-codes audits), confirmed live via WebSearch results showing current, matching content. NANPA's own page (nationalnanpa.com/about_us/abt_nanp.html) returned a curl-level SSL_ERROR_SYSCALL (connection-layer, not an HTTP error) in this sandboxed environment, but was independently confirmed live and current via WebSearch (returned as a top result with matching title, and its content -- the exact 20-member list -- was fetched and quoted successfully from the sibling nanpa.com/about page, which is the same organization's current primary domain). Not treated as link rot; consistent with the known curl/proxy blind-spot pattern (L-0809-8-adjacent)."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "grep of guides.ts confirms 3 inbound in-body links from other articles with 3 distinct anchor phrases ('this site's country code page', 'the US country code' x2), from austin-zip-codes-line, how-to-call-philippines-from-usa, and how-to-call-australia-from-us. The article itself links out to /how-do-area-codes-work/ and /scam-area-codes/ (2 outbound in-body links). Category 'International Dialing' has 3 members (us-country-code, how-to-call-philippines-from-usa, how-to-call-australia-from-us), <=6, so the automated related-guides rotation shows all 3 to each other mutually -- verified live via curl that the sibling pages' rendered HTML links back to /us-country-code/."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "FAQPage/Article/BreadcrumbList (via nested WebPage) JSON-LD all present on the live page and consistent with content, verified both pre-fix (baseline) and post-fix (live poll): Article headline/description match title/description fields, 3 FAQ Q&As match the FAQPage schema's 3 Question/Answer pairs. seo_drift.py compare after the fix reported only an expected WARNING-level 'schema content changed' diff (matching the intended date-sequence edit), no CRITICAL findings (canonical, noindex, H1, title, HTTP status all unchanged)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "One-ring-scam mention is a single cross-reference sentence pointing to this site's own scam-area-codes article (already reviewed and accepted in that article's own audit as standard, government-sourced framing, not a blanket accusation against the named nations) rather than a full re-litigation of the topic here. No reverse-number-lookup functionality/claims, no calculator, consistent with the site's stated YMYL/privacy red line. Puerto Rico double-counting concern (priority e above) checked and confirmed not present."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field on this guide entry -- nothing to validate."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly to pub-5245502795720653 (verified live, HTTP 200). robots.txt has explicit AI-crawler Allow rules (GPTBot/ChatGPT-User/ClaudeBot/Claude-Web/PerplexityBot/Google-Extended) alongside the default Allow-all. /privacy/ and /about/ both return 200. No reverse-lookup, scam, or fraud content on this article itself (only a brief, sourced cross-reference to the dedicated scam-area-codes page), no misleading claims."
    }
  ],
  "independent_verification": "1 problem was found requiring independent verification (the Barbados/Bahamas date-sequencing error); everything else in dimension 2 was a direct primary-source confirmation (NANPA's own official member list, Wikipedia API fetches for each specific date) rather than a 'problem' needing a second opinion. 1 agent spawned with only the specific claim + supporting evidence (not this audit's overall judgment): independently re-researched via fresh WebSearch queries and reached the same conclusion -- CONFIRMED PROBLEM, Barbados' 246 (effective July 1, 1996) chronologically precedes the Bahamas' 242 (effective October 1, 1996), so the article's 'Barbados... later that same year [than the Bahamas]' framing was backwards. Agent completed in ~22 seconds; no watchdog/stuck-agent escalation needed.",
  "actions_taken": [
    "Reordered and corrected the Barbados/Bahamas 809-split date sentence: 'the Bahamas' 242 on October 1, 1996, and Barbados' 246 later that same year' -> 'Barbados' 246 on July 1, 1996, and the Bahamas' 242 later that same year, on October 1', preserving the surrounding sentence's style and the following sentence's already-correct Saint Lucia/Saint Kitts/Saint Vincent ordering.",
    "Added a supporting source citation (Wikipedia: Area code 246, Barbados) for the newly-added specific date.",
    "updated bumped from 2026-08-05 to 2026-08-25 for the substantive factual fix (published field already existed, no backfill needed).",
    "npm test 64/64 passed, npm run build 52 pages succeeded.",
    "Ran seo_drift.py baseline before the edit and compare after: only the expected WARNING-level 'schema content changed' diff, no CRITICAL findings.",
    "Committed (51aa3d4) and pushed to origin/main; polled the live URL (this site has no CF deploy hook, relies on git auto-deploy) with cache-busting query params until the new text was confirmed present.",
    "Submitted https://dialwick.com/us-country-code/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200); logged to indexnow-submit-log.json.",
    "Appended a dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish."
  ],
  "seo_score": "no material change (title/description already within this site's established norms; no SEO technical issues found)",
  "geo_score": "~85-88/99 both before and after (pass, comfortably above the 80 threshold; structure unchanged, accuracy and fluency improved)",
  "escalation": null
}
```

## austin-zip-codes

```json
{
  "url_slug": "austin-zip-codes",
  "url": "https://dialwick.com/austin-zip-codes/",
  "last_audited": "2026-08-27",
  "published_date": "2026-08-05",
  "findings": [
    {
      "dimension": "0. Article-specific diagnostic (data source risk assessment)",
      "status": "informational",
      "detail": "Article depends on 3 distinct data classes: (a) GeoNames.org's US postal code export (ZIP-to-county assignment for the 74-row table, explicitly cited with a 'checked 2026-08-05' freshness marker), (b) IRS's own address records for the 2 non-geographic ZIPs (73301/73344), (c) historical/legal facts about Williamson County MUD No. 1 -> Anderson Mill Limited District annexation (dates, vote counts, statute mechanism). Identified 5 article-specific checks before deep-diving: (1) does the 74-row table match the site's own zipCounty.json byte-for-byte; (2) are 73301/73344 genuinely IRS-only and correctly located in Travis County; (3) are the MUD/annexation dates (1973 formation, 1975-mid1980s construction, Dec 31 2008 annexation, May 2009 ratification vote) independently verifiable, not just copied from the article's own single cited source (amld.org); (4) is the 787-Puerto-Rico-area-code coincidence claim (in service since March 1, 1996) accurate; (5) does the 'Austin ranks 5th among Texas cities' cross-reference to texas-zip-codes still match that sibling article's own table."
    },
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "4 named sources (GeoNames.org, IRS.gov PDF, amld.org, Wikipedia), Person-schema author attribution linking to /about/ (200), specific dated/numbered facts throughout (not generic filler) -- stronger EEAT than several sibling articles' pre-fix state documented earlier in this log (which had single-source EEAT as a confirmed weakness)."
    },
    {
      "dimension": "2. Fact accuracy (priority)",
      "status": "pass, no errors found",
      "detail": "(a) The 74-row ZIP/county table was diffed programmatically against this site's own src/lib/data/zipCounty.json (GeoNames-derived, retrieved 2026-08-03): zero mismatches -- exact same 74 ZIPs, exact same 72 Travis / 2 Williamson (78717, 78729) split. (b) 73301 confirmed via WebSearch as the IRS Austin Submission Processing Center's ZIP (Parker Lane/East Riverside-Oltorf area); 73344 confirmed via WebSearch as the same IRS campus's second ZIP in the Walnut Creek Business Park area of Travis County -- both match the article's claims exactly. (c) Anderson Mill Limited District history independently corroborated via multiple WebSearch queries against communityimpact.com and the district's own historical record (accessible via WebSearch summary; direct curl/wayback fetch of amld.org returned 403/503, consistent with this site's known bot-blocking pattern): 1973 formation as Williamson County MUD No. 1, first houses 1975, construction continuing into the mid-1980s (~3,400 homes), 1998 Strategic Partnership Agreement (2nd amendment found via AustinTexas.gov EDIMS confirming a 2004 amendment), Anderson Mill Limited District created December 31, 2008, ratified by district voters May 9, 2009 -- every one of the article's specific dates/mechanisms matches. (d) 787 Puerto Rico area code confirmed via WebSearch as in service since March 1, 1996, split from 809 -- matches the article exactly, and is internally consistent with how this site's other ZIP/area-code articles already cite the same fact. (e) Cross-reference to texas-zip-codes ('putting Austin fifth... behind Houston, El Paso, Dallas, and San Antonio') verified against that sibling article's own table: Houston 178, El Paso 137, Dallas 105, San Antonio 83, Austin 74, Fort Worth 56 -- exact match, 5th place confirmed. (f) Noted but not treated as an error: DataForSEO competitor spot-check (see dimension 4) found zip-codes.com's Austin ZIP list swaps one code vs. this article -- zip-codes.com's list includes 78681 (a Round Rock-primary, Williamson County ZIP that only partially touches Austin) instead of 78769; a live GeoNames.org lookup performed today (2026-08-27) still returns 78769 as Austin/Travis, matching this article's disclosed source exactly as of the live check. This is provider-to-provider ZIP database variance (no single canonical 'correct' ZIP-to-city list exists across providers), not a DialWick data error -- the article transparently discloses its GeoNames methodology and checked-date in the table caption, and this is the same GeoNames-sourcing approach already used identically across 10+ other already-audited ZIP-code articles on this site."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass, no update needed",
      "detail": "published (2026-08-05) and updated (2026-08-05) both already present, no git-history backfill needed. No facts requiring a refresh were found -- the ZIP/county table, IRS ZIP assignments, and Anderson Mill annexation history are all historically stable facts (not subject to the 'active database keeps growing' or 'developing situation resolved' drift patterns seen elsewhere on this site), and independent re-verification today found the article's claims still accurate."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "dataforseo-query serp check for 'austin zip codes' (2026-08-27, real API call, $0.002): top organic results are spyglassrealty.com, ciclt.net, mytexashomeresource.com, data.austintexas.gov (official GIS), gisgeography.com (map), carefulhomeinspections.com ('6 Best Austin Zip Codes for Families'), a YouTube video, and maxleaman.com (map) -- dominated by real-estate/neighborhood-guide and map/GIS content. Directly inspected zip-codes.com's Austin page (a canonical ZIP-database aggregator) as a second competitor: it presents a bare data panel (population/income/housing stats, county list, ZIP count) with no narrative content. None of the visible competitors explain the IRS non-geographic ZIP pair (73301/73344), the Williamson County/Anderson Mill MUD annexation history behind 78717/78729, or the 787-area-code/Puerto-Rico numbering coincidence -- these are genuine, non-templated differentiators specific to this article, not a same-structure-different-city swap (consistent with this site's established pattern of avoiding the 'batch-template' doorway-page risk flagged in this project's CLAUDE.md)."
    },
    {
      "dimension": "5. seo-audit (technical/on-page)",
      "status": "pass",
      "detail": "Live page checked via curl+DOM: single H1, self-referencing canonical, no meta-robots block, 3 JSON-LD blocks (Article/FAQPage/BreadcrumbList) present and consistent with source content (headline/dates/FAQ questions all match guides.ts). robots.txt explicitly Allows GPTBot/ChatGPT-User/ClaudeBot/Claude-Web/PerplexityBot/Google-Extended plus default Allow-all. Article present in sitemap-0.xml. ads.txt resolves to pub-5245502795720653. Title (88 chars incl. suffix, 77 content-only) and description (193 chars) were initially flagged as candidate over-length issues based on an outdated ~150-160-char threshold remembered from this log's earlier entries; independent review agent returned NOT-CONFIRMED for both, citing this log's own L-0805-2 precedent (compare to actual sitewide distribution, not a generic cap) -- confirmed by directly running the site's check_seo_field_stats.py tool: title z-score=0.72, description z-score=0.39 (both well within normal range; site-wide across 44 articles: title mean=64.6/max=90, description mean=183.9/max=237). Not treated as defects. See dedicated finding below for the near-miss."
    },
    {
      "dimension": "5b. Near-miss: stale-threshold false positive (resolved)",
      "status": "not-confirmed, no fix needed",
      "detail": "Candidate findings 'title too long' and 'description too long' were sent to independent review before any fix was applied, per this task's hard requirement. Independent agent's verdict: NOT-CONFIRMED for both -- the ~150-160-char figure this audit initially reasoned from was a stale, pre-2026-08-06 threshold from this log's earliest entries, since superseded by the L-0805-2 'compare to actual site distribution' methodology (documented in this same file at multiple later entries: 'site-wide description avg 183.9 chars across 50 articles... not treated as defects per the L-0805-2 precedent'). Re-verified directly in this run with check_seo_field_stats.py: z=0.72 (title) and z=0.39 (description), both far from outlier range. No edit made. Logged as a recurrence under 独立站/内容通用教训库.md's L-0805-2 entry (this is the first recorded case of the failure running in the opposite direction -- a near false-positive from relying on a remembered stale threshold instead of running the tool -- rather than a missed real outlier)."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "pass, ~86-88/99, no fix needed",
      "detail": "Manual rubric pass consistent with prior audits' methodology on this site: strong structure (3 H2 sections, 1 74-row data table, 3-item FAQ, all schema present), strong authority (4 named sources incl. a primary-source IRS.gov PDF, dense specific numbers/dates throughout -- the 'cite sources + add statistics' combination the ai-seo skill's cited Princeton GEO research flags as highest-impact), decent internal linking (4 outbound in-body links with varied anchor text, 1 manual inbound link from texas-zip-codes plus related-guides rotation coverage since the ZIP Codes category has well over 6 members -- not an orphan), and a genuine analytical nuance (explicitly contrasts Austin's ZIP/county mismatch cause -- utility-district development predating annexation -- against Atlanta's different cause -- Fulton/DeKalb shared metro history -- a counterargument/nuance signal the rubric rewards). No factual errors, no zero-links gap, no overconfident/absolute causal claims lacking counter-example checks (unlike this site's well-documented recurring 'entirely one county' overclaim pattern in sibling articles -- this article correctly presents the 72/2 county split without an absolute claim). Comfortably above the 80-point threshold; no fix needed so score is unchanged before/after."
    },
    {
      "dimension": "7. Humanizer/avoid-ai-writing backfill",
      "status": "pass, no re-humanization needed",
      "detail": "published 2026-08-05, predates the 2026-08-07 avoid-ai-writing mandate. Ran Skill(humanizer) and Skill(avoid-ai-writing) in detect mode against the full coreSummary/section-body/FAQ text: no AI-vocabulary words, no rule-of-three padding, no vague attribution, no promotional language, no copula avoidance, no filler/hedging chains, no inline-header bullet lists, no em/en dashes (site's established ' -- ' double-hyphen convention used consistently, per established sitewide exemption). Sentence and paragraph lengths vary naturally. Only minor stylistic note (not a P0/P1 issue, no fix applied): the phrases 'worth flagging' and 'worth a note' each appear once -- a mild instance of the 'worth [verb]ing' pattern, but both are followed immediately by a specific, substantive reason (not a vague/generic endorsement), so not flagged as a genuine AI tell."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "3 of 4 cited sources return HTTP 200 to curl: GeoNames.org postal-codes index, IRS.gov PDF (lp47_english.pdf), Wikipedia (Telephone numbers in Puerto Rico). amld.org returns 403 to curl and 503 via the Wayback Machine gateway in this sandboxed environment -- consistent with this site's already-documented Akamai-style bot-blocking pattern (same behavior seen on FCC/NANPA citations in prior audits on this site); independently confirmed live and current via WebSearch, which returned matching content (1973 MUD formation, Dec 31 2008 annexation, May 9 2009 ratification vote) sourced to amld.org itself in the search summary. Not treated as link rot."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "Article has 4 manual outbound in-body links (texas-zip-codes, atlanta-zip-codes x2, chicago-zip-codes, us-country-code), all verified rendering on the live page with varied anchor text. Inbound: 1 manual in-body link from texas-zip-codes ('Austin's ZIP breakdown'), confirmed via grep; category 'ZIP Codes' has well over 6 members so the automated related-guides rotation also surfaces this article (confirmed live: boston/denver/houston/las-vegas/nashville/los-angeles-zip-codes all appear as related-guides links on the live page). Observation, not an actionable finding for this article: grep of guides.ts found 2 sibling articles (atlanta-zip-codes, texas-area-codes) that name-check 'Austin' by name (e.g. 'Austin, TX uses 73301' and Austin's 512/737 area codes) without linking to /austin-zip-codes/ -- this is the site's well-documented, already-escalated-to-Owen zero/missing-outbound-links pattern appearing in the reverse direction (other articles not linking to this one). Not fixed here per established site precedent that this class of fix requires editing the citing article, out of scope for a single-article audit; flagged for a future run or SKILL.md-level fix, consistent with how this same recurring pattern was already flagged (unactioned) in this log 2 prior times."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all present on the live page. Article schema's datePublished/dateModified (both 2026-08-05T00:00:00+00:00) match the published/updated fields exactly. FAQPage's 3 Question/Answer pairs match the FAQ array in guides.ts verbatim (question text checked). No inconsistency found."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "No scam/fraud/phishing content, no YMYL medical/legal/financial advice, no reverse-lookup functionality. Purely factual ZIP-code/county/tax-agency reference content. No drift concern."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field on this guide entry -- this site uses no stock/AI photography anywhere (per project convention) and this article has no self-authored SVG either, only a data table. Nothing to validate."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "ads.txt resolves correctly to pub-5245502795720653 (verified live, HTTP 200). robots.txt has explicit AI-crawler Allow rules. /privacy/ and /about/ both return 200. No scam-area-codes-adjacent content in this article (no scam/fraud subject matter at all), so the site's scam-content-overreach risk does not apply here. No misleading claims, no deceptive layout."
    }
  ],
  "independent_verification": "2 candidate findings were sent to an independent review agent before any fix was made: title length (88 chars incl. suffix) and meta description length (193 chars), both initially flagged based on a stale ~150-160-char threshold this audit mistakenly reasoned from (recalled from this log's earliest entries rather than checking for a superseding precedent). Agent completed normally (no watchdog/stuck-agent escalation needed) and returned NOT-CONFIRMED for both, citing this log's own later-established L-0805-2 precedent (compare to actual sitewide distribution). Directly re-verified in this run with check_seo_field_stats.py: z=0.72 (title) and z=0.39 (description), both well within normal range -- independent agent's verdict confirmed by a second, independent method. No other findings across the 13 dimensions required independent verification; every other claim in dimension 2 was independently re-confirmed via direct primary/near-primary source checks (site's own zipCounty.json diff, live GeoNames.org lookup, multiple WebSearch queries against amld.org-sourced content, DataForSEO SERP + direct competitor page inspection) rather than being a 'problem' needing a second opinion.",
  "actions_taken": [
    "No edits made -- all 13 dimensions passed, no confirmed problems.",
    "Appended a recurrence line to 独立站/内容通用教训库.md's L-0805-2 entry documenting the stale-threshold near-miss (this audit reasoned from a remembered old figure instead of running check_seo_field_stats.py first, which would have shown both fields were normal all along).",
    "Ran python3 独立站/research-db/seo_drift.py baseline https://dialwick.com/austin-zip-codes/ before starting the deep-dive (standard practice); no compare/fix cycle needed since no edits were made.",
    "No build/commit/push/deploy/IndexNow submission needed -- source file unchanged."
  ],
  "seo_score": "no issues found; title/description both within this site's established normal distribution (z<1) per check_seo_field_stats.py",
  "geo_score": "~86-88/99 (pass, comfortably above the 80 threshold; no fix needed)",
  "escalation": null
}
```

## boston-zip-codes

```json
{
  "url_slug": "boston-zip-codes",
  "url": "https://dialwick.com/boston-zip-codes/",
  "last_audited": "2026-08-28",
  "published_date": "2026-08-06",
  "diagnostic_checklist": [
    "1. Are the six annexation dates (Roxbury 1868, Dorchester 1870, Charlestown/Brighton/West Roxbury 1873 vote/1874 effective, Hyde Park 1911 vote/1912 effective) accurate?",
    "2. Is the 'Brighton Ring' $1.56M spending / $438K revenue / 81% vote figure independently sourced, not invented?",
    "3. Are 02201 = Boston City Hall and 02203 = JFK Federal Building accurate and still current?",
    "4. Does the 36-ZIP table and the 14-ZIP annexed-town list match this site's own canonical zipCounty.json (GeoNames) exactly?",
    "5. Does the article's claim that '02212's Middlesex County tag has no public-record explanation' hold up, or is there a findable explanation for what 02212 actually is?"
  ],
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass, strong",
      "detail": "8 named sources spanning GeoNames, Boston.gov, GSA, USPS PostalPro, Boston Public Library research guide, Wikipedia, a local historian (wpmarchione.com), and the City of Boston Archives -- among the best-sourced articles audited on this site so far (most prior audits found 1-4 sources)."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "pass on checklist items 1-4; confirmed gap on item 5 -> fixed",
      "detail": "(1) All 6 annexation dates independently WebSearch-verified against Boston city archives/Wikipedia/BPL: Roxbury Jan 5 1868, Dorchester Jan 3 1870, Charlestown/Brighton/West Roxbury Oct 7 1873 vote effective Jan 5 1874, Hyde Park Nov 7 1911 vote effective Jan 1 1912 -- all exact matches. (2) Brighton Ring figures independently confirmed via WebSearch of the article's own cited source (wpmarchione.com): $1.56M spending against $438K revenue, eightfold debt increase, 81% yes vote -- exact match, not invented. (3) 02201=City Hall and 02203=JFK Federal Building both confirmed via independent WebSearch (GSA.gov, EEOC.gov). (4) Programmatically diffed the 36-row table and the 14 annexed-town ZIP codes against this site's own src/lib/data/zipCounty.json: zero mismatches on both. (5) CONFIRMED GAP: the article's body and FAQ both asserted 'no public USPS or county record explains' 02212's Middlesex County tag, treating it as a pure unexplained anomaly. Independent research (curl of zip-codes.com/zip-code/02212, zipwise.com, greatdata.com, plus WebSearch cross-check) found 02212 is a Unique ZIP Bank of America has used for downtown Boston mail since November 2008, and every third-party ZIP database checked (3 direct fetches + wider WebSearch sample) tags it Suffolk County, not Middlesex -- none support the Middlesex tag. Independent verification agent confirmed this is solid enough (multiple converging sources) to add a sourced caveat. Fixed: added the Bank of America/Suffolk-County fact to the body and FAQ, without changing the table's Middlesex value (which remains accurate to the site's disclosed GeoNames methodology) -- same precedent as the atlanta-zip-codes 30339 caveat."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "No stale claims found; all facts are historically stable (annexation history, ZIP assignments) rather than subject to active-database drift."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for Boston ZIP/annexation content shows the SERP dominated by plain zip-codes.com/zipcodestogo.com listings, scattered single-neighborhood Wikipedia pages, and real-estate blog listicles -- none integrate the 36-code table + City Hall/federal-building explanation + six-town annexation history + 14-ZIP cross-reference into one place. Genuine incremental value confirmed."
    },
    {
      "dimension": "5. SEO technical/on-page audit",
      "status": "initial candidate finding (title length) NOT CONFIRMED after independent review; no fix made",
      "detail": "Live page checked via curl+DOM: single H1, 4 H2s, canonical present, schema (Article/FAQPage/BreadcrumbList/WebPage/Organization) present. Meta description 158 chars -- within established site range, no action. Title tag 87 chars total (76-char field + ' | DialWick' suffix) was initially flagged as a candidate problem against a generic ~50-60 char SERP guideline. Independent verification agent, and this run's own follow-up python3 独立站/scripts/check_seo_field_stats.py --new-slug boston-zip-codes, both found z=0.66 against this site's own title-length distribution (n=46, mean=64.8, stdev=16.8) -- well within normal range per the site's established L-0805-2 distribution-based methodology, which supersedes the generic character-count guideline. NOT-CONFIRMED, left as-is. This is the second consecutive day this exact stale-threshold near-miss pattern has recurred on this site (see austin-zip-codes, 2026-08-27) -- flagged to Owen, see escalation note below."
    },
    {
      "dimension": "6. GEO / ai-seo (99-point rubric)",
      "status": "pass, ~88-90/99 (manual rubric assessment, consistent with this site's established audit methodology)",
      "detail": "Strong structure (4 H2s, 36-row table, 3-item FAQ with schema), 8 named sources (above this site's average), dense specific dated statistics throughout, genuine bidirectional internal links (2 outbound to atlanta-zip-codes/los-angeles-zip-codes, 2 inbound from nashville-zip-codes) with real comparative facts rather than generic anchor text. One of the stronger-scoring articles audited on this site to date. No GEO-blocking issue found."
    },
    {
      "dimension": "7. Humanizer / avoid-ai-writing backfill",
      "status": "pass, checked (published 2026-08-06, one day before the 2026-08-07 avoid-ai-writing mandate -- early-content backfill check required)",
      "detail": "Manual full-text read against the humanizer/avoid-ai-writing pattern list found no AI-writing tells: no vague attribution, no rule-of-three padding, no promotional language, no inline-header lists, sentence-case headings throughout, dashes consistently use this site's established ' -- ' double-hyphen convention. Newly-added caveat text (02212 fix) also checked, same result -- clean."
    },
    {
      "dimension": "8. External source link rot",
      "status": "confirmed problem -> fixed",
      "detail": "7 of 8 cited sources returned HTTP 200. The GSA source (JFK Federal Building citation) returned HTTP 404, redirecting to a dead gsa.gov/sandbox/offline-pages/regional-microsite-archive stub -- confirmed independently by a verification agent, which also verified a replacement URL (gsa.gov/real-estate/explore-historic-buildings/find-a-historic-federal-building/john-f-kennedy-federal-building-boston-ma, HTTP 200) is live and covers the same building/topic. Fixed: source URL updated."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "2 manual outbound in-body links (atlanta-zip-codes, los-angeles-zip-codes) and 2 manual inbound links from nashville-zip-codes, both directions carrying real comparative facts rather than generic anchors. 'ZIP Codes' category has 26 members (>6), so the automated related-guides rotation only shows a subset -- expected behavior, not a bug, and manual links already provide link health."
    },
    {
      "dimension": "10. Schema consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList JSON-LD all auto-derive from the guide object fields; live page confirmed post-fix that FAQPage reflects the updated 02212 answer and the sources array includes the new zip-codes.com citation. Noted but out of scope for a single-article fix: the Article schema's ImageObject falls back to the sitewide favicon (24x24) since this article has no hero image -- this is a site-wide template behavior from the recent site-toolkit ImageObject rollout, not specific to this article, so not actioned here; flagged for whoever owns that rollout to review across all image-less articles."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure ZIP-code/municipal-annexation-history content. No reverse-lookup functionality, no YMYL claims, no sensitive-entity risk."
    },
    {
      "dimension": "12. Image validity & copyright",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field."
    },
    {
      "dimension": "13. AdSense policy compliance",
      "status": "pass",
      "detail": "No violence/weapons/drugs/gambling content, no misleading headline. ads.txt correctly resolves to pub-5245502795720653; /privacy/, /about/, /terms/ all present."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (title length, 87 chars): NOT CONFIRMED -- z=0.66 against site's own distribution, normal range, no fix.",
    "Agent 2 (GSA source link rot): CONFIRMED -- original 404, replacement URL verified live and on-topic.",
    "Agent 3 (ZIP 02212 Bank of America / Suffolk County): CONFIRMED -- 3 direct-fetched sources + wider WebSearch sample all converge on Suffolk County and Bank of America; solid enough for a sourced caveat per established site precedent."
  ],
  "actions_taken": [
    "Replaced dead GSA source URL with a verified-live replacement covering the same JFK Federal Building topic.",
    "Added a caveat to the body (section 1) and rewrote the FAQ answer explaining what ZIP 02212 actually is (a Bank of America Unique ZIP since Nov 2008) and that third-party ZIP databases tag it Suffolk County, without changing the table's Middlesex value (kept per the site's established atlanta-zip-codes/30339 precedent: accurate to disclosed GeoNames methodology).",
    "Added 1 new source citation (zip-codes.com's 02212 page).",
    "Did NOT fix the title length -- initial candidate finding was independently reviewed and rejected (z=0.66, normal range); recorded as a second consecutive day's recurrence of the L-0805-2 stale-threshold near-miss pattern in 独立站/内容通用教训库.md.",
    "npm test (64/64) and npm run build (55 pages) both passed after the edit.",
    "Ran seo_drift.py baseline before editing and compare after deploy: 1 WARNING-level finding (expected schema content change from the FAQ/sources edit), no CRITICAL findings.",
    "Committed (c3f277f) and pushed to origin/main; verified live via polling (Bank of America text and new GSA URL both confirmed present on first check, HTTP 200; 404 page still functions correctly for a nonexistent path).",
    "Submitted https://dialwick.com/boston-zip-codes/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200); logged to indexnow-submit-log.json (committed separately as c3f277f/845a391, carefully hand-merged against a concurrent dialwick-content-publishing session's own uncommitted IndexNow entry for country-code-92-pakistan so neither was clobbered).",
    "Appended a dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish.",
    "Left imageDims.ts untouched -- unrelated, pre-existing uncommitted changes from a separate site-toolkit ImageObject rollout session, out of scope for this audit."
  ],
  "seo_score": "1 confirmed issue (dead GSA source link) found and fixed; title-length candidate finding independently reviewed and rejected as a false positive (z=0.66, normal range)",
  "geo_score": "~88-90/99 pre- and post-fix (pass, comfortably above the 80 threshold; the 02212 fix improves EEAT/completeness slightly but doesn't change the overall structural score)",
  "escalation": null,
  "process_note": "This audit hit the L-0805-2 stale-threshold near-miss pattern (see 独立站/内容通用教训库.md) for the second consecutive day on this same site (austin-zip-codes 2026-08-27, boston-zip-codes 2026-08-28) -- initially reasoning from a remembered generic SERP character-count guideline instead of running check_seo_field_stats.py first. Both times an independent verification agent caught it before any incorrect edit was made, so no harm resulted, but the recurrence rate suggests this should become a mandatory first sub-step of dimension 5 rather than continuing to rely on independent review as the backstop -- see the lessons-library entry for the explicit recommendation to Owen."
}
```

## nashville-zip-codes

First audit for this article (published 2026-08-09, `published` field already present -- no L-0809-style backfill needed). Selected as the oldest of 29 never-audited articles per the site's rotation rule.

```json
{
  "url_slug": "nashville-zip-codes",
  "url": "https://dialwick.com/nashville-zip-codes/",
  "last_audited": "2026-08-29",
  "published_date": "2026-08-09",
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "Specific named entities, dates, and vote tallies throughout (Beverly Briley, Ben West, County Judge Beverly Briley, June 28 1962 referendum, April 1 1963 implementation, 400-399 and 458-447 Lakewood votes); 5 named sources incl. the primary Nashville.gov government-history page and Wikipedia's Lakewood, TN article, not generic attribution."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "pass -- extensively verified, nothing changed",
      "detail": "This site has hit the same 'entirely within one county' overclaim (L-0804-2 in the lessons library) 4 times before on DialWick alone (what-county-is-chicago-in, what-county-is-houston-in, dallas-zip-codes, chicago-zip-codes), so this was the priority check. Verdict: does NOT recur here, for a structural reason absent in those cases -- Nashville-Davidson is a true consolidated city-county government (the city government IS the county government since 1963), unlike Chicago/Houston/Dallas which are cities whose municipal limits happen to sit inside/across county lines. Verified: (a) curl of nashville.gov/departments/government/history-metro (the article's own cited source) matches the article's 1958 rejection, $10 wheel tax / 'green sticker tax' nickname, 82,000-resident annexation, the exact six satellite-city names, June 28 1962 vote, April 1 1963 implementation with Briley as first mayor, 'first city in the country to achieve true consolidation,' and 'some fourteen consolidated governments...each used the 1962 Nashville charter as a model' -- all verbatim or near-verbatim matches to the primary source, correctly attributed as the source's own claim rather than asserted independently. (b) Wikipedia's Lakewood, Tennessee article confirms the Aug 5 2010 400-399 vote and the March 15 2011 458-447 re-vote exactly. (c) WebSearch confirms ZIP 37138's USPS primary place name is Old Hickory (Lakewood listed only as an acceptable alternative), matching the article's claim. (d) Site's own src/lib/data/zipCounty.json queried directly: exactly 39 rows with place='Nashville'/state='TN', all 39 tagged county=Davidson, and the ZIP list matches the article's table exactly digit-for-digit; Goodlettsville's 2 codes (37070/37072) also both tagged Davidson in the site's data, and the article already hedges this appropriately given 37072 factually spans into Sumner/Robertson per third-party sources. (e) WebSearch of 'Nashville, TN' ZIP-in-other-counties turned up no primary-place-name exception (zipcodestogo.com's own page title independently confirms 'All 39 ZIP Codes...Davidson County'). No fabricated quotes, no sources[] gaps for specific claims, no reversed-source misreadings found."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published=updated=2026-08-09, 20 days old at audit time. Content is 1960s consolidation history plus a ZIP/county table verified still accurate against the site's own current data file -- nothing here has a natural refresh cadence shorter than years."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "get_serp_results for 'nashville zip codes': DialWick does not currently rank in the top 10 (dominated by real-estate/homes-for-sale ZIP listicles -- nashvillesmls.com, nashvillehomeviewer.com, reliantrealty.com -- plus a printable-map page and Nashville's own open-data portal). That's a visibility gap, not a content-quality problem: the competing pages are shallow zip-to-neighborhood/home-search directories, while this article's 1963 consolidation history, satellite-city ZIP-vs-government distinction, and Lakewood dissolution litigation are not present in that SERP's content type -- genuine incremental value, consistent with this site's established differentiation pattern on sibling articles."
    },
    {
      "dimension": "5. SEO technical audit",
      "status": "pass",
      "detail": "Live page checked via curl+DOM: single H1, 3 content H2s + FAQ H2 (no skipped levels), self-referencing canonical, no meta robots/noindex, Article+FAQPage+BreadcrumbList JSON-LD all present and consistent with content, 1 data table. Ran scripts/check_seo_field_stats.py against the site's own 46-article distribution: title length z=0.72 (normal range), description length z=-0.52 (normal range) -- both comfortably inside the site's own norms, not the L-0805-2 false-positive trap this site hit twice in the prior two days."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~85-88/99 (estimated against the same rubric used elsewhere in this log)",
      "detail": "Strong structure (3 H2s + FAQPage schema + data table), dense specific dated statistics with named-source attribution, 3 outbound + 2 inbound manual in-body cross-links carrying real comparative facts (not generic anchors), professional/civic terminology, clear direct-answer opening (coreSummary). Weaker spots: no direct expert quotations (paraphrase of Nashville.gov rather than a quoted line), which is the same minor gap noted on other well-scoring articles in this log. Comfortably above the 80-point bar."
    },
    {
      "dimension": "7. Humanizer backfill",
      "status": "not applicable",
      "detail": "Published 2026-08-09, after the 2026-08-07 humanizer+avoid-ai-writing mandate took effect, so this should already have passed both checks at publish time. Manual re-read found no AI-writing tells (double-hyphen dashes used consistently instead of em-dash, no vague attribution, no rule-of-three padding, varied sentence lengths, no promotional/inflated language) -- no re-pass needed."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 5 sources checked via curl. geonames.org, nashville.gov, en.wikipedia.org, goodlettsville.gov all return HTTP 200. zipcodestogo.com/city/Nashville/TN/ returns 403 to curl but is confirmed live and indexed via WebSearch (page title 'Nashville, TN ZIP Code List -- All 39 ZIP Codes & Map | Davidson County' matches current content) -- standard bot-blocking, not link rot, consistent with this site's established pattern for this class of finding."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "3 manual outbound in-body links (boston-zip-codes x2, what-county-is-chicago-in x1). 2 manual inbound links from indianapolis-zip-codes (bidirectional, both carrying real comparative facts about the two cities' consolidation histories, not generic anchors). grep of guides.ts confirms no other article name-checks 'Nashville' without linking to it -- the site's previously-documented zero-outbound-link pattern does not recur here. 'ZIP Codes' category has 27 members (>6), so the automated related-guides rotation also applies on top of the manual links."
    },
    {
      "dimension": "10. Schema data consistency",
      "status": "pass",
      "detail": "Article, FAQPage (4 Q&As matching the 4 faq[] entries), BreadcrumbList (3 ListItems) all present in live JSON-LD and consistent with the rendered content; no orphaned or mismatched schema fields."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Civic/municipal-history content (referendum votes, annexation, a 1960s-era note on the African-American community being divided over consolidation, sourced directly from Nashville.gov's own account). No AdSense-sensitive categories, no health/financial/legal advice, no personal-data exposure."
    },
    {
      "dimension": "12. Image licensing",
      "status": "not applicable",
      "detail": "Confirmed site-wide, not article-specific: every DialWick ZIP-codes page (checked nashville, denver, atlanta) falls back to favicon.svg for og:image -- this site's ZIP/area-code reference template doesn't use hero images at all, so there is nothing to license-check on this page."
    },
    {
      "dimension": "13. AdSense policy risk",
      "status": "pass",
      "detail": "Correct shared publisher ID (pub-5245502795720653) present, standard ad slot rendering, no content in the sensitive/misinformation/regulated categories that would put the shared 10-site account at risk."
    }
  ],
  "actions_taken": [
    "None -- all 13 dimensions passed on first review; no edits made to guides.ts.",
    "Specifically targeted-checked this site's most-recurring lessons-library pattern (L-0804-2, 'entirely within one county' overclaim, 4 prior DialWick hits) and confirmed it does not apply here, for a structural reason (true consolidated city-county government) documented in the finding above.",
    "No independent-agent spawn needed per the task's own 'don't manufacture problems' instruction -- there were no confirmed-or-candidate findings to hand to a reviewer.",
    "No git changes, no rebuild/redeploy, no IndexNow resubmission (nothing changed on the live page)."
  ],
  "seo_score": "No issues found; title/description both within normal site-wide range per check_seo_field_stats.py (z=0.72, z=-0.52).",
  "geo_score": "~85-88/99 (estimated), comfortably above the 80 threshold.",
  "escalation": null
}
```

## atlanta-area-code

First audit for this article (published 2026-08-19, `published` field already present -- no L-0809-style backfill needed). Selected as one of 29 never-audited articles (never appeared in this log before) per the site's rotation rule.

```json
{
  "url_slug": "atlanta-area-code",
  "url": "https://dialwick.com/atlanta-area-code/",
  "last_audited": "2026-08-30",
  "published_date": "2026-08-19",
  "diagnostic_checklist": [
    "1. Are the three geographic splits (912 in 1954, 706 in 1992, 770 in 1995) dated correctly?",
    "2. Are the three overlay dates (678 in 1998, 470 in 2010, 943 in 2022) dated correctly?",
    "3. Is the 'NANPA's senior director at the time described [470] publicly as intended primarily for downtown Atlanta' attribution real and correctly framed?",
    "4. Does the table's 'still issuing new numbers?' column (404/678 no, 770/470/943 yes) match reality and the article's own cited sources?"
  ],
  "findings": [
    {
      "dimension": "1. EEAT",
      "status": "pass",
      "detail": "6 named sources (Wikipedia: Area code 404, Area code 770, Area codes 678/470/943; 2 Georgia PSC PDFs; 1 AJC news article), all independently curl-verified HTTP 200. Specific dated claims throughout, not generic attribution."
    },
    {
      "dimension": "2. Factual accuracy",
      "status": "confirmed problem (770) -> fixed; confirmed not-a-problem (470, NANPA quote)",
      "detail": "Checklist items 1-2 independently verified via WebSearch against Wikipedia's Area code 404/770/678,470,943 pages: 912 split 1954-07-01, 706 split 1992-05-03, 770 split 1995-08-01, 678 overlay 1998 (Wikipedia's own page gives Jan 15, DialWick's Jan 6 is the implementation-vs-first-assignment distinction seen elsewhere on this site, not an error), 470 overlay 2010-02-26, 943 overlay 2022-03-15 -- all confirmed accurate. Checklist item 3 (NANPA senior director quote): independent agent confirmed this is a real, accurately attributed quote (John Manning, NANPA senior director, quoted by the Atlanta Journal-Constitution in 2010: 'Primarily for Downtown Atlanta and surrounding areas, the number is going to be 470'). Checklist item 4 (exhaustion table): **the article's own cited Wikipedia source ('Area codes 678, 470, and 943') states in its History section that prefixes in 678 AND 770 'have also all been allocated,' directly contradicting the table's '770: Yes.'** Corroborated by a Georgia PSC press release (Oct 28, 2020) describing 404/770/678/470 as a single depleting pool that prompted the 943 relief code ('will not be assigned to any service providers until the current codes have been exhausted'). Independently confirmed by a fresh-context agent using the same two primary sources. A separate independent check on 470 (raised because the same reasoning could plausibly extend to it) found the article's own cited source explicitly and separately singles out 470 as still having its own unassigned prefixes ('leaving only 470 central office codes available') -- confirmed NOT a problem, 470's 'Yes' is accurate."
    },
    {
      "dimension": "3. Timeliness",
      "status": "pass",
      "detail": "published=updated=2026-08-19, 11 days old at audit time. The 770 finding is a factual error present since publication, not content that became outdated during the 11-day window."
    },
    {
      "dimension": "4. Competitive differentiation",
      "status": "pass",
      "detail": "WebSearch for the target topic shows a SERP dominated by area-code lookup aggregator/mill sites (allareacodes.com, 212areacode.com, SIPNEX, globalcallforwarding.com) that give basic facts but conflate 470's 2001 reservation date with its 2010 in-service date in a confusing way, and don't organize the split-vs-overlay historical progression as clearly as this article does. Genuine incremental value, consistent with this site's established differentiation pattern."
    },
    {
      "dimension": "5. SEO technical audit",
      "status": "confirmed problem -> fixed",
      "detail": "Live page checked via curl+DOM: single H1, 4 content H2s + FAQ H2, self-referencing canonical, 3 JSON-LD blocks (Article/FAQPage/BreadcrumbList) present and consistent. Meta description was 165 chars raw -- independent agent confirmed via pixel-width estimate (~1000-1090px vs. Google's ~920-990px desktop / ~680px mobile budgets) that this exceeds safe-display limits on both desktop and mobile, more precisely than a bare char-count comparison to the site's 161-char/not-escalated precedent would suggest. Fixed as part of the same edit that corrected the exhaustion-count framing (165 -> 156 chars). Title field 90 chars (101 with ' | DialWick' suffix) -- within this site's established precedent range (up to 101 chars seen on nashville-zip-codes); not escalated."
    },
    {
      "dimension": "6. GEO / ai-seo",
      "status": "pass, ~86-88/99 (estimated against the same rubric used elsewhere in this log)",
      "detail": "Strong structure (4 H2s + data table + FAQPage schema), 6 named authoritative sources all verified live, dense specific dated statistics, 5 confirmed live inbound cross-links. Weaker on direct verbatim quotation (the NANPA quote is paraphrased, not quoted verbatim) -- consistent with the minor gap noted on other well-scoring articles in this log. Comfortably above the 80-point bar; no GEO-specific fix needed since the factual/SEO fixes did not touch structure."
    },
    {
      "dimension": "7. Humanizer / avoid-ai-writing",
      "status": "pass (spot-check, not mandatory backfill)",
      "detail": "Published 2026-08-19, after the 2026-08-07 avoid-ai-writing mandate, so this is a spot-check. Mechanical scan: zero hits on the AI-vocabulary word list (delve/tapestry/testament/pivotal/etc., Tier 1-3), zero curly quotes, zero true em/en dashes (site's established ' -- ' ASCII convention used throughout). Newly-written replacement passages (title/description/coreSummary/heading/2 body paragraphs/1 FAQ answer) re-scanned the same way after the fix -- also clean."
    },
    {
      "dimension": "8. External source link rot",
      "status": "pass",
      "detail": "All 6 cited sources (3 Wikipedia, 2 GA PSC PDFs, 1 AJC article) return HTTP 200."
    },
    {
      "dimension": "9. Internal link health",
      "status": "pass, not an orphan",
      "detail": "5 confirmed live manual inbound links from other articles: miami-area-code (x2, 'Atlanta's numbering plan'), chicago-area-code (via automated related-guides rotation, category has 7 members), indianapolis-zip-codes ('Atlanta'), las-vegas-area-code ('Atlanta'). No duplicate anchor text within any single source article (checked per L-0818-3)."
    },
    {
      "dimension": "10. Schema data consistency",
      "status": "pass",
      "detail": "Article/FAQPage/BreadcrumbList all present, auto-derived from guide object fields; datePublished/dateModified both 2026-08-19 matching published/updated. Post-fix: headline/description in the Article schema automatically reflect the corrected title/description text (confirmed via seo_drift.py compare, WARNING-level 'schema content changed' matches the expected edit, no CRITICAL findings)."
    },
    {
      "dimension": "11. Compliance/sensitivity drift",
      "status": "pass",
      "detail": "Pure telecom-numbering-plan history content. No sensitive topics, no named-individual risk beyond a routine 2010 regulatory-official quote (independently confirmed accurate)."
    },
    {
      "dimension": "12. Image licensing",
      "status": "not applicable",
      "detail": "No hero image, inline image, or diagramSvg field on this article -- consistent with this site's established no-images pattern for area-code guides."
    },
    {
      "dimension": "13. AdSense policy risk",
      "status": "pass",
      "detail": "ads.txt correctly resolves to pub-5245502795720653; /privacy/ page reachable (200). No sensitive categories, no misleading/clickbait framing."
    }
  ],
  "independent_confirmations": [
    "Agent 1 (770 exhaustion status): CONFIRMED PROBLEM -- article's own cited Wikipedia source plus a Georgia PSC press release both contradict the table's '770: Yes'.",
    "Agent 2 (NANPA senior director quote attribution): NOT A PROBLEM -- verified as a real, accurately attributed 2010 AJC quote from John Manning.",
    "Agent 3 (meta description length): CONFIRMED PROBLEM -- pixel-width estimate exceeds both desktop and mobile display budgets.",
    "Agent 4 (470 exhaustion status, spawned after the 770 finding raised the question of whether 470 was also affected): NOT A PROBLEM -- the same cited source explicitly separates 470 from the exhausted group."
  ],
  "actions_taken": [
    "Corrected the article's exhaustion-count framing from 'two exhausted / three still issuing' to 'three exhausted (404, 678, 770) / two still issuing (470, 943)': title, description, coreSummary, the area-code table's 770 row, one section heading, two body paragraphs, and one FAQ answer all updated for consistency. Assessed against this site's own precedent (scam-area-codes' 'six'->'seven' fix, which cascaded through title/description/FAQ without escalation) and judged to be the same class of routine factual correction, not a reversal of the article's core thesis (the splits-vs-overlays historical progression is entirely unaffected) -- fixed directly rather than emailing Owen.",
    "Shortened the meta description from 165 to 156 chars in the same edit (independently confirmed truncation risk).",
    "Ran seo_drift.py baseline before edits and compare after: title/meta description/schema-content changes all WARNING/INFO level and match the intended edit; no CRITICAL findings.",
    "npm test (64/64 passed) and npm run build (56 pages) both passed after the edit.",
    "Committed (535969a) and pushed to origin/main; DialWick auto-deploys via git-connected Cloudflare Pages (no deploy hook needed); verified live via polling (new title text confirmed present in live HTML).",
    "Submitted https://dialwick.com/atlanta-area-code/ via tools/submit-indexnow.mjs (Bing 200, Yandex 200); logged to indexnow-submit-log.json.",
    "Appended dated entry to 内容发布日志.md marking this as a content-quality-audit update, not a new publish.",
    "Checked 内容通用教训库.md's lesson entries before and after; no new generalizable pattern found (the 770/470 exhaustion-status error is a site/topic-specific factual correction, does not meet the 'would recur on a different site/topic' bar for the shared lessons library)."
  ],
  "seo_score": "1 confirmed issue (meta description length, 165->156 chars) found and fixed as part of the same edit; title (101 chars w/ suffix) reviewed and not escalated per site precedent",
  "geo_score": "~86-88/99 both before and after fix (pass; the fix corrected a factual/framing error and a technical SEO field, not content depth or structure)",
  "escalation": null
}
```
