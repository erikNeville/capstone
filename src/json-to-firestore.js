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


phones.forEach(function(obj) {
  db.collection("phones").add({
    fName: obj.fName,
    lName: obj.lName,
    phone: obj.phone
  }).then(function(docRef) {
    console.log("doc written with id: ");
  })
  .catch(function(error) {
    console.log("error ", error);
  });
});

