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
		title: 'Dallas ZIP Codes: The Full List, Including Four That Belong to a Town Dallas Could Never Annex',
		description:
			"Every ZIP code USPS assigns to Dallas, Texas, sits in a single county -- but four of them actually belong to a 2.2-square-mile town that has stayed legally independent of Dallas since 1915, and voted down annexation twice.",
		published: '2026-08-04',
		updated: '2026-08-04',
		coreSummary:
			"USPS assigns 105 ZIP codes with Dallas as the primary place name, and unlike Atlanta or New York, every one of them sits in a single county: Dallas County. But four of those 105 -- 75205, 75209, 75219, and 75225 -- don't actually belong to the city of Dallas. They're the ZIP codes of Highland Park, a legally independent town that Dallas tried to annex for more than 25 years and never managed to.",
		sections: [
			{
				heading: 'All 105 ZIP codes USPS assigns to Dallas',
				body: [
					"USPS lists 105 ZIP codes with \"Dallas, TX\" as the primary place name -- the exact count [Texas ZIP codes](/texas-zip-codes/) puts second behind Houston's 178 and ahead of San Antonio's 83. Every one of the 105 sits in Dallas County; Dallas doesn't split across a county line the way Atlanta splits between Fulton and DeKalb -- the same single-county pattern holds for [New York City's five boroughs](/new-york-zip-codes/), each of which lines up exactly with one county too.",
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
					"Highland Park voted to incorporate on November 29, 1913, and the town's charter was granted in 1915. It sits about four miles from downtown Dallas, bordered by Dallas on three sides and by its sister town, University Park, on the fourth. Dallas began trying to annex Highland Park in 1919, and the fight dragged on until 1945 -- Highland Park's leaders resisted every attempt, and the town never gave in. After failing to take Highland Park directly, Dallas annexed the land surrounding it instead, turning the 2.2-square-mile town into what's often described as an island city completely encircled by a larger one.",
					"Highland Park's ZIP codes are 75205, 75209, 75219, and 75225 -- all four appear in the table above under \"Dallas, TX,\" because that's the place name USPS's postal database assigns to that stretch of ZIP-code territory, not because the town is part of the city.",
				],
			},
			{
				heading: 'University Park fought the same fight, and shares the enclave',
				body: [
					"University Park, which grew up around Southern Methodist University after SMU opened in 1915, incorporated on April 24, 1924 -- residents had first tried to get annexed into Highland Park or Dallas, and both turned the request down over the cost of extending services. Two decades later, when Dallas came looking to annex the now-established suburb, University Park voters said no again: in the largest turnout the town had seen to that point, residents rejected annexation by a 53%-to-47% margin in 1945.",
					"Highland Park and University Park together are known as the Park Cities -- two separate governments, two separate police departments, and a shared school district (Highland Park ISD) that predates both cities' modern boundaries. As of the 2010 census, the Park Cities had a combined population of 31,632.",
				],
			},
			{
				heading: 'Why USPS still calls their mail "Dallas, TX"',
				body: [
					"A ZIP code's primary place name is a USPS mail-routing label, not a legal boundary -- the same distinction that puts several independent [Atlanta-area suburbs](/atlanta-zip-codes/) under an \"Atlanta, GA\" ZIP. USPS updates its place-name database on its own schedule, largely independent of when a city incorporates or where its limits actually sit, so Highland Park and University Park residents can hold their own driver's licenses, pay property taxes to their own city hall, and still get mail addressed to \"Dallas, TX 75205.\"",
				],
			},
		],
		faq: [
			{
				question: 'What is the main ZIP code for Dallas?',
				answer: "There isn't a single one -- Dallas uses 105 ZIP codes. Downtown alone spans three of them: 75201, 75202, and 75270.",
			},
			{
				question: 'Is Highland Park, Texas part of Dallas?',
				answer:
					"No. Highland Park is a legally independent town that has never been part of the city of Dallas -- it incorporated in 1915 and successfully resisted Dallas annexation attempts from 1919 to 1945.",
			},
			{
				question: 'Why do Highland Park\'s ZIP codes say "Dallas, TX"?',
				answer:
					'Because USPS ZIP-code place names are a mail-routing convention, not a legal designation. Highland Park\'s four ZIP codes -- 75205, 75209, 75219, and 75225 -- are filed under "Dallas, TX" in USPS\'s postal database even though the town has its own government, police department, and school district.',
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'Wikipedia: Highland Park, Texas', url: 'https://en.wikipedia.org/wiki/Highland_Park,_Texas' },
			{ label: 'Wikipedia: University Park, Texas', url: 'https://en.wikipedia.org/wiki/University_Park,_Texas' },
			{ label: 'Wikipedia: Downtown Dallas', url: 'https://en.wikipedia.org/wiki/Downtown_Dallas' },
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
		title: "All 41 California Area Codes, Plus the Family Tree Behind LA's Six",
		description:
			"Every one of California's 41 area codes, mapped to its region and the year it went into service -- plus how Los Angeles alone split and overlaid its way from a single 1947 code, 213, to six today.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"California started with three area codes in 1947 -- 213 (southern California), 415 (northern California), and 916 (the Sacramento area, added slightly later that year) -- and now has 41, more than any other US state. Los Angeles alone has split and overlaid its way from 213 to six area codes covering the same general metro area today.",
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
				heading: 'Los Angeles: from one code in 1947 to six today',
				body: [
					"213 covered the entire southern third of California when it launched in 1947. Los Angeles's own growth forced five splits off of 213 over the following decades -- 714 (1951, Orange County), 805 (1957, the central coast), 818 (1984, the San Fernando Valley), 310 (1991, the southwestern coast), and 323 (1998, the rest of central LA) -- before the pattern shifted from splitting to overlaying: 424 stacked onto 310 in 2006, 747 onto 818 in 2009, and, after 213 and 323 were formally merged back into a single overlay complex in 2017, a sixth code, 738, was added on top of that combined area in November 2024.",
					"San Francisco followed a similar but smaller path: 415 (1947) split off 408 and 707 in 1959, then 510 and 650 in the early 1990s, before finally being overlaid by 628 in 2015 once splitting stopped being an option. Sacramento took the simplest route of any major California metro -- one split-free run on 916 from 1947 all the way to 2018, when 279 was added as an overlay.",
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
					'213, 323, 310, 424, 818, 747, and 738 all currently overlay parts of the greater LA area -- all descendants of the single area code, 213, that covered the entire southern third of California in 1947.',
			},
			{
				question: 'What was the very first California area code?',
				answer:
					'California launched with three in 1947: 213 for the southern part of the state, 415 for the north (San Francisco), and 916 for the Sacramento area.',
			},
		],
		sources: [
			{ label: 'Wikipedia: List of North American Numbering Plan area codes', url: 'https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes' },
		],
	},
	{
		slug: 'michigan-area-codes',
		category: 'Area Code Lists',
		title: "Every Michigan Area Code, and the Split Tree Behind Detroit's Newest",
		description:
			"Michigan has 13 area codes today, seven descended from Detroit's original 313 -- here's the full list, plus the split-and-overlay chain behind each one, including the newest, 679.",
		published: '2026-08-10',
		updated: '2026-08-10',
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
					"One metro area's original code eventually accounting for the majority of its state's total isn't unique to Michigan -- [California's own area code history](/california-area-codes/) shows the same pattern at a larger scale, where Los Angeles alone traces through six generations of splits and overlays back to a single 1947 code, 213.",
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

	// ---------------------------------------------------------------------
	// Counties
	// ---------------------------------------------------------------------
	{
		slug: 'what-county-is-chicago-in',
		category: 'Counties',
		title: 'What County Is Chicago In?',
		description:
			"Chicago is entirely inside Cook County -- all 84 of its ZIP codes, no split with a neighboring county. Cook is the second-most-populous county in the US, and it's losing that spot to Houston's Harris County.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"Chicago is entirely within Cook County, Illinois -- every one of the 84 ZIP codes USPS assigns to Chicago sits in Cook County, with no cross-county split. Cook County was established in 1831, has Chicago as its seat, and contains 135 separate incorporated municipalities beyond Chicago itself. It's the second-most-populous county in the US at roughly 5.18 million people, but it's the only one of the top three that's shrinking -- Harris County, Texas (Houston) is projected to overtake it.",
		sections: [
			{
				heading: 'Chicago is entirely inside Cook County',
				body: [
					"Unlike Atlanta (split between Fulton and DeKalb) or several other major US cities, Chicago doesn't straddle a county line. All 84 ZIP codes with Chicago as their primary USPS place name sit inside Cook County, Illinois, and Cook County has been Chicago's home county since the county's creation in 1831 by the Illinois state legislature -- the 54th county established in the state.",
				],
			},
			{
				heading: 'Cook County is much bigger than just Chicago',
				body: [
					"Chicago is Cook County's seat and by far its largest city, but the county contains 135 separate incorporated municipalities in total -- 23 cities, 1 town, and 111 villages, either entirely or partially within its boundaries. Well-known Chicago suburbs like Evanston, Oak Park, Cicero, and Skokie are all their own separate municipalities inside Cook County, distinct from Chicago itself even though they're commonly lumped together as \"Chicago\" in casual conversation.",
				],
			},
			{
				heading: "Cook County is the second-largest US county by population, and shrinking",
				body: [
					'Cook County\'s population of roughly 5.18 million makes it the second-most-populous county in the country, behind only Los Angeles County, California. But Cook is the only county in the national top three that\'s losing population -- it\'s down about 81,000 residents since 2020, while third-place Harris County, Texas (Houston\'s home county) added roughly 106,000 residents in a single recent year and is on track to pass Cook County for the number-two spot.',
				],
			},
		],
		faq: [
			{
				question: 'What county is Chicago in?',
				answer:
					"Chicago is entirely inside Cook County -- all 84 of the city's ZIP codes fall within it, with no split into a neighboring county.",
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
			{ label: 'US Census Bureau: counties that have topped one million population', url: 'https://www.census.gov/library/stories/2025/03/million-person-counties.html' },
		],
	},
	{
		slug: 'what-county-is-houston-in',
		category: 'Counties',
		title: 'What County Is Houston In?',
		description:
			"Houston is entirely inside Harris County, its address labeled that way for every one of the city's 178 ZIP codes -- and Harris County is about to overtake Chicago's Cook County as the second most populous county in the US.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"Houston is entirely within Harris County, Texas -- every one of the 178 ZIP codes USPS assigns to Houston sits in Harris County. Harris County was founded in December 1836, with Houston named its county seat that same month. It's currently the third-most-populous county in the US at roughly 5.01 million people and is growing faster than any other county in the country -- on track to overtake Cook County, Illinois (Chicago) for second place nationally.",
		sections: [
			{
				heading: 'Houston is entirely inside Harris County',
				body: [
					"Every one of the 178 ZIP codes USPS lists with Houston as the primary place name sits inside Harris County, Texas -- no cross-county split the way some major US cities have. Harris County was founded on December 22, 1836, and organized the following March; Houston was named the county seat that same December, and has held the role ever since. The county takes its name from John Richardson Harris, who founded the town of Harrisburg on Buffalo Bayou a decade earlier, in 1826.",
				],
			},
			{
				heading: 'Harris County is about to become the second-largest county in the US',
				body: [
					"Harris County's population of roughly 5.01 million currently ranks third nationally, behind Los Angeles County, California and Cook County, Illinois (Chicago). But Harris County added about 106,000 residents in a single recent 12-month period -- more than any other county in the country -- while Cook County lost population over the same stretch. On current trends, Harris is projected to pass Cook and become the second-most-populous county in the US, a shift that would end Cook County's decades-long hold on that spot.",
				],
			},
		],
		faq: [
			{
				question: 'Is Houston in Harris County?',
				answer: "Yes, entirely -- every Houston ZIP code sits inside Harris County, with no split into a neighboring county.",
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
			{ label: 'Axios Houston: Harris County poised to become 2nd most populous county', url: 'https://www.axios.com/local/houston/2025/03/13/harris-county-second-largest-county-by-population-houston-migration-boom' },
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
];
