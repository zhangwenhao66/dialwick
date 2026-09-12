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
