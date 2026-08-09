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
