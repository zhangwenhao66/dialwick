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
