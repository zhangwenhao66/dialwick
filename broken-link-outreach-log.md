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
