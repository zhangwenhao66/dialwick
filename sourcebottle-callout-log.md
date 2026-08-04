# SourceBottle Call-Out 发布日志（DialWick）

本文件记录 `sourcebottle-callout-posting` 定期任务（流量站矩阵侧，每周二遍历所有"运营中"站点，按"最久未发布优先"排序）为 DialWick 发布的每一条 call-out。

**用途**：确认最近问过什么角度、避免重复提问、追踪待回复的 call-out。call-out 收到的真实专家回复不直接现用，先攒起来供后续文章使用。回复通过邮件（0009888@gmail.com，经 contact@dialwick.com 转发）到达，由日常查收邮件时手动处理，本任务不处理回复。

---

## 记录

### 2026-08-04 — DialWick（dialwick.com）

- **首次发布**：本任务此前从未在 DialWick 跑过。
- **问题标题**：Fraud prevention experts: what's the most convincing caller-ID spoofing scam you've seen someone fall for?
- **角度**：绑定"scam area codes"一文的核心结论——所谓"诈骗区号"多是误解，骗子实际是伪造你本地区号（neighbor spoofing），唯一真实例外是利用真实加勒比地区 NANP 区号的"one ring/Wangiri"骗局。征集反欺诈专家/电信安全专家分享真实的来电显示欺骗案例。
- **绑定文章**：DialWick `scam-area-codes`（Is There Really Such a Thing as a 'Scam Area Code'?），Area Code Guides 分类，与站点清单标注的 r/Scams 候选方向契合。
- **分类标签**：Topics = General + Technology；Countries = Australia + UK & Republic of Ireland + Canada + United States。
- **表单设置**：Job title = Content Creator；Organisation = DialWick；Source local = No；Contact = Email（contact@dialwick.com）；Unpaid；勾选了 Expert Directory 搜索；未勾 Verified Media。Email address 和 Contact email 两处均填 `contact@dialwick.com`。
- **Deadline**：2026-08-25 17:00
- **发布状态**：✅ 已提交，跳转 `thankyou.asp`，Pending approval。提交回执 product id = `df863dcb371649274caebafa77b02088`。
- **上线复核**：⏳ 待下次任务运行时补查。
- **回复采用**（2026-08-04 补记）：收到 Mike Kruse（刑事辩护律师，Kruse Law Firm 创始人，办理过欺诈类案件）真实回复，讲的是 neighbor spoofing 的真实运作机制和"用旧账单上的号码回拨核实"的建议。已作为佐证引用写入 `scam-area-codes` 正文（引用卡片 + 补充一句实操建议），commit `c4d20a8`，已部署上线核实（`dialwick.com/scam-area-codes/` 含"Michael Kruse"）。
