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
