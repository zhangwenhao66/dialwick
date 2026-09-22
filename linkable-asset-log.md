# DialWick — Linkable Asset Log

Record of assets produced/updated by `trafficsite-linkable-asset-building`, plus unlinked-mention recovery and pitch outcomes. See `linkable-asset-backlog.md` for the point list this draws from.

---

## 2026-09-12 — first run for this site (fixed-priority slot, capacity-concentration rule)

**Why this site, this run**: per the 2026-09-04 revision to the "🎯 外链产能集中规则," DialWick and CalcBadger get a fixed priority slot each run (rotating by whichever was least recently processed by this task) instead of being excluded as algorithmically-suppressed sites. DialWick has no `linkable-asset-log.md` before this entry — never processed by this task — so it took this run's slot ahead of CalcBadger.

**Order of work — deviation from the usual Step 1**: `linkable-asset-backlog.md` lists 8 candidate ideas, all `[待制作]`, no `[已发布]` asset yet. Under the general rule (no existing asset to distribute → build one, per WageLark's 8/29 precedent), the next step would normally be building backlog item #7 or similar. **Did not build one this run.** DialWick is in an index-resignation-type Google suppression (confirmed via `research-db/index-coverage/2026-09-06_dialwick.json`: only 13 of 56 sitemap URLs are `Submitted and indexed`, 34 are `Crawled - currently not indexed`, and pages published after 8/18 are getting 0 natural crawl). The site's own 2026-09-04 override for this exact task says: "DialWick 只给仍在索引的 13 页找真实引用" — a brand-new page built this run would very likely join the un-indexed pile rather than become a real linkable asset, and the explicit instruction is to work with what's still indexed instead. So this run treated one of the 13 confirmed-indexed pages, `/california-area-codes/`, as the resource to pitch, and skipped Step 1 entirely.

**Step 2 (unlinked-mention recovery)**: WebSearch `"dialwick.com"` — results describe the site generically (a directory tool for area codes/ZIP codes/international dialing) but no third-party page mentions dialwick.com content without a link. No recovery opportunity this round.

**Step 3 (pitch)**: found sipnex.ca, a real VoIP/SIP-trunk carrier with two live, specific blog posts on the 442 and 424 California area-code overlays. DialWick's `/california-area-codes/` page covers the same split/overlay history statewide (LA's 213 → seven codes since 1947; 41 active area codes statewide), a natural cross-reference. Drafted a pitch. Independent review agent verified every number against the live page (`?cb=$RANDOM` cache-bust), confirmed sipnex.ca and its blog posts are real and on-topic, confirmed `contact@sipnex.ca` is genuinely published on both the contact page and the blog posts themselves (not guessed), confirmed no dedup conflict (prior `grep` hits on "sipnex" were only SERP-snapshot JSON files listing it as a keyword-research competitor, not prior outreach), and returned CAN SEND.

**Step 3.5**: Show HN not applicable (a reference page, not a technical build). No non-Reddit community found for phone-numbering-plan content within this run's time budget. Reddit: not evaluated for this site this run (this task's Reddit-candidate queue is restricted to linkable assets — interactive tools / original data research — and `/california-area-codes/` is a repurposed existing content page, not a purpose-built asset, so it doesn't qualify for that queue as-is).

**Not sent**: withheld per the SES migration freeze (see `独立站/待Owen处理事项.md`). This task checked that document before drafting any of this run's four site pitches (UmberLore/WageLark/MythCairn/DialWick) and found the freeze still in effect — no `gmail_send.py send` call was made for any of them. Drafted, reviewed (CAN SEND), stored in `outreach-drafts.md`, marked `drafted_blocked_by_ses_migration`.

**Distribution count**: 0/10 sent + 1/10 drafted-and-approved-but-withheld = 1 target identified so far.

---

## 2026-09-22 — fixed priority slot (distribution continuation)

**Site selection**: DialWick took this run's fixed CalcBadger/DialWick priority slot — last processed by this task 2026-09-12, vs. CalcBadger's 2026-09-15, making DialWick the more overdue of the pair. (DialWick remains eligible for this specific task's fixed-slot exception per the 2026-09-04 revision and the 2026-09-16 clarification that the site's blanket "冻结" only bars tasks that would *write new content to the site itself*; this task's exception was explicitly preserved for `trafficsite-linkable-asset-building`/`trafficsite-broken-link-building`.)

**Order of work**: distribution only (no new asset build — site remains index-resignation-suppressed; only work with the 11 confirmed `Submitted and indexed` pages per `research-db/index-coverage/2026-09-16_dialwick.json`).

**Distribution**: the SES migration freeze (blocking all matrix sends since 2026-09-09) was lifted 2026-09-15 (ZeptoMail cutover). Re-verified and sent the one pending approved-but-withheld pitch from the 2026-09-12 run — Pitch 1 to sipnex.ca (contact@sipnex.ca), pitching `/california-area-codes/` as a cross-reference for their 442/424 overlay posts. Re-checked before sending: page still 200, sipnex.ca still live (redirects to https, 200), no new dedup conflict. Sent via `gmail_send.py send --from dialwick`, Message ID `1a0c79de4ec79866`.

Searched for a second target this round: found letsdial.com's live "773 Area Code" blog post (real telecom-blog content, `info@letsdial.com` confirmed as a genuine contact). Checked for a content gap against DialWick's `/chicago-area-code/` page (312/1947, 773/1996, 872 overlay/2009) — letsdial's own article already covers the 872 overlay, so there's no differentiating angle to pitch. No email sent; recording honestly rather than forcing a pitch with nothing new to offer.

**Step 2 (unlinked-mention recovery)**: not re-executed this round (time budget went to Step 3 target sourcing).

**Step 3.5**: not re-evaluated — prior conclusions stand (reference page, not a technical build; no non-Reddit community identified).

**Distribution count**: this task has now sent 1 pitch (sipnex.ca) directly, plus DialWick has separately received pitches from `trafficsite-guest-post-outreach`/`trafficsite-broken-link-building` (Pitch 5/6/8/9/11 — rutlandtownship.org, gondtc.com, thrall.org, etc., tracked in `outreach-drafts.md` but attributed to those other tasks' campaigns). Distance from saturation (≥10 targets from this task specifically) unchanged at low single digits — continue on future runs when this site takes the priority slot again.
