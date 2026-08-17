# DialWick 断链置换外链日志

`trafficsite-broken-link-building` 定时任务的执行记录。

---

## 2026-08-04（首次运行）

### 检查过的资源页

| 资源页 | 外链数 | 真实失效 |
|---|---|---|
| https://www.curlie.org/Reference/Directories/Address_and_Phone_Numbers/Area_Codes/ （Curlie 区号目录，前 DMOZ） | 7 | 1（见下） |
| https://www.cyndislist.com/directories/general/ （Cyndi's List, Directories General） | 7 | 1（见下） |
| https://friendshipfreelibrary.org/services/geneology/ （Friendship Free Library, 家谱research资源） | 24 | **2** |
| https://nbpl.libguides.com/homepage/genealogy （New Bedford Public Library, Genealogy） | 14 | 0 |

合计核查 52 条外链。

### 发现的真实失效链接（逐条判定）

1. **`search.aol.com/aol/search?query=...`**（Curlie 页）→ 404。这是一条**带查询串的搜索引擎检索链接**，不是内容页，不构成可置换机会。跟 WarCrumbs 首轮排除的 archive.org 检索链接同类
2. **`cafepress.com/cyndislist`**（Cyndi's List 页）→ 404。是站长自己的**周边商品店**，跟区号/邮编内容无关
3. **`stls.org/databases/`**（Friendship Free Library 页）→ 404。图书馆联盟的数据库入口页，机构基础设施
4. **`census.gov/history/www/genealogy/decennial_census_records/census_records_2.html`**（同上）→ 404。美国人口普查局的**历史普查记录**介绍页，属家谱研究材料，不是区号/邮编查询

### 处理结果

**本站本次跳过，未发出任何邮件。**

原因：4 条真实失效链接里，两条是非内容链接（搜索检索串、周边商店），两条主题不对应（图书馆数据库入口、历史普查记录）。DialWick 已发布内容是区号/邮编/县归属/国际拨号查询（atlanta-zip-codes、texas-area-codes、how-do-area-codes-work、scam-area-codes、what-county-is-chicago-in、how-to-call-mexico-from-us 等），没有一条能对上。按硬性原则 2 与 4 如实跳过。

**顺带记录一个重要发现**：Curlie 的区号目录页（前 DMOZ，本领域最经典的资源合集）只有 7 条外链且几乎全部存活，说明该页仍在维护。这是本主题下最权威的一个收录位，值得作为**常规目录提交**渠道单独尝试（走 `trafficsite-目录媒体外链` 任务），但不属于断链置换。

### 排除的误报

`403`（5 条）、`0`、`502`、`522` 一律不计为失效，只认干净 404。

### 遗留待办

家谱（genealogy）方向是本站最贴近的资源页生态——家谱研究者确实需要按区号/邮编定位祖辈住址，且这类页面链接腐烂率高（本轮 Friendship Free Library 一页 24 条就有 2 条 404）。但本轮抽到的具体断链恰好都不对应。下次继续沿家谱方向深挖，优先找**县级/州级家谱协会**的 "useful links" 页（比公共图书馆的页更少维护），并重点找收录了 allareacodes / zipcodes 类**查询工具**的清单——DialWick 是参考型工具站，只有收工具的清单才可能匹配，收文章的清单匹配不上。

---

## 2026-08-09（第二次运行）

### 本轮方法

按上次遗留建议，沿"县级/州级家谱协会 useful links 页 + 收录 allareacodes/zipcodes 类查询工具"方向深挖。用 8 个不同角度的 WebSearch 查询（"county genealogical society useful links area code"、"genealogical society useful links zip code lookup"、"allareacodes.com OR unitedstateszipcodes.org genealogy link page"、"county historical society helpful links phone directory" 等）找到候选资源页，逐页核实。

### 检查过的资源页（共 15 个）

| 资源页 | 是否含区号/邮编工具链接 | 结果 |
|---|---|---|
| Southern California Genealogical Society – Southern California Resources | 否（只收机构链接） | 无匹配 |
| Placer County Genealogical Society – Resource Links（343 条外链全量核查） | 是（whitepages.com、USPS ZIP lookup） | 两条均存活，且全页 343 条里唯二真 404（66.49.194.143 老IP、nutrias.org）都与区号/邮编无关 |
| Western New York Genealogical Society – Research Links（Wix站，用Browser pane渲染读取） | 否 | 无匹配 |
| Santa Rosa County (FL) Genealogical Society – Library, Links & Resources | 否 | 无匹配 |
| Bill George's Website – Genealogy | 是（allareacodes.com、unitedstateszipcodes.org、411.com、switchboard.com、whitepages.com） | 全部存活（部分返回403是WAF/机器人拦截，非真404，已用Browser pane二次确认allareacodes.com和anywho.com均是正常页面） |
| Villages NW – Resource Library Tools | 是（allareacodes.com、unitedstateszipcodes.org） | 均存活 |
| Amici Club – Members Links | 是（allareacodes.com、unitedstateszipcodes.org） | 均存活 |
| Genealogical Society of Salem County NJ (gsscnj.org) – Links | 否 | 无匹配 |
| Rootsweb – Lafayette County Historical and Genealogical Society Useful Links | 无法核实 | sites.rootsweb.com 全站返回 Cloudflare 人机验证页，不是真404，排除 |
| Berks County Genealogical Society – Research Links | 否 | 无匹配（该页明确写"欢迎举报断链"，维护活跃） |
| Logan County (KY) Archives & Genealogical Society – Useful Links | 否 | 无匹配（同样欢迎举报断链） |
| North Carolina Genealogical Society – Links | 否（403，WAF拦截未能读取全文，标题/摘要未见区号邮编工具） | 无匹配 |
| Volusia Genealogical Society (vgsfl.org) – Links | 否 | 无匹配 |
| San Luis Obispo County Genealogical Society – County Resources | 否 | 无匹配 |
| 已知历史通用电话查询工具排查：555-1212.com、qwestdex.com | DNS 无法解析（疑似域名已过期） | 按硬性原则"只认干净404"排除；即使坐实失效，这类工具是"个人电话反查"而非"区号/邮编/国际拨号参考"，与DialWick定位不完全对应，就算能确认也可能不构成好机会 |

### 处理结果

**本站本次未发送任何邮件，未产出新草稿。**

原因：15 个候选资源页里，只有 3 个（Bill George's Website、Villages NW、Amici Club）真正收录了 allareacodes.com / unitedstateszipcodes.org 类查询工具，但这三处的工具链接全部存活（用 curl 复测 + Browser pane 二次确认排除 WAF 误判）。其余 12 个页面虽然是家谱/历史协会维护的资源清单，但完全不收录区号/邮编查询工具（多为机构链接、图书馆、档案馆、报纸库），不构成主题对应的置换机会。

### 排除的误报

`403`、`0`（含 DNS 无法解析，如 555-1212.com / qwestdex.com）、`502`、`522` 一律不计为失效，只认干净 404。本轮 Rootsweb 页面被 Cloudflare 人机验证拦截、allareacodes.com/anywho.com 的 curl 403 均用 Browser pane 二次确认为误判后排除。

### 遗留待办（对下一轮的建议）

连续两轮（8/4、8/9）沿家谱协会方向深挖，累计核查 19 个资源页 + 400 余条外链，只找到 3 个页面真正收录区号/邮编查询工具，且全部存活。**样本已经不算小，"家谱协会 useful links 页收录 allareacodes/zipcodes 类工具"这个假设本身的命中率看起来偏低**——这类协会的资源清单以机构/档案馆/图书馆链接为主，很少专门收录电话/邮编参考工具；反而 Bill George、Villages NW、Amici Club 这几个"个人网站/社区组织通用工具清单"类型的页面命中率更高，只是巧合全部存活。

建议下一轮**不要继续局限于家谱协会**，改试收录通用参考工具（area code/zip lookup）本身更常见、且维护频率更低的资源页类型，例如：
- 社区/教会/俱乐部的"实用工具/资源"页（如本轮 Villages NW 这一类，量大但个体维护频率低）
- 房产中介/搬家公司的"新居民资源"页（常年不更新，容易收录已停运的老牌查询工具如 smartpages.com、qwestdex.com 一类）
- 呼叫中心/客服培训类网站的"电话礼仪/区号参考"页
- 业余无线电（HAM radio）爱好者的区号/前缀参考页（技术性强、个人维护、更新慢）

同时排查中发现 anywho.com、theultimates.com 等老牌反查工具目前 curl 全部返回 403（疑似真的被裁撤或转型），但按硬性原则未经 Browser pane 或其他独立确认前不能当断链证据——下次如果时间允许可以专门验证这几个老牌工具站是否已经真的下线，如果确认下线，再回头找哪些资源页仍在链接它们。

---

## 2026-08-16（第三次运行）

### 1.5 竞品外链缺口分析

用 `dataforseo_query.py` 直连查询 allareacodes.com（引荐域名 4,531 个，外链总数 235,883）与 unitedstateszipcodes.org（引荐域名 4,036 个，外链总数 236,073）的 `domain` 概览各一次，再各拉 100 条 `backlinks` 明细（共 200 条真实外链行，非估算）。逐条过滤自动化目录/PBN/垃圾外链（nucleovisual.com 系列多语言镜像页、pages.dev 免费托管垃圾页、moreofit.com 的"相似网站"自动生成页等），锁定"资源列表/roundup 页面"这一可赢类别，找到以下候选并逐一核实：

| 候选 | 类型 | 结果 |
|---|---|---|
| refdesk.com（首页 Fast Facts 工具列表） | 真实编辑策展的资源目录，1995年至今，含 allareacodes.com + fonefinder.net + bennetyee.org 三个区号工具 | 三个工具链接全部存活（curl+DNS核实），非断链机会；且该页本身有正式的"Site Inclusion Criteria"编辑审核流程，联系渠道只有 reCAPTCHA 网页表单——按硬性原则不得完成/绕过 CAPTCHA，**判定应归入`trafficsite-目录媒体外链`任务而非本任务**，本轮不追加联系（8/4 轮已对 Curlie 记录过同样的归类判断，此次是第二次遇到，确认这是稳定规律：编辑审核制的正式目录站点应统一走目录提交任务） |
| gondtc.com（NDTC 北达科他电话公司）"Local Links" 页 | 真实社区资源列表（含 Job Service of ND、ND Tourism 等），非自动生成 | 唯一链接 allareacodes.com/north_dakota_area_codes.htm 一个竞品，DialWick 无对应州级专页 → **判定为竞品缺口机会，见下方 Pitch 6** |
| rutlandtownship.org（密歇根 Rutland Charter Township 政府）"Local Links" 页 | 真实小型地方政府社区资源页 | 同时链接 unitedstateszipcodes.org（"United States Zip Code Lookup"）与 allareacodes.com（"Area Code Lookup"）两个竞品，均存活 → **判定为竞品缺口机会，见下方 Pitch 5** |
| public-records.online 博客文章 | 曾链接 allareacodes.com | 源页面本身已 410 Gone，排除 |
| stevemorse.org/jcal/areacodes.html（Steve Morse 的区号查询小工具） | 个人维护的交互式查询页，硬编码两个数据源链接（allareacodes.com + lincmad.com） | 非"资源列表"，是功能性工具页，加第三个数据源的可能性低，判定低置信度不追加联系 |
| hollowtop.com | 个人网站的站内搜索页 | curl 403 无法核实，2026 版本页面结构不明，低优先级放弃 |

theultimates.com（旧版 anywho.com 类反查工具）另跑了一次 `backlinks` 查询（60条），确认大量真实资源页仍在链接它（fetter.org、driko.org、cedarnet.org、多所大学图书馆页等）。但核实后**这条线索本身对 DialWick 不成立**：theultimates.com/anywho.com 的功能是"白页/黄页人物反查"，跟 DialWick 的区号/邮编/国际拨号定位不匹配，且 DialWick 明确"⛔不做反向号码查询（隐私+YMYL）"——即使这些链接全部坐实失效，DialWick 也没有真实对应内容可以替换，硬凑会违反"替换建议必须真实主题对应"的硬性原则。这条线索本轮到此为止，不建议下一轮再投入时间反向搜索。

### anywho.com / theultimates.com 下线状态验证（遗留任务）

用 Browser pane 独立验证（非 curl）：
- **anywho.com**：真实 Chrome 导航同样返回 403 Forbidden（非 curl 特有），DNS 正常解析。按硬性原则 403 不计入失效证据，判定仍为"不确定"，不作为断链证据，也不再追查。
- **theultimates.com**：`https://` 导航被浏览器拒绝，但 `http://` 导航成功并**跳转到 ussearch.com**（完全不同的付费背景调查站点）。这不是"干净404"，但是比403更强的独立确认信号——域名本身已被品牌方放弃/转售，不再提供原来的白页/黄页查询功能。不过如上一节所述，即使确认下线，其内容类型跟 DialWick 也不匹配，此发现记录在案但不产出联系动作。

### 第1-4步：断链方向排查（新方向 vs 家谱协会）

按上一轮遗留建议，用 WebSearch 尝试了教会/社区俱乐部资源页、搬家公司新居民资源页、呼叫中心话术培训资源页、业余无线电区号前缀参考页四个新方向，外加房产中介/图书馆"quick reference links"方向。多数查询未能定位到真实收录 allareacodes/unitedstateszipcodes 类工具的资源页（教会资源页多为食物银行/社会服务链接，呼叫中心培训页不含区号参考，业余无线电"call area"实为呼号分区而非电话区号，跟主题无关）。唯一有实质产出的是 Tom Loredo 的康奈尔大学个人书签页（间接链接的 sewanee.edu 参考页确认 404），但断链本身是"通用参考资源入口"而非区号/邮编专属工具，主题不对应，排除。

**本轮没有找到真实的、主题对应的断链置换机会**——但竞品外链缺口分析（1.5步）产出了两个高置信度目标，弥补了断链方向本身的空转。

### 独立复核与发送

两封邮件均为"竞品缺口"框架（不是断链置换，因为两个目标页面上的竞品链接本身都存活）：

- **Pitch 5（Rutland Charter Township, MI, clerk@rutlandtownship.org）**：独立复核 agent 核实无重复联系记录、目标页面真实、Mexico 2019 拨号改革事实核对无误、未推荐单区号页、语气非模板化，判定"CAN SEND"。**已发送**，Gmail Message ID `1a0094b768eba341`。
- **Pitch 6（NDTC/gondtc.com, support@gondtc.com）**：独立复核 agent 首轮抓出真实问题——草稿把目标页面误称为"Community Links page"，但该 agent 独立核实后发现页面真实标题是"Helpful Resources & How-To Videos"，区块标题是"LOCAL LINKS"，URL 是 `/resources/` 而非首页，"Community"一词全页未出现。这是本次任务撰写过程中自己的疏漏（照抄 Rutland 页面的命名习惯，未逐字核对 gondtc.com 页面的真实标题），复核流程按设计拦下。已修正邮件措辞（"Community Links" → "Local Links"，URL 引用改为 `/resources/`，Subject 也顺带跟 Pitch 5 做了区分避免完全重复），提交同一 agent 复核第二轮，agent 独立 curl 复测确认修正后的措辞与页面真实标题/链接完全对应，返回"CAN SEND"。**已发送**，Gmail Message ID `1a0094d3c4a8630d`。

两封邮件本轮均已实际发出：Pitch 5 → clerk@rutlandtownship.org（Message ID `1a0094b768eba341`），Pitch 6 → support@gondtc.com（Message ID `1a0094d3c4a8630d`）。

（完整两封邮件正文见 `outreach-drafts.md` Pitch 5 / Pitch 6，含独立复核 agent 的详细核查记录与本次的自纠正过程）

### 遗留待办（对下一轮的建议）

1. refdesk.com 类"正式编辑审核制目录站点"应统一改走 `trafficsite-目录媒体外链` 任务处理，本任务（断链置换）不再重复评估这类站点——这是第二次遇到同样的归类判断（第一次是 8/4 轮的 Curlie），可以视为稳定规律写进该任务的 SKILL.md。
2. anywho.com/theultimates.com 反查工具线索到此为止：功能类型跟 DialWick 定位不匹配（DialWick 不做反向号码查询），即使坐实下线也没有可替换的真实内容，不建议下一轮再投入时间反向搜索这两个域名的外链。
3. 家谱协会方向已连续两轮（8/4、8/9）证明命中率低，本轮已改投新方向但收效也有限（WebSearch 定位真实"资源列表页"本身比预期难，多数搜索结果是内容农场或通用清单而非真正的编辑策展页）。下一轮如果继续做断链方向，建议改变方法：不再从"猜测可能收录该工具的资源页类型"出发用 WebSearch 广撒网，改用 DataForSEO 对 allareacodes.com/unitedstateszipcodes.org 做更大样本的 `backlinks` 查询（比如拉 300-500 条而非 100 条），从真实反向链接数据里筛选资源列表页，命中率应该显著高于关键词猜测式 WebSearch——1.5 步本轮的两个真实机会都是这样找到的，断链方向本身反而空转。

### 附记（同日，上层协调会话发现）：ltaddeo@buffalo.edu 被重复发送 2 封同内容邮件——并非本轮子agent所为，系并发任务冲突

负责本站本轮任务的子agent只发出了上面记录的 Pitch 5/6（Rutland Charter Township + NDTC），不涉及 buffalo.edu。但上层协调会话（负责本次十站编排的会话）事后核对全账号 `gmail_send.py list --query "in:sent newer_than:1d"` 时发现 `ltaddeo@buffalo.edu`（"Resource suggestion for your Area Code Information guide"，介绍 dialwick.com/chicago-area-code/ 的区号变迁案例）在 2026-08-16 01:28:00 和 01:28:18（间隔18秒）被发送了两次，内容逐字节完全相同，From 均为 `contact@dialwick.com`，Message ID 分别为 `1a0094177077e079`、`1a00941be0a7b689`。

排查确认：这两封邮件均不在本任务本轮任何一个子agent的工作范围内（本轮唯一的DialWick子agent只处理了Rutland/NDTC两条，日志/草稿文件里都没有buffalo.edu的记录）。判断是**另一个完全独立、并发运行的 `trafficsite-broken-link-building`（或高度相似的）任务实例**在同一时间窗口里也对DialWick做了断链/资源建议调研，且很可能这个独立实例内部自己也发生了一次内部重复（两次发送间隔仅18秒，不像是两个不同外部session凑巧各发一次那么巧合，更像同一个执行体内部重试或并行分支各发了一次）。

**已确认全账号近24小时内其余 sent 邮件（共24封）中，仅此一对是重复**，其余9个站点本轮的送出邮件经核对均为各自唯一一次发送，未发现其他重复。已同步记入 `独立站/待Owen处理事项.md`，供 Owen 决定是否需要给这类"多会话同时跑同一个定时任务"加并发保护。
