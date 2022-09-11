// AND opratörü
// her iki değer de true ise son true değeri döndürür, aksi takdirde ilk false değeri döndürür

console.log(true && 1); // 1
console.log(false && 1); // false

// OR opratörü
// değerlerden biri true ise ilk true değeri döndürür, aksi takdirde her ikisi de false ise son false değeri döndürür
console.log(1 || false); // 1
console.log(false || 0); // 0

("****** IF/ELSE-TERNARY *******");
// koşulu sağlayan skopa girer ve içerisindeki işlemi yapar

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayi = Number(prompt("Bir sayi giriniz:"));
let sayi = 5;
//if/else
if (sayi > 0) {
  console.log(`${sayi} pozitiftir.`);
} else if (sayi == 0) {
  console.log(`${sayi}'a esittir.`);
} else {
  console.log(`${sayi} negatiftir.`);
}

//ternary
sayi >= 0
  ? console.log(`${sayi} pozitiftir.`)
  : console.log(`${sayi} negatiftir.`);

// ? FONKSİYONLAR
// ! FUNCTION DECLARATION

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {
  console.log("merhaba");
}

// yazdir(); //! invoke, call, cagirma

//* ORNEK:
// parametre alma
function selamla(ad, soyAd = "") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
selamla("Ayse");
selamla("John");

// ! ARROW FUNCTION

//* ORNEK

const selamla2 = (ad, soyAd = "") => {
  console.log(`Merhaba ${ad} ${soyAd}`);
};
//arrow functionlar return kullanmadan tek satırda yazılabilir
// const selamla2 = (ad, soyAd = "") => console.log(`Merhaba ${ad} ${soyAd}`);
// selamla2("Ahmet", "Kara");

// ARRAY METHODS
//* map()

//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Tüm diziyi döner ve koşula göre yeni bir dizi döndürür.
//? Dizinin boyutu değişmez

let users = [
  { firstName: "Susan", lastName: "Steward", age: 14 },
  { firstName: "Daniel", lastName: "Longbottom", age: 16 },
  { firstName: "Bruno", lastName: "Black", age: 56 },
  { firstName: "Jacob", lastName: "Joyo", age: 15 },
  { firstName: "Sam", lastName: "Drogo", age: 64 },
];

let singleUser = users.map((user) => {
  //firstname ve lastname i birleştirelim
  let fullName = user.firstName + " " + user.lastName;
  return fullName;
});
// console.log(singleUser)

//* filter()

//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Tüm diziyi döner ve koşulu sağlayan elemanlardan oluşan yeni bir dizi döndürür.

const youngPeople = users.filter((person) => {
  return person.age <= 15;
});

// console.log(youngPeople);

//* find()

//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

const Bruno = users.find((person) => person.firstName === "Bruno");
// console.log(Bruno);

//* OBJECTS

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.
//? dot (.) notasyonu veya bracket ([]) notasyonu kullanılabilir

let lion = {
  category: "carnivore",
  region: "south afrika",
  "lion-baby": "cub",
};

// console.log(lion.category); // carnivore
// dot notation
// console.log(lion.lion-baby); // error: ReferenceError: baby is not defined
// bracket notation
// console.log(lion['lion-baby']); // "cub"

// Object destructuring

const Susan = {
  firstName: "Susan",
  lastName: "Steward",
  age: 14,
  hobbies: {
    hobby1: "singing",
    hobby2: "dancing",
  },
};

// geleneksel yöntemde obje elemanlarına dot notasyonu ile uzun uzun ulaşmamız gerekir
// const firstName = Susan.firstName;
// const age = Susan.age;
// const hobby1 = Susan.hobbies.hobby1;

// console.log(firstName, age, hobby1); //"Susan" 14 "singing"

// destructuring ile kolay bir şekilde yeni değişkenler oluşturabiliriz
const {
  firstName,
  age,
  hobbies: { hobby1 },
} = Susan;

// console.log(firstName, age, hobby1); //"Susan" 14 "singing"

// Spread Operator
// dizi veya objelerin elemanlarını ayrıştırarak başka dizi veya obje içine kopyalamayı sağlar
let pets = ["cat", "dog", "rabbits"];
let carnivorous = ["lion", "wolf", "leopard", "tiger"];
let animals = [...pets, ...carnivorous];

// console.log(animals); //["cat", "dog" , "rabbits","lion", "wolf", "leopard", "tiger"]

let name = { firstName: "John", lastName: "Doe" };
let hobbies = { hobby1: "singing", hobby2: "dancing" };
let myInfo = { ...name, ...hobbies };

// console.log(myInfo); //{firstName:"John", lastName:"Doe", hobby1: "singing", hobby2: "dancing"}
