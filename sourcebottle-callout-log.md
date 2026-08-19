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

### 2026-08-12 — DialWick（dialwick.com）

- **问题标题**：Real estate agents and logistics professionals: has a ZIP code that doesn't match the real neighborhood name caused a problem?
- **角度**：绑定`los-angeles-zip-codes`一文提到Venice/Van Nuys/San Pedro在LA的ZIP编码系统里没有自己专属编码这一事实，征集房产经纪人/保险代理人/物流配送从业者举出一个真实、具体的案例——ZIP编码官方覆盖范围跟人们实际使用的社区名不一致，并因此造成了具体问题（保险区域费率算错、配送路由错误、买家搞不清自己实际买在哪个社区）。与此前问过的诈骗区号/来电显示伪造角度完全不同（那是欺诈防范，这是地理归属混淆）。
- **绑定文章**：DialWick `los-angeles-zip-codes`（Los Angeles ZIP Codes: The Full List, and Why Venice, Van Nuys, and San Pedro Aren't On It）。
- **分类标签**：Topics = General + Property；Countries = United States（ZIP编码是美国特有概念，仅限美国）。
- **表单设置**：Job title = Content Creator；Organisation = DialWick；Contact = Email；Unpaid；Email address 和 Contact email 均填 `contact@dialwick.com`。
- **Deadline**：2026-09-02 17:00
- **发布状态**：✅ 已提交，跳转到 thankyou.asp，提示 "Pending approval..."。提交回执 product id = `f422ca0769fe85528bc77e76a0d35b05`。
- **上线复核**：⏳ 待补做（当天提交，通常需要1-2天过审）。
- **备注**：本次是08-04登录失效连续三次导致周二排期落空后的补做。
- **回复采用**（2026-08-13补记）：收到两条真实回复。①Anne-Britt Ostlund（Mountain Rose Realty房产经纪人）提供具体真实案例——科罗拉多州Ouray County一处房源（456 Ridge Road）应显示为Ridgway但USPS preferred place name却是邻县county seat Montrose，导致Zillow等网站显示错误城市、当地MLS致电质疑房源信息填错，作为主案例写入新文章`zip-code-shows-wrong-city`（因站内此前无任何一篇覆盖该通用现象，未塞进`los-angeles-zip-codes`而是新建独立页），commit `c3620d6`，已部署上线核实，已回信致谢。②Deepak Shukla（d.shukla@pearllemonpress.com，署名"Pearl Lemon Properties"）回复内容为泛泛建议，未采用——该邮箱已确认是Pearl Lemon Group在流量站矩阵/seo-geo-trinity多个站不同主题SourceBottle call-out下反复以匹配主题的"Pearl Lemon X"子品牌名义回复的规模化引用农场模式（此前至少5-6次跨主题出现），今后遇到同一邮箱回复默认视为低可信度/通用填充内容，不作为独家专家引语来源。

### 2026-08-18（周二，正常排期）— DialWick（dialwick.com）

- **问题标题**：Telecom and travel industry pros: has assuming a +1 number was American caused a real mix-up?
- **角度**：绑定`the-us-country-code-is-1`一文讲的+1国码共享事实——加拿大和18个加勒比国家/地区都用同一个+1国码，其中大部分直到1990年代才拥有自己独立的区号，此前十几个地区共用同一个809区号。征集电信客服/呼叫中心运营/旅行业从业者举出真实案例——把一个+1号码错误当成美国号码（用于短信验证、呼叫路由、计费区域判定或行程规划），实际上是加拿大或加勒比号码，因此造成了真实问题。这个号码实际是哪里的，误判是怎么被发现的。与此前问过的诈骗区号伪造角度（08-04）、ZIP编码与社区名不符角度（08-12）均不重叠，这次聚焦国际拨号层面对+1的误判。
- **绑定文章**：DialWick `the-us-country-code-is-1`（The US Country Code Is +1, and 19 Other Places Share It）。
- **分类标签**：Topics = General + Technology；Countries = Australia + UK & Republic of Ireland + Canada + United States。
- **表单设置**：Job title = Content Creator；Organisation = DialWick；Contact = Email；Unpaid；Email address 和 Contact email 均填 `contact@dialwick.com`。
- **Deadline**：2026-09-14 17:00（鼠标真实点击日历控件选中）。
- **发布状态**：✅ 已提交，跳转到 thankyou.asp，提示 "Pending approval..."。提交回执 product id = `e6f05eb98d5f184a690ae7745386eba2`。
- **上线复核**：⏳ 待下次任务运行时补查。
- **回复使用情况**：✅ 08-19收到Jean-Christophe Thery（MusaArtGallery创始人）回复，真实案例（+1号码误判导致短信验证/物流通知失败）已插入`us-country-code`一文新增章节，已build/test/deploy/IndexNow提交，已回信致谢。
