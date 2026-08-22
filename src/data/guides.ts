export type GuideCategory =
	| 'ZIP Codes'
	| 'Area Code Lists'
	| 'Area Code Guides'
	| 'Counties'
	| 'International Dialing'
	| 'Area Codes';

export interface DataTable {
	caption?: string;
	columns: string[];
	rows: (string | number)[][];
}

export interface GuideSection {
	heading: string;
	body: string[];
	table?: DataTable;
	/** Raw, self-authored inline SVG markup -- no stock photos or AI-generated "realistic" imagery on this site. */
	diagramSvg?: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface Source {
	label: string;
	url: string;
}

export interface Guide {
	slug: string;
	category: GuideCategory;
	title: string;
	description: string;
	published?: string;
	updated: string;
	coreSummary: string;
	sections: GuideSection[];
	faq?: FaqItem[];
	sources?: Source[];
}

const NPA_DIAGRAM = `<svg viewBox="0 0 640 170" width="100%" style="max-width:640px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 10-digit North American phone number broken into area code, exchange, and subscriber number">
	<text x="100" y="28" text-anchor="middle" fill="#1a2332" font-size="12" font-weight="700" font-family="ui-sans-serif, system-ui">AREA CODE (NPA)</text>
	<rect x="10" y="40" width="180" height="70" rx="8" fill="#131a27"/>
	<text x="100" y="85" text-anchor="middle" fill="#f6f4ee" font-size="30" font-family="ui-monospace, monospace" font-weight="700">415</text>

	<text x="310" y="28" text-anchor="middle" fill="#1a2332" font-size="12" font-weight="700" font-family="ui-sans-serif, system-ui">EXCHANGE (NXX)</text>
	<rect x="220" y="40" width="180" height="70" rx="8" fill="#b5722f"/>
	<text x="310" y="85" text-anchor="middle" fill="#ffffff" font-size="30" font-family="ui-monospace, monospace" font-weight="700">555</text>

	<text x="530" y="28" text-anchor="middle" fill="#1a2332" font-size="12" font-weight="700" font-family="ui-sans-serif, system-ui">SUBSCRIBER NUMBER</text>
	<rect x="430" y="40" width="200" height="70" rx="8" fill="#131a27"/>
	<text x="530" y="85" text-anchor="middle" fill="#f6f4ee" font-size="30" font-family="ui-monospace, monospace" font-weight="700">0142</text>

	<text x="320" y="145" text-anchor="middle" fill="#1a2332" font-size="13" font-family="ui-sans-serif, system-ui" opacity="0.6">10 digits total -- the area code identifies a numbering plan area, not a single town</text>
</svg>`;

export const guides: Guide[] = [
	// ---------------------------------------------------------------------
	// ZIP Codes
	// ---------------------------------------------------------------------
	{
		slug: 'atlanta-zip-codes',
		category: 'ZIP Codes',
		title: 'Atlanta ZIP Codes: The Full List by County',
		description:
			"Every ZIP code USPS assigns to Atlanta, Georgia, which county each one sits in, and the one Atlanta ZIP that belongs to the IRS, not a neighborhood.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"USPS assigns 92 ZIP codes with Atlanta as the primary place name. Most are in Fulton County, but roughly a fifth sit in DeKalb County -- Atlanta's ZIP map has never lined up neatly with a single county line. One of those 92, 39901, isn't a neighborhood at all: it's the unique ZIP code for the IRS's Atlanta service center.",
		sections: [
			{
				heading: "Atlanta's ZIP codes span two counties, not one",
				body: [
					"Atlanta sits mostly in Fulton County, but the city's ZIP codes don't stop at the Fulton line. USPS ZIP boundaries follow mail-delivery routes, not municipal or county borders, and several ZIP codes on Atlanta's north and northeast side -- around Emory, Druid Hills, Chamblee, and the Perimeter -- fall inside DeKalb County even though the mailing address reads \"Atlanta, GA.\"",
					"Of the 92 ZIP codes USPS lists with Atlanta as the primary place, the county split works out to roughly four Fulton ZIPs for every one DeKalb ZIP. If a piece of mail is addressed to Atlanta, checking the ZIP against the table below is the only reliable way to know which county it's actually in -- the city name on the envelope won't tell you.",
					"One row deserves a caveat rather than a flat answer: 30339 (Vinings, Cumberland, and Truist Park, home of the Atlanta Braves) is listed here as Fulton because that's what this table's source, GeoNames, assigns it. But most population-weighted ZIP-to-county datasets put the bulk of that ZIP's land and residents in neighboring Cobb County instead, with only a smaller Fulton slice. GeoNames' single-county field can flatten a ZIP that genuinely straddles a line -- 30339 is the one code in this table where that happens.",
				],
				table: {
					caption: 'All 92 ZIP codes with "Atlanta, GA" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-04)',
					columns: ['ZIP', 'County'],
					rows: [
						['30301', 'Fulton'], ['30302', 'Fulton'], ['30303', 'Fulton'], ['30304', 'Fulton'],
						['30305', 'Fulton'], ['30306', 'Fulton'], ['30307', 'Fulton'], ['30308', 'Fulton'],
						['30309', 'Fulton'], ['30310', 'Fulton'], ['30311', 'Fulton'], ['30312', 'Fulton'],
						['30313', 'Fulton'], ['30314', 'Fulton'], ['30315', 'Fulton'], ['30316', 'Fulton'],
						['30317', 'Fulton'], ['30318', 'Fulton'], ['30319', 'DeKalb'], ['30320', 'Fulton'],
						['30321', 'Fulton'], ['30322', 'DeKalb'], ['30324', 'Fulton'], ['30325', 'Fulton'],
						['30326', 'Fulton'], ['30327', 'Fulton'], ['30328', 'Fulton'], ['30329', 'DeKalb'],
						['30331', 'Fulton'], ['30332', 'Fulton'], ['30333', 'DeKalb'], ['30334', 'Fulton'],
						['30336', 'Fulton'], ['30337', 'Fulton'], ['30338', 'DeKalb'], ['30339', 'Fulton'],
						['30340', 'DeKalb'], ['30341', 'DeKalb'], ['30342', 'Fulton'], ['30343', 'Fulton'],
						['30344', 'Fulton'], ['30345', 'DeKalb'], ['30346', 'DeKalb'], ['30348', 'Fulton'],
						['30349', 'Fulton'], ['30350', 'DeKalb'], ['30353', 'Fulton'], ['30354', 'Fulton'],
						['30355', 'Fulton'], ['30356', 'DeKalb'], ['30357', 'Fulton'], ['30358', 'Fulton'],
						['30359', 'DeKalb'], ['30360', 'DeKalb'], ['30361', 'Fulton'], ['30362', 'DeKalb'],
						['30363', 'Fulton'], ['30364', 'Fulton'], ['30366', 'DeKalb'], ['30368', 'Fulton'],
						['30369', 'Fulton'], ['30370', 'Fulton'], ['30371', 'Fulton'], ['30374', 'Fulton'],
						['30375', 'Fulton'], ['30377', 'Fulton'], ['30378', 'Fulton'], ['30380', 'Fulton'],
						['30384', 'Fulton'], ['30385', 'Fulton'], ['30388', 'Fulton'], ['30392', 'Fulton'],
						['30394', 'Fulton'], ['30396', 'Fulton'], ['30398', 'Fulton'], ['31106', 'Fulton'],
						['31107', 'Fulton'], ['31119', 'DeKalb'], ['31126', 'Fulton'], ['31131', 'Fulton'],
						['31136', 'Fulton'], ['31139', 'Fulton'], ['31141', 'DeKalb'], ['31145', 'DeKalb'],
						['31146', 'DeKalb'], ['31150', 'Fulton'], ['31156', 'Fulton'], ['31192', 'Fulton'],
						['31193', 'Fulton'], ['31195', 'Fulton'], ['31196', 'Fulton'], ['39901', 'DeKalb'],
					],
				},
			},
			{
				heading: 'Downtown, Midtown, and Buckhead each have their own ZIP',
				body: [
					"Three Atlanta ZIP codes are widely recognized on their own: 30303 covers downtown around Five Points and the Georgia State campus, 30309 covers Midtown, and 30305 / 30326 / 30327 cover the three main slices of Buckhead. 30310 covers the West End on the city's near-southwest side. Beyond these well-known ones, USPS doesn't publish an official neighborhood-to-ZIP crosswalk, and Atlanta's neighborhood boundaries are informal enough that different maps draw them differently -- the table above (ZIP and county only) is the part that comes from an authoritative source.",
				],
			},
			{
				heading: "Why a ZIP is assigned to the IRS, not a neighborhood",
				body: [
					"39901 doesn't fit the pattern of the other 91 ZIPs at all -- it's numerically far outside Georgia's normal 30000-31999 block, and it isn't a delivery area anyone lives in. It's a unique ZIP code the USPS assigns to a single large-volume mail recipient: the IRS's Atlanta service center. Other IRS processing centers get the same treatment (Austin, TX uses 73301; Fresno, CA uses 93888) -- when an organization receives enough mail, USPS carves out a ZIP that belongs to it alone, regardless of where that number would otherwise fall on the map. Atlanta only has the one; [Chicago carries 28 of these single-recipient ZIPs](/chicago-zip-codes/), nearly a third of its total, reflecting its role as a major aviation and banking hub.",
				],
			},
			{
				heading: 'Several of Atlanta\'s best-known suburbs are not "Atlanta" ZIPs at all',
				body: [
					"Sandy Springs, Dunwoody, and Brookhaven all incorporated as their own independent cities between 2005 and 2012, but ZIP codes don't automatically follow city incorporations -- USPS updates its place-name database on its own schedule, which is why mail to parts of Sandy Springs and Dunwoody sometimes still shows \"Atlanta, GA\" as the recommended city name even though neither is legally part of Atlanta. Conversely, some of the DeKalb ZIPs in the table above (30338, 30350) already show \"Dunwoody\" as an acceptable alternate. This is normal and doesn't affect mail delivery; ZIP boundaries and municipal boundaries are two different systems that were never designed to match.",
					"That schedule is now actively moving for Sandy Springs specifically: in March 2026, USPS approved the city's request to become the default mailing name -- replacing \"Atlanta\" -- for seven of its ZIP codes (30319, 30327, 30328, 30338, 30339, 30342, and 30350; an eighth Sandy Springs ZIP, 30092, wasn't included). USPS said updating its Address Management System database to reflect the change could take several weeks. As of this table's last GeoNames check (2026-08-04), all seven still carry \"Atlanta\" as their listed place name -- the change hadn't yet propagated to that database -- but readers in those ZIPs should expect \"Sandy Springs\" to start appearing instead.",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Atlanta?',
				answer:
					"There isn't a single one -- Atlanta uses 92 different ZIP codes across Fulton and DeKalb counties. 30303 is the closest thing to a \"downtown\" ZIP, covering the Five Points/Georgia State area.",
			},
			{
				question: 'Is Atlanta in Fulton County or DeKalb County?',
				answer:
					"Mostly Fulton, but not entirely -- about a fifth of Atlanta's ZIP codes, concentrated on the north and northeast side (Emory, Druid Hills, Chamblee, the Perimeter), are in DeKalb County even though they carry an Atlanta mailing address.",
			},
			{
				question: 'Why does 39901 show up as an Atlanta ZIP code?',
				answer:
					"It's a unique ZIP USPS assigned to a single large mail recipient -- the IRS's Atlanta service center -- rather than to a residential area. It doesn't follow the normal geographic numbering pattern because it isn't a geographic ZIP at all.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Sandy Springs, GA incorporation history', url: 'https://en.wikipedia.org/wiki/Sandy_Springs,_Georgia' },
			{ label: 'City of Sandy Springs: USPS to recognize Sandy Springs as default mailing address', url: 'https://www.sandyspringsga.gov/news/usps-recognize-sandy-springs-default-mailing-address/' },
		],
	},
	{
		slug: 'new-york-zip-codes',
		category: 'ZIP Codes',
		title: 'New York City ZIP Codes: All 311, by Borough',
		description:
			"NYC's five boroughs use 311 ZIP codes -- and Queens is the only one where the map runs on neighborhood names, not the borough name itself.",
		published: '2026-08-03',
		updated: '2026-08-06',
		coreSummary:
			"New York City's five boroughs together use 311 ZIP codes: 146 in Manhattan (New York County), 79 in Queens, 47 in Brooklyn (Kings County), 25 in the Bronx, and 14 on Staten Island (Richmond County). Manhattan, Brooklyn, the Bronx, and Staten Island ZIPs are all addressed with the borough name; Queens is the outlier -- its ZIPs are addressed by neighborhood (Astoria, Flushing, Jamaica, and 38 others), never \"Queens.\"",
		sections: [
			{
				heading: 'The five boroughs by ZIP code count',
				body: [
					"Manhattan carries by far the most ZIP codes of any borough, not because it's the most populous (Brooklyn and Queens both have more residents) but because Manhattan's dense mix of office buildings, large employers, and high-rise residential blocks gets subdivided into more, smaller ZIP delivery areas.",
				],
				table: {
					caption: 'NYC boroughs, their ZIP code counts, and the county each one is legally identical to',
					columns: ['Borough', 'County', 'ZIP codes', 'Range'],
					rows: [
						['Manhattan', 'New York County', 146, '10001-10286'],
						['Queens', 'Queens County', 79, '11004-11697'],
						['Brooklyn', 'Kings County', 47, '11201-11256'],
						['The Bronx', 'Bronx County', 25, '10451-10475'],
						['Staten Island', 'Richmond County', 14, '10301-10314'],
					],
				},
			},
			{
				heading: 'Queens is the exception: its ZIP codes never say "Queens"',
				body: [
					"Ask for a Brooklyn ZIP code and USPS calls it \"Brooklyn.\" Ask for a Staten Island ZIP and it's \"Staten Island.\" Queens breaks that pattern entirely -- every one of its 79 ZIP codes is addressed by an older, more local place name instead: Astoria, Long Island City, Flushing, Jamaica, Forest Hills, Rockaway Park, and 35 others. \"Queens\" itself never appears as a USPS place name.",
					"The most commonly cited explanation goes back to 1898: Queens was consolidated that year from a patchwork of existing towns and villages that already had their own post offices, and many of those names stuck instead of being replaced by the new borough name. That's not the full story, though -- Staten Island's five original towns (Castleton, Middletown, Northfield, Southfield, and Westfield) were folded into the city in that very same 1898 merger, yet Staten Island addresses use the single borough name today, not those old town names. And not every Queens place name even predates 1898: Bellerose, for instance, was coined as a new development name in the early 1900s, well after consolidation. Brooklyn, by contrast, had already unified its post offices under \"Brooklyn\" before 1898, so that name stuck there without the same complication.",
				],
			},
			{
				heading: 'Manhattan, Brooklyn, the Bronx, and Staten Island line up exactly with their counties',
				body: [
					"New York City is unusual among major US cities in that each of its boroughs is legally identical to a county -- Manhattan is New York County, Brooklyn is Kings County, the Bronx is Bronx County, and Staten Island is Richmond County. That means every ZIP code in one of these four boroughs sits entirely within a single, named county, with no cross-county splits the way [Atlanta splits between Fulton and DeKalb](/atlanta-zip-codes/) or [Chicago's near suburbs](/chicago-zip-codes/) sometimes have.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does New York City have?',
				answer:
					'311 across all five boroughs: 146 in Manhattan, 79 in Queens, 47 in Brooklyn, 25 in the Bronx, and 14 on Staten Island.',
			},
			{
				question: 'Why don\'t Queens ZIP codes say "Queens"?',
				answer:
					"The most commonly cited reason: Queens was assembled in 1898 from towns and villages that already had their own post offices under their own names -- Astoria, Flushing, Jamaica, and dozens more -- and USPS kept using many of those local names instead of switching everything to \"Queens.\" That's not the whole explanation, though -- Staten Island went through the same 1898 consolidation and didn't keep its old town names, so pre-existing post offices alone don't fully account for the pattern.",
			},
			{
				question: 'What ZIP code range does Manhattan use?',
				answer: 'Manhattan (New York County) ZIP codes run from 10001 to 10286, though not every number in that range is assigned.',
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'History of the boroughs of New York City', url: 'https://en.wikipedia.org/wiki/Boroughs_of_New_York_City' },
			{
				label: "New York Genealogical & Biographical Society: the old cities, towns, and villages that formed Greater New York",
				url: 'https://www.newyorkfamilyhistory.org/knowledgebase/five-borough-city-old-cities-towns-and-villages-came-together-form-greater-new-york',
			},
			{ label: 'Wikipedia: Bellerose, Queens', url: 'https://en.wikipedia.org/wiki/Bellerose,_Queens' },
		],
	},
	{
		slug: 'texas-zip-codes',
		category: 'ZIP Codes',
		title: "Texas ZIP Codes: How the State's 2,600 Codes Are Organized",
		description:
			"Texas doesn't have one ZIP code system, it has a range spanning 73301 to 88595 -- and which major city has the most ZIP codes isn't the one with the most people.",
		published: '2026-08-03',
		updated: '2026-08-09',
		coreSummary:
			"Texas uses roughly 2,600 ZIP codes spread across 52 distinct three-digit prefixes, running from 73301 in the north (a Texas-adjacent IRS ZIP shared with Oklahoma's numbering block) to 88595 near El Paso in the far west. No single ZIP covers a whole city -- Houston alone uses 178 of them, more than any other Texas city. The real surprise is further down the list: El Paso has fewer than half of San Antonio's population but nearly twice its ZIP code count.",
		sections: [
			{
				heading: "Texas ZIP codes run from the 733 prefix to the 885 prefix",
				body: [
					"Texas is large enough that USPS didn't give it one contiguous ZIP block the way it does for smaller states. The state's ZIP codes span 52 different three-digit prefixes from 733 up through 885, roughly tracking a north-to-south, then east-to-west numbering sweep that Texas shares at its edges with Oklahoma (73xxx), Louisiana (70xxx border areas), and New Mexico (88xxx).",
				],
			},
			{
				heading: 'ZIP code count by major city',
				body: [
					"City population and ZIP code count don't move together in a straight line -- a city's ZIP count depends more on its physical footprint and how spread out its delivery routes are than on how many people live there.",
					"Dallas and Austin each get a deeper breakdown elsewhere on this site: [Dallas's ZIP list](/dallas-zip-codes/) includes four codes that actually belong to a legally independent town Dallas could never annex, and [Austin's ZIP breakdown](/austin-zip-codes/) shows how its 74 codes split across two counties.",
				],
				table: {
					caption: 'ZIP codes per major Texas city (USPS-assigned place name)',
					columns: ['City', 'ZIP codes'],
					rows: [
						['Houston', 178],
						['El Paso', 137],
						['Dallas', 105],
						['San Antonio', 83],
						['Austin', 74],
						['Fort Worth', 56],
					],
				},
			},
			{
				heading: 'Why El Paso has more ZIP codes than San Antonio, despite being smaller',
				body: [
					"San Antonio has more than double El Paso's population -- roughly 1.5 million versus 680,000, per Census Bureau estimates -- yet El Paso is assigned nearly twice as many ZIP codes. The more commonly cited reason isn't El Paso's location so much as its footprint: at roughly 248 square miles, El Paso is one of the largest Texas cities by land area, and its territory includes Fort Bliss, one of the US Army's largest posts, whose facilities carry their own separate ZIP codes. ZIP codes are drawn around mail-carrier routes and delivery volume, not population evenly divided across a city, so a large, sprawling service area anchored by a major military installation produces more, smaller zones than San Antonio's more compact urban core does.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Texas have?',
				answer: 'Roughly 2,600, spread across 52 distinct three-digit ZIP prefixes from 733 to 885.',
			},
			{
				question: 'Which Texas city has the most ZIP codes?',
				answer:
					"Houston, with 178 -- well ahead of El Paso (137), Dallas (105), San Antonio (83), Austin (74), and Fort Worth (56). Houston is also Texas's most populous city, so its ZIP lead isn't the surprising part; the bigger anomaly is farther down the list, where El Paso outranks the much larger San Antonio.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'US Census Bureau QuickFacts: San Antonio city, Texas', url: 'https://www.census.gov/quickfacts/fact/table/sanantoniocitytexas/PST045224' },
			{ label: 'US Census Bureau QuickFacts: El Paso city, Texas', url: 'https://www.census.gov/quickfacts/fact/table/elpasocitytexas/PST045224' },
			{ label: 'Wikipedia: El Paso, Texas', url: 'https://en.wikipedia.org/wiki/El_Paso,_Texas' },
			{ label: 'Wikipedia: Fort Bliss', url: 'https://en.wikipedia.org/wiki/Fort_Bliss' },
		],
	},
	{
		slug: 'dallas-zip-codes',
		category: 'ZIP Codes',
		title: 'Dallas ZIP Codes: The Full List by County',
		description:
			"Every ZIP code USPS assigns to Dallas sits in Dallas County, but four belong to Highland Park, a 2.2-square-mile town independent of Dallas since 1915.",
		published: '2026-08-04',
		updated: '2026-08-22',
		coreSummary:
			"USPS assigns 105 ZIP codes with Dallas as the primary place name, and every one of them sits in a single county: Dallas County (the city's actual limits are wider than its ZIP-code footprint, more on that below). But four of those 105 (75205, 75209, 75219, and 75225) don't actually belong to the city of Dallas. They're the ZIP codes of Highland Park, a legally independent town that Dallas tried to annex for more than 25 years and never managed to.",
		sections: [
			{
				heading: 'All 105 ZIP codes USPS assigns to Dallas',
				body: [
					"USPS lists 105 ZIP codes with \"Dallas, TX\" as the primary place name (the exact count [Texas ZIP codes](/texas-zip-codes/) puts second behind Houston's 178 and ahead of San Antonio's 83). Every one of the 105 sits in Dallas County, the same single-county pattern [New York City's five boroughs](/new-york-zip-codes/) show, each lining up exactly with one county. That pattern only holds at the ZIP-code level, though: Dallas's actual city limits are wider than its ZIP-code footprint, and annexation over the decades has pulled slices of the city into Collin, Denton, Kaufman, and Rockwall counties too, a wider spread than [Atlanta's two-county split between Fulton and DeKalb](/atlanta-zip-codes/), even though none of that shows up in a Dallas-named ZIP code.",
					"Downtown alone accounts for three of them: 75201, 75202, and 75270 all cover the central business district around Dallas City Hall and the Arts District.",
				],
				table: {
					caption: 'All 105 ZIP codes with "Dallas, TX" as the primary USPS place name (all in Dallas County)',
					columns: ['ZIP'],
					rows: [
						['75201'], ['75202'], ['75203'], ['75204'], ['75205'],
						['75206'], ['75207'], ['75208'], ['75209'], ['75210'],
						['75211'], ['75212'], ['75214'], ['75215'], ['75216'],
						['75217'], ['75218'], ['75219'], ['75220'], ['75221'],
						['75222'], ['75223'], ['75224'], ['75225'], ['75226'],
						['75227'], ['75228'], ['75229'], ['75230'], ['75231'],
						['75232'], ['75233'], ['75234'], ['75235'], ['75236'],
						['75237'], ['75238'], ['75240'], ['75241'], ['75242'],
						['75243'], ['75244'], ['75246'], ['75247'], ['75248'],
						['75249'], ['75250'], ['75251'], ['75252'], ['75253'],
						['75254'], ['75260'], ['75261'], ['75262'], ['75263'],
						['75264'], ['75265'], ['75266'], ['75267'], ['75270'],
						['75275'], ['75277'], ['75283'], ['75284'], ['75285'],
						['75287'], ['75301'], ['75303'], ['75312'], ['75313'],
						['75315'], ['75320'], ['75326'], ['75336'], ['75339'],
						['75342'], ['75354'], ['75355'], ['75356'], ['75357'],
						['75358'], ['75359'], ['75360'], ['75367'], ['75368'],
						['75370'], ['75371'], ['75372'], ['75373'], ['75374'],
						['75376'], ['75378'], ['75379'], ['75380'], ['75381'],
						['75382'], ['75389'], ['75390'], ['75391'], ['75392'],
						['75393'], ['75394'], ['75395'], ['75397'], ['75398'],
					],
				},
			},
			{
				heading: "Four of Dallas's ZIP codes actually belong to Highland Park",
				body: [
					"Highland Park voted to incorporate on November 29, 1913, and the town's charter was granted in 1915. It sits about four miles from downtown Dallas, bordered by Dallas on three sides and by its sister town, University Park, on the fourth. Dallas began trying to annex Highland Park in 1919, and the fight dragged on until 1945. Highland Park's leaders resisted every attempt, and the town never gave in. After failing to take Highland Park directly, Dallas annexed the land surrounding it instead, turning the 2.2-square-mile town into what's often described as an island city completely encircled by a larger one.",
					"Highland Park's ZIP codes are 75205, 75209, 75219, and 75225. All four appear in the table above under \"Dallas, TX,\" because that's the place name USPS's postal database assigns to that stretch of ZIP-code territory, not because the town is part of the city.",
				],
			},
			{
				heading: 'University Park fought the same fight, and shares the enclave',
				body: [
					"University Park, which grew up around Southern Methodist University after SMU opened in 1915, incorporated on April 24, 1924. Residents had first tried to get annexed into Highland Park or Dallas, and both turned the request down over the cost of extending services. Two decades later, when Dallas came looking to annex the now-established suburb, University Park voters said no again: in the largest turnout the town had seen to that point, residents rejected annexation by a 53%-to-47% margin in 1945.",
					"Highland Park and University Park together are known as the Park Cities: two separate governments, two separate police departments, and a shared school district (Highland Park ISD) that predates both cities' modern boundaries. As of the 2010 census, the Park Cities had a combined population of 31,632.",
				],
			},
			{
				heading: 'Why USPS still calls their mail "Dallas, TX"',
				body: [
					"A ZIP code's primary place name is a USPS mail-routing label, not a legal boundary: the same distinction that puts several independent [Atlanta-area suburbs](/atlanta-zip-codes/) under an \"Atlanta, GA\" ZIP. USPS updates its place-name database on its own schedule, largely independent of when a city incorporates or where its limits actually sit, so Highland Park and University Park residents can hold their own driver's licenses, pay property taxes to their own city hall, and still get mail addressed to \"Dallas, TX 75205.\"",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Dallas?',
				answer: "There isn't a single one. Dallas uses 105 ZIP codes, and downtown alone spans three of them: 75201, 75202, and 75270.",
			},
			{
				question: 'Is Highland Park, Texas part of Dallas?',
				answer:
					"No. Highland Park is a legally independent town that has never been part of the city of Dallas. It incorporated in 1915 and successfully resisted Dallas annexation attempts from 1919 to 1945.",
			},
			{
				question: 'Why do Highland Park\'s ZIP codes say "Dallas, TX"?',
				answer:
					'Because USPS ZIP-code place names are a mail-routing convention, not a legal designation. Highland Park\'s four ZIP codes (75205, 75209, 75219, and 75225) are filed under "Dallas, TX" in USPS\'s postal database even though the town has its own government, police department, and school district.',
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Wikipedia: Highland Park, Texas', url: 'https://en.wikipedia.org/wiki/Highland_Park,_Texas' },
			{ label: 'Wikipedia: University Park, Texas', url: 'https://en.wikipedia.org/wiki/University_Park,_Texas' },
			{ label: 'Wikipedia: Downtown Dallas', url: 'https://en.wikipedia.org/wiki/Downtown_Dallas' },
			{ label: 'Wikipedia: Dallas (municipal boundary spans Dallas, Collin, Denton, Kaufman, and Rockwall counties)', url: 'https://en.wikipedia.org/wiki/Dallas' },
		],
	},
	{
		slug: 'chicago-zip-codes',
		category: 'ZIP Codes',
		title: "Chicago ZIP Codes: The Full List, and the 28 That Aren't a Neighborhood at All",
		description:
			"Every Chicago ZIP code sits in Cook County -- but a third aren't neighborhoods. They're dedicated codes for O'Hare, downtown banks, and an electric utility.",
		published: '2026-08-04',
		updated: '2026-08-04',
		coreSummary:
			"USPS assigns 84 ZIP codes with Chicago as the primary place name, and every one sits in Cook County -- Chicago's ZIP map, unlike Atlanta's, never crosses a county line. But 28 of those 84 don't correspond to a neighborhood: they're unique ZIP codes USPS carves out for single high-volume mail recipients. O'Hare International Airport holds one, 60666, a single PO Box zone shared by roughly 112 airport businesses. The code right next to it in this list, 60668, isn't O'Hare's at all -- it belongs to Commonwealth Edison, Chicago's electric utility. Two more of the 28 belong to downtown banks: 60673 and 60670 route JPMorgan Chase's mail, and 60697 belongs to Bank of America by way of Continental Illinois National Bank, the Chicago bank whose 1984 collapse coined the phrase \"too big to fail.\"",
		sections: [
			{
				heading: 'All 84 ZIP codes USPS assigns to Chicago -- and all of them sit in one county',
				body: [
					"USPS lists 84 ZIP codes with \"Chicago, IL\" as the primary place name. Every single one falls inside Cook County -- Chicago doesn't split across a county line the way [Atlanta splits between Fulton and DeKalb](/atlanta-zip-codes/), or the way several other major metros do. That's consistent with the finding on this site's [Chicago county page](/what-county-is-chicago-in/): Cook County has been Chicago's home county since 1831, and the city has never grown past its edges.",
					"Of the 84, 56 cover residential and mixed-use neighborhoods, clustered in the familiar 60601-60661 range. The other 28 are unique ZIP codes assigned to a single organization rather than a delivery area -- covered below.",
				],
				table: {
					caption: 'All 84 ZIP codes with "Chicago, IL" as the primary USPS place name (all in Cook County)',
					columns: ['ZIP'],
					rows: [
						['60601'], ['60602'], ['60603'], ['60604'], ['60605'],
						['60606'], ['60607'], ['60608'], ['60609'], ['60610'],
						['60611'], ['60612'], ['60613'], ['60614'], ['60615'],
						['60616'], ['60617'], ['60618'], ['60619'], ['60620'],
						['60621'], ['60622'], ['60623'], ['60624'], ['60625'],
						['60626'], ['60628'], ['60629'], ['60630'], ['60631'],
						['60632'], ['60633'], ['60634'], ['60636'], ['60637'],
						['60638'], ['60639'], ['60640'], ['60641'], ['60642'],
						['60643'], ['60644'], ['60645'], ['60646'], ['60647'],
						['60649'], ['60651'], ['60652'], ['60653'], ['60654'],
						['60655'], ['60656'], ['60657'], ['60659'], ['60660'],
						['60661'], ['60664'], ['60666'], ['60668'], ['60669'],
						['60670'], ['60673'], ['60674'], ['60675'], ['60677'],
						['60678'], ['60680'], ['60681'], ['60682'], ['60684'],
						['60685'], ['60686'], ['60687'], ['60688'], ['60689'],
						['60690'], ['60691'], ['60693'], ['60694'], ['60695'],
						['60696'], ['60697'], ['60699'], ['60701'],
					],
				},
			},
			{
				heading: "28 of Chicago's ZIP codes aren't neighborhoods -- they belong to a single recipient",
				body: [
					"USPS occasionally assigns a ZIP code to one organization instead of a geographic area, when that organization's mail volume is high enough to justify routing it separately from the surrounding neighborhood. This site's [Atlanta ZIP page](/atlanta-zip-codes/) covers one example -- the IRS's Atlanta service center holds a unique ZIP of its own. Chicago has 28 of them, nearly a third of its total, reflecting the city's role as a major aviation and banking hub.",
					"O'Hare International Airport holds one: 60666 is a single PO Box zone -- 25 boxes serving roughly 112 airport businesses across the airfield, from cargo handlers like United Cargo and Korean Air Cargo to airline offices, customs, and other airport tenants -- rather than a code split by function. The ZIP right next to it in this list, 60668, isn't O'Hare's at all: it belongs to Commonwealth Edison, Chicago's electric utility, as a dedicated code for routing customer bill-payment mail -- a reminder that two ZIP codes sitting next to each other in a sequence don't necessarily share an owner. Downtown, several major banks have their own dedicated codes for high-volume mail processing. JPMorgan Chase's Chicago mail-processing center uses 60673 (and an associated code, 60670); the designation was added to postal records in October 2008, during Chase's expansion in the aftermath of the 2008 financial crisis. 60697 belongs to Bank of America, but the ZIP's history runs back further: it originally routed mail for Continental Illinois National Bank, which was the seventh-largest bank in the US when a 1984 run on deposits forced the FDIC to step in with a $7.5 billion rescue package -- the bailout that gave banking regulation the phrase \"too big to fail\" before the term became familiar again in 2008. BankAmerica acquired what remained of Continental Illinois a decade later, in 1994.",
					"The remaining unverified codes in the list above -- 60664, 60669, 60674, 60675, 60677, 60678, 60680-60682, 60684-60691, 60693-60696, 60699, and 60701 -- follow the same pattern: USPS-assigned codes for single large-volume recipients or non-residential postal zones rather than delivery areas, though this site hasn't independently verified which specific organization holds each one.",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Chicago?',
				answer:
					"There isn't a single one -- Chicago uses 84 ZIP codes, all within Cook County. 60601 covers part of the Loop, the city's downtown core.",
			},
			{
				question: 'Is Chicago in Cook County?',
				answer:
					"Yes, entirely -- all 84 of Chicago's ZIP codes sit inside Cook County, with no cross-county split. See this site's full write-up on Chicago and Cook County.",
			},
			{
				question: 'Why does O\'Hare Airport have its own ZIP code?',
				answer:
					"O'Hare's mail volume is high enough that USPS routes it through a single dedicated PO Box zone, 60666, shared by roughly 112 airport businesses -- cargo handlers, airline offices, and other airport tenants alike. The nearby code 60668 is easy to mistake for a second O'Hare code, but it actually belongs to Commonwealth Edison, Chicago's electric utility.",
			},
			{
				question: 'Why is 60697 listed as a Chicago ZIP code with no population?',
				answer:
					"It's a unique ZIP code USPS assigned to a single bank recipient rather than a residential area. It currently belongs to Bank of America, but the code's history traces back to Continental Illinois National Bank -- once the seventh-largest bank in the US -- before its 1984 failure and 1994 acquisition by BankAmerica.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Federal Reserve History: Continental Illinois', url: 'https://www.federalreservehistory.org/essays/continental-illinois' },
			{ label: 'Wikipedia: Continental Illinois', url: 'https://en.wikipedia.org/wiki/Continental_Illinois' },
			{ label: "United Cargo ORD station information (confirms 60666 as O'Hare's shared cargo/business ZIP)", url: 'https://www.unitedcargo.com/en/us/learn/station-information/ORD' },
			{ label: 'ZIP code 60668 organization record (Commonwealth Edison bill-payment ZIP)', url: 'https://www.zip-codes.com/zip-code/60668/zip-code-60668.asp' },
		],
	},
	{
		slug: 'austin-zip-codes',
		category: 'ZIP Codes',
		title: "Austin ZIP Codes: The Full List, Two Counties, and Two That Belong to the IRS",
		description:
			"USPS assigns Austin 74 ZIP codes -- 72 in Travis County and 2 in Williamson -- plus two non-geographic codes reserved for the IRS, numbered in a block that looks like it belongs to Puerto Rico.",
		published: '2026-08-05',
		updated: '2026-08-05',
		coreSummary:
			"USPS assigns 74 ZIP codes with Austin, Texas as the primary place name. 72 sit in Travis County; the other two, 78717 and 78729, are in Williamson County to the northwest, the legacy of 1970s-80s subdivisions the city later annexed. Two more codes on the list, 73301 and 73344, aren't neighborhoods at all -- they're non-geographic ZIP codes reserved for the IRS's Austin submission processing center, numbered in the 733 block used elsewhere for Oklahoma rather than Texas's usual 787 block. That 787 prefix is itself a coincidence worth flagging: it's the same three digits as Puerto Rico's 787 area code, a completely unrelated numbering system (ZIP codes vs. NANP phone numbers) that happens to share Austin's ZIP prefix.",
		sections: [
			{
				heading: 'All 74 ZIP codes USPS assigns to Austin',
				body: [
					'USPS lists 74 ZIP codes with "Austin, TX" as the primary place name -- a figure this site\'s [Texas ZIP code overview](/texas-zip-codes/) already cites in its per-city comparison table, putting Austin fifth among Texas cities behind Houston, El Paso, Dallas, and San Antonio. 72 of the 74 sit in Travis County. The other two, 78717 and 78729, sit in Williamson County to the northwest -- covered in the section below.',
				],
				table: {
					caption: 'All 74 ZIP codes with "Austin, TX" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-05)',
					columns: ['ZIP', 'County'],
					rows: [
						['73301', 'Travis'], ['73344', 'Travis'], ['78701', 'Travis'], ['78702', 'Travis'],
						['78703', 'Travis'], ['78704', 'Travis'], ['78705', 'Travis'], ['78708', 'Travis'],
						['78709', 'Travis'], ['78710', 'Travis'], ['78711', 'Travis'], ['78712', 'Travis'],
						['78713', 'Travis'], ['78714', 'Travis'], ['78715', 'Travis'], ['78716', 'Travis'],
						['78717', 'Williamson'], ['78718', 'Travis'], ['78719', 'Travis'], ['78720', 'Travis'],
						['78721', 'Travis'], ['78722', 'Travis'], ['78723', 'Travis'], ['78724', 'Travis'],
						['78725', 'Travis'], ['78726', 'Travis'], ['78727', 'Travis'], ['78728', 'Travis'],
						['78729', 'Williamson'], ['78730', 'Travis'], ['78731', 'Travis'], ['78732', 'Travis'],
						['78733', 'Travis'], ['78734', 'Travis'], ['78735', 'Travis'], ['78736', 'Travis'],
						['78737', 'Travis'], ['78738', 'Travis'], ['78739', 'Travis'], ['78741', 'Travis'],
						['78742', 'Travis'], ['78744', 'Travis'], ['78745', 'Travis'], ['78746', 'Travis'],
						['78747', 'Travis'], ['78748', 'Travis'], ['78749', 'Travis'], ['78750', 'Travis'],
						['78751', 'Travis'], ['78752', 'Travis'], ['78753', 'Travis'], ['78754', 'Travis'],
						['78755', 'Travis'], ['78756', 'Travis'], ['78757', 'Travis'], ['78758', 'Travis'],
						['78759', 'Travis'], ['78760', 'Travis'], ['78761', 'Travis'], ['78762', 'Travis'],
						['78763', 'Travis'], ['78764', 'Travis'], ['78765', 'Travis'], ['78766', 'Travis'],
						['78767', 'Travis'], ['78768', 'Travis'], ['78769', 'Travis'], ['78772', 'Travis'],
						['78773', 'Travis'], ['78774', 'Travis'], ['78778', 'Travis'], ['78779', 'Travis'],
						['78783', 'Travis'], ['78799', 'Travis'],
					],
				},
			},
			{
				heading: "Two Austin ZIP codes belong to the IRS, not a neighborhood",
				body: [
					"73301 and 73344 stand out from the rest of the list immediately: they don't start with 787 like every other Austin ZIP, and neither corresponds to a residential or commercial delivery area. Both are non-geographic ZIP codes USPS reserves for a single high-volume recipient -- in this case, the IRS's Austin submission processing center, which handles tax return processing, ITIN applications, and taxpayer correspondence for a large multi-state region. 73301 is the better-known of the two; 73344 serves the same IRS campus, in the Walnut Creek Business Park area of Travis County, and carries no population of its own.",
					"This site's [Atlanta ZIP page](/atlanta-zip-codes/) covers the same pattern -- one IRS-only ZIP, 39901 -- and [Chicago carries 28 similar single-recipient codes](/chicago-zip-codes/) for airports and banks. What makes Austin's pair distinctive is the numbering: 73301 and 73344 sit in the 733 block, the same three-digit prefix range used for northern Oklahoma ZIP codes, rather than Texas's own 787 block that every other Austin ZIP uses. USPS assigns non-geographic codes like these somewhat independently of the surrounding area's normal numbering sequence, which is how an IRS facility physically located in Austin ends up with a ZIP code that looks, on paper, like it belongs three states away.",
					"The 787 prefix shared by Austin's other 72 ZIP codes is itself worth a note, because it's easy to conflate with something unrelated: 787 is also the area code covering Puerto Rico, in service since March 1, 1996, when it split off the old 809 code as explained on this site's [country code page](/us-country-code/). A ZIP prefix and an area code are two completely separate USPS/NANPA numbering systems that happen to share three digits in this case -- Austin's postal ZIPs and Puerto Rico's telephone area code have no relationship to each other beyond the coincidence.",
				],
			},
			{
				heading: "Why two Austin ZIP codes are in Williamson County, not Travis",
				body: [
					"78717 and 78729 cover Austin's far northwest, an area that developed differently from the rest of the city. Starting in 1973, this section of what's now northwest Austin was organized as Williamson County Municipal Utility District No. 1 -- a special utility district set up to provide water and wastewater service to new subdivisions before the city itself had annexed the land. Home construction in the district began in 1975 and continued through the mid-1980s. The City of Austin didn't fully annex the area until December 31, 2008, under a Strategic Partnership Agreement first signed in 1998 and amended in 2004 -- the annexation itself converted the old MUD into the Anderson Mill Limited District, ratified by a vote of district residents in May 2009. By the time that happened, thousands of houses already existed under Williamson County's jurisdiction rather than the city's own utilities. The Milwood neighborhood nearby followed a similar path as part of the North Austin MUD annexation.",
					"USPS ZIP boundaries don't automatically shift when a city annexes new territory, which is why 78717 and 78729 still carry an Austin mailing address today even though the underlying county line was set decades before the city limits caught up to it. It's the same category of mismatch this site documents in [Atlanta, where ZIP and county lines don't match either](/atlanta-zip-codes/) -- just a different underlying cause: Atlanta's split traces to Fulton/DeKalb's shared metro history, Austin's traces to utility-district development that predated annexation.",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Austin?',
				answer:
					"There isn't a single one -- Austin uses 74 different ZIP codes, 72 of them in Travis County. 78701 covers downtown Austin.",
			},
			{
				question: 'Is Austin in Travis County or Williamson County?',
				answer:
					"Mostly Travis -- 72 of Austin's 74 ZIP codes are in Travis County. Two, 78717 and 78729, are in Williamson County to the northwest, covering neighborhoods that were developed under a Williamson County utility district starting in 1973, before the city annexed the area in 2008.",
			},
			{
				question: 'Why do 73301 and 73344 show up as Austin ZIP codes?',
				answer:
					"Both are non-geographic ZIP codes USPS reserves for the IRS's Austin submission processing center rather than a residential area. That's why they don't follow Austin's usual 787 prefix -- they sit in the 733 numbering block instead, the same block used for parts of Oklahoma.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'IRS Austin submission processing center address records', url: 'https://www.irs.gov/pub/notices/lp47_english.pdf' },
			{ label: 'Anderson Mill Limited District: official history (Strategic Partnership Agreement, 2008 annexation)', url: 'https://amld.org/history-of-anderson-mill-limited-district' },
			{ label: 'Wikipedia: Telephone numbers in Puerto Rico (787 area code in-service history)', url: 'https://en.wikipedia.org/wiki/Telephone_numbers_in_Puerto_Rico' },
		],
	},
	{
		slug: 'los-angeles-zip-codes',
		category: 'ZIP Codes',
		title: "Los Angeles ZIP Codes: The Full List, and Why Venice, Van Nuys, and San Pedro Aren't On It",
		description:
			"Los Angeles has 94 ZIP codes that carry the city's own name -- and dozens more inside its borders that carry a neighborhood's instead, a split rooted in a 1915 water-rights annexation vote.",
		published: '2026-08-04',
		updated: '2026-08-04',
		coreSummary:
			"USPS assigns 94 ZIP codes with \"Los Angeles\" as the primary place name, all of them inside Los Angeles County -- the same no-cross-county-line pattern this site found in Chicago. But Los Angeles is a much bigger city than that 94-code list suggests: dozens of neighborhoods that are legally part of the City of Los Angeles carry their own separate ZIP place names instead, among them Van Nuys (13 ZIP codes), North Hollywood (11), Santa Monica-adjacent Venice (2), and San Pedro (4). That split isn't a postal accident -- it's the fossil record of how Los Angeles grew. A March 1915 annexation vote brought most of the San Fernando Valley into the city so residents could get fixed water rates from the newly opened Los Angeles Aqueduct; an earlier 1906-09 annexation built a mile-wide \"Shoestring Strip\" connecting the city to a harbor at San Pedro and Wilmington; and a 1926 annexation absorbed a financially struggling Venice. Each place kept its old name at the post office even after joining the city. That's a different situation from Beverly Hills, West Hollywood, Culver City, and Santa Monica, which sit inside LA's borders on a map but were never annexed at all -- they remain fully independent cities today, and their absence from the 94-code list is simply correct.",
		sections: [
			{
				heading: 'All 94 ZIP codes with "Los Angeles" as the primary USPS place name',
				body: [
					'USPS lists 94 ZIP codes with "Los Angeles, CA" as the primary place name, and every one of them sits in Los Angeles County -- no cross-county split, the same pattern this site found in [Chicago](/chicago-zip-codes/). Most of the range runs 90001 through 90099, with a handful of higher, non-sequential codes (90134, 90189) mixed in for high-volume recipients rather than delivery areas.',
					"One of those higher codes has a specific, well-documented story: 90095 belongs to UCLA. The university shared Westwood's 90024 ZIP code until USPS carved out a dedicated campus code on January 1, 1995, along with a new addressing format built around department names and box numbers instead of street addresses -- the same system UCLA mail still uses today.",
				],
				table: {
					caption: 'All 94 ZIP codes with "Los Angeles, CA" as the primary USPS place name (all in Los Angeles County)',
					columns: ['ZIP'],
					rows: [
						['90001'], ['90002'], ['90003'], ['90004'], ['90005'],
						['90006'], ['90007'], ['90008'], ['90009'], ['90010'],
						['90011'], ['90012'], ['90013'], ['90014'], ['90015'],
						['90016'], ['90017'], ['90018'], ['90019'], ['90020'],
						['90021'], ['90022'], ['90023'], ['90024'], ['90025'],
						['90026'], ['90027'], ['90028'], ['90029'], ['90030'],
						['90031'], ['90032'], ['90033'], ['90034'], ['90035'],
						['90036'], ['90037'], ['90038'], ['90039'], ['90040'],
						['90041'], ['90042'], ['90043'], ['90044'], ['90045'],
						['90046'], ['90047'], ['90048'], ['90049'], ['90050'],
						['90051'], ['90052'], ['90053'], ['90054'], ['90055'],
						['90056'], ['90057'], ['90058'], ['90059'], ['90060'],
						['90061'], ['90062'], ['90063'], ['90064'], ['90065'],
						['90066'], ['90067'], ['90068'], ['90070'], ['90071'],
						['90072'], ['90073'], ['90074'], ['90075'], ['90076'],
						['90077'], ['90078'], ['90079'], ['90080'], ['90081'],
						['90082'], ['90083'], ['90084'], ['90086'], ['90087'],
						['90088'], ['90089'], ['90091'], ['90093'], ['90095'],
						['90096'], ['90099'], ['90134'], ['90189'],
					],
				},
			},
			{
				heading: "Why Van Nuys, Woodland Hills, and a dozen other LA neighborhoods don't carry the city's name",
				body: [
					'Fourteen San Fernando Valley neighborhoods that are legally part of the City of Los Angeles keep their own ZIP place names instead of "Los Angeles": Van Nuys (13 ZIP codes), North Hollywood (11), Northridge (6), Woodland Hills (4), Sherman Oaks (4), Encino (4), Canoga Park (4), Reseda (2), Tarzana (2), Chatsworth (2), Granada Hills (2), Sylmar (2), Sunland (2), and Tujunga (2) -- 60 ZIP codes in all, inside a single city, none of them labeled "Los Angeles."',
					"That split traces back to a single election. On March 29, 1915, voters approved annexing roughly 170 square miles of the San Fernando Valley into Los Angeles by a lopsided 681-25 margin -- more than doubling the city's land area overnight. The motive was water, not space: the Los Angeles Aqueduct had opened in 1913, and Valley communities wanted the fixed water rates that came with joining the city that owned the aqueduct. Not every Valley town joined on the same vote, either -- Lankershim (renamed North Hollywood in 1927) and Owensmouth (renamed Canoga Park) sat out the 1915 election and were annexed separately, in 1923 and 1917.",
					"One Valley town never joined at all. San Fernando sat on its own reliable groundwater in the Sylmar Basin rather than a river it had to import, and residents voted to incorporate as an independent city on August 31, 1911 -- by a margin of just eight votes. It remains independent today, a legal island inside the Valley that the table above doesn't cover because it genuinely isn't Los Angeles. Burbank (1911) and Glendale (1906) made the same choice around the same period, for similar reasons of local control over water and utilities, and both remain independent cities bordering the Valley today.",
				],
			},
			{
				heading: 'The harbor and the Westside: two more annexation waves, two more sets of borrowed names',
				body: [
					"San Pedro (4 ZIP codes) and Wilmington (2) tell a similar story from a different direction. In 1906, Los Angeles annexed a strip of land less than a mile wide and 16 miles long -- nicknamed the \"Shoestring Strip\" -- purely to create a contiguous land bridge to the coast, because California law only allowed a city to annex land touching its existing border. The strip reached San Pedro and Wilmington, both harbor towns, which voted to consolidate into Los Angeles three years later, on August 28, 1909. The annexation gave Los Angeles -- a city with no natural harbor of its own -- a working port 20 miles from downtown; the Shoestring Strip itself was renamed Harbor Gateway in 1985.",
					"Venice (2 ZIP codes) joined LA for a plainer reason two decades later. Developer Abbot Kinney built Venice as a canal-laced seaside resort starting in 1905, but after his death in 1920 the town's roads, water lines, and sewers fell into disrepair faster than its small government could fund fixes. Voters approved annexation to Los Angeles in November 1925 by a margin of 3,130 to 2,215, and the merger took effect in 1926. Los Angeles subsequently paved over most of the original canals -- only a handful survive today -- in a project that took three years and a court battle from canal-front residents to resolve.",
					"Two more Westside pockets follow the same pattern on a smaller scale: Pacific Palisades (1 ZIP code) and Playa Vista (1), both legally part of Los Angeles, both carrying their own name at the post office instead of the city's.",
				],
			},
			{
				heading: "The cities that were never annexed -- and correctly aren't on this list",
				body: [
					"Beverly Hills, West Hollywood, Culver City, and Santa Monica sit entirely inside the outline of Los Angeles on a map, surrounded on most or all sides by LA neighborhoods. But none of them were ever annexed -- each incorporated as its own independent city, with its own government, its own police department (West Hollywood contracts with the LA County Sheriff instead of LAPD), and, correctly, its own ZIP codes: 90209-90213 for Beverly Hills, 90069 for West Hollywood, 90230-90233 for Culver City, and 90401-90411 for Santa Monica. None of those appear in the \"Los Angeles\" table above, and that's not a postal quirk -- it's the accurate answer.",
					"That makes Los Angeles close to a mirror image of [Dallas](/dallas-zip-codes/). In Dallas, a legally independent town -- Highland Park -- has its ZIP codes filed under \"Dallas, TX\" anyway, because USPS's place-name database doesn't always track legal boundaries. In Los Angeles, the opposite happens far more often: neighborhoods that did join the city, sometimes over a century ago, kept a name at the post office that isn't the city's. Both are the same underlying fact, read from different directions -- a USPS ZIP-code place name is a mail-routing label, not a legal determination of what city a resident lives in.",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Los Angeles?',
				answer:
					"There isn't a single one -- Los Angeles uses 94 ZIP codes carrying its own name (and dozens more under neighborhood names). Los Angeles City Hall, at 200 N Spring St, uses 90012.",
			},
			{
				question: 'Is Beverly Hills part of Los Angeles?',
				answer:
					'No. Beverly Hills is a legally independent city with its own government and police department, even though it sits surrounded by Los Angeles neighborhoods. Its ZIP codes (90209-90213) have never been filed under "Los Angeles."',
			},
			{
				question: "Why doesn't Van Nuys show up in the Los Angeles ZIP code list, even though it's part of the city?",
				answer:
					"Van Nuys joined Los Angeles in the March 1915 San Fernando Valley annexation, but USPS kept assigning its 13 ZIP codes the neighborhood's own name instead of the city's -- a mail-routing convention, not a sign that Van Nuys is legally separate. North Hollywood, Woodland Hills, Encino, and a dozen other Valley neighborhoods follow the same pattern.",
			},
			{
				question: 'Is Venice, California part of the city of Los Angeles?',
				answer:
					"Yes -- Venice was an independent seaside town until financial and infrastructure troubles led voters to approve annexation to Los Angeles in November 1925, effective in 1926. Its two ZIP codes still carry the Venice name rather than Los Angeles's.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Wikipedia: History of the San Fernando Valley', url: 'https://en.wikipedia.org/wiki/History_of_the_San_Fernando_Valley' },
			{ label: 'Wikipedia: Shoestring annexation', url: 'https://en.wikipedia.org/wiki/Shoestring_annexation' },
			{ label: 'Wikipedia: Harbor Gateway, Los Angeles', url: 'https://en.wikipedia.org/wiki/Harbor_Gateway,_Los_Angeles' },
			{ label: 'Wikipedia: Venice, Los Angeles', url: 'https://en.wikipedia.org/wiki/Venice,_Los_Angeles' },
			{ label: 'Wikipedia: San Fernando, California', url: 'https://en.wikipedia.org/wiki/San_Fernando,_California' },
			{ label: 'Daily Bruin: UCLA acquired its own ZIP code, 90095', url: 'https://dailybruin.com/1995/01/11/ucla-soon-to-acquire-own-zip-c' },
		],
	},
	{
		slug: 'boston-zip-codes',
		category: 'ZIP Codes',
		title: "Boston ZIP Codes: The Full List, City Hall's Own Code, and Six Annexed Towns",
		description:
			"USPS assigns 36 ZIP codes to \"Boston, MA\" -- but City Hall, a federal building, and six once-independent towns that Boston annexed tell the rest of the story.",
		published: '2026-08-06',
		updated: '2026-08-06',
		coreSummary:
			"USPS lists 36 ZIP codes with \"Boston\" as the primary place name -- 35 in Suffolk County, plus one, 02212, that this site's source data tags to Middlesex County for reasons no public record explains. A chunk of the 36 aren't neighborhoods at all: 02201 is Boston City Hall's own non-geographic ZIP, and 02203 belongs to the John F. Kennedy Federal Building in Government Center, part of a broader set of institutional \"Unique ZIP Codes\" USPS reserves for large single recipients rather than delivery routes. And the 36-code list understates the city's real footprint, because six towns Boston annexed between 1868 and 1912 -- Roxbury, Dorchester, Charlestown, Brighton, West Roxbury, and Hyde Park -- still carry their pre-annexation names at the post office instead of \"Boston,\" adding 14 more ZIP codes (Jamaica Plain, Roslindale, Allston, Mattapan, and Roxbury Crossing among them) that are legally part of the city but don't say so in the mailing address.",
		sections: [
			{
				heading: 'All 36 ZIP codes with "Boston" as the primary USPS place name',
				body: [
					'USPS lists 36 ZIP codes with "Boston, MA" as the primary place name. 35 sit in Suffolk County, the county Boston has anchored since the state\'s founding. The one exception, 02212, is tagged Middlesex County in this table\'s source data -- a discrepancy worth flagging rather than guessing at: it doesn\'t match the Suffolk designation most simplified ZIP directories default to for every Boston code, and no public USPS or county record this site could find explains why this specific non-geographic code carries a different county tag. The table below reports what the source data says rather than silently overriding it.',
					'Total counts vary by source more than usual for this list. This site\'s own data returns 36, unitedstateszipcodes.org lists 33, and zip-codes.com\'s broader city page lists 50 -- split 32 standard, 9 Unique, and 9 PO Box. The gap isn\'t really a disagreement about which ZIP codes exist; it\'s a difference in scope. Some directories fold in the neighborhood-named ZIPs covered in the section below (which this table excludes, since they carry a different USPS place name), and some count long-retired or rarely-used codes differently.',
				],
				table: {
					caption: 'All 36 ZIP codes with "Boston, MA" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-06)',
					columns: ['ZIP', 'County'],
					rows: [
						['02108', 'Suffolk'], ['02109', 'Suffolk'], ['02110', 'Suffolk'], ['02111', 'Suffolk'],
						['02112', 'Suffolk'], ['02113', 'Suffolk'], ['02114', 'Suffolk'], ['02115', 'Suffolk'],
						['02116', 'Suffolk'], ['02117', 'Suffolk'], ['02118', 'Suffolk'], ['02123', 'Suffolk'],
						['02127', 'Suffolk'], ['02128', 'Suffolk'], ['02133', 'Suffolk'], ['02163', 'Suffolk'],
						['02196', 'Suffolk'], ['02199', 'Suffolk'], ['02201', 'Suffolk'], ['02203', 'Suffolk'],
						['02204', 'Suffolk'], ['02205', 'Suffolk'], ['02206', 'Suffolk'], ['02210', 'Suffolk'],
						['02211', 'Suffolk'], ['02212', 'Middlesex'], ['02215', 'Suffolk'], ['02217', 'Suffolk'],
						['02222', 'Suffolk'], ['02241', 'Suffolk'], ['02266', 'Suffolk'], ['02283', 'Suffolk'],
						['02284', 'Suffolk'], ['02293', 'Suffolk'], ['02297', 'Suffolk'], ['02298', 'Suffolk'],
					],
				},
			},
			{
				heading: "City Hall, a federal building, and Boston's other non-geographic ZIP codes",
				body: [
					'02201 is Boston City Hall\'s own ZIP code -- 1 City Hall Square carries it directly, and city departments each get a four-digit add-on appended to it for faster internal routing. 02203 belongs to the John F. Kennedy Federal Building in Government Center, the twin-tower federal complex that houses the Boston Immigration Court and the EEOC\'s Boston Area Office, among other federal tenants. Neither code covers a residential area or a population; both exist because USPS assigns a dedicated "Unique ZIP Code" to a single institution once its mail volume justifies its own internal distribution system, the same mechanism that gives large universities, hospitals, and federal agencies elsewhere their own codes.',
					"That pattern repeats across a meaningful share of Boston's list. Of the roughly 50 ZIP codes zip-codes.com's broader Boston city page tracks, it classifies 9 as Unique and another 9 as PO Box-only -- together more than a third of the total, none of them a neighborhood a resident would list as their address. This site's [Atlanta ZIP page](/atlanta-zip-codes/) documents a single such code (39901, the IRS's Atlanta processing center); Boston's list carries close to ten times as many, spread across city government, federal agencies, and large institutional mail recipients rather than concentrated in one.",
				],
			},
			{
				heading: "Why Dorchester, Roxbury, and four other Boston neighborhoods don't carry the city's name",
				body: [
					"Six towns joined the City of Boston between 1868 and 1912, each by its own vote, and none of them lost its name at the post office when it did. Roxbury was annexed January 5, 1868; Dorchester followed January 3, 1870. Charlestown, Brighton, and West Roxbury all joined together after a single October 7, 1873 vote, with the annexation effective January 5, 1874. Hyde Park was the last: residents voted to join on November 7, 1911, and the annexation took effect January 1, 1912. The individual motives varied more than a single explanation can cover. Roxbury's annexation is tied by Boston's own annexation-history accounts to the city's water and sewer systems, infrastructure the smaller town struggled to replicate on its own. Brighton's case ran closer to the opposite direction: in the four years before its 1873 vote, a group of local businessmen known as the \"Brighton Ring\" pushed the town into roughly $1.56 million of infrastructure spending against about $438,000 of revenue -- an eightfold jump in town debt -- then steered 81% of voters toward annexation so Boston would absorb what Brighton owed. Hyde Park's annexation, per the City of Boston Archives' own account, was driven mainly from Boston's side: the town's mills had drawn a wave of immigrant labor by the early 1900s, and the city wanted the tax revenue that growth represented.",
					"Those six former towns, plus neighborhoods carved out of them afterward, account for 14 ZIP codes today that are legally inside Boston but carry a different USPS place name: Roxbury (02119) and Roxbury Crossing (02120); Dorchester, split across four codes (02121, 02122, 02124, 02125); Mattapan (02126), itself once considered part of Dorchester; Charlestown (02129); Jamaica Plain (02130) and Roslindale (02131), both carved from the old town of West Roxbury; West Roxbury itself (02132); Allston (02134) and Brighton (02135), the same annexed town split into two postal names; and Hyde Park (02136). None of the 14 appears in the 36-code table above, because none of them uses \"Boston\" as its USPS place name -- but a piece of mail addressed to any of them is, legally, addressed to the City of Boston all the same.",
					"This site's [Los Angeles ZIP page](/los-angeles-zip-codes/) documents the same kind of split, on a larger scale and with a single documented cause: Los Angeles annexed most of the San Fernando Valley in one 1915 vote driven by access to aqueduct water rights, and 14 Valley neighborhoods still carry their pre-annexation names today. Boston's version played out earlier and more piecemeal -- six separate votes over 44 years, each town joining for its own local reasons rather than one shared cause -- but it left the same kind of trace on the ZIP map.",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Boston?',
				answer:
					"There isn't a single one -- Boston uses 36 ZIP codes under its own name. Boston City Hall, at 1 City Hall Square, uses 02201.",
			},
			{
				question: 'Is Dorchester part of Boston?',
				answer:
					"Yes. Dorchester was an independent town until it was annexed to Boston on January 3, 1870. It's legally part of the city today, but its ZIP codes (02121, 02122, 02124, 02125) still carry the Dorchester name at the post office rather than Boston's.",
			},
			{
				question: 'Why does ZIP code 02212 show up in Middlesex County instead of Suffolk?',
				answer:
					"This site's source data (GeoNames) tags 02212 to Middlesex County, unlike every other Boston ZIP code, which sits in Suffolk. No public record explains the discrepancy, and this site reports it rather than overriding it with an assumption.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Contact Boston City Hall -- Boston.gov', url: 'https://www.boston.gov/departments/mayors-office/contact-boston-city-hall' },
			{ label: 'GSA: John F. Kennedy Federal Building, Boston, MA', url: 'https://www.gsa.gov/about-us/regions/region-1new-england/buildings-and-facilities/massachusetts/john-f-kennedy-federal-building' },
			{ label: 'USPS PostalPro: Unique ZIP Code Matrix', url: 'https://postalpro.usps.com/node/1481' },
			{ label: "Boston's Annexed Towns -- Boston Public Library research guide", url: 'https://guides.bpl.org/TownsOfBoston' },
			{ label: 'Wikipedia: Brighton, Boston (1873 vote / 1874 annexation)', url: 'https://en.wikipedia.org/wiki/Brighton,_Boston' },
			{ label: "Annexation Embraced: Brighton's 1873 Acceptance of Boston -- local-historian account of the Brighton Ring and town debt", url: 'https://wpmarchione.com/2017/05/19/annexation-embraced-brightons-1873-acceptance-of-boston/' },
			{ label: 'City of Boston Archives: Celebrating Hyde Park -- Annexation exhibit', url: 'https://cityofbostonarchives.omeka.net/exhibits/show/hydepark/annexation' },
		],
	},
	{
		slug: 'nashville-zip-codes',
		category: 'ZIP Codes',
		title: "Nashville ZIP Codes: The Full List, and Why Metro's Satellite Cities Share It",
		description:
			"USPS assigns 39 ZIP codes to Nashville, all in Davidson County -- home to the first true city-county merger in the US, and five satellite cities without a ZIP of their own.",
		published: '2026-08-09',
		updated: '2026-08-09',
		coreSummary:
			'USPS assigns 39 ZIP codes to "Nashville, TN" as the primary place name, and this site\'s source data ties every one of them to Davidson County -- no split, no exception. That\'s not a coincidence of geography. Nashville and Davidson County merged into a single Metropolitan Government on April 1, 1963, after voters approved consolidation on June 28, 1962, having rejected an earlier version of the same plan in 1958. The 1963 charter let six incorporated communities -- Berry Hill, Belle Meade, Oak Hill, Forest Hills, Goodlettsville, and Lakewood -- keep their own city governments, police departments, and zoning inside the new Metro structure. Only one of them, Goodlettsville, also kept a ZIP code of its own. This site\'s data shows the other surviving satellite cities file under "Nashville" the same as every other Davidson County address, and Lakewood, which dissolved its charter in 2011, never had a distinct ZIP to begin with.',
		sections: [
			{
				heading: 'All 39 ZIP codes USPS assigns to Nashville',
				body: [
					'Every ZIP code with "Nashville, TN" as its primary USPS place name sits in Davidson County, per this site\'s source data -- a clean 39-for-39 split with no cross-county outlier like the one this site flagged on the [Boston ZIP list](/boston-zip-codes/). An independent lookup returns the same total: zipcodestogo.com\'s own Nashville page also lists 39 codes for Davidson County, a useful cross-check given how much these totals tend to drift between directories that scope the list differently.',
				],
				table: {
					caption: 'All 39 ZIP codes with "Nashville, TN" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-09)',
					columns: ['ZIP', 'County'],
					rows: [
						['37201', 'Davidson'], ['37202', 'Davidson'], ['37203', 'Davidson'], ['37204', 'Davidson'],
						['37205', 'Davidson'], ['37206', 'Davidson'], ['37207', 'Davidson'], ['37208', 'Davidson'],
						['37209', 'Davidson'], ['37210', 'Davidson'], ['37211', 'Davidson'], ['37212', 'Davidson'],
						['37213', 'Davidson'], ['37214', 'Davidson'], ['37215', 'Davidson'], ['37216', 'Davidson'],
						['37217', 'Davidson'], ['37218', 'Davidson'], ['37219', 'Davidson'], ['37220', 'Davidson'],
						['37221', 'Davidson'], ['37222', 'Davidson'], ['37224', 'Davidson'], ['37227', 'Davidson'],
						['37228', 'Davidson'], ['37229', 'Davidson'], ['37230', 'Davidson'], ['37232', 'Davidson'],
						['37234', 'Davidson'], ['37235', 'Davidson'], ['37236', 'Davidson'], ['37238', 'Davidson'],
						['37240', 'Davidson'], ['37241', 'Davidson'], ['37242', 'Davidson'], ['37243', 'Davidson'],
						['37244', 'Davidson'], ['37246', 'Davidson'], ['37250', 'Davidson'],
					],
				},
			},
			{
				heading: 'Why every single one lands in Davidson County',
				body: [
					"Nashville tried to consolidate with Davidson County once before it worked. Voters rejected a charter to merge the city and county governments in 1958, even though it had the backing of both Nashville newspapers, then-Mayor Ben West, and County Judge Beverly Briley. Nashville responded by annexing roughly 82,000 residents from the surrounding county and imposing a $10 \"wheel tax\" on every car that regularly used city streets -- a levy suburban residents nicknamed the \"green sticker tax\" and resented enough that it revived the push for a real merger instead of piecemeal annexation. A second charter commission wrote a new plan, this one splitting the county into an Urban Services District and a General Services District with different tax levels depending on which city services a resident actually received. Voters approved it on June 28, 1962, and the Metropolitan Government of Nashville and Davidson County was sworn in on April 1, 1963, with Beverly Briley as its first mayor. Nashville's own government history page calls it the first city in the country to achieve true consolidation, as opposed to partial mergers other cities had already tried; roughly fourteen consolidated city-county governments exist in the US today, and each one, per that same account, used Nashville's 1962 charter as a model.",
					"That history is what makes the 39-for-39 Davidson County count more than a coincidence. This site's [Chicago county page](/what-county-is-chicago-in/) documents another major city that sits entirely inside a single county, but Cook County was simply drawn wide enough to hold Chicago and 135 other municipalities alongside it -- Chicago's city government and Cook County's government are still two separate governments. Nashville's single-county footprint is structural rather than incidental: since 1963, the city government and the county government have been the same government, so there's no county line left inside Nashville's limits to split a ZIP code across.",
				],
			},
			{
				heading: 'Six communities kept a government of their own -- only one kept a ZIP code',
				body: [
					'The 1963 charter didn\'t erase every local government inside the new Metro structure. Six incorporated communities -- Berry Hill, Belle Meade, Oak Hill, Forest Hills, Goodlettsville, and Lakewood -- were allowed to keep their own charters, city councils, police departments, and zoning rules rather than folding into Metro entirely. Lakewood\'s charter didn\'t survive: after nearly five decades as a self-governing "satellite city," residents voted to dissolve it on August 5, 2010, by a single vote, 400 to 399. The city sued over alleged voting irregularities, a Davidson County Chancery Court judge ordered a new election, and on March 15, 2011, residents voted again, 458 to 447, to fold into Metro for good. Its old ZIP code, 37138, was never actually its own in postal terms -- this site\'s data ties that code to the neighboring Old Hickory place name, not Lakewood.',
					'The four satellite cities still standing today tell a more consistent story. This site\'s data shows none of Berry Hill, Belle Meade, Oak Hill, or Forest Hills carries its own ZIP place name -- addresses in all four read "Nashville, TN," identical to the rest of Davidson County, even though each city still runs its own city hall and police force decades after 1963. Goodlettsville is the exception, with two ZIP codes of its own, 37070 and 37072. Geography plausibly plays a role: Goodlettsville\'s own city government describes itself as straddling the Davidson-Sumner county line, with the larger share of its land area in Sumner County even though most of its population lives on the Davidson County side. This site\'s source data ties both Goodlettsville ZIP codes to Davidson County rather than splitting them the way it splits, for instance, [Boston\'s 02212](/boston-zip-codes/) into a different county from the rest of that city\'s list -- one more reminder that a single ZIP database\'s county tag doesn\'t always capture every line a city actually crosses on the ground.',
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Nashville have?',
				answer: "39, and every one of them sits in Davidson County -- the same county Nashville's city government merged with in 1963.",
			},
			{
				question: 'What county is Nashville in?',
				answer:
					"Davidson County. Since April 1, 1963, Nashville and Davidson County have shared a single consolidated government, so the city limits and the county line are effectively the same boundary.",
			},
			{
				question: 'Is Belle Meade part of Nashville?',
				answer:
					"It's part of the Metropolitan Government of Nashville and Davidson County, but it kept its own city charter, police department, and zoning when Metro formed in 1963. It doesn't have its own ZIP code -- mail addressed there reads \"Nashville, TN\" the same as the rest of the county.",
			},
			{
				question: "Why does Goodlettsville have its own ZIP codes instead of using Nashville's?",
				answer:
					"Goodlettsville is one of six communities that kept its own city charter inside Metro Nashville-Davidson County in 1963, and it also straddles the Davidson-Sumner county line -- a combination the other three surviving satellite cities (Berry Hill, Belle Meade, Oak Hill, Forest Hills) don't share, and none of them has its own ZIP code.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'History of Metropolitan Nashville Government -- Nashville.gov', url: 'https://www.nashville.gov/departments/government/history-metro' },
			{ label: 'Lakewood, Tennessee -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Lakewood,_Tennessee' },
			{ label: 'Location -- Goodlettsville, TN official website', url: 'https://www.goodlettsville.gov/2007/Location' },
			{ label: 'Nashville, TN ZIP code list -- zipcodestogo.com', url: 'https://www.zipcodestogo.com/city/Nashville/TN/' },
		],
	},
	{
		slug: 'denver-zip-codes',
		category: 'ZIP Codes',
		title: 'Denver ZIP Codes: The Full List, and the 11 That Sit Outside Denver County',
		description:
			"Every ZIP code USPS assigns to Denver, Colorado, and why 11 of the 66 fall across the county line in Jefferson or Adams County despite Denver's own 1902 consolidation into a single city-and-county government.",
		published: '2026-08-10',
		updated: '2026-08-10',
		coreSummary:
			"USPS assigns 66 ZIP codes to \"Denver, CO\" as the primary place name. This site's data ties 55 of them to Denver County -- the consolidated City and County of Denver, created in 1902 -- but the other 11 fall outside it: six in Jefferson County, to the west around Lakewood and Wheat Ridge, and five in Adams County, to the north around Federal Heights and Thornton. Denver having its own consolidated government since 1902 doesn't mean its ZIP footprint stops at that government's border -- USPS delivery routes were drawn around mail carriers' paths, not the county line the state legislature set more than a century ago.",
		sections: [
			{
				heading: 'All 66 ZIP codes USPS assigns to Denver',
				body: [
					"Of the 66 ZIP codes with \"Denver, CO\" as the primary USPS place name, this site's source data places 55 in Denver County itself, six in Jefferson County, and five in Adams County. zipcodestogo.com's own Denver city page lists 64 codes for comparison -- close to this site's 66, but not identical, which is typical: independent ZIP directories routinely disagree by a handful of codes depending on whether they count PO-Box-only or otherwise non-standard codes the same way.",
				],
				table: {
					caption: 'All 66 ZIP codes with "Denver, CO" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-10)',
					columns: ['ZIP', 'County'],
					rows: [
						['80201', 'Denver'], ['80202', 'Denver'], ['80203', 'Denver'], ['80204', 'Denver'],
						['80205', 'Denver'], ['80206', 'Denver'], ['80207', 'Denver'], ['80208', 'Denver'],
						['80209', 'Denver'], ['80210', 'Denver'], ['80211', 'Denver'], ['80212', 'Denver'],
						['80214', 'Jefferson'], ['80215', 'Jefferson'], ['80216', 'Denver'], ['80217', 'Denver'],
						['80218', 'Denver'], ['80219', 'Denver'], ['80220', 'Denver'], ['80221', 'Adams'],
						['80222', 'Denver'], ['80223', 'Denver'], ['80224', 'Denver'], ['80225', 'Jefferson'],
						['80226', 'Jefferson'], ['80227', 'Denver'], ['80228', 'Jefferson'], ['80229', 'Adams'],
						['80230', 'Denver'], ['80231', 'Denver'], ['80232', 'Jefferson'], ['80233', 'Adams'],
						['80234', 'Adams'], ['80235', 'Denver'], ['80236', 'Denver'], ['80237', 'Denver'],
						['80238', 'Denver'], ['80239', 'Denver'], ['80243', 'Denver'], ['80244', 'Denver'],
						['80246', 'Denver'], ['80247', 'Denver'], ['80248', 'Denver'], ['80249', 'Denver'],
						['80250', 'Denver'], ['80251', 'Denver'], ['80252', 'Denver'], ['80256', 'Denver'],
						['80257', 'Denver'], ['80259', 'Denver'], ['80260', 'Adams'], ['80261', 'Denver'],
						['80262', 'Denver'], ['80263', 'Denver'], ['80264', 'Denver'], ['80265', 'Denver'],
						['80266', 'Denver'], ['80271', 'Denver'], ['80273', 'Denver'], ['80274', 'Denver'],
						['80281', 'Denver'], ['80290', 'Denver'], ['80291', 'Denver'], ['80293', 'Denver'],
						['80294', 'Denver'], ['80299', 'Denver'],
					],
				},
			},
			{
				heading: 'How Denver became a county unto itself in 1902',
				body: [
					"Denver started out inside Arapahoe County, one of the 17 original counties the Colorado General Assembly created on November 1, 1861, with Denver City serving as the county seat. That arrangement lasted forty years. In 1901, the legislature voted to split Arapahoe County three ways: a new, consolidated City and County of Denver; a new Adams County to the north, named for five-time gubernatorial candidate and then-sitting Governor Alva Adams; and the rump of the old county, temporarily renamed South Arapahoe County. A Colorado Supreme Court ruling, follow-up legislation, and a referendum delayed the split from taking effect until November 15, 1902, and South Arapahoe County's name didn't even last a full year -- the legislature changed it back to plain Arapahoe County on April 11, 1903, with its seat relocated to Littleton.",
					"Jefferson County, the source of this site's other six Denver ZIP codes, wasn't part of that 1902 reorganization at all. It's one of the same 17 counties created alongside the original Arapahoe County back in 1861, sitting immediately to Denver's west with its own county seat at Golden. So the Jefferson County ZIP codes on the list above aren't a product of Denver's consolidation -- they're a reminder that Denver, like Atlanta on this site's own [ZIP list for Atlanta](/atlanta-zip-codes/), simply has USPS delivery routes that cross into a neighboring county that's always been there, regardless of what Denver's own government boundary looks like.",
				],
			},
			{
				heading: 'Six ZIPs west in Jefferson County, five north in Adams',
				body: [
					"The six Jefferson County ZIP codes on Denver's list -- 80214, 80215, 80225, 80226, 80228, and 80232 -- sit in the corridor just west of downtown, an area covered mostly by Lakewood, Jefferson County's largest city, along with slivers of Wheat Ridge and Edgewater. unitedstateszipcodes.org's own boundary data shows 80214 in particular splits across several place names at once -- Lakewood, Edgewater, and Wheat Ridge all draw from it -- which is a reminder that a single \"place\" label on a ZIP code, whether it reads Denver or something else, can mask a boundary that a postal carrier's route crosses more than once.",
					"The five Adams County ZIP codes -- 80221, 80229, 80233, 80234, and 80260 -- sit north of downtown, in the Federal Heights, Thornton, and Northglenn corridor. 80221 is the one worth a caveat: unitedstateszipcodes.org's boundary data shows it straddling both Adams and Denver counties at once, with Adams holding the larger share. This site's table above, like GeoNames' broader dataset, assigns each ZIP code to a single county, so 80221 shows up here as Adams only -- the same kind of simplification this site flagged on the [Atlanta ZIP list](/atlanta-zip-codes/), where one ZIP straddling Fulton and Cobb counties got flattened into a single row too.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Denver have?',
				answer:
					"66, per this site's source data -- 55 in Denver County, six in Jefferson County, and five in Adams County.",
			},
			{
				question: 'What county is Denver in?',
				answer:
					"Denver County -- officially the consolidated City and County of Denver, created in 1902 when the Colorado legislature split it off from Arapahoe County. But not every ZIP code addressed to Denver actually sits inside that county; 11 of the 66 on this site's list fall in neighboring Jefferson or Adams County instead.",
			},
			{
				question: 'Why do some Denver ZIP codes fall in Jefferson County?',
				answer:
					"Jefferson County has bordered Denver since 1861, decades before Denver became its own consolidated city-county in 1902. USPS draws ZIP boundaries around mail-delivery routes, not government lines, so six ZIP codes addressed to Denver -- covering parts of Lakewood, Wheat Ridge, and Edgewater -- actually sit across that older county line.",
			},
			{
				question: 'Is ZIP code 80221 in Denver or Federal Heights?',
				answer:
					"Both names are USPS-acceptable for 80221, and unitedstateszipcodes.org's boundary data shows the code physically straddling Adams and Denver counties. This site's table, which follows GeoNames' single-county assignment, lists it under Adams County, where most of the ZIP's area falls.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Denver -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Denver' },
			{ label: 'Adams County, Colorado -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Adams_County,_Colorado' },
			{ label: 'South Arapahoe County, Colorado -- Wikipedia', url: 'https://en.wikipedia.org/wiki/South_Arapahoe_County,_Colorado' },
			{ label: 'Jefferson County, Colorado -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Jefferson_County,_Colorado' },
			{ label: 'ZIP Code 80221 -- unitedstateszipcodes.org', url: 'https://www.unitedstateszipcodes.org/80221/' },
			{ label: 'ZIP Code 80214 -- unitedstateszipcodes.org', url: 'https://www.unitedstateszipcodes.org/80214/' },
			{ label: 'Denver, CO ZIP code list -- zipcodestogo.com', url: 'https://www.zipcodestogo.com/city/Denver/CO/' },
		],
	},

	{
		slug: 'houston-zip-codes',
		category: 'ZIP Codes',
		title: "Houston ZIP Codes: The Full List, and the Independent City Filed Under Houston's Name",
		description:
			"Houston has 178 ZIP codes in two postal blocks -- and one of them, 77005, belongs to a city that has never joined Houston, while its equally independent neighbor Bellaire got a ZIP name of its own instead.",
		published: '2026-08-11',
		updated: '2026-08-11',
		coreSummary:
			'USPS assigns 178 ZIP codes to "Houston, TX" as the primary place name, and this site\'s source data puts every one of them in Harris County -- no cross-county split, unlike this site\'s Atlanta or Denver lists. They split into two blocks: 98 codes in the 770xx range, covering the delivery routes that carry most of the city\'s residential and business mail, and 80 in the 772xx range, a mix mostly made up of PO boxes and single-recipient codes assigned to government offices and other high-volume mailers. One 770xx code, 77005, belongs to West University Place, an independent city that has never joined Houston -- yet its next-door neighbor Bellaire, just as independent, was given a ZIP place name of its own (77401) instead of Houston\'s. On the other side of that inconsistency sits Independence Heights, Texas\'s first incorporated Black city, which actually did vote to join Houston in 1928 and carries Houston\'s name today for the far less surprising reason that it really is part of the city.',
		sections: [
			{
				heading: 'All 178 ZIP codes with "Houston, TX" as the primary USPS place name',
				body: [
					'Every one of the 178 ZIP codes USPS assigns to "Houston, TX" sits in Harris County, per this site\'s source data -- there\'s no county split here the way there is on this site\'s [Denver](/denver-zip-codes/) or [Atlanta](/atlanta-zip-codes/) lists. A separate tally from zip-codes.com breaks the same 178 codes down by delivery type: 97 standard codes tied to carrier routes, 75 PO Box codes, and 6 unique codes reserved for single high-volume recipients, one example being the City of Houston\'s own municipal mailing address at P.O. Box 1562, ZIP 77251.',
					"That delivery-type split lines up closely with a pattern visible in the raw ZIP numbers themselves: 98 codes fall in the contiguous 770xx block (77001 through 77099), which covers most of the city's residential and business delivery routes, while the other 80 sit in a separate, far less contiguous 772xx block (77201 through 77299) -- the same range where most of the PO Box and unique codes live. It's the same convention this site found behind two outlier Los Angeles codes, 90095 and 90134: cities with enough mail volume get extra, non-sequential codes carved out for specific high-volume recipients rather than geography.",
				],
				table: {
					caption: 'All 178 ZIP codes with "Houston, TX" as the primary USPS place name (per GeoNames.org, checked 2026-08-11)',
					columns: ['ZIP'],
					rows: [
						['77001'], ['77002'], ['77003'], ['77004'], ['77005'],
						['77006'], ['77007'], ['77008'], ['77009'], ['77010'],
						['77011'], ['77012'], ['77013'], ['77014'], ['77015'],
						['77016'], ['77017'], ['77018'], ['77019'], ['77020'],
						['77021'], ['77022'], ['77023'], ['77024'], ['77025'],
						['77026'], ['77027'], ['77028'], ['77029'], ['77030'],
						['77031'], ['77032'], ['77033'], ['77034'], ['77035'],
						['77036'], ['77037'], ['77038'], ['77039'], ['77040'],
						['77041'], ['77042'], ['77043'], ['77044'], ['77045'],
						['77046'], ['77047'], ['77048'], ['77049'], ['77050'],
						['77051'], ['77052'], ['77053'], ['77054'], ['77055'],
						['77056'], ['77057'], ['77058'], ['77059'], ['77060'],
						['77061'], ['77062'], ['77063'], ['77064'], ['77065'],
						['77066'], ['77067'], ['77068'], ['77069'], ['77070'],
						['77071'], ['77072'], ['77073'], ['77074'], ['77075'],
						['77076'], ['77077'], ['77078'], ['77079'], ['77080'],
						['77081'], ['77082'], ['77083'], ['77084'], ['77085'],
						['77086'], ['77087'], ['77088'], ['77089'], ['77090'],
						['77091'], ['77092'], ['77093'], ['77094'], ['77095'],
						['77096'], ['77098'], ['77099'], ['77201'], ['77202'],
						['77203'], ['77204'], ['77205'], ['77206'], ['77207'],
						['77208'], ['77209'], ['77210'], ['77212'], ['77213'],
						['77215'], ['77216'], ['77217'], ['77218'], ['77219'],
						['77220'], ['77221'], ['77222'], ['77223'], ['77224'],
						['77225'], ['77226'], ['77227'], ['77228'], ['77229'],
						['77230'], ['77231'], ['77233'], ['77234'], ['77235'],
						['77236'], ['77237'], ['77238'], ['77240'], ['77241'],
						['77242'], ['77243'], ['77244'], ['77245'], ['77248'],
						['77249'], ['77251'], ['77252'], ['77253'], ['77254'],
						['77255'], ['77256'], ['77257'], ['77258'], ['77259'],
						['77261'], ['77262'], ['77263'], ['77265'], ['77266'],
						['77267'], ['77268'], ['77269'], ['77270'], ['77271'],
						['77272'], ['77273'], ['77274'], ['77275'], ['77277'],
						['77279'], ['77280'], ['77282'], ['77284'], ['77287'],
						['77288'], ['77289'], ['77290'], ['77291'], ['77292'],
						['77293'], ['77297'], ['77299'],
					],
				},
			},
			{
				heading: "West University Place: an independent city that shows up on Houston's own list",
				body: [
					'ZIP 77005 -- one of the 178 in the table above -- belongs to West University Place, a city with its own government, its own police department, and its own city hall that has never joined Houston at all. West University Place incorporated in 1925 and adopted a home-rule, council-manager charter in 1940; Houston annexed the unincorporated land around it over the following decades but left the incorporated city itself alone, the same way it later grew around Bellaire and Southside Place. Today West University Place sits entirely inside Houston\'s outline on a map, at about two square miles, bordered on its remaining sides by Bellaire and Southside Place.',
					"That makes 77005 an inconsistency, not a mistake, once you look at Bellaire next door: Bellaire is just as independent as West University Place -- Houston annexed the land around it too, completing the encirclement on December 31, 1948, and Bellaire responded the following April by adopting its own home-rule charter -- yet USPS gave Bellaire a ZIP place name of its own, 77401 (and 77402), rather than filing it under Houston. Two neighboring cities, both fully surrounded, both never annexed, and only one of them carries the surrounding city's name at the post office. It's a version of the same disconnect this site found in [Dallas](/dallas-zip-codes/), where a legally independent town, Highland Park, has its ZIP codes filed under Dallas's name anyway -- a reminder that a USPS place name tracks mail routing, not incorporation records.",
				],
			},
			{
				heading: 'Independence Heights: the one neighborhood on this list that actually did join Houston',
				body: [
					"Two of the 178 codes above, 77018 and 77022, cover Independence Heights, a neighborhood in north Houston bounded roughly by Tidwell Road, Yale Street, Loop 610, and Airline Drive. Its history runs in the opposite direction from West University Place's: Independence Heights incorporated on January 25, 1915, becoming the first Black-governed municipality in Texas, with attorney George O. Burgess elected its first mayor over a population of around 600. Over the next decade the city built its own shell-paved streets, plank sidewalks, and a municipal water system, and by the late 1920s it was home to roughly 40 Black-owned businesses -- grocery stores, a lumber company, law offices, and more.",
					"Unlike Bellaire and West University Place, Independence Heights didn't hold out. Facing money problems the small city struggled to solve on its own, residents voted in November 1928 to dissolve their own incorporation specifically so they could become part of Houston, and the annexation took effect on December 26, 1929. The city services residents hoped annexation would bring were slow to arrive, but the ZIP codes covering the old townsite, 77018 and 77022, carry Houston's name today for the most straightforward reason on this whole list: the neighborhood actually voted to become part of Houston, and did.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Houston have?',
				answer:
					"178, all in Harris County per this site's source data. A separate breakdown from zip-codes.com splits that total into 97 standard delivery-route codes, 75 PO Box codes, and 6 unique codes reserved for single high-volume recipients.",
			},
			{
				question: 'Is West University Place part of the city of Houston?',
				answer:
					"No. West University Place has run its own city council and police force since it incorporated in 1925 and has never been annexed by Houston. Its ZIP code, 77005, is nonetheless filed under Houston's name -- a USPS mail-routing convention, not a legal boundary.",
			},
			{
				question: "Why does Bellaire have its own ZIP code but West University Place doesn't?",
				answer:
					"Both are independent cities fully surrounded by Houston, but USPS treated them differently: Bellaire was assigned its own place name, 77401, while West University Place's ZIP, 77005, carries Houston's name instead. There's no annexation-status difference between the two cities that explains the split -- it comes down to how USPS's place-name database happened to be set up.",
			},
			{
				question: 'What is Independence Heights, and is it part of Houston?',
				answer:
					"Independence Heights was Texas's first incorporated Black municipality, established in 1915 in what's now north Houston. Residents voted to dissolve the city and join Houston in November 1928, and the annexation took effect on December 26, 1929. Its ZIP codes today, 77018 and 77022, carry Houston's name because the neighborhood really did become part of the city.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Houston, Texas ZIP codes -- zip-codes.com', url: 'https://www.zip-codes.com/city/tx-houston.asp' },
			{ label: 'West University Place, Texas -- Wikipedia', url: 'https://en.wikipedia.org/wiki/West_University_Place,_Texas' },
			{ label: 'History of Bellaire, Texas -- Wikipedia', url: 'https://en.wikipedia.org/wiki/History_of_Bellaire,_Texas' },
			{ label: 'Independence Heights -- Texas State Historical Association', url: 'https://www.tshaonline.org/handbook/entries/independence-heights-tx' },
			{ label: 'Independence Heights, Houston -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Independence_Heights,_Houston' },
		],
	},
	{
		slug: 'las-vegas-zip-codes',
		category: 'ZIP Codes',
		title: "Las Vegas ZIP Codes: The Full List, and the Strip That Isn't Really in the City",
		description:
			"Las Vegas has 77 ZIP codes -- and the Strip's own code, 89109, is split between Paradise and Winchester, two unincorporated towns Clark County created to keep the resort corridor out of the city's tax base.",
		published: '2026-08-11',
		updated: '2026-08-11',
		coreSummary:
			'USPS assigns 77 ZIP codes to "Las Vegas, NV" as the primary place name, and this site\'s source data puts every one of them in Clark County -- no cross-county split like this site\'s Atlanta or Denver lists. The best-known of the 77, 89109, isn\'t mostly inside the city of Las Vegas at all: a city-data.com boundary breakdown puts 53.44% of that ZIP in Paradise, 42.03% in Winchester, and only 4.53% in the City of Las Vegas proper. Paradise and Winchester are both unincorporated Clark County towns that grew out of a 1950 fight over the Strip\'s tax base -- county commissioners created the original township of Paradise on December 8, 1950, after casino operators lobbied to keep the resort corridor out of the city\'s reach, then reorganized it in 1951 into two towns along school-district lines, one of which took the name Winchester in 1953. Neither town has ever been part of the City of Las Vegas, and neither has its own ZIP place name -- so their ZIP codes, including the Strip\'s, are filed under "Las Vegas" anyway.',
		sections: [
			{
				heading: 'All 77 ZIP codes with "Las Vegas, NV" as the primary USPS place name',
				body: [
					"USPS assigns 77 ZIP codes to \"Las Vegas, NV\" as the primary place name, and every one of them sits in Clark County according to this site's source data -- there's no county split here the way there is on this site's [Atlanta](/atlanta-zip-codes/) or [Denver](/denver-zip-codes/) lists. Clark County is the only county Las Vegas touches, so a county breakdown wouldn't tell you anything useful about this city's ZIP map.",
					"All 77 fall inside a single contiguous block, 89101 through 89199. That's different from [Houston](/houston-zip-codes/), which splits its ZIP codes into two separate ranges, 770xx and 772xx, with the second block reserved mostly for PO Boxes and high-volume mailers -- Las Vegas's codes here don't carry that same split.",
				],
				table: {
					caption: 'All 77 ZIP codes with "Las Vegas, NV" as the primary USPS place name (per GeoNames.org, checked 2026-08-11)',
					columns: ['ZIP'],
					rows: [
						['89101'], ['89102'], ['89103'], ['89104'], ['89105'],
						['89106'], ['89107'], ['89108'], ['89109'], ['89110'],
						['89111'], ['89112'], ['89113'], ['89114'], ['89115'],
						['89116'], ['89117'], ['89118'], ['89119'], ['89120'],
						['89121'], ['89122'], ['89123'], ['89124'], ['89125'],
						['89126'], ['89127'], ['89128'], ['89129'], ['89130'],
						['89131'], ['89132'], ['89133'], ['89134'], ['89135'],
						['89136'], ['89137'], ['89138'], ['89139'], ['89140'],
						['89141'], ['89142'], ['89143'], ['89144'], ['89145'],
						['89146'], ['89147'], ['89148'], ['89149'], ['89150'],
						['89151'], ['89152'], ['89153'], ['89154'], ['89155'],
						['89156'], ['89157'], ['89158'], ['89159'], ['89160'],
						['89161'], ['89162'], ['89164'], ['89165'], ['89166'],
						['89169'], ['89170'], ['89173'], ['89177'], ['89178'],
						['89179'], ['89180'], ['89183'], ['89185'], ['89193'],
						['89195'], ['89199'],
					],
				},
			},
			{
				heading: 'Paradise: the town casino operators invented to keep the Strip out of city hall',
				body: [
					"The most recognizable ZIP code on the list above, 89109, is the address for most of the Las Vegas Strip -- and most of that ZIP code isn't actually inside the city of Las Vegas. A boundary breakdown from city-data.com splits 89109 three ways: 53.44% in Paradise, 42.03% in Winchester, and just 4.53% in the City of Las Vegas itself. Both Paradise and Winchester are unincorporated Clark County towns that have never been annexed by, or become part of, the City of Las Vegas.",
					"Paradise exists because of a fight over tax revenue. In 1950, Las Vegas mayor Ernie Cragin pushed to annex the then-unincorporated Strip so the city could tax the casinos being built along it. A group of casino operators, led by the Flamingo's Gus Greenbaum, lobbied the Clark County Commission for township status instead -- a designation that would keep the Strip under county government and out of the city's reach. The commission created Paradise on December 8, 1950, and its first town board was made up of five casino managers, with Greenbaum as chair.",
					"Paradise's population was 191,238 at the 2020 census. Beyond the Strip, the town also contains Harry Reid International Airport and the University of Nevada, Las Vegas -- none of it part of the city whose name shows up on the mail.",
				],
			},
			{
				heading: 'Winchester: the sibling town with the same origin story',
				body: [
					"Winchester exists because of a legal snag in Paradise's original boundary: it crossed into two separate school districts, which Nevada law didn't allow. To fix that, the county reorganized Paradise in 1951 into two towns, one covering the section inside the Las Vegas school district and the other covering the section inside the Paradise school district. In October 1953, the first of those two took the name Winchester and the second kept the name Paradise. Both towns are still governed today by the Clark County Commission, each with its own town advisory board, and neither has ever been part of the city of Las Vegas. Winchester's 2020 census population was 36,403.",
					"Neither Paradise nor Winchester has its own ZIP place name. ZIP codes inside both towns -- including 89109, the Strip's own code -- are filed under \"Las Vegas\" because that's the mailing city USPS assigns them, not because the towns are part of the city. It's the same kind of mismatch this site found in [Houston](/houston-zip-codes/), where ZIP 77005 carries Houston's name despite belonging to the fully independent city of West University Place -- except in Las Vegas's case, it's the entire world-famous resort corridor filed under a city that has never governed it.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Las Vegas have?',
				answer:
					"77, per USPS's place-name assignment, and all 77 sit in Clark County according to this site's source data.",
			},
			{
				question: 'Is the Las Vegas Strip actually inside the city of Las Vegas?',
				answer:
					"No, mostly. ZIP code 89109, the Strip's main code, splits 53.44% into Paradise, 42.03% into Winchester, and only 4.53% into the City of Las Vegas itself, per a city-data.com boundary breakdown. Both Paradise and Winchester are unincorporated Clark County towns that have never been annexed by the City of Las Vegas.",
			},
			{
				question: "Why does the Strip's ZIP code say \"Las Vegas\" if it's not in the city?",
				answer:
					"Because USPS assigns each ZIP code a mailing-city name for postal routing, not for legal jurisdiction. Neither Paradise nor Winchester has its own separate ZIP place name, so ZIP codes inside both towns, including the Strip's 89109, are filed under \"Las Vegas\" even though the towns have run their own affairs since the early 1950s.",
			},
			{
				question: 'What is Paradise, Nevada?',
				answer:
					"Paradise is an unincorporated Clark County town created on December 8, 1950, after a group of casino operators lobbied the county for township status to keep the Las Vegas Strip out of the city's tax base. Its first town board was made up of five casino managers. It's governed by the Clark County Commission, not the City of Las Vegas, and its 2020 census population was 191,238.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Paradise, Nevada -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Paradise,_Nevada' },
			{ label: 'Winchester, Nevada -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Winchester,_Nevada' },
			{ label: 'Where is Paradise in Las Vegas? -- Las Vegas Review-Journal', url: 'https://www.reviewjournal.com/local/local-las-vegas/the-origins-of-paradise-in-las-vegas-3174948/' },
			{ label: 'Las Vegas vs. Clark County: there are differences between living in city limits and unincorporated county land -- Las Vegas Sun', url: 'https://lasvegassun.com/news/2019/jul/12/las-vegas-vs-clark-county-there-are-differences-be/' },
			{ label: 'ZIP code 89109 city breakdown -- city-data.com', url: 'https://www.city-data.com/zips/89109.html' },
		],
	},
	{
		slug: 'sacramento-zip-codes',
		category: 'ZIP Codes',
		title: 'Sacramento ZIP Codes: The Full List, and the 59 That Never Reach a House',
		description:
			"Sacramento has 100 ZIP codes, but 59 sit in a block state agencies use for tax filings and other high-volume mail -- only 41 actually cover the city's homes and businesses.",
		published: '2026-08-12',
		updated: '2026-08-12',
		coreSummary:
			'USPS assigns 100 ZIP codes to "Sacramento, CA" as the primary place name, all in Sacramento County per this site\'s source data -- no cross-county split like this site\'s Atlanta or Denver lists. They split into two ranges: 41 codes in the 958xx block, covering the city\'s actual residential and business delivery routes, and 59 in the 942xx block, reserved for high-volume state government correspondence rather than home delivery -- among them the California Franchise Tax Board\'s separate PO Box codes for personal returns without payment (94240), personal returns with payment (94267), and business returns (94257). The split traces back to February 1854, when the state legislature voted to move California\'s capital to Sacramento from Benicia. A separate zip-codes.com breakdown of the same city, compiled at a different time, puts the total at 99 and classifies it as 29 standard delivery codes, 61 unique high-volume codes, and 9 PO Box codes -- close to, but not an exact match for, this site\'s own count.',
		sections: [
			{
				heading: 'All 100 ZIP codes with "Sacramento, CA" as the primary USPS place name',
				body: [
					"Sacramento County is the only county in this table, unlike this site's [Denver](/denver-zip-codes/) or [Atlanta](/atlanta-zip-codes/) lists, which each split across county lines. zip-codes.com runs its own count of Sacramento's ZIP codes and lands on 99, one short of the 100 pulled from this site's GeoNames-based source data -- the two counts were compiled at different times and won't necessarily line up exactly. Where zip-codes.com does add useful detail is delivery type: it classifies 29 of the codes as standard routes tied to carriers, 61 as unique codes tied to a single high-volume recipient, and 9 as PO Boxes.",
					"That delivery-type split lines up with a pattern visible in the raw ZIP numbers themselves: 41 codes fall in the 958xx block (95811 through 95899), which covers most of the city's actual residential and business delivery routes, while the other 59 sit in a separate 942xx block (94203 through 94299) reserved for state government correspondence -- similar to the way this site found [Houston](/houston-zip-codes/) splitting into a residential 770xx block and a PO-Box-heavy 772xx block, though Sacramento's non-residential share is proportionally larger.",
				],
				table: {
					caption: 'All 100 ZIP codes with "Sacramento, CA" as the primary USPS place name (per GeoNames.org, checked 2026-08-12)',
					columns: ['ZIP'],
					rows: [
						['94203'], ['94204'], ['94205'], ['94206'], ['94207'],
						['94208'], ['94209'], ['94211'], ['94229'], ['94230'],
						['94232'], ['94234'], ['94235'], ['94236'], ['94237'],
						['94239'], ['94240'], ['94244'], ['94245'], ['94247'],
						['94248'], ['94249'], ['94250'], ['94252'], ['94254'],
						['94256'], ['94257'], ['94258'], ['94259'], ['94261'],
						['94262'], ['94263'], ['94267'], ['94268'], ['94269'],
						['94271'], ['94273'], ['94274'], ['94277'], ['94278'],
						['94279'], ['94280'], ['94282'], ['94283'], ['94284'],
						['94285'], ['94286'], ['94287'], ['94288'], ['94289'],
						['94290'], ['94291'], ['94293'], ['94294'], ['94295'],
						['94296'], ['94297'], ['94298'], ['94299'], ['95811'],
						['95812'], ['95813'], ['95814'], ['95815'], ['95816'],
						['95817'], ['95818'], ['95819'], ['95820'], ['95821'],
						['95822'], ['95823'], ['95824'], ['95825'], ['95826'],
						['95827'], ['95828'], ['95829'], ['95830'], ['95831'],
						['95832'], ['95833'], ['95834'], ['95835'], ['95836'],
						['95837'], ['95838'], ['95840'], ['95841'], ['95842'],
						['95851'], ['95852'], ['95853'], ['95860'], ['95864'],
						['95865'], ['95866'], ['95867'], ['95894'], ['95899'],
					],
				},
			},
			{
				heading: "Why 59 of Sacramento's 100 ZIP codes never deliver mail to a house",
				body: [
					"The 942xx block exists because Sacramento is California's seat of government, not because the city itself is unusually large -- its population, about 525,000, is smaller than San Francisco's (roughly 830,000) or San Jose's (roughly 990,000), both of which get by with far fewer non-residential codes. The state legislature voted to move the capital to Sacramento from Benicia in February 1854, and the growth of state government in the city since then is what eventually pushed USPS to carve out dedicated codes for departments that receive far more mail than any single street address could sort through on its own.",
					"The California Franchise Tax Board's own mailing-address page shows exactly how that plays out: personal income tax returns filed without a payment go to PO Box 942840, Sacramento, CA 94240; the same returns filed with a payment go to a different code, 94267; and business tax returns go to yet another, 94257. None of those three codes corresponds to a street address a resident could visit -- each one exists to sort incoming tax mail by return type before it's even opened, a level of postal subdivision a typical U.S. city never needs.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Sacramento have?',
				answer:
					"100, per this site's GeoNames-based source data. A separate zip-codes.com tally puts the number at 99 and classifies them as 29 standard delivery codes, 61 unique high-volume codes, and 9 PO Box codes.",
			},
			{
				question: 'Why does Sacramento have so many ZIP codes for its population?',
				answer:
					"Most of the total isn't for residents at all: 59 of Sacramento's 100 ZIP codes fall in the 942xx block, which USPS reserves for high-volume state government correspondence rather than home delivery. Only 41 codes, in the 958xx block, cover the city's actual neighborhoods.",
			},
			{
				question: 'What ZIP code do I use to mail a California state tax return?',
				answer:
					"It depends on the form and whether a payment is included. The Franchise Tax Board lists separate ZIP codes for each combination -- personal returns without payment go to 94240, personal returns with payment go to 94267, and business returns go to 94257 -- each a dedicated PO Box, not a street address.",
			},
			{
				question: "When did Sacramento become California's capital?",
				answer:
					'February 1854, when the state legislature voted to move the capital there from Benicia.',
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Sacramento, CA ZIP Codes -- zip-codes.com', url: 'https://www.zip-codes.com/city/ca-sacramento.asp' },
			{ label: 'Franchise Tax Board: Mailing addresses', url: 'https://www.ftb.ca.gov/help/contact/mailing-addresses.html' },
			{ label: 'California State Capitol -- Wikipedia', url: 'https://en.wikipedia.org/wiki/California_State_Capitol' },
		],
	},
	{
		slug: 'san-diego-zip-codes',
		category: 'ZIP Codes',
		title: 'San Diego ZIP Codes: The Full List, and the Three That Belong to a Military Base',
		description:
			"San Diego has 76 ZIP codes, and every one sits inside San Diego County -- no split like this site's Denver or Atlanta lists. Three of them, though, belong to a Navy or Marine base instead of a neighborhood.",
		published: '2026-08-13',
		updated: '2026-08-13',
		coreSummary:
			"USPS assigns 76 ZIP codes to \"San Diego, CA\" as the primary place name, and every one of them sits inside San Diego County, per this site's GeoNames-based source data -- unlike this site's Denver or Atlanta lists, where the ZIP footprint spills across a county line, San Diego's stays on one side of it. The count itself is not settled: zip-codes.com puts the city at 81 ZIP codes, and other directories land anywhere from 75 to 95 depending on how PO-Box-only and single-recipient codes get classified. Three of the 76 on this site's list do not belong to any neighborhood at all. 92136 is Naval Base San Diego on 32nd Street, the Pacific Fleet's main surface-ship homeport. 92140 is Marine Corps Recruit Depot San Diego, where West Coast recruits have trained since 1923. And 92145 is Marine Corps Air Station Miramar, the Navy base that sent its Topgun fighter school to Nevada in 1996 and its own ownership to the Marine Corps a year later.",
		sections: [
			{
				heading: 'All 76 ZIP codes with "San Diego, CA" as the primary USPS place name',
				body: [
					"Every one of the 76 falls inside San Diego County -- the same pattern this site found in [Sacramento](/sacramento-zip-codes/), and a contrast to [Denver](/denver-zip-codes/) or [Atlanta](/atlanta-zip-codes/), where the ZIP list crosses into a neighboring county. Directories disagree on the total more than they disagree on the county, though: zip-codes.com counts 81 ZIP codes for San Diego, five above the 76 this site pulls from GeoNames, and other trackers range from 75 to 95 depending on whether they fold PO-Box-only and single-recipient codes into the total or list them separately.",
					"San Diego also dials on two area codes, 619 and 858, both covered in more detail on this site's [California area code list](/california-area-codes/).",
				],
				table: {
					caption: 'All 76 ZIP codes with "San Diego, CA" as the primary USPS place name (per GeoNames.org, checked 2026-08-13)',
					columns: ['ZIP'],
					rows: [
						['92101'], ['92102'], ['92103'], ['92104'], ['92105'],
						['92106'], ['92107'], ['92108'], ['92109'], ['92110'],
						['92111'], ['92112'], ['92113'], ['92114'], ['92115'],
						['92116'], ['92117'], ['92119'], ['92120'], ['92121'],
						['92122'], ['92123'], ['92124'], ['92126'], ['92127'],
						['92128'], ['92129'], ['92130'], ['92131'], ['92132'],
						['92134'], ['92135'], ['92136'], ['92137'], ['92138'],
						['92139'], ['92140'], ['92142'], ['92145'], ['92147'],
						['92149'], ['92150'], ['92152'], ['92153'], ['92154'],
						['92155'], ['92158'], ['92159'], ['92160'], ['92161'],
						['92163'], ['92165'], ['92166'], ['92167'], ['92168'],
						['92169'], ['92170'], ['92171'], ['92172'], ['92174'],
						['92175'], ['92176'], ['92177'], ['92179'], ['92182'],
						['92186'], ['92187'], ['92190'], ['92191'], ['92192'],
						['92193'], ['92195'], ['92196'], ['92197'], ['92198'],
						['92199'],
					],
				},
			},
			{
				heading: 'Why the number sequence skips Coronado and San Ysidro',
				body: [
					"The gaps in that sequence -- no 92118, 92143, 92173, or 92178 -- are not missing data. All four fall inside San Diego County too, but USPS assigns them to Coronado (92118 and 92178) and San Ysidro (92143 and 92173) instead of to San Diego itself, even though both places sit within a few miles of downtown. Coronado is its own incorporated city, connected to San Diego by a bridge and a narrow spit of land called the Silver Strand, and has never been part of San Diego's municipal government.",
					"San Ysidro's case is different: it has been a neighborhood inside the City of San Diego since 1957, when the city annexed the South Bay communities of Palm City, Otay, and San Ysidro to secure a more reliable water supply. Annexation folded San Ysidro into San Diego's city limits, but USPS never merged its ZIP codes into San Diego's own -- 92143 and 92173 still carry San Ysidro's name today, nearly seventy years later, a reminder that a place can lose its city government and keep its postal identity anyway.",
				],
			},
			{
				heading: 'Three ZIP codes that belong to a base, not a neighborhood',
				body: [
					"92136 belongs to Naval Base San Diego, the installation along 32nd Street that serves as the Pacific Fleet's principal homeport for surface ships -- destroyers, cruisers, and amphibious vessels tie up along its piers rather than at any of the commercial waterfront a few miles north. 92140 belongs to Marine Corps Recruit Depot San Diego, the Marine Corps' West Coast boot camp; the Corps moved its recruit training there from Mare Island, near Vallejo, in 1923, and the depot's Spanish Colonial Revival buildings, designed by architect Bertram Goodhue, are now on the National Register of Historic Places.",
					"92145 belongs to Marine Corps Air Station Miramar, a base with a split identity of its own. The Navy ran it for decades as \"Fightertown,\" home to F-14 squadrons and the Navy Fighter Weapons School known as Topgun -- until the summer of 1996, when Topgun's need for more training airspace than Miramar could offer sent it north to Naval Air Station Fallon, Nevada, where it still operates today. The base itself followed a similar path a year later: after the Marine Corps lost its own Southern California air stations at El Toro and Tustin to closure, it took over Miramar from the Navy on October 1, 1997, and the field has flown Marine Corps colors ever since.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does San Diego have?',
				answer:
					"76, per this site's GeoNames-based source data. zip-codes.com puts the city at 81, and other directories range from 75 to 95 depending on how they classify PO-Box-only and single-recipient codes.",
			},
			{
				question: 'What county is San Diego in?',
				answer:
					"San Diego County, and unlike this site's Denver or Atlanta ZIP lists, all 76 ZIP codes USPS assigns to San Diego stay inside that one county -- none spill across a county line.",
			},
			{
				question: 'Which San Diego ZIP codes belong to a military base?',
				answer:
					"Three do: 92136 is Naval Base San Diego on 32nd Street, 92140 is Marine Corps Recruit Depot San Diego, and 92145 is Marine Corps Air Station Miramar. None of the three corresponds to a civilian neighborhood.",
			},
			{
				question: "Why isn't Coronado's ZIP code included in San Diego's list?",
				answer:
					"Coronado is its own incorporated city, not a San Diego neighborhood, so USPS assigns it separate ZIP codes -- 92118 and 92178 -- even though it sits directly across San Diego Bay and shares a land connection with the city via the Silver Strand.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'San Diego, CA ZIP Codes -- zip-codes.com', url: 'https://www.zip-codes.com/city/ca-san-diego.asp' },
			{ label: 'Naval Base San Diego -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Naval_Base_San_Diego' },
			{ label: 'Marine Corps Recruit Depot San Diego -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Marine_Corps_Recruit_Depot_San_Diego' },
			{ label: 'Marine Corps Air Station Miramar -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Marine_Corps_Air_Station_Miramar' },
			{ label: 'San Ysidro, San Diego -- Wikipedia', url: 'https://en.wikipedia.org/wiki/San_Ysidro,_San_Diego,_California' },
			{ label: 'Coronado, California -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Coronado,_California' },
		],
	},
	{
		slug: 'zip-code-shows-wrong-city',
		category: 'ZIP Codes',
		title: 'Why Does My ZIP Code Show the Wrong City?',
		description:
			'USPS assigns every ZIP code one official "preferred place name," tied to the post office that services it, not the town the address sits in. That mismatch is documented nationwide, and it recently derailed a Colorado real estate listing.',
		published: '2026-08-13',
		updated: '2026-08-13',
		coreSummary:
			"Every USPS ZIP code has exactly one official \"preferred place name\" on file -- the city that shows up on the last line of the address -- and USPS assigns it based on which post office services the delivery route, not which town, city, or county the address legally sits in. That distinction is why a property can be physically located in one town while its ZIP code's preferred name reads as a different one entirely, sometimes across a county line. USPS has a formal process for correcting a preferred name, and cities have petitioned to change one, but the mismatch itself is common enough to have its own paper trail -- and it recently changed how a Colorado real estate listing showed up online.",
		sections: [
			{
				heading: "A ZIP code's city name comes from a post office, not a map",
				body: [
					'USPS\'s Publication 28 addressing standards define what the postal service calls the "last line" of an address -- city, state, and ZIP -- and every five-digit ZIP has one preferred city name attached to it in USPS\'s own address-matching database. That name is set administratively, based on the post office that historically handled delivery for the area, not by checking a municipal boundary, a county line, or a map of where residents consider themselves to live.',
					"Most of the time nobody notices, because the post office that serves an area and the town people call home are the same place. The mismatch shows up when they aren't: a subdivision built between two towns, a rural stretch where one post office covers ground that technically belongs to a neighboring county, or a ZIP boundary drawn decades ago that never got redrawn as the area around it grew. This site has already documented a version of the same underlying fact in [Los Angeles](/los-angeles-zip-codes/), where dozens of neighborhoods that are legally part of the city still carry a different name at the post office. A ZIP code's place name is a routing label USPS assigns for its own delivery logistics, not a ruling on what city an address legally belongs to -- the same gap that makes an [area code](/how-do-area-codes-work/) a poor stand-in for a timezone.",
				],
			},
			{
				heading: 'A Colorado listing that read as an entirely different town',
				body: [
					"Anne-Britt Ostlund, an agent with Mountain Rose Realty, ran into this on a listing at 456 Ridge Road -- a property that sits in Ouray County and should read as Ridgway, Colorado, Ouray County's largest town. Instead, the ZIP code covering that address carries Montrose as its USPS preferred place name -- the seat of neighboring Montrose County. The two towns sit close enough together that a shared ZIP delivery route makes sense on a map. On the ground, they're two separate towns in two separate counties, with buyers who don't overlap.",
					"<div style=\"margin:12px 0;padding:18px 20px;background:#f8fafc;border-left:4px solid #4a5568;border-radius:8px;\"><p style=\"margin:0;font-size:1.05rem;font-style:italic;color:#1e293b;line-height:1.6;\">&ldquo;Those are two ENTIRELY different markets and buyer types and it's caused havoc on Zillow and other websites, I even got a call from the local MLS trying to tell me I have the home in the wrong town!&rdquo;</p><p style=\"margin:8px 0 0;font-size:0.8125rem;color:#64748b;\">Anne-Britt Ostlund, Mountain Rose Realty</p></div>",
					"Zillow and most other listing sites don't independently verify what town a property sits in -- they pull the city from the address's ZIP code, and that means they inherit whatever name USPS has on file for that ZIP, correct or not. A listing rooted in a mountain-town market can end up displayed under a neighboring valley town's name instead, to buyers who search by location and to a local MLS that flagged the listing as possibly misfiled before realizing the address itself was never wrong -- the ZIP code's label was.",
				],
			},
			{
				heading: 'The same mismatch has turned up from Virginia to Georgia',
				body: [
					"ZIP 20152 covers South Riding, Virginia, a Loudoun County community of roughly 37,000 people, but USPS's preferred place name for that ZIP is Chantilly, the next town over -- South Riding is accepted only as an alternate. Oakland, California, has the same problem in reverse: part of ZIP 94608 sits inside Oakland's city limits, but USPS's preferred name for that whole ZIP is Emeryville, the smaller city next door.",
					"Alameda County ran a formal \"Community Identity Project\" specifically because of how often this comes up for unincorporated communities: if you live in an unincorporated area near a mid-size city, the county found, your mailing address probably carries that city's name even though you don't live within its borders, pay its taxes, or vote in its elections. Sandy Springs, Georgia, spent years pushing back against the reverse version of the same problem -- its ZIP codes carried \"Atlanta\" as the preferred name even after Sandy Springs incorporated as its own city in 2005 -- and won USPS approval in March 2026 to make Sandy Springs the default name instead. Sandy Springs shows the mismatch is fixable, just not automatically and not quickly.",
				],
			},
			{
				heading: "What actually fixes it, and what doesn't",
				body: [
					"USPS has a formal process for this, laid out in a 2016 Management Instruction on the ZIP Code Boundary Review Process. A city, community group, or individual can request a preferred-name change by submitting it in writing to the district manager for the area, either directly or through a local postmaster who forwards it along. The district manager is required to respond within 60 days. For a full boundary or name change covering a whole ZIP code -- the kind of request Sandy Springs made -- USPS requires a survey of affected addresses, with at least half returned and at least half of those in favor, before it will act. Appeals go to USPS's Manager of Rural Delivery in Washington, D.C.",
					"For an individual property, mail delivery usually isn't the problem: USPS's address-matching system already accepts a range of alternate city names for a given ZIP, which is why \"South Riding, VA 20152\" delivers fine even though Chantilly is the official preferred name. What doesn't get fixed by that leniency is how third-party platforms display the address. Zillow, an MLS, a shipping carrier's rate lookup, or a GPS system typically defaults to the single preferred name on file, not whichever alternate a homeowner or agent prefers. Short of a formal USPS petition, the practical move for a real estate listing is to spell out the correct town and county explicitly in the listing description and public records, and be ready to explain the mismatch the first time a buyer, another agent, or an MLS reviewer flags it as if it were an error -- because on paper, at a glance, it looks like one.",
				],
			},
		],
		faq: [
			{
				question: 'Why does Zillow show the wrong city for my property?',
				answer:
					"Zillow and most other real estate sites pull the city name from an address's ZIP code, which reflects USPS's single \"preferred place name\" for that ZIP, not necessarily the town the property physically sits in. If the ZIP's servicing post office is based in a different, neighboring town, listing sites will typically display that name instead, even when it puts the property in the wrong real estate market on the page.",
			},
			{
				question: "Can I get USPS to change a ZIP code's preferred city name?",
				answer:
					"Yes, but it's a formal process, not a quick correction. A written request goes to the USPS district manager for the area, either directly or through a local postmaster, who must respond within 60 days. A full ZIP-wide name change additionally requires a survey of affected addresses, with at least half returned and at least half in favor. Sandy Springs, Georgia, used this process to get its own name approved in place of \"Atlanta\" in March 2026, after years of trying.",
			},
			{
				question: "Does a ZIP code's city name affect my school district or property taxes?",
				answer:
					"No. A ZIP code is a USPS mail-routing label with no legal standing -- school district assignment, tax jurisdiction, and voting districts are set independently by cities, counties, and school boards, and none of them follow ZIP code lines.",
			},
			{
				question: "Will my mail still get delivered if I use the town's own name instead of the ZIP's preferred name?",
				answer:
					"Usually, yes. USPS's address-matching system accepts a range of alternate city names for a given ZIP code -- it's why South Riding, VA addresses (ZIP 20152) deliver correctly even though Chantilly is the official preferred name on file. It isn't guaranteed for every ZIP, though, and accepting an alternate for delivery doesn't change what name a third-party site like Zillow or an MLS displays.",
			},
		],
		sources: [
			{ label: 'USPS Postal Explorer, Publication 28: Last Line of the Address', url: 'https://pe.usps.com/text/pub28/28c2_006.htm' },
			{ label: 'CRS via EveryCRSReport: Postal Primer -- ZIP Codes and Boundary Review Process', url: 'https://www.everycrsreport.com/reports/IF12132.html' },
			{ label: 'Rough Draft Atlanta: Sandy Springs wins USPS approval for city name on mailing addresses', url: 'https://roughdraftatlanta.com/2026/03/11/sandy-springs-zip-code-review/' },
			{ label: 'Alameda County Community Identity Project', url: 'https://www.acgov.org/cda/USPSproject/solutions-action.htm' },
			{ label: 'UnitedStatesZipCodes.org: ZIP Code 20152 (South Riding / Chantilly, VA)', url: 'https://www.unitedstateszipcodes.org/20152/' },
			{ label: 'UnitedStatesZipCodes.org: ZIP Code 94608 (Emeryville / Oakland, CA)', url: 'https://www.unitedstateszipcodes.org/94608/' },
		],
	},
	{
		slug: 'kansas-city-zip-codes',
		category: 'ZIP Codes',
		title: 'Kansas City ZIP Codes: Two Cities, Two States, Two Separate Lists',
		description:
			"Kansas City is really two cities in two states, and USPS treats them as separate places. Every ZIP for Kansas City, Missouri (71, three counties) and Kansas City, Kansas (15, one county) -- and why the split happened.",
		published: '2026-08-13',
		updated: '2026-08-13',
		coreSummary:
			"There are two Kansas Citys, and USPS assigns each one its own separate set of ZIP codes. Kansas City, Missouri carries 71 ZIP codes with \"Kansas City\" as the primary USPS place name, spread across three counties -- Jackson (48), Clay (14), and Platte (9). Kansas City, Kansas carries 15, all inside a single county, Wyandotte. Missouri's Kansas City incorporated first, in 1853; towns on the Kansas side of the state line incorporated their own Kansas City nearly two decades later, in 1872, and that city took its current shape in 1886, when five of those towns consolidated into one municipality. A search for \"kansas city zip code\" could mean either one, and the two ZIP lists don't overlap at all.",
		sections: [
			{
				heading: 'Two cities named Kansas City, on two sides of a state line',
				body: [
					"Most cities that share a name are nowhere near each other. Kansas City is the exception: there's a Kansas City in Missouri and a Kansas City in Kansas, sitting directly across a state line from one another, close enough that a single road -- State Line Road -- runs along the border between them for miles. USPS treats them as two entirely separate places, each with its own ZIP code range, its own county assignments, and its own city government.",
					"Kansas City, Missouri is the larger of the two by a wide margin: 71 ZIP codes, all starting with 641, spread across three counties. Kansas City, Kansas is smaller: 15 ZIP codes, all starting with 66, all inside one county. Neither list borrows from the other -- but a web search for \"kansas city zip code\" doesn't specify which city the searcher means, which is the reason this page covers both.",
				],
			},
			{
				heading: "Kansas City, Missouri's 71 ZIP codes, across three counties",
				body: [
					"Kansas City, Missouri's ZIP codes split unevenly across three counties: 48 sit in Jackson County, home to the city's original downtown and most of its historic neighborhoods; 14 sit in Clay County, north of the Missouri River; and 9 sit in Platte County, in the city's northwest corner near Kansas City International Airport. That pattern likely reflects how the city grew over the twentieth century: blocked from expanding west by the Kansas state line, Kansas City annexed land north across the Missouri River into Clay and Platte instead, first into Clay in the 1940s and later into Platte by the early 1960s.",
				],
				table: {
					caption: 'All 71 ZIP codes with "Kansas City, MO" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-13)',
					columns: ['ZIP', 'County'],
					rows: [
						['64101', 'Jackson'], ['64102', 'Jackson'], ['64105', 'Jackson'], ['64106', 'Jackson'],
						['64108', 'Jackson'], ['64109', 'Jackson'], ['64110', 'Jackson'], ['64111', 'Jackson'],
						['64112', 'Jackson'], ['64113', 'Jackson'], ['64114', 'Jackson'], ['64116', 'Clay'],
						['64117', 'Clay'], ['64118', 'Clay'], ['64119', 'Clay'], ['64120', 'Jackson'],
						['64121', 'Jackson'], ['64123', 'Jackson'], ['64124', 'Jackson'], ['64125', 'Jackson'],
						['64126', 'Jackson'], ['64127', 'Jackson'], ['64128', 'Jackson'], ['64129', 'Jackson'],
						['64130', 'Jackson'], ['64131', 'Jackson'], ['64132', 'Jackson'], ['64133', 'Jackson'],
						['64134', 'Jackson'], ['64136', 'Jackson'], ['64137', 'Jackson'], ['64138', 'Jackson'],
						['64139', 'Jackson'], ['64141', 'Jackson'], ['64144', 'Clay'], ['64145', 'Jackson'],
						['64146', 'Jackson'], ['64147', 'Jackson'], ['64148', 'Jackson'], ['64149', 'Jackson'],
						['64151', 'Platte'], ['64152', 'Platte'], ['64153', 'Platte'], ['64154', 'Platte'],
						['64155', 'Clay'], ['64156', 'Clay'], ['64157', 'Clay'], ['64158', 'Clay'],
						['64161', 'Clay'], ['64162', 'Clay'], ['64163', 'Platte'], ['64164', 'Platte'],
						['64165', 'Clay'], ['64166', 'Clay'], ['64167', 'Clay'], ['64168', 'Platte'],
						['64170', 'Jackson'], ['64171', 'Jackson'], ['64179', 'Jackson'], ['64180', 'Jackson'],
						['64184', 'Jackson'], ['64187', 'Jackson'], ['64188', 'Jackson'], ['64190', 'Platte'],
						['64191', 'Jackson'], ['64195', 'Platte'], ['64196', 'Jackson'], ['64197', 'Jackson'],
						['64198', 'Jackson'], ['64199', 'Jackson'], ['64999', 'Jackson'],
					],
				},
			},
			{
				heading: "Kansas City, Kansas's 15 ZIP codes, all in one county",
				body: [
					"Kansas City, Kansas has a simpler footprint: all 15 of its ZIP codes sit inside Wyandotte County, and have since 1997, when the city and county merged into a single government (more on that below). There's no annexation-driven spread into a second county the way there is on the Missouri side -- Wyandotte County's own boundary is close to Kansas City, Kansas's boundary too, aside from a couple of smaller cities inside the county, Bonner Springs and Edwardsville, which keep separate ZIP codes of their own.",
				],
				table: {
					caption: 'All 15 ZIP codes with "Kansas City, KS" as the primary USPS place name (per GeoNames.org, checked 2026-08-13)',
					columns: ['ZIP'],
					rows: [
						['66101'], ['66102'], ['66103'], ['66104'], ['66105'],
						['66106'], ['66109'], ['66110'], ['66111'], ['66112'],
						['66115'], ['66117'], ['66118'], ['66119'], ['66160'],
					],
				},
			},
			{
				heading: 'Why there are two Kansas Citys in the first place',
				body: [
					'Missouri\'s Kansas City came first. What became the city began as a river landing platted by a group of investors, including John McCoy, in 1838, and Missouri formally incorporated it as the "City of Kansas" on March 28, 1853 -- named for the Kansas River, not the state, which didn\'t exist yet. Kansas wasn\'t admitted to the Union until 1861.',
					'Once Kansas became a state, towns on its side of the border started growing too, and in 1872 several of them incorporated as "Kansas City, Kansas," borrowing the name of the already-successful Missouri city next door. That first version didn\'t last as a single city -- the Kansas City, Kansas that exists today dates to March 1886, when the governor of Kansas consolidated five separate towns (Wyandotte, old Kansas City, Armourdale, Armstrong, and Riverview) into one municipality, under a state law that allowed adjoining towns to merge once their combined population cleared a 15,000-resident threshold.',
				],
			},
			{
				heading: 'The government that merged the Kansas city with its county',
				body: [
					"Kansas City, Kansas took one more structural step that Kansas City, Missouri never did: on April 1, 1997, voters in Wyandotte County approved a charter merging the city government with the county government into a single body, the Unified Government of Wyandotte County and Kansas City, Kansas, which took effect that October. The merger followed years of civic trouble in the county, including persistent rumors of patronage and corruption among local officials, and was pitched to voters as a way to cut duplicated bureaucracy and rebuild the county's economic prospects.",
					"That's the structural reason Kansas City, Kansas's ZIP codes map so closely onto a single county: since 1997, the city and Wyandotte County have effectively run as one government. Kansas City, Missouri has no equivalent merger with Jackson, Clay, or Platte County -- it remains a city government layered on top of three separate county governments, part of why its own ZIP footprint spreads across all three.",
				],
			},
			{
				heading: 'Different area codes too',
				body: [
					"The two cities also dial on separate [area codes](/how-do-area-codes-work/): Kansas City, Missouri uses 816, one of the original area codes assigned nationwide in 1947, later overlaid by 975 in 2023. Kansas City, Kansas uses 913, also original to 1947, which gave up part of its territory to a new area code, 785, in 1997 -- the same year Wyandotte County and Kansas City, Kansas merged their governments.",
					"State Line Road itself carries the border for much of its length: on the stretch running south from Chester Avenue, northbound traffic runs through Missouri and southbound traffic runs through Kansas, switching states without the road ever turning.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Kansas City have?',
				answer:
					"It depends which Kansas City. Kansas City, Missouri has 71 ZIP codes with \"Kansas City\" as the primary USPS place name; Kansas City, Kansas has 15. The two lists are entirely separate.",
			},
			{
				question: 'What county is Kansas City, Missouri in?',
				answer:
					"Kansas City, Missouri spans three counties: Jackson (48 of its 71 ZIP codes), Clay (14), and Platte (9). Jackson County contains the city's original downtown and most of its historic core.",
			},
			{
				question: 'What county is Kansas City, Kansas in?',
				answer:
					"Wyandotte County, entirely. Since 1997, Kansas City, Kansas and Wyandotte County have run under a single Unified Government, which is why the city's ZIP codes and the county's boundary line up so closely.",
			},
			{
				question: 'Why are there two cities called Kansas City?',
				answer:
					"Missouri's Kansas City incorporated first, in 1853, named for the Kansas River. Once Kansas became a state in 1861, towns on the Kansas side of the state line grew too, and several of them consolidated in 1886 into a second city that borrowed the name: Kansas City, Kansas.",
			},
			{
				question: 'Do Kansas City, Missouri and Kansas City, Kansas use the same area code?',
				answer:
					'No. Kansas City, Missouri uses 816 (overlaid by 975 in 2023); Kansas City, Kansas uses 913. Both were among the original area codes assigned in 1947.',
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Wikipedia: Kansas City, Missouri', url: 'https://en.wikipedia.org/wiki/Kansas_City,_Missouri' },
			{ label: 'Wikipedia: Kansas City, Kansas', url: 'https://en.wikipedia.org/wiki/Kansas_City,_Kansas' },
			{ label: 'KC History (Missouri Valley Special Collections): Why is there a Kansas City in both Kansas and Missouri?', url: 'https://kchistory.org/faq/why-there-kansas-city-both-kansas-and-missouri' },
			{ label: 'KCUR: How KCK And Wyandotte County Unified During Troubled Times', url: 'https://www.kcur.org/community/2015-03-06/how-kck-and-wyandotte-county-unified-during-troubled-times' },
			{ label: 'Wikipedia: State Line Road', url: 'https://en.wikipedia.org/wiki/State_Line_Road' },
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
		],
	},
	{
		slug: 'richmond-va-zip-codes',
		category: 'ZIP Codes',
		title: "Richmond, VA ZIP Codes: All 39, and How a City in No County Spills Into Two",
		description:
			"Richmond is one of Virginia's 38 independent cities -- legally part of no county at all. Its ZIP codes don't honor that line: the full 39-code list, and why 10 of them are filed under Chesterfield or Henrico instead.",
		published: '2026-08-16',
		updated: '2026-08-16',
		coreSummary:
			"USPS assigns 39 ZIP codes with Richmond as the primary place name, but Richmond itself is one of Virginia's 38 independent cities -- since the state's Constitution of 1869-70 took effect in 1870, Virginia's cities have sat outside every county, equal in legal standing to a county rather than nested inside one. Twenty-nine of those 39 ZIP codes fall inside the City of Richmond proper. The other 10 spill into the two counties that surround it, five each into Henrico and Chesterfield, because USPS draws ZIP boundaries around mail-delivery routes rather than municipal lines. A search for \"richmond zip code\" can also mean an entirely different place: Richmond County, Virginia, a rural county on the Northern Neck more than 50 miles away that has no connection to the city at all.",
		sections: [
			{
				heading: "All 39 ZIP codes, and the three jurisdictions behind them",
				body: [
					"Of the 39 ZIP codes USPS lists with Richmond as the primary place name, 29 sit inside the City of Richmond's own boundary. The remaining 10 are split evenly: five fall in Henrico County, which wraps around Richmond's north and east side, and five fall in Chesterfield County, to the south and southwest. Every ZIP in this table carries \"Richmond, VA\" on the mailing address regardless of which of the three it's actually in -- the jurisdiction column below is the only way to tell them apart.",
				],
				table: {
					caption: 'All 39 ZIP codes with "Richmond, VA" as the primary USPS place name, by jurisdiction (per GeoNames.org, checked 2026-08-16)',
					columns: ['ZIP', 'Jurisdiction'],
					rows: [
						['23173', 'City of Richmond'], ['23218', 'City of Richmond'], ['23219', 'City of Richmond'],
						['23220', 'City of Richmond'], ['23221', 'City of Richmond'], ['23222', 'City of Richmond'],
						['23223', 'City of Richmond'], ['23224', 'City of Richmond'], ['23225', 'City of Richmond'],
						['23226', 'Henrico'], ['23227', 'Henrico'], ['23230', 'Henrico'],
						['23232', 'City of Richmond'], ['23234', 'Chesterfield'], ['23235', 'Chesterfield'],
						['23236', 'Chesterfield'], ['23237', 'Chesterfield'], ['23241', 'City of Richmond'],
						['23249', 'City of Richmond'], ['23250', 'Henrico'], ['23260', 'City of Richmond'],
						['23261', 'City of Richmond'], ['23269', 'City of Richmond'], ['23274', 'City of Richmond'],
						['23276', 'City of Richmond'], ['23278', 'City of Richmond'], ['23279', 'City of Richmond'],
						['23282', 'City of Richmond'], ['23284', 'City of Richmond'], ['23285', 'City of Richmond'],
						['23286', 'City of Richmond'], ['23289', 'Henrico'], ['23290', 'City of Richmond'],
						['23291', 'City of Richmond'], ['23292', 'City of Richmond'], ['23293', 'City of Richmond'],
						['23295', 'City of Richmond'], ['23297', 'Chesterfield'], ['23298', 'City of Richmond'],
					],
				},
			},
			{
				heading: "Richmond is legally in no county at all",
				body: [
					"That \"City of Richmond\" jurisdiction in the table above isn't shorthand for a county -- it's the real answer. Richmond is one of Virginia's 38 independent cities, a status that means the city sits entirely outside county government, equal in legal standing to a county rather than a municipality inside one. Virginia's cities were first split from their surrounding counties by the state's Constitution of 1869-70, which took effect in 1870 upon Virginia's readmission to the Union during Reconstruction; the 1902 and current 1971 constitutions carried the arrangement forward. An independent city runs its own schools, courts, and roads without a county layer above it, and its residents don't belong to any county for any legal purpose.",
					"Virginia's 38 independent cities account for nearly all of this kind of jurisdiction in the entire country -- only three other American cities work the same way: Baltimore, Maryland (separated from Baltimore County in 1851); St. Louis, Missouri (voters approved separation from St. Louis County in an 1876 referendum, formalized in 1877); and Carson City, Nevada (consolidated with the former Ormsby County in 1969). Every other city in the United States, no matter how large, sits inside at least one county.",
				],
			},
			{
				heading: "Why 10 of Richmond's ZIP codes land in a county anyway",
				body: [
					"USPS draws ZIP code boundaries around mail-delivery routes, not around municipal or county lines, and it doesn't make an exception for a city that happens to be its own jurisdiction. The 10 ZIP codes assigned to Henrico or Chesterfield in the table above physically extend past Richmond's city limits into the neighboring county, but the post office handling that route still uses \"Richmond\" as the address's place name -- the same mismatch this site has already documented for [Atlanta](/atlanta-zip-codes/), where a fifth of the city's ZIP codes carry an Atlanta address while sitting in DeKalb County rather than Fulton.",
					"Richmond's version is a sharper case than Atlanta's. Atlanta's home county (Fulton) and its overflow county (DeKalb) are both ordinary counties, so swapping one for the other doesn't change the basic kind of government involved. Richmond's home jurisdiction isn't a county to begin with, which makes those 10 ZIP codes the only Richmond-addressed ones that touch county government at all.",
				],
			},
			{
				heading: "Two Richmonds, and two different phone numbers",
				body: [
					"A search for \"Richmond, Virginia\" can also turn up Richmond County, Virginia, a rural county of roughly 9,000 people on the Northern Neck, more than 50 miles northeast of the city with no shared government or boundary. Richmond County's seat is the town of Warsaw; the county was formed in 1692, 178 years before the city gained independent status in 1870, and the two share a name purely by coincidence of colonial-era naming, not by any administrative link. This site has documented an identical naming coincidence before: New York City's [Staten Island is legally Richmond County](/new-york-zip-codes/), a completely separate use of the same name in a completely different state.",
					"Phone numbers don't separate the two Richmonds the way ZIP codes do. Richmond, the independent city, dials on [area code](/how-do-area-codes-work/) 804, in service since it split from 703 in 1973 and overlaid by 686 in February 2024 once the region ran out of new numbers under 804 alone. Richmond County sits inside that same 804/686 footprint too, since the area code covers the wider Richmond metro region, Petersburg, and the Northern Neck together.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Richmond, VA have?',
				answer:
					"USPS lists 39 ZIP codes with Richmond as the primary place name. Twenty-nine sit inside the City of Richmond itself; the other 10 fall in the two surrounding counties, five in Henrico and five in Chesterfield.",
			},
			{
				question: 'What county is Richmond, Virginia in?',
				answer:
					"None. Richmond is one of Virginia's 38 independent cities, a status that places it outside county government entirely -- legally equal to a county rather than located inside one. Ten of its 39 ZIP codes do extend into the two counties that border it, Henrico and Chesterfield, but the city proper isn't part of either.",
			},
			{
				question: "Why do some Richmond ZIP codes belong to Henrico or Chesterfield County?",
				answer:
					"USPS draws ZIP code boundaries around mail-delivery routes rather than municipal or county lines. Ten of Richmond's 39 ZIP codes physically extend past the city's boundary into Henrico or Chesterfield County, but the post office still lists \"Richmond\" as the address's place name for all 39.",
			},
			{
				question: 'Is Richmond County the same place as the city of Richmond?',
				answer:
					"No. Richmond County is a separate, rural county on Virginia's Northern Neck, more than 50 miles from the city, with its own county seat (Warsaw) and no shared government. The two share a name from colonial-era naming, not from any administrative connection -- the same kind of coincidence that makes New York City's Staten Island legally \"Richmond County\" in an unrelated state.",
			},
			{
				question: 'What area code does Richmond, VA use?',
				answer:
					"804, in service since 1973, when it split off from area code 703. The region was overlaid with a second code, 686, in February 2024 once demand for new numbers under 804 alone ran out.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Wikipedia: List of cities and counties in Virginia', url: 'https://en.wikipedia.org/wiki/List_of_cities_and_counties_in_Virginia' },
			{ label: 'VirginiaPlaces.org: Independent Cities, Separate From Counties In Virginia', url: 'http://www.virginiaplaces.org/vacities/independentcities.html' },
			{ label: 'WRIC ABC 8News: What are independent cities and why is Virginia the U.S. state with the most?', url: 'https://www.wric.com/news/virginia-news/what-are-independent-cities-and-why-is-virginia-the-u-s-state-with-the-most/' },
			{ label: 'Wikipedia: Richmond County, Virginia', url: 'https://en.wikipedia.org/wiki/Richmond_County,_Virginia' },
			{ label: 'Wikipedia: Area codes 804 and 686', url: 'https://en.wikipedia.org/wiki/Area_codes_804_and_686' },
		],
	},

	// ---------------------------------------------------------------------
	// Area Code Lists
	// ---------------------------------------------------------------------
	{
		slug: 'texas-area-codes',
		category: 'Area Code Lists',
		title: 'Every Texas Area Code, and the Overlay Stack Behind Each Metro',
		description:
			"Texas has 29 area codes today. Dallas alone stacks four on the same footprint -- the full list, plus how Houston, San Antonio, and Austin overlay theirs too.",
		published: '2026-08-03',
		updated: '2026-08-12',
		coreSummary:
			"Texas has grown from four original 1947 area codes (214, 512, 713, and 915) to 29 today. Dallas alone now runs on four overlaid codes (214/469/972/945); add Fort Worth's own 817/682 pair and the wider metroplex runs on six area codes total. Houston runs on five overlaid codes (713/281/832/346/621). Smaller metros like Waco, Corpus Christi, Abilene, Lubbock, and Laredo still get by on a single, un-overlaid code -- it's only the state's four largest metros that have run out of room.",
		sections: [
			{
				heading: 'All 29 Texas area codes',
				body: [
					"Texas started with four area codes in the original 1947 numbering plan -- 214 for the northeast (Dallas and Fort Worth), 512 for south-central Texas (Austin and San Antonio), 713 for the southeast (Houston), and 915 for the west (El Paso and part of Hudspeth County). Every other Texas code on this list is a descendant of one of those four, created either by splitting off a region or by [overlaying](/how-do-area-codes-work/) an existing area with a second code once the original ran out of numbers.",
				],
				table: {
					caption: 'All 29 Texas area codes',
					columns: ['Area code', 'Region', 'In service since'],
					rows: [
						['210', 'San Antonio metropolitan area', 'Nov 1, 1992'],
						['214', 'Dallas metropolitan area', '1947 (original)'],
						['254', 'Waco, Killeen, Temple, Belton, Stephenville', 'May 25, 1997'],
						['281', 'Houston area', 'Nov 2, 1996'],
						['325', 'Abilene, San Angelo, Sweetwater, Snyder', 'Apr 5, 2003'],
						['346', 'Houston area', 'Jul 1, 2014'],
						['361', 'Corpus Christi, Victoria, and south Texas', 'Feb 13, 1999'],
						['409', 'Beaumont, Galveston, Orange, Port Arthur, Texas City', 'Nov 1, 1982'],
						['430', 'Tyler, Sherman, Longview, Marshall, northeast Texas', 'Feb 15, 2003'],
						['432', 'Midland, Odessa, Big Spring, Alpine, Fort Stockton', 'Apr 5, 2003'],
						['469', 'Dallas metropolitan area (overlay)', 'Jul 1, 1999'],
						['512', 'Austin, San Marcos, central Texas', '1947 (original)'],
						['621', 'Houston area (overlay)', 'Jan 23, 2025'],
						['682', 'Fort Worth, Arlington, Grand Prairie (overlay)', 'Oct 7, 2000'],
						['713', 'Houston area', '1947'],
						['726', 'San Antonio metropolitan area (overlay)', 'Oct 23, 2017'],
						['737', 'Austin and suburbs (overlay)', 'Jul 1, 2013'],
						['806', 'Lubbock, Amarillo, and the Texas Panhandle', '1957'],
						['817', 'Fort Worth, Arlington, Grand Prairie', '1953'],
						['830', 'Del Rio, Kerrville, Eagle Pass, New Braunfels', 'Jul 7, 1997'],
						['832', 'Houston metropolitan area (overlay)', 'Jan 16, 1999'],
						['903', 'Tyler, Sherman, Longview, Marshall, northeast Texas', 'Nov 4, 1990'],
						['915', 'El Paso County and part of Hudspeth County', '1947'],
						['936', 'Nacogdoches, Lufkin, Conroe, Huntsville', 'Feb 19, 2000'],
						['940', 'North of Dallas-Fort Worth: Denton, Wichita Falls', 'May 25, 1997'],
						['945', 'Dallas-Fort Worth metroplex (overlay)', 'Jan 15, 2021'],
						['956', 'Laredo, Harlingen, Brownsville, McAllen', 'Jul 7, 1997'],
						['972', 'Dallas metropolitan area (overlay)', 'Sep 14, 1996'],
						['979', 'Bryan, College Station, Bay City', 'Feb 19, 2000'],
					],
				},
			},
			{
				heading: 'Dallas runs a four-code overlay stack; Houston runs a five-code one',
				body: [
					"214 was Dallas's only area code from 1947 until 1990, when it split off 903 to cover northeast Texas. By 1996, 214 itself had run out of numbers again -- but instead of splitting Dallas geographically a second time, the state overlaid the same footprint with 972, then added 469 as a third overlay in 1999, and 945 as a fourth in 2021. All four codes -- 214, 469, 972, and 945 -- now serve the exact same Dallas metro area simultaneously; which one a given phone gets is essentially random.",
					"[Houston](/houston-zip-codes/) followed an almost identical pattern: 713 was the original 1947 code, split to create 281 in 1996, which was itself overlaid rather than split again -- first by 832 in 1999, then 346 in 2014, then 621 in 2025. Fort Worth (817, overlaid by 682 in 2000) and San Antonio (210, overlaid by 726 in 2017) each run a smaller two-code version of the same pattern; only Austin (512, overlaid by 737) has managed with just two codes so far.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Texas have?',
				answer: '29 as of 2026, up from the four Texas started with in the original 1947 numbering plan (214, 512, 713, and 915).',
			},
			{
				question: 'What area codes does Dallas use?',
				answer:
					'Four overlaid codes serve the same Dallas metro footprint: 214 (the original, from 1947), 972 (added 1996), 469 (added 1999), and 945 (added 2021).',
			},
			{
				question: 'What area codes does Houston use?',
				answer:
					'Five overlaid codes: 713 (original, 1947), 281 (1996), 832 (1999), 346 (2014), and 621 (2025).',
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Original North American area codes', url: 'https://en.wikipedia.org/wiki/Original_North_American_area_codes' },
		],
	},
	{
		slug: 'california-area-codes',
		category: 'Area Code Lists',
		title: "All 41 California Area Codes, Plus the Family Tree Behind LA's Seven",
		description:
			"All 41 California area codes, mapped to region and year in service -- plus how LA split and overlaid its way from one 1947 code, 213, to seven today.",
		published: '2026-08-03',
		updated: '2026-08-17',
		coreSummary:
			"California started with three area codes in 1947 -- 213 (southern California), 415 (northern California), and 916 (the Sacramento area, added slightly later that year) -- and now has 41, more than any other US state. Los Angeles alone has split and overlaid its way from 213 to seven area codes covering the same general metro area today.",
		sections: [
			{
				heading: 'All 41 California area codes',
				body: [
					"California's 41 area codes are the most of any US state, a direct result of the state's population growth outpacing three-digit-code capacity again and again since 1947. The table groups every code with its current region and the date it went into service.",
				],
				table: {
					caption: 'All 41 California area codes',
					columns: ['Area code', 'Region', 'In service since'],
					rows: [
						['209', 'Stockton, Modesto, Merced, central CA', '1958'],
						['213', 'Central Los Angeles', '1947 (original)'],
						['279', 'Sacramento metropolitan area (overlay)', 'Mar 10, 2018'],
						['310', 'Southwestern LA County: Beverly Hills, Santa Monica', 'Nov 2, 1991'],
						['323', 'Downtown LA and surrounding areas (overlay)', 'Jun 13, 1998'],
						['341', 'East Bay coastal: Oakland, Fremont, Berkeley (overlay)', 'Jul 22, 2019'],
						['350', 'Stockton, Modesto, Merced (overlay)', 'Nov 28, 2022'],
						['357', 'Fresno, Hanford, Madera, San Joaquin Valley (overlay)', 'Mar 26, 2025'],
						['369', 'Vallejo, Eureka, northwestern CA (overlay)', 'Feb 1, 2023'],
						['408', 'San Jose, Silicon Valley', '1959'],
						['415', 'San Francisco, Marin County', '1947 (original)'],
						['424', 'Southwestern LA County (overlay)', 'Aug 26, 2006'],
						['442', 'Southeastern desert/mountain CA', 'Nov 21, 2009'],
						['510', 'East Bay coastal: Oakland, Fremont, Berkeley', 'Sep 2, 1991'],
						['530', 'Redding, Chico, Lake Tahoe, northeastern CA', 'Nov 1, 1997'],
						['559', 'Fresno, Hanford, San Joaquin Valley', 'Nov 14, 1998'],
						['562', 'Long Beach, Downey, Whittier', 'Jan 25, 1997'],
						['619', 'San Diego and suburbs', '1982'],
						['626', 'San Gabriel Valley', 'Jun 14, 1997'],
						['628', 'San Francisco, Marin County (overlay)', 'Mar 21, 2015'],
						['650', 'Daly City, Palo Alto, Redwood City', 'Aug 2, 1997'],
						['657', 'Northern Orange County (overlay)', 'Sep 23, 2008'],
						['661', 'Northern LA County, Kern County: Bakersfield', 'Feb 13, 1999'],
						['669', 'San Jose, Silicon Valley (overlay)', 'Nov 20, 2012'],
						['707', 'Vallejo, Eureka, northwestern CA', '1959'],
						['714', 'Northern Orange County', '1951'],
						['738', 'Los Angeles outside the San Fernando Valley (overlay)', 'Nov 1, 2024'],
						['747', 'San Fernando Valley (overlay)', 'May 18, 2009'],
						['760', 'Southeastern desert/mountain CA', 'Mar 22, 1997'],
						['805', 'Ventura, San Luis Obispo, Santa Barbara Counties', '1957'],
						['818', 'San Fernando Valley', 'Jan 7, 1984'],
						['820', 'Ventura, San Luis Obispo, Santa Barbara (overlay)', 'Jun 30, 2018'],
						['831', 'Monterey, San Benito, Santa Cruz Counties', 'Jul 11, 1998'],
						['837', 'Redding, Chico, Lake Tahoe (overlay)', 'Jan 31, 2025'],
						['840', 'SW San Bernardino County (overlay)', 'Feb 23, 2021'],
						['858', 'San Diego and suburbs (overlay)', 'Jun 12, 1999'],
						['909', 'SW San Bernardino, Riverside Counties', 'Nov 14, 1992'],
						['916', 'Sacramento metropolitan area', '1947 (original)'],
						['925', 'East Bay inland: Livermore, Concord, Walnut Creek', 'Mar 14, 1998'],
						['949', 'Southern Orange County: Irvine, Mission Viejo', 'Apr 18, 1998'],
						['951', 'Western Riverside County: Riverside, Corona', 'Jul 17, 2004'],
					],
				},
			},
			{
				heading: 'Los Angeles: from one code in 1947 to seven today',
				body: [
					"213 covered the entire southern third of California when it launched in 1947. Los Angeles's own growth forced five splits off of 213 over the following decades -- 714 (1951, Orange County), 805 (1957, the central coast), 818 (1984, the San Fernando Valley), 310 (1991, the southwestern coast), and 323 (1998, the rest of central LA) -- before the pattern shifted from splitting to overlaying: 424 stacked onto 310 in 2006, 747 onto 818 in 2009, and, after 213 and 323 were formally merged back into a single overlay complex in 2017, a seventh code, 738, was added on top of that combined area in November 2024.",
					"San Francisco followed a similar but smaller path: 415 (1947) split off 408 and 707 in 1959, then 510 in 1991 and 650 in 1997, before finally being overlaid by 628 in 2015 once splitting stopped being an option. Sacramento's 916 split once too -- 530 broke off in 1997 to cover Redding, Chico, and Lake Tahoe -- before 279 was added as an overlay on what remained of 916 in 2018; see this site's [Sacramento ZIP code list](/sacramento-zip-codes/) for how that same county lines up on the postal side.",
					"949's 1998 split from 714 shows the same relief pattern on a smaller scale, and it left one loose end: a strip of Irvine still dials on 714 instead. See this site's [Irvine ZIP code list](/irvine-zip-codes/) for exactly where that boundary falls.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does California have?',
				answer: '41 as of 2026 -- more than any other US state.',
			},
			{
				question: 'What area codes does Los Angeles use?',
				answer:
					'213, 323, 310, 424, 818, 747, and 738 -- seven in all -- currently overlay parts of the [greater LA area](/los-angeles-zip-codes/), all descendants of the single area code, 213, that covered the entire southern third of California in 1947.',
			},
			{
				question: 'What was the very first California area code?',
				answer:
					'California launched with three in 1947: 213 for the southern part of the state, 415 for the north (San Francisco), and 916 for the Sacramento area.',
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 213, 323, and 738', url: 'https://en.wikipedia.org/wiki/Area_codes_213,_323,_and_738' },
			{ label: 'Wikipedia: Area codes 916 and 279', url: 'https://en.wikipedia.org/wiki/Area_codes_916_and_279' },
		],
	},
	{
		slug: 'michigan-area-codes',
		category: 'Area Code Lists',
		title: "Every Michigan Area Code, and the Split Tree Behind Detroit's Newest",
		description:
			"Michigan has 13 area codes today, seven descended from Detroit's original 313 -- here's the full list, plus the split-and-overlay chain behind each one, including the newest, 679.",
		published: '2026-08-10',
		updated: '2026-08-17',
		coreSummary:
			'Michigan started with three area codes in the original 1947 numbering plan -- 313 for Detroit, 517 for Lansing, and 616 for Grand Rapids -- and has split and overlaid its way to 13 today. Detroit\'s 313 alone accounts for seven of them, most recently 679, which began serving new phone lines on November 7, 2025, a month after 10-digit local dialing became mandatory across the Detroit metro.',
		sections: [
			{
				heading: 'All 13 Michigan area codes',
				body: [
					"Michigan's 13 area codes trace back to just three original codes assigned when the North American Numbering Plan launched in 1947. Seven descend from Detroit's 313 alone; the rest split off from Grand Rapids's 616 or Lansing's 517, as the table below shows -- see [how area codes actually work](/how-do-area-codes-work/) for what \"split\" and \"overlay\" mean in practice.",
				],
				table: {
					caption: 'All 13 Michigan area codes',
					columns: ['Area code', 'Region', 'In service since'],
					rows: [
						['231', 'Northwestern Michigan: Traverse City, Muskegon, Ludington, Petoskey', 'Jun 5, 1999'],
						["248", "Oakland County, Detroit's northern suburbs", 'May 10, 1997'],
						['269', 'Southwestern Michigan: Kalamazoo, Battle Creek, Benton Harbor', 'Jul 13, 2002'],
						['313', 'Detroit, Dearborn, the Grosse Pointes, Hamtramck', '1947 (original)'],
						['517', 'Lansing, Jackson, and south-central Michigan', '1947 (original)'],
						["586", "Macomb County, Detroit's northeastern suburbs", 'Sep 22, 2001'],
						['616', 'Grand Rapids, Holland, and southwestern Michigan', '1947 (original)'],
						['679', 'Detroit metro area (overlay on 313)', 'Nov 7, 2025'],
						["734", "Ann Arbor, Ypsilanti, and Detroit's western suburbs", 'Dec 13, 1997'],
						['810', "Flint, Port Huron, and Michigan's Thumb", 'Dec 1, 1993'],
						['906', 'Upper Peninsula: Marquette, Sault Ste. Marie, Escanaba', 'Mar 19, 1961'],
						['947', 'Oakland County (overlay on 248)', 'Sep 7, 2002'],
						['989', 'Bay City, Saginaw, Alpena, and central Michigan', 'Apr 7, 2001'],
					],
				},
			},
			{
				heading: "Detroit's 313 grew into seven of Michigan's 13 codes",
				body: [
					"313 covered the entire Detroit metro area on its own from 1947 until 1993, when the state split off 810 to cover Flint, Port Huron, and the rural Thumb region northeast of the city. 810 was itself split twice more within a decade -- 248 broke off in 1997 to cover Oakland County, and 586 followed in 2001 for Macomb County -- before Oakland County ran out of numbers under 248 alone and got a second, overlaid code, 947, in 2002. Detroit's other direct split, 734, peeled off Ann Arbor and Ypsilanti in 1997.",
					"313 itself kept its original Detroit-Dearborn-Grosse Pointes footprint the whole time, and by the early 2020s was projected to run out of available numbers again -- this time without room left to split off a new geographic area. Michigan's regulator chose an overlay instead: 679 was reserved for the same territory 313 already covered, and went into service for new lines on November 7, 2025. Between the two of them, the seven codes descended from 313 -- 313, 810, 248, 586, 947, 734, and 679 -- now account for just over half of the state's total.",
					"One metro area's original code eventually accounting for the majority of its state's total isn't unique to Michigan -- [California's own area code history](/california-area-codes/) shows the same pattern at a larger scale, where Los Angeles alone now runs on seven area codes, all descended from a single 1947 code, 213.",
				],
			},
			{
				heading: "Grand Rapids and Lansing split off the rest",
				body: [
					"616 covered Grand Rapids and the rest of southwestern Michigan from 1947 until 1961, when the Upper Peninsula split off as 906 -- geographically Michigan's largest area code by far, despite covering one of its smallest populations. 616 split twice more after that: 231 broke off the northwestern Lower Peninsula (Traverse City, Muskegon) in 1999, and 269 took Kalamazoo and Battle Creek in 2002, leaving 616 itself with just the immediate Grand Rapids area.",
					"517 has had the quietest history of Michigan's three originals: it covered Lansing and the south-central part of the state from 1947 and split only once, handing Bay City, Saginaw, and Alpena to the new 989 code in 2001. Unlike 313 and 248, neither 517 nor 616 has needed an overlay yet -- both still run on a single area code today.",
				],
			},
			{
				heading: "679 is under a year old, and it changed how Detroit dials",
				body: [
					"The Michigan Public Service Commission set 679 in motion after an early-2020s projection put 313's number exhaustion in the third quarter of 2025 -- the estimate that triggered the overlay case. That exhaustion date has since been pushed back: thousands-block number pooling and other conservation measures extended 313's runway, and the commission's own 2025 filings put the current projected exhaustion date in late 2027. The overlay itself went ahead on its original schedule regardless. Because 313 already covered a fully built-out urban area with no adjacent territory left to split off, the commission chose an overlay rather than a geographic split -- meaning existing 313 numbers stayed exactly as they were, and new phone lines in the same area became eligible to receive 679 numbers once the overlay went into service.",
					"The overlay came with a dialing change that arrived before the new area code itself did: starting April 7, 2025, callers within the 313 area were asked to begin practicing 10-digit dialing, and it became mandatory for all local calls on October 7, 2025 -- a full month before 679 numbers were actually assigned, starting November 7, 2025. That sequencing is standard for NANPA-coordinated overlays: the dialing change has to be in place first, or a new 10-digit number and an old 7-digit one in the same area code could collide.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Michigan have?',
				answer: '13 as of 2026, up from the three Michigan started with in the original 1947 numbering plan (313, 517, and 616).',
			},
			{
				question: "What is Michigan's newest area code?",
				answer:
					'679, an overlay on Detroit\'s 313 that began receiving new phone line assignments on November 7, 2025.',
			},
			{
				question: 'Do I need to dial 10 digits for local calls in Michigan?',
				answer:
					'It depends on the area code. 10-digit dialing is mandatory in the two overlaid regions -- 313/679 (Detroit metro, mandatory since October 7, 2025) and 248/947 (Oakland County) -- because two area codes share the same territory there. Michigan\'s other nine area codes are not currently overlaid and still allow 7-digit local dialing.',
			},
			{
				question: "What was Michigan's original area code?",
				answer:
					"Michigan launched with three in 1947: 313 for Detroit, 517 for Lansing, and 616 for Grand Rapids.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Michigan Public Service Commission: 313/679 Area Code Relief Options and FAQ', url: 'https://www.michigan.gov/mpsc/-/media/Project/Websites/mpsc/regulatory/telecom/313-679/Area-Code-Relief-Options-and-FAQ.pdf' },
			{ label: 'NANPA: 10-Digit Dialing Required in the Michigan 313 Area Code', url: 'https://www.nanpa.com/sites/default/files/2025-09/MI_313-679_MandatoryDialingPressRelease.pdf' },
		],
	},

	// ---------------------------------------------------------------------
	// Area Code Guides
	// ---------------------------------------------------------------------
	{
		slug: 'how-do-area-codes-work',
		category: 'Area Code Guides',
		title: 'How US Area Codes Actually Work',
		description:
			'A US phone number has three parts, not one. Here is what each part actually identifies, why New York got 212 specifically, and the real difference between a "split" and an "overlay."',
		published: '2026-08-03',
		updated: '2026-08-13',
		coreSummary:
			"A North American phone number is 10 digits split into three parts: a 3-digit area code (NPA), a 3-digit exchange (NXX), and a 4-digit subscriber number. Area codes were originally handed out based on rotary-dial efficiency, not geography -- the busiest cities got the codes that took the least time to dial. When an area runs out of numbers today, the fix is either a split (dividing the region and giving half a new code) or an overlay (adding a second code on top of the same region) -- and since the late 1990s, nearly every fix has been an overlay.",
		sections: [
			{
				heading: 'The three parts of a US phone number',
				body: [
					'Every standard North American number breaks into an area code, an exchange code, and a subscriber number. Telecom engineers call this the NPA-NXX-XXXX format: NPA (Numbering Plan Area) is the area code, NXX is the three-digit exchange that used to map to a specific switching office, and XXXX is the four-digit line number.',
				],
				diagramSvg: NPA_DIAGRAM,
			},
			{
				heading: "212 wasn't random: the original 1947 codes were built around rotary-dial speed",
				body: [
					"When AT&T rolled out the first 86 area codes in 1947, it assigned them using a rule tied to rotary-dial phones, not geography: cities expected to receive the most long-distance calls got the area codes that took the fewest rotary \"pulls\" to dial, since each digit's dial pull took time roughly proportional to its value. New York City, the most-called destination in the country at the time, got 212 -- as low a pull count as a 3-digit code with a required middle digit of 1 could get. Los Angeles got 213, and Chicago got 312, for the same reason.",
					"There was a second rule behind the middle digit specifically: any state or province with more than one area code got a code with 1 as its middle digit (212, 213, 312...), while states with only a single area code got a 0 in the middle instead (202 for Washington D.C., 401 for all of Rhode Island). That's a fossil of the 1947 plan you can still spot in a lot of today's area codes, even though the underlying rotary-dial logic stopped mattering decades ago.",
				],
			},
			{
				heading: 'Split vs. overlay: two different fixes for the same problem',
				body: [
					"An area code eventually runs out of available NXX exchange blocks as an area's population and phone/device count grow. Historically, the fix was a split: draw a line through the region, keep the old code on one side, and assign a brand-new code to the other. Los Angeles's original 213 was split this way five separate times between 1951 and 1998, each time handing off a geographic slice to a new code (714, 805, 818, 310, 323).",
					"Splits have a real cost: everyone on the losing side of the line has to change their number's area code, and businesses have to reprint everything. Starting in the 1990s, the industry mostly switched to overlays instead -- instead of dividing the region, a second area code is layered on top of the exact same geographic footprint, and only new phone numbers get assigned to it. Existing numbers never change, but everyone in an overlay area has to dial all 10 digits (area code included) for every call, even a next-door neighbor. Manhattan is the extreme example: 212 (1947) was overlaid by 646 (1999) and then 332 (2017), both layered on that same Manhattan-only footprint, plus 917 (1992), a citywide overlay that covers all five boroughs and reaches Manhattan too -- so a Manhattan phone number today can carry any of four different area codes, even though only three of them (212, 646, 332) are Manhattan-exclusive.",
				],
			},
			{
				heading: "An area code doesn't reliably tell you a timezone anymore",
				body: [
					"Because area codes map to numbering plan areas that were drawn decades ago and don't get redrawn when state or timezone boundaries shift in practice, and because mobile numbers travel with their owner instead of staying tied to a location, a given area code is a much weaker timezone signal than it looks. A 915 number was assigned in El Paso, Texas, which observes Mountain Time even though the rest of Texas is Central -- and a person who got that number in El Paso in 2015 keeps dialing 915 no matter where in the country they've moved since.",
				],
			},
		],
		faq: [
			{
				question: 'What do the three parts of a phone number mean?',
				answer:
					'The first 3 digits (NPA) are the area code, identifying a numbering plan area. The next 3 (NXX) are the exchange code, historically tied to a specific telephone switching office. The last 4 are the individual subscriber number.',
			},
			{
				question: "What's the difference between a split and an overlay?",
				answer:
					'A split divides a region geographically and assigns the new code to only one side, forcing everyone on that side to change numbers. An overlay adds a second code on top of the exact same region without changing any existing numbers, but requires 10-digit dialing for every local call from then on.',
			},
			{
				question: 'Why did New York City get area code 212?',
				answer:
					"Because the original 1947 numbering plan assigned area codes based on rotary-dial pull count, and New York was the country's busiest long-distance destination -- it got the lowest-pull-count code available among those reserved for multi-code states.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 212, 646, and 332', url: 'https://en.wikipedia.org/wiki/Area_codes_212,_646,_and_332' },
		],
	},
	{
		slug: 'scam-area-codes',
		category: 'Area Code Guides',
		title: "Is There Really Such a Thing as a 'Scam Area Code'?",
		description:
			'Short answer: mostly no. Scammers fake your own area code ("neighbor spoofing"). The one real exception: ten NANP codes tied to the "one ring" scam.',
		published: '2026-08-03',
		updated: '2026-08-04',
		coreSummary:
			'There is no list of domestic US area codes that scammers "use" -- the FCC and FTC\'s own data shows the opposite: robocallers fake your own local area code on purpose, a tactic called neighbor spoofing, so an unfamiliar 415 number can easily not be from the Bay Area at all. The one real, documented exception is the "one ring" scam, which relies on real North American Numbering Plan area codes assigned to a handful of Caribbean nations and territories, not domestic scam-only codes.',
		sections: [
			{
				heading: "Scammers don't have their own area codes -- they fake yours",
				body: [
					"A caller ID showing your own area code feels trustworthy, which is exactly why robocallers exploit it. The FCC's term for this is neighbor spoofing: the call might genuinely originate anywhere, including overseas, but the caller ID display is deliberately falsified to show a number sharing your area code and even your first few exchange digits. The Truth in Caller ID Act makes this illegal when done with intent to defraud, with penalties up to $10,000 per violation -- but the law hasn't stopped the practice, because the technology to fake caller ID is cheap and widely available to robocall operations.",
					'Practically, this means "is 213 a scam area code" is the wrong question. Any area code can appear on a spoofed call, including your own, and the number displayed tells you nothing reliable about who is actually calling.',
					"<div style=\"margin:12px 0;padding:18px 20px;background:#f8fafc;border-left:4px solid #4a5568;border-radius:8px;\"><p style=\"margin:0;font-size:1.05rem;font-style:italic;color:#1e293b;line-height:1.6;\">&ldquo;Neighbor spoofing works because the software behind it lets a caller punch in any number they want, including one that matches your own area code and prefix. Scammers know a familiar-looking number reads as safe, so they mirror it on purpose.&rdquo;</p><p style=\"margin:8px 0 0;font-size:0.8125rem;color:#64748b;\">Michael Kruse, criminal defense lawyer and founder of Kruse Law Firm, whose caseload includes fraud cases</p></div>",
					'The stakes go beyond a nuisance call. Chris Brooks, co-founder of Crypto Asset Recovery, has spent years helping people recover access to lost wallets, which means he also sees how they got taken in the first place. In one case he worked, a client received a call displaying his bank\'s exact local number, the one printed on the back of his card. A caller posing as the fraud department warned him his crypto exchange account was compromised and walked him through "securing" it. He handed over his seed phrase, and the wallet was drained within minutes.',
					"<div style=\"margin:12px 0;padding:18px 20px;background:#f8fafc;border-left:4px solid #4a5568;border-radius:8px;\"><p style=\"margin:0;font-size:1.05rem;font-style:italic;color:#1e293b;line-height:1.6;\">&ldquo;No legitimate institution, not your bank, not your crypto exchange, not a recovery firm, will ever ask for your seed phrase. Ever. If someone does, hang up.&rdquo;</p><p style=\"margin:8px 0 0;font-size:0.8125rem;color:#64748b;\">Chris Brooks, co-founder of Crypto Asset Recovery</p></div>",
				],
			},
			{
				heading: "The real exception: the 'one ring' scam and ten Caribbean NANP codes",
				body: [
					"There is one well-documented pattern where specific area codes really are disproportionately tied to a scam, and it works differently from neighbor spoofing. Eight Caribbean nations and territories are full members of the North American Numbering Plan, meaning their phone numbers use ordinary-looking 3-digit area codes exactly like a US state does -- nothing in the number format signals that it's actually an international call.",
					'The "one ring" (or "Wangiri") scam exploits this directly: an autodialer places a call, lets it ring once, and hangs up before anyone can answer, hoping curiosity drives the recipient to call back. Calling back connects to an international, often premium-rate number, and the recipient gets charged steep per-minute and connection fees that show up later on their phone bill.',
				],
				table: {
					caption: 'NANP area codes the FCC and FTC specifically warn about for the "one ring" scam',
					columns: ['Area code', 'Country/territory'],
					rows: [
						['268', 'Antigua and Barbuda'],
						['284', 'British Virgin Islands'],
						['473', 'Grenada'],
						['649', 'Turks and Caicos Islands'],
						['664', 'Montserrat'],
						['767', 'Dominica'],
						['809 / 829 / 849', 'Dominican Republic'],
						['876', 'Jamaica'],
					],
				},
			},
			{
				heading: 'What to actually do about an unfamiliar call',
				body: [
					'The FTC\'s standing advice, independent of which area code shows up, is simple and doesn\'t require memorizing any list: don\'t answer calls from numbers you don\'t recognize, and never call back a number that rang once and disconnected. If you do answer and something feels off, hang up rather than staying on the line to "verify" who they are. Review your phone bill for unexpected international or premium charges if you did call back a one-ring number, and report the call to your carrier.',
					"If a caller claiming to be your bank, a government agency, or a utility asks you to act urgently, hang up and call the organization back using a number from an old bill or statement, not the one that showed up on your screen. Michael Kruse, a criminal defense lawyer whose caseload includes both sides of fraud cases, says that single habit is what actually stops most of these calls from going anywhere -- verifying independently works regardless of how convincing the spoofed number looked.",
				],
			},
		],
		faq: [
			{
				question: 'Are there area codes that are always scams?',
				answer:
					'No domestic US area code is inherently a scam -- scammers routinely spoof caller ID to show your own local area code. The one real exception is a set of Caribbean NANP codes (268, 284, 473, 649, 664, 767, 809/829/849, 876) tied to the documented "one ring" callback scam.',
				},
			{
				question: 'What is "neighbor spoofing"?',
				answer:
					'The FCC\'s term for a robocaller deliberately faking caller ID to display a number sharing your own area code (and sometimes exchange), making an unfamiliar call look local and trustworthy.',
			},
			{
				question: 'What happens if I call back a "one ring" number?',
				answer:
					"You risk connecting to an international, often premium-rate line and being charged steep per-minute and connection fees, which typically appear later on your phone bill as international or premium-service charges.",
			},
		],
		sources: [
			{ label: 'FCC: "One Ring" Phone Scam', url: 'https://www.fcc.gov/consumers/guides/one-ring-phone-scam' },
			{ label: 'FTC: One Ring Phone Scams', url: 'https://www.ftc.gov/media/one-ring-phone-scams' },
			{ label: 'FCC: Caller ID Spoofing', url: 'https://www.fcc.gov/consumers/guides/spoofing' },
		],
	},
	{
		slug: 'chicago-area-code',
		category: 'Area Code Guides',
		title: 'Chicago Area Codes: 312, 773, 872, and How 312 Became an Island',
		description:
			"312 used to cover all of Chicago and its suburbs. Two splits and an overlay later, it's an enclave -- surrounded by 773, inside the same city.",
		published: '2026-08-10',
		updated: '2026-08-10',
		coreSummary:
			'Chicago runs on three overlaid area codes today -- 312, 773, and 872 -- all serving the exact same footprint inside city limits. 312 started in 1947 as the single code for the whole Chicago area, including the suburbs. A 1989 split carved off the suburbs into 708, and a second split in 1996 carved off every Chicago neighborhood outside downtown into 773, leaving 312 an enclave: a small area code entirely encircled by 773 rather than bordering a different region. 872 overlaid both in 2009 once splitting the city a third time stopped being a workable option.',
		sections: [
			{
				heading: "Chicago's three area codes",
				body: [
					"All three of the area codes below cover the identical geographic footprint -- the [City of Chicago](/chicago-zip-codes/), inside [Cook County](/what-county-is-chicago-in/). Which one a given phone number carries depends only on when it was assigned, not on where in the city its owner lives or works.",
				],
				table: {
					caption: "Chicago's area codes",
					columns: ['Area code', 'Coverage', 'In service since'],
					rows: [
						['312', 'Downtown Chicago and the Loop', '1947 (original)'],
						['773', 'City of Chicago, outside downtown', 'October 12, 1996'],
						['872', 'Overlay covering both 312 and 773', 'November 7, 2009'],
					],
				},
			},
			{
				heading: 'Two splits turned the original 312 into an island',
				body: [
					"312 was one of the original 86 area codes AT&T assigned in 1947, and at the time it covered the entire Chicago metropolitan area -- the city itself plus the surrounding suburbs that would later get their own codes. Chicago's growth forced two separate splits off that original footprint. The first, on November 11, 1989, drew a line around the city limits and handed every suburban number a new code, 708, while every number still inside Chicago kept 312.",
					"The second split, on October 12, 1996, cut through the city itself rather than separating city from suburb again -- a rarer move in US area code history. Chicago outside downtown and the Loop moved to a new code, 773, while the downtown core kept 312. That left 312 as what telecom planners call an enclave area code: a small numbering plan area completely surrounded by a single other area code (773) rather than bordering several different regions the way a typical split-off code does.",
					"By 2008, population and cell phone growth meant even two codes covering the same city weren't enough new numbers. Rather than attempting a third geographic split -- which would have meant redrawing lines through an already-small downtown core -- Illinois regulators added 872 in 2009 as an overlay across the combined footprint of both 312 and 773. Anyone who already had a 312 or 773 number kept it; only new numbers assigned after November 7, 2009 got 872. The [difference between a split and an overlay](/how-do-area-codes-work/) is the same distinction that shaped [Detroit's newest area code, 679](/michigan-area-codes/).",
				],
			},
			{
				heading: 'The Chicago suburbs run their own separate overlay pairs',
				body: [
					"The area codes bordering Chicago -- 847/224 to the north and northwest, 630/331 to the west, 708/464 to the south and west, and 815/779 further out -- are separate numbering plan areas, not part of the city's own 312/773/872 overlay. 708 itself, the code split off Chicago in 1989, later needed its own overlay: 464 was added on top of it in 2022 for the same reason 872 was added downtown, more subscribers than the original code had numbers left to assign.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Chicago have?',
				answer:
					'Three: 312 (the original, from 1947), 773 (added in 1996), and 872 (an overlay added in 2009). All three cover the same area within city limits.',
			},
			{
				question: "What's the difference between 312 and 773?",
				answer:
					"312 covers downtown Chicago and the Loop; 773 covers the rest of the city. Both have been in service since the 1996 split and neither is being phased out -- which number you have depends on when it was assigned, not where you live today.",
			},
			{
				question: 'Why is 312 called an enclave area code?',
				answer:
					"Because it's a small numbering plan area entirely surrounded by a single other code, 773, rather than bordering several different regions the way most split-off area codes do. That happened because Chicago's second split (1996) cut through the city itself instead of separating city from suburb.",
			},
			{
				question: 'Do I need to dial 10 digits for a local Chicago call?',
				answer:
					"Yes. Once an overlay (872, in this case) shares a footprint with existing codes, the North American Numbering Plan requires area code plus number for every local call, not just long-distance ones.",
			},
		],
		sources: [
			{ label: 'Wikipedia: Area code 312', url: 'https://en.wikipedia.org/wiki/Area_code_312' },
			{ label: 'Wikipedia: Area code 773', url: 'https://en.wikipedia.org/wiki/Area_code_773' },
			{ label: 'Wikipedia: Area code 872', url: 'https://en.wikipedia.org/wiki/Area_code_872' },
			{ label: 'Wikipedia: Area codes 708 and 464', url: 'https://en.wikipedia.org/wiki/Area_codes_708_and_464' },
		],
	},
	{
		slug: 'nyc-area-code',
		category: 'Area Code Guides',
		title: 'New York City Area Codes: All Eight, Plus the Manhattan Block Wired Into the Bronx',
		description:
			"NYC runs on eight area codes split into two separate overlay stacks -- one for Manhattan, one for the other four boroughs -- except for the Manhattan neighborhood that uses neither.",
		published: '2026-08-12',
		updated: '2026-08-12',
		coreSummary:
			"New York City is served by eight area codes: 212, 646, and 332 cover Manhattan; 718, 347, 929, and the newly activated 465 cover the Bronx, Brooklyn, Queens, and Staten Island; and 917, added in 1992, is the one code that overlays all five boroughs at once. The two four-borough groups exist because the city's numbering plan split only once, in 1984, dividing Manhattan from everywhere else -- every area code added since has overlaid one side of that line, never both. One neighborhood breaks the pattern: Marble Hill, legally part of Manhattan, dials on the outer-borough codes instead, because its phone lines run through a Bronx switching center.",
		sections: [
			{
				heading: "New York City's eight area codes, and which side of the 1984 line each one sits on",
				body: [
					'New York City had a single area code, 212, from the start of the North American Numbering Plan in 1947 until 1984. Every code added since belongs to one of two separate overlay stacks -- Manhattan\'s or the outer boroughs\' -- with a single exception that crosses both.',
				],
				table: {
					caption: "NYC's area codes and which boroughs each one covers",
					columns: ['Area code', 'Boroughs served', 'In service since'],
					rows: [
						['212', 'Manhattan (except Marble Hill)', '1947 (original)'],
						['718', 'The Bronx, Brooklyn, Queens, Staten Island, and Marble Hill', 'September 1, 1984'],
						['917', 'All five boroughs', 'February 4, 1992'],
						['646', 'Manhattan (except Marble Hill)', 'July 1, 1999'],
						['347', 'The Bronx, Brooklyn, Queens, Staten Island, and Marble Hill', 'October 1, 1999'],
						['929', 'The Bronx, Brooklyn, Queens, Staten Island, and Marble Hill', 'April 16, 2011'],
						['332', 'Manhattan (except Marble Hill)', 'June 10, 2017'],
						['465', 'The Bronx, Brooklyn, Queens, Staten Island, and Marble Hill', 'June 18, 2026'],
					],
				},
			},
			{
				heading: 'The 1984 split, and why the Bronx changed sides eight years later',
				body: [
					"By the early 1980s New York City was working through phone numbers faster than any other US region -- fax lines, dedicated business lines, second household lines, and the first pagers and car phones were all drawing from the same 212 pool. New York Telephone asked state regulators to divide the city, and on September 1, 1984, area code 718 went into service for Brooklyn, Queens, and Staten Island. Manhattan kept 212, and so, at first, did the Bronx.",
					"That arrangement didn't last. On July 1, 1992, the Bronx moved from 212 to 718, aligning it with the other three outer boroughs and leaving 212 as Manhattan's alone. The switch drew objections from Bronx residents and businesses reluctant to give up a code that had become cultural shorthand for New York -- the same resistance outer-borough lawmakers had raised eight years earlier over the original split. It's the only geographic realignment New York City's phone system has gone through; every area code added afterward has overlaid an existing footprint rather than redrawing a boundary, the same shift from splits to overlays that later reshaped [Chicago's numbering plan](/chicago-area-code/) and [Detroit's](/michigan-area-codes/).",
				],
			},
			{
				heading: '917 is the one code that crosses the Manhattan/outer-borough line',
				body: [
					"917 went into service February 4, 1992, as the first overlay area code in North American Numbering Plan history -- a template every overlay since, in New York and elsewhere, has followed. Regulators created it specifically to absorb the city's fast-growing pager and early cell phone market, moving that traffic off 212 and 718 rather than splitting either code's geographic footprint again. The FCC later ruled that reserving an area code for one type of service was not allowed, but by then 917 numbers had already spread across ordinary landlines too.",
					"What makes 917 structurally different from every other NYC code is its footprint: instead of belonging to the Manhattan stack (212, 646, 332) or the outer-borough stack (718, 347, 929, 465), it was assigned across all five boroughs from day one. No area code added to New York City since 1992 has repeated that -- 646 and 332 stayed inside Manhattan's line, and 347, 929, and 465 all stayed inside the outer boroughs'.",
				],
			},
			{
				heading: "Marble Hill: legally Manhattan, dials like the Bronx",
				body: [
					"Marble Hill is a small residential neighborhood at Manhattan's northern tip, and it's the reason every table above needs the words \"except Marble Hill\" or \"and Marble Hill.\" The neighborhood is still legally part of the Borough of Manhattan and New York County, but its area codes are 718, 347, 929, and 465 -- the outer-borough set -- not 212, 646, or 332.",
					"The split traces back to the Harlem River Ship Canal, cut through Manhattan's northern tip in 1895 to connect the Harlem and Hudson Rivers for shipping traffic. The new canal severed Marble Hill from the rest of Manhattan Island, turning it briefly into its own island bounded by the canal on one side and the old, unfilled Harlem River channel on the other. In 1914, that old channel was filled in, physically joining Marble Hill to the Bronx mainland while its legal status as part of Manhattan never changed. Its phone lines were run through a Bronx switching center, and when the Bronx moved to 718 in 1992, Marble Hill's numbers went with it. Residents petitioned to keep 212 at the time; rewiring the neighborhood into a Manhattan switching center instead was judged too costly, and the outer-borough assignment has stuck through every overlay added since.",
				],
			},
			{
				heading: '465 activated in June 2026, the newest addition to either stack',
				body: [
					"New York's Public Service Commission authorized 465 as an overlay on the outer-borough stack -- 347, 718, and 929 -- once regulators projected that group would run out of assignable numbers. New numbers under 465 began going into service June 18, 2026; it's projected to supply roughly 11 more years of numbers for the Bronx, Brooklyn, Queens, Staten Island, and Marble Hill.",
					"465 changes nothing for anyone who already has a number on 212, 718, 917, 646, 347, 929, or 332 -- existing numbers, including their area codes, stay exactly as they are. It only affects new lines ordered in the outer-borough footprint from that date forward, and 10-digit dialing, already required citywide since 917 first overlaid 212 and 718 in 1992, doesn't change either.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does New York City have?',
				answer:
					"Eight: 212, 646, and 332 cover Manhattan; 718, 347, 929, and 465 cover the Bronx, Brooklyn, Queens, and Staten Island; and 917 covers all five boroughs at once.",
			},
			{
				question: "What's the difference between 212 and 718?",
				answer:
					'212 is Manhattan\'s original 1947 area code. 718 was created September 1, 1984 for Brooklyn, Queens, and Staten Island, and the Bronx moved from 212 to 718 on July 1, 1992. That 1984 split is the only geographic realignment New York City\'s numbering plan has gone through -- every code added since has overlaid an existing footprint instead.',
			},
			{
				question: 'Why does Marble Hill use 718 instead of 212, even though it\'s legally part of Manhattan?',
				answer:
					"Marble Hill was cut off from the rest of Manhattan Island by the Harlem River Ship Canal in 1895, then physically joined to the Bronx mainland by landfill in 1914, while remaining legally part of the Borough of Manhattan. Its phone lines run through a Bronx switching center, so when the Bronx moved to area code 718 in 1992, Marble Hill's numbers moved with it -- and it has stayed on the outer-borough side of every overlay added since (347, 929, and 465).",
			},
			{
				question: 'Do I need to dial 10 digits for a local NYC call?',
				answer:
					'Yes. Ten-digit dialing (area code plus number) has been required for every local call in New York City since 917 first overlaid 212 and 718 in February 1992 -- true for all eight of today\'s codes, including the newly added 465.',
			},
			{
				question: "What is 465, New York's newest area code?",
				answer:
					"465 is an overlay added to the outer-borough stack -- 347, 718, and 929 -- covering the Bronx, Brooklyn, Queens, Staten Island, and Marble Hill. New numbers started using it June 18, 2026; it doesn't change any number that already exists.",
			},
		],
		sources: [
			{ label: 'Wikipedia: Area codes 212, 646, and 332', url: 'https://en.wikipedia.org/wiki/Area_codes_212,_646,_and_332' },
			{
				label: 'Wikipedia: Area codes 718, 347, 929, and 465',
				url: 'https://en.wikipedia.org/wiki/Area_codes_718,_347,_929,_and_465',
			},
			{ label: 'Wikipedia: Area code 917', url: 'https://en.wikipedia.org/wiki/Area_code_917' },
			{ label: 'Wikipedia: Overlay complex', url: 'https://en.wikipedia.org/wiki/Overlay_complex' },
			{
				label: 'New York State Department of Public Service: additional NYC area code activated',
				url: 'https://dps.ny.gov/news/additional-new-york-city-area-code-activated-accommodate-future-demand',
			},
			{ label: 'Wikipedia: Marble Hill, Manhattan', url: 'https://en.wikipedia.org/wiki/Marble_Hill,_Manhattan' },
		],
	},
	{
		slug: 'atlanta-area-code',
		category: 'Area Code Guides',
		title: 'Atlanta Area Codes: 404, 770, 678, 470, 943, and the Two That Stopped Taking New Numbers',
		description:
			"Atlanta runs on five area codes today. Two of them, 404 and 678, ran out of prefixes to hand out years ago -- existing numbers still work, but nobody gets a new one.",
		published: '2026-08-19',
		updated: '2026-08-19',
		coreSummary:
			"Metro Atlanta is served by five area codes -- 404, 770, 678, 470, and 943 -- but only three of them, 770, 470, and 943, can still be handed out to new phone lines. 404, the original code covering all of Georgia in 1947, and 678, its first overlay from 1998, both ran through every available prefix years ago; existing 404 and 678 numbers keep working forever, but the North American Numbering Plan Administrator (NANPA) stopped assigning new ones from those two codes once they were exhausted. Georgia's numbering plan split geographically only once, drawing a line at the Interstate 285 perimeter in 1995 -- every code added since has overlaid both sides of that line at once rather than drawing a new one.",
		sections: [
			{
				heading: "Atlanta's five area codes",
				body: [
					"470 and 943 cover the entire combined footprint of 404, 770, and 678 -- there's no way to tell which of the five an Atlanta number carries just by knowing what part of the metro its owner lives in. Assignment depends only on when the line was activated.",
				],
				table: {
					caption: "Atlanta's area codes and whether each still issues new numbers",
					columns: ['Area code', 'Coverage', 'In service since', 'Still issuing new numbers?'],
					rows: [
						['404', 'Georgia (statewide in 1947; Atlanta inside the I-285 perimeter today)', '1947 (original)', 'No -- exhausted October 2013'],
						['770', 'Metro Atlanta outside the I-285 perimeter', 'August 1, 1995', 'Yes'],
						['678', 'Overlay on 404 and 770', 'January 6, 1998', 'No -- exhausted'],
						['470', 'Overlay on 404, 770, and 678', 'February 26, 2010', 'Yes'],
						['943', 'Overlay on 404, 770, 678, and 470', 'March 15, 2022', 'Yes'],
					],
				},
			},
			{
				heading: 'Three splits carved Georgia down to just metro Atlanta',
				body: [
					"404 was one of the [original 86 area codes](/how-do-area-codes-work/) the North American Numbering Plan assigned in 1947, and it started out covering the entire state of Georgia -- not just Atlanta. Three splits over the next 48 years narrowed it down to roughly its present footprint. The first, on July 1, 1954, cut off the southern half of the state as area code 912, leaving 404 running from the Tennessee and North Carolina lines south to Columbus and Augusta.",
					"That boundary held for 38 years. On May 3, 1992, regulators split off nearly everything outside the immediate Atlanta area as area code 706, shrinking 404 to roughly the metro region. The third and final geographic split came just three years later: on August 1, 1995, 404 was divided along the Interstate 285 perimeter highway, with everything outside it becoming area code 770. That 1995 line is the last one Georgia's numbering plan has ever drawn -- every area code assigned to metro Atlanta since has been an overlay across an existing footprint, not a new geographic boundary.",
				],
			},
			{
				heading: 'Three overlays in 24 years, each covering more ground than the last',
				body: [
					"678 went into service January 6, 1998, as an overlay spanning both 404 and 770 at once -- the first time a single new Atlanta code crossed the 1995 perimeter line instead of respecting it. That set the pattern every later addition followed. 470 arrived February 26, 2010, overlaying all three existing codes (404, 678, and 770); NANPA's senior director at the time described it publicly as intended primarily for downtown Atlanta and the surrounding area, though like every other overlay it was assignable anywhere in the combined footprint.",
					"By October 2020, exhaustion analyses were projecting that the four-code combination would run out of assignable prefixes by the second quarter of 2023. The Georgia Public Service Commission approved a fifth code that month, and NANPA assigned 943; it went into service March 15, 2022, overlaying 404, 770, 678, and 470 simultaneously. The new code's footprint reaches well beyond Atlanta's city limits -- it covers the same PSC-defined region as the four codes before it, including Alpharetta, Duluth, Dunwoody, East Point, Forest Park, Gainesville, Griffin, Lawrenceville, Mableton, Marietta, Peachtree City, Roswell, Sandy Springs, Smyrna, and Tucker. The same shift from geographic splits to stacked overlays, once a region runs out of room to redraw lines, shaped [Chicago's numbering plan](/chicago-area-code/) and New York City's outer-borough codes.",
				],
			},
			{
				heading: '404 and 678 still work -- they just can\'t be assigned to anyone new',
				body: [
					"\"Exhausted\" describes the supply of unassigned central office prefixes within a code, not the code itself. Every 404 and 678 number already in service keeps working exactly as before; nothing about exhaustion forces a number to change. What exhaustion means in practice is that phone carriers can no longer request new blocks of numbers from either code -- when a carrier needs numbers for new customers in the Atlanta overlay region, NANPA assigns them from 770, 470, or 943 instead, the three codes that still have prefixes left to give out.",
					"404's exhaustion is documented precisely: every central office prefix in the code had been assigned to a service provider by October 2013, with 678 following not long after. 470 was added in 2010, three years before 404 actually ran dry, because overlay codes are typically requested years ahead of the projected exhaustion date rather than after it arrives -- the same lead time regulators later gave 943 when they approved it in October 2020 for a shortfall not projected until the second quarter of 2023.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Atlanta have?',
				answer:
					'Five: 404 (1947, the original), 770 (1995), 678 (1998), 470 (2010), and 943 (2022). All five cover overlapping territory in and around metro Atlanta.',
			},
			{
				question: 'Can I still get a new phone number with a 404 or 678 area code?',
				answer:
					"No. Both codes ran through every available central office prefix -- 404 by October 2013, 678 not long after -- so NANPA no longer assigns new numbers from either one. Existing 404 and 678 numbers are unaffected and keep working; new lines in the Atlanta overlay region are assigned 770, 470, or 943 instead.",
			},
			{
				question: "What's the difference between 404 and 770?",
				answer:
					"404 is Atlanta's original 1947 area code, narrowed by two earlier splits (912 in 1954, 706 in 1992) to roughly the metro region and then split again on August 1, 1995 along the Interstate 285 perimeter. 770 is what that 1995 split created: everything outside the perimeter. It's the only geographic line Atlanta's numbering plan has ever drawn -- 678, 470, and 943 all overlay both sides of it rather than adding a new boundary.",
			},
			{
				question: 'Do I need to dial 10 digits for a local Atlanta call?',
				answer:
					'Yes. Once 678 overlaid both 404 and 770 in 1998, the North American Numbering Plan required area code plus number for every local call in the combined footprint, not just long-distance ones -- the same rule that applies in every other overlay region.',
			},
		],
		sources: [
			{ label: 'Wikipedia: Area code 404', url: 'https://en.wikipedia.org/wiki/Area_code_404' },
			{ label: 'Wikipedia: Area code 770', url: 'https://en.wikipedia.org/wiki/Area_code_770' },
			{ label: 'Wikipedia: Area codes 678, 470, and 943', url: 'https://en.wikipedia.org/wiki/Area_codes_678,_470,_and_943' },
			{
				label: 'Georgia Public Service Commission: media advisory, Atlanta metro area to get fifth area code',
				url: 'https://psc.ga.gov/site/assets/files/5599/media_advisory_943_area_code_annoucement.pdf',
			},
			{
				label: 'Georgia Public Service Commission: news release, new 943 area code coming to the 404/470/678/770 region',
				url: 'https://psc.ga.gov/site/assets/files/6678/news_release_area_code_march_8_2022.pdf',
			},
			{
				label: 'Atlanta Journal-Constitution: No more 404, 678 area codes given in Atlanta',
				url: 'https://www.ajc.com/news/more-404-678-area-codes-given-atlanta/9SH1szLvrf3e6S7H2aiPZP/',
			},
		],
	},

	// ---------------------------------------------------------------------
	// Area Codes
	// ---------------------------------------------------------------------
	{
		slug: 'miami-area-code',
		category: 'Area Code Guides',
		title: 'Miami Area Codes: 305, 786, 645, and the 1947 Code That Once Covered All of Florida',
		description:
			"Miami-Dade and the Florida Keys share three overlapping area codes today. 305 is the original, dating to 1947 -- back when it covered the entire state of Florida, not just Miami.",
		published: '2026-08-20',
		updated: '2026-08-20',
		coreSummary:
			"Miami-Dade County and the Florida Keys are served by three overlapping area codes today -- 305, 786, and 645 -- but only 305 dates back to 1947, when it was one of the original 86 area codes assigned nationwide and covered the entire state of Florida. Four splits over the following decades peeled the rest of the state away: 813 for the Tampa Bay area in 1953, 904 for north Florida in 1965, 407 for the east coast and Orlando in 1988, and 954 for Broward County in 1995. Once Miami-Dade had nowhere left to split, Florida switched to overlays instead -- 786 arrived in 1998, and 645 followed in 2023, both stacked on the same territory as 305 rather than drawing a new line.",
		sections: [
			{
				heading: "Miami's three overlapping area codes",
				body: [
					"All three of the area codes below cover the identical registered territory: Miami-Dade County plus the Florida Keys portion of Monroe County (mainland Monroe County, on the peninsula, uses a separate code, 239). Which of the three a given number carries comes down entirely to when the line was activated, not which part of that territory its owner lives in.",
				],
				table: {
					caption: "Miami's area codes and when each went into service",
					columns: ['Area code', 'Coverage', 'In service since', 'Still assignable?'],
					rows: [
						['305', 'Miami-Dade County and the Florida Keys (originally all of Florida)', '1947 (original)', 'Yes'],
						['786', 'Overlay on 305', 'March 1, 1998', 'Yes'],
						['645', 'Overlay on 305 and 786', 'August 4, 2023', 'Yes'],
					],
				},
			},
			{
				heading: 'From all of Florida to three overlaid codes on one county',
				body: [
					"305 was one of the 86 original area codes the newly formed North American Numbering Plan assigned in 1947, and back then it covered the entire state of Florida, not just Miami. Growth pulled the state apart from 305 four separate times over the next 48 years. The west coast, from the Tampa Bay area south, split off as 813 in 1953 -- the area was served mostly by General Telephone (GTE) rather than AT&T at the time, so the split ran along a company boundary as well as a geographic one. North Florida, from the Panhandle down to Jacksonville, followed in 1965, moving to 904 with permissive dialing starting July 6 and mandatory dialing beginning January 1, 1966. The east coast from Palm Beach County north through Brevard County, plus the Orlando metro area, split off as 407 on April 16, 1988. The last geographic split came on September 11, 1995, when Broward County was carved out as 954, narrowing 305 down to roughly its footprint today: Miami-Dade County and the Florida Keys.",
					"Regulators predicted the 954 split would delay 305's exhaustion but not prevent it, and they were right -- growth from cell phones and pagers pushed the reconfigured 305 close to running out of numbers again within two years. Rather than split Miami-Dade a fifth time, Florida installed 786 as an overlay on March 1, 1998, the state's first overlay complex; it initially covered only Miami-Dade County before later extending across the rest of 305's territory, including the Keys. That same pattern held when a third code became necessary: the Florida Public Service Commission approved 645 in February 2022, and it went into service August 4, 2023 -- ahead of the combined exhaustion of 305 and 786's assignable prefixes, which regulators had projected would otherwise land sometime that same year. The shift from splitting a growing region to stacking overlays on top of it, once there's no more geography left to divide, is the same shift that shaped [Atlanta's numbering plan](/atlanta-area-code/) once 404 ran out of room to split again -- see [how area codes actually work](/how-do-area-codes-work/) for the split-versus-overlay distinction itself.",
				],
				diagramSvg: `<svg viewBox="0 0 680 190" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: area code 305 begins in 1947 covering all of Florida, its last split (954) happens in 1995, its first overlay (786) arrives in 1998, and a third overlay (645) arrives in 2023">
	<line x1="50" y1="95" x2="630" y2="95" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="80" cy="95" r="9" fill="#131a27"/>
	<text x="80" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1947</text>
	<text x="80" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">305 covers</text>
	<text x="80" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">all of</text>
	<text x="80" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Florida</text>
	<circle cx="290" cy="95" r="9" fill="#b5722f"/>
	<text x="290" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1995</text>
	<text x="290" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Last split:</text>
	<text x="290" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">954 breaks</text>
	<text x="290" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">off Broward</text>
	<circle cx="460" cy="95" r="9" fill="#131a27"/>
	<text x="460" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1998</text>
	<text x="460" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">786 overlays</text>
	<text x="460" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">305 instead</text>
	<text x="460" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">of splitting it</text>
	<circle cx="610" cy="95" r="9" fill="#b5722f"/>
	<text x="610" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2023</text>
	<text x="610" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">645 layers on</text>
	<text x="610" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">as a third</text>
	<text x="610" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">overlay</text>
</svg>`,
			},
			{
				heading: "'Mr. 305' and the market for old Miami numbers",
				body: [
					"Miami's attachment to 305 runs deeper than most cities' relationship with their own area code. Miami native Armando Christian Perez built his entire stage persona around it, going by Pitbull and \"Mr. 305\" since early in his career, and 305-branded tattoos are common enough locally that Miami-Dade natives have their own catchphrase for it: \"305 'til I die.\"",
					"That attachment created an actual resale market. Ed Mance, who runs PhoneNumberGuy.com buying up old business phone numbers in bulk and reselling them, told the Washington Post that 305 is one of his best sellers, trailing only Los Angeles's 310 and New York's 212 -- and he typically prices these secondhand numbers between $299 and $799. The irony, according to Miami New Times' reporting, is that 305 hasn't actually been a guarantee for new registrations in decades: register a new line in Miami-Dade today and you're more likely to end up with 786, or now 645, than the code the city built its identity around.",
				],
			},
			{
				heading: 'The AI voicemail scam FPL is warning Miami customers about',
				body: [
					"Florida Power & Light -- the utility serving most of Miami-Dade -- has been warning customers since May 2026 about a wave of AI-generated scam voicemails impersonating its billing department. One recorded message opens: \"The state of Florida has recently changed its efficiency standards. Your house has been flagged for an energy compliance review.\" Another, using a fabricated employee name, says: \"Hey it's Will from Florida Power and Light compliance department... you can get up to $3,000 dollars in energy rebates and possibly a new air conditioner at no cost\" if the customer calls back immediately.",
					"None of it is real, and it's a different threat from the caller-ID spoofing covered in [is there really a 'scam area code'?](/scam-area-codes/) -- this scam doesn't fake a phone number at all, it fakes an entire voicemail from a fictional employee. FPL says the calls are engineered to extract personal information and payment once a customer dials the number left in the voicemail. The company's actual policy rules out everything the scam relies on: FPL states it will never ask a customer to pay outside its own authorized payment channels, and it will never show up at a home or business, or otherwise demand, payment through a prepaid card, cryptocurrency, or services like Zelle, Cash App, or Venmo to avoid disconnection. If an account is genuinely past due, FPL's own process is to leave a prerecorded message and send a letter asking the customer to call FPL -- not the reverse. Anyone who gets one of these calls should hang up and dial the number printed on an actual FPL bill, not the one left in the voicemail.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Miami have?',
				answer:
					"Three: 305 (1947, the original), 786 (1998), and 645 (2023). All three cover the identical Miami-Dade County and Florida Keys footprint -- which code a number carries depends only on when it was assigned.",
			},
			{
				question: 'Can I still get a phone number with a 305 area code?',
				answer:
					"Technically yes -- 305 hasn't run out of assignable numbers -- but in practice most newly registered lines in Miami-Dade are handed 786 or 645 today rather than 305.",
			},
			{
				question: 'Why is Miami nicknamed "the 305"?',
				answer:
					'After its original 1947 area code. Miami native Pitbull built his stage persona around the nickname "Mr. 305," and local tattoos and the phrase "305 \'til I die" reflect the same attachment to the code.',
			},
			{
				question: 'Do I need to dial 10 digits for a local Miami call?',
				answer:
					"Yes. Once 786 overlaid 305 in 1998, the combined numbering plan area required area code plus number for every local call -- the standard rule in any overlay region, including Miami's.",
			},
			{
				question: "What's the FPL phone scam Miami-area customers should know about?",
				answer:
					'Since May 2026, AI-generated voicemails have impersonated FPL\'s "compliance department," claiming a home was flagged for an "energy compliance review" and dangling up to $3,000 in rebates or a free air conditioner to get customers to call back and hand over payment or personal information. FPL never demands payment this way -- the real company only contacts past-due accounts by prerecorded message and letter, and never asks for the payment methods (prepaid cards, cryptocurrency, Zelle, Cash App, Venmo) the scam relies on.',
			},
		],
		sources: [
			{ label: 'Wikipedia: Area codes 305, 786, and 645', url: 'https://en.wikipedia.org/wiki/Area_codes_305,_786,_and_645' },
			{
				label: 'Miami New Times: 305 Is One of the Most In-Demand Area Codes in the Country',
				url: 'https://www.miaminewtimes.com/news/305-is-one-of-the-most-in-demand-area-codes-in-the-country-7580164/',
			},
			{
				label: 'Local10/WPLG: FPL warns of rise in AI-generated scam calls targeting customers',
				url: 'https://www.local10.com/news/local/2026/05/16/fpl-warns-of-rise-in-ai-generated-scam-calls-targeting-customers/',
			},
			{ label: 'FPL: Protect Yourself from Scams, Fraud and Impostors', url: 'https://www.fpl.com/landing/protect.html' },
		],
	},
	{
		slug: '213-area-code',
		category: 'Area Codes',
		title: "213 Area Code: LA's Original 1947 Number, Now Tripled Up With 323 and 738",
		description:
			"213 was one of California's original 1947 area codes. It now shares a three-way overlay with 323 and 738, covering downtown LA and 19 surrounding cities.",
		published: '2026-08-17',
		updated: '2026-08-21',
		coreSummary:
			"Area code 213 has covered downtown Los Angeles and a ring of neighboring cities since 1947, when it was one of California's original three area codes. Los Angeles's growth split it off five separate times between 1951 and 1998, handing off 714, 805, 818, 310, and finally 323, before regulators reversed course in 2017 and merged 213 back together with 323 into a single overlay, then layered on a third code, 738, in November 2024. All three now serve the exact same footprint: downtown LA plus cities including Beverly Hills, Pasadena, Glendale, Inglewood, and West Hollywood, entirely on Pacific Time.",
		sections: [
			{
				heading: 'Which cities 213 actually covers',
				body: [
					"California's telecom regulator, the CPUC, defines the 213/323/738 numbering plan area as downtown Los Angeles plus a ring of independent cities and unincorporated Los Angeles County land around it: Alhambra, Bell, Bell Gardens, Beverly Hills, Commerce, Cudahy, Glendale, Hawthorne, Huntington Park, Inglewood, Lynwood, Maywood, Montebello, Monterey Park, Pasadena, Rosemead, South Gate, South Pasadena, Vernon, and West Hollywood.",
					"Every incorporated city on that list, and the city of Los Angeles itself, sits inside Los Angeles County, so there's no county split to track here, the way there is for some metro areas this site has covered. All of it runs on Pacific Time, so unlike a number assigned in a border town such as El Paso, a 213 number carries no time-zone ambiguity.",
				],
			},
			{
				heading: 'How one 1947 code became three',
				body: [
					"213 launched in 1947 as one of California's original three area codes, alongside 415 for the north and 916 for the Sacramento area, and originally covered the entire southern third of the state. Los Angeles's population and phone-line growth forced five splits over the following half-century: 714 broke off in 1951 for the rest of Southern California, stretching from San Diego to the Nevada and Arizona borders (that territory itself later split three more times, down to the Orange County footprint 714 covers today), then 805 for the central coast in 1957, 818 for the San Fernando Valley in 1984, 310 for the southwestern coastline on November 2, 1991, and 323 for the rest of central LA on June 13, 1998. Each split followed the same underlying driver as area code splits everywhere: fax lines, pagers, second household lines, and eventually cell phones ate into the pool of available exchange blocks faster than regulators could plan for. Los Angeles's growth pushed 213 through five separate splits, more than any other original California area code. San Francisco's 415 split four times before switching to overlays, and Sacramento's 916 split just once, in 1997; see the full rundown on [California's 41 area codes](/california-area-codes/).",
					"Splitting stopped being the fix after that. In 2017, the CPUC eliminated the boundary between 213 and 323, merging them into a single overlay complex where either code can be assigned anywhere in the shared territory and every call requires all 10 digits. NANPA projected the combined 213/323 pool would run out of assignable numbers by June 2025, so the CPUC approved a third overlay, area code 738, on March 16, 2023; new numbers under 738 started going into service November 1, 2024. Existing 213 and 323 numbers didn't change: 738 only affects numbers issued from that date forward.",
				],
				diagramSvg: `<svg viewBox="0 0 680 190" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: area code 213 created in 1947, splits off 323 in 1998, merges with 323 into one overlay in 2017, and gains a third overlay, 738, in 2024">
	<line x1="50" y1="95" x2="630" y2="95" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="80" cy="95" r="9" fill="#131a27"/>
	<text x="80" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1947</text>
	<text x="80" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">213 begins as</text>
	<text x="80" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">one of CA's</text>
	<text x="80" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">first 3 codes</text>
	<circle cx="290" cy="95" r="9" fill="#b5722f"/>
	<text x="290" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1998</text>
	<text x="290" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Fifth and last</text>
	<text x="290" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">split: 323</text>
	<text x="290" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">breaks off</text>
	<circle cx="460" cy="95" r="9" fill="#131a27"/>
	<text x="460" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2017</text>
	<text x="460" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">213 and 323</text>
	<text x="460" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">merge into</text>
	<text x="460" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">one overlay</text>
	<circle cx="610" cy="95" r="9" fill="#b5722f"/>
	<text x="610" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2024</text>
	<text x="610" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">738 layers on</text>
	<text x="610" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">as third overlay</text>
</svg>`,
			},
			{
				heading: 'Why the hip-hop group 213 named itself after this code',
				body: [
					"213 shows up outside telecom too: Snoop Dogg, Warren G, and Nate Dogg named their group 213 after the area code that had covered their hometown, Long Beach, paying homage to the way an earlier Oakland rap group had named itself 415 after its own area code. The naming was already a step behind the numbering plan by the time the group formed in 1992: Long Beach had moved from 213 to the newly created 310 back on November 2, 1991, and it would move again, from 310 to area code 562, on January 25, 1997, a code that doesn't overlap the downtown-LA territory 213 covers today. The group kept the name through their only studio album in 2004 and up to Nate Dogg's death in 2011, long after Long Beach itself had stopped dialing either 213 or 310. See this site's [full list of Long Beach ZIP codes](/long-beach-zip-codes/) for more on the city itself, including why it runs its own health department instead of routing through Los Angeles County.",
				],
			},
			{
				heading: "The scam LA's utility keeps warning 213 customers about",
				body: [
					"The FCC's general caller-ID warning applies to any area code, including 213: scammers routinely use what the FCC calls neighbor spoofing to fake a local-looking number, covered in more detail on [is there really a 'scam area code'](/scam-area-codes/). What's specific to greater Los Angeles is a scam the city-run Los Angeles Department of Water and Power has repeatedly and publicly warned its customers about: callers impersonating LADWP staff, claiming a customer's water or power will be shut off within minutes unless they pay immediately over the phone, often demanding a prepaid card, a cash-app transfer, or a cash pickup.",
					"LADWP's own scam-alert page states plainly that its representatives never call demanding immediate payment by phone and that the utility has never asked a customer to pay through a cash app or prepaid card. It tells anyone who gets a call like this to hang up and call 1-800-DIAL-DWP (1-800-342-5397) directly to verify before paying anything, and it directs victims to also file a complaint with the Federal Trade Commission.",
				],
			},
		],
		faq: [
			{
				question: 'What cities does the 213 area code cover?',
				answer:
					'Downtown Los Angeles and a ring of neighboring cities and unincorporated Los Angeles County territory, per the CPUC: Alhambra, Bell, Bell Gardens, Beverly Hills, Commerce, Cudahy, Glendale, Hawthorne, Huntington Park, Inglewood, Lynwood, Maywood, Montebello, Monterey Park, Pasadena, Rosemead, South Gate, South Pasadena, Vernon, and West Hollywood.',
			},
			{
				question: 'Is 213 the same area as 323 and 738?',
				answer:
					'Yes. All three cover the exact same numbering plan area: 213 and 323 were merged into one overlay in 2017, and 738 was added on top of both in November 2024. A number issued today could carry any of the three codes with no difference in the territory it covers.',
			},
			{
				question: 'Why did 213 stop splitting and start overlaying?',
				answer:
					"A split forces everyone on the new side of the boundary to change their area code; an overlay adds a second code to the same footprint and leaves every existing number untouched. The industry shifted to overlays nationwide starting in the 1990s for that reason: 213's last split was in 1998 (323), and both expansions since (2017's merge, 2024's 738) have been overlays instead.",
			},
			{
				question: "Where does the hip-hop group 213's name come from?",
				answer:
					"Snoop Dogg, Warren G, and Nate Dogg named their group after area code 213, which had covered their hometown of Long Beach. By the time they formed the group in 1992, Long Beach had already moved to the newer area code 310 (in a 1991 split), and it moved again to 562 in 1997, so the group's name references territory it hadn't technically sat in for years even when the group was new.",
			},
			{
				question: 'Is a call showing a 213 number always really coming from Los Angeles?',
				answer:
					"No. Caller ID can be faked through a tactic the FCC calls neighbor spoofing, where a scammer displays a number in your own area code, including 213, regardless of where the call actually originates. A 213 number on caller ID doesn't by itself guarantee an LA-based caller.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'CPUC: 213/323/738 Area Codes', url: 'https://www.cpuc.ca.gov/213_323_areacodes' },
			{
				label: 'CPUC: New 738 Area Code Coming to the 213-323 Region',
				url: 'https://www.cpuc.ca.gov/news-and-updates/all-news/new-738-area-code-coming-to-the-213-323-region',
			},
			{ label: 'Wikipedia: Area codes 213, 323, and 738', url: 'https://en.wikipedia.org/wiki/Area_codes_213,_323,_and_738' },
			{ label: 'Wikipedia: 213 (group)', url: 'https://en.wikipedia.org/wiki/213_(group)' },
			{ label: 'FCC: Caller ID Spoofing', url: 'https://www.fcc.gov/consumers/guides/spoofing' },
			{ label: 'LADWP: Scam Alert', url: 'https://www.ladwp.com/account/report-problem/scam-alert' },
		],
	},
	{
		slug: '202-area-code',
		category: 'Area Codes',
		title: "202 Area Code: Washington, D.C.'s Original 1947 Number, Overlaid by 771 in 2021",
		description:
			"DC's 202 ran as the district's only area code for 74 years before its first overlay, 771, arrived in 2021 -- not because Washington was quiet, but because its boundary hasn't moved since 1846-47.",
		published: '2026-08-18',
		updated: '2026-08-18',
		coreSummary:
			"Area code 202 has covered the entire District of Columbia, all on Eastern Time, since the North American Numbering Plan began in 1947. Unlike Los Angeles's 213, which split apart five times as its metro area grew, 202 never split at all -- Washington's federal boundary hasn't moved since Congress returned land to Virginia in 1846-47, leaving no annexable suburb for a numbering-plan line to run through. 202 covered all of DC alone until NANPA approved the district's first overlay, area code 771, which went into service November 9, 2021, as the original code's supply of assignable numbers neared exhaustion. That 74-year run made 202 one of the longest-lived single-code numbering plan areas among original 1947 codes serving a major metro area, and its unmistakable federal association has made it a favorite for callers spoofing government agencies.",
		sections: [
			{
				heading: 'All of Washington, D.C. -- and nothing else',
				body: [
					"202 covers the District of Columbia in its entirety: no incorporated cities inside it to carve into a separate code, no counties to divide it (DC isn't part of any state and has none), and no suburbs beyond its own fixed boundary. That's structurally different from every other area code this site has covered -- Los Angeles's 213 shares its footprint with a ring of independent cities, and most metro-area codes stop at city or county lines, but 202, and its 2021 overlay 771, stop exactly where the federal district itself does.",
					"All of it runs on Eastern Time, with none of the border ambiguity a numbering-plan area split across a state line can carry. Ten-digit dialing, standard wherever an overlay exists, has been required for every local call in DC since the permissive dialing period for 771 ended on October 9, 2021.",
				],
			},
			{
				heading: 'Why 202 went 74 years without a split',
				body: [
					"Washington's federal district was established by the Residence Act of 1790 and originally measured ten miles square, spanning land ceded by both Maryland and Virginia. Congress passed the retrocession act returning the Virginia portion to that state in 1846, and Virginia's legislature completed the handover in March 1847, shrinking the district to roughly the 61 square miles of land it holds today -- and that boundary hasn't shifted since. Congress alone holds the constitutional authority to redraw it, and no such redrawing, and no annexation by neighboring Maryland or Virginia, has happened in the nearly 180 years since.",
					"That fixed footprint is why 202 never split the way most growing area codes do. A split works by drawing a new line through a numbering-plan area and handing one side to a fresh code -- California's 213 did it five times as Los Angeles annexed and grew, most recently spinning off 323 in 1998, see [213's own splitting history](/213-area-code/). DC had no annexable land on either side of a potential line; the district's boundary and its area code's boundary have always been the same fixed shape. 202 isn't literally alone in never splitting -- roughly two dozen other original 1947 codes got through without one too, mostly single-code, comparatively low-population states like Maine's 207 or the Dakotas' 701 and 605. What sets 202 apart from that group is that Washington is neither quiet nor sparsely populated: roughly 690,000 people share about 61 square miles of land, a dense capital city that simply had nowhere to grow a second code until an overlay became the only option.",
				],
				diagramSvg: `<svg viewBox="0 0 680 160" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: area code 202 begins in 1947 as Washington, D.C.'s only area code, and its first overlay, 771, goes into service in 2021, 74 years later">
	<line x1="60" y1="80" x2="620" y2="80" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="100" cy="80" r="9" fill="#131a27"/>
	<text x="100" y="50" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1947</text>
	<text x="100" y="107" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">202 begins as</text>
	<text x="100" y="123" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">DC's only code</text>
	<text x="340" y="55" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui" opacity="0.7">74 years, zero splits</text>
	<circle cx="580" cy="80" r="9" fill="#b5722f"/>
	<text x="580" y="50" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2021</text>
	<text x="580" y="107" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">First overlay,</text>
	<text x="580" y="123" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">771, activates</text>
</svg>`,
			},
			{
				heading: "771: DC's first overlay, added right before 202 ran out",
				body: [
					"NANPA projected in 2020 that 202 would exhaust its supply of assignable numbers by late 2022, and approved area code 771 as DC's first overlay that October. Unlike a split, an overlay doesn't reassign any existing number -- 771 simply shares the same district-wide footprint as 202, and every new line ordered after the changeover can be issued either code. A permissive dialing period ran from April 10 to October 9, 2021, letting residents place local calls with either seven or ten digits while carriers reprogrammed their systems; the first central-office codes under 771 went into service November 8 and 9, 2021, and ten-digit dialing became mandatory for every local call in the district from that point on.",
					"Nothing changed for anyone already holding a 202 number -- the overlay only affects lines assigned from November 2021 forward. It's a far later first overlay than most major-metro codes get: New York's 212 got its first overlay, 917, in 1992, just 45 years after 212 began. 202 went 74.",
				],
			},
			{
				heading: 'Why scammers spoof 202 specifically',
				body: [
					"Caller ID spoofing works because a scammer can display almost any number they want, described in more detail on [is there really a 'scam area code'?](/scam-area-codes/) Most spoofing tries to match your own local area code, a tactic the FCC calls neighbor spoofing. Calls faking 202 work differently: they aren't trying to look local to the person receiving them, they're borrowing the area code's association with the federal government to sound like an official call from Washington, regardless of where the recipient actually lives.",
					"The FTC's 2025 fraud data shows this kind of impersonation growing fast: the agency logged more than a million imposter-scam reports for the year, with reported losses up nearly 20% to $3.5 billion, and reports specifically naming a government-agency impersonator up 40% year over year. The FCC's own spoofing guidance names two common motives: making a call look local, and making it look like it's coming from a company or government agency the recipient already trusts. A 202 caller ID fits the second motive by default, since Washington is where most of the federal agencies people worry about being contacted by are actually based.",
				],
			},
			{
				heading: "'The 202': how DC's own press once used the area code as a brand",
				body: [
					"Area code numbers don't usually become names for anything beyond themselves, but 202 was an exception in Washington's own political media for years. The Washington Post built a family of newsletters around the number: The Early 202 covered national politics, The Technology 202 covered tech policy, and The Cybersecurity 202 covered cybersecurity policy -- each one using \"202\" as shorthand for Washington's political and policy establishment rather than spelling out the city's name, the same way Los Angeles's 213 became a name a hip-hop group borrowed from its own hometown code.",
					"The branding didn't last. The Cybersecurity 202 published its final edition in December 2023, and in May 2024 the Post renamed The Early 202 and The Technology 202 to The Early Brief and The Tech Brief, dropping the area-code name entirely. It's still the closest thing DC's numbering plan ever had to the kind of local-culture callback that shows up around other area codes -- just one that, unlike Los Angeles's rap-group namesake, didn't stick around.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Washington, D.C. have?',
				answer:
					"Two: 202, the district's original 1947 area code, and 771, added as an overlay on November 9, 2021. Both cover the same footprint -- all of the District of Columbia -- and existing 202 numbers didn't change when 771 was introduced.",
			},
			{
				question: 'Why did it take so long for DC to get a second area code?',
				answer:
					"Because Washington's boundary hasn't moved since 1846, when Congress returned the Virginia portion of the original federal district to that state. Most area codes eventually split by drawing a new line through growing suburban land, the way California's 213 split five times; DC had no annexable land on either side of any such line, so 202 covered the entire fixed district alone until an overlay, 771, became the only option in 2021.",
			},
			{
				question: 'Do I need to dial 10 digits for a local call in DC?',
				answer:
					'Yes. Ten-digit dialing became mandatory for every local call in the district once the permissive dialing period for 771 ended on October 9, 2021.',
			},
			{
				question: 'Is a call showing a 202 number really from Washington?',
				answer:
					"Not necessarily. The FCC's spoofing guidance names faking a government agency's number as a common motive precisely because 202 reads as official -- a scammer can display any number they choose regardless of where the call actually originates.",
			},
			{
				question: "Did Washington Post newsletters ever use '202' in their names?",
				answer:
					'Yes, for years: The Early 202, The Technology 202, and The Cybersecurity 202 all borrowed DC\'s own area code as shorthand for Washington\'s political and policy world. The Cybersecurity 202 published its final edition in December 2023, and the Post renamed the other two -- to The Early Brief and The Tech Brief -- in May 2024.',
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 202 and 771', url: 'https://en.wikipedia.org/wiki/Area_codes_202_and_771' },
			{ label: 'Wikipedia: District of Columbia retrocession', url: 'https://en.wikipedia.org/wiki/District_of_Columbia_retrocession' },
			{
				label: 'U.S. Census Bureau QuickFacts: District of Columbia',
				url: 'https://www.census.gov/quickfacts/fact/table/DC/PST045225',
			},
			{ label: 'FCC: Caller ID Spoofing', url: 'https://www.fcc.gov/consumers/guides/spoofing' },
			{
				label: 'FTC Consumer Advice: New Trends in Reports of Imposter Scams',
				url: 'https://consumer.ftc.gov/consumer-alerts/2026/05/new-trends-reports-imposter-scams',
			},
			{
				label: 'Digiday: The Washington Post adds AI-generated audio to three newsletters (202-to-Brief rename)',
				url: 'https://digiday.com/media/the-washington-post-adds-ai-generated-audio-to-three-newsletters/',
			},
			{ label: 'The Washington Post: The Cybersecurity 202 (final archive)', url: 'https://www.washingtonpost.com/politics/the-202-newsletters/the-cybersecurity-202/' },
		],
	},
	{
		slug: '646-area-code',
		category: 'Area Codes',
		title: "646 Area Code: Manhattan's First 212 Overlay, and the Status Line It Created",
		description:
			"646 went live July 1, 1999, as Manhattan's first overlay on 212 -- approved so far ahead of launch that a Seinfeld episode joked about it more than a year before a single 646 number existed.",
		published: '2026-08-19',
		updated: '2026-08-19',
		coreSummary:
			"Area code 646 has covered Manhattan, aside from Marble Hill, since July 1, 1999, when it went into service as the borough's first overlay -- a second area code layered onto 212's existing footprint rather than a new line drawn through it. New York's Public Service Commission approved the overlay on December 10, 1997, a year and a half before it actually launched, which is why a Seinfeld episode that aired April 30, 1998 could already build a plotline around Elaine getting stuck with a 646 number more than a year before a single 646 number was in service. A third overlay, 332, joined the same Manhattan footprint in 2017. What sets 646 apart from ordinary overlay history is what it became culturally: for over two decades, it's been the area code marking a caller as someone who didn't get in on 212 in time, and New Yorkers have paid real money to trade up out of it.",
		sections: [
			{
				heading: 'Manhattan, minus one neighborhood',
				body: [
					"646 covers the borough of Manhattan and nothing else, sharing its exact footprint with 212 and 332 -- the full rundown of how those three fit together, plus the four area codes that cover the rest of New York City, is on [this site's NYC area code guide](/nyc-area-code/). The one exception inside Manhattan's own legal boundary is Marble Hill, a neighborhood physically attached to the Bronx since a 1914 landfill project, which dials on the outer-borough codes (718, 347, 929) instead.",
					"All of it runs on Eastern Time, and 10-digit dialing has been required for every local call in the 212/646/917 complex since 917 first overlaid the borough in 1992 -- true for 646 from the day it launched.",
				],
			},
			{
				heading: 'Approved in 1997, activated in 1999 -- and written into a sitcom before it existed',
				body: [
					"By the mid-1990s, 212's original supply of exchange blocks was running down fast enough that the New York Public Service Commission approved a new overlay for the Manhattan numbering plan area on December 10, 1997. The overlay itself, area code 646, didn't actually enter service until July 1, 1999 -- a year and a half gap between regulatory approval and the code going live, a lead time consistent with how NANPA relief planning has staged this site's other Manhattan-area overlays.",
					"That gap produced a genuine oddity: Seinfeld's \"The Maid\" aired April 30, 1998, more than a year before 646 existed as a working area code. In the episode, Elaine gives up her 212 number and is assigned a 646 one instead; when she hands it to a prospective date, he asks about the unfamiliar area code, then crumples the number and walks off. The joke worked because 646 was already public knowledge from the 1997 PSC order, even though nobody could have actually dialed one yet when the episode filmed in March 1998. 646 finally went live 14 months later, and it's been Manhattan's second area code ever since -- joined by a third overlay, 332, on the same footprint on June 10, 2017.",
				],
				diagramSvg: `<svg viewBox="0 0 680 160" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: New York regulators approve the 646 overlay in December 1997, a Seinfeld episode airs referencing it in April 1998, and 646 actually goes into service in July 1999">
	<line x1="55" y1="80" x2="625" y2="80" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="95" cy="80" r="9" fill="#131a27"/>
	<text x="95" y="50" text-anchor="middle" fill="#1a2332" font-size="13" font-weight="700" font-family="ui-sans-serif, system-ui">Dec 1997</text>
	<text x="95" y="107" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">PSC approves</text>
	<text x="95" y="123" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">the 646 overlay</text>
	<circle cx="340" cy="80" r="9" fill="#b5722f"/>
	<text x="340" y="50" text-anchor="middle" fill="#1a2332" font-size="13" font-weight="700" font-family="ui-sans-serif, system-ui">Apr 1998</text>
	<text x="340" y="107" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Seinfeld airs "The</text>
	<text x="340" y="123" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Maid" -- no 646 exists yet</text>
	<circle cx="580" cy="80" r="9" fill="#131a27"/>
	<text x="580" y="50" text-anchor="middle" fill="#1a2332" font-size="13" font-weight="700" font-family="ui-sans-serif, system-ui">Jul 1999</text>
	<text x="580" y="107" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">646 actually</text>
	<text x="580" y="123" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">goes live</text>
</svg>`,
			},
			{
				heading: "How 646 became the 'other' Manhattan code",
				body: [
					"212's exchange blocks were effectively used up by 2009, and the major carriers' general inventory of 212 numbers has stayed depleted since 2010 -- anyone getting a new Manhattan landline or cell line today is almost always handed 646 or 332 instead, per Wikipedia's account of the overlay complex. A 2023 Gothamist report on the rare 212 numbers occasionally cycling back into circulation captured how far New Yorkers have gone to avoid landing on 646 in the first place: David Day, who's run the resale site 212areacode.com since 2009, told the outlet he's sold tens of thousands of 212 numbers, with law firms and hedge funds among his regular buyers because, in his words, a 212 number \"gives them some kind of credibility... established status in Manhattan,\" while a caller ID showing a newer overlay code like 929 reads as \"a relatively new business.\" One buyer he quoted, Willy Gil, bought a 212 number off eBay for $20 specifically to avoid that read, saying he feels he has \"part of the culture of NYC you cannot get anymore.\"",
					"The same Gothamist piece traces the hierarchy back to the Seinfeld episode above, noting the show's writers built an entire plotline -- \"if you can't prove your NYC bona fides, you shall be spit out and rejected by this city\" -- around a 646 caller ID costing Elaine a date. It also cites the New York Times once calling 212 \"the only acceptable area code for a Manhattanite\" and the Wall Street Journal comparing a 212 number to a rent-controlled apartment. 212 got its own real anthem out of the rivalry too: Azealia Banks' breakout single \"212,\" released December 6, 2011, is named after the area code of the Harlem neighborhood where she grew up -- 646 has never had a comparable song built around it.",
				],
			},
			{
				heading: 'The credibility 646 and 212 carry is exactly what debt-collection scammers borrow',
				body: [
					"The FCC's general caller-ID warning applies to any area code: scammers use a tactic the agency calls neighbor spoofing to fake a number that looks local or trustworthy, covered in more detail on [is there really a 'scam area code'?](/scam-area-codes/) The Manhattan-number prestige documented above cuts both ways -- the same credibility that makes law firms and hedge funds pay for a 212 or 646 number is exactly what a spoofed New York caller ID is built to borrow.",
					"In March 2025, the FTC won a federal court order freezing the assets of a phantom debt-collection operation that ran under names including Blackstone Legal Group, Capital Legal Services, and Quest Legal Group, according to the agency's own press release. The operators called and mailed consumers claiming they owed a debt to a payday lender and threatened arrest, wage garnishment, and lawsuits if they didn't pay immediately -- debts the FTC's complaint says never existed. The scheme violated the FTC's rule against impersonating a government agency or business specifically by borrowing names and credibility that made the calls sound like a real law firm, the same dynamic that makes a Manhattan area code worth faking in the first place.",
				],
			},
		],
		faq: [
			{
				question: 'What area does the 646 area code cover?',
				answer:
					"The borough of Manhattan, aside from Marble Hill, which uses the outer-borough codes (718, 347, 929) instead. 646 shares its exact Manhattan footprint with 212 and 332.",
			},
			{
				question: 'When did area code 646 start?',
				answer:
					"646 went into service July 1, 1999, as Manhattan's first overlay on 212. The New York Public Service Commission had approved the overlay a year and a half earlier, on December 10, 1997.",
			},
			{
				question: "Did a Seinfeld episode really reference 646 before it existed?",
				answer:
					'Yes. "The Maid" aired April 30, 1998, and its plot has Elaine getting assigned a 646 number after giving up her 212 -- but 646 didn\'t actually go into service until July 1, 1999, more than a year later. The area code was already public from the 1997 PSC approval, even though no 646 number could be dialed yet when the episode aired.',
			},
			{
				question: 'Is 212 really harder to get than 646?',
				answer:
					"Yes -- the major carriers' general inventory of 212 numbers has been depleted since 2010, so new Manhattan lines are almost always issued 646 or 332 instead. A small number of 212 numbers do cycle back into circulation when an existing line goes dormant, but they're uncommon enough that a resale market for them has existed since at least 2009.",
			},
			{
				question: 'Is a call showing a 646 number always really coming from Manhattan?',
				answer:
					"No. Caller ID can be faked through neighbor spoofing, a tactic the FCC has documented, where a scammer displays a number in an area code chosen to look local or credible -- including 646 -- regardless of where the call actually originates.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 212, 646, and 332', url: 'https://en.wikipedia.org/wiki/Area_codes_212,_646,_and_332' },
			{
				label: 'New York State Public Service Commission: Order Approving Overlay of the 212 Area Code Region (Case 15-C-0168, citing the December 10, 1997 order)',
				url: 'https://documents.dps.ny.gov/public/Common/ViewDoc.aspx?DocRefId=%7B025D2931-3A7A-4437-A37B-0E64D3A3693C%7D&DocTitle=Ordering+Approving+Overlay+of+the+212+Area+Code+Region',
			},
			{ label: 'Wikipedia: The Maid (Seinfeld)', url: 'https://en.wikipedia.org/wiki/The_Maid_(Seinfeld)' },
			{
				label: "Gothamist: Calling all New Yorkers: A few numbers with the 212 area code are back in circulation (Feb. 25, 2023)",
				url: 'https://gothamist.com/arts-entertainment/calling-all-new-yorkers-a-few-numbers-with-the-212-area-code-are-back-in-circulation',
			},
			{ label: 'Wikipedia: 212 (song)', url: 'https://en.wikipedia.org/wiki/212_(song)' },
			{ label: 'FCC: Caller ID Spoofing', url: 'https://www.fcc.gov/consumers/guides/spoofing' },
			{
				label: 'FTC: Court order halts phantom debt collection scheme (Blackstone Legal Group and affiliates, March 2025)',
				url: 'https://www.ftc.gov/news-events/news/press-releases/2025/03/ftc-action-leads-court-order-halting-phantom-debt-collection-scheme-took-millions-consumers',
			},
		],
	},
	{
		slug: '437-area-code',
		category: 'Area Codes',
		title: "437 Area Code: Toronto's 2013 Overlay, Now One of Four Codes Sharing the Same City",
		description:
			"437 overlaid Toronto's 416 in 2013, and a third overlay, 942, joined the same footprint in April 2025 -- CRTC records show Toronto stacking area codes faster than almost any other numbering plan area in the NANP.",
		published: '2026-08-21',
		updated: '2026-08-21',
		coreSummary:
			"Area code 437 has covered the City of Toronto since March 25, 2013, when it overlaid the existing 416 and 647 codes rather than splitting off a piece of the city's territory. It shares that exact footprint with 416 (Toronto's original 1947 code), 647 (Canada's first overlay, added in 2001), and 942, a third overlay the CRTC activated April 26, 2025 after relief-planning forecasts moved Toronto's projected number-exhaustion date up from 2025 to April 2026. A fifth code, 387, is already reserved for whenever the region needs it next. That's a faster overlay cadence than most other major North American cities have needed -- Washington, D.C. went 74 years before its first overlay, while Toronto has added a new code roughly every 12 years since 2001, driven by a single dense rate centre that has never been allowed to split.",
		sections: [
			{
				heading: 'Just the city of Toronto -- not the suburbs around it',
				body: [
					"437 covers exactly the same territory as 416, 647, and 942: the City of Toronto's single rate centre, the amalgamated \"megacity\" created in 1998 out of six former municipalities -- old Toronto, East York, Etobicoke, North York, Scarborough, and York. All four codes share that one footprint; none of them crosses into a separate numbering plan area the way a metro split across a state or county line does.",
					"The whole region sits in the Eastern Time Zone, with no DST carve-out. The Greater Toronto Area's outer suburbs -- Mississauga, Brampton, Markham, and the rest of the Golden Horseshoe -- run on a completely separate four-code stack: 905, 289, 365, and 742, with a fifth code, 537, already reserved for that region too. A call from Mississauga into downtown Toronto crosses between two entirely different numbering plan areas, even though it's a local call either way.",
				],
			},
			{
				heading: 'From one code in 1947 to four by 2025',
				body: [
					"416 was assigned in 1947 as one of the original 86 North American area codes, covering all of southern Ontario including the Golden Horseshoe -- Ontario and Quebec were the only two provinces handed more than one area code when the numbering plan launched that year. Growth pared the territory down twice before Toronto ever got a second code: a 1953 split sent the Kitchener area off to a new code, 519, and an October 1993 split drew a tighter line around Metro Toronto alone, handing the rest of the Golden Horseshoe -- Mississauga, Brampton, Hamilton, the Niagara Peninsula -- to a brand-new code, 905. (Wikipedia's two area-code articles covering this region don't even agree on the exact day that split took effect, landing anywhere from October 2 to October 11, 1993 -- the month itself is the only part every source lines up on.)",
					"When Metro Toronto's six constituent municipalities amalgamated into a single \"megacity\" in 1998, 416 became the only Canadian area code serving just one rate centre and one city outright. That density is what forced every expansion afterward to be an overlay instead of another split: 647 arrived March 5, 2001 as Canada's first-ever overlay area code, 437 followed March 25, 2013, and 942 went into service April 26, 2025 -- with 387 already reserved for whenever the region needs a fifth. Where a growing US metro like Los Angeles kept splitting off entirely new codes (see [213's five splits](/213-area-code/)), Toronto stopped splitting after 1993 and has stacked every subsequent code onto the same city instead.",
				],
				diagramSvg: `<svg viewBox="0 0 700 190" width="100%" style="max-width:700px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: area code 416 begins in 1947, first overlay 647 arrives in 2001, second overlay 437 arrives in 2013, and third overlay 942 arrives in 2025">
	<line x1="55" y1="95" x2="645" y2="95" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="85" cy="95" r="9" fill="#131a27"/>
	<text x="85" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1947</text>
	<text x="85" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">416 begins as</text>
	<text x="85" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Toronto's only</text>
	<text x="85" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">area code</text>
	<circle cx="290" cy="95" r="9" fill="#b5722f"/>
	<text x="290" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2001</text>
	<text x="290" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">647 overlays --</text>
	<text x="290" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Canada's first</text>
	<circle cx="470" cy="95" r="9" fill="#b5722f"/>
	<text x="470" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2013</text>
	<text x="470" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">437 overlays</text>
	<text x="470" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">on 416/647</text>
	<circle cx="620" cy="95" r="9" fill="#131a27"/>
	<text x="620" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2025</text>
	<text x="620" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">942 overlays</text>
	<text x="620" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">all three</text>
</svg>`,
			},
			{
				heading: 'Why regulators added a fourth code within 12 years of the third',
				body: [
					"The CRTC approved 942 in Telecom Decision CRTC 2023-135, issued May 10, 2023. The relief-planning forecast behind that decision had already shifted once: a 2020 exhaust analysis first projected the 416/647/437 complex would run out of assignable numbers in 2025, and a revised September 2022 forecast pushed that date to April 2026. The commission approved 942 to arrive a year ahead of that revised deadline instead of waiting for the complex to actually run dry.",
					"NANPA allots a maximum of 7.92 million numbers to each area code (792 usable prefixes times 10,000 lines apiece), so adding 437 as a third overlay pushed the 416/647/437 stack's combined technical capacity to roughly 24 million numbers for a city of about 2.5 million people -- and that stack still needed reinforcement within about a decade. Toronto's overlay cadence has settled into a tight rhythm since 647 broke the pattern in 2001: 12 years to 437, another 12 to 942. That's a far faster clip than [Washington, D.C. saw before its own first overlay](/202-area-code/) -- 202 covered the entire district alone for 74 years before 771 arrived in 2021. Toronto's single, dense rate centre burns through number blocks at a pace most other NANP metros don't match.",
				],
			},
			{
				heading: '416 carries the same weight Manhattan\'s 212 does',
				body: [
					"Some Toronto callers have paid a premium for a genuine 416 number specifically because it reads as an established, long-running local business rather than a new entrant -- close to the status economy [this site has documented around Manhattan's 212 and 646](/646-area-code/). The city has its own shorthand for the divide: Torontonians call the city itself \"the 416\" and its residents \"416ers,\" while the suburban ring across the 905 stack gets called \"the 905\" and its residents \"905ers.\" 647 doesn't carry the same geographic weight -- it disproportionately serves mobile phones and voice-over-IP lines rather than the fixed Bell landlines that anchor a 416 number to a specific address.",
					"The number shows up in Toronto's culture beyond telecom trivia too. Drake has a tattoo of \"416\" on his ribs marking Toronto as his birthplace, and his 2016 album Views is named for both the 416 and 647 codes, with cover art of him sitting atop the CN Tower. Rapper Maestro Fresh Wes released \"416/905 (TO Party Anthem)\" in 1998, and food chain Pizza Pizza trademarked its own 416 phone number, 967-1111, in 1994, after running it in radio jingles since the 1970s.",
				],
			},
			{
				heading: 'Toronto numbers get spoofed the same way any other area code does',
				body: [
					"The CRTC's own guidance on caller ID spoofing describes a tactic it calls \"neighbouring,\" where a scammer alters the caller ID to match the first six digits of the recipient's own number, making the call look like it's coming from someone nearby -- a 416, 647, 437, or 942 number included. The commission's advice is blunt: caller ID is a convenience feature, not a verification tool, and it warns against relying on it to confirm who's actually calling. Anyone who gets a suspicious call is directed to report it to the Canadian Anti-Fraud Centre, a service jointly run by the RCMP, the Ontario Provincial Police, and the Competition Bureau -- covered in more general terms on [this site's rundown of area-code-based scam claims](/scam-area-codes/).",
					"To fight the underlying spoofing problem rather than just warn about it, CRTC required Canadian carriers to implement STIR/SHAKEN, a call-authentication framework that lets phone networks flag a call as verified or suspicious before it reaches the recipient. The commission's own timeline for that mandate slipped twice -- an initial expectation of March 2019 stretched to September 2020, then again to a final deadline of November 30, 2021, set in Compliance and Enforcement Decision CRTC 2021-123 -- before it became a hard requirement for every carrier's IP-based network, with no exemption even for small telecom providers. It doesn't stop every spoofed call from getting through, but it gives carriers a technical basis for flagging calls that fake a Toronto number without originating anywhere near it.",
				],
			},
		],
		faq: [
			{
				question: 'What area does the 437 area code cover?',
				answer:
					"The City of Toronto -- the same single rate centre shared by 416, 647, and 942. It doesn't extend into the surrounding Greater Toronto Area suburbs, which use a separate 905/289/365/742 stack.",
			},
			{
				question: 'How many area codes does Toronto have?',
				answer:
					"Four as of 2025: 416 (1947), 647 (2001), 437 (2013), and 942 (2025). A fifth code, 387, is already reserved for the region's next overlay.",
			},
			{
				question: 'Why did Toronto need a new area code so soon after 437?',
				answer:
					"CRTC's relief-planning forecasts kept moving up. A 2020 analysis projected the 416/647/437 complex would exhaust its number supply in 2025; a revised September 2022 forecast pushed that to April 2026. CRTC approved 942 in Telecom Decision 2023-135 and activated it April 26, 2025, about a year ahead of the revised exhaustion date.",
			},
			{
				question: 'Does it matter which of Toronto\'s four area codes a number has?',
				answer:
					"Socially, yes, by reputation if not by function. A genuine 416 number carries a premium as a marker of an established local business -- close to the status dynamic documented around Manhattan's 212 code -- while 647 disproportionately serves mobile and VoIP lines rather than fixed local numbers.",
			},
			{
				question: 'Is a call showing a 437 number always really from Toronto?',
				answer:
					"No. The CRTC's own spoofing guidance describes \"neighbouring,\" where scammers alter caller ID to mimic a local number's first six digits -- a tactic that works on any of Toronto's four area codes and doesn't require the call to originate anywhere near the city.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 416, 647, 437, and 942', url: 'https://en.wikipedia.org/wiki/Area_codes_416,_647,_437,_and_942' },
			{ label: 'CRTC: Telecom Decision CRTC 2023-135', url: 'https://crtc.gc.ca/eng/archive/2023/2023-135.htm' },
			{ label: 'CBC: New 942 area code to begin rolling out in Toronto this weekend', url: 'https://www.cbc.ca/lite/story/1.7516271' },
			{ label: 'CRTC: Caller ID Spoofing', url: 'https://crtc.gc.ca/eng/phone/telemarketing/identit.htm' },
			{ label: 'CRTC: Compliance and Enforcement Decision CRTC 2021-123 (STIR/SHAKEN mandate)', url: 'https://crtc.gc.ca/eng/archive/2021/2021-123.htm' },
		],
	},

	// ---------------------------------------------------------------------
	// Counties
	// ---------------------------------------------------------------------
	{
		slug: 'what-county-is-chicago-in',
		category: 'Counties',
		title: 'What County Is Chicago In?',
		description:
			"All 84 of Chicago's ZIP codes sit inside Cook County -- only the city's O'Hare strip dips into DuPage. Cook is the second-most-populous US county, and it's growing again, not losing ground to Harris County.",
		published: '2026-08-03',
		updated: '2026-08-18',
		coreSummary:
			"Every one of the 84 ZIP codes USPS assigns to Chicago sits in Cook County, Illinois -- the only exception is the city's own municipal boundary, which picked up a small, uninhabited strip of DuPage County when Chicago annexed O'Hare Airport in 1956. Cook County was established in 1831, has Chicago as its seat, and contains 135 separate incorporated municipalities beyond Chicago itself. It's the second-most-populous county in the US at roughly 5.19 million people, and it has been growing again since 2023 after losing residents earlier in the decade -- Harris County, Texas (Houston) is the fastest-growing large county nationally and has narrowed the gap, though it still trails Cook by roughly 150,000 people.",
		sections: [
			{
				heading: 'Chicago is entirely inside Cook County',
				body: [
					"All 84 ZIP codes with Chicago as their primary USPS place name sit inside Cook County, Illinois (see the [full Chicago ZIP code list](/chicago-zip-codes/)), and Cook County has been Chicago's home county since the county's creation in 1831 by the Illinois state legislature -- the 54th county established in the state. The one asterisk is the city's own municipal boundary, not its ZIP codes: when Chicago annexed O'Hare Airport in 1956, the deal pulled in a small, uninhabited strip on the airport's southwest edge that actually sits in DuPage County. It's a narrower crossing than [Atlanta's split between Fulton and DeKalb](/atlanta-zip-codes/) -- no Chicago ZIP code or resident is affected, just airport land -- but it means \"Chicago never crosses a county line\" isn't quite literally true.",
				],
			},
			{
				heading: 'Cook County is much bigger than just Chicago',
				body: [
					"Chicago is Cook County's seat and by far its largest city, but the county contains 135 separate incorporated municipalities in total -- 23 cities, 1 town, and 111 villages, either entirely or partially within its boundaries. Well-known Chicago suburbs like Evanston, Oak Park, Cicero, and Skokie are all their own separate municipalities inside Cook County, distinct from Chicago itself even though they're commonly lumped together as \"Chicago\" in casual conversation.",
				],
			},
			{
				heading: "Cook County is the second-largest US county by population, and growing again",
				body: [
					'Cook County\'s population of roughly 5.19 million makes it the second-most-populous county in the country, behind only Los Angeles County, California. Cook lost residents through the pandemic years, bottoming out at about 5.13 million in 2022, but it has grown every year since -- the Census Bureau\'s most recent estimate (July 2025) puts the county about 84,000 below its 2020 count, not still falling. [Harris County, Texas](/what-county-is-houston-in/) (Houston\'s home county) has been the fastest-growing large county in the US, adding roughly 106,000 residents in a single year (2023 to 2024), and it has narrowed the distance to Cook -- but Cook still led by about 150,000 people as of the latest count, and whether Harris eventually overtakes it is not yet a settled trend.',
				],
			},
		],
		faq: [
			{
				question: 'What county is Chicago in?',
				answer:
					"Chicago's ZIP codes are entirely inside Cook County -- all 84 of the city's ZIP codes fall within it, with no split into a neighboring county. (The city's own boundary does dip into a small, uninhabited corner of DuPage County at O'Hare Airport, but that sliver isn't part of any Chicago ZIP code.)",
			},
			{
				question: 'What is the county seat of Cook County?',
				answer: 'Chicago is the county seat of Cook County, and by far its largest city.',
			},
			{
				question: 'Is Cook County the same as Chicago?',
				answer:
					"No -- Cook County is much larger and contains 135 separate municipalities beyond Chicago itself, including well-known suburbs like Evanston, Oak Park, and Cicero.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Cook County, Illinois -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Cook_County,_Illinois' },
			{ label: "O'Hare, Chicago -- Wikipedia (community area straddling Cook and DuPage counties)", url: 'https://en.wikipedia.org/wiki/O%27Hare,_Chicago' },
			{ label: 'US Census Bureau: Vintage 2025 population estimates for counties (April 2020 to July 2025)', url: 'https://www.census.gov/newsroom/press-releases/2026/2025-popest-metro-micro-counties.html' },
		],
	},
	{
		slug: 'what-county-is-houston-in',
		category: 'Counties',
		title: 'What County Is Houston In?',
		description:
			"Houston's 178 ZIP codes sit entirely inside Harris County -- only small annexed strips of the city itself dip into Fort Bend and Montgomery. Harris is closing the population gap on Chicago's Cook County.",
		published: '2026-08-03',
		updated: '2026-08-20',
		coreSummary:
			"Every one of the 178 ZIP codes USPS assigns to Houston sits in Harris County, Texas. Houston's actual city limits are a little wider than that: annexation over the decades has pulled small pieces of the city into Fort Bend and Montgomery counties too. Harris County itself was founded in December 1836, with Houston named its county seat that same month. It's currently the third-most-populous county in the US at roughly 5.05 million people and is growing faster than any other large county in the country -- narrowing the gap with Cook County, Illinois (Chicago), though Cook still held a lead of roughly 150,000 people as of the latest Census Bureau estimate.",
		sections: [
			{
				heading: 'Houston is entirely inside Harris County',
				body: [
					"Every one of the 178 ZIP codes USPS lists with Houston as the primary place name sits inside Harris County, Texas (see the [full Houston ZIP code list](/houston-zip-codes/)) -- no cross-county split at the ZIP level the way some major US cities have. That distinction only holds at the ZIP-code level, though. Houston's actual city limits are wider: annexation over the decades pulled small slices of southwest and northeast Houston into Fort Bend and Montgomery counties, so the city itself crosses county lines even though none of its ZIP codes do. Harris County was founded on December 22, 1836, and organized the following March; Houston was named the county seat that same December, and has held the role ever since. The county takes its name from John Richardson Harris, who founded the town of Harrisburg on Buffalo Bayou a decade earlier, in 1826.",
				],
			},
			{
				heading: 'Harris County is closing in on the second-largest spot in the US',
				body: [
					"Harris County's population of roughly 5.05 million currently ranks third nationally, behind Los Angeles County, California and [Cook County, Illinois (Chicago)](/what-county-is-chicago-in/). Harris County added about 106,000 residents in a single 12-month period (2023 to 2024) -- more than any other county in the country -- and it has kept growing faster than Cook County since, even though Cook itself returned to growth after a pandemic-era dip rather than continuing to shrink. Harris still trailed Cook by roughly 150,000 people as of the Census Bureau's most recent estimate (July 2025); whether that gap closes further is not yet a settled trend.",
				],
			},
		],
		faq: [
			{
				question: 'Is Houston in Harris County?',
				answer: "Yes, for ZIP codes -- every one sits inside Harris County. Houston's actual city limits are slightly wider, though: annexation has pulled small pieces of the city into Fort Bend and Montgomery counties over the years, just not any area with a Houston-named ZIP code.",
			},
			{
				question: 'When was Harris County founded?',
				answer: 'Harris County was founded on December 22, 1836, and organized in March 1837, with Houston named its county seat in December 1836.',
			},
			{
				question: 'Is Harris County the largest county in Texas?',
				answer: "Yes, Harris County is the most populous county in Texas and the third-most-populous in the entire United States.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Harris County, Texas -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Harris_County,_Texas' },
			{ label: 'Houston -- Wikipedia (municipal boundary spans Harris, Fort Bend, and Montgomery counties)', url: 'https://en.wikipedia.org/wiki/Houston' },
			{ label: 'Axios Houston: Harris County poised to become 2nd most populous county', url: 'https://www.axios.com/local/houston/2025/03/13/harris-county-second-largest-county-by-population-houston-migration-boom' },
			{ label: 'US Census Bureau: Vintage 2025 population estimates for counties (April 2020 to July 2025)', url: 'https://www.census.gov/newsroom/press-releases/2026/2025-popest-metro-micro-counties.html' },
		],
	},

	// ---------------------------------------------------------------------
	// International Dialing
	// ---------------------------------------------------------------------
	{
		slug: 'how-to-call-mexico-from-us',
		category: 'International Dialing',
		title: 'How to Call Mexico From the US (2026 Format)',
		description:
			"011 + 52 + the 10-digit number -- and since Mexico's 2019 dialing reform, mobile numbers no longer need an extra digit. A lot of guides online still describe the old, retired format.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"Dial 011, then 52 (Mexico's country code), then the 10-digit local number -- the same format for landlines and mobiles alike. Mexico eliminated its old 01/044/045 prefix system in a 2019 dialing reform, so any guide still telling you to add an extra digit for a Mexican cell phone is describing a format that stopped working years ago.",
		sections: [
			{
				heading: 'The current format',
				body: [
					"Calling Mexico from a US landline: dial 011, then 52, then the 10-digit number. From a mobile phone or most VoIP services, you can substitute a \"+\" for the 011 -- so +52 followed by the 10 digits works the same way.",
				],
				table: {
					columns: ['Step', 'What to dial'],
					rows: [
						['1. Exit code (landline)', '011'],
						['1. Exit code (mobile/VoIP)', '+'],
						['2. Country code', '52'],
						['3. Local number', '10 digits, area code included'],
					],
				},
			},
			{
				heading: "Mexico's 2019 reform: no more extra digit for mobile numbers",
				body: [
					'Before August 2019, calling a Mexican mobile number required inserting an extra "1" after the 52 country code, and domestic Mexican calls used separate 01, 044, and 045 prefixes depending on whether the call was long-distance or to a cell phone. Mexico\'s telecom regulator eliminated all of that in the 2019 reform: every Mexican number, landline or mobile, is now dialed the same simple way, with no extra digit and no prefix distinction. Plenty of "how to call Mexico" guides published before 2019 are still online and still describe the retired format -- if a source tells you to dial an extra 1 for a Mexican cell phone, it\'s out of date.',
				],
			},
			{
				heading: 'A worked example',
				body: ["A Mexico City landline formatted as 55-1234-5678 becomes 011 52 55 1234 5678 when dialed from a US landline, or +52 55 1234 5678 from a mobile."],
			},
		],
		faq: [
			{
				question: 'Do I still need to add a 1 to call a Mexican cell phone?',
				answer:
					"No. Mexico's August 2019 dialing reform eliminated the extra digit for mobile numbers -- landlines and cell phones are now dialed with the exact same 011 + 52 + 10-digit format.",
			},
			{
				question: "What is Mexico's country code?",
				answer: '52.',
			},
			{
				question: 'Can I just dial +52 instead of 011 52?',
				answer: 'Yes, on a mobile phone or most VoIP services -- the "+" substitutes for the 011 exit code and works identically.',
			},
		],
		sources: [
			{ label: 'FCC: International Long-Distance Calling Made Simple', url: 'https://www.fcc.gov/consumers/guides/international-long-distance-calling-made-simple-tip-sheet' },
		],
	},
	{
		slug: 'us-country-code',
		category: 'International Dialing',
		title: 'The US Country Code Is +1, and 19 Other Places Share It',
		description:
			"+1 isn't unique to the United States -- Canada and 18 Caribbean nations and territories dial out under the same code, and most of them didn't get their own area code until the 1990s.",
		published: '2026-08-05',
		updated: '2026-08-05',
		coreSummary:
			"The US country code is +1, but +1 alone doesn't tell you a number is American. Twenty places share it under the North American Numbering Plan (NANP): the US and its territories, Canada, and 18 Caribbean nations and territories, from the Bahamas to Trinidad and Tobago. Most of those islands didn't get their own area code until the 1990s -- before that, calls to more than a dozen of them all funneled through one shared area code, 809. The only way to tell a US number from a Bahamian, Jamaican, or Bermudian one dialed under the same +1 is the three-digit area code that follows it.",
		sections: [
			{
				heading: '+1 belongs to 20 places, not just the United States',
				body: [
					"NANPA, the organization that assigns every area code used across the US, Canada, and the Caribbean, counts 20 member countries and territories that all dial out under the shared +1 country code: the United States and its territories, Canada, and 18 Caribbean nations and territories, from Anguilla to Turks and Caicos. Nothing about a +1 number's format signals which of those 20 it actually belongs to -- the country code by itself only narrows a call down to North America and the Caribbean, not to a specific country. The three-digit area code that follows +1 is what actually does that work, the same way it does inside the US (see [how US area codes actually work](/how-do-area-codes-work/)).",
				],
				table: {
					caption: 'NANP members outside the US and Canada, and their area code(s)',
					columns: ['Country/territory', 'Area code(s)'],
					rows: [
						['Anguilla', '264'],
						['Antigua and Barbuda', '268'],
						['Bahamas', '242'],
						['Barbados', '246'],
						['Bermuda', '441'],
						['British Virgin Islands', '284'],
						['Cayman Islands', '345'],
						['Dominica', '767'],
						['Dominican Republic', '809, 829, 849'],
						['Grenada', '473'],
						['Jamaica', '876'],
						['Montserrat', '664'],
						['Sint Maarten', '721'],
						['St. Kitts and Nevis', '869'],
						['St. Lucia', '758'],
						['St. Vincent and the Grenadines', '784'],
						['Trinidad and Tobago', '868'],
						['Turks and Caicos', '649'],
					],
				},
			},
			{
				heading: "Most of that list didn't exist as separate area codes until the 1990s",
				body: [
					'Until the mid-1990s, nearly all of the NANP\'s Caribbean members shared a single area code, 809, with no way to tell one island\'s number from another\'s just by looking at it. NANPA split that code apart in stages: Bermuda\'s 441 went first, in 1995, followed by Puerto Rico\'s 787 on March 1, 1996, the Bahamas\' 242 on October 1, 1996, and Barbados\' 246 later that same year. Saint Lucia\'s 758 began permissive dialing in July 1996, Saint Kitts and Nevis\'s 869 that October, and Saint Vincent and the Grenadines didn\'t get its own 784 until June 1998. The Dominican Republic split off from 809 over an even longer stretch, adding overlay codes 829 and then 849 as the original code ran out of numbers to assign.',
					"Sint Maarten's 721 is the newest addition on the list: it wasn't assigned until 2011, the year after Sint Maarten became its own constituent country within the Kingdom of the Netherlands rather than a district of the old Netherlands Antilles. The numbering plan keeps tracking political geography, not just running out of digits.",
				],
			},
			{
				heading: 'How to actually dial a US number from abroad',
				body: [
					"Calling a US number from outside the NANP works the same way as calling any other +1 destination: dial your own country's international exit code, then 1, then the 10-digit US number (area code plus the 7-digit line). Most of the world dials out with 00 as that exit code -- the US and Canada are two of the few places that use 011 instead, which only matters if you're calling out of North America, not into it. On a mobile phone or most VoIP apps, a leading + does the same job as the exit code and works from almost anywhere.",
					'A US number written as (415) 555-0142 becomes 00 1 415 555 0142 when dialed from the UK or most of the rest of the world, or +1 415 555 0142 from a mobile.',
				],
			},
			{
				heading: "A +1 number isn't automatically American, and it isn't automatically safe either",
				body: [
					'The shared +1 code has a real practical downside: eight of the Caribbean NANP codes above -- 268, 284, 473, 649, 664, 767, 809/829/849, and 876 -- are the specific area codes tied to the "one ring" scam, where an autodialer calls once and hangs up, hoping the recipient calls back into a premium-rate international line. See [Is There Really Such a Thing as a \'Scam Area Code\'?](/scam-area-codes/) for how that scam works and what the FCC and FTC recommend doing about it.',
				],
			},
		],
		faq: [
			{
				question: 'What is the US country code?',
				answer:
					"+1 -- but it isn't unique to the United States. Canada and 18 Caribbean nations and territories, from the Bahamas to Trinidad and Tobago, dial out under the same +1 code as part of the North American Numbering Plan.",
			},
			{
				question: 'How do I dial a US phone number from another country?',
				answer:
					"Most of the world dials your own country's exit code (00, in most places) before 1, then the full 10-digit US number including the area code. Callers from Canada skip the exit code entirely -- Canada and the US share the same numbering plan, so a Canada-to-US call is just 1 plus the 10-digit number, identical to a domestic long-distance call. A leading + substitutes for the exit code on most mobile phones.",
			},
			{
				question: 'If a phone number starts with +1, is it definitely from the US?',
				answer:
					'No. +1 only narrows a number down to one of 20 North American Numbering Plan members -- the US, Canada, or 18 Caribbean nations and territories. The three-digit area code that follows +1 is what actually identifies the country.',
			},
		],
		sources: [
			{ label: 'NANPA: About the North American Numbering Plan', url: 'https://www.nationalnanpa.com/about_us/abt_nanp.html' },
			{ label: 'FCC: International Long-Distance Calling Made Simple', url: 'https://www.fcc.gov/consumers/guides/international-long-distance-calling-made-simple-tip-sheet' },
			{ label: 'Wikipedia: Area codes 809, 829, and 849', url: 'https://en.wikipedia.org/wiki/Area_codes_809,_829,_and_849' },
			{ label: 'Wikipedia: Area code 721 (Sint Maarten)', url: 'https://en.wikipedia.org/wiki/Area_code_721' },
			{ label: 'Wikipedia: Area code 784 (Saint Vincent and the Grenadines)', url: 'https://en.wikipedia.org/wiki/Area_code_784' },
		],
	},
	{
		slug: 'how-to-call-philippines-from-usa',
		category: 'International Dialing',
		title: 'How to Call the Philippines From the US (Country Code +63)',
		description:
			"Dial 011, then 63, then the area or mobile code with the leading 0 dropped. Manila's landlines quietly gained an eighth digit in a 2019 regulatory migration.",
		published: '2026-08-06',
		updated: '2026-08-06',
		coreSummary:
			"Dial 011, then 63 (the Philippines' country code), then the area or mobile code with its leading 0 dropped, then the rest of the local number. A Manila landline written domestically as (02) 8123 4567 becomes 011 63 2 8123 4567; a mobile number written as 0917 123 4567 becomes 011 63 917 123 4567. The leading 0 on Philippine area and mobile codes is a domestic trunk prefix -- the same rule that applies across most of the world -- and it's dropped, not replaced, when the +63 country code takes its place.",
		sections: [
			{
				heading: 'Dialing the Philippines: country code 63, step by step',
				body: [
					"Calling the Philippines from a US landline: dial 011, then 63, then the area or mobile code with its leading 0 removed, then the remaining digits. From a mobile phone or most VoIP services, a \"+\" takes the place of the 011, so +63 followed by the same digits gets you there just as reliably.",
				],
				table: {
					columns: ['Step', 'What to dial'],
					rows: [
						['1. Exit code (landline)', '011'],
						['1. Exit code (mobile/VoIP)', '+'],
						['2. Country code', '63'],
						['3. Area/mobile code', 'drop the leading 0'],
						['4. Local number', 'remaining digits'],
					],
				},
			},
			{
				heading: "Manila's one-digit area code, and the 8-digit landline switch nobody advertised",
				body: [
					"Metro Manila's area code is just \"2\" -- written domestically as 02, it's the only single-digit area code left in the Philippines, a legacy of the capital region getting numbered first, before the rest of the country's multi-digit scheme was assigned. Every other Philippine area code runs two to four digits.",
					"What's easy to miss, including in a lot of older \"how to call the Philippines\" guides still online, is that Metro Manila landlines quietly grew an eighth digit in 2019. The National Telecommunications Commission (NTC) ordered the migration in Memorandum Order No. 10-10-2017, originally set for March 2019 and then pushed to October 6, 2019 to give banks and card issuers time to update their systems. Each carrier inserted its own single \"PTE\" (public telecommunications entity) identifier digit at the front of the old 7-digit number -- Globe's assigned digit was 7, so an existing number like (02) 576-4567 became (02) 7576-4567 overnight, with no change to the area code itself. The area code 02 also covers a handful of towns just outside Metro Manila proper, including parts of Rizal province, San Pedro in Laguna, and Bacoor in Cavite -- calling any of those numbers from the US uses the identical 011 63 2 format.",
				],
			},
			{
				heading: 'Mobile numbers all start with 9, and the leading 0 is not part of the number',
				body: [
					'Philippine mobile numbers are reserved under prefixes starting with 9 -- written domestically with a leading trunk 0, as in 0917 123 4567. That 0 is dialing plan housekeeping, not part of the subscriber\'s actual number, which is why it disappears rather than getting replaced by anything when you call from abroad: 0917 123 4567 becomes 011 63 917 123 4567, an even 10 digits after the country code, matching the area-code rule exactly.',
				],
			},
			{
				heading: 'Worked examples',
				body: [
					"A Metro Manila landline formatted domestically as (02) 8123 4567 becomes 011 63 2 8123 4567 from a US landline, or +63 2 8123 4567 from a mobile. A Philippine mobile number written as 0917 123 4567 becomes 011 63 917 123 4567, or +63 917 123 4567.",
					"The Philippines shares this exit-code-plus-country-code shape with most international destinations -- see [how to call Mexico from the US](/how-to-call-mexico-from-us/) for a comparison, and [the US country code](/us-country-code/) for the same drop-the-leading-digit logic working in the other direction, into the US instead of out of it (most callers outside North America dial 00, not 011, before the US's own +1).",
				],
			},
		],
		faq: [
			{
				question: "What is the Philippines' country code?",
				answer: '63.',
			},
			{
				question: 'Do I need to add a PTE digit myself when calling a Metro Manila landline?',
				answer:
					"No. The extra digit that Metro Manila landlines gained in the NTC's October 2019 migration (for example, Globe's 7) is already part of the current 8-digit local number -- you dial it as part of step 4, the same as any other digit. There's no separate digit to add on top of what the number's owner gives you.",
			},
			{
				question: 'Can I just dial +63 instead of 011 63?',
				answer:
					'Yes -- on a mobile phone or most VoIP apps, holding down "0" or tapping "+" gets you the same result as dialing 011, so +63 917 123 4567 reaches the same number as 011 63 917 123 4567.',
			},
		],
		sources: [
			{ label: 'Wikipedia: Telephone numbers in the Philippines', url: 'https://en.wikipedia.org/wiki/Telephone_numbers_in_the_Philippines' },
			{ label: 'Philippine News Agency: Globe to adopt 8-digit landline numbers starting March 2019', url: 'https://www.pna.gov.ph/articles/1056843' },
			{ label: 'FCC: International Long-Distance Calling Made Simple', url: 'https://www.fcc.gov/consumers/guides/international-long-distance-calling-made-simple-tip-sheet' },
		],
	},
	{
		slug: 'how-to-call-australia-from-us',
		category: 'International Dialing',
		title: 'How to Call Australia From the US (Country Code +61)',
		description:
			"Dial 011, then 61, then the area code with its leading 0 dropped -- one of just four area codes that cover the entire country, the last survivors of a renumbering that retired dozens of others.",
		published: '2026-08-20',
		updated: '2026-08-20',
		coreSummary:
			"Dial 011, then 61 (Australia's country code), then the area code with its leading 0 dropped, then the local number. Australia's landlines run on just four area codes for the whole country -- 02 for Sydney and the Central East region, 03 for Melbourne and the South-east (Tasmania included), 07 for Brisbane and the rest of Queensland, and 08 for Adelaide, Perth, and the Northern Territory -- the survivors of a 1994-1998 renumbering that retired dozens of smaller codes, including a four-digit exception unique to Kangaroo Island. Mobile numbers, written domestically as 04xx, follow the identical drop-the-0 rule as landlines.",
		sections: [
			{
				heading: 'Dialing Australia: country code 61, step by step',
				body: [
					"Calling Australia from a US landline: dial 011, then 61, then the area code with its leading 0 dropped, then the rest of the local number. From a mobile phone or most VoIP services, a \"+\" takes the place of the 011, so +61 followed by the same digits works just as reliably.",
				],
				table: {
					columns: ['Step', 'What to dial'],
					rows: [
						['1. Exit code (landline)', '011'],
						['1. Exit code (mobile/VoIP)', '+'],
						['2. Country code', '61'],
						['3. Area code', 'drop the leading 0'],
						['4. Local number', 'remaining digits'],
					],
				},
			},
			{
				heading: 'From dozens of area codes to four: the 1994-1998 renumbering',
				body: [
					"Before the mid-1990s, Australia's phone numbers looked nothing like today's system. By 1994 the country had six two-digit area codes for its capitals -- 02 (Sydney), 03 (Melbourne), 06 (Canberra), 07 (Brisbane), 08 (Adelaide), and 09 (Perth) -- plus 48 three-digit codes covering everywhere from Hobart to mid-west Western Australia, and one lone four-digit holdout: Kangaroo Island's 0848, which had never been folded into a larger code.",
					"Regulators spent 1994 through 1998 collapsing that whole patchwork into the four regional codes still in use today, lengthening every local number by a digit or two along the way and rolling the process out area by area to avoid two different subscribers ending up with the same number mid-transition. The first conversion landed in the Sydney suburb of Mona Vale on 25 July 1994; the last happened more than three years later, on 10 November 1997, when Queensland's 070, 071, 076, 077, and 079 codes all folded into the modern (07) 4yxx xxxx format. In most cases the old area code got absorbed straight into the new local number -- Canberra's (06) 2xx xxxx became (02) 62xx xxxx, and the Northern Territory's (089) xx xxxx became (08) 89xx xxxx. Sydney and Melbourne, the two largest exchanges, needed a different fix: both added a leading 9 to existing numbers instead. Tasmania lost its own area code entirely, absorbed into Melbourne's 03 range despite being a separate state, and Queensland ended up splitting its numbers across three internal ranges (07 3... for Brisbane, 07 5... for the Gold and Sunshine Coasts, 07 4... for the rest). Until the changeover officially ended on 1 March 1999, callers had to dial the full area code even for calls within their own -- purely to stop numbers from clashing while the changes were still rolling out, a rule that's long gone even though some older guides still repeat it.",
				],
				table: {
					caption: "Australia's four area codes today",
					columns: ['Area code', 'Region covered'],
					rows: [
						['02', 'Sydney, the ACT, and most of New South Wales'],
						['03', 'Melbourne, Tasmania, and the rest of Victoria'],
						['07', 'Brisbane and the rest of Queensland'],
						['08', 'Adelaide, Perth, and the Northern Territory'],
					],
				},
			},
			{
				heading: 'Mobile numbers, and the 1300/1800 numbers that country code 61 alone won\'t reach',
				body: [
					"Mobile numbers sit outside the four regional codes entirely, under a single national prefix, 04, written domestically as 04xx xxx xxx. That prefix wasn't always this open: before November 1998, only the 040x and 041x ranges existed as mobile numbers, freed up from what had been New South Wales's regional area codes during the same renumbering described above. Mobile number portability arrived later still, on 25 September 2001 -- before that date, a mobile number's middle digits reliably identified which carrier issued it, which is no longer true today.",
					'Some Australian numbers don\'t use the four-region system at all. Numbers starting with 13, 1300, or 1800 are local-rate and toll-free lines that route over a separate domestic network, and they carry no leading 0 to drop -- Wikipedia\'s numbering-plan overview notes that 13xx and 1300 numbers can be dialed directly after the country code with nothing removed. What that overview doesn\'t promise is that the call will actually connect: multiple Australian telecom providers describe reaching a 1300, 1800, or 13 number from outside the country as inconsistent, since completion depends on whether the calling carrier has an agreement to route into that domestic network at all. A business that wants overseas customers to be able to reach it reliably will usually publish an ordinary geographic number -- 02, 03, 07, or 08 -- specifically to sidestep that gap.',
				],
			},
			{
				heading: 'Worked examples',
				body: [
					'A Sydney landline written domestically as (02) 9374 4000 becomes 011 61 2 9374 4000 from a US landline, or +61 2 9374 4000 from a mobile. A mobile number written as 0412 345 678 becomes 011 61 412 345 678, or +61 412 345 678.',
					"Australia's four-code system is an outlier -- see [the US country code](/us-country-code/) for the opposite extreme, where a single country code covers 20 different NANP members, or [how US area codes actually work](/how-do-area-codes-work/) for a numbering plan that assigns hundreds of area codes across one country instead of four for an entire continent.",
				],
			},
		],
		faq: [
			{
				question: "What is Australia's country code?",
				answer: '61.',
			},
			{
				question: 'How many area codes does Australia have?',
				answer:
					'Just four geographic codes -- 02, 03, 07, and 08 -- cover the entire country. They\'re what survived a 1994-1998 renumbering that retired dozens of smaller two- and three-digit codes, plus a four-digit exception unique to Kangaroo Island.',
			},
			{
				question: 'Can I call an Australian 1800 or 1300 number from the US?',
				answer:
					"Not reliably. Those local-rate and toll-free numbers route over Australia's domestic network rather than the four regional area codes, and Australian telecom providers describe overseas reachability as inconsistent and dependent on the calling carrier. If one won't connect, look for the business's ordinary geographic-area-code number instead.",
			},
			{
				question: 'Can I just dial +61 instead of 011 61?',
				answer:
					'Yes -- on a mobile phone or most VoIP services, a "+" substitutes for the 011 exit code and works identically, so +61 2 9374 4000 reaches the same number as 011 61 2 9374 4000.',
			},
		],
		sources: [
			{ label: 'Wikipedia: Former Australian dialling codes', url: 'https://en.wikipedia.org/wiki/Former_Australian_dialling_codes' },
			{ label: 'Wikipedia: Telephone numbers in Australia', url: 'https://en.wikipedia.org/wiki/Telephone_numbers_in_Australia' },
			{ label: 'FCC: International Long-Distance Calling Made Simple', url: 'https://www.fcc.gov/consumers/guides/international-long-distance-calling-made-simple-tip-sheet' },
			{ label: 'Alltel: How to Call a 1800 Number From Overseas', url: 'https://www.alltel.com.au/blog/call-1800-number-overseas' },
			{ label: '1300 Numbers Australia: What You Need to Know About Calling a 1300 Number From Overseas', url: 'https://www.1300numbersaustralia.com.au/what-you-need-to-know-about-calling-a-1300-number-from-overseas' },
		],
	},
	{
		slug: 'phoenix-zip-codes',
		category: 'ZIP Codes',
		title: 'Phoenix ZIP Codes: All 77, and Why the List Never Crosses a County Line',
		description:
			"Phoenix has 77 ZIP codes, all inside Maricopa County -- not because the city stayed small, but because it annexed nearly 500 square miles since 1950, faster than its ZIP list ever needed to reach a second county.",
		published: '2026-08-17',
		updated: '2026-08-17',
		coreSummary:
			"USPS assigns 77 ZIP codes to \"Phoenix, AZ\" as the primary place name, and every one of them sits inside Maricopa County, per this site's GeoNames-based source data -- the same single-county pattern this site found in San Diego and Sacramento, unlike Denver or Atlanta, where the list crosses into a second county entirely. zip-codes.com counts a smaller total, 71 ZIP codes, and other directories land closer to 74 or 75, a gap that traces back to how each one handles overlapping postal boundaries and PO-Box-only codes rather than to any real dispute about the county line. Phoenix's single-county footprint isn't a small-city coincidence -- the city added roughly 95 square miles through annexation in the 1950s alone, on its way from 17.1 square miles in 1950 to 517.9 square miles today, more land area than New York City, Los Angeles, or Chicago each cover individually. Two of the 77 ZIP codes on this site's list don't belong to a neighborhood at all: 85001 is a PO-Box-only code for the downtown business core, and 85034 belongs to Phoenix Sky Harbor International Airport.",
		sections: [
			{
				heading: 'All 77 ZIP codes with "Phoenix, AZ" as the primary USPS place name',
				body: [
					"Every one of the 77 falls inside Maricopa County -- the same pattern this site found in [Sacramento](/sacramento-zip-codes/) and [San Diego](/san-diego-zip-codes/), and a contrast to [Denver](/denver-zip-codes/) or [Atlanta](/atlanta-zip-codes/), where the ZIP list crosses into a neighboring county. What varies between sources isn't the county, it's the count: zip-codes.com lists 71 ZIP codes for Phoenix, six short of the 77 GeoNames assigns, and other trackers settle around 74 or 75 -- differences that come down to whether overlapping postal boundaries and PO-Box-only codes get folded into the total or listed separately.",
					"Phoenix also dials on three area codes -- 602, 623, and 480 -- and all three now overlay the entire metro area rather than serving separate zones, a history covered in the FAQ below.",
				],
				table: {
					caption: 'All 77 ZIP codes with "Phoenix, AZ" as the primary USPS place name (per GeoNames.org, checked 2026-08-17)',
					columns: ['ZIP'],
					rows: [
						['85001'], ['85002'], ['85003'], ['85004'], ['85005'],
						['85006'], ['85007'], ['85008'], ['85009'], ['85010'],
						['85011'], ['85012'], ['85013'], ['85014'], ['85015'],
						['85016'], ['85017'], ['85018'], ['85019'], ['85020'],
						['85021'], ['85022'], ['85023'], ['85024'], ['85025'],
						['85026'], ['85027'], ['85028'], ['85029'], ['85030'],
						['85031'], ['85032'], ['85033'], ['85034'], ['85035'],
						['85036'], ['85037'], ['85038'], ['85039'], ['85040'],
						['85041'], ['85042'], ['85043'], ['85044'], ['85045'],
						['85046'], ['85048'], ['85050'], ['85051'], ['85053'],
						['85054'], ['85060'], ['85061'], ['85062'], ['85063'],
						['85064'], ['85065'], ['85066'], ['85067'], ['85068'],
						['85069'], ['85070'], ['85071'], ['85072'], ['85073'],
						['85074'], ['85075'], ['85076'], ['85078'], ['85079'],
						['85080'], ['85082'], ['85083'], ['85085'], ['85086'],
						['85097'], ['85098'],
					],
				},
			},
			{
				heading: "How a 17-square-mile town grew into a footprint bigger than New York City's",
				body: [
					"Phoenix's single-county ZIP list isn't a sign of a small city. The city's own published history puts its 1950 footprint at 17.1 square miles and its population at 106,000 -- close to the Census Bureau's count of 106,818 that year. Over the following decade the city added about 95 square miles through annexation -- including Maryvale and large sections of south Phoenix in 1959. Growth on that scale kept going for decades: Phoenix covered around 470 square miles by the early 2000s and stands at 517.9 square miles today, more land area than New York City, Los Angeles, or Chicago each cover individually.",
					"Cities racing to expand in that era often annexed narrow, contiguous strips of land just to keep a neighboring town from claiming the same ground first, then filled in the territory behind those strips later. Phoenix used that strategy through the 1950s and 1960s as it and its neighbors -- Scottsdale, Tempe, Glendale, Mesa -- pushed into the same stretch of desert at the same time. The reason none of that growth ever pushed a Phoenix ZIP code into a second county is simpler than it looks: Maricopa County itself covers 9,224 square miles, more than seventeen times the land Phoenix occupies today. There's a lot of county left for the city to grow into before its ZIP list would ever need to follow Denver's or Atlanta's cross-county pattern.",
				],
			},
			{
				heading: "Two ZIP codes that don't belong to any neighborhood",
				body: [
					"85001 is downtown Phoenix's original ZIP code, assigned when USPS rolled out five-digit ZIP codes nationwide on July 1, 1963. It's the only one on this list that isn't a neighborhood: a PO-Box-only code covering the Copper Square and Central City business core, with no residential population of its own. The Arizona State Capitol and Wesley Bolin Memorial Plaza, the state's outdoor war memorial, sit two ZIP codes over at 85007, not inside 85001.",
					"85034 belongs to Phoenix Sky Harbor International Airport rather than any neighborhood -- the airport sits close enough to downtown that its runways fall inside the same numbered sequence as the rest of central Phoenix, rather than off in a separate suburban code the way many US airports are.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Phoenix have?',
				answer:
					"This site's GeoNames-based source data counts 77. That's higher than zip-codes.com's count of 71, and higher than the 74 or 75 other directories tend to report -- the gap comes from how each tracker classifies PO-Box-only and overlapping postal codes, not from any disagreement about which ZIP codes belong to Phoenix in the first place.",
			},
			{
				question: 'What county is Phoenix in?',
				answer:
					"Maricopa County, and every one of the 77 ZIP codes USPS assigns to Phoenix stays inside that single county. Despite Phoenix covering more land than New York City, Los Angeles, or Chicago individually, Maricopa County itself is large enough -- 9,224 square miles -- that the city's ZIP list has never needed to cross into a second county.",
			},
			{
				question: 'Why is ZIP code 85001 a PO box only?',
				answer:
					"85001 is downtown Phoenix's original ZIP code, assigned in 1963 when USPS introduced five-digit codes nationwide. It now covers the Copper Square and Central City business core -- office towers and government buildings rather than housing -- so USPS classifies it as a PO-Box-only code with no residential population of its own.",
			},
			{
				question: 'What area codes does Phoenix use?',
				answer:
					"602, 623, and 480. Arizona had only one area code, 602, from 1947 until 1995, when the state split off 520 for Tucson and the rest of the state; 602 was then split three ways in 1999, creating 480 for the East Valley and 623 for the West Valley alongside a shrunken 602 for the urban core. In 2023, regulators recombined 602, 623, and 480 into a single overlay covering the whole Phoenix metro area, so any of the three can now show up on a new phone number anywhere in the region.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Phoenix, AZ ZIP Codes -- zip-codes.com', url: 'https://www.zip-codes.com/city/az-phoenix.asp' },
			{ label: 'ZIP Code 85001 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/85001/zip-code-85001.asp' },
			{ label: 'City of Phoenix: City History', url: 'https://www.phoenix.gov/administration/departments/communications/history-facts/city-history.html' },
			{ label: 'Phoenix, Arizona -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Phoenix,_Arizona' },
			{ label: 'Maricopa County, Arizona -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Maricopa_County,_Arizona' },
			{ label: 'Phoenix Sky Harbor International Airport -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Phoenix_Sky_Harbor_International_Airport' },
		],
	},
	{
		slug: 'cincinnati-zip-codes',
		category: 'ZIP Codes',
		title: "Cincinnati ZIP Codes: All 71, and Two That Aren't in Hamilton County",
		description:
			"Cincinnati's 71 ZIP codes almost all sit in Hamilton County -- except one that's a 20,000-person Clermont County suburb, and one that's an 18-box mail drop with no residents at all.",
		published: '2026-08-17',
		updated: '2026-08-17',
		coreSummary:
			"USPS assigns 71 ZIP codes with Cincinnati as the primary place name, and this site's GeoNames-based source data puts 69 of them inside Hamilton County, where Cincinnati has been the county seat since the county's creation in 1790. The other two sit outside it: 45245 is a Clermont County community of roughly 20,000 people, spanning Withamsville, Mount Carmel, and Summerside, addressed as Cincinnati because its mail route runs out of a Cincinnati-area postal facility rather than a Clermont one. 45275, in Brown County, has no recorded residents at all -- postal trackers describe it as an 18-box mail-drop facility on a single road, Clay Drive, and most directories still file it under Hamilton County by mistake. One more code on the list, 45999, isn't a neighborhood either: it's the dedicated ZIP the IRS uses at its Cincinnati service center to process specific categories of business and international tax filings.",
		sections: [
			{
				heading: '69 in Hamilton County, plus two that most directories miss',
				body: [
					"Most ZIP code directories, including several with active Cincinnati listings, file all 71 of the city's ZIP codes under a single county: Hamilton, where Cincinnati has served as county seat since Arthur St. Clair organized the county in 1790. This site's source data, built from GeoNames' postal code registry, agrees on the total -- 71, matching independent counts from zip-codes.com and ZipCodesToGo -- but splits two of those codes into neighboring counties instead of Hamilton.",
					"45245 belongs to Clermont County, covering Withamsville, Mount Carmel, and Summerside across Union and Pierce townships, an active suburban area on Cincinnati's east side with roughly 20,000 residents. 45275 belongs to Brown County, the only Cincinnati-addressed ZIP code that does -- and unlike 45245, it isn't a residential community. GeoNames and other postal trackers describe it as a single-route PO box facility, 18 boxes along Clay Drive, with no population recorded.",
				],
			},
			{
				heading: "All 71 ZIP codes with \"Cincinnati, OH\" as the primary USPS place name",
				body: [
					'Sixty-nine of the 71 sit in Hamilton County. The two exceptions are marked below.',
				],
				table: {
					caption: 'All 71 ZIP codes with "Cincinnati, OH" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-17)',
					columns: ['ZIP', 'County'],
					rows: [
						['45201', 'Hamilton'], ['45202', 'Hamilton'], ['45203', 'Hamilton'], ['45204', 'Hamilton'], ['45205', 'Hamilton'],
						['45206', 'Hamilton'], ['45207', 'Hamilton'], ['45208', 'Hamilton'], ['45209', 'Hamilton'], ['45211', 'Hamilton'],
						['45212', 'Hamilton'], ['45213', 'Hamilton'], ['45214', 'Hamilton'], ['45215', 'Hamilton'], ['45216', 'Hamilton'],
						['45217', 'Hamilton'], ['45218', 'Hamilton'], ['45219', 'Hamilton'], ['45220', 'Hamilton'], ['45221', 'Hamilton'],
						['45222', 'Hamilton'], ['45223', 'Hamilton'], ['45224', 'Hamilton'], ['45225', 'Hamilton'], ['45226', 'Hamilton'],
						['45227', 'Hamilton'], ['45229', 'Hamilton'], ['45230', 'Hamilton'], ['45231', 'Hamilton'], ['45232', 'Hamilton'],
						['45233', 'Hamilton'], ['45234', 'Hamilton'], ['45235', 'Hamilton'], ['45236', 'Hamilton'], ['45237', 'Hamilton'],
						['45238', 'Hamilton'], ['45239', 'Hamilton'], ['45240', 'Hamilton'], ['45241', 'Hamilton'], ['45242', 'Hamilton'],
						['45243', 'Hamilton'], ['45244', 'Hamilton'], ['45245', 'Clermont'], ['45246', 'Hamilton'], ['45247', 'Hamilton'],
						['45248', 'Hamilton'], ['45249', 'Hamilton'], ['45250', 'Hamilton'], ['45251', 'Hamilton'], ['45252', 'Hamilton'],
						['45253', 'Hamilton'], ['45254', 'Hamilton'], ['45255', 'Hamilton'], ['45258', 'Hamilton'], ['45262', 'Hamilton'],
						['45263', 'Hamilton'], ['45264', 'Hamilton'], ['45267', 'Hamilton'], ['45268', 'Hamilton'], ['45269', 'Hamilton'],
						['45270', 'Hamilton'], ['45271', 'Hamilton'], ['45273', 'Hamilton'], ['45274', 'Hamilton'], ['45275', 'Brown'],
						['45277', 'Hamilton'], ['45280', 'Hamilton'], ['45296', 'Hamilton'], ['45298', 'Hamilton'], ['45299', 'Hamilton'],
						['45999', 'Hamilton'],
					],
				},
			},
			{
				heading: "45999 isn't a ZIP code for anyone who lives there",
				body: [
					'One entry on the list, 45999, doesn\'t correspond to a neighborhood or a residential mail route -- it\'s the ZIP code the IRS uses at its Cincinnati service center to process specific categories of business and international tax correspondence. IRS notices mailed from Cincinnati, including forms like the CP132 balance-due notice, carry a return address of "Internal Revenue Service, Cincinnati, OH 45999," with a numeric stop code appended for internal routing. Which specific filings route to Cincinnati rather than another IRS service center varies by form type -- different notices and forms list different coverage areas -- which is part of why the center needed a dedicated ZIP code rather than sharing one with any Cincinnati neighborhood.',
					"Cincinnati isn't the only city on this site with an IRS-only ZIP in its list -- [Atlanta's does too](/atlanta-zip-codes/), assigned to a separate service center entirely.",
				],
			},
			{
				heading: '513 split once, in 1996, then got a second layer in 2023',
				body: [
					"Cincinnati's [area code](/how-do-area-codes-work/), 513, dates to 1947, one of the original area codes assigned nationwide. It covered the whole region alone for almost fifty years, until September 28, 1996, when regulators split off a new code, 937, for Dayton, Springfield, and the rest of southwestern Ohio outside the immediate Cincinnati metro -- the same kind of geographic split this site has covered for [Chicago](/chicago-area-code/) and other major metro area codes.",
					"513 itself was never split again after 1996. Instead, on April 28, 2023, regulators added an overlay code, 283, covering the identical territory as 513 rather than dividing it further -- new phone numbers in the Cincinnati region can now be assigned either 513 or 283, while every number already carrying a 513 area code keeps working exactly as before.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Cincinnati have?',
				answer:
					"71, per this site's GeoNames-based source data -- matching independent counts from zip-codes.com and ZipCodesToGo. Most directories attribute all 71 to Hamilton County, but two, 45245 and 45275, actually sit in Clermont and Brown counties.",
			},
			{
				question: 'What county is Cincinnati in?',
				answer:
					"Mostly Hamilton County, Cincinnati's county seat since the county was organized in 1790. Two of the city's 71 ZIP codes fall outside it: 45245 in Clermont County and 45275 in Brown County.",
			},
			{
				question: 'Why is ZIP code 45999 different from the rest?',
				answer:
					"It isn't a neighborhood. 45999 is the dedicated ZIP code the IRS uses at its Cincinnati service center to process specific categories of business and international tax filings -- which exact filings route there depends on the form, not on where the taxpayer lives.",
			},
			{
				question: "What is Cincinnati's area code?",
				answer:
					"513, assigned in 1947. Dayton and the rest of southwestern Ohio split off as a separate code, 937, in 1996; Cincinnati's own area kept 513 and later added an overlay code, 283, in 2023, so both can now be assigned to new numbers in the same region.",
			},
			{
				question: 'Does anyone live in ZIP code 45275?',
				answer:
					"Not according to postal records. 45275 is described as an 18-box mail-drop facility on a single road, Clay Drive, in Brown County, with no residential population recorded -- unlike 45245, its Clermont County counterpart, which covers an active suburban community of roughly 20,000 people.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'All ZIP Codes, Map and Demographics of Cincinnati, OH -- zip-codes.com', url: 'https://www.zip-codes.com/city/oh-cincinnati.asp' },
			{ label: 'Cincinnati, OH ZIP code list -- zipcodestogo.com', url: 'https://www.zipcodestogo.com/city/Cincinnati/OH/' },
			{ label: 'ZIP Code 45245 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/45245/zip-code-45245.asp' },
			{ label: 'ZIP Code 45275 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/45275/zip-code-45275.asp' },
			{ label: 'IRS CP132 notice sample (Cincinnati, OH 45999 return address)', url: 'https://www.irs.gov/pub/notices/cp132_english.pdf' },
			{ label: 'Cincinnati, Ohio -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Cincinnati' },
			{ label: 'Hamilton County, Ohio -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Hamilton_County,_Ohio' },
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
		],
	},
	{
		slug: 'fresno-zip-codes',
		category: 'ZIP Codes',
		title: "Fresno ZIP Codes: The Full List, and Why Two-Thirds Aren't Delivery Routes",
		description:
			"All 58 ZIP codes USPS assigns to Fresno, California -- entirely inside Fresno County -- plus the 2010 split that created 93737 and the two ZIPs tied to an IRS tax-processing center that closed in 2021.",
		published: '2026-08-18',
		updated: '2026-08-18',
		coreSummary:
			"USPS assigns 58 ZIP codes to Fresno, California, and unlike this site's Atlanta, Denver, or Cincinnati lists, every one of them sits inside a single county -- Fresno County, no split across a line. zip-codes.com's own delivery-type breakdown for the city puts only 19 of the 58 on standard residential and business routes; the other 39 split into 28 PO Box codes and 11 unique codes reserved for single high-volume recipients, outnumbering the standard codes by roughly two to one. Two of those unique codes, 93844 and 93888, aren't Fresno neighborhoods at all -- zip-codes.com tags both as IRS Service Center addresses, tracing back to a paper tax-return processing center the IRS permanently closed in Fresno at the end of September 2021. And one of the 58, 93737, didn't exist before July 2010, when USPS carved it out of a crowded 93727 to keep mail moving on the city's east side.",
		sections: [
			{
				heading: 'All 58 ZIP codes USPS assigns to Fresno',
				body: [
					"Every one of the 58 ZIP codes USPS assigns to \"Fresno, CA\" as the primary place name sits inside Fresno County, per this site's source data -- there's no county split here the way there is on this site's [Denver](/denver-zip-codes/) or [Atlanta](/atlanta-zip-codes/) lists. What the county-level view hides is how few of those 58 codes actually correspond to a residential mail route: zip-codes.com's own delivery-type tally for the city counts 19 standard codes, 28 PO Box codes, and 11 unique codes assigned to single high-volume recipients -- meaning the codes that aren't tied to an ordinary carrier route outnumber the ones that are, by roughly two to one.",
				],
				table: {
					caption: 'All 58 ZIP codes with "Fresno, CA" as the primary USPS place name (per GeoNames.org, checked 2026-08-18)',
					columns: ['ZIP'],
					rows: [
						['93650'], ['93701'], ['93702'], ['93703'], ['93704'],
						['93705'], ['93706'], ['93707'], ['93708'], ['93709'],
						['93710'], ['93711'], ['93712'], ['93714'], ['93715'],
						['93716'], ['93717'], ['93718'], ['93720'], ['93721'],
						['93722'], ['93723'], ['93724'], ['93725'], ['93726'],
						['93727'], ['93728'], ['93729'], ['93730'], ['93737'],
						['93740'], ['93741'], ['93744'], ['93745'], ['93747'],
						['93750'], ['93755'], ['93760'], ['93761'], ['93764'],
						['93765'], ['93771'], ['93772'], ['93773'], ['93774'],
						['93775'], ['93776'], ['93777'], ['93778'], ['93779'],
						['93786'], ['93790'], ['93791'], ['93792'], ['93793'],
						['93794'], ['93844'], ['93888'],
					],
				},
			},
			{
				heading: 'The 2010 split that created 93737',
				body: [
					"93737 is the newest code on the list above, and it exists because of a specific, documented USPS decision rather than a gradual boundary drift. The Postal Service's Sacramento District announced in mid-2010 that the 93727 ZIP, on Fresno's east side, had grown crowded enough to justify carving out a piece of it as its own code. The split took effect July 1, 2010, and only affected around 1,200 customers on the east side of Temperance Avenue, who received notice by mail that spring; the same Sunnyside postal station on East Olive Avenue kept handling their delivery afterward; only the ZIP printed on the envelope changed.",
					"That's a narrower kind of change than the splits and overlays this site has documented at the area-code level -- see the [California area codes list](/california-area-codes/) for how Fresno's own area code, 559, split off a larger numbering plan area in 1998 -- but it follows the same underlying logic: when growth outpaces what a single code can carry efficiently, the agency responsible draws a new line rather than letting the old one strain indefinitely.",
				],
			},
			{
				heading: "93844 and 93888: two ZIPs tied to an IRS center that closed in 2021",
				body: [
					"93844 and 93888 both stand out from the rest of the table above -- neither is a delivery area anyone lives in, and zip-codes.com tags both as IRS Service Center codes among the 11 unique codes in its tally. They trace back to a paper tax-return processing center the IRS operated at Butler and Peach avenues on Fresno's east side -- inside the same 93727 ZIP this article's earlier section covers -- which employed roughly 3,000 people at its 2016 peak before the agency wound the site down and closed it permanently at the end of September 2021, as electronic filing displaced most paper returns. Taxpayers in the states the Fresno center used to serve -- Alaska, California, Hawaii, Ohio, and Washington -- now mail paper returns to the IRS's Ogden, Utah processing center instead, but the two Fresno ZIP codes remain in USPS's own database regardless.",
					"This site's own [Atlanta ZIP list](/atlanta-zip-codes/) already flags the same single-recipient pattern for Atlanta's 39901 and Austin's 73301, and for [Chicago's 28 single-recipient codes](/chicago-zip-codes/) -- when an organization receives enough mail, USPS carves out a ZIP that belongs to it alone, wherever that number happens to fall in the numbering sequence. Fresno's pair is a reminder that a unique ZIP can keep existing in that database even after the facility it was built for has shut down.",
				],
			},
			{
				heading: "From 209 to 559 to 357: Fresno's area codes, one of them barely a year old",
				body: [
					"Fresno's phone numbers trace back to 209, which itself split off from 916 -- one of California's three original 1947 area codes -- in 1958, decades before Fresno had a code of its own to call. Fresno kept 209 for four more decades before the region split off its own code, 559, in November 1998, the same year several other fast-growing California metros split off codes of their own. 559 stayed Fresno's only code for more than 26 years, longer than 213 lasted before Los Angeles's first split in 1951, before regulators added an overlay, 357, on March 26, 2025 -- among the newest area codes in the state, per Wikipedia's tracking of the numbering plan.",
					"That overlay means new phone numbers in the Fresno area now carry 357 rather than 559, while existing 559 numbers keep working exactly as before -- the same overlay pattern this site's [California area codes list](/california-area-codes/) documents elsewhere in the state. San Francisco added its own overlay, 628, back in 2015, and Sacramento added 279 in 2018, both years ahead of Fresno's turn. Los Angeles's most recent overlay, 738, is the one that came close: it landed November 1, 2024, less than five months before 357 arrived in Fresno.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Fresno have?',
				answer:
					"58, all inside Fresno County per this site's source data. zip-codes.com's delivery-type breakdown for the city counts 19 as standard routes, 28 as PO Box codes, and 11 as unique codes reserved for single high-volume recipients.",
			},
			{
				question: 'What county is Fresno, CA in?',
				answer:
					"Fresno County. Unlike this site's Atlanta, Denver, or Cincinnati ZIP lists, none of Fresno's 58 ZIP codes cross into a neighboring county.",
			},
			{
				question: 'Why does Fresno have a ZIP code 93737?',
				answer:
					"USPS created 93737 on July 1, 2010, splitting it off from the increasingly crowded 93727 on Fresno's east side. About 1,200 customers on the east side of Temperance Avenue had their ZIP code changed; their mail kept moving through the same Sunnyside postal station as before.",
			},
			{
				question: 'What is ZIP code 93888 used for?',
				answer:
					"93888, along with a second unique code, 93844, is tagged an IRS Service Center address by zip-codes.com rather than a residential neighborhood. Both trace back to the paper tax-return processing center the IRS operated at Butler and Peach avenues on Fresno's east side, which closed permanently at the end of September 2021; taxpayers who used to file there now mail returns to Ogden, Utah instead. This site's Atlanta and Chicago ZIP lists document the same USPS convention for other IRS and government mail centers.",
			},
			{
				question: 'What area code does Fresno use?',
				answer:
					"559, in service since November 1998 when it split off from 209. A newer overlay code, 357, was added on top of the same area on March 26, 2025, so new phone numbers there now carry 357 while existing 559 numbers are unaffected.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'All ZIP Codes, Map and Demographics of Fresno, CA -- zip-codes.com', url: 'https://www.zip-codes.com/city/ca-fresno.asp' },
			{ label: 'USPS: ZIP Code change for Fresno, CA 93727 (2010 news release)', url: 'https://about.usps.com/news/state-releases/ca/2010/ca_2010_0622.htm' },
			{ label: 'IRS IR-2021-185: New mailing address for some Western states as Fresno, California, paper tax return processing center closes', url: 'https://www.irs.gov/newsroom/new-mailing-address-for-some-western-states-as-fresno-california-paper-tax-return-processing-center-closes' },
			{ label: 'Area codes 559 and 357 -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Area_codes_559_and_357' },
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
		],
	},
	{
		slug: '929-area-code',
		category: 'Area Codes',
		title: "929 Area Code: New York City's Third Overlay, and Its 24-Million-Number Cushion",
		description:
			"929 went live in 2011 as the third area code layered onto the same outer-borough footprint as 718 and 347 -- adding enough technical capacity for roughly 24 million numbers to a population the Census put at 6.6 million.",
		published: '2026-08-20',
		updated: '2026-08-20',
		coreSummary:
			"Area code 929 has overlaid the same New York City territory as 718 and 347 since April 16, 2011: the Bronx, Brooklyn, Queens, and Staten Island, plus the Marble Hill section of Manhattan, all on Eastern Time. It was the third overlay to touch that outer-borough footprint, after 917 in 1992 and 347 in 1999, approved by the state Public Service Commission in December 2009 and phased in through 2010 and early 2011 on a fixed NANPA schedule, down to a dedicated test number carriers used to confirm their networks were ready. Stacking a third area code onto one footprint pushed its technical capacity just under 24 million assignable numbers for a population the 2010 Census counted at roughly 6.6 million -- headroom that looked enormous in 2011 and still wasn't enough to avoid a fourth code, 465, arriving in 2026.",
		sections: [
			{
				heading: 'Where 929 actually reaches',
				body: [
					"929 covers exactly the same ground as 718 and 347: the Bronx, Brooklyn, Queens, Staten Island, and Marble Hill, the Manhattan neighborhood whose phone lines run through a Bronx switching center rather than a Manhattan one -- the full story of how that neighborhood ended up on the outer-borough side is on this site's [citywide rundown of all eight New York area codes](/nyc-area-code/). All of it runs on Eastern Time, and every local call across that territory has required ten-digit dialing since 917, New York's first overlay, made it mandatory back in 1992.",
					"929 doesn't have a single block, business district, or ZIP code that belongs to it alone. Every address it reaches already carries 718 or 347 too; which of the three codes a given phone number gets assigned depends on which prefix a carrier still has room in, not on geography.",
				],
			},
			{
				heading: 'How a third overlay got approved on a fixed schedule',
				body: [
					"On December 16, 2009, the New York Public Service Commission approved an all-services overlay as the relief method for the 718/347 numbering plan area, in Case 09-C-0058. NANPA's own implementation letter, published February 9, 2010, laid out a fixed rollout: carriers began network preparation on July 16, 2010, could start ordering central office codes under the new area code from October 16, 2010, and April 16, 2011 became the earliest activation date -- 929's actual in-service date. A dedicated test number, 929-222-9901, stayed live from December 14, 2010, through July 11, 2011, so every carrier could confirm it was routing calls to the new code correctly before the changeover.",
					"Layering a third area code onto one territory is mostly arithmetic. NANPA allots up to 792 usable central office codes to each area code, each carrying 10,000 individual numbers -- a maximum of 7.92 million numbers per code. Three codes sharing the same ground, 718, 347, and 929, works out to just under 24 million technically assignable numbers for a territory the 2010 Census put at about 6.6 million residents across the four boroughs. That kind of overhead is standard industry practice, not a New York quirk -- carriers reserve blocks of numbers they never assign, and a single business account can tie up thousands of unused digits -- but the surplus still didn't last as long as the math implied. By April 2024, NANPA was already projecting the shared 347/718/917/929 pool would run out of central office codes by the end of 2026; slower demand pushed that estimate to the third quarter of 2027 by September 2025, but the state's Public Service Commission had already approved a fourth code, 465, in January 2025 rather than wait to find out. It went into service June 18, 2026 -- see this site's [citywide page](/nyc-area-code/) for the full story of that overlay.",
				],
				diagramSvg: `<svg viewBox="0 0 680 190" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: area code 718 created in 1984, overlaid by 347 in 1999, overlaid again by 929 in 2011, and overlaid a fourth time by 465 in 2026">
	<line x1="50" y1="95" x2="630" y2="95" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="80" cy="95" r="9" fill="#131a27"/>
	<text x="80" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1984</text>
	<text x="80" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">718 splits</text>
	<text x="80" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">from 212</text>
	<circle cx="290" cy="95" r="9" fill="#b5722f"/>
	<text x="290" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1999</text>
	<text x="290" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">347 overlays</text>
	<text x="290" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">718</text>
	<circle cx="460" cy="95" r="9" fill="#131a27"/>
	<text x="460" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2011</text>
	<text x="460" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">929 overlays</text>
	<text x="460" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">both</text>
	<circle cx="610" cy="95" r="9" fill="#b5722f"/>
	<text x="610" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2026</text>
	<text x="610" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">465 adds</text>
	<text x="610" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">a fourth</text>
</svg>`,
			},
			{
				heading: 'A palindrome, twenty rotary clicks, and a plumbing hotline',
				body: [
					"New York's own newspaper of record couldn't resist needling the new code when it arrived. The New York Times' City Room blog marked 929's April 16, 2011, launch by pointing out that the number is a palindrome, spells \"WAX\" on a keypad, and would cost anyone still dialing on a rotary phone nine plus two plus nine, or twenty clicks -- more than any other New York City area code carried at the time.",
					"929 picked up a second, unrelated moment in pop culture twelve years later. Ahead of the Super Bowl LVII broadcast in February 2023, Universal and Illumination launched a promotional website for \"Super Mario Bros. Plumbing,\" the fictional Brooklyn business run by Mario and Luigi in that year's movie, complete with a working phone number -- 929-556-2746, or 929-55-MARIO -- that played a recorded in-character voicemail. It wasn't a real listing, just a marketing stunt tied to that spring's film release, but the number stayed live through the promotional run, handing a decade-old outer-borough overlay code an unlikely cameo.",
				],
			},
			{
				heading: 'Four codes, one target: why spoofing works the same across all of them',
				body: [
					"Caller ID spoofing lets a scammer display almost any number they choose, a tactic the FCC calls neighbor spoofing, covered in more detail on this site's [scam area codes page](/scam-area-codes/). In most of the country that means picking a number in the target's own area code to look local. New York's outer boroughs work differently: 718, 347, and 929 cover the identical four-borough footprint, and 917 -- assigned across all five boroughs, Manhattan included -- reads just as local layered on top of it. A spoofed call showing any of those four codes looks native to the same roughly 6.6 million residents, without needing to guess which specific one a recipient's own phone actually carries.",
				],
			},
		],
		faq: [
			{
				question: 'What areas does the 929 area code cover?',
				answer:
					"The same territory as 718 and 347: the Bronx, Brooklyn, Queens, Staten Island, and Marble Hill, the part of Manhattan that dials on outer-borough codes. All of it is on Eastern Time.",
			},
			{
				question: 'Is 929 a new area code or does it replace 718?',
				answer:
					"It's an overlay, not a replacement. 929 went into service April 16, 2011, layered onto the exact same territory as 718 and 347 -- no existing 718 or 347 number changed, and which of the three codes a given phone number carries has nothing to do with which borough it's in.",
			},
			{
				question: 'How many phone numbers can 718, 347, and 929 support combined?',
				answer:
					"Up to about 24 million. NANPA allots a maximum of 7.92 million numbers to each area code (792 usable prefixes times 10,000 lines apiece); three overlaid codes sharing one footprint multiplies that to just under 24 million, for a population the 2010 Census counted at roughly 6.6 million across the four boroughs.",
			},
			{
				question: 'Why did New York need a fourth code, 465, if 929 already added so much capacity?',
				answer:
					"Demand outpaced even that surplus. NANPA projected in April 2024 that the shared 347/718/917/929 pool would run out of central office codes by late 2026; the state Public Service Commission approved a fourth overlay, 465, in January 2025 rather than wait for that deadline, and it went into service June 18, 2026.",
			},
			{
				question: "What was the \"929-55-MARIO\" phone number about?",
				answer:
					"A 2023 marketing campaign for that year's Super Mario Bros. movie. Universal and Illumination built a fake plumbing-business website for Mario and Luigi ahead of the Super Bowl LVII broadcast, complete with a working 929 number, 929-556-2746, that played a recorded in-character voicemail. It was never a real business listing.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 718, 347, 929, and 465', url: 'https://en.wikipedia.org/wiki/Area_codes_718,_347,_929,_and_465' },
			{
				label: 'NANPA Planning Letter 402: NPA 929 to Overlay NPA 718/347 (New York)',
				url: 'https://web.archive.org/web/20250304104823/https://www.nanpa.com/sites/default/files/planning_letters/PL-402.pdf',
			},
			{
				label: 'NANPA: Area Code Relief Planning Frequently Asked Questions (numbering capacity)',
				url: 'https://www.nanpa.com/sites/default/files/2024-10/AreaCodeReliefPlanningFAQs_0.pdf',
			},
			{
				label: 'NYC Department of City Planning: Total Population, New York City & Boroughs, 1900 to 2010',
				url: 'https://www.nyc.gov/assets/planning/download/pdf/data-maps/nyc-population/historical-population/nyc_total_pop_1900-2010.pdf',
			},
			{
				label: 'The New York Times, City Room: "Say Hello to 929" by Andy Newman (April 15, 2011)',
				url: 'https://web.archive.org/web/20180405215117/https://cityroom.blogs.nytimes.com/2011/04/15/say-hello-to-929/?_r=0',
			},
			{
				label: 'Variety: The Super Mario Bros. Movie Reveals Plumbing Website and Commercial (Feb. 12, 2023)',
				url: 'https://variety.com/2023/film/news/super-mario-bros-movie-plumbing-website-commercial-trailer-1235520802/',
			},
			{ label: 'FCC: Caller ID Spoofing', url: 'https://www.fcc.gov/consumers/guides/spoofing' },
		],
	},
	{
		slug: 'huntsville-zip-codes',
		category: 'ZIP Codes',
		title: "Huntsville, AL ZIP Codes: All 24, and the 7 That Aren't Neighborhoods",
		description:
			"All 24 ZIP codes USPS assigns to Huntsville, AL -- including the 7 reserved for single addresses like a credit union and a university, and one that sits mostly on Redstone Arsenal.",
		published: '2026-08-21',
		updated: '2026-08-21',
		coreSummary:
			"USPS assigns 24 ZIP codes to Huntsville, Alabama, and per this site's GeoNames-based source data, every one sits inside a single county -- Madison -- the same pattern this site has already documented for Fresno's 58 codes. What the flat county view hides is how few of Huntsville's 24 codes serve an ordinary carrier route: zip-codes.com's own delivery-type tally for the city counts 11 standard codes, 7 unique codes reserved for a single high-volume address, and 6 PO Box codes -- meaning fewer than half are the kind of code a residential mail carrier actually walks. Two of those 7 unique codes are on the public record for a specific tenant: 35893 belongs to Redstone Federal Credit Union, Alabama's largest credit union, and 35899 belongs to the University of Alabama in Huntsville. A third code on the list, 35808, carries the Huntsville place name in USPS and GeoNames records but sits mostly on Redstone Arsenal, the Army post that hosts NASA's Marshall Space Flight Center.",
		sections: [
			{
				heading: 'All 24 ZIP codes, and why fewer than half are standard delivery routes',
				body: [
					"Madison County holds all 24 of the ZIP codes USPS assigns to \"Huntsville, AL,\" per this site's source data -- a cleaner map than [Atlanta's](/atlanta-zip-codes/) or [Denver's](/denver-zip-codes/) county-straddling lists, and one Huntsville shares with [Fresno](/fresno-zip-codes/). Counting by county alone hides how the codes actually function, though: split by delivery type, zip-codes.com's tally puts only 11 of Huntsville's 24 on standard carrier routes, against 7 reserved for a single high-volume address and 6 assigned to PO boxes -- a smaller standard-route share than Fresno manages with 19 out of 58, despite Huntsville's list running well under half Fresno's length.",
				],
				table: {
					caption: 'All 24 ZIP codes with "Huntsville, AL" as the primary USPS place name (per GeoNames.org, checked 2026-08-21)',
					columns: ['ZIP'],
					rows: [
						['35801'], ['35802'], ['35803'], ['35804'], ['35805'],
						['35806'], ['35807'], ['35808'], ['35809'], ['35810'],
						['35811'], ['35812'], ['35813'], ['35814'], ['35815'],
						['35816'], ['35824'], ['35893'], ['35894'], ['35895'],
						['35896'], ['35897'], ['35898'], ['35899'],
					],
				},
			},
			{
				heading: 'Two of the 7 unique codes belong to a credit union and a university',
				body: [
					"Unique ZIP codes exist for a single organization or address large enough to justify its own code, rather than sharing one with its surrounding neighborhood -- and Huntsville's public record identifies two by name. 35893 is assigned to Redstone Federal Credit Union at 220 Wynn Drive, Alabama's largest credit union and one of the 20 largest federal credit unions in the country by membership. 35899 belongs to the University of Alabama in Huntsville, which anchors Cummings Research Park -- the second-largest research park in the United States and the fourth-largest in the world by size. Because unique codes like these are administrative rather than residential, the Census Bureau doesn't publish population figures for either one, unlike the standard codes on the same list.",
					"The other 5 unique codes on Huntsville's list aren't identified by a single named tenant in public postal directories the way 35893 and 35899 are, so this page doesn't guess at who holds them.",
				],
			},
			{
				heading: "35808 carries Huntsville's name but sits mostly on an Army post",
				body: [
					"35808 is the one code on this list that blurs the line between city and federal installation. USPS and GeoNames both file it under \"Huntsville, AL,\" and it's the code this site's source data returns for the city -- but independent ZIP-boundary trackers city-data.com and zipdatamaps.com both describe its actual footprint as centered on Redstone Arsenal, the Army post that hosts the Army's Aviation and Missile Command, the Missile Defense Agency, and NASA's Marshall Space Flight Center. The arsenal's own post office, at 3710 Aerobee Road, operates under that same 35808 code.",
					"That's a different kind of blurred line than the one on this site's [Cincinnati list](/cincinnati-zip-codes/), where a defunct IRS processing center got its own dedicated code -- 35808 is an active federal installation folded into a city's ordinary ZIP list rather than carved out as an obviously administrative code like 35893 or 35899.",
				],
			},
			{
				heading: "256 split from 205 in 1998, then added an overlay 12 years later",
				body: [
					"Huntsville's [area code](/how-do-area-codes-work/), 256, didn't exist before March 23, 1998, when regulators split it off from 205, which had covered the entire state of Alabama since the North American Numbering Plan assigned area codes nationwide in 1947. 256 took the northern and northeastern part of the state -- Huntsville, Decatur, Florence, and Gadsden -- while 205 kept Birmingham and the rest; a permissive dialing period let callers use either code through September 28, 1998, while phone systems, pagers, and fax machines were reprogrammed.",
					"No second split followed 256's creation. What came next, on July 10, 2010, was an overlay: 938, layered onto the same 256 footprint rather than carving out a new slice of territory, so a new Huntsville-area number can land on either code while every number already dialing 256 stays put. Twelve years passed between the split and that overlay -- roughly the interval this site's [Toronto-area page](/437-area-code/) records between each of that region's own overlay additions, and a small fraction of the 74 years [Washington, D.C.](/202-area-code/) waited for its first one.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Huntsville, Alabama have?',
				answer:
					"24, per this site's GeoNames-based source data and matching zip-codes.com's independent count. All 24 sit inside Madison County.",
			},
			{
				question: 'What county is Huntsville, Alabama in?',
				answer:
					'Madison County. Unlike several other cities on this site, all 24 of Huntsville\'s ZIP codes fall inside a single county -- there\'s no split across a county line.',
			},
			{
				question: "What is Huntsville's area code?",
				answer:
					'256, created March 23, 1998, when it split off from 205, which had covered the whole state since 1947. An overlay code, 938, was added July 10, 2010, covering the same territory, so both can now be assigned to new numbers in the region.',
			},
			{
				question: 'Is Redstone Arsenal part of a Huntsville ZIP code?',
				answer:
					"Yes -- 35808 carries the Huntsville place name in USPS and GeoNames records, but independent ZIP-boundary trackers describe its footprint as centered on Redstone Arsenal, the Army post that hosts NASA's Marshall Space Flight Center and the Missile Defense Agency.",
			},
			{
				question: "Why do some Huntsville ZIP codes have no population data?",
				answer:
					"Seven of the 24 are unique ZIP codes, reserved for a single high-volume address rather than a residential area, so the Census Bureau doesn't publish population figures for them. Two are identified by name in public postal records: 35893 for Redstone Federal Credit Union and 35899 for the University of Alabama in Huntsville.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'All ZIP Codes, Map and Demographics of Huntsville, AL -- zip-codes.com', url: 'https://www.zip-codes.com/city/al-huntsville.asp' },
			{ label: 'Huntsville, AL ZIP Code List -- zipcodestogo.com', url: 'https://www.zipcodestogo.com/city/Huntsville/AL/' },
			{ label: 'ZIP Code 35893 (Redstone Federal Credit Union) -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/35893/zip-code-35893.asp' },
			{ label: '35808 Zip Code (Redstone Arsenal, Alabama) Profile -- city-data.com', url: 'https://www.city-data.com/zips/35808.html' },
			{ label: 'Redstone Arsenal Alabama ZIP Code Map -- zipdatamaps.com', url: 'https://www.zipdatamaps.com/en/us/zip-maps/al/cdp/borders/redstone-arsenal-zip-code-map' },
			{ label: 'Wikipedia: Area codes 256 and 938', url: 'https://en.wikipedia.org/wiki/Area_codes_256_and_938' },
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
		],
	},
	{
		slug: 'indianapolis-zip-codes',
		category: 'ZIP Codes',
		title: 'Indianapolis ZIP Codes: All 63, and the Four Cities Unigov Never Absorbed',
		description:
			"Indianapolis's 63 ZIP codes mostly sit in Marion County -- the result of a 1970 city-county merger that absorbed almost everything except four cities that still run their own police, fire, and mayor's office today.",
		published: '2026-08-21',
		updated: '2026-08-21',
		coreSummary:
			"USPS assigns 63 ZIP codes to \"Indianapolis, IN\" as the primary place name, and this site's source data ties 59 of them to Marion County -- a direct result of Unigov, the 1970 law that merged the governments of Indianapolis and Marion County into one. Unlike Nashville's [1963 merger with Davidson County](/nashville-zip-codes/), which went to a public referendum, Unigov was passed by the Indiana General Assembly with no county-wide vote at all, and it deliberately left four municipalities out: Beech Grove, Lawrence, and Southport kept their own mayors, and the town of Speedway kept its own council, along with all four keeping independent police and fire departments. Only one of the four, Beech Grove, also kept a ZIP code of its own, 46107; addresses in Lawrence, Southport, and Speedway still read \"Indianapolis, IN\" like the rest of Marion County. This site's data assigns the remaining four ZIP codes on the list, 46262, 46280, 46288, and 46290, to Hamilton County instead of Marion -- though a cross-check against zip-codes.com's own per-ZIP lookups agrees on only two of those four, a reminder that even directories built specifically to track ZIP-to-county boundaries don't always agree with each other.",
		sections: [
			{
				heading: 'All 63 ZIP codes with "Indianapolis, IN" as the primary USPS place name',
				body: [
					'Fifty-nine of the 63 sit in Marion County, per this site\'s source data. The other four are marked below, alongside a note on where independent sources disagree with that assignment.',
				],
				table: {
					caption: 'All 63 ZIP codes with "Indianapolis, IN" as the primary USPS place name, by county (per GeoNames.org, checked 2026-08-21)',
					columns: ['ZIP', 'County'],
					rows: [
						['46201', 'Marion'], ['46202', 'Marion'], ['46203', 'Marion'], ['46204', 'Marion'], ['46205', 'Marion'],
						['46206', 'Marion'], ['46207', 'Marion'], ['46208', 'Marion'], ['46209', 'Marion'], ['46211', 'Marion'],
						['46213', 'Marion'], ['46214', 'Marion'], ['46216', 'Marion'], ['46217', 'Marion'], ['46218', 'Marion'],
						['46219', 'Marion'], ['46220', 'Marion'], ['46221', 'Marion'], ['46222', 'Marion'], ['46224', 'Marion'],
						['46225', 'Marion'], ['46226', 'Marion'], ['46227', 'Marion'], ['46228', 'Marion'], ['46229', 'Marion'],
						['46230', 'Marion'], ['46231', 'Marion'], ['46234', 'Marion'], ['46235', 'Marion'], ['46236', 'Marion'],
						['46237', 'Marion'], ['46239', 'Marion'], ['46240', 'Marion'], ['46241', 'Marion'], ['46242', 'Marion'],
						['46244', 'Marion'], ['46247', 'Marion'], ['46249', 'Marion'], ['46250', 'Marion'], ['46251', 'Marion'],
						['46253', 'Marion'], ['46254', 'Marion'], ['46255', 'Marion'], ['46256', 'Marion'], ['46259', 'Marion'],
						['46260', 'Marion'], ['46262', 'Hamilton'], ['46266', 'Marion'], ['46268', 'Marion'], ['46274', 'Marion'],
						['46275', 'Marion'], ['46277', 'Marion'], ['46278', 'Marion'], ['46280', 'Hamilton'], ['46282', 'Marion'],
						['46283', 'Marion'], ['46285', 'Marion'], ['46288', 'Hamilton'], ['46290', 'Hamilton'], ['46291', 'Marion'],
						['46295', 'Marion'], ['46296', 'Marion'], ['46298', 'Marion'],
					],
				},
			},
			{
				heading: 'Two of the four "Hamilton County" codes don\'t hold up under a second lookup',
				body: [
					"A direct check against zip-codes.com's own per-ZIP pages confirms this site's Hamilton County assignment for two of the four: 46280 covers part of Carmel, an incorporated Hamilton County suburb, and 46290 is a low-population business and PO box code that zip-codes.com also places in Hamilton. For the other two, the same source disagrees outright -- its pages for both 46262 and 46288 list Marion County, not Hamilton, contradicting this site's own GeoNames-derived data. Neither ZIP code has enough independent coverage to settle which directory has it right, so this site is naming the disagreement rather than picking a side: readers who need a Hamilton-vs-Marion answer for 46262 or 46288 specifically should treat both counties as contested until a primary source, like Marion or Hamilton County's own GIS parcel lookup, resolves it.",
					"That disagreement is a smaller-scale version of the same lesson this site's [Cincinnati ZIP list](/cincinnati-zip-codes/) and [Huntsville ZIP list](/huntsville-zip-codes/) already document: a ZIP code's county tag and a city's mailing address don't always trace back to the same boundary, and different directories built from different source files can land on different answers for the exact same five digits.",
				],
			},
			{
				heading: 'Marion County became Indianapolis in 1970 -- almost all of it',
				body: [
					"The reason 59 of 63 Indianapolis ZIP codes sit in Marion County isn't incidental. On January 1, 1970, the Indiana General Assembly merged the government of the City of Indianapolis with the government of Marion County under a law known locally as Unigov, championed by then-mayor (and later U.S. Senator) Richard Lugar. Unlike [Nashville's 1963 merger with Davidson County](/nashville-zip-codes/), which required voters to approve a charter at the ballot box -- and which they rejected once, in 1958, before passing it in 1962 -- Unigov never went to a county-wide referendum at all. State legislators wrote and passed it directly.",
					"To get the law through, its authors carved out an exception: the cities of Beech Grove, Lawrence, and Southport, plus the town of Speedway, stayed outside the Consolidated City. Each kept its own police department, school system, and fire service on pre-Unigov borders; Beech Grove, Lawrence, and Southport also kept their own elected mayors, while Speedway, organized as a town rather than a city, kept its own town council instead. Residents of all four still pay county-wide taxes and vote both for their own local government and for the mayor of Indianapolis and a district seat on the City-County Council -- a double layer of representation that doesn't exist anywhere in Nashville's fully merged Davidson County.",
				],
			},
			{
				heading: "Only one of the four excluded cities kept its own ZIP code",
				body: [
					"Beech Grove -- a roughly 2.5-square-mile city entirely surrounded by Indianapolis on all sides -- is the only one of the four excluded municipalities with a ZIP code of its own, 46107, distinct from the Indianapolis list above. Lawrence, Southport, and Speedway all use \"Indianapolis, IN\" as their USPS mailing address despite running independent city or town governments; Speedway's own post office, at 6110 W. 25th Street, still files under ZIP code 46224 and the city name \"Indianapolis\" on its own listing.",
					"That's close to the mirror image of what this site found in Nashville, where four of the five satellite cities still standing lack their own ZIP and the one exception, Goodlettsville, plausibly kept its ZIP because it physically straddles a county line rather than because of any political independence. In Indianapolis, ZIP code assignment and self-government turn out to be almost entirely unrelated: three cities kept their own mayors and police forces for over fifty years and still share a ZIP list with the city that surrounds them.",
				],
			},
			{
				heading: "317 held alone for almost 70 years before Indianapolis got a second area code",
				body: [
					"Indianapolis has carried [area code](/how-do-area-codes-work/) 317 since 1947, one of the original codes assigned nationwide, and it briefly covered a much larger footprint before Gary and northern Indiana split off into 219 the following year and central Indiana outside the immediate metro split off into 765 in 1997. What came next wasn't a third split -- it was an overlay, the same growth response this site has documented for [Atlanta](/atlanta-area-code/): on March 15, 2016, regulators activated 463 across the identical nine-county footprint 317 already covered, so new numbers in the region draw from either code instead of any territory changing hands. On a phone keypad, 463 spells out \"IND,\" the same three letters as Indianapolis's airport code. Ten-digit dialing became mandatory that October, after regulators pushed the original September deadline back a month at the request of security alarm companies whose equipment still relied on seven-digit dialing.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Indianapolis have?',
				answer:
					"63, per this site's GeoNames-based source data. Fifty-nine sit in Marion County; the other four are split between confirmed and disputed Hamilton County assignments, detailed above.",
			},
			{
				question: 'What county is Indianapolis in?',
				answer:
					"Mostly Marion County -- the result of Unigov, a 1970 state law that merged the governments of Indianapolis and Marion County. Four municipalities, Beech Grove, Lawrence, Southport, and Speedway, were excluded from the merger and still run their own local governments today.",
			},
			{
				question: 'Is Beech Grove part of Indianapolis?',
				answer:
					"It's surrounded by Indianapolis and its residents vote for the Indianapolis mayor, but Beech Grove kept its own mayor, police department, and school system when Unigov merged the rest of Marion County in 1970. It's also the only one of the four excluded cities with its own ZIP code, 46107.",
			},
			{
				question: "Why does Carmel share a ZIP code with Indianapolis?",
				answer:
					"ZIP code 46280 is addressed as \"Indianapolis, IN\" by USPS despite covering part of Carmel, an incorporated Hamilton County suburb -- one of several cases nationally where a ZIP code's mailing-address city and its actual jurisdiction don't match.",
			},
			{
				question: "What is Indianapolis's area code?",
				answer:
					"317, assigned in 1947. It held the entire nine-county Indianapolis region alone until March 15, 2016, when regulators added an overlay code, 463, so both can now be assigned to new numbers in the same area.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'ZIP Code 46262 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/46262/zip-code-46262.asp' },
			{ label: 'ZIP Code 46288 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/46288/zip-code-46288.asp' },
			{ label: 'ZIP Code 46280 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/46280/zip-code-46280.asp' },
			{ label: 'ZIP Code 46290 -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/46290/zip-code-46290.asp' },
			{ label: 'Excluded Cities -- Encyclopedia of Indianapolis', url: 'https://indyencyclopedia.org/excluded-cities/' },
			{ label: 'Unigov -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Unigov' },
			{ label: 'Area codes 317 and 463 -- Wikipedia', url: 'https://en.wikipedia.org/wiki/Area_codes_317_and_463' },
			{ label: 'Speedway, Indiana post office listing -- USPS store locator', url: 'https://www.postallocations.com/in/indianapolis/speedway' },
		],
	},
	{
		slug: '214-area-code',
		category: 'Area Codes',
		title: "214 Area Code: Dallas's 1947 Original, Erased Back Into an Overlay in 1999",
		description:
			"214 has covered Dallas since 1947. After three splits shrank it, regulators reversed course in 1999, erasing a boundary to remerge 214 with 972 under a shared overlay with 469.",
		published: '2026-08-22',
		updated: '2026-08-22',
		coreSummary:
			"Area code 214 has covered the city of Dallas since 1947, when it was one of only four area codes assigned to the entire state of Texas. Three splits shrank its footprint over the following half-century, handing off 817 in 1953, 903 in 1990, and 972 in 1996. But when 972 itself neared exhaustion within a few years, Texas regulators didn't split it again. On July 1, 1999, they erased the boundary between 214 and 972 entirely, merging both into a single overlay with a third code, 469, stacked on top. A fourth, 945, followed in 2021. All four now share the same footprint: Dallas plus eight surrounding counties, entirely on Central Time.",
		sections: [
			{
				heading: 'The counties 214 shares with three other codes',
				body: [
					"The 214/469/972/945 overlay covers Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Navarro, and Rockwall counties, plus the eastern edge of Tarrant County: suburbs including Arlington, Bedford, Euless, Grapevine, Southlake, and Colleyville. Those Tarrant County towns sit closer to Dallas's numbering plan than to Fort Worth's, so they draw new numbers from 214, 469, 972, or 945 instead of Fort Worth's own overlay pair, 817 and 682, even though Tarrant County is otherwise Fort Worth's territory.",
					"One landmark splits the difference in the opposite direction: Dallas/Fort Worth International Airport, despite its name and location well inside the shared four-code region, is served specifically by 972 rather than any of the other three. All of it runs on Central Time, so unlike a numbering plan area straddling a time-zone line, a Dallas-area code carries no built-in ambiguity about when a business is actually open.",
				],
			},
			{
				heading: 'Four splits in fifty years, from one code covering a quarter of Texas',
				body: [
					"When the North American Numbering Plan launched in 1947, the entire state of Texas held only four area codes: 214 for the northeast, 512 for south-central Texas, 713 for the southeast, and 915 for the northwest and west. 214's original territory ran from a line just west of Dallas all the way to Waco and the Arkansas and Louisiana borders, far bigger than the compact Dallas-only footprint it holds today.",
					"In 1953, Fort Worth and Tarrant County broke off as area code 817, drawn mainly from the eastern half of 915 with a further sliver of 214's western edge folded in. That configuration held for 37 years. Then the pace picked up: 1990 split off the eastern portion of the state as area code 903, and by 1996 the Dallas-Fort Worth Metroplex's growth (cell phones, fax lines, pagers) forced a third split, sending everything outside the city of Dallas and Dallas County itself off to a new code, 972.",
				],
				diagramSvg: `<svg viewBox="0 0 680 190" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: area code 214 covers all of northeast Texas in 1947, splits off 817 in 1953 and 972 in 1996, merges with 972 into one overlay with 469 in 1999, and gains a fourth overlay, 945, in 2021">
	<line x1="45" y1="95" x2="635" y2="95" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="75" cy="95" r="9" fill="#131a27"/>
	<text x="75" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1947</text>
	<text x="75" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">214 covers NE</text>
	<text x="75" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Texas, Dallas</text>
	<text x="75" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">to the AR/LA line</text>
	<circle cx="245" cy="95" r="9" fill="#b5722f"/>
	<text x="245" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1953-96</text>
	<text x="245" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Three splits:</text>
	<text x="245" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">817, 903, then</text>
	<text x="245" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">972 break off</text>
	<circle cx="440" cy="95" r="9" fill="#131a27"/>
	<text x="440" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1999</text>
	<text x="440" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">214 and 972</text>
	<text x="440" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">re-merge, 469</text>
	<text x="440" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">overlays both</text>
	<circle cx="610" cy="95" r="9" fill="#b5722f"/>
	<text x="610" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">2021</text>
	<text x="610" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">945 joins as</text>
	<text x="610" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">a fourth</text>
	<text x="610" y="154" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">overlay</text>
</svg>`,
			},
			{
				heading: "1999: the boundary regulators erased instead of splitting again",
				body: [
					"972 barely had breathing room. Within a few years of its 1996 launch, both 214 and 972 were again approaching exhaustion, driven by the same Metroplex growth that had forced the two previous splits. Rather than draw a fourth boundary through the region, Texas regulators tried something none of [this site's other Texas area codes](/texas-area-codes/) have: on July 1, 1999, they erased the line between 214 and 972 entirely, converting both into a shared overlay covering the combined territory, and added a third code, 469, on top of it. Ten-digit dialing became mandatory for every local call in the region from that point on.",
					"That reversal makes Dallas the earlier of two places on this site where regulators un-split a boundary instead of drawing a new one. [Los Angeles did the same thing](/213-area-code/) with 213 and 323 in 2017, folding a 1998 split back into a shared overlay. Dallas got there first, by eighteen years. Every other overlay this site has covered ([Manhattan's 646](/646-area-code/), Toronto's 647 and 437) simply added a new code on top of an existing boundary; only Dallas and Los Angeles have gone the extra step of dissolving a split first. The reunified 214/972/469 stack gave the region roughly 23 million assignable phone numbers across the combined three codes, and even that wasn't the end. On January 15, 2021, the Public Utility Commission of Texas activated a fourth overlay, 945, after which new-number requests in the region could start drawing from it too.",
				],
			},
			{
				heading: "The scam that borrows Dallas Water Utilities' real phone number",
				body: [
					"The FCC's general caller-ID warning applies to any area code, including 214: scammers use a tactic the agency calls neighbor spoofing to fake a number that looks local, covered in more detail on [is there really a 'scam area code'?](/scam-area-codes/) Dallas has its own documented version of that trick. The Dallas Police Department's Financial Investigations Unit has warned residents about fraudsters spoofing Dallas Water Utilities' actual main line, 214-651-1441, on caller ID, then telling existing DWU customers their water service will be shut off unless they pay immediately.",
					"DPD's guidance for anyone who gets a call like this: don't pay over the phone. It directs victims to email a complaint to the department's forgery unit or call 214-671-3543 to report it, or to visit the nearest police substation in person if email isn't an option. It's the same advice this site has seen utilities in other area codes give about a strikingly similar scam script.",
				],
			},
		],
		faq: [
			{
				question: 'What counties does the 214 area code cover?',
				answer:
					"Collin, Dallas, Denton, Ellis, Johnson, Kaufman, Navarro, and Rockwall counties, plus a slice of eastern Tarrant County covering suburbs including Arlington, Bedford, Euless, Grapevine, Southlake, and Colleyville. All of it shares the same footprint with area codes 469, 972, and 945.",
			},
			{
				question: 'Why did 214 and 972 merge back together instead of splitting again in 1999?',
				answer:
					"Both codes were nearing exhaustion again just a few years after 972 split off from 214 in 1996. Instead of drawing a fourth boundary, Texas regulators erased the 214/972 line on July 1, 1999, converting both into a shared overlay and adding a third code, 469, on top, avoiding the disruption of forcing another set of customers to change their area code.",
			},
			{
				question: 'Is 214 the same area as 469, 972, and 945?',
				answer:
					'Yes. All four cover the identical footprint: Dallas and the eight counties and partial county listed above. A new number requested anywhere in that region today could be assigned any of the four codes, with no difference in territory.',
			},
			{
				question: 'Why do some Fort Worth-area suburbs use a Dallas area code?',
				answer:
					"Towns in eastern Tarrant County, including Arlington, Bedford, Euless, Grapevine, Southlake, and Colleyville, sit closer to Dallas's numbering plan area than to Fort Worth's, so new numbers there draw from 214, 469, 972, or 945 rather than Fort Worth's own overlay pair, 817 and 682, even though the county itself is otherwise Fort Worth's territory.",
			},
			{
				question: 'Is a call showing a 214 number always really coming from Dallas?',
				answer:
					"No. Caller ID can be faked through neighbor spoofing, documented by the FCC, where a scammer displays a local-looking number regardless of where the call originates. Dallas police have specifically warned about this being used to impersonate Dallas Water Utilities' real phone line to threaten customers with a fake service shutoff.",
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
			{ label: 'Wikipedia: Area codes 214, 469, 972, and 945', url: 'https://en.wikipedia.org/wiki/Area_codes_214,_469,_972,_and_945' },
			{ label: 'Wikipedia: Area codes 817 and 682', url: 'https://en.wikipedia.org/wiki/Area_codes_817_and_682' },
			{
				label: 'CBS News Texas: Police warn about Dallas Water Utilities spoofing scam',
				url: 'https://www.cbsnews.com/texas/news/dallas-water-utilities-scam-alert/',
			},
			{ label: 'FCC: Caller ID Spoofing', url: 'https://www.fcc.gov/consumers/guides/spoofing' },
		],
	},
	{
		slug: 'irvine-zip-codes',
		category: 'ZIP Codes',
		title: "Irvine, CA ZIP Codes: The Full List, and the $1 Land Sale That Started the City",
		description:
			"All 13 ZIP codes USPS assigns to Irvine, California, entirely inside Orange County, plus the 1960 sale that created UC Irvine and the Northpark strip that still dials on 714 instead of 949.",
		published: '2026-08-22',
		updated: '2026-08-22',
		coreSummary:
			"USPS assigns 13 ZIP codes to Irvine, California, and every one of them sits inside Orange County. What sets this list apart from this site's other single-county ZIP pages is the order events happened in: the Irvine Company transferred 1,000 acres of its cattle ranch to the University of California for one dollar in September 1960, UC Irvine opened for classes in 1965, and the city built up around that campus wasn't incorporated until December 28, 1971, six years later. One of the 13 codes, 92697, belongs to the campus itself rather than any neighborhood, and zip-codes.com's delivery-type tally classifies it \"Unique,\" alongside 9 standard routes and 3 PO Box codes. Not all of Irvine dials on the area code most people associate with the city, either: Wikipedia's service-area note for 949 carves out a strip of Northpark Irvine that still runs on 714.",
		sections: [
			{
				heading: "One ZIP code with no neighborhood at all",
				body: [
					"92697 doesn't cover a street or a subdivision. It's the campus of the University of California, Irvine, and zip-codes.com's delivery-type classification tags it \"Unique\" rather than standard or PO Box: one recipient, not a residential route. That code is one of 13 that carry \"Irvine, CA\" as their USPS place name, per GeoNames; the rest split into 9 ordinary delivery routes and three PO Box-only codes, 92616, 92619, and 92623, and every single one of the 13 falls inside one county, Orange.",
					"A fourteenth code, 92650, turns up as a fourth PO Box entry on zip-codes.com's Irvine city page. It doesn't carry \"Irvine, CA\" as its primary place name in the GeoNames dataset this table draws from, so it's left off the 13 below.",
				],
				table: {
					caption: 'All 13 ZIP codes with "Irvine, CA" as the primary USPS place name (per GeoNames.org, checked 2026-08-22)',
					columns: ['ZIP'],
					rows: [
						['92602'], ['92603'], ['92604'], ['92606'], ['92612'],
						['92614'], ['92616'], ['92617'], ['92618'], ['92619'],
						['92620'], ['92623'], ['92697'],
					],
				},
			},
			{
				heading: 'The land the university bought for a dollar',
				body: [
					"Irvine's 13 ZIP codes cover ground that was still a working cattle and citrus ranch, roughly 93,000 acres known as the Irvine Ranch, within living memory of people who once worked it. UC president Clark Kerr picked the site in 1959 from a list of candidate parcels architect William Pereira had scouted the year before. In September 1960 the Irvine Company transferred title on 1,000 acres to the university, and UC Irvine's own institutional history records that the company charged one dollar for it because a company charter barred donating property outright to a public entity, so a token sale satisfied the rule instead. President Lyndon B. Johnson dedicated the land in 1964, telling the assembled crowd: \"California is not just talking about education. You are doing something about it.\" UC Irvine opened for classes on October 4, 1965, with 1,589 students.",
					"The city around that campus hadn't been built yet. Pereira and Irvine Company planners drew up a master plan for a community of 50,000 people radiating outward from the university, and the first phases of five founding villages, Turtle Rock, University Park, Westpark, El Camino Real, and Walnut, were finished by 1970. Residents of those villages voted to incorporate on December 28, 1971, choosing a city substantially larger than Pereira's original blueprint called for, according to Wikipedia's account of that vote. By then the campus the city is named around had already been operating for six years.",
				],
				diagramSvg: `<svg viewBox="0 0 680 190" width="100%" style="max-width:680px;height:auto;display:block;margin:0 auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline: Irvine Company transfers land to UC for one dollar in 1960, UC Irvine opens for classes in 1965, and the city of Irvine incorporates in 1971">
	<line x1="50" y1="95" x2="630" y2="95" stroke="#1a2332" stroke-width="2" opacity="0.25"/>
	<circle cx="90" cy="95" r="9" fill="#131a27"/>
	<text x="90" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1960</text>
	<text x="90" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">Ranch land sold</text>
	<text x="90" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">to UC for $1</text>
	<circle cx="360" cy="95" r="9" fill="#b5722f"/>
	<text x="360" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1965</text>
	<text x="360" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">UC Irvine opens,</text>
	<text x="360" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">1,589 students</text>
	<circle cx="610" cy="95" r="9" fill="#131a27"/>
	<text x="610" y="65" text-anchor="middle" fill="#1a2332" font-size="14" font-weight="700" font-family="ui-sans-serif, system-ui">1971</text>
	<text x="610" y="122" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">City of Irvine</text>
	<text x="610" y="138" text-anchor="middle" fill="#1a2332" font-size="12" font-family="ui-sans-serif, system-ui">incorporates</text>
</svg>`,
			},
			{
				heading: 'What the campus ZIP code does to a population count',
				body: [
					"Because 92697 carries no residential route, it complicates any estimate of Irvine's population built purely from ZIP-level data. Summing the residents zip-codes.com counts across the city's other 12 codes comes to roughly 307,670, short of the 318,629 Wikipedia cites for the city overall as of mid-2025. A single-institution code like 92697 simply doesn't carry a population figure the way a standard route does, so a ZIP-by-ZIP tally will always undercount a city that has one.",
					"The remaining 12 codes split into 9 standard routes, ordinary neighborhood delivery, and 3 PO Box codes: 92616, 92619, and 92623. None of the three is tied to one large recipient the way 92697 is; they simply separate box-only mail from street delivery within a given area.",
				],
			},
			{
				heading: "The Irvine block that isn't on 949",
				body: [
					"949 has covered Southern Orange County, Irvine included, since splitting off from 714 on April 18, 1998, the same split this site's [California area codes list](/california-area-codes/) tracks alongside the rest of the state's numbering history. Wikipedia's service-area note for 949 carves out one exception inside Irvine: a strip of the Northpark neighborhood, running from the north side of Culver Drive at Interstate 5 to Jamboree Road, that still dials on 714.",
					"714 predates 949 by nearly half a century. It split off from California's original 213 in 1951, decades before Irvine existed as a city, and it later picked up an overlay, 657, on September 23, 2008. The area-code field on zip-codes.com's per-ZIP pages for Irvine reflects that same boundary blur: 11 of the city's 13 codes list 949 alongside 714, 657, or both, and only two, 92602 and 92604, show 949 by itself. See this site's [rundown of how area codes actually work](/how-do-area-codes-work/) for why a numbering-plan boundary and a city's edge rarely line up exactly.",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Irvine, CA have?',
				answer:
					"13, per this site's GeoNames-sourced dataset, all inside Orange County. zip-codes.com's delivery-type tally splits those into 9 standard routes, 3 PO Box codes, and one code tagged \"Unique,\" 92697, reserved for UC Irvine. A fourth PO Box code, 92650, also shows up on zip-codes.com's Irvine city page but isn't part of this site's core 13-code dataset.",
			},
			{
				question: 'What county is Irvine, California in?',
				answer: "Orange County. All 13 of the city's ZIP codes fall inside it; there is no county split on this list.",
			},
			{
				question: 'When was the city of Irvine incorporated?',
				answer:
					"December 28, 1971, six years after UC Irvine, the university the city grew up around, opened for classes in October 1965. The Irvine Company had transferred the university's 1,000-acre campus site for one dollar back in September 1960.",
			},
			{
				question: 'What ZIP code is UC Irvine?',
				answer:
					"92697. It's the only one of Irvine's 13 ZIP codes assigned to a single institution rather than a stretch of streets, which is also why it doesn't carry a residential population figure in zip-codes.com's tally.",
			},
			{
				question: 'Does all of Irvine use area code 949?',
				answer:
					"Nearly all of it, but not quite. 949 has served Southern Orange County since splitting from 714 in 1998, but Wikipedia notes that a strip of the Northpark neighborhood, from Culver Drive at Interstate 5 to Jamboree Road, still dials on 714 instead.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'All ZIP Codes, Map and Demographics of Irvine, CA -- zip-codes.com', url: 'https://www.zip-codes.com/city/ca-irvine.asp' },
			{ label: 'Wikipedia: Irvine, California', url: 'https://en.wikipedia.org/wiki/Irvine,_California' },
			{ label: 'Wikipedia: University of California, Irvine', url: 'https://en.wikipedia.org/wiki/University_of_California,_Irvine' },
			{ label: 'UC Irvine 60th Anniversary: Pre-1965 Archives (Irvine Company land transfer, $1 sale)', url: 'https://uci.edu/60th/pre-1965.php' },
			{ label: 'Wikipedia: Area code 949', url: 'https://en.wikipedia.org/wiki/Area_code_949' },
			{ label: 'Wikipedia: Area codes 714 and 657', url: 'https://en.wikipedia.org/wiki/Area_codes_714_and_657' },
		],
	},
	{
		slug: 'long-beach-zip-codes',
		category: 'ZIP Codes',
		title: "Long Beach, CA ZIP Codes: The Full List, From a City That Isn't a County Seat",
		description:
			"All 27 ZIP codes GeoNames assigns to Long Beach, California, why the city runs its own health department instead of routing through Los Angeles County, and which codes have almost no residents at all.",
		published: '2026-08-22',
		updated: '2026-08-22',
		coreSummary:
			"Long Beach is the largest city in California that isn't a county seat, according to Wikipedia's profile of the city: with roughly 450,469 residents as of 2025, it outsizes plenty of California cities that do sit at the head of a county, yet Los Angeles, twenty miles up the coast, holds that title for the county Long Beach belongs to. GeoNames assigns 27 ZIP codes to Long Beach, and this site's data confirms every one of them falls inside Los Angeles County. But size and status split again at the health department: Long Beach runs its own, one of only four city-operated health departments left in California, alongside Berkeley, Pasadena, and the small industrial city of Vernon, rather than leaving that job to the county the way most of its neighboring cities do. Of the 27 ZIP codes, zip-codes.com's delivery-type lookup classifies six as \"Unique,\" reserved for a single institution rather than a residential route, and one of those, 90840, is the campus of California State University, Long Beach.",
		sections: [
			{
				heading: '27 ZIP codes, one county, and a city bigger than most county seats',
				body: [
					"Los Angeles holds the title of seat for Los Angeles County; Long Beach never has, despite outgrowing plenty of actual county seats along the way. Wikipedia puts Long Beach's 2025 population at roughly 450,469, good for 44th nationally and 7th in California, and that same profile calls it the largest city in the state that isn't a county seat at all. GeoNames' postal-code dataset still ties Long Beach to that same county on paper: all 27 ZIP codes assigned to the city fall inside Los Angeles County, with no split the way some other cities on this site's lists have.",
					"Three of those 27 codes, 90834, 90835, and 90899, returned no individual record when checked against zip-codes.com's lookup tool on August 22, 2026, unlike the other 24, which all resolve. The remaining 24 split by delivery type into 14 standard residential routes, 4 PO Box-only codes (90801, 90809, 90832, and 90853), and 6 codes zip-codes.com classifies \"Unique,\" set aside for a single business, government office, or institution rather than a stretch of streets.",
				],
				table: {
					caption: 'The 24 Long Beach ZIP codes with a resolvable zip-codes.com record, by delivery type (checked 2026-08-22)',
					columns: ['Type', 'ZIP codes'],
					rows: [
						['Standard', '90802, 90803, 90804, 90805, 90806, 90807, 90808, 90810, 90813, 90814, 90815, 90822, 90831, 90833'],
						['PO Box', '90801, 90809, 90832, 90853'],
						['Unique', '90840, 90842, 90844, 90846, 90847, 90848'],
					],
				},
			},
			{
				heading: "The county job Long Beach doesn't hand off",
				body: [
					"All 27 of those ZIP codes carry the same county on this site's records, Los Angeles, but Long Beach doesn't route every civic function through that county the way its neighbors do. The city's health department page states that Long Beach runs its own department, separate from the county; Berkeley's local news outlet, Berkeleyside, counts Long Beach among three California cities that do this, alongside Berkeley itself and Pasadena, though a fourth, the small industrial city of Vernon, also operates one, according to that city's government website. For a city whose ZIP codes all report to Los Angeles County on paper, that's one civic function Long Beach never outsourced.",
					"The department the city describes runs more than 500 employees across nine locations on an annual budget near $117 million, according to that same city page, funded mostly through federal, state, and county pass-through dollars rather than city general funds alone.",
				],
			},
			{
				heading: 'A campus ZIP code with a population of 8',
				body: [
					"90840 carries California State University, Long Beach entirely by itself. zip-codes.com's records show a total population of 8 for that code, not a typo, since a single campus doesn't generate the kind of residential count a neighborhood-wide ZIP does, and the lookup service groups it with the handful of codes reserved for one organization instead of a stretch of streets, the category this article's table above labels \"Unique.\"",
					"Five more codes, 90842, 90844, 90846, 90847, and 90848, carry that same \"Unique\" label on zip-codes.com, but the lookup tool doesn't publish which single business or office each one serves, only that USPS treats each as a single mail recipient, not a stretch of addresses. 90822 sits close to that pattern without officially joining it: zip-codes.com classifies it \"Standard,\" yet its total population comes back at 54, and the Department of Veterans Affairs' website lists that code as home to the VA Long Beach Healthcare System, including the Tibor Rubin VA Medical Center.",
				],
			},
			{
				heading: 'An area code inherited twice over',
				body: [
					"Long Beach dials on 562, a code this site's area-code records date to January 25, 1997, when it split off from 310. That earlier code, 310, is itself a split, carved out of 213 on November 2, 1991. This site's [rundown of the 213 area code's overlay history](/213-area-code/) covers that same chain of splits in more depth, including why a hip-hop group named itself after 213 years after Long Beach itself had already moved to 310. For the state's full numbering history beyond just Long Beach, see this site's [California area codes list](/california-area-codes/); for how Los Angeles's ZIP codes compare, see the [full Los Angeles ZIP code list](/los-angeles-zip-codes/).",
				],
			},
		],
		faq: [
			{
				question: 'How many ZIP codes does Long Beach, CA have?',
				answer:
					"27, per GeoNames, all inside Los Angeles County. Of those, 24 resolve to an individual record on zip-codes.com: 14 standard residential routes, 4 PO Box-only codes, and 6 codes classified \"Unique\" for single institutions. Three codes, 90834, 90835, and 90899, returned no record on zip-codes.com as of August 22, 2026.",
			},
			{
				question: 'Is Long Beach the county seat of Los Angeles County?',
				answer:
					"No. Los Angeles holds that title, even though Long Beach, per Wikipedia, is the largest city in California that isn't a county seat at all, with roughly 450,469 residents as of 2025.",
			},
			{
				question: 'Does Long Beach have its own health department?',
				answer:
					"Yes. The city's health department page describes Long Beach as running its own department rather than relying on the county; Berkeleyside counts three cities that do this, Long Beach, Berkeley, and Pasadena, though a fourth, the industrial city of Vernon, also runs one. That's separate from the Los Angeles County health department that covers most other cities in the county.",
			},
			{
				question: 'What ZIP code is California State University, Long Beach?',
				answer:
					"90840. zip-codes.com classifies it \"Unique,\" the tier reserved for a single institution rather than a residential route, and its own population count for that code comes back at 8.",
			},
			{
				question: 'What area code does Long Beach, CA use?',
				answer:
					"562, which split off from 310 on January 25, 1997. 310 itself had split from 213 on November 2, 1991, so Long Beach's current code is two splits removed from the area code that once covered all of central Los Angeles.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Wikipedia: Long Beach, California', url: 'https://en.wikipedia.org/wiki/Long_Beach,_California' },
			{ label: 'City of Long Beach: Health Department', url: 'https://www.longbeach.gov/health/' },
			{ label: 'Berkeleyside: Why does Berkeley have its own public health department?', url: 'https://www.berkeleyside.org/2020/04/15/berkeley-is-unusual-in-having-its-own-public-health-division-how-does-that-work-during-a-pandemic' },
			{ label: 'City of Vernon: Health and Environmental Control Department', url: 'https://www.cityofvernonca.gov/government/health' },
			{ label: 'ZIP Code 90840 Info -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/90840/zip-code-90840.asp' },
			{ label: 'ZIP Code 90822 Info -- zip-codes.com', url: 'https://www.zip-codes.com/zip-code/90822/zip-code-90822.asp' },
			{ label: 'VA Long Beach Healthcare System -- Contact Us', url: 'https://www.va.gov/long-beach-health-care/contact-us/' },
		],
	},
];
