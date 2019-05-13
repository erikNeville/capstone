const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAetjcBffrzyUn6rkibHNCgMB2YAJfUSIQ",
    authDomain: "joblist-479f2.firebaseapp.com",
    projectId: "joblist-479f2"
});

var db = firebase.firestore();

var phones = [
  {
    "fName": "Jonathan",
    "lName": "Andrews",
    "phone": "206-799-8145"
  },
  {
    "fName": "Craig",
    "lName": "Bechtold",
    "phone": "253-245-0331"
  },
  {
    "fName": "Gary",
    "lName": "Byrne",
    "phone": "808-638-1167"
  },
  {
    "fName": "Kevin",
    "lName": "Byrne",
    "phone": "253-228-7320"
  },
  {
    "fName": "Anthony",
    "lName": "Coyne",
    "phone": "206-799-5171"
  },
  {
    "fName": "Dispatch",
    "lName": "",
    "phone": "206-799-6110"
  },
  {
    "fName": "Andy",
    "lName": "Duong",
    "phone": "206-403-3405"
  },
  {
    "fName": "John",
    "lName": "Fraser",
    "phone": "360-547-2648"
  },
  {
    "fName": "Biniyam",
    "lName": "Ejigu",
    "phone": "206-771-5349"
  },
  {
    "fName": "Mebratu",
    "lName": "Gebrehiwot",
    "phone": "425-835-1762"
  },
  {
    "fName": "Frank",
    "lName": "Gosser",
    "phone": "206-391-2996"
  },
  {
    "fName": "Jerry",
    "lName": "Graham",
    "phone": "253-292-7540"
  },
  {
    "fName": "Dan",
    "lName": "Gray",
    "phone": "206-459-5692"
  },
  {
    "fName": "Josh",
    "lName": "Gray",
    "phone": "425-328-8568"
  },
  {
    "fName": "Mark",
    "lName": "Gray",
    "phone": "206-799-5135"
  },
  {
    "fName": "Jeramy",
    "lName": "Gronau",
    "phone": "253-370-6432"
  },
  {
    "fName": "Matthew",
    "lName": "Hancock",
    "phone": "425-765-6232"
  },
  {
    "fName": "Walt",
    "lName": "Hansen",
    "phone": "206-799-4766"
  },
  {
    "fName": "Dwayne",
    "lName": "Helgeson",
    "phone": "253-217-6780"
  },
  {
    "fName": "Scott",
    "lName": "Hoobler",
    "phone": "206-491-9316"
  },
  {
    "fName": "David",
    "lName": "Hurum",
    "phone": "360-710-2883"
  },
  {
    "fName": "Tyler",
    "lName": "Johnson",
    "phone": "206-920-3767"
  },
  {
    "fName": "Paul",
    "lName": "Kanikkeberg",
    "phone": "206-799-5628"
  },
  {
    "fName": "Chad",
    "lName": "Keubler",
    "phone": "425-351-1394"
  },
  {
    "fName": "Ernie",
    "lName": "Leimkuhler",
    "phone": "425-591-6816"
  },
  {
    "fName": "Jim",
    "lName": "Linehan",
    "phone": "253-985-0067"
  },
  {
    "fName": "Travis",
    "lName": "Linn",
    "phone": "206-380-9454"
  },
  {
    "fName": "Joey",
    "lName": "Moon",
    "phone": "206-799-8363"
  },
  {
    "fName": "Crista",
    "lName": "Moser",
    "phone": "206-963-8634"
  },
  {
    "fName": "Ed",
    "lName": "Moser",
    "phone": "206-795-5752"
  },
  {
    "fName": "Steven",
    "lName": "Moser",
    "phone": "206-963-8633"
  },
  {
    "fName": "Susan",
    "lName": "Moser",
    "phone": "206-459-3931"
  },
  {
    "fName": "Ethan",
    "lName": "Olson",
    "phone": "719-338-7300"
  },
  {
    "fName": "JJ",
    "lName": "Payseno",
    "phone": "206-818-6982"
  },
  {
    "fName": "Judi",
    "lName": "Payseno",
    "phone": "206-459-3930"
  },
  {
    "fName": "Christopher",
    "lName": "Pratt",
    "phone": "206-799-4479"
  },
  {
    "fName": "Mike",
    "lName": "Preciado",
    "phone": "206-799-5350"
  },
  {
    "fName": "Jeff",
    "lName": "Rabe",
    "phone": "206-799-5672"
  },
  {
    "fName": "Stephen",
    "lName": "Ramos",
    "phone": "206-455-5550"
  },
  {
    "fName": "John",
    "lName": "Reeder",
    "phone": "206-799-1130"
  },
  {
    "fName": "Teri",
    "lName": "Reeder",
    "phone": "206-683-0099"
  },
  {
    "fName": "Darren",
    "lName": "Reid",
    "phone": "206-799-5687"
  },
  {
    "fName": "Brian",
    "lName": "Robertson",
    "phone": "425-218-9029"
  },
  {
    "fName": "Kate",
    "lName": "Rubin",
    "phone": "206-290-8721"
  },
  {
    "fName": "Isaac",
    "lName": "Ruoff",
    "phone": "206-799-5992"
  },
  {
    "fName": "Micah",
    "lName": "Ruoff",
    "phone": "206-799-5998"
  },
  {
    "fName": "Satnam",
    "lName": "Singh",
    "phone": "206-557-2812"
  },
  {
    "fName": "Chris",
    "lName": "Smith",
    "phone": "503-930-7958"
  },
  {
    "fName": "Mike",
    "lName": "Sorantino",
    "phone": "206-799-3644"
  },
  {
    "fName": "Essaw",
    "lName": "Tesema",
    "phone": "206-334-7860"
  },
  {
    "fName": "Joe",
    "lName": "Tester",
    "phone": "206-851-6028"
  },
  {
    "fName": "Roberta",
    "lName": "Thiesen",
    "phone": "206-799-4362"
  },
  {
    "fName": "Julie",
    "lName": "Willson",
    "phone": "206-799-9611"
  }
]

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
    "project": "26th Avenue Townhomes â€“ 119 Lot",
    "address": "119 26th Avenue East, Seattle",
    "permit": 6577054,
    "contractor": "C A James",
    "phone": "(206) 948-5423",
    "manager": "Isaac"
  },
  {
    "job_no": "17-0908c",
    "project": "26th Avenue Townhomes â€“ 123 Lot",
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
    "project": "Lithia BMW of Seattle â€“ Sales Building Rem",
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
    console.log("written with id: ", id);
  }).catch(function(error) {
    console.log("error writing doc: ", error);
  });
});

// phones.forEach(function(obj) {
//   db.collection("phones").add({
//     fName: obj.fName,
//     lName: obj.lName,
//     phone: obj.phone
//   }).then(function(docRef) {
//     console.log("doc written with id: ");
//   })
//   .catch(function(error) {
//     console.log("error ", error);
//   });
// });