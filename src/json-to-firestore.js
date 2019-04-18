const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAetjcBffrzyUn6rkibHNCgMB2YAJfUSIQ",
    authDomain: "joblist-479f2.firebaseapp.com",
    projectId: "joblist-479f2"
});

var db = firebase.firestore();

var jobs = [
    {
        "job_no": "19-0096",
        "project": "#18002",
        "address": "357 NW 77th St, Seattle",
        "permit": "6652338-CN",
        "contractor": "Sage Homes N.W.",
        "phone": "(206) 660-3446",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0886",
        "project": "113 Row Houses",
        "address": "1340 14th Avenue S, Seattle",
        "permit": 6615859,
        "contractor": "Green City Development, L",
        "phone": "(206) 378-8590",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0072",
        "project": "1201 Alaskan Way Video Survey & Crack M",
        "address": "1201 Alaskan Way, Seattle",
        "permit": "",
        "contractor": "Martin Smith, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0260",
        "project": "1222 NE 65th Street",
        "address": "1222 NE 65th Street, Seattle",
        "permit": 6538040,
        "contractor": "Blueprint Capital Services,",
        "phone": "(425) 530-6061",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1056",
        "project": "1332 South Pearl Street",
        "address": "1332 South Pearl Street, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0029b",
        "project": "15th Avenue NW - South Parcel",
        "address": "8009 15th Ave NW, Seattle",
        "permit": 6494943,
        "contractor": "Sage Homes N.W.",
        "phone": "(425) 919-2247",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0552",
        "project": "168 Investment Projects",
        "address": "2207 2nd Ave, Seattle",
        "permit": "6595902-CN",
        "contractor": "Constantine Builders, Inc.",
        "phone": "206-601-0920",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0908",
        "project": "1700 Residence",
        "address": "1700 17th Ave E, Seattle",
        "permit": "6681675-CN",
        "contractor": "McKinney Group, Inc.",
        "phone": "(206) 300-9550",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0091",
        "project": "1701 Project",
        "address": "1701 37th Avenue, Seattle",
        "permit": 6300390,
        "contractor": "White's Investments, LLC",
        "phone": "(509) 421-1845",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1051",
        "project": "1917 13th Ave S (SEA_145-150)",
        "address": "1917 13th Avenue South, Seattle",
        "permit": 6547090,
        "contractor": "Green Canopy Homes",
        "phone": "(206) 550-5030",
        "manager": "Walter"
      },
      {
        "job_no": "18-0983",
        "project": "2018 Arterial Asphalt and Concrete, Packag",
        "address": "Beacon Hill, Various Locations, Seattle",
        "permit": "",
        "contractor": "KC Equipment",
        "phone": "(206) 380-4649",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1059",
        "project": "2018 Big Rock Ballfield Restrooms",
        "address": "28430 NE Big Rock Road, Duvall",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0514",
        "project": "2142 Residence",
        "address": "2142 NW 201st Street, Shoreline",
        "permit": "SFR17-0659",
        "contractor": "Richmond Homes, LLC",
        "phone": "(206) 683-5217",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0343",
        "project": "2144 Residence",
        "address": "2144 NW 201st Street, Shoreline",
        "permit": "SFR17-0661",
        "contractor": "Richmond Homes, LLC",
        "phone": "(206) 683-5217",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0565",
        "project": "2161 Harbor Avenue Southwest",
        "address": "2161 Harbor Ave SW, Seattle",
        "permit": 6466834,
        "contractor": "TCP Homes LLC",
        "phone": "(425) 320-7848",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0565a",
        "project": "2167 Harbor Avenue Southwest",
        "address": "2167 Harbor Ave SW, Seattle",
        "permit": 6411296,
        "contractor": "TCP Homes LLC",
        "phone": "(425) 320-7848",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0984",
        "project": "2307 23rd Avenue South Residence",
        "address": "2307 23rd Ave S, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "19-0049",
        "project": "2361 Minor Avenue East (Nest Project)",
        "address": "2361 Minor Ave E, Seattle",
        "permit": "6605757-CN",
        "contractor": "Versatile Drilling contractor",
        "phone": "(206) 478-0450",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0050",
        "project": "2371 Minor Avenue East (Nest Project)",
        "address": "2371 Minor Ave E, Seattle",
        "permit": "6605758-CN",
        "contractor": "Versatile Drilling contractor",
        "phone": "(206) 478-0450",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0925",
        "project": "24th Avenue (6707)",
        "address": "6707 24th Ave NW, Seattle",
        "permit": "6638328-CN",
        "contractor": "Insignia Construction, LLC",
        "phone": "(206) 866-4258",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0925a",
        "project": "24th Avenue (6709)",
        "address": "6709 24th Avenue NW, Seattle",
        "permit": "6638325-CN",
        "contractor": "Insignia Construction, LLC",
        "phone": "(206) 866-4258",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0464",
        "project": "2519 NE 82nd Street",
        "address": "2519 NE 82nd St, Seattle",
        "permit": 6571738,
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "19-0076",
        "project": "2521 NW 92nd Residence",
        "address": "2521 NW 92nd St, Seattle",
        "permit": "6604128-CN",
        "contractor": "NW Contour Building Comp",
        "phone": "(425) 766-9815",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0465",
        "project": "2525 NE 82nd Street",
        "address": "2525 NE 82nd St, Seattle",
        "permit": 6571739,
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0898",
        "project": "26' Ballast Deck Approach Span and Open",
        "address": "@ Rainier Welding, Redmond",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0908b",
        "project": "26th Avenue Townhomes – 119 Lot",
        "address": "119 26th Avenue East, Seattle",
        "permit": 6577054,
        "contractor": "C A James",
        "phone": "(206) 948-5423",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0908c",
        "project": "26th Avenue Townhomes – 123 Lot",
        "address": "123 26th Avenue East, Seattle",
        "permit": 6575734,
        "contractor": "C A James",
        "phone": "(206) 948-5423",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0908",
        "project": "26th Avenue Townhomes - East Lot",
        "address": "111 26th Avenue E, Seattle",
        "permit": 6492073,
        "contractor": "C A James",
        "phone": "(206) 948-5423",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0908a",
        "project": "26th Avenue Townhomes - West Lot",
        "address": "115 26th Avenue E, Seattle",
        "permit": 6564684,
        "contractor": "C A James",
        "phone": "(206) 948-5423",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0235",
        "project": "3050 SW Avalon Way (Avalon Ave Micro H",
        "address": "3050 SW Avalon Way, Seattle",
        "permit": 6327295,
        "contractor": "McDowell Northwest, Inc.",
        "phone": "(206) 890-8790",
        "manager": "Walter"
      },
      {
        "job_no": "18-1070",
        "project": "3251 West Commodore Way (SEA_175-179",
        "address": "3251 West Commodore Way, Seattle",
        "permit": 6602117,
        "contractor": "Green Canopy Homes",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "19-0059",
        "project": "3303 31st Avenue SW",
        "address": "3303 31st Ave SW, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0275",
        "project": "333 Residence",
        "address": "333 25th Avenue E, Seattle",
        "permit": 6458069,
        "contractor": "Dao Property Development,",
        "phone": "(206) 226-2557",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0084",
        "project": "3408 East Laurelhurst Drive NE",
        "address": "3408 E Laurelhurst Dr NE, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0655",
        "project": "34307 SE 270th Street",
        "address": "34307 SE 270th Street, Ravensdale",
        "permit": "DWEL18-0111",
        "contractor": "Coons, David",
        "phone": "(206) 769-9776",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0236",
        "project": "3617 73rd Avenue SE",
        "address": "3617 73rd Ave SE, Mercer Island",
        "permit": 1704207,
        "contractor": "Green City Development, L",
        "phone": "(206) 437-8590",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0205",
        "project": "4025 Stone Way N (Job #1801)",
        "address": "4025 Stone Way North, Seattle",
        "permit": 6586498,
        "contractor": "Village Builders, LLC",
        "phone": "(206) 240-8997",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0889a",
        "project": "403 Dexter Apartments - Structural",
        "address": "403 Dexter Avenue N, Seattle",
        "permit": 6561170,
        "contractor": "Synergy Construction, Inc.",
        "phone": "(206) 510-0136",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0868",
        "project": "4116 E. Madison Street",
        "address": "4116 E. Madison Street, Seattle",
        "permit": 6542967,
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1038",
        "project": "4117 Short Plat - Lot A",
        "address": "4111 83rd Avenue SE, Mercer Island",
        "permit": "1708-317",
        "contractor": "SeaScape Homes, LLC",
        "phone": "(206) 972-9950",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0040",
        "project": "4509 116th Ave SE",
        "address": "4509 116th Ave SE, Bellevue",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0621",
        "project": "500 Pacific Project",
        "address": "500 Pacific Avenue, Bremerton",
        "permit": "BB17-00270",
        "contractor": "Applied Restoration Inc.",
        "phone": "360 359 8511",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0513",
        "project": "51 University Building - Video Survey",
        "address": "51 University, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "(206) 423-3471",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0621",
        "project": "510 Broadway Avenue",
        "address": "510 Broadway Avenue, Seattle",
        "permit": 6604172,
        "contractor": "STS Construction Services",
        "phone": "(206) 551-8683",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0903",
        "project": "519 Main Street Project",
        "address": "519 Main Street, Edmonds",
        "permit": "BLD2018-0727",
        "contractor": "Build Love Global, LLC",
        "phone": "(206) 579-1575",
        "manager": "Walter"
      },
      {
        "job_no": "19-0066",
        "project": "52nd Place Residence",
        "address": "8720 SE 52nd Place, Mercer Island",
        "permit": "1702-059",
        "contractor": "Build Urban, LLC",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1042",
        "project": "5445 Residence",
        "address": "5445 Fauntleroy Way SW, Seattle",
        "permit": 6614244,
        "contractor": "Palany Group, LTD",
        "phone": "(253) 347-6910",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0412",
        "project": "5936 36th Avenue South SIP",
        "address": "5936 36th Ave S, Seattle",
        "permit": 304826,
        "contractor": "Ashworth Homes, LLC",
        "phone": "425-350-4081",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0685",
        "project": "6 Unit Townhomes Shoreline",
        "address": "1117 N 199th St, Shoreline",
        "permit": "MFR17-0781",
        "contractor": "AIM Construction and Devel",
        "phone": "(425) 421-1885",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0932",
        "project": "600 East Howell Street",
        "address": "600 East Howell Street, Seattle",
        "permit": "6584375-CN",
        "contractor": "Ryatt Construction",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0041",
        "project": "6725 Mary Avenue NW",
        "address": "6725 Mary Avenue NW, Seattle",
        "permit": 6597678,
        "contractor": "Turnkey Builders",
        "phone": "206-353-1361",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0994",
        "project": "6731 Mary Avenue NW",
        "address": "6731 Mary Avenue NW, Seattle",
        "permit": 6621031,
        "contractor": "Turnkey Builders",
        "phone": "206-353-1361",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0972",
        "project": "6732 15th Avenue NW",
        "address": "6732 15th Ave NW, Seattle",
        "permit": 6596140,
        "contractor": "Turnkey Builders",
        "phone": "(206) 353-1361",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1089",
        "project": "6747 15th Avenue NW Townhouse",
        "address": "6747 15th Avenue Northwest, Seattle",
        "permit": 6615840,
        "contractor": "Ace Construction Services",
        "phone": "(253) 219-5095",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1054",
        "project": "6th & Holgate Seismic Retrofit",
        "address": "1950 6th Ave S, Seattle",
        "permit": "6625867-CN",
        "contractor": "Precision Builders, Inc.",
        "phone": "(206) 396-1527",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0416",
        "project": "6th Street Signal Projects",
        "address": "6th St & 9th St and 9th St & Kirkland Way, Kirk",
        "permit": "",
        "contractor": "Johansen Excavating, Inc.",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "12-0157",
        "project": "700 Dexter Avenue N Shoring",
        "address": "700 Dexter Avenue N, Seattle",
        "permit": "DPD:6319277 / S",
        "contractor": "",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "19-0073",
        "project": "701 Apartments",
        "address": "701 16th Ave, Seattle",
        "permit": "6554864-CN",
        "contractor": "Rush Commercial Construct",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0600",
        "project": "7020 View Ridge Residence",
        "address": "7020 54th Avenue NE, Seattle",
        "permit": 6630108,
        "contractor": "Approach Build, LLC",
        "phone": "(425) 478-1245",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0549",
        "project": "8256 Residence",
        "address": "8256 Northrop Place SW, Seattle",
        "permit": 6595380,
        "contractor": "JMS Homes",
        "phone": "(206) 949-5027",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0055",
        "project": "8260 Residence",
        "address": "8260 Northrop Place, Seattle",
        "permit": 6595364,
        "contractor": "JMS Homes",
        "phone": "(206) 949-5027",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0513",
        "project": "8559 Mary Avenue NW Project",
        "address": "8559 Mary Avenue NW, Seattle",
        "permit": 6486960,
        "contractor": "Sensa Homes",
        "phone": "(626) 716-2550",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0752",
        "project": "906 North 46th Street",
        "address": "906 N 46th St, Seattle",
        "permit": "6593274-CN",
        "contractor": "Domus Homes, LLC",
        "phone": "(206) 235-6783",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0956",
        "project": "920 Broadway",
        "address": "920 Broadway, Seattle",
        "permit": 6593595,
        "contractor": "Shelter Homes, LLC",
        "phone": "(206) 401-4301",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0699",
        "project": "928 NW Leary Way Mixed-Use Building",
        "address": "928 NW Leary Way, Seattle",
        "permit": 6555893,
        "contractor": "Fuller Anderson Co., Inc.",
        "phone": "(206) 730-7392",
        "manager": "Walter"
      },
      {
        "job_no": "18-0907",
        "project": "9514 8th Avenue NW",
        "address": "9514 8th Avenue NW, Seattle",
        "permit": 6652548,
        "contractor": "MRJ Constructors",
        "phone": "(206) 499-1009",
        "manager": "Walter"
      },
      {
        "job_no": "18-0981",
        "project": "Aamodt Residence",
        "address": "6028 38th Ave NE, Seattle",
        "permit": 6593603,
        "contractor": "JC Mac Construction",
        "phone": "(425) 246-5130",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0085",
        "project": "ACD Building C",
        "address": "10007 234th Avenue East, Bonney Lake",
        "permit": "BLD-2018-08624",
        "contractor": "Auburn Commercial Develo",
        "phone": "(253) 261-8832",
        "manager": "Walter"
      },
      {
        "job_no": "18-0476",
        "project": "ACD Building D",
        "address": "9900 234th Avenue, Bonney Lake",
        "permit": 8113,
        "contractor": "Auburn Commercial Develo",
        "phone": "(253) 261-8832",
        "manager": "Walter"
      },
      {
        "job_no": "18-1048",
        "project": "Adams Residence Remodel",
        "address": "16422 SE 17th Street, Bellevue",
        "permit": "18-112340 BR",
        "contractor": "Noble Ridge Construction",
        "phone": "(206) 686-1841",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0661",
        "project": "AGC Biologics",
        "address": "2210 220th Street SE, Bothell",
        "permit": "BNR2018-19301",
        "contractor": "BN Builders, Inc.",
        "phone": "(206) 300-0299",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0007",
        "project": "AGC of Washington 2nd Floor Infill",
        "address": "1200 Westlake Avenue N, Seattle",
        "permit": 6688865,
        "contractor": "Pulcon, Inc.",
        "phone": "(206) 851-2254",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0295",
        "project": "Airport Dining & Retail Infrastructure Modific",
        "address": "Central Terminal, SeaTac International Airport,",
        "Travel": 0,
        "permit": "17 10539",
        "contractor": "Osborne Construction Com",
        "phone": "(425) 553-5347",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0295a",
        "project": "Airport Dining & Retail Infrastructure Modific",
        "address": "Central Terminal, SeaTac International Airport,",
        "permit": "17-10540",
        "contractor": "Osborne Construction Com",
        "phone": "(425) 736-9319",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0843",
        "project": "Alan Dishlip Residence",
        "address": "1944 NW Blue Ridge Drive, Seattle",
        "permit": "6621080-CN",
        "contractor": "McDowell NW Pile King, Inc",
        "phone": "(206) 386-1026",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0209",
        "project": "Alberta J Canada Bldg",
        "address": "1114 South 11th Street, Tacoma",
        "permit": "BLD CA17-0252",
        "contractor": "CDK Construction Services,",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0777",
        "project": "Alki Capital",
        "address": "6504 SW Stevens St, Seattle",
        "permit": 6610950,
        "contractor": "Chieftain LLC",
        "phone": "(206) 261-3527",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0241",
        "project": "Allegre Villa - Hillside to the South",
        "address": "207 E. Walnut Street, Winlock",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0494",
        "project": "Amazon Brazil SEA 53 (Block 45)",
        "address": "400 9th Avenue N, Seattle",
        "permit": "(pending)",
        "contractor": "Hermanson Company, LLP",
        "phone": "(425) 466-1119",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0617",
        "project": "Amtrak KSCY Locomotive Facility",
        "address": "187 S. Holgate Street, Seattle",
        "permit": "N/A",
        "contractor": "PCL Construction Services,",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0943",
        "project": "Anderson Residence Foundation Repair",
        "address": "5042 29th Avenue South, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0920",
        "project": "Anthropoligie Store",
        "address": "2520 NE University Village St, Suite 120, Seatt",
        "permit": "",
        "contractor": "Action Special Inspections",
        "phone": "(503) 381-6329",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0546",
        "project": "Assisted Living",
        "address": "5214 42nd Avenue South, Seattle",
        "permit": 6547394,
        "contractor": "Marpac Construction, LLC",
        "phone": "(206) 890-8737",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0432",
        "project": "Auto Nation Carwash & Auto Detail Facility (",
        "address": "2221 120th Ave NE, Bellevue",
        "permit": "17 107594 BM",
        "contractor": "Foushee and Associates, In",
        "phone": "(425) 417-5238",
        "manager": "Walter"
      },
      {
        "job_no": "18-0184",
        "project": "Auto Nation Mercedes-Benz of Bellevue - H",
        "address": "11850 Bel-Red Road, Bellevue",
        "permit": "",
        "contractor": "",
        "phone": "(805) 665-7194",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0950",
        "project": "Automated Equipment Co. Crane Brackets",
        "address": "10828 East Marginal Way South, Tukwila",
        "permit": "D18-0260",
        "contractor": "Automated Gates & Equipm",
        "phone": "(206) 767-9080",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0962",
        "project": "Azalea Residence",
        "address": "143 7th Ave, Kirkland",
        "permit": "BSF16-01327",
        "contractor": "Build Urban, LLC",
        "phone": "(206) 719-6239",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0385",
        "project": "B-26 Renovation Health and Life Sciences",
        "address": "2400 S. 240th Street, Des Moines",
        "permit": "BLD2017-0383",
        "contractor": "Pease Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0944",
        "project": "Ballard 8",
        "address": "1436 NW 60th Street, Seattle",
        "permit": 6581975,
        "contractor": "Dacoda Homes, Inc.",
        "phone": "(206) 777-5892",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0671",
        "project": "Ballinger Heated Storage",
        "address": "20029 19th Avenue NE, Shoreline",
        "permit": "COM17-0037",
        "contractor": "JPR Construction, Inc.",
        "phone": "(425) 343-7157",
        "manager": "Walter"
      },
      {
        "job_no": "18-0695",
        "project": "Bamford Residence",
        "address": "6400 60th Place South, Seattle",
        "permit": 6604399,
        "contractor": "Dovetail General contractor",
        "phone": "206-551-2169",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0244",
        "project": "Baty Residence",
        "address": "6435 NE Windermere Road, Seattle",
        "permit": 6574420,
        "contractor": "Joseph McKinstry Construct",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0479",
        "project": "Bear Creek Apartments",
        "address": "15810 Bear Creek Parkway, Redmond",
        "permit": "BLDG-2017-0092",
        "contractor": "Fairfield Development L.P.",
        "phone": "(206) 370-2796",
        "manager": "Walter"
      },
      {
        "job_no": "18-0963",
        "project": "Begonia Residence",
        "address": "139 7th Ave, Kirkland",
        "permit": "BSF16-01328",
        "contractor": "Build Urban, LLC",
        "phone": "(206) 719-6239",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0202b",
        "project": "Bellevue 3 - Lot 1",
        "address": "10333 10th Street SE, Bellevue",
        "permit": "16141221-BS",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 491-1354",
        "manager": "Walter"
      },
      {
        "job_no": "17-0202a",
        "project": "Bellevue 3 - Lot 3",
        "address": "1013 104th Avenue SE, Bellevue",
        "permit": "",
        "contractor": "RM Homes, LLC",
        "phone": "(253) 486-8622",
        "manager": "Walter"
      },
      {
        "job_no": "18-0199",
        "project": "Bellevue 8 - East",
        "address": "10720 SE 2nd Street, Bellevue",
        "permit": "16-126508 BB",
        "contractor": "Envision Northwest",
        "phone": "(541) 706-1527",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0979",
        "project": "Bellevue BMW",
        "address": "11959 Northup Way, Bellevue",
        "permit": "17-110859 BB",
        "contractor": "Foushee and Associates, In",
        "phone": "(425) 417-5238",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0979a",
        "project": "Bellevue BMW – Braced Frames TI",
        "address": "11959 Northup Way, Bellevue",
        "permit": "18-102931 BZ",
        "contractor": "Foushee and Associates, In",
        "phone": "(425) 417-5238",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1002",
        "project": "Bennett Residence Addition",
        "address": "166 NW 60th St, Seattle",
        "permit": "6666037-CN",
        "contractor": "STS Construction Services",
        "phone": "(206) 707-6734",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0817",
        "project": "Bertch Residence",
        "address": "1027 14th Place West, Kirkland",
        "permit": "BSF18-02669",
        "contractor": "DLH, Inc.",
        "phone": "(425) 214-2402",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1041",
        "project": "Big Rock Industries Misc. 2018",
        "address": "17391 Tye ST SE, Monroe",
        "permit": "",
        "contractor": "",
        "phone": "(360) 794-2102",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0584",
        "project": "Birk Residence",
        "address": "5171 S. Spencer St., Seattle",
        "permit": 6600589,
        "contractor": "Remodel Pros, LLC",
        "phone": "(253) 263-0049",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0032",
        "project": "Black Rooster Restaurant T.I.",
        "address": "1083 Lk Washington Blvd N, #50, Renton",
        "permit": "BL8000369",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "16-0866",
        "project": "Block 11 - Structural",
        "address": "1255 Harrison Street, Seattle",
        "permit": 6450010,
        "contractor": "Exxel Pacific, Inc.",
        "phone": "253-359-6218",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0064",
        "project": "Block 25 - All buildings/phases",
        "address": "Fairview Avenue/Boren Avenue, Seattle",
        "permit": "",
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0064c",
        "project": "Block 25E - Structural",
        "address": "609 Fairview Avenue North, Seattle",
        "permit": 6471434,
        "contractor": "GLY Construction, Inc.",
        "phone": "(425) 765-0283",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0428a",
        "project": "Block 25E TI - levels 1, 1.5, 6 Tenant Impro",
        "address": "630 Boren Avenue, Seattle",
        "permit": 6552571,
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0428",
        "project": "Block 25E TI - levels 3-6 Alterations and Sta",
        "address": "630 Boren Avenue North, Seattle",
        "permit": 6620209,
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0064d",
        "project": "Block 25W - Structural",
        "address": "630 Boren Avenue North, Seattle",
        "permit": 6528917,
        "contractor": "GLY Construction, Inc.",
        "phone": "(425) 998-3879",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0427",
        "project": "Block 25W TI - Google Level 2-6",
        "address": "630 Boren Avenue North, Seattle",
        "permit": 6643847,
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0427a",
        "project": "Block 25W TI - Lecture Room at level 1",
        "address": "630 Boren Avenue North, Seattle",
        "permit": 6552573,
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0068a",
        "project": "Block 31 - Structural",
        "address": "625 Boren Avenue North, Seattle",
        "permit": 6528924,
        "contractor": "GLY Construction, Inc.",
        "phone": "(425) 998-3879",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0511a",
        "project": "Block 31 TI - Google Tenant Improvements",
        "address": "630 Boren Avenue North, Seattle",
        "permit": 6613341,
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0511",
        "project": "Block 31 TI - Levels 1-5 Alterations & Stairs",
        "address": "630 Boren Avenue North, Seattle",
        "permit": "6620212-CN",
        "contractor": "GLY Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0217",
        "project": "Block 47",
        "address": "910 John Street, Seattle",
        "permit": 6462238,
        "contractor": "WG Clark Construction Co",
        "phone": "(206) 255-7038",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0867a",
        "project": "Block 52 West - Structural",
        "address": "300 8th Avenue North, Seattle",
        "permit": 6355538,
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1060",
        "project": "BNSF Connell Bridge Structural Evaluation",
        "address": "BNSF Bridge LS46 MP 104.5, Connell",
        "permit": "",
        "contractor": "",
        "phone": "(206) 588-8124",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0853",
        "project": "Boeing - Airplane Stall Expansion A6",
        "address": "6505 Perimeter Road South, Seattle",
        "permit": "",
        "contractor": "Gary Merlino Construction",
        "phone": "(206) 255-2623",
        "manager": "Walter"
      },
      {
        "job_no": "14-0481",
        "project": "Boeing - Bldg. 17-06 - Install High Speed Sp",
        "address": "Bldg. 17-06, Auburn",
        "permit": "ALT14-0040",
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "(206) 660-8538",
        "manager": "Walter"
      },
      {
        "job_no": "18-0868",
        "project": "Boeing - Bldg. 17-06 Laser Ablation",
        "address": "Building 17-06, Column C-D/2-3, Auburn",
        "permit": "TEN18-0066",
        "contractor": "Omega Industrial contractor",
        "phone": "(425) 736-1131",
        "manager": "Walter"
      },
      {
        "job_no": "18-0995",
        "project": "Boeing - Bldg. 17-06 Rinse Tank",
        "address": "Bldg 17-06, Auburn",
        "permit": "",
        "contractor": "Auburn Mechanical",
        "phone": "(206) 730-4964",
        "manager": "Walter"
      },
      {
        "job_no": "16-0637",
        "project": "Boeing - Bldg. 17-06 Spar Check Fixtures -",
        "address": "Bldg. 17-06, Auburn",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "16-0009",
        "project": "Boeing - Bldg. 17-07 Dual Gantry Foundatio",
        "address": "Bldg. 17-07, Auburn",
        "permit": "",
        "contractor": "Advanced Technology Cons",
        "phone": "(360) 515-6206",
        "manager": "Walter"
      },
      {
        "job_no": "17-0998",
        "project": "Boeing - Bldg. 17-07 Install Generator",
        "address": "Bldg. 17-07, Auburn",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1019",
        "project": "Boeing - Bldg. 17-08 E-Coat Process Tank",
        "address": "Bldg. 17-08, Auburn",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "(206) 391-7671",
        "manager": "Walter"
      },
      {
        "job_no": "18-1039",
        "project": "Boeing - Bldg. 17-08 Install Safety Cells",
        "address": "Building 17-08, Columns F-K/1-7, Auburn",
        "permit": "TEN18-0227",
        "contractor": "Applied Manufacturing Tech",
        "phone": "(810) 955-1540",
        "manager": "Walter"
      },
      {
        "job_no": "18-0992",
        "project": "Boeing - Bldg. 17-08 Robot Relocation",
        "address": "Bldg. 17-08, Auburn",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "(206) 255-1034",
        "manager": "Walter"
      },
      {
        "job_no": "19-0004",
        "project": "Boeing - Bldg. 17-10 Detrex Clean Line Rep",
        "address": "Bldg. 17-10, Auburn",
        "permit": "",
        "contractor": "",
        "phone": "206-255-7486",
        "manager": "Walter"
      },
      {
        "job_no": "19-0048",
        "project": "Boeing - Bldg. 17-10 EO Robotic Deburr Inst",
        "address": "Bldg. 17-10, Auburn",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0946",
        "project": "Boeing - Bldg. 17-10 Install Four Walter Gri",
        "address": "Bldg. 17-10, Auburn",
        "permit": "",
        "contractor": "Omega General contractors",
        "phone": "(425)736-1131",
        "manager": "Walter"
      },
      {
        "job_no": "16-0688",
        "project": "Boeing - Bldg. 17-10 Replace Coating Cham",
        "address": "Bldg. 17-10 Col. A-B/5-6, Auburn",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "19-0088",
        "project": "Boeing - Bldg. 17-10 Temporary Robot Insta",
        "address": "Building 17-10, Auburn",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0947",
        "project": "Boeing - Bldg. 17-12 PSCC / Moonshine Ph",
        "address": "Bldg. 17-12, Auburn",
        "permit": "",
        "contractor": "Omega Riggers & Erectors",
        "phone": "206-255-7486",
        "manager": "Walter"
      },
      {
        "job_no": "18-0538",
        "project": "Boeing - Bldg. 17-45 BAM",
        "address": "Bldg. 17-45, Auburn",
        "permit": "TEN18-0174 TEN",
        "contractor": "Dahlgren Industrial, Inc.",
        "phone": "(206) 437-0406",
        "manager": "Walter"
      },
      {
        "job_no": "18-1009",
        "project": "Boeing - Bldg. 17-45 IAS LMS Work Cell",
        "address": "Bldg. 17-45, Auburn",
        "permit": "TEN18-0143",
        "contractor": "Clements General Construc",
        "phone": "(206) 391-7671",
        "manager": "Walter"
      },
      {
        "job_no": "18-1020",
        "project": "Boeing - Bldg. 17-45 Labs",
        "address": "Bldg. 17-45, Auburn",
        "permit": "N/A",
        "contractor": "Omega Riggers & Erectors",
        "phone": "(206) 255-2507",
        "manager": "Walter"
      },
      {
        "job_no": "18-1082",
        "project": "Boeing - Bldg. 17-45 Penetrant Booth Fall P",
        "address": "Building 17-45, Auburn",
        "permit": "(pending)",
        "contractor": "Clements General Construc",
        "phone": "(206) 793-5326",
        "manager": "Walter"
      },
      {
        "job_no": "18-0998",
        "project": "Boeing - Bldg. 17-45 Rack Inspection",
        "address": "Bldg. 17-45, Door 12, Auburn",
        "permit": "TEN18-0187",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1091",
        "project": "Boeing - Bldg. 17-62 Relocate H51 AC Pack",
        "address": "Building 17-62, Auburn",
        "permit": "",
        "contractor": "Dahlgren Industrial, Inc.",
        "phone": "(206) 423-9084",
        "manager": "Walter"
      },
      {
        "job_no": "18-0980",
        "project": "Boeing - Bldg. 17-62 Replace Tubing Bende",
        "address": "Bldg. 17-62, Auburn",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "(206) 391-7671",
        "manager": "Walter"
      },
      {
        "job_no": "19-0035",
        "project": "Boeing - Bldg. 17-66 RMD Solvent Bottling",
        "address": "Building 17-66, Auburn",
        "permit": "n/a",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1088",
        "project": "Boeing - Bldg. 17-68 Laser Fume Extractor",
        "address": "Bldg. 17-45, Auburn",
        "permit": "n/a",
        "contractor": "Omega Riggers & Erectors",
        "phone": "(360) 790-6702",
        "manager": "Walter"
      },
      {
        "job_no": "18-0106",
        "project": "Boeing - Bldg. 17-88 ORC",
        "address": "Bldg. 17-88 (S. end of Boeing), Auburn",
        "permit": "BLD17-0256",
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1027",
        "project": "Boeing - Bldg. 2-088 Install Mazak HCN 108",
        "address": "8123 East Marginal Way South, Tukwila",
        "permit": "D18-0319",
        "contractor": "Washington Patriot Constru",
        "phone": "(253) 549-3680",
        "manager": "Walter"
      },
      {
        "job_no": "18-1031",
        "project": "Boeing - Bldg. 2-25 Plant 2 Replace Chiller",
        "address": "Building 2-25, Tukwila",
        "permit": "",
        "contractor": "",
        "phone": "253-229-6077",
        "manager": "Walter"
      },
      {
        "job_no": "18-1066",
        "project": "Boeing - Bldg. 24-50A Remove Utility Supp",
        "address": "Building 24-50A, Fredrickson",
        "permit": 900412,
        "contractor": "Schuchart Corporation",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0350",
        "project": "Boeing - Bldg. 24-60 Makino T-Chord Mill C",
        "address": "Bldg. 24-60, Frederickson",
        "permit": 881546,
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "(253) 255-5284",
        "manager": "Walter"
      },
      {
        "job_no": "19-0069",
        "project": "Boeing - Bldg. 24-60 Utilities & Foundation-",
        "address": "Bldg. 24-60, Frederickson",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "(206) 7934260",
        "manager": "Walter"
      },
      {
        "job_no": "18-0975",
        "project": "Boeing - Bldg. 24-60 VPAL Racks",
        "address": "Building 24-60, Frederickson",
        "permit": "",
        "contractor": "Clements General Construc",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0985",
        "project": "Boeing - Bldg. 40-02 Runway End Beam",
        "address": "Building 40-02, Wing Spar 2B Cranes, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0497",
        "project": "Boeing - Bldg. 40-04 / 40-41 Compressed Ai",
        "address": "Building 40-04, Everett",
        "permit": "",
        "contractor": "IMCO General Construction",
        "phone": "360-410-8035/360",
        "manager": "Walter"
      },
      {
        "job_no": "19-0087",
        "project": "Boeing - Bldg. 40-22 Everett Site HVAC Re",
        "address": "Building 40-22, Everett",
        "permit": "n/a",
        "contractor": "Schuchart Corporation",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0213",
        "project": "Boeing - Bldg. 40-22 LRA Relocation FAMB",
        "address": "Bldg 40-22, Everett",
        "permit": "",
        "contractor": "General Construction",
        "phone": "(425) 330-3117",
        "manager": "Walter"
      },
      {
        "job_no": "18-0773",
        "project": "Boeing - Bldg. 40-23 Compressor-Drier Proj",
        "address": "Building 40-23, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1057",
        "project": "Boeing - Bldg. 40-25 Doorway Canopy Supp",
        "address": "Building 40-25, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "(360) 815-2387",
        "manager": "Walter"
      },
      {
        "job_no": "18-0923",
        "project": "Boeing - Bldg. 40-25 Emergency Repair",
        "address": "Bldg. 40-25, Everett",
        "permit": "",
        "contractor": "General Construction",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0197",
        "project": "Boeing - Bldg. 40-25 Final Body Join (FBJ)",
        "address": "Bldg. 40-25, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "(360) 815-2387",
        "manager": "Walter"
      },
      {
        "job_no": "18-0084",
        "project": "Boeing - Bldg. 40-25 FT – 777 Wing Body J",
        "address": "Bldg. 40-025, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "(360) 815-2387",
        "manager": "Walter"
      },
      {
        "job_no": "18-0873",
        "project": "Boeing - Bldg. 40-25 FT 777x SI Guide Mod",
        "address": "40-25, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0445",
        "project": "Boeing - Bldg. 40-25 FT Wing Body Join (M",
        "address": "Bldg. 40-25, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "(360) 815-2387",
        "manager": "Walter"
      },
      {
        "job_no": "19-0005",
        "project": "Boeing - Bldg. 40-25 Mobile Containment S",
        "address": "Building 40-25, Everett",
        "permit": "",
        "contractor": "University Mechanical Contr",
        "phone": "(206) 556-5020",
        "manager": "Walter"
      },
      {
        "job_no": "18-0809",
        "project": "Boeing - Bldg. 40-25 Wing Body Join Temp",
        "address": "Building 40-25, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1074",
        "project": "Boeing - Bldg. 40-31 Water Heater Replace",
        "address": "Building 40-31, Everett",
        "permit": "",
        "contractor": "Greenberry Industrial",
        "phone": "(360) 739-8262",
        "manager": "Walter"
      },
      {
        "job_no": "17-0242",
        "project": "Boeing - Bldg. 40-35 Factory Transformatio",
        "address": "Bldg. 40-35, Everett",
        "permit": "B1703-044 & B16",
        "contractor": "General Construction Comp",
        "phone": "425-314-2726",
        "manager": "Walter"
      },
      {
        "job_no": "18-0860",
        "project": "Boeing - Bldg. 40-37 Paint Cell SSG Sump",
        "address": "Bldg. 40-37, Everett",
        "permit": "",
        "contractor": "Washington Patriot Constru",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0027",
        "project": "Boeing - Bldg. 40-41 777x Fatigue Structure",
        "address": "Bldg. 40-41, Everett",
        "permit": "B1712-026",
        "contractor": "Skanska USA Commercial",
        "phone": "(206) 799-7710",
        "manager": "Walter"
      },
      {
        "job_no": "19-0053",
        "project": "Boeing - Bldg. 40-56 Flange Weld Repair",
        "address": "Building 40-56, CV-A-5, Everett",
        "permit": "",
        "contractor": "University Mechanical Contr",
        "phone": "(206) 255-4969",
        "manager": "Walter"
      },
      {
        "job_no": "18-1058",
        "project": "Boeing - Bldg. 40-56 Pressure Piping",
        "address": "Building 40-56, Column H-J/.5-1, Everett",
        "permit": "",
        "contractor": "University Mechanical Contr",
        "phone": "(206)255-4969",
        "manager": "Walter"
      },
      {
        "job_no": "18-1047",
        "project": "Boeing - Bldg. 40-56 Sunken Manhole Repai",
        "address": "Bldg. 40-56, Everett",
        "permit": "",
        "contractor": "IMCO General Construction",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "14-0520",
        "project": "Boeing - Bldg. 40-58 777 Site Prep",
        "address": "Bldg. 40-58, Everett",
        "permit": "PW 1405-038 (sit",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "16-0622",
        "project": "Boeing - Bldg. 40-58 777X Hydronic Heating",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0666",
        "project": "Boeing - Bldg. 40-58 Autoclave Phase 2",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1024",
        "project": "Boeing - Bldg. 40-58 Crane Rail Hangar Bolt",
        "address": "Building 40-58 PCA Side, See Gridlines Below,",
        "permit": "",
        "contractor": "",
        "phone": "(503) 572-6863",
        "manager": "Walter"
      },
      {
        "job_no": "18-1075",
        "project": "Boeing - Bldg. 40-58 HPS & PC Isolation Va",
        "address": "Building 40-58 Tunnel, Everett",
        "permit": "",
        "contractor": "Greenberry Industrial",
        "phone": "(360) 739-8262",
        "manager": "Walter"
      },
      {
        "job_no": "18-0460",
        "project": "Boeing - Bldg. 40-58 PFL Spar Lamination",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "Hoffman Construction",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0832",
        "project": "Boeing - Bldg. 40-58 PGF Stringer Radius F",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0561",
        "project": "Boeing - Bldg. 40-58 PGO Stringer Hand/Bl",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1072",
        "project": "Boeing - Bldg. 40-58 PHB Stringer Bond Ass",
        "address": "Building 40-58, Everett",
        "permit": "",
        "contractor": "M. Torres America",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0665",
        "project": "Boeing - Bldg. 40-58 PHL Skin/Panel Lamin",
        "address": "Bldg. 40-58 (Cells 3 & 4), Everett",
        "permit": "",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0696",
        "project": "Boeing - Bldg. 40-58 PHP-2 Panel Paint Ph",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "15-0676",
        "project": "Boeing - Bldg. 40-58 PHT Panel Trim and D",
        "address": "Bldg. 40-58, Everett",
        "permit": "B1406-038",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0137",
        "project": "Boeing - Bldg. 40-58 PHX Panel Repair",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "19-0075",
        "project": "Boeing - Bldg. 40-58 Seismic Floor Scan",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "M. Torres America",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0895",
        "project": "Boeing - Bldg. 40-58 Stringer AFP Laminati",
        "address": "Bldg. 40-58, Everett",
        "permit": "",
        "contractor": "Hoffman Construction Com",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0440",
        "project": "Boeing - Bldg. 45-01 Crane Stacker #10",
        "address": "Building 45-01, Everett",
        "permit": "n/a",
        "contractor": "Skanska USA Commercial",
        "phone": "206-328-9235",
        "manager": "Walter"
      },
      {
        "job_no": "18-0852",
        "project": "Boeing - Bldg. 45-01 Low Bay Crane Stacke",
        "address": "see comments, Everett",
        "permit": "",
        "contractor": "Deshazo",
        "phone": "205-664-2006",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0969",
        "project": "Boeing - Bldg. 45-03 Paint Hangar Modificat",
        "address": "Bldg. 45-03, Everett",
        "permit": "",
        "contractor": "Skanska USA Commercial",
        "phone": "(206) 553-9440",
        "manager": "Walter"
      },
      {
        "job_no": "18-0571",
        "project": "Boeing - Bldg. 45-03 Paint Hangar Process",
        "address": "Bldg. 45-03, Everett",
        "permit": "",
        "contractor": "Skanska USA Commercial",
        "phone": "(206) 348-6833",
        "manager": "Walter"
      },
      {
        "job_no": "19-0056",
        "project": "Boeing - Bldg. 45-03 Paint Hangar Solvent",
        "address": "Bldg. 45-03, Everett",
        "permit": "",
        "contractor": "University Mechanical Contr",
        "phone": "(425) 293-3137",
        "manager": "Walter"
      },
      {
        "job_no": "18-0572",
        "project": "Boeing - Bldg. 45-03 Paint Hangar Wing & T",
        "address": "Bldg 45-03, Everett",
        "permit": "",
        "contractor": "Skanska USA Commercial",
        "phone": "(206) 348-6833",
        "manager": "Walter"
      },
      {
        "job_no": "18-0498",
        "project": "Boeing - Bldg. 45-08 WWTP",
        "address": "Building 45-08, Everett",
        "permit": "",
        "contractor": "IMCO General Construction",
        "phone": "(360)410-8035",
        "manager": "Walter"
      },
      {
        "job_no": "18-0451",
        "project": "Boeing - Bldg. 45-334 Compressed Air Upgr",
        "address": "Bldg. 45-334, Everett",
        "permit": "",
        "contractor": "General Construction Comp",
        "phone": "(425) 321-6478",
        "manager": "Walter"
      },
      {
        "job_no": "18-0545",
        "project": "Boeing - Bldg. 45-51 Emergency Generator",
        "address": "Building 45-51, Everett",
        "permit": "M1806-051",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0761",
        "project": "Boeing - Bldg. 9-101 ADC Thermoplastic Pr",
        "address": "Building 9-101, Tukwila",
        "permit": "D18-0215",
        "contractor": "BN Builders, Inc.",
        "phone": "(206) 492-4785",
        "manager": "Walter"
      },
      {
        "job_no": "19-0052",
        "project": "Boeing - Emergency Repair (Fire Line Rupt",
        "address": "Between Bldgs. 40-11 and 40-01, Everett",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1077",
        "project": "Boeing - Everett West Parking Access 526 I",
        "address": "Hwy 526 Parking, Everett",
        "permit": "",
        "contractor": "Gary Merlino Construction",
        "phone": "(206) 755-2987",
        "manager": "Walter"
      },
      {
        "job_no": "17-0945",
        "project": "Boeing - Site Industrial Waste",
        "address": "Bldg. 40-58 Tank Room to Bldg. 40-33, Everett",
        "permit": "n/a",
        "contractor": "Greenberry Industrial",
        "phone": "(409) 293-8496",
        "manager": "Walter"
      },
      {
        "job_no": "17-0363",
        "project": "Boeing - Tool #TMR130201 4ME140T0001",
        "address": "Bldg. 40-22, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 210-9961",
        "manager": "Walter"
      },
      {
        "job_no": "18-0137",
        "project": "Boeing - Tool #TMR132573 11ME110W166",
        "address": "Bldg. 40-35 L 11.5, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 791-4867",
        "manager": "Walter"
      },
      {
        "job_no": "18-0177",
        "project": "Boeing - Tool #TMR132762 PME284W7001",
        "address": "Bldg. 40-53 Column F8.5, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 309-1989",
        "manager": "Walter"
      },
      {
        "job_no": "18-0192",
        "project": "Boeing - Tool #TMR132779 PME284W7003",
        "address": "Bldg. 40-53, Col F8.5, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 309-1989",
        "manager": "Walter"
      },
      {
        "job_no": "18-0997",
        "project": "Boeing - Tool #TMR135044 31ME140W000",
        "address": "Bldg. 40-25, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 791-4867",
        "manager": "Walter"
      },
      {
        "job_no": "18-1035",
        "project": "Boeing - Tool #TMR135046 5ME#110W166",
        "address": "Bldg. 40-25 Column L10, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 791-4867",
        "manager": "Walter"
      },
      {
        "job_no": "18-1069",
        "project": "Boeing - Tool #TMR135317 6ME110W1660",
        "address": "Bldg. 40-25, col L10, Everett",
        "permit": "",
        "contractor": "Boeing Everett Tool Depart",
        "phone": "(425) 791-4867",
        "manager": "Walter"
      },
      {
        "job_no": "18-1068",
        "project": "Boeing - Tool #TMR135340 2FME112W490",
        "address": "Building 40-58, CCA Side, PGO Cell, Everett",
        "permit": "",
        "contractor": "",
        "phone": "(425) 314-4536",
        "manager": "Walter"
      },
      {
        "job_no": "18-1007",
        "project": "Boyer Garage 1",
        "address": "2128 E Interlaken Blvd, Seattle",
        "permit": 6545083,
        "contractor": "Hoffman Building, LLC",
        "phone": "(206) 393-7579",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0003",
        "project": "Brannon Residence",
        "address": "2114 Dexter Avenue North, Seattle",
        "permit": 6692812,
        "contractor": "Winchester Construction, In",
        "phone": "(206) 491-1385",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0899",
        "project": "Bridge F1.2 East Whittier Creek",
        "address": "@ Rainier Welding, Redmond",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0730",
        "project": "Brightview",
        "address": "20004 91st Place South, Kent",
        "permit": "CNST-2172667",
        "contractor": "Polygon Northwest",
        "phone": "(425) 295-5989",
        "manager": "Walter"
      },
      {
        "job_no": "18-0641",
        "project": "Brix Condominiums",
        "address": "530 Broadway Avenue E, Seattle",
        "permit": 6589134,
        "contractor": "Charter Construction, Inc.",
        "phone": "(206) 769-2522",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0850",
        "project": "Browns Point Elementary School",
        "address": "1526 51st Street NE, Tacoma",
        "permit": "see below",
        "contractor": "Skanska USA Commercial",
        "phone": "(206) 418-9660",
        "manager": "Walter"
      },
      {
        "job_no": "18-0964",
        "project": "Building 431 HBI 860101",
        "address": ",",
        "permit": "",
        "contractor": "Hayward Baker, Inc.",
        "phone": "206-979-5931",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0054",
        "project": "BVS-057",
        "address": "2612 79th Ave NE, Medina",
        "permit": "B-17-070",
        "contractor": "JayMarc Manor LLC",
        "phone": "(425) 444-2055",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0879",
        "project": "C755 Rail Replacement - King County Light",
        "address": "M.L. King Way - various, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "(206) 255-4811",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1052",
        "project": "Cambria Commercial Building",
        "address": "22051 68th Ave S, Kent",
        "permit": "",
        "contractor": "Precision Builders, Inc.",
        "phone": "(206) 396-1527",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0933",
        "project": "Cambridge Apartments Renovation",
        "address": "903 Union Street, Seattle",
        "permit": 6495645,
        "contractor": "Rafn Company, Inc.",
        "phone": "(206) 510-2934",
        "manager": "Walter"
      },
      {
        "job_no": "18-0231",
        "project": "Capen-Davis Residence",
        "address": "2537 37th Avenue West, Seattle",
        "permit": 6581940,
        "contractor": "Joseph McKinstry Construct",
        "phone": "(206) 406-9404",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0557",
        "project": "Carleton Duplex",
        "address": "6703 Carleton Ave S, Seattle",
        "permit": 6608078,
        "contractor": "Blackwood Builders Group,",
        "phone": "(425) 443-5453",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1044",
        "project": "Carlson Residence (John-Mark)",
        "address": "20103 148th Avenue SE, Kent",
        "permit": "DWEL18-0161",
        "contractor": "Carlson, John-Mark",
        "phone": "(425) 681-1959",
        "manager": "Scott"
      },
      {
        "job_no": "18-0915",
        "project": "Cascade Hills Phase 3",
        "address": "Corner of SE 167th St & 117th Ave SE, Rento",
        "permit": "",
        "contractor": "Kar-Vel Construction",
        "phone": "(425) 533-5204",
        "manager": "Walter"
      },
      {
        "job_no": "19-0029",
        "project": "CD-02 Camden Food Co. (Project ID U0025",
        "address": "SeaTac Internationl Airport, D5-D6 Main Term,",
        "permit": "BLD-18-0079",
        "contractor": "Wilcox Construction, Inc.",
        "phone": "(206) 817-2084",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0867",
        "project": "Cedar Crest Building A",
        "address": "9523 NE 180th Street, Bothell",
        "permit": "BMF2017-15447",
        "contractor": "Charter Construction, Inc.",
        "phone": "(206) 573-0770",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0671",
        "project": "Cedar Crest Building B",
        "address": "9523 NE 180th Street, Bothell",
        "permit": "BMF2017-15449",
        "contractor": "Charter Construction, Inc.",
        "phone": "(206) 573-0770",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0373",
        "project": "Cedar Crest Building C",
        "address": "9523 NE 180th Street, Bothell",
        "permit": "BMF2017-15448",
        "contractor": "Charter Construction, Inc.",
        "phone": "(206) 573-0770",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0429",
        "project": "Cedar Hills Regional Landfill - Areas 7 and 8",
        "address": "16645 228th Avenue SE, Maple Valley",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0311a",
        "project": "Cedar Park North - Lot #01",
        "address": "907 221st Place SE, Bothell",
        "permit": "BMF2018-18558",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311b",
        "project": "Cedar Park North - Lot #02",
        "address": "913 221st Place SE, Bothell",
        "permit": "BMF2018-18560",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311c",
        "project": "Cedar Park North - Lot #03",
        "address": "919 221st Place SE, Bothell",
        "permit": "BMF2018-18561",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311d",
        "project": "Cedar Park North - Lot #04",
        "address": "925 221st Place SE, Bothell",
        "permit": "BMF2018-18562",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311e",
        "project": "Cedar Park North - Lot #05",
        "address": "931 221st Place SE, Bothell",
        "permit": "BMF2018-18365",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311f",
        "project": "Cedar Park North - Lot #06",
        "address": "928 221st Place SE, Bothell",
        "permit": "BMF2018-18364",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311g",
        "project": "Cedar Park North - Lot #07",
        "address": "924 221st Place SE, Bothell",
        "permit": "BMF2018-17603",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0311h",
        "project": "Cedar Park North - Lot #08",
        "address": "920 221st Place SE, Bothell",
        "permit": "BMF2018-18363",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243",
        "project": "Cedar Park South - All Lots",
        "address": "919 221st Street SE, Bothell",
        "permit": "",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243a",
        "project": "Cedar Park South - Lot #01",
        "address": "22256 9th Lane SE, Bothell",
        "permit": "(not issued yet)",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243b",
        "project": "Cedar Park South - Lot #02",
        "address": "22254 9th Lane SE, Bothell",
        "permit": "BMF2017-16941",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243c",
        "project": "Cedar Park South - Lot #03",
        "address": "22252 9th Lane SE, Bothell",
        "permit": "BMF2017-17786",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243d",
        "project": "Cedar Park South - Lot #04",
        "address": "22251 9th Lane SE, Bothell",
        "permit": "(not issued yet)",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243e",
        "project": "Cedar Park South - Lot #05",
        "address": "22253 9th Drive SE, Bothell",
        "permit": "BMF2017-17824",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243f",
        "project": "Cedar Park South - Lot #06",
        "address": "22264 9th Drive SE, Bothell",
        "permit": "BMF2018-18674",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243g",
        "project": "Cedar Park South - Lot #07",
        "address": "22262 9th Drive SE, Bothell",
        "permit": "BMF2018-18673",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243h",
        "project": "Cedar Park South - Lot #08",
        "address": "22261 9th Drive SE, Bothell",
        "permit": "BMF2018-18704",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243i",
        "project": "Cedar Park South - Lot #09",
        "address": "22263 9th Drive SE, Bothell",
        "permit": "BMF2018-18706",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243j",
        "project": "Cedar Park South - Lot #10",
        "address": "22265 9th Drive SE, Bothell",
        "permit": "BMF2018-18707",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243k",
        "project": "Cedar Park South - Lot #11",
        "address": "22276 9th Court SE, Bothell",
        "permit": "BMF2017-17930",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243l",
        "project": "Cedar Park South - Lot #12",
        "address": "22274 9th Court SE, Bothell",
        "permit": "BMF2017-17931",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243m",
        "project": "Cedar Park South - Lot #13",
        "address": "22272 9th Court SE, Bothell",
        "permit": "BMF2017-17932",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243n",
        "project": "Cedar Park South - Lot #14",
        "address": "22271 9th Court SE, Bothell",
        "permit": "BMF2017-17933",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243o",
        "project": "Cedar Park South - Lot #15",
        "address": "22275 9th Court SE, Bothell",
        "permit": "BMF2017-17934",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243p",
        "project": "Cedar Park South - Lot #16",
        "address": "933 223rd Street SE, Bothell",
        "permit": "BMF2017-17935",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243q",
        "project": "Cedar Park South - Lot #17",
        "address": "937 223rd Street SE, Bothell",
        "permit": "BMF2017-17936",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243r",
        "project": "Cedar Park South - Lot #18",
        "address": "938 223rd Street SE, Bothell",
        "permit": "BMF2018-18205",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243s",
        "project": "Cedar Park South - Lot #19",
        "address": "934 223rd Street SE, Bothell",
        "permit": "BMF2018-18151",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243t",
        "project": "Cedar Park South - Lot #20",
        "address": "930 223rd Street SE, Bothell",
        "permit": "BMF2018-18206",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243u",
        "project": "Cedar Park South - Lot #21",
        "address": "926 223rd Street SE, Bothell",
        "permit": "BMF2018-18676",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243v",
        "project": "Cedar Park South - Lot #22",
        "address": "922 223rd Street SE, Bothell",
        "permit": "BMF2018-18675",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243w",
        "project": "Cedar Park South - Lot #23",
        "address": "22323 9th Drive SE, Bothell",
        "permit": "BMF2018-19187",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243x",
        "project": "Cedar Park South - Lot #24",
        "address": "22325 9th Drive SE, Bothell",
        "permit": "BMF2018-19188",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243y",
        "project": "Cedar Park South - Lot #25",
        "address": "22327 9th Drive SE, Bothell",
        "permit": "BMF2018-19189",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0243z",
        "project": "Cedar Park South - Lot #26",
        "address": "22326 9th Drive SE, Bothell",
        "permit": "BMF2018-19190",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0675a",
        "project": "Cedar Park South - Lot #27",
        "address": "22324 9th Drive SE, Bothell",
        "permit": "BMF2018-19191",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0675b",
        "project": "Cedar Park South - Lot #28",
        "address": "22322 9th Drive SE, Bothell",
        "permit": "BMF2018-19192",
        "contractor": "RM Homes, LLC",
        "phone": "(425) 336-9366",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1005",
        "project": "Central Sand Shed",
        "address": "2181 SR 906, Snoqualmie Pass",
        "permit": "BP-17-00524",
        "contractor": "Ski Lift, Inc.",
        "phone": "(425) 766-4184",
        "manager": "Walter"
      },
      {
        "job_no": "17-0094a",
        "project": "Chainqui Urban Green Villa - Structural",
        "address": "2401 3rd Avenue, Seattle",
        "permit": 6505691,
        "contractor": "JTM Construction",
        "phone": "(206) 445-5395",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0781",
        "project": "CHC Everett - HBI860147",
        "address": ", Everett",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0058",
        "project": "Chen-Shao Residence",
        "address": "1201 Evergreen Point Drive, Medina",
        "permit": "B-17-091",
        "contractor": "Schultz Miller, Inc.",
        "phone": "(206) 551-9668",
        "manager": "Walter"
      },
      {
        "job_no": "18-0936",
        "project": "Chinn Residence",
        "address": "9001 NE 37th Place, Yarrow Point",
        "permit": "2018-7812",
        "contractor": "TL Erickson Construction, In",
        "phone": "(206) 909-9521",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0828",
        "project": "Chow Residence",
        "address": "3712 78th Avenue SE, Mercer Island",
        "permit": "1708-161",
        "contractor": "ESP Custom Homes",
        "phone": "(206) 605-0145",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0896",
        "project": "Christal Residence",
        "address": "17405 14th Ave NW, Shoreline",
        "permit": "SFR18-0786",
        "contractor": "Michael T. Shinn Constructi",
        "phone": "(206) 940-3586",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0002",
        "project": "City & County of San Francisco 2019",
        "address": "5200 Airport Way South, Seattle",
        "permit": "",
        "contractor": "Olympic Foundry, Inc.",
        "phone": "(206) 764-1200",
        "manager": "Walter"
      },
      {
        "job_no": "18-0448",
        "project": "Clawson Laster Residence",
        "address": "1512 32nd Avenue South, Seattle",
        "permit": 6615867,
        "contractor": "McDowell NW Pile King, Inc",
        "phone": "(206) 510-4218",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0016",
        "project": "Colby Apartments",
        "address": "2229 Colby Avenue, Everett",
        "permit": "B1806008",
        "contractor": "Charter Construction, Inc.",
        "phone": "(206) 962-0078",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1011",
        "project": "Collins Residence (Dan & Beth)",
        "address": "4711 194th Ave SE, Issaquah",
        "permit": "BLD18-00106",
        "contractor": "Heckert Construction",
        "phone": "(425) 652-0841",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0022",
        "project": "Colman Dock Project",
        "address": "801 Alaskan Way S, Seattle",
        "permit": "not applicable",
        "contractor": "Pacific Pile & Marine, LP",
        "phone": "(206) 459-5998",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0692",
        "project": "Comstock",
        "address": "210 W. Comstock Street, Seattle",
        "permit": 6354219,
        "contractor": "Barcelo Homes, Inc.",
        "phone": "(253) 394-6587",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1022",
        "project": "Creighton Project",
        "address": "1620 43rd Ave E, Apt 11A, Seattle",
        "permit": "6686753-CN",
        "contractor": "Tradecraft Builders",
        "phone": "(206) 300-7396",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0483",
        "project": "Crescent Builds Office - Main Building",
        "address": "10317 Greenwood Ave North, Seattle",
        "permit": 6625173,
        "contractor": "Crescent Builds",
        "phone": "(206) 459-3822",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0483a",
        "project": "Crescent Builds Office - Prefabricated Buildi",
        "address": "10317 Greenwood Ave North, Seattle",
        "permit": 6671401,
        "contractor": "Crescent Builds",
        "phone": "(206) 459-3822",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0048",
        "project": "Crossroads Village - All Buildings",
        "address": "15751 NE 15th Street (sales ofc), Bellevue",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048v",
        "project": "Crossroads Village - Bldg. 01",
        "address": "15813 NE 15th Street, Bellevue",
        "permit": "16-134223BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0336f",
        "project": "Crossroads Village - Bldg. 02",
        "address": "1494 159th Place NE, Bellevue",
        "permit": "16-134218 BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048x",
        "project": "Crossroads Village - Bldg. 04",
        "address": "1464 159th Pl NE, Bellevue",
        "permit": "16-134220 BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048w",
        "project": "Crossroads Village - Bldg. 05",
        "address": "1453 159th Pl NE, Bellevue",
        "permit": "16-134221BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048q",
        "project": "Crossroads Village - Bldg. 06",
        "address": "1444 159th Place NE, Bellevue",
        "permit": "16-134222BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048u",
        "project": "Crossroads Village - Bldg. 07",
        "address": "15899 NE 14th Road, Bellevue",
        "permit": "16-134166BB",
        "contractor": "Polygon Northwest",
        "phone": "(425) 229-4574",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048p",
        "project": "Crossroads Village - Bldg. 08",
        "address": "15785 NE 14th, Bellevue",
        "permit": "16-134169",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048r",
        "project": "Crossroads Village - Bldg. 09",
        "address": "1424 158th PL NE, Bellevue",
        "permit": "16 134171BB",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048s",
        "project": "Crossroads Village - Bldg. 10",
        "address": "1434 158th CT NE, Bellevue",
        "permit": "16 134170BB",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "18-0336a",
        "project": "Crossroads Village - Bldg. 11",
        "address": "1484 158th CT NE, Bellevue",
        "permit": "16-134224BB",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "18-0336e",
        "project": "Crossroads Village - Bldg. 12",
        "address": "1474 158th Pl NE, Bellevue",
        "permit": "16-134225BB",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048i",
        "project": "Crossroads Village - Bldg. 13",
        "address": "1403 158th Place NE, Bellevue",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048j",
        "project": "Crossroads Village - Bldg. 14",
        "address": "??1423 158th Place NE, Bellevue",
        "permit": "16-129243BB",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048d",
        "project": "Crossroads Village - Bldg. 15",
        "address": "1490 157th Ct NE, Bellevue",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048a",
        "project": "Crossroads Village - Bldg. 16",
        "address": "15751 NE 14th Street, Bellevue",
        "permit": "16-129200",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0336c",
        "project": "Crossroads Village - Bldg. 17",
        "address": "15751 NE 15th Street, Bellevue",
        "permit": "18 119062 UC",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048n",
        "project": "Crossroads Village - Bldg. 18",
        "address": "15785 NE 14th RTE, Bellevue",
        "permit": "16-134161",
        "contractor": "Polygon Northwest",
        "phone": "(425) 229-4574",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048o",
        "project": "Crossroads Village - Bldg. 19",
        "address": "15775 NE 14th RTE, Bellevue",
        "permit": "16-134162",
        "contractor": "Polygon Northwest",
        "phone": "(425) 229-4574",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048l",
        "project": "Crossroads Village - Bldg. 20",
        "address": "15742 NE 14th ALY, Bellevue",
        "permit": "16-130946BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048m",
        "project": "Crossroads Village - Bldg. 21",
        "address": "15764 NE 14th ALY, Bellevue",
        "permit": "16-134163",
        "contractor": "Polygon Northwest",
        "phone": "(425) 229-4574",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048k",
        "project": "Crossroads Village - Bldg. 22",
        "address": "15775 NE 14th Alley, Bellevue",
        "permit": "16-130947BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048g",
        "project": "Crossroads Village - Bldg. 23",
        "address": "15735 NE 14th, Bellevue",
        "permit": "16-129201BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048h",
        "project": "Crossroads Village - Bldg. 24",
        "address": "15794 14th Terrace, Bellevue",
        "permit": "16-130948-BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048e",
        "project": "Crossroads Village - Bldg. 25",
        "address": "15722 NE Terrace, Bellevue",
        "permit": "16-129208BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048b",
        "project": "Crossroads Village - Bldg. 26",
        "address": "15725 NE 14th Street, Bellevue",
        "permit": "16-12909-BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048c",
        "project": "Crossroads Village - Bldg. 27",
        "address": "15725 NE 14th Street, Bellevue",
        "permit": "16-129210-BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048f",
        "project": "Crossroads Village - Bldg. 28",
        "address": "1414 157th Place NE*, Bellevue",
        "permit": "16 129211 BB",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0336d",
        "project": "Crossroads Village - Bldg. 29",
        "address": "1454 157th Place NE, Bellevue",
        "permit": "16-134164 BB",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "17-0048t",
        "project": "Crossroads Village – Fire Lane",
        "address": "Various, Bellevue",
        "permit": "16 122255FN",
        "contractor": "Polygon Northwest",
        "phone": "(253) 341-7408",
        "manager": "Walter"
      },
      {
        "job_no": "18-0336b",
        "project": "Crossroads Village - Park Interface",
        "address": "15751 NE 15th Street, Bellevue",
        "permit": "16-102816GB",
        "contractor": "Polygon Northwest",
        "phone": "425-791-5395",
        "manager": "Walter"
      },
      {
        "job_no": "18-1013",
        "project": "CT-21 Pei Wei (Project ID U00259)",
        "address": "17801 International Blvd, SeaTac Airport",
        "permit": "BLD-PP-18-0085",
        "contractor": "Wilcox Construction, Inc.",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0023",
        "project": "CT-23 Evergreens",
        "address": "17801 International Blvd., SeaTac Airport",
        "permit": "",
        "contractor": "Wilcox Construction, Inc.",
        "phone": "(425) 774-4185",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1015",
        "project": "CT-26 Koi Shi Sushi and Bento (Project ID",
        "address": "17801 International Blvd, SeaTac Airport",
        "permit": "BLD-18-0083",
        "contractor": "Wilcox Construction, Inc.",
        "phone": "(206) 817-2206",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1012",
        "project": "Cummings 4-Plex",
        "address": "20904 72nd Ave W, Edmonds",
        "permit": "BLD20171835",
        "contractor": "Slater Homes Corp",
        "phone": "(425) 890-3397",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0550",
        "project": "Delridge Five LLC",
        "address": "5206 Delridge Way SW, Seattle",
        "permit": 6421912,
        "contractor": "Envision Northwest",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0037",
        "project": "Delridge Way SW Townhomes",
        "address": "4534 Delridge Way SW, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-1087",
        "project": "Devey Residence (Tom & Heather)",
        "address": "10316 NE 156th Place, Bothell",
        "permit": "BSF2018-21218",
        "contractor": "Seismic Northwest, LP",
        "phone": "(360) 349-3857",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1008",
        "project": "Dimitriou Addition",
        "address": "7454 NE 120th Place, Kirkland",
        "permit": "BSF18-01328",
        "contractor": "Black Dog Custom Builders",
        "phone": "(206) 714-1066",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0506",
        "project": "Donahoe/Eagles-Soukup Residence",
        "address": "2368 Hobart Avenue SW, Seattle",
        "permit": "",
        "contractor": "Transblue",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0988",
        "project": "Dorothy's House Project",
        "address": "4329 West Semple Street, Seattle",
        "permit": 6556340,
        "contractor": "Lockhart Suver, LLC",
        "phone": "(206) 359-1374",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1064a",
        "project": "Earlington Project Bldg. 01",
        "address": "8202-8206 S 132nd Street, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 78604913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064b",
        "project": "Earlington Project Bldg. 02",
        "address": "8210-8214 S 132nd St, Renton",
        "permit": "B18001287",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064c",
        "project": "Earlington Project Bldg. 03",
        "address": "8220-8226 S 132nd Street, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064d",
        "project": "Earlington Project Bldg. 04",
        "address": "8228-8230 S 132nd Street, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064e",
        "project": "Earlington Project Bldg. 05",
        "address": "13102-13114 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064f",
        "project": "Earlington Project Bldg. 06",
        "address": "13101-13111 83rd Lane S (See Notes), Renton",
        "permit": "B18001192",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064g",
        "project": "Earlington Project Bldg. 07",
        "address": "13122-13132 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064h",
        "project": "Earlington Project Bldg. 08",
        "address": "13121-13131 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064i",
        "project": "Earlington Project Bldg. 09",
        "address": "13141-13153 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064j",
        "project": "Earlington Project Bldg. 10",
        "address": "13142-13148 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064k",
        "project": "Earlington Project Bldg. 11",
        "address": "13167-13169 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064l",
        "project": "Earlington Project Bldg. 12",
        "address": "13161-13165 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064m",
        "project": "Earlington Project Bldg. 13",
        "address": "13181-13187 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1064n",
        "project": "Earlington Project Bldg. 14",
        "address": "13189-13191 83rd Lane S, Renton",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 786-4913",
        "manager": "Walter"
      },
      {
        "job_no": "16-0860a",
        "project": "East Link Light Rail I-90 (E130 - Judkins Par",
        "address": "1496 Rainier Ave S (use 1400 S Dean for GPS",
        "permit": "",
        "contractor": "Kiewit-Hoffman East Link C",
        "phone": "206-549-5289",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0860",
        "project": "East Link Light Rail I-90 (E130 - MI Station)",
        "address": "2510 77th Avenue SE* (MI Station), Mercer Isl",
        "permit": "",
        "contractor": "Kiewit-Hoffman East Link C",
        "phone": "206-549-5289",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0860b",
        "project": "East Link Light Rail I-90 (E130 - MI Tunnel)",
        "address": "2101 72nd SE, Mercer Island",
        "permit": "",
        "contractor": "Kiewit-Hoffman East Link C",
        "phone": "206-549-5289",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0860c",
        "project": "East Link Light Rail I-90 (E130 - Mt. Baker T",
        "address": "1411 Yakima Avenue South, Seattle",
        "permit": "",
        "contractor": "Kiewit-Hoffman East Link C",
        "phone": "206-549-5289",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0274",
        "project": "East Link Light Rail Project (E360 Segment)",
        "address": "Near SR 520 at NE 20th St. to OTC Station, B",
        "permit": "",
        "contractor": "",
        "phone": "(253) 439-8884",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804",
        "project": "Eclipse Townhomes - All Buildings",
        "address": "3300 Eclipse Mill Road, Everett",
        "permit": "SEE NOTES",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804d",
        "project": "Eclipse Townhomes - Bldg. 01",
        "address": "3302 31st Drive, Everett",
        "permit": "C1606-069 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804f",
        "project": "Eclipse Townhomes - Bldg. 02",
        "address": "3301 31st Drive, Everett",
        "permit": "C1604-020 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804g",
        "project": "Eclipse Townhomes - Bldg. 03",
        "address": "3313 to 3323 31st Drive, Everett",
        "permit": "C1604-026 to 31",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804i",
        "project": "Eclipse Townhomes - Bldg. 04",
        "address": "3325 to 3335 31st Drive, Everett",
        "permit": "C1604-032 to 37",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804h",
        "project": "Eclipse Townhomes - Bldg. 05",
        "address": "3337 to 3345 31st Drive, Everett",
        "permit": "C1603-026 to 30",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804e",
        "project": "Eclipse Townhomes - Bldg. 06",
        "address": "3322 31st Drive, Everett",
        "permit": "C1604-068 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804j",
        "project": "Eclipse Townhomes - Bldg. 07",
        "address": "3336 to 3346 31st Drive, Everett",
        "permit": "C1604-074 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804k",
        "project": "Eclipse Townhomes - Bldg. 08",
        "address": "3347 to 3355 31st Drive, Everett",
        "permit": "C1603-031 to 035",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804l",
        "project": "Eclipse Townhomes - Bldg. 09",
        "address": "3401 31st Drive, Everett",
        "permit": "C1603-036 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804m",
        "project": "Eclipse Townhomes - Bldg. 10",
        "address": "3350 31st Drive, Everett",
        "permit": "C1604-080 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804y",
        "project": "Eclipse Townhomes - Bldg. 11",
        "address": "3411 31st Drive, Everett",
        "permit": "C1604-038",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804x",
        "project": "Eclipse Townhomes - Bldg. 12",
        "address": "3423 31st Dr., Everett",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804t",
        "project": "Eclipse Townhomes - Bldg. 13",
        "address": "3412 31st Dr., Everett",
        "permit": "1604-086 to 092",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804w",
        "project": "Eclipse Townhomes - Bldg. 14",
        "address": "3458 31st Drive, Everett",
        "permit": "C1604-092 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 328-5811",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287d",
        "project": "Eclipse Townhomes - Bldg. 15",
        "address": "3435 31st Drive, Everett",
        "permit": "C1604-050 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287e",
        "project": "Eclipse Townhomes - Bldg. 16",
        "address": "3447 31st Drive, Everett",
        "permit": "C1603-041 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287f",
        "project": "Eclipse Townhomes - Bldg. 17",
        "address": "Various, Everett",
        "permit": "C1603-046 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804a",
        "project": "Eclipse Townhomes - Bldg. 18",
        "address": "3300 Eclipse Mill Rd (3458 31st Drive), Everett",
        "permit": "C1602-016 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804b",
        "project": "Eclipse Townhomes - Bldg. 19",
        "address": "3511 31st Drive, Everett",
        "permit": "C1602-020 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804c",
        "project": "Eclipse Townhomes - Bldg. 20",
        "address": "3300 Eclipse Mill Road, Everett",
        "permit": "C1604-098 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804u",
        "project": "Eclipse Townhomes - Bldg. 21",
        "address": "3339 30th Drive, Everett",
        "permit": "C1604-104 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804n",
        "project": "Eclipse Townhomes - Bldg. 22",
        "address": "3405 30th Drive, Everett",
        "permit": "C1604-112 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804o",
        "project": "Eclipse Townhomes - Bldg. 23",
        "address": "3410 30th Drive, Everett",
        "permit": "C1603-050 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804r",
        "project": "Eclipse Townhomes - Bldg. 24",
        "address": "3409-3419 30th Drive, Everett",
        "permit": "C1604-118 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804p",
        "project": "Eclipse Townhomes - Bldg. 25",
        "address": "3414 to 3420 30th Drive, Everett",
        "permit": "C1604-056 to C16",
        "contractor": "Polygon Northwest",
        "phone": "(425) 377-9262",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804s",
        "project": "Eclipse Townhomes - Bldg. 26",
        "address": "3423-3435 30th Drive, Everett",
        "permit": "C1606-076 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804q",
        "project": "Eclipse Townhomes - Bldg. 27",
        "address": "3011 34th Place, Everett",
        "permit": "C1606-097 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804v",
        "project": "Eclipse Townhomes - Bldg. 28",
        "address": "3002-3012 34th Place, Everett",
        "permit": "C1606-102 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287c",
        "project": "Eclipse Townhomes - Bldg. 29",
        "address": "3439 - 3451 30th Drive, Everett",
        "permit": "C1606-083 to 089",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287g",
        "project": "Eclipse Townhomes - Bldg. 30",
        "address": "3513 30th Drive, Everett",
        "permit": "C1606-090 to 096",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "16-0804z",
        "project": "Eclipse Townhomes - Bldg. 31",
        "address": "3001 35th Street, Everett",
        "permit": "C1604-062 thru 0",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287b",
        "project": "Eclipse Townhomes - Bldg. 32",
        "address": "3208 30th Avenue, Everett",
        "permit": "C1606-108 thru 1",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "18-0287a",
        "project": "Eclipse Townhomes - Bldg. 33",
        "address": "3008 35th St, Everett",
        "permit": "C1606-115 to 118",
        "contractor": "Polygon Northwest",
        "phone": "(425) 891-2727",
        "manager": "Walter"
      },
      {
        "job_no": "19-0030",
        "project": "Edgewater Inn",
        "address": "2411 Alaskan Way, Seattle",
        "permit": 6282145,
        "contractor": "Stillwater Marine, Inc.",
        "phone": "(206) 450-3225",
        "manager": "Walter"
      },
      {
        "job_no": "17-0875",
        "project": "Edgewood Veterinary Clinic",
        "address": "1311 Meridian Ave. E, Edgewood",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0892",
        "project": "Edmonds 401",
        "address": "18000 76th Avenue West, Edmonds",
        "permit": "",
        "contractor": "",
        "phone": "253-845-7000",
        "manager": "Anthony"
      },
      {
        "job_no": "19-0065",
        "project": "Elite Commercial Contracting",
        "address": "406 E North Bend Way, North Bend",
        "permit": "",
        "contractor": "Rainier Industries, Ltd.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0663",
        "project": "Escala Condominium Building",
        "address": "1920 4th Avenue, Seattle",
        "permit": 6573576,
        "contractor": "",
        "phone": "(206) 228-0158",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0474",
        "project": "Evergreen Heights Elementary School Site I",
        "address": "5602 S. 316th Street, Auburn",
        "permit": "BLD 18-0055",
        "contractor": "Tunista Construction, LLC",
        "phone": "(206) 742-8362",
        "manager": "Walter"
      },
      {
        "job_no": "15-0601",
        "project": "Excellence Health and Fitness (2015)",
        "address": "4100 Aurora Avenue North, Seattle",
        "permit": 6407437,
        "contractor": "Promondo, LLC",
        "phone": "(206) 859-1026",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0668",
        "project": "Far West Steel Warehouse Project",
        "address": "201 SW 34th St, Renton",
        "permit": "N/A",
        "contractor": "Farwest Steel",
        "phone": "(425) 656-3254",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0690",
        "project": "Fauntleroy Project",
        "address": "9121 Fauntleroy Way SW, Seattle",
        "permit": 6586810,
        "contractor": "Dovetail General contractor",
        "phone": "(206) 713-9859",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0280",
        "project": "Flacco Residence",
        "address": "1710 36th Ave (use 1716 for GPS), Seattle",
        "permit": 6530494,
        "contractor": "P.H. Robison Construction",
        "phone": "(206) 601-4855",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0638",
        "project": "Float A - Long",
        "address": "1213 East Shelby, #19 (see notes), Seattle",
        "permit": 6552260,
        "contractor": "Dyna Contracting, Inc.",
        "phone": "(206) 708-9029",
        "manager": "Walter"
      },
      {
        "job_no": "18-0656",
        "project": "Float B - Samsel",
        "address": "2812 Boyer Avenue East (see notes), Seattle",
        "permit": 6465822,
        "contractor": "Dyna Contracting, Inc.",
        "phone": "(206) 708-9029",
        "manager": "Walter"
      },
      {
        "job_no": "18-0657",
        "project": "Float C - Morken",
        "address": "2114 Boyer Avenue East (see notes), Seattle",
        "permit": 6465824,
        "contractor": "Dyna Contracting, Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0637",
        "project": "Float D - Phillips",
        "address": "2816 Boyer Avenue East, Seattle",
        "permit": 6465825,
        "contractor": "Dyna Contracting, Inc.",
        "phone": "(206) 708-9029",
        "manager": "Walter"
      },
      {
        "job_no": "18-0602",
        "project": "Freeman Residence Phase 3",
        "address": "1928 Harvard Avenue E, Seattle",
        "permit": 6486833,
        "contractor": "Toellner Construction, LLC",
        "phone": "(253) 380-2004",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0020",
        "project": "Frye Apartments In-Plane Brick Shear Testi",
        "address": "223 Yesler Way, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1046",
        "project": "Garman Residence",
        "address": "432 2nd Avenue NE, Seattle",
        "permit": 6671870,
        "contractor": "Prestige Residential Constr",
        "phone": "",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "19-0070",
        "project": "Garms Residence",
        "address": "324 7th avenue, Kirkland",
        "permit": "BSF18-01422",
        "contractor": "Schovajsa Construction",
        "phone": "(425) 246-5936",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0670",
        "project": "Gene Coulon Memorial Beach Park Structur",
        "address": "1201 Lake Washington Boulevard North, Rent",
        "permit": "B18-001880",
        "contractor": "Quigg Brothers, Inc.",
        "phone": "360-500-9332",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "16-0478a",
        "project": "Gensco New Bldg - HVAC",
        "address": "5917 4th Avenue South, Seattle",
        "permit": 6551884,
        "contractor": "Donovan Brothers, Inc.",
        "phone": "(206) 354-6326",
        "manager": "",
        "": "Walter"
      },
      {
        "job_no": "18-0696",
        "project": "Georgetown Brewery Expansion",
        "address": "5200 Denver Ave South, Seattle",
        "permit": "6599240-CN",
        "contractor": "JTM Construction",
        "phone": "(206) 817-5870",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0874",
        "project": "Georgetown Wet Weather Treatment Statio",
        "address": "6185 4th Ave. S, Seattle",
        "permit": "",
        "contractor": "James W. Fowler Company",
        "phone": "",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0713",
        "project": "Georgetown Wet Weather Treatment Statio",
        "address": "6185 4th Ave. S, Seattle",
        "permit": 6503485,
        "contractor": "Flatiron West, Inc.",
        "phone": "(360) 630-3553",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0971",
        "project": "Globe Building",
        "address": "310 1st Avenue South, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "17-0213",
        "project": "Golden Curry Mixed Use",
        "address": "23811 West Valley Highway, Kent",
        "permit": "CNST2151446",
        "contractor": "Strong Weld",
        "phone": "(206) 355-9353",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0782",
        "project": "Golden Pines Elderly Housing Facility",
        "address": "2901 NE 10th Street, Renton",
        "permit": "B17005057",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "",
        "": "Walter"
      },
      {
        "job_no": "16-0396",
        "project": "Gordito's Restaurant (2016)",
        "address": "213 N 85th Street, Seattle",
        "permit": 6526552,
        "contractor": "Interstate Restoration",
        "phone": "(425) 343-7636",
        "manager": "",
        "": "Jeff"
      },
      {
        "job_no": "19-0060",
        "project": "Graber Project",
        "address": "6035 2nd Ave NW, Seattle",
        "permit": 6653761,
        "contractor": "Raincap Construction, Inc.",
        "phone": "(303) 746-4879",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0810",
        "project": "Grannis Road LLC",
        "address": "19318 29th Avenue SE, Bothell",
        "permit": "",
        "contractor": "",
        "phone": "(206) 890-3084",
        "manager": "*",
        "": "Scott"
      },
      {
        "job_no": "17-0529",
        "project": "Graves Residence - Retaining Wall Repair",
        "address": "8027 Sunnyside Avenue North, Seattle",
        "permit": 6622498,
        "contractor": "",
        "phone": "",
        "manager": "",
        "": "Anthony"
      },
      {
        "job_no": "19-0074",
        "project": "Greenside Recreational",
        "address": "23407 Pacific Highway S, Des Moines",
        "permit": "",
        "contractor": "Rainier Industries, Ltd.",
        "phone": "(206) 819-3846",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0944",
        "project": "Greenwood Phinney Landbanked Park",
        "address": "Greenwood Ave N (N 82nd St and N 81st St),",
        "permit": 6583298,
        "contractor": "Wyser Construction Co., Inc",
        "phone": "",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0463",
        "project": "Ground Transportation Building Renovation",
        "address": "2809 South 160th Street, SeaTac",
        "permit": "1810596 or BLD-",
        "contractor": "Colvos Construction, LLC",
        "phone": "(425)879-9512",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-1061",
        "project": "Grove Residence",
        "address": "12728 NE 95th St, Kirkland",
        "permit": "17-07079",
        "contractor": "JD Bergevin Homes, Inc.",
        "phone": "(425) 406-9086",
        "manager": "",
        "": "Jeff"
      },
      {
        "job_no": "19-0051",
        "project": "Guitar Center - Action Special Inspections",
        "address": "6308 Roosevelt Way NE, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "(503) 381-6329",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "19-0093",
        "project": "Guthrie Residence",
        "address": "3141 Fairweather Drive, Hunts Point",
        "permit": "",
        "contractor": "Sea & Shore Construction, I",
        "phone": "(206) 434-1449",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "19-0044",
        "project": "GW 11 Fluoroscopy Supports",
        "address": "1660 S Columbian Way, Bldg. 101, Seattle",
        "permit": "n/a",
        "contractor": "",
        "phone": "",
        "manager": "",
        "": "Walter"
      },
      {
        "job_no": "17-0169a",
        "project": "Harborview - 2EH Patient Lift Installation (M",
        "address": "325 9th Avenue, Seattle",
        "permit": 6503579,
        "contractor": "M Brown Industries, LLC",
        "phone": "",
        "manager": "",
        "": "Anthony"
      },
      {
        "job_no": "18-0952",
        "project": "Harbour Heights Condominium Repairs",
        "address": "2621 2nd Avenue, Seattle",
        "permit": 6644971,
        "contractor": "Tatley-Grund, Inc.",
        "phone": "",
        "manager": "",
        "": "Walter"
      },
      {
        "job_no": "18-1081",
        "project": "Harrison Row Houses",
        "address": "1052 E Harrison Street, Seattle",
        "permit": 6613739,
        "contractor": "Revolution Custom Builders",
        "phone": "(260) 779-1414",
        "manager": "Isaac"
      },
      {
        "job_no": "07-0580a",
        "project": "Harvard & Highland Condominiums Building",
        "address": "1188 Harvard Avenue East, Seattle",
        "permit": 6117384,
        "contractor": "WG Clark Construction Co",
        "phone": "(206) 793-3972",
        "manager": "Walter"
      },
      {
        "job_no": "18-0060",
        "project": "Harwood Condo",
        "address": "1311 12th Ave S, Seattle",
        "permit": 6572273,
        "contractor": "Charter Construction, Inc.",
        "phone": "(206) 841-0053",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1076",
        "project": "Heiberg Residence",
        "address": "2365 SW Squak Mountain Loop, Issaquah",
        "permit": "BLD18-00057",
        "contractor": "Hess Construction",
        "phone": "(425) 531-0628",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0955",
        "project": "Henninger Short Plat",
        "address": "16112 SE Petrovitsky Road, Renton",
        "permit": "",
        "contractor": "R and D Enterprises",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "13-0163",
        "project": "Heron Residence",
        "address": "10012 SW Dock Street, Vashon Island",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "19-0063",
        "project": "Hess Residence",
        "address": "4822 251st St SE, Snohomish",
        "permit": "18122258RK",
        "contractor": "Everett, Aaron",
        "phone": "(206) 276-2300",
        "manager": "Scott"
      },
      {
        "job_no": "19-0033",
        "project": "Highline College - Bldg. 6 Canopy (Project",
        "address": "2400 S. 240th Street, Building 6, Des Moines",
        "permit": "BLD2018-1344",
        "contractor": "Pease Construction, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0456",
        "project": "Highline S. 268th St. Water & Brightwood P",
        "address": "S. 268th St. & Brightwood Park, Normandy Par",
        "permit": "ENG2016-044",
        "contractor": "SCI Infrastructure, LLC",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0645a",
        "project": "HighPoint Block 9 Townhomes - Bldg. 01",
        "address": "3250 SW Graham Street, Seattle",
        "permit": 6506776,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645b",
        "project": "HighPoint Block 9 Townhomes - Bldg. 02",
        "address": "3300 SW Graham Street, Seattle",
        "permit": 6528566,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645c",
        "project": "HighPoint Block 9 Townhomes - Bldg. 03",
        "address": "3320 SW Graham Street, Seattle",
        "permit": 6528566,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645d",
        "project": "HighPoint Block 9 Townhomes - Bldg. 04",
        "address": "3260 SW Graham Street, Seattle",
        "permit": 6506776,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645e",
        "project": "HighPoint Block 9 Townhomes - Bldg. 05",
        "address": "3270 SW Graham Street, Seattle",
        "permit": 6506776,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645f",
        "project": "HighPoint Block 9 Townhomes - Bldg. 06",
        "address": "3280 SW Graham Street, Seattle",
        "permit": 6528566,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645g",
        "project": "HighPoint Block 9 Townhomes - Bldg. 07",
        "address": "3400 SW Graham Street, Seattle",
        "permit": 6528566,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645h",
        "project": "HighPoint Block 9 Townhomes - Bldg. 08",
        "address": "3410 SW Graham Street, Seattle",
        "permit": 6506776,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645i",
        "project": "HighPoint Block 9 Townhomes - Bldg. 09",
        "address": "3430 SW Graham Street, Seattle",
        "permit": 6528566,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645j",
        "project": "HighPoint Block 9 Townhomes - Bldg. 10",
        "address": "3420 SW Graham Street, Seattle",
        "permit": 6506776,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0645k",
        "project": "HighPoint Block 9 Townhomes - Bldg. 11",
        "address": "3450 SW Graham Street, Seattle",
        "permit": 6528566,
        "contractor": "Polygon Northwest",
        "phone": "(504) 298-8423",
        "manager": "Walter"
      },
      {
        "job_no": "17-0209a",
        "project": "Hive Roosevelt - Structural",
        "address": "6717 Roosevelt Way NE, Seattle",
        "permit": 6534447,
        "contractor": "WG Clark Construction Co",
        "phone": "(206) 305-6154",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0080",
        "project": "Hoch Residence",
        "address": "3610 W. Commodore Way, Seattle",
        "permit": "6620033-CN",
        "contractor": "Gregerson Custom Homes,",
        "phone": "(425) 691-0042",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0830",
        "project": "Holly Hills Residence",
        "address": "23 Holly Hills Drive, Mercer Island",
        "permit": "1803-180",
        "contractor": "Toth Construction, Inc.",
        "phone": "(206) 418-9835",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0891",
        "project": "Holman Distribution",
        "address": "22430 76th Avenue South, Kent",
        "permit": "RC11-2182597",
        "contractor": "Key Mechanical",
        "phone": "206-396-3019",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0958",
        "project": "Holy Family Kirkland CGS Classroom Buildi",
        "address": "7355 120th Ave NE, Kirkland",
        "permit": "BNR18-03676",
        "contractor": "Hamish Anderson Custom",
        "phone": "(215) 756-3909",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0859",
        "project": "Honeywell Clean Room Expansion",
        "address": "15015 NE 36th Street, Redmond",
        "permit": "",
        "contractor": "Swinerton Builders, Inc.",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "17-0910",
        "project": "Honeywell MEMS Floor",
        "address": "15001 NE 36th Street, Redmond",
        "permit": "n/a",
        "contractor": "Swinerton Builders, Inc.",
        "phone": "(425) 829-8601",
        "manager": "Anthony"
      },
      {
        "job_no": "19-0034",
        "project": "Howe Condominiums Foundation Repair",
        "address": "507 Howe Street, Unit C, Seattle",
        "permit": "6670497-CN",
        "contractor": "Andre, Michael",
        "phone": "(425) 691-0075",
        "manager": "Walter"
      },
      {
        "job_no": "18-0131",
        "project": "Hudson Townhomes",
        "address": "3910 South Hudson Street, Seattle",
        "permit": 6531146,
        "contractor": "Orcas Homes, LLC",
        "phone": "(253) 653-9545",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0081",
        "project": "Huey Basement Remodel",
        "address": "2515 West Smith Street, Seattle",
        "permit": "6697819-CN",
        "contractor": "Joseph McKinstry Construct",
        "phone": "(206) 948-5511",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0045",
        "project": "Huntington Park West H.O. Association",
        "address": "1000 S 248th St, Des Moines",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "19-0024",
        "project": "Huppert Residence",
        "address": "1920 30th Avenue S, Seattle",
        "permit": 6648552,
        "contractor": "Chaffey Custom Constructio",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0576",
        "project": "Huynh Short Plat",
        "address": "621 S 103rd Street, Seattle",
        "permit": "LUIS13-0032",
        "contractor": "Idares Construction, LLC",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0957",
        "project": "Hydro Systems",
        "address": "7028 South 204th Street, Kent",
        "permit": "CNST-2182453",
        "contractor": "TCL Partners",
        "phone": "(425) 315-5193",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0431",
        "project": "Ingraham High School Addition",
        "address": "1819 N. 135th Street, Seattle",
        "permit": 6583445,
        "contractor": "Cornerstone General Contra",
        "phone": "(360) 854-8334",
        "manager": "Walter"
      },
      {
        "job_no": "19-0036",
        "project": "Inspirus Credit Union Bremerton WA",
        "address": "5373 Auto Center Way, Bremerton",
        "permit": "BB1800466",
        "contractor": "Tricon Commercial Constru",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0031",
        "project": "Inspirus Credit Union Store Kirkland 2734",
        "address": "10020 NE 137th St, Kirkland",
        "permit": "BNR18-07944",
        "contractor": "Tricon Commercial Constru",
        "phone": "(425) 577-9713",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0083",
        "project": "Install New Awning",
        "address": "8021 S 198th St, Kent",
        "permit": 2183229,
        "contractor": "Southcreek Construction LL",
        "phone": "(253) 988-0283",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0409",
        "project": "Integrated Education Center - RH Testing",
        "address": "6000 16th Avenue SW, Seattle",
        "permit": "",
        "contractor": "West Coast Flooring, Inc.",
        "phone": "(253) 970-7270",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0090",
        "project": "Intellectual Ventures Mezzanine Expansion",
        "address": "14360 SE Eastgate Way, Bellevue",
        "permit": "18 102894 BZ",
        "contractor": "Swinerton Builders, Inc.",
        "phone": "(425) 283-5197",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0468",
        "project": "Island Soul Restaurant",
        "address": "4869 Rainer Avenue South, Seattle",
        "permit": 6588357,
        "contractor": "Rafn Company, Inc.",
        "phone": "(206) 510-2659",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0834",
        "project": "Jackson",
        "address": "1425 S Jackson Street, Seattle",
        "permit": "6611600-CN",
        "contractor": "Craftsman Construction, Inc",
        "phone": "(206) 619-4501",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1030",
        "project": "Jamshidiat Garage Remodel",
        "address": "478 West Lake Sammamish Pkwy, Bellevue",
        "permit": "18-126623-UC",
        "contractor": "Jamshidiat, Hamid",
        "phone": "(425) 445-3260",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0965",
        "project": "JauJou Foundation",
        "address": "19918 76th Avenue NE, Kenmore",
        "permit": "BLD18-0751",
        "contractor": "Griffin Foundation Repair",
        "phone": "(206) 707-5731",
        "manager": "Scott"
      },
      {
        "job_no": "18-0507",
        "project": "Javaheri Residence",
        "address": "446 Comstock Place, Seattle",
        "permit": 6382791,
        "contractor": "Kenco of Washington, Inc.",
        "phone": "(206) 391-0370",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0981",
        "project": "JD 65",
        "address": "6575 NE Windemere Road, Seattle",
        "permit": 6556009,
        "contractor": "Schultz Miller, Inc.",
        "phone": "206-551-9664",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0351a",
        "project": "Jefferson Park Apartments - Structural",
        "address": "2902 Beacon Avenue South, Seattle",
        "permit": 6552298,
        "contractor": "Edge Developers/MarPac C",
        "phone": "(206) 226-5835",
        "manager": "Walter"
      },
      {
        "job_no": "18-0901",
        "project": "Jesse Howard Residence",
        "address": "30 Kearney Drive, Snoqualmie Pass",
        "permit": "BP-18-00618 How",
        "contractor": "ROK Builders",
        "phone": "T (805) 570-9820,",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0627",
        "project": "Jimi Hendrix Park Wave Wall",
        "address": "2400 South Massachusetts St, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0436",
        "project": "Jimmy B",
        "address": "507 22nd Avenue, Seattle",
        "permit": 6453103,
        "contractor": "",
        "phone": "(206) 747-6919",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0986",
        "project": "JL Facility Solutions",
        "address": "18035 Sperry Drive, Tukwila",
        "permit": "",
        "contractor": "Rainier Industries, Ltd.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0973",
        "project": "Johnson Studio",
        "address": "932 NW 122nd Street, Seattle",
        "permit": 6623356,
        "contractor": "",
        "phone": "206-669-5159",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0392",
        "project": "Jones Residence (Erik)",
        "address": "3820 E Howe Street, Seattle",
        "permit": 333175,
        "contractor": "March-MacDonald, Inc.",
        "phone": "(206) 793-1048",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0021",
        "project": "Juanita Bay Condominium - Exterior Remed",
        "address": "9201 NE Juanita Drive, Kirkland",
        "permit": "BMF18-01686",
        "contractor": "Pacific Building Envelope, I",
        "phone": "(425) 770-5746",
        "manager": "Jeff"
      },
      {
        "job_no": "14-0103",
        "project": "Juanita Bay Veterinary/ AWI Office",
        "address": "11496 98th Avenue NE, Kirkland",
        "permit": "BNR 13-04519",
        "contractor": "Corstone contractors, LLC",
        "phone": "(425) 870-5894",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0889",
        "project": "Kamin Building",
        "address": "5101 14th Avenue NW, Seattle",
        "permit": "6571124-CN",
        "contractor": "Kamin Excavation/Commer",
        "phone": "(206) 423-8907",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1086",
        "project": "Kashani Residence (Ali)",
        "address": "306 13th Ave, Kirkland",
        "permit": "BSF18-00509",
        "contractor": "Artoush Construction & Re",
        "phone": "(425) 890-9995",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0758",
        "project": "Kearney Lowes Residence",
        "address": "1502 Grand Ave, Seattle",
        "permit": "6624190-CN",
        "contractor": "McBride Construction Reso",
        "phone": "(206) 235-1672",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0317a",
        "project": "Ken Phillips House - Structural",
        "address": "1945 82nd Ave SE, Mercer Island",
        "permit": "1602-198",
        "contractor": "March-MacDonald, Inc.",
        "phone": "(206) 793-1048",
        "manager": "Walter"
      },
      {
        "job_no": "18-0652",
        "project": "Kent Supreme Self Storage - Bldg. A",
        "address": "25301 Pacific Highway South, Kent",
        "permit": "CNST 2164093",
        "contractor": "JPR Construction, Inc.",
        "phone": "(253) 221-1000",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0396",
        "project": "Kent Supreme Self Storage - Bldg. C",
        "address": "25301 Pacific Highway South, Kent",
        "permit": "CNST 2164095",
        "contractor": "JPR Construction, Inc.",
        "phone": "(253) 221-1000",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0593",
        "project": "Kent YMCA",
        "address": "10920 SE 248th St, Kent",
        "permit": 2180452,
        "contractor": "Abbott Construction, Inc.",
        "phone": "(425) 346-3165",
        "manager": "Walter"
      },
      {
        "job_no": "18-0937",
        "project": "Kiddie Academy of Bellevue",
        "address": "990 102nd Ave NE, Bellevue",
        "permit": "18-110422BW",
        "contractor": "JMS Construction",
        "phone": "(206) 459-0907",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0625",
        "project": "King Chapman Apartments",
        "address": "304 10th Ave. E, Seattle",
        "permit": 6590597,
        "contractor": "Fairbank Construction Com",
        "phone": "206-948-1150",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0449",
        "project": "King Street Arts TI",
        "address": "303 S. Jackson Street, Seattle",
        "permit": 6575705,
        "contractor": "Centennial contractors Ente",
        "phone": "(253) 249-4885",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1021",
        "project": "Kipp Residence",
        "address": "1685 10th Street West, Kirkland",
        "permit": "",
        "contractor": "DKWozniak Design Build LL",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1080",
        "project": "Ladera-Heatherwood Apts Foundation Repai",
        "address": "5851 South 152nd Street, Tukwila",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0386",
        "project": "Lake Union Life",
        "address": "100 East Edgar Street, Seattle",
        "permit": 6592397,
        "contractor": "Ruff Construction",
        "phone": "206-734-8968",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0753",
        "project": "Lakeshore Residence",
        "address": "420 39th Avenue East, Seattle",
        "permit": 6605559,
        "contractor": "Krekow Jennings, Inc.",
        "phone": "(206) 979-2805",
        "manager": "Walter"
      },
      {
        "job_no": "17-0761",
        "project": "Lambert Residence - Enumclaw",
        "address": "35817 249th Ave. SE, Enumclaw",
        "permit": "",
        "contractor": "Swanson Brothers Concrete",
        "phone": "(206) 255-5727",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0659",
        "project": "Lansfjord Tavern",
        "address": "6307 24th Ave NW, Seattle",
        "permit": 6627875,
        "contractor": "Lansfjord, LLC",
        "phone": "(206) 510-3637",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0046",
        "project": "Lanz Residence",
        "address": "10415 Forbes Creek Drive, Kirkland",
        "permit": "BSF18-01863",
        "contractor": "Pacwest Construction, LLC",
        "phone": "(206) 715-6200",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0982",
        "project": "Lawton Street Residence",
        "address": "3754 West Lawton Street, Seattle",
        "permit": 6547821,
        "contractor": "Dikmen Development, LLC",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0909",
        "project": "Leaf Apartments",
        "address": "3309 Beacon Avenue South, Seattle",
        "permit": 6485509,
        "contractor": "STS Construction Services",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0068",
        "project": "Leece Residence",
        "address": "5101 Somerset Drive SE, Bellevue",
        "permit": "19102977BU",
        "contractor": "Seismic Northwest, LP",
        "phone": "(360) 349-3857",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0064",
        "project": "Leland Allen Project",
        "address": "1653 Edgewood Ave SW, Seattle",
        "permit": 6416987,
        "contractor": "Ericson Arch Home Design I",
        "phone": "(206) 391-9513",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0675",
        "project": "Lemley Residence",
        "address": "2214 37th Avenue SW, Seattle",
        "permit": 6224199,
        "contractor": "Build, LLC",
        "phone": "(253) 261-0695",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0935",
        "project": "Levis - Action Special Inspections",
        "address": "10600 Quilceda Blvd #300, Tulalip",
        "permit": "",
        "contractor": "",
        "phone": "(503) 381-6329",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0697",
        "project": "Liberty Bank Building",
        "address": "2320 E. Union Street, Seattle",
        "permit": 6427812,
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 571-7332",
        "manager": "Walter"
      },
      {
        "job_no": "18-0008",
        "project": "LIHI Renton Commons",
        "address": "215 Whitworth Avenue South, Renton",
        "permit": "B17001987",
        "contractor": "Walsh Construction Compa",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1049",
        "project": "Lilac Lodge",
        "address": "5033 37th Avenue South, Seattle",
        "permit": 6601176,
        "contractor": "Ryan General contractors, I",
        "phone": "(206) 552-5954",
        "manager": "Walter"
      },
      {
        "job_no": "17-0905",
        "project": "Lincoln High School Modernization",
        "address": "4400 Interlake Avenue North, Seattle",
        "permit": 6540641,
        "contractor": "Lydig Construction, Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0477",
        "project": "Lincoln High School Sign",
        "address": "701 S 37th Street, Tacoma",
        "permit": "SIGN17-0094",
        "contractor": "Plumb Signs, Inc.",
        "phone": "(253) 473-3323",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0745",
        "project": "Lineweaver Residence Slope Repairs",
        "address": "6021 33rd Ave S, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "19-0001",
        "project": "Lithia BMW of Seattle – Sales Building Rem",
        "address": "1002 Airport Way South, Seattle",
        "permit": "6627240-CN-001",
        "contractor": "Kirtley-Cole Associates, LL",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1067",
        "project": "Lorde Residence",
        "address": "8212 Crest Dr NE, Seattle",
        "permit": 6637280,
        "contractor": "RHH Construction, LLC",
        "phone": "(425) 941-7830",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1071",
        "project": "Lot 18",
        "address": "8999 NE Shore Drive, Indianola",
        "permit": "10-94727",
        "contractor": "Road Construction Northwe",
        "phone": "(425) 531-1624",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0153",
        "project": "Lower White River Countyline Levee Setbac",
        "address": "A Street downstream to 8th Street, Pacific",
        "permit": "",
        "contractor": "",
        "phone": "425-306-7032",
        "manager": "Anthony"
      },
      {
        "job_no": "18-1063",
        "project": "Lucky Louie - SeaTac Airport",
        "address": "17801 International Blvd., SeaTac",
        "permit": "BLD-18-0081",
        "contractor": "Wilcox Construction, Inc.",
        "phone": "206-818-8358",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1053",
        "project": "Lululemon - Action Special Inspections",
        "address": "224 Bellevue Way NE, Bellevue",
        "permit": "18119389BZ",
        "contractor": "",
        "phone": "(503) 381-6329",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0042",
        "project": "Luu Residence",
        "address": "16635 SE 18th St, Bellevue",
        "permit": 639286,
        "contractor": "Stone & Wind LLC",
        "phone": "(360) 773-7552",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0023",
        "project": "Magnolia Elementary School Renovation an",
        "address": "2418 28th Avenue West, Seattle",
        "permit": 6511044,
        "contractor": "Forma Construction Compa",
        "phone": "(206)939-0163",
        "manager": "Walter"
      },
      {
        "job_no": "17-0485",
        "project": "Majiq T.I.",
        "address": "8343 154th Avenue NE, Suite 200, Redmond",
        "permit": "BLDG-2016-0935",
        "contractor": "Pattison General contractor",
        "phone": "(206) 856-4436",
        "manager": "Walter"
      },
      {
        "job_no": "18-0591",
        "project": "MAK Frelard Building AKA Reubens Brews",
        "address": "800 NW 46th Street, Seattle",
        "permit": 6617835,
        "contractor": "Northway Construction, Inc.",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0231",
        "project": "Marinkovich Residence - Construction Monit",
        "address": "11706 Exeter Avenue NE, Seattle",
        "permit": 6321910,
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "14-0248",
        "project": "Marinkovich Residence - Design Phase",
        "address": "11706 Exeter Avenue NE, Seattle",
        "permit": "",
        "contractor": "Marinkovich, Michael",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "19-0018",
        "project": "Maritime Building",
        "address": "906 Alaskan Way, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0019",
        "project": "Market Place Building",
        "address": "2001 and 2003 Western Avenue, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0071",
        "project": "Mary Rowhouse",
        "address": "6725 Mary Ave NW, Seattle",
        "permit": 6597678,
        "contractor": "Turnkey Builders",
        "phone": "(206) 353-1361",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1083",
        "project": "Mathiasen Residence",
        "address": "10203 NE 29th Place, Bellevue",
        "permit": "18 114458 BR",
        "contractor": "Karlstrom Associates, Inc.",
        "phone": "(425) 220-9788",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0010",
        "project": "McCaffrey Residence",
        "address": "6718 21st Ave NW, Seattle",
        "permit": "6670564-CN-002",
        "contractor": "Huus, Inc.",
        "phone": "(206) 618-6376",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0455",
        "project": "McClure Residence",
        "address": "1530 31st Avenue, Seattle",
        "permit": "n/a",
        "contractor": "Pathway Design & Construc",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0845",
        "project": "McEvoy Residence",
        "address": "5050 36th Avenue NE, Seattle",
        "permit": 6574181,
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0910",
        "project": "McFarlane Residence",
        "address": "13024 Thomas Rd KPN, Gig Harbor",
        "permit": "KH0913",
        "contractor": "Lobo Construction",
        "phone": "(206) 251-3983",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0960",
        "project": "McKee 714",
        "address": "714 10th Ave E, Seattle",
        "permit": 6542140,
        "contractor": "BG Construction LLC",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0092",
        "project": "Meadowbrook Pool",
        "address": "10515 35th Ave NE, Seattle",
        "permit": "6624594-CN-001",
        "contractor": "Biwell Construction",
        "phone": "(206) 423-1917",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0012",
        "project": "Medgar Evers Pool",
        "address": "500 23rd Avenue, Seattle",
        "permit": 6646301,
        "contractor": "Biwell Construction",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0961",
        "project": "Meridian 106",
        "address": "2100 N 106th Street, Seattle",
        "permit": 6486615,
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0454",
        "project": "Mid Town Apartments",
        "address": "8820 Aurora Ave N, Seattle",
        "permit": 6546477,
        "contractor": "Epic Construction Managem",
        "phone": "(206) 369-8786",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0929",
        "project": "Military Road S & S 298th Street Compact",
        "address": "Military Rd S & S 298th St, Federal Way",
        "permit": "",
        "contractor": "Tunista Construction, LLC",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0931",
        "project": "Miller Community Center ADA Upgrades",
        "address": "330 19th Avenue E, Seattle",
        "permit": 6479613,
        "contractor": "Centennial contractors Ente",
        "phone": "(206) 769-5237",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0626",
        "project": "Miller Remodel",
        "address": "2326 Bigelow Avenue North, Seattle",
        "permit": 6633686,
        "contractor": "GKO Construction, LLC",
        "phone": "(206) 383-1938",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1004",
        "project": "Mims Residence (Damian)",
        "address": "12507 64th Ave S, Seattle",
        "permit": "ADDC18-0572",
        "contractor": "J. M. Edwards Construction",
        "phone": "(425) 375-8497",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0522a",
        "project": "Mitchell Project (Aaron) - Lot 1",
        "address": "3229 106th Avenue SE, Bellevue",
        "permit": "14-143411 BS",
        "contractor": "STS Construction Services",
        "phone": "(206) 510-7111",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0522b",
        "project": "Mitchell Project (Aaron) - Lot 2",
        "address": "3227 106th Avenue SE, Bellevue",
        "permit": "14-143407 BS",
        "contractor": "STS Construction Services",
        "phone": "(206) 510-7111",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0053",
        "project": "Mitchell Residence Retaining Wall",
        "address": "8205 S 123rd Pl, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-1062",
        "project": "Monte Cristo Square",
        "address": "9150 23rd Ave NW, Seattle",
        "permit": 6632174,
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0800",
        "project": "Moran Residence",
        "address": "8943 NE 192nd Place, Bothell",
        "permit": "BSF2018-18513",
        "contractor": "Molucule Design Build, Inc.",
        "phone": "(206) 795-9955",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0089",
        "project": "Morris Residence",
        "address": "2711 East Roy Street, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0754",
        "project": "Mount Baker Family Housing",
        "address": "2870 South Hanford Street, Seattle",
        "permit": 6604088,
        "contractor": "Walsh Construction Compa",
        "phone": "206-571-2399",
        "manager": "Walter"
      },
      {
        "job_no": "18-0074",
        "project": "Mount Baker Station Apartments - 2615 Nort",
        "address": "2615 25th Ave S, Seattle",
        "permit": 6309478,
        "contractor": "Osborne Construction Com",
        "phone": "(425) 305-7401",
        "manager": "Walter"
      },
      {
        "job_no": "18-0073",
        "project": "Mount Baker Station Apartments - 2715 Sou",
        "address": "2715 25th Ave S, Seattle",
        "permit": 6535937,
        "contractor": "Osborne Construction Com",
        "phone": "(425) 305-7401",
        "manager": "Walter"
      },
      {
        "job_no": "19-0022",
        "project": "Mountain View",
        "address": "885 SE Cedar Falls Way, North Bend",
        "permit": "",
        "contractor": "Polygon Northwest",
        "phone": "(425) 931-8977",
        "manager": "Walter"
      },
      {
        "job_no": "18-0968",
        "project": "Mud Bay - Renton",
        "address": "17320 140th Ave Southeast, Bldg E, Suites 9-1",
        "permit": "ADDC18-0419",
        "contractor": "Western Construction Servi",
        "phone": "(360) 601-7931",
        "manager": "Jeff"
      },
      {
        "job_no": "19-00431",
        "project": "My Salon Suites",
        "address": "17214 Highway 99, Lynnwood",
        "permit": "BTI-018688-2018",
        "contractor": "Elder Construction",
        "phone": "(206) 658-7458",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0729",
        "project": "Natera Storage Facility",
        "address": "3215 S. 116th Street, Bldg 3, Ste. 109, Tukwila",
        "permit": "D18-071",
        "contractor": "G3 Builders",
        "phone": "206-719-0104",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0105",
        "project": "Nesbit Apartments",
        "address": "8558 Nesbit Avenue N, Seattle",
        "permit": 6445306,
        "contractor": "Stratford Co., LLC",
        "phone": "(206) 890-8790",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0553",
        "project": "Neuburger Residence Garage Renovation",
        "address": "306 West Prospect Street, Seattle",
        "permit": 6075197,
        "contractor": "S2 Builders",
        "phone": "(206) 778-3354",
        "manager": "Scott"
      },
      {
        "job_no": "18-0636",
        "project": "New Elementary School at Zenith Park (Des",
        "address": "1598 S. 240th Street, Des Moines",
        "permit": "BLD2018-0102",
        "contractor": "Vanir Construction Manage",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1079",
        "project": "New Life Church",
        "address": "15711 152nd Avenue NE, Renton",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0554a",
        "project": "N-Habit Rainier Apartments",
        "address": "718 Rainier Avenue South, Seattle",
        "permit": 6557651,
        "contractor": "WG Clark Construction Co",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0867",
        "project": "Nissan Seattle - HBI860154",
        "address": "3412 Airport Way South, Seattle",
        "permit": "",
        "contractor": "Hayward Baker, Inc.",
        "phone": "(206) 321-7261",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1014",
        "project": "NMT Redevelopment - AHU Replacement",
        "address": "1229 Madison Street, Floor 5, Seattle",
        "permit": "6682830-ME",
        "contractor": "MacDonald-Miller Facilities",
        "phone": "(206) 423-7459",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0576a",
        "project": "Northgate III (aka Northgate 8th) - Structural",
        "address": "10711 8th Avenue NE, Seattle",
        "permit": 6572059,
        "contractor": "Rafn Company, Inc.",
        "phone": "(206) 510-4880",
        "manager": "Walter"
      },
      {
        "job_no": "18-0151",
        "project": "Northwest 63rd Street",
        "address": "1443 NW 63rd Street, Seattle",
        "permit": 6496710,
        "contractor": "Greenbuild Development, L",
        "phone": "(253) 269-2748",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0592",
        "project": "Nut Tree Holdings Alteration",
        "address": "7710 185th Ave NE, Redmond",
        "permit": "BLDG201707133",
        "contractor": "Nussbaum Group",
        "phone": "(206) 639-9281",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0940",
        "project": "NWCP Kent Building S Cosmos 8610",
        "address": "8610 S 212th Street, Kent",
        "permit": "CNST-2182171",
        "contractor": "Boyce Construction",
        "phone": "(206) 255-6493",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0078",
        "project": "Office Depot Column Repair",
        "address": "7500 142nd Ave E #400, Sumner",
        "permit": "N/A",
        "contractor": "Omega Riggers & Erectors",
        "phone": "(36) 480-4914",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0870",
        "project": "Old Bartell's",
        "address": "",
        "Travel": "4140 E Marginal Way S, Seattle",
        "permit": "2-Jan",
        "contractor": "6694258-CN",
        "phone": "Southcreek Construction LL",
        "manager": "(425) 785-3998",
        "": "Jeff"
      },
      {
        "job_no": "18-0459",
        "project": "Olympic Middle School Reconstruction",
        "address": "",
        "Travel": "1825 K Street SE, Auburn",
        "permit": 0,
        "contractor": "BLDG18-0038",
        "phone": "Absher Construction Compa",
        "manager": "253-279-9282",
        "": "Walter"
      },
      {
        "job_no": "16-0817a",
        "project": "Peralta Orthodontics - HVAC",
        "address": "",
        "Travel": "3916 California Ave SW, Seattle",
        "permit": "2-Jan",
        "contractor": 6562709,
        "phone": "WR Hanson, Inc.",
        "manager": "(206) 719-1217",
        "": "Isaac"
      },
      {
        "job_no": "18-0683",
        "project": "Peyree Residence",
        "address": "",
        "Travel": "6049 77th Avenue SE, Mercer Island",
        "permit": "2-Jan",
        "contractor": "1706-083",
        "phone": "Gallagher Co.",
        "manager": "(206) 730-8870",
        "": "Isaac"
      },
      {
        "job_no": "19-0014",
        "project": "Phair Residence (Desiree)",
        "address": "",
        "Travel": "7608 147th Ave NE, Redmond",
        "permit": "2-Jan",
        "contractor": "",
        "phone": "Seismic Northwest, LP",
        "manager": "(206) 899-7148",
        "": "Isaac"
      },
      {
        "job_no": "19-0057",
        "project": "Pier 91 East Mooring System Maintenance",
        "address": "",
        "Travel": "2001 West Garfield Street, Seattle",
        "permit": "2-Jan",
        "contractor": "n/a",
        "phone": "Port of Seattle Marine Maint",
        "manager": "(253) 227-2114",
        "": "Isaac"
      },
      {
        "job_no": "18-0977",
        "project": "Pierce College",
        "address": "",
        "Travel": "9401 Farwest Drive SW, Lakewood",
        "permit": "2-Jan",
        "contractor": "",
        "phone": "Plumb Signs, Inc.",
        "manager": "(253) 414-8812",
        "": "Jeff"
      },
      {
        "job_no": "18-0764",
        "project": "Pigott Residence Garage",
        "address": "",
        "Travel": "1718 Palm Ave SW, Seattle",
        "permit": "2-Jan",
        "contractor": 6566354,
        "phone": "Ventana Construction, LLC",
        "manager": "(206) 795-3829",
        "": "Isaac"
      },
      {
        "job_no": "19-0094",
        "project": "Pinehurst Mixed Use (Northline)",
        "address": "",
        "Travel": "12510 & 12522 15th Ave NE, Seattle",
        "permit": "2-Jan",
        "contractor": 6541734,
        "phone": "PSW Real Estate",
        "manager": "(509) 992-7529",
        "": "Jeff"
      },
      {
        "job_no": "16-0794",
        "project": "Pioneer Square Hotel Annex",
        "address": "",
        "Travel": "110 Alaskan Way South, Seattle",
        "permit": "2-Jan",
        "contractor": 6088080,
        "phone": "Venture General Contractin",
        "manager": "(206) 939-2530",
        "": "Isaac"
      },
      {
        "job_no": "18-1001",
        "project": "Polish Nails Spa",
        "address": "",
        "Travel": "27061 Pacific Hwy S, Des Moines",
        "permit": "2-Jan",
        "contractor": "",
        "phone": "Adekco1 LLC",
        "manager": "(206) 412-1475",
        "": "Jeff"
      },
      {
        "job_no": "18-0421",
        "project": "Ponnusamy Residence Garage",
        "address": "",
        "Travel": "3626 60th Avenue SW, Seattle",
        "permit": "2-Jan",
        "contractor": 6578543,
        "phone": "Pile King",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0951",
        "project": "Portage Bay Park (aka Fritz Hedges Waterw",
        "address": "",
        "Travel": "1101 - 1137 NE Boat Street, Seattle",
        "permit": "2-Jan",
        "contractor": 6534351,
        "phone": "Orion Marine Group",
        "manager": "",
        "": "Walter"
      },
      {
        "job_no": "18-0801",
        "project": "Precision Iron Works - Misc.",
        "address": 2018,
        "Travel": "102 Frontage Road S, Pacific",
        "permit": "2-Jan",
        "contractor": "",
        "phone": "",
        "manager": "",
        "": "Isaac"
      },
      {
        "job_no": "18-0740",
        "project": "Precision Sheet Metal Fabricators Expansio",
        "address": "",
        "Travel": "10546 Aurora Avenue N, Seattle",
        "permit": "2-Jan",
        "contractor": 6504882,
        "phone": "SCL Enterprises, LLC",
        "manager": "(206) 362-1195",
        "": "Isaac"
      },
      {
        "job_no": "19-0009",
        "project": "Project Bellevue",
        "address": "",
        "Travel": "15118 SE 40th Place, Bellevue",
        "permit": "2-Jan",
        "contractor": "",
        "phone": "JT Property Development",
        "manager": "(206) 334-5819",
        "": "Scott"
      },
      {
        "job_no": "18-0577",
        "project": "PSE South King Complex T.I. Phase II",
        "address": "",
        "Travel": "6905 S 228th Street, Kent",
        "permit": "2-Jan",
        "contractor": "CNST-2180830",
        "phone": "Hodge Construction, Inc.",
        "manager": "(425) 864-3669",
        "": "Jeff"
      },
      {
        "job_no": "18-0599",
        "project": "Queen Anne Elementary School",
        "address": "",
        "Travel": "2100 4th Avenue North, Seattle",
        "permit": "2-Jan",
        "contractor": 6568320,
        "phone": "Hensel Phelps",
        "manager": "(321) 205-4159",
        "": "Isaac"
      },
      {
        "job_no": "18-0933",
        "project": "Queen Anne Pool",
        "address": "",
        "Travel": "1920 1st Avenue West, Seattle",
        "permit": "2-Jan",
        "contractor": 6616134,
        "phone": "Biwell Construction",
        "manager": "425-351-2669",
        "": "Walter"
      },
      {
        "job_no": "17-0694a",
        "project": "R&D Building - Third & Wall T.I., Suites 202",
        "address": "",
        "Travel": "3455 Thorndyke Avenue West, Seattle",
        "permit": "2-Jan",
        "contractor": 6547696,
        "phone": "3443, LLC",
        "manager": "(206) 999-0814",
        "": "Isaac"
      },
      {
        "job_no": "18-1085",
        "project": "Rachel's Residence Remodel and Addition",
        "address": "",
        "Travel": "8525 31st Ave NW, Seattle",
        "permit": "2-Jan",
        "contractor": "6677152-CN",
        "phone": "Armata Construction Servic",
        "manager": "(206) 412-4515",
        "": "Jeff"
      },
      {
        "job_no": "18-1043",
        "project": "Rainier Bottling Plant - In Plane Masonry Sh",
        "address": "",
        "Travel": "5628 Airport Way South, Seattle",
        "permit": "2-Jan",
        "contractor": "",
        "phone": "Finishing Touch Masonry &",
        "manager": "",
        "": "Jeff"
      },
      {
        "job_no": "18-0429",
        "project": "Rainier Court IV - West Apartments",
        "address": "",
        "Travel": "3616 34th Avenue South, Seattle",
        "permit": "2-Jan",
        "contractor": 6538406,
        "phone": "Venture General Contractin",
        "manager": "(206) 900-2530",
        "": "Walter"
      },
      {
        "job_no": "17-0260a",
        "project": "Rainier Court IV East Retaining Wall",
        "address": "3603 35th Avenue South, Seattle",
        "permit": 6527528,
        "contractor": "InterCity contractors",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0260b",
        "project": "Rainier Court IV West Retaining Wall",
        "address": "3616 34th Avenue South, Seattle",
        "permit": 6527500,
        "contractor": "InterCity contractors",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0839",
        "project": "Rainier Duplexes - Units C & D",
        "address": "7109 Rainier Avenue, Everett",
        "permit": "C1712-005",
        "contractor": "Reykdal Construction",
        "phone": "(425) 750-1146",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0840",
        "project": "Rainier Duplexes - Units E & F",
        "address": "7109 Rainier Avenue, Everett",
        "permit": "C1712-006",
        "contractor": "Reykdal Construction",
        "phone": "(425) 750-1146",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0841",
        "project": "Rainier Duplexes - Units G & H",
        "address": "7109 Rainier Avenue, Everett",
        "permit": "C1712-007",
        "contractor": "Reykdal Construction",
        "phone": "(425) 750-1146",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0906",
        "project": "Rainier Industries Turbak",
        "address": "310 Washington Ave North, Kent",
        "permit": "CNST-2181158",
        "contractor": "Rainier Industries, Ltd.",
        "phone": "(253) 334-9724",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0827",
        "project": "Ravenna Townhomes",
        "address": "6556 Ravenna Avenue NE, Seattle",
        "permit": 6600656,
        "contractor": "PSW SEATTLE, LLC",
        "phone": "(206) 793-4230",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0765",
        "project": "Reade14 Townhomes - 2214",
        "address": "2214 14th Avenue South, Seattle",
        "permit": 6594703,
        "contractor": "Arnon Construction Operati",
        "phone": "(206) 353-8263",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0829",
        "project": "Renton Daycare",
        "address": "12616 Renton Avenue South, Renton",
        "permit": "ADDC18-0183",
        "contractor": "RB & Sons Construction, LL",
        "phone": "(206) 799-5531",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0380",
        "project": "Ring Custom",
        "address": "4216 Shoreclub Drive, Mercer Island",
        "permit": "1706-292",
        "contractor": "JayMarc Custom Homes, L",
        "phone": "(425) 417-5818",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0175",
        "project": "Riverfront Simpson",
        "address": "4312 30th Drive SE, Everett",
        "permit": "various",
        "contractor": "Polygon Northwest",
        "phone": "425-512-3480",
        "manager": "Walter"
      },
      {
        "job_no": "18-0767",
        "project": "Robbins & Co. Miscellaneous - 2018",
        "address": "Various,",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "17-0219",
        "project": "Robins Nest Apartments",
        "address": "3272 Fuhrman Ave E, Seattle",
        "permit": 6511719,
        "contractor": "SACO Construction Corpora",
        "phone": "(425) 941-7272",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0999",
        "project": "Robotics Cell",
        "address": "1800 140th Avenue E, Sumner",
        "permit": "n/a",
        "contractor": "Omega Riggers & Erectors",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "19-0082",
        "project": "Roewe Residence",
        "address": "151 Ward Street, Seattle",
        "permit": "6607581-CN",
        "contractor": "TrueBuilders, Inc.",
        "phone": "206-793-5289",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1073",
        "project": "Roque Residence Foundation",
        "address": "5212 104th St E, Tacoma",
        "permit": 898466,
        "contractor": "Solid Rock Construction",
        "phone": "(406) 853-1756",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0770",
        "project": "Ruettgers Residence",
        "address": "2030 Parkside Drive East, Seattle",
        "permit": 6629665,
        "contractor": "McKinney Group, Inc.",
        "phone": "(206) 669-1230",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0285",
        "project": "S.K.B.A. Buddhist Temple",
        "address": "824 South 100th Street, Seattle",
        "permit": "COMN13-0014",
        "contractor": "Bay View Construction, Inc.",
        "phone": "(206) 272-0707",
        "manager": "Walter"
      },
      {
        "job_no": "18-0253",
        "project": "S9-215",
        "address": "215 1st Avenue North, Seattle",
        "permit": 6583982,
        "contractor": "Stratford Co., LLC",
        "phone": "(206) 234-4556",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1029",
        "project": "Sacred Circle Kiosk",
        "address": "5011 Bernie Whitebear Way, Seattle",
        "permit": "Seatac: 9626",
        "contractor": "American Paint & Coating",
        "phone": "(425) 681-7736",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0098",
        "project": "Sage Apartments",
        "address": "1710 NW 57th Street, Seattle",
        "permit": "6621368-CN",
        "contractor": "JMS Construction",
        "phone": "(206) 474-6264",
        "manager": "Isaac"
      },
      {
        "job_no": "13-0593c",
        "project": "Sammamish High School Gateway Concess",
        "address": "100 140th Avenue SE, Bellevue",
        "permit": "",
        "contractor": "Spee West Construction",
        "phone": "(206) 719-8097",
        "manager": "Walter"
      },
      {
        "job_no": "13-0593b",
        "project": "Sammamish High School South Vault",
        "address": "100 140th Avenue SE, Bellevue",
        "permit": "16-136532BH",
        "contractor": "Spee West Construction",
        "phone": "(206) 719-8097",
        "manager": "Walter"
      },
      {
        "job_no": "13-0593d",
        "project": "Sammamish HS Batting Cages",
        "address": "100 140th Avenue SE, Bellevue",
        "permit": "16-136481BB",
        "contractor": "Spee West Construction",
        "phone": "206-719-8097",
        "manager": "Walter"
      },
      {
        "job_no": "13-0593a",
        "project": "Sammamish HS Glass Studio",
        "address": "100 140th Avenue SE, Bellevue",
        "permit": "16-136481BB",
        "contractor": "Spee West Construction",
        "phone": "(206) 719-4833",
        "manager": "Walter"
      },
      {
        "job_no": "18-0678",
        "project": "Samsel Project",
        "address": "2814 Boyer Ave E, Seattle",
        "permit": "6464898-CN",
        "contractor": "Brightwork Builders, LLC",
        "phone": "(206) 650-5165",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0118",
        "project": "Sand Point Building 9",
        "address": "7101 62nd Avenue NE, Seattle",
        "permit": 6466033,
        "contractor": "Rafn Company, Inc.",
        "phone": "(206) 510-3836",
        "manager": "Walter"
      },
      {
        "job_no": "19-0037",
        "project": "Schuler Residence",
        "address": "8221 SE 36th St, Mercer Island",
        "permit": "1810-161",
        "contractor": "RGN Construction, LLC",
        "phone": "(206) 919-7150",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0017",
        "project": "Scout Lake",
        "address": "3129 East Ames Lake Drive NE, Redmond",
        "permit": "DWEL17-0396",
        "contractor": "Dovetail General contractor",
        "phone": "(206) 473-1548",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0155a",
        "project": "SCRI Building Cure - Structural",
        "address": "1920 Terry Avenue, Seattle",
        "permit": 6531443,
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0155b",
        "project": "SCRI Building Cure (Lease Crutcher Lewis)",
        "address": "1920 Terry Avenue, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0169",
        "project": "SeaTac North Satellite",
        "address": "102 Frontage Road S, Pacific",
        "permit": "",
        "contractor": "Precision Iron Works, Inc.",
        "phone": "(253) 887-5555X2",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0015",
        "project": "Seattle Children's Clinic Bellevue - X-Ray R",
        "address": "1500 116th NE, Bellevue",
        "permit": "18 129804 BZ",
        "contractor": "Aldrich & Associates, Inc.",
        "phone": "(206) 396-0290",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0704",
        "project": "Seattle Genetics Building 6 Structural Upgra",
        "address": "22333 29th Drive SE, Bothell",
        "permit": "BNR2018-18690",
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "(425) 985-1913",
        "manager": "Walter"
      },
      {
        "job_no": "18-1026",
        "project": "Seattle Hampton",
        "address": "700 5th Ave N, Seattle",
        "permit": 6575853,
        "contractor": "Phamily Construction",
        "phone": "(206) 954-5861",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0028",
        "project": "Seattle Made",
        "address": "SeaTac International Airport, enter C Terminal,",
        "permit": "BLD-18-0073",
        "contractor": "Altitude, Inc.",
        "phone": "(206) 488-9601",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0991",
        "project": "Seattle Modern Living",
        "address": "4912 S Willow St, Seattle",
        "permit": 394888,
        "contractor": "Hultquist Homes",
        "phone": "(425_ 654-9694",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1084",
        "project": "Seattle Pacific University - PT Tendon Repa",
        "address": "36 Cremona Street, Bldg 6, Seattle",
        "permit": "6578680*",
        "contractor": "Arcon Tenant Improvement",
        "phone": "(425) 213-3306",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0934",
        "project": "Self Storage @ Tehaleh",
        "address": "15125 198th Ave E, Bonney Lake",
        "permit": 884686,
        "contractor": "Carl J. Sanders Constructio",
        "phone": "(206) 730-8030",
        "manager": "Walter"
      },
      {
        "job_no": "19-0091",
        "project": "Senegor Project",
        "address": "1633 10th St W, Kirkland",
        "permit": "BSF2018-00481",
        "contractor": "Rainier Custom Homes",
        "phone": "(425) 999-1262",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0801",
        "project": "Service Tunnel Renewal Project",
        "address": "SeaTac International Airport, SeaTac",
        "Travel": 0,
        "permit": "",
        "contractor": "James W. Fowler Company",
        "phone": "(360) 286-4602",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0801a",
        "project": "Service Tunnel Renewal Project (JW Fowler",
        "address": ", SeaTac",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0706",
        "project": "Shi/Wang Residence",
        "address": "6031 77th Ave SE, Mercer Island",
        "permit": "1607-166",
        "contractor": "JayMarc Custom Homes, L",
        "phone": "(425)444-2055",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1045",
        "project": "Silverlake Apartments",
        "address": "128 127th St SE, Everett",
        "permit": "",
        "contractor": "Moncrieff Construction, Inc.",
        "phone": "(360) 815-1576",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0705",
        "project": "Skal Beer Hall",
        "address": "5429 Ballard Ave NW, Seattle",
        "permit": 6629522,
        "contractor": "Method Construction, Inc.",
        "phone": "(408) 505-5386",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0027",
        "project": "Skillet Diner NS-02",
        "address": "SeaTac International Airport North Satellite, Se",
        "permit": "BLD-18-0061",
        "contractor": "Wilcox Construction, Inc.",
        "phone": "(206) 496-8229",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1036",
        "project": "Sleep Number - Bellevue",
        "address": "1006 Bellevue Square, Bellevue",
        "permit": "18 124291 BZ",
        "contractor": "Timberwolff Construction, In",
        "phone": "(909) 285-7604",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1016",
        "project": "Snohomish County Courthouse - HBI860202",
        "address": ",",
        "permit": "",
        "contractor": "Hayward Baker, Inc.",
        "phone": "(206) 419-9010",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0079",
        "project": "Soft Surroundings",
        "address": "3000 184th Street SW, #940, Lynnwood",
        "permit": "BTl-019008-2018",
        "contractor": "Horizon Retail Construction",
        "phone": "(262) 865-7704",
        "manager": "Walter"
      },
      {
        "job_no": "18-0854",
        "project": "Solis",
        "address": "1300 E Pike, Seattle",
        "permit": 6551143,
        "contractor": "Cascade Built, LLC",
        "phone": "(206) 902-7055",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0351",
        "project": "Sound House Residence",
        "address": "2231 Eastmont Way West, Seattle",
        "permit": 6608487,
        "contractor": "Thomaswerks, Inc.",
        "phone": "(206) 914-9230",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0869",
        "project": "Sound Transit U District Station N140",
        "address": "4300 Brooklyn Ave NE, Seattle",
        "permit": "N/A",
        "contractor": "University Mechanical Contr",
        "phone": "(206) 356-1200",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0992a",
        "project": "South Kenmore Office",
        "address": "6704 NE 181st Street, Kenmore",
        "permit": "BLD17-0810",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 301-6264",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0038",
        "project": "South Lander Grade Separation",
        "address": "2454 Occidental Ave S, Seattle (SDOT)",
        "permit": "2017-025",
        "contractor": "Flatiron West, Inc.",
        "phone": "(425) 351-4623",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0011",
        "project": "Souza Residence",
        "address": "5219 Palatine Ave N, Seattle",
        "permit": "6602658-CN",
        "contractor": "Souza, Al",
        "phone": "(206) 858-3885",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1034",
        "project": "Space X",
        "address": "22908 NE Alder Crest Drive, Redmond",
        "permit": "n/a",
        "contractor": "Air Products and Chemicals",
        "phone": "(360) 597-6357",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0382a",
        "project": "Spiritwood - Unit #01",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00402",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382b",
        "project": "Spiritwood - Units #02 and 03",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00403",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382c",
        "project": "Spiritwood - Units #04 and 05",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00404",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-2108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382d",
        "project": "Spiritwood - Units #06 and 07",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00405",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382e",
        "project": "Spiritwood - Units #08 and 09",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00406",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382f",
        "project": "Spiritwood - Units #10 and 11",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00407",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382g",
        "project": "Spiritwood - Units #12 and 13",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00408",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382h",
        "project": "Spiritwood - Units #14 and 15",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00409",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-2108",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0382i",
        "project": "Spiritwood - Units #16 and 17",
        "address": "3607 228th Avenue SE, Issaquah",
        "permit": "BLD16-00410",
        "contractor": "Belotti McHugh Design and",
        "phone": "(206) 229-7108",
        "manager": "Isaac"
      },
      {
        "job_no": "11-0593",
        "project": "SR 99 Bored Tunnel Design Build [South Po",
        "address": "Alaskan Way, Seattle",
        "Travel": 0,
        "permit": "",
        "contractor": "Seattle Tunnel Partners",
        "phone": "(206) 228-6269",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0918",
        "project": "ST Mercer Island Follow On Work (73490-0",
        "address": "NW corner of N Mercer Way & 76th, Mercer Isl",
        "permit": "N/A",
        "contractor": "Centennial contractors Ente",
        "phone": "(520) 631-2618",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0540",
        "project": "St. Teresa of Calcutta Parish Expansion",
        "address": "17856 Woodinville-Duvall Road, Woodinville",
        "permit": "COMM17-0029",
        "contractor": "Goudy Construction Co., Inc",
        "phone": "(425) 455-1255",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0807",
        "project": "Starboard Valentine",
        "address": "6438 NE 129th Place, Kirkland",
        "permit": "BSF18-02677",
        "contractor": "Mountain Top Builders, LLC",
        "phone": "(206) 601-6598",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0835",
        "project": "Starliter Walkways",
        "address": "8708 Rainier Avenue South, Seattle",
        "permit": "6617434-CN",
        "contractor": "Resolve Property Services,",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "16-0489",
        "project": "Stewart Garage",
        "address": "8218 Avalon Drive, Mercer Island",
        "permit": "1604-016",
        "contractor": "Kinetic Construction, Inc.",
        "phone": "206-953-8416",
        "manager": "Anthony"
      },
      {
        "job_no": "16-0489b",
        "project": "Stewart House (Kinetic Construction)",
        "address": "8218 Avalon Drive, Mercer Island",
        "permit": "1503-061",
        "contractor": "Kinetic Construction, Inc.",
        "phone": "(206) 953-8416",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0812a",
        "project": "Stinson Rosedale Building 3781",
        "address": "3781 Rosedale Street, Gig Harbor",
        "permit": "BD-15-0166",
        "contractor": "Stinson Rosedale, LLC",
        "phone": "(253) 857-7055",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1000",
        "project": "Stone - Vashon - SIR",
        "address": "24930 Vashon Hwy SW, Vashon Island",
        "permit": "",
        "contractor": "",
        "phone": "(206) 853-6864",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0880",
        "project": "Store-House Self Storage - Renton",
        "address": "2829 NE 3rd Street gate code 7979*, Renton",
        "permit": "B18001833",
        "contractor": "Colvos Construction, LLC",
        "phone": "(253) 355-2088",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0942",
        "project": "Strohm-Hurley Residence",
        "address": "1102 NW 64th Street, Seattle",
        "permit": 6587948,
        "contractor": "Harjo Construction",
        "phone": "(206) 715-4464",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0751",
        "project": "STS Office Expansion",
        "address": "9049 20th Ave SW, Seattle",
        "permit": "6570133-CN",
        "contractor": "STS Construction Services",
        "phone": "(206) 775-9887",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0979",
        "project": "Sumner Remodel",
        "address": "1123 21st Ave East, Seattle",
        "permit": "6629526-CN",
        "contractor": "Toepfer Construction Comp",
        "phone": "(206) 747-1674",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0008",
        "project": "Sunrise of Bothell Deck",
        "address": "10605 NE 185th St, Bothell",
        "permit": "BNR2018-20257",
        "contractor": "M & M Green Outdoor Servi",
        "phone": "(425) 232-3277",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772g",
        "project": "Sunset Court Apartments - Bike Shelter",
        "address": "1140 Harrington Avenue NE, Renton",
        "permit": "B16006738",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772a",
        "project": "Sunset Court Apartments - Building 1",
        "address": "1140 Harrington Avenue NE, Renton",
        "permit": "B16006421",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772b",
        "project": "Sunset Court Apartments - Building 2",
        "address": "1130 Harrington Avenue NE, Renton",
        "permit": "B16006420",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772c",
        "project": "Sunset Court Apartments - Building 3",
        "address": "1124 Harrington Avenue NE, Renton",
        "permit": "B16006419",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772d",
        "project": "Sunset Court Apartments - Building 4",
        "address": "1158 Harrington Avenue NE, Renton",
        "permit": "B16006418",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772h",
        "project": "Sunset Court Apartments - North Trash Encl",
        "address": "1158 Harrington Avenue NE, Renton",
        "permit": "B16006734",
        "contractor": "Walsh Construction Compa",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772e",
        "project": "Sunset Court Apartments - Sitework",
        "address": "1140 Harrington Avenue NE, Renton",
        "permit": 16006459,
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0772f",
        "project": "Sunset Court Apartments - South Trash Enc",
        "address": "1158 Harrington Avenue NE, Renton",
        "permit": "B16006733",
        "contractor": "Walsh Construction Compa",
        "phone": "(206) 551-6594",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1037a",
        "project": "Sunset Gardens Bldg. A",
        "address": "201 27th Ave SE, Puyallup",
        "permit": "",
        "contractor": "Pacific Northern Constructio",
        "phone": "(206) 735-1967",
        "manager": "Walter"
      },
      {
        "job_no": "18-1037b",
        "project": "Sunset Gardens Bldg. B",
        "address": "201 27th Ave SE, Puyallup",
        "permit": "",
        "contractor": "Pacific Northern Constructio",
        "phone": "(206) 735-1967",
        "manager": "Walter"
      },
      {
        "job_no": "18-1037c",
        "project": "Sunset Gardens Bldg. C",
        "address": "201 27th Ave SE, Puyallup",
        "permit": "B-18-0588",
        "contractor": "Pacific Northern Constructio",
        "phone": "(206) 735-1967",
        "manager": "Walter"
      },
      {
        "job_no": "16-0881",
        "project": "Tabor Dam",
        "address": ", Ignatius, MT",
        "permit": "",
        "contractor": "Condon-Johnson & Associat",
        "phone": "206-707-3876",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0974",
        "project": "Tacoma Link Expansion Project",
        "address": "Various, Tacoma",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1010",
        "project": "Tamkin Residence",
        "address": "2534 34th Avene S., Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Scott"
      },
      {
        "job_no": "18-0799",
        "project": "Tangled Ride [Residence]",
        "address": "6025 77th Ave SE, Mercer Island",
        "permit": "1801-104",
        "contractor": "Matthew King Construction,",
        "phone": "(425) 923-3570",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1090",
        "project": "Taucher Residence",
        "address": "130 Waverly Way, Kirkland",
        "permit": "BSF18-02800",
        "contractor": "Dow Built",
        "phone": "(206) 850-1762",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0504a",
        "project": "TCC Stair Enclosure - Bldg. 21",
        "address": "825 Industry Drive, Tukwila",
        "permit": "D18-0280",
        "contractor": "DP, Inc.",
        "phone": "(425) 220-4080",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0504b",
        "project": "TCC Stair Enclosure - Bldg. 27",
        "address": "825 Industry Drive, Tukwila",
        "permit": "D18-0279",
        "contractor": "DP, Inc.",
        "phone": "(425) 220-4080",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0938",
        "project": "Terminal 91 Bollard T&U (Project #105823)",
        "address": "2001 West Garfield Street, Seattle",
        "permit": "6679613-CN",
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0126",
        "project": "The \"AVE\" Apartments",
        "address": "5637 University Way NE, Seattle",
        "permit": 6579435,
        "contractor": "TC Consulting, Inc.",
        "phone": "(206) 498-3917",
        "manager": "Walter"
      },
      {
        "job_no": "17-0747b",
        "project": "The Bond Apartments",
        "address": "6000-6044 E. Lk Sammamish Pkwy NE, Redm",
        "permit": "Bldg-2017-06098",
        "contractor": "GenCap Construction Corp.",
        "phone": "425-628-1908",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1017",
        "project": "The Elliot at Mukilteo Stairs - All Bldgs",
        "address": "9507 49th Ave West, Mukilteo",
        "permit": "see individual job f",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-01",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 01",
        "address": "9507 49th Ave West #1, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-02",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 02",
        "address": "9507 49th Ave West #2, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-03",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 03",
        "address": "9507 49th Ave West #3, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-04",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 04",
        "address": "9507 49th Ave West #4, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-05",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 05",
        "address": "9507 49th Ave West #5, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-06",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 06",
        "address": "9507 49th Ave West #6, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-07",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 07",
        "address": "9507 49th Ave West #7, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-08",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 08",
        "address": "9507 49th Ave West #8, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-09",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 09",
        "address": "9507 49th Ave West #9, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-10",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 10",
        "address": "9507 49th Ave West #10, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-11",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 11",
        "address": "9507 49th Ave West #11, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-12",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 12",
        "address": "9507 49th Ave West #12, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-13",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 13",
        "address": "9507 49th Ave West #13, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 3340-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-14",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 14",
        "address": "9507 49th Ave West #14, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-15",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 15",
        "address": "9507 49th Ave West #15, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-16",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 16",
        "address": "9507 49th Ave West #16, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-17",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 17",
        "address": "9507 49th Ave West #17, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-18",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 18",
        "address": "9507 49th Ave West #18, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-19",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 19",
        "address": "9507 49th Ave West #19, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-20",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 20",
        "address": "9507 49th Ave West #20, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-21",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 21",
        "address": "9507 49th Ave West #21, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-22",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 22",
        "address": "9507 49th Ave West #22, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-23",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 23",
        "address": "9507 49th Ave West #23, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-24",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 24",
        "address": "9507 49th Ave West #24, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-25",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 25",
        "address": "9507 49th Ave West #25, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-26",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 26",
        "address": "9507 49th Ave West #26, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-27",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 27",
        "address": "9507 49th Ave West #27, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-28",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 28",
        "address": "9507 49th Ave West #28, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-29",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 29",
        "address": "9507 49th Ave West #29, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1017-30",
        "project": "The Elliot at Mukilteo Stairs - Bldg. 30",
        "address": "9507 49th Ave West #30, Mukilteo",
        "permit": "MFR-REPAIR-201",
        "contractor": "BKB Paragon NW, LLC",
        "phone": "(214) 334-6071",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0062",
        "project": "The Flyway Apartments",
        "address": "6718 NE 181st Street, Kenmore",
        "permit": "BLD18-0392",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 324-1429",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0386a",
        "project": "The Junction - Auburn Mechanical",
        "address": "18505 Bothell Way NE, Bothell",
        "permit": "BMU2015-11802",
        "contractor": "GenCap Construction Corp.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0888a",
        "project": "The Landing at Bothell Landing - Bldg. A1 &",
        "address": "??9614 NE 183rd Street, Bothell",
        "permit": "BMF2017-16659",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 495-5936",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0888c",
        "project": "The Landing at Bothell Landing - Bldg. C1",
        "address": "18308 96th Avenue NE, Bothell",
        "permit": "BMF2017-17346",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 495-5936",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0888e",
        "project": "The Landing at Bothell Landing - Bldg. C2",
        "address": "18314 96th Avneue NE, Bothell",
        "permit": "BMF2018-18972",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 495-5936",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0888f",
        "project": "The Landing at Bothell Landing - Bldg. C3",
        "address": "18314 96th Avenue NE, Bothell",
        "permit": "BMF2018-18978",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 495-5936",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0888d",
        "project": "The Landing at Bothell Landing - Bldg. F1",
        "address": "18314 96th Ave NE, Bothell",
        "permit": "BMF2017-17906",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 495-5936",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0888b",
        "project": "The Landing at Bothell Landing - Bldg. F2",
        "address": "18308 96th Avenue NE, Bothell",
        "permit": "BMF2017-18082",
        "contractor": "GenCap Construction Corp.",
        "phone": "(425) 495-5936",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0025",
        "project": "The New Stand",
        "address": "SeaTac International Airport North Satellite, Se",
        "permit": "BLD-18-0068",
        "contractor": "Altitude, Inc.",
        "phone": "(206) 488-9601 / (",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0406",
        "project": "The Pinnacle @ Alki",
        "address": "1118 Alki Avenue SW, Seattle",
        "permit": 6510595,
        "contractor": "Crestline Builders, LLC",
        "phone": "(206) 834-5408",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0198",
        "project": "The Pop - Lot P North",
        "address": "9634 Thorsk Street, Bothell",
        "permit": "BNR2017-17902",
        "contractor": "GenCap Construction Corp.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0067",
        "project": "The Ridge Townhomes",
        "address": "22328 88th Ave S, Kent",
        "permit": "CNST-2181273",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-9248",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0013",
        "project": "The Stables (Storage Shed & Venue)",
        "address": "980 S. Nebraska Street, Seattle",
        "permit": "6494573-CN",
        "contractor": "H Dufour Construction Inc.",
        "phone": "(206) 369-3395",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618",
        "project": "The Walk Condominiums - All Bldgs",
        "address": "Various, Kirkland",
        "permit": "",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618g",
        "project": "The Walk Condominiums Lot 10",
        "address": "734 4th Ct S, Kirkland",
        "permit": "BSF18-03684",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618h",
        "project": "The Walk Condominiums Lot 11",
        "address": "736 4th Ct S, Kirkland",
        "permit": "BSF18-03684",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618i",
        "project": "The Walk Condominiums Lot 12",
        "address": "738 4th Ct S, Kirkland",
        "permit": "BSF18-03649",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618e",
        "project": "The Walk Condominiums Lot 15",
        "address": "735 4th Ct S, Kirkland",
        "permit": "BSF18-06088",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618f",
        "project": "The Walk Condominiums Lot 16",
        "address": "431 7th Ave S, Kirkland",
        "permit": "",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618c",
        "project": "The Walk Condominiums Lot 4",
        "address": "405 7th Ave S, Kirkland",
        "permit": "BSF18-01419",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0618d",
        "project": "The Walk Condominiums Lot 5",
        "address": "728 4th Ct S, Kirkland",
        "permit": "BSF18-01942",
        "contractor": "Milestone Northwest, LLC",
        "phone": "(425) 422-5358",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0957",
        "project": "Tiny Dancer",
        "address": "3855 21st Avenue SW, Seattle",
        "permit": 6550850,
        "contractor": "Greenstream Investments,",
        "phone": "360-770-4000",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0014",
        "project": "T-Mobile Bellevue Lab Phase 1 Expansion",
        "address": "1759 135th Place NE, Bellevue",
        "permit": "17-117453 BM",
        "contractor": "Turner Construction Co.",
        "phone": "(206) 255-1391",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0014b",
        "project": "T-Mobile Bellevue Lab Phase 1 Expansion -",
        "address": "1759 135th Place NE, Bellevue",
        "permit": "17-117453 BM",
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1028",
        "project": "T-Mobile Newport Tower Studio",
        "address": "3617 131st Ave SE, Bellevue",
        "permit": "18 126514 BZ",
        "contractor": "ASI Structures",
        "phone": "(206) 227-9334",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0993",
        "project": "T-Mobile Terrace",
        "address": "3617 131st Ave SE, Bellevue",
        "permit": "18-120829 BZ",
        "contractor": "ASI Structures",
        "phone": "(206) 641-5309",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0384",
        "project": "Two Pine - Cladding",
        "address": "1601 2nd Ave, Seattle",
        "permit": 6615982,
        "contractor": "Rafn Company, Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0384a",
        "project": "Two Pine - Interior and Elevator Improveme",
        "address": "1601 2nd Avenue, Seattle",
        "permit": "6644824-CN",
        "contractor": "Rafn Company, Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0384b",
        "project": "Two Pine - Mechanical Platform",
        "address": "1601 2nd Avenue, Seattle",
        "permit": "6631627-ME",
        "contractor": "Rafn Company, Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-1078",
        "project": "U00312 - CTE",
        "address": "See Notes, Everett",
        "permit": "BLD-PP-18-0064",
        "contractor": "PCL Construction Services -",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1025",
        "project": "U-Haul Moving and Storage of Duwamish",
        "address": "2925 South 112th Street, Tukwila",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "19-0039",
        "project": "Universal Life Church",
        "address": "2720 1st Ave S, Seattle",
        "permit": 6693535,
        "contractor": "Toellner Construction, LLC",
        "phone": "(253) 380-2004",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0520",
        "project": "University Flats, LLC",
        "address": "4710 20th Avenue NE, Seattle",
        "permit": 6578273,
        "contractor": "Clark Construction, LLC",
        "phone": "(206) 794-9395",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0855",
        "project": "University Unitarian Church",
        "address": "6556 35th Avenue NE, Seattle",
        "permit": "6604358-CN",
        "contractor": "BN Builders, Inc.",
        "phone": "(206) 327-8815",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0262",
        "project": "Uptown 30",
        "address": "30 6th Street, Kirkland",
        "permit": "",
        "contractor": "NW Investment Builders, LL",
        "phone": "(206) 255-0782",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0266",
        "project": "Uptown 38",
        "address": "38 6th Street, Kirkland",
        "permit": "BSF17-05312",
        "contractor": "NW Investment Builders, LL",
        "phone": "(206) 255-0782",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0750",
        "project": "Urban Edge Alki Beach",
        "address": "2116 Alki Avenue SW, Seattle",
        "permit": 6525740,
        "contractor": "Valor Builds",
        "phone": "(206) 853-8055",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0990",
        "project": "Urban Gyros",
        "address": "230 Fairview Ave N, Seattle",
        "permit": 6637940,
        "contractor": "Pacific Partners, LLC",
        "phone": "(206) 255-9554",
        "manager": "Jeff"
      },
      {
        "job_no": "16-0363",
        "project": "UW New Burke Museum (Construction Phas",
        "address": "4300 15th Avenue NE, Seattle",
        "permit": 6432435,
        "contractor": "Skanska USA Commercial",
        "phone": "206-473-9420",
        "manager": "Anthony"
      },
      {
        "job_no": "19-0086",
        "project": "UW New Burke Museum (Phase Three)",
        "address": "4300 15th Avenue NE, Seattle",
        "permit": "",
        "contractor": "Skanska USA Commercial",
        "phone": "(206) 473-9420",
        "manager": "Anthony"
      },
      {
        "job_no": "17-0034",
        "project": "UW North Campus Building B (Madrona Hal",
        "address": "4320 Whitman Lane NE, Seattle",
        "permit": 6495139,
        "contractor": "WG Clark Construction Co",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "17-0010",
        "project": "UW North Campus Building C (McCarty Hall",
        "address": "4318 Whitman CT NE, Seattle",
        "permit": 6495140,
        "contractor": "WG Clark Construction Co",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "16-0735",
        "project": "UW North Campus Building D (Willow Hall)",
        "address": "4318 Whitman Ct E, Seattle",
        "permit": 6467051,
        "contractor": "WG Clark Construction Co",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0084",
        "project": "UW North Campus RDH Testing (all buildin",
        "address": "Various, Seattle",
        "permit": "n/a",
        "contractor": "WG Clark Construction Co",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "18-1050",
        "project": "UW Parrington Hall - Brick Shear Testing",
        "address": "4105 George Washington Lane Northeast, Sea",
        "permit": "n/a",
        "contractor": "",
        "phone": "(206) 375-3781",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0469a",
        "project": "UW Population Health Facility - Structural",
        "address": "4000 & 3980 15th Avenue NE, Seattle",
        "permit": 6601369,
        "contractor": "Lease Crutcher Lewis, Inc.",
        "phone": "(206) 730-2495",
        "manager": "Anthony"
      },
      {
        "job_no": "17-0199",
        "project": "VA Puget Sound Upgrade Electrical Distribu",
        "address": "1660 S. Columbian Way, Seattle",
        "permit": "663-15-102",
        "contractor": "Helix Electric, Inc.",
        "phone": "(858) 405-5026",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0763",
        "project": "Vail Apartments",
        "address": "17962 Midvale Avenue North, Shoreline",
        "permit": 121288,
        "contractor": "Compass General Construct",
        "phone": "(651) 587-4758",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1003",
        "project": "Van Breda Residence",
        "address": "12225 SE 25th St, Bellevue",
        "permit": "18 129969 BK",
        "contractor": "Blox Construction",
        "phone": "(206) 605-2632",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0333",
        "project": "Vashon Addition",
        "address": "17607 Vashon Highway SW, Vashon",
        "permit": "ADDC17-0552",
        "contractor": "Metis Construction, Inc.",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0926",
        "project": "vCita Plaza Center Bellevue",
        "address": "10900 NE 8th, Suite 1490, Bellevue",
        "permit": "",
        "contractor": "My-Way Construction, LLC",
        "phone": "(206) 919-2878",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0026",
        "project": "Vertical World North",
        "address": "12300 Beverly Park Road, Lynnwood",
        "permit": "",
        "contractor": "",
        "phone": "(425) 366-8044",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0727",
        "project": "Vertigo Condominiums",
        "address": "705 E Republican St, Seattle",
        "permit": 6624544,
        "contractor": "Tatley-Grund, Inc.",
        "phone": "(206) 454-9164",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0400",
        "project": "Village at Totem Lake Phase II",
        "address": "12560-12632 120th Ave NE, Kirkland",
        "permit": "BMU17-06261",
        "contractor": "Fairfield Totem Lake, LLC",
        "phone": "(678) 410-4182",
        "manager": "Walter"
      },
      {
        "job_no": "18-0779",
        "project": "Vision House - Jacob's Well",
        "address": "19630 20th Avenue NE, Shoreline",
        "permit": 125935,
        "contractor": "Polygon Northwest",
        "phone": "425-766-3716",
        "manager": "Walter"
      },
      {
        "job_no": "19-0097",
        "project": "Waldhaus",
        "address": "921 38th Ave, Seattle",
        "permit": "6670760-CN",
        "contractor": "ABKJ, Inc.",
        "phone": "(206) 890-6335 &",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0061",
        "project": "Walgreens 6259",
        "address": "9456 16th Ave SW, Seattle",
        "permit": "6649392-ME",
        "contractor": "AES Mechanical Services G",
        "phone": "(206) 733-9923",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1055",
        "project": "Walker Street Seismic Retrofit",
        "address": "610 S Walker St, Seattle",
        "permit": "6621515-CN",
        "contractor": "Precision Builders, Inc.",
        "phone": "(206) 396-1527",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0953",
        "project": "Washington Cement Masons Apprenticeship",
        "address": "6737 Corson Avenue South, Building D, Seattl",
        "permit": "N/A",
        "contractor": "",
        "phone": "",
        "manager": "Anthony"
      },
      {
        "job_no": "18-0970",
        "project": "Washington Park",
        "address": "80 S. Washington Street, Seattle",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0359a",
        "project": "Washington Square Towers One",
        "address": "10610 NE 9th Place, Bellevue",
        "permit": "17 128107 BZ",
        "contractor": "Porter Construction Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "18-0359b",
        "project": "Washington Square Towers Two",
        "address": "10650 NE 9th Place, Bellevue",
        "permit": "17 128109 BZ",
        "contractor": "Porter Construction Inc.",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "19-0006",
        "project": "Wells Fargo - Bellevue Civica - SIR",
        "address": "205 108th Avenue, Bellevue",
        "permit": "",
        "contractor": "",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "19-0095",
        "project": "Wells Fargo Seattle Tower Re-Stack",
        "address": "999 3rd Avenue, Seattle",
        "permit": "6646969-CN",
        "contractor": "Swinerton Builders, Inc.",
        "phone": "",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0528",
        "project": "Werner",
        "address": "3046 17th Ave W, Seattle",
        "permit": 6509754,
        "contractor": "Kamin Excavation/Commer",
        "phone": "(206) 753-9891",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0888",
        "project": "West Lake Kathleen Water Main Improvem",
        "address": "various*(see map), Renton",
        "permit": "17911 128",
        "contractor": "RW Scott Construction",
        "phone": "(253)508-2741",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0731",
        "project": "West Precinct Chiller Replacement",
        "address": "810 Virginia Street, Seattle",
        "permit": 6607386,
        "contractor": "Western Ventures Construct",
        "phone": "(206) 578-2848",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0859w",
        "project": "Westridge Townhomes SFS Trail",
        "address": "n/a, Issaquah",
        "permit": "LAN17-00003",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859",
        "project": "Westridge Townhomes South - All Buildings",
        "address": "519 NE Ellis Drive, Issaquah",
        "permit": "BLD17-00159",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859a",
        "project": "Westridge Townhomes South - Bldg. 01",
        "address": "519 NE Ellis Drive, Issaquah",
        "permit": "BLD18-00126",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859b",
        "project": "Westridge Townhomes South - Bldg. 02",
        "address": "585 NE Ellis Drive, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859c",
        "project": "Westridge Townhomes South - Bldg. 03",
        "address": "570 NE Daisy Walk, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859d",
        "project": "Westridge Townhomes South - Bldg. 04",
        "address": "952 6th Walk NE, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859e",
        "project": "Westridge Townhomes South - Bldg. 05",
        "address": "924 6th Walk NE, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859f",
        "project": "Westridge Townhomes South - Bldg. 06",
        "address": "908 6th Walk NE, Issaquah",
        "permit": "BLD17-00159",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859g",
        "project": "Westridge Townhomes South - Bldg. 07",
        "address": "987 6th Avenue NE, Issaquah",
        "permit": "BLD18-00129",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859h",
        "project": "Westridge Townhomes South - Bldg. 08",
        "address": "967 6th Avenue NE, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859i",
        "project": "Westridge Townhomes South - Bldg. 09",
        "address": "941 6th Avenue NE, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859j",
        "project": "Westridge Townhomes South - Bldg. 10",
        "address": "925 6th Avenue NE, Issaquah",
        "permit": "(pending)",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859k",
        "project": "Westridge Townhomes South - Bldg. 11",
        "address": "978 6th Avenue NE, Issaquah",
        "permit": "BLD17-00419",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859l",
        "project": "Westridge Townhomes South - Bldg. 12",
        "address": "954 6th Avenue NE, Issaquah",
        "permit": "BLD17-00420",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859m",
        "project": "Westridge Townhomes South - Bldg. 13",
        "address": "922 6th Avenue NE, Issaquah",
        "permit": "BLD17-00389",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859n",
        "project": "Westridge Townhomes South - Bldg. 14",
        "address": "902 6th Avenue NE, Issaquah",
        "permit": "BLD17-00390",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859o",
        "project": "Westridge Townhomes South - Bldg. 15",
        "address": "989 7th Avenue NE, Issaquah",
        "permit": "BLD17-00421",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859p",
        "project": "Westridge Townhomes South - Bldg. 16",
        "address": "965 7th Avenue NE, Issaquah",
        "permit": "BLD17-00422",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859q",
        "project": "Westridge Townhomes South - Bldg. 17",
        "address": "943 7th Avenue NE, Issaquah",
        "permit": "BLD17-00391",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859r",
        "project": "Westridge Townhomes South - Bldg. 18",
        "address": "923 7th Avenue NE, Issaquah",
        "permit": "BLD17-00392",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859s",
        "project": "Westridge Townhomes South - Bldg. 19",
        "address": "924 7th Avenue NE, Issaquah",
        "permit": "BLD17-00201",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859t",
        "project": "Westridge Townhomes South - Bldg. 20",
        "address": "904 7th Avenue NE, Issaquah",
        "permit": "BLD17-00192",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859u",
        "project": "Westridge Townhomes South - Bldg. 21",
        "address": "941 8th Avenue NE, Issaquah",
        "permit": "BLD17-00191",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "17-0859v",
        "project": "Westridge Townhomes South - Bldg. 22",
        "address": "923 8th Avenue NE, Issaquah",
        "permit": "BLD17-00189",
        "contractor": "Polygon Northwest",
        "phone": "(425) 766-2053",
        "manager": "Walter"
      },
      {
        "job_no": "18-0733",
        "project": "Westrock Chip Thickness Screening Project",
        "address": "801 East Portland Avenue, Tacoma",
        "permit": "BLDCA18-0214",
        "contractor": "",
        "phone": "",
        "manager": "Walter"
      },
      {
        "job_no": "17-0792a",
        "project": "Westview - Bldg. 1",
        "address": "9319 S 243rd Street, Kent",
        "permit": "CNST-2171350",
        "contractor": "Schneider Homes, Inc.",
        "phone": "(253) 508-1069",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0792b",
        "project": "Westview - Bldg. 2",
        "address": "24232 93rd Ct S, Kent",
        "permit": "CNST-2171353",
        "contractor": "Schneider Homes, Inc.",
        "phone": "(253) 508-1069",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0792c",
        "project": "Westview - Bldg. 3",
        "address": "24214 93rd Ct S, Kent",
        "permit": "CNST-217352",
        "contractor": "Schneider Homes, Inc.",
        "phone": "(253) 508-1069",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0792d",
        "project": "Westview - Bldg. 4",
        "address": "24206 93rd Ct S, Kent",
        "permit": "CNST-2171354",
        "contractor": "Schneider Homes, Inc.",
        "phone": "(253) 508-1069",
        "manager": "Isaac"
      },
      {
        "job_no": "17-0792e",
        "project": "Westview - Bldg. 5",
        "address": "24201 93rd Ct S, Kent",
        "permit": "CNST-2172072",
        "contractor": "Schneider Homes, Inc.",
        "phone": "(253) 508-1069",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0325",
        "project": "Willows Preparatory School",
        "address": "12280 Redmond-Woodinville Rd, Redmond",
        "permit": "BLDG-2017-0309",
        "contractor": "Foushee and Associates, In",
        "phone": "(425) 941-7965",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1040",
        "project": "Willows Run Lobby",
        "address": "9840 Willows Run Road, Redmond",
        "permit": "BLDG-2018-0537",
        "contractor": "Osborne Construction Com",
        "phone": "(208) 308-1204",
        "manager": "Isaac"
      },
      {
        "job_no": "18-1033",
        "project": "Winsome Trading Inc. Addition",
        "address": "16111 Woodinville-Redmond Rd NE, Woodinvi",
        "permit": "BLD17100",
        "contractor": "Metropolitan Contracting",
        "phone": "206-941-0416",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0976",
        "project": "WS7 - Parcel B - Puget Blvd. Housing",
        "address": "4849 21st Avenue SW*, Seattle",
        "permit": 6543734,
        "contractor": "Better Image, LLC",
        "phone": "(206) 941-1423",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0831",
        "project": "WTC-1 Second Floor HVAC Upgrade",
        "address": "14500 NE 87th Street, Redmond",
        "permit": "",
        "contractor": "Corti Construction, Inc.",
        "phone": "(425) 466-1119",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0967",
        "project": "Wyss Residence",
        "address": "8531 SE 80th Street, Mercer Island",
        "permit": "1609-262",
        "contractor": "Karlstrom Associates, Inc.",
        "phone": "(206) 890-9307",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0358",
        "project": "Yale Flats",
        "address": "2227 Yale Ave E, Seattle",
        "permit": 6506218,
        "contractor": "Cascade Built, LLC",
        "phone": "(412) 498-3662",
        "manager": "Jeff"
      },
      {
        "job_no": "18-0989",
        "project": "Young Retrofit",
        "address": "12911 NE 76th Street, Kirkland",
        "permit": "",
        "contractor": "A-FFIX, LLC - RETAINER R",
        "phone": "(206) 227-4869",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1023",
        "project": "Z Residence (Suzanna)",
        "address": "10419 NE 198th St, Bothell",
        "permit": "",
        "contractor": "Seismic Northwest, LP",
        "phone": "(206) 899-7148",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0978",
        "project": "Zayo Spec Building 234",
        "address": "234 9th Ave, Seattle",
        "permit": 365472,
        "contractor": "Southwestern Construction",
        "phone": "(425) 280-2898",
        "manager": "Jeff"
      },
      {
        "job_no": "17-0779",
        "project": "Zeasman Residence",
        "address": "3207 Point Place SW, Seattle",
        "permit": 6455966,
        "contractor": "",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "18-0328",
        "project": "Zhang Sun Residence",
        "address": "9780 NE 13th Street, Clyde Hill",
        "permit": "BLDG2017-0088",
        "contractor": "Madrona Custom Homes",
        "phone": "(425) 449-3643",
        "manager": "Jeff"
      },
      {
        "job_no": "18-1006",
        "project": "Zhao Residence",
        "address": "18834 SE 42nd Street, Issaquah",
        "permit": "BLD18-00210",
        "contractor": "PVF Construction",
        "phone": "",
        "manager": "Isaac"
      },
      {
        "job_no": "19-0077",
        "project": "Zillow 42nd Floor Assembly",
        "address": "1301 2nd Ave Floor 42, Seattle",
        "permit": "6692226-CN",
        "contractor": "Unimark Construction Grou",
        "phone": "(206) 786-5371",
        "manager": "Isaac"
      }
]

jobs.forEach(function(obj) {
    db.collection("jobs").add({
        job_no: obj.job_no,
        project: obj.project,
        address: obj.address,
        permit: obj.permit,
        contractor: obj.contractor,
        phone: obj.phone,
        manager: obj.manager
    }).then(function(docRef) {
        console.log("Doc written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.log("Error adding doc ", error);
    });
});