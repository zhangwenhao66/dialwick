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
		title: 'Atlanta ZIP Codes: The Full List, and Why Some Say Fulton and Others Say DeKalb',
		description:
			"Every ZIP code USPS assigns to Atlanta, Georgia -- which of the two counties each one actually sits in, why several Atlanta suburbs mail-address as their own separate cities, and the one Atlanta ZIP that belongs to the IRS.",
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
				],
				table: {
					caption: 'All 92 ZIP codes with "Atlanta, GA" as the primary USPS place name, by county',
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
						['30336', 'Fulton'], ['30337', 'Fulton'], ['30338', 'Fulton'], ['30339', 'Fulton'],
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
					"39901 doesn't fit the pattern of the other 91 ZIPs at all -- it's numerically far outside Georgia's normal 30000-31999 block, and it isn't a delivery area anyone lives in. It's a unique ZIP code the USPS assigns to a single large-volume mail recipient: the IRS's Atlanta service center. Other IRS processing centers get the same treatment (Austin, TX uses 73301; Fresno, CA uses 93888) -- when an organization receives enough mail, USPS carves out a ZIP that belongs to it alone, regardless of where that number would otherwise fall on the map.",
				],
			},
			{
				heading: 'Several of Atlanta\'s best-known suburbs are not "Atlanta" ZIPs at all',
				body: [
					"Sandy Springs, Dunwoody, and Brookhaven all incorporated as their own independent cities between 2005 and 2012, but ZIP codes don't automatically follow city incorporations -- USPS updates its place-name database on its own schedule, which is why mail to parts of Sandy Springs and Dunwoody sometimes still shows \"Atlanta, GA\" as the recommended city name even though neither is legally part of Atlanta. Conversely, some of the DeKalb ZIPs in the table above (30338, 30350) already show \"Dunwoody\" as an acceptable alternate. This is normal and doesn't affect mail delivery; ZIP boundaries and municipal boundaries are two different systems that were never designed to match.",
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
		],
	},
	{
		slug: 'new-york-zip-codes',
		category: 'ZIP Codes',
		title: 'New York City ZIP Codes: All 311, by Borough',
		description:
			"NYC's five boroughs use 311 ZIP codes between them -- and Queens is the one borough where the ZIP code map doesn't run through neighborhood names most outsiders have never heard of, not the borough name itself.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"New York City's five boroughs together use 311 ZIP codes: 146 in Manhattan (New York County), 79 in Queens, 47 in Brooklyn (Kings County), 25 in the Bronx, and 14 on Staten Island (Richmond County). Manhattan, Brooklyn, the Bronx, and Staten Island ZIPs are all addressed with the borough name; Queens is the outlier -- its ZIPs are addressed by neighborhood (Astoria, Flushing, Jamaica, and 37 others), never \"Queens.\"",
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
					"Ask for a Brooklyn ZIP code and USPS calls it \"Brooklyn.\" Ask for a Staten Island ZIP and it's \"Staten Island.\" Queens breaks that pattern entirely -- every one of its 79 ZIP codes is addressed by an older, more local place name instead: Astoria, Long Island City, Flushing, Jamaica, Forest Hills, Rockaway Park, and 33 others. \"Queens\" itself never appears as a USPS place name.",
					"The reason predates the five-borough City of New York itself: Queens was consolidated in 1898 from a patchwork of existing towns and villages that already had their own post offices, and the US Post Office simply kept using those established names rather than replacing them with the new borough name. Brooklyn, by contrast, had already unified its post offices under \"Brooklyn\" before consolidation, so that name stuck.",
				],
			},
			{
				heading: 'Manhattan, Brooklyn, the Bronx, and Staten Island line up exactly with their counties',
				body: [
					"New York City is unusual among major US cities in that each of its boroughs is legally identical to a county -- Manhattan is New York County, Brooklyn is Kings County, the Bronx is Bronx County, and Staten Island is Richmond County. That means every ZIP code in one of these four boroughs sits entirely within a single, named county, with no cross-county splits the way Atlanta (Fulton/DeKalb) or Chicago's near suburbs sometimes have.",
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
					"Because Queens was assembled in 1898 from towns and villages that already had their own post offices under their own names -- Astoria, Flushing, Jamaica, and dozens more -- and USPS kept using those local names instead of switching everything to \"Queens.\"",
			},
			{
				question: 'What ZIP code range does Manhattan use?',
				answer: 'Manhattan (New York County) ZIP codes run from 10001 to 10286, though not every number in that range is assigned.',
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
			{ label: 'History of the boroughs of New York City', url: 'https://en.wikipedia.org/wiki/Boroughs_of_New_York_City' },
		],
	},
	{
		slug: 'texas-zip-codes',
		category: 'ZIP Codes',
		title: "Texas ZIP Codes: How the State's 2,600 Codes Are Organized",
		description:
			"Texas doesn't have one ZIP code system, it has a range spanning 73301 to 88595 -- and which major city has the most ZIP codes isn't the one with the most people.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			"Texas uses roughly 2,600 ZIP codes spread across 52 distinct three-digit prefixes, running from 73301 in the north (a Texas-adjacent IRS ZIP shared with Oklahoma's numbering block) to 88595 near El Paso in the far west. No single ZIP covers a whole city -- Houston alone uses 178 of them, more than any other Texas city despite Houston and San Antonio being close in population.",
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
					"San Antonio has roughly 40% more residents than El Paso, yet El Paso is assigned nearly twice as many ZIP codes. El Paso's geography -- a long, narrow city hemmed in by the Franklin Mountains and the Rio Grande, with a border-crossing economy that generates its own dense commercial mail routes -- produces more, smaller delivery zones than San Antonio's more compact urban core does. ZIP codes are drawn around mail-carrier routes, not population evenly divided across a city.",
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
					"Houston, with 178 -- more than El Paso (137), Dallas (105), San Antonio (83), Austin (74), or Fort Worth (56), even though Houston isn't proportionally that much larger in population than several of those cities.",
			},
		],
		sources: [
			{ label: 'GeoNames.org US postal code database (CC BY 4.0)', url: 'https://www.geonames.org/postal-codes/US/index.html' },
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
			"Texas has 29 area codes today. Dallas alone accounts for four of them stacked on top of each other -- here's the full list, plus which codes overlay which in Houston, San Antonio, Austin, and Fort Worth.",
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			'Texas has grown from two original 1947 area codes (214 for the north, 512 for the south) to 29 today. Dallas-Fort Worth alone now runs on five overlaid codes (214/469/972/945 for Dallas, plus 817/682 for Fort Worth); Houston runs on five as well (713/281/832/346/621). No Texas metro still uses a single, un-overlaid area code.',
		sections: [
			{
				heading: 'All 29 Texas area codes',
				body: [
					"Texas started with just two area codes in the original 1947 numbering plan -- 214 for the northern half of the state (including Dallas and Fort Worth) and 512 for the southern half (including Austin, San Antonio, and Houston). Every other Texas code on this list is a descendant of one of those two, created either by splitting off a region or by overlaying an existing area with a second code once the original ran out of numbers.",
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
				heading: 'Dallas and Houston each run on a five-code overlay stack',
				body: [
					"214 was Dallas's only area code from 1947 until 1990, when it split off 903 to cover northeast Texas. By 1996, 214 itself had run out of numbers again -- but instead of splitting Dallas geographically a second time, the state overlaid the same footprint with 972, then added 469 as a third overlay in 1999, and 945 as a fourth in 2021. All four codes -- 214, 469, 972, and 945 -- now serve the exact same Dallas metro area simultaneously; which one a given phone gets is essentially random.",
					"Houston followed an almost identical pattern: 713 was the original 1947 code, split to create 281 in 1996, which was itself overlaid rather than split again -- first by 832 in 1999, then 346 in 2014, then 621 in 2025. Fort Worth (817, overlaid by 682 in 2000) and San Antonio (210, overlaid by 726 in 2017) each run a smaller two-code version of the same pattern; only Austin (512, overlaid by 737) has managed with just two codes so far.",
				],
			},
		],
		faq: [
			{
				question: 'How many area codes does Texas have?',
				answer: '29 as of 2026, up from the two Texas started with in the original 1947 numbering plan (214 and 512).',
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
		],
	},
	{
		slug: 'california-area-codes',
		category: 'Area Code Lists',
		title: "Every California Area Code, and the Family Tree Behind Los Angeles's Six",
		description:
			"California has 41 area codes today, more than any other state -- and Los Angeles alone traces back through six generations of splits and overlays to a single 1947 code, 213.",
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
		updated: '2026-08-03',
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
					"Splits have a real cost: everyone on the losing side of the line has to change their number's area code, and businesses have to reprint everything. Starting in the 1990s, the industry mostly switched to overlays instead -- instead of dividing the region, a second area code is layered on top of the exact same geographic footprint, and only new phone numbers get assigned to it. Existing numbers never change, but everyone in an overlay area has to dial all 10 digits (area code included) for every call, even a next-door neighbor. Manhattan is the extreme example: 212 (1947) was overlaid by 917 (1992), then 646 (1999), then 332 (2017) -- four area codes now serve the exact same borough at once.",
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
			'Short answer: mostly no. Scammers fake your own area code to get you to answer (a tactic the FCC calls "neighbor spoofing"). There is one real exception -- six actual NANP area codes tied to a well-documented "one ring" callback scam.',
		published: '2026-08-03',
		updated: '2026-08-03',
		coreSummary:
			'There is no list of domestic US area codes that scammers "use" -- the FCC and FTC\'s own data shows the opposite: robocallers fake your own local area code on purpose, a tactic called neighbor spoofing, so an unfamiliar 415 number can easily not be from the Bay Area at all. The one real, documented exception is the "one ring" scam, which relies on real North American Numbering Plan area codes assigned to a handful of Caribbean nations and territories, not domestic scam-only codes.',
		sections: [
			{
				heading: "Scammers don't have their own area codes -- they fake yours",
				body: [
					"A caller ID showing your own area code feels trustworthy, which is exactly why robocallers exploit it. The FCC's term for this is neighbor spoofing: the call might genuinely originate anywhere, including overseas, but the caller ID display is deliberately falsified to show a number sharing your area code and even your first few exchange digits. The Truth in Caller ID Act makes this illegal when done with intent to defraud, with penalties up to $10,000 per violation -- but the law hasn't stopped the practice, because the technology to fake caller ID is cheap and widely available to robocall operations.",
					'Practically, this means "is 213 a scam area code" is the wrong question. Any area code can appear on a spoofed call, including your own, and the number displayed tells you nothing reliable about who is actually calling.',
				],
			},
			{
				heading: "The real exception: the 'one ring' scam and six Caribbean NANP codes",
				body: [
					"There is one well-documented pattern where specific area codes really are disproportionately tied to a scam, and it works differently from neighbor spoofing. Six Caribbean nations and territories are full members of the North American Numbering Plan, meaning their phone numbers use ordinary-looking 3-digit area codes exactly like a US state does -- nothing in the number format signals that it's actually an international call.",
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
						['809 / 829 / 849', 'Dominican Republic'],
						['876', 'Jamaica'],
					],
				},
			},
			{
				heading: 'What to actually do about an unfamiliar call',
				body: [
					'The FTC\'s standing advice, independent of which area code shows up, is simple and doesn\'t require memorizing any list: don\'t answer calls from numbers you don\'t recognize, and never call back a number that rang once and disconnected. If you do answer and something feels off, hang up rather than staying on the line to "verify" who they are. Review your phone bill for unexpected international or premium charges if you did call back a one-ring number, and report the call to your carrier.',
				],
			},
		],
		faq: [
			{
				question: 'Are there area codes that are always scams?',
				answer:
					'No domestic US area code is inherently a scam -- scammers routinely spoof caller ID to show your own local area code. The one real exception is a small set of Caribbean NANP codes (268, 284, 473, 649, 809/829/849, 876) tied to the documented "one ring" callback scam.',
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
				question: 'Is Chicago in Cook County?',
				answer: "Yes, entirely -- all of Chicago's ZIP codes are inside Cook County, with no split into a neighboring county.",
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
];
