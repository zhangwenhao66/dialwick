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
