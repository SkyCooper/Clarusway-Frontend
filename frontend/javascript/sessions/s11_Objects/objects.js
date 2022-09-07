//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir

//* ----------------------------------------------
//* 1- Object() class'ından new Operatörü ile
//* ----------------------------------------------

const arabalar = new Object();  //büyük harf olmalı class ismi
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//!Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.
const key = "marka";
console.log(arabalar[key]);


arabalar.motor = "2.4"; 
console.log(arabalar.motor); //re-assing edilebilir.


//* ----------------------------------------------
//* 2- object constructor kullanarak (OOP ile ayrintili anlatilacak)
//* ----------------------------------------------

//? Object Constructure,
function Personel(id, ad, maas){
    this.perId = id;
    this.perAd = ad;
    this.maas = maas;
    console.log(this);//! personel objesine bağlanmıştır. (binded)
}
console.log(this);  //! çalıştığı yere göre değişir. 
//! Global alanda yani burada window nesnesini gösterir.

const kisi1 = new Personel("123456", "Cooper", 15000);
const kisi2 = new Personel("007123", "Jack", 22000);
console.log(kisi1.perAd);
console.log(kisi1["perId"]);
console.log(kisi2.maas);
// console.log(kisi1);


//* ----------------------------------------------
//* 3- Object literal (en çok kullanılan)
//* ----------------------------------------------

const worker = {
    name : "can",
    surname : "canan",
    age : 44,
    job : "devaloper",
    languages : ["c++", "java", "javascript", "python"],
    salary : 140000
}

console.log(worker);
console.log(worker.job);
console.log(worker.languages[worker.languages.length-1]);
console.log(worker["name"]);

console.log("Known Languages:", worker["languages"]);
// 4 elemanlı languages dizini yazdırır.
worker["languages"].forEach((l)=> console.log(l));
// 4 elemanlı languages dizininin elemanlarını tek tek yazdırır.

worker.birthYear = 1981;
worker.email = "coop@gmail.com";
console.log(worker);
// chrome alfabetik olarak yeni keyleri ekler. 

worker["salary"] = worker.salary*1.1
// worker["salary"] *= 1.1   //! bu da kullanılabilir.
console.log(worker.salary);

//* object kopyalama,

//todo, shallow -sığ- copy
//todo, Object.create(), Object.assign(), spread(...), concat(), slice() ---> hepsi sığ kopyalama yapar.
const person = worker;  
console.log("PERSON :", person);

person.birthYear = "1999"; //tekrar atama yapıldı
// fakat burada hem person hem de worker birthYear beraber değişir.
// çünkü burada aslında worker adresini işaret eden bir person objesi oluşturuldu.

//todo, deep -derin- copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
console.log(JSON.stringify(worker)); // herşeyi tamamen string yapar.
//  JSON.parse ise bütün string ifadeyi tekrar obje yapar.
console.log("DEEP : ", deepCopyOfWorker);

deepCopyOfWorker.birthYear = "2001";
// deep copy olduğundan sadece kendi değeri değişir. 
console.log(deepCopyOfWorker.birthYear); //2001
console.log(worker.birthYear); //1999
console.log(person.birthYear); //1999


//* ----------------------------------------------
//* Object Metodları
//* ----------------------------------------------



const personel = {
  name: "Can",
  surname: "Canan",
  dob: "1990",
  job: "devaloper",
  salary: 140000,
  driveingLicense : true,
  calculateAge : function (){
    return new Date().getFullYear() - this.dob;
  },

  //? expression veya declaration ile fonksiyon tanımlanırsa hata vermez

  summary : () => {
      console.log(this);  // burada window döndürür.
      return `${this.name} is ${this.calculateAge()} years old` // bundan dolayı yazarken hata vermez ama çalışmaz.
    }
    //? arrow ile fonksiyon tanımlanırsa hata verir.
};

console.log(personel.calculateAge());  //32  yani 2022-1990
// console.log(personel.summary());  //! this.calculateAge is not a function

//! NOT: arrow fonksiyonlari ozellikle callback fonksiyonu olarak
//! kullanilmak ve bu fonksiyonlarda this keyword kullanim
//! gereksinimini kaldirmak icin gelistirilmistir.
//! Lexical context'e sahiptirler.Dolayisiyla, bir obje fonksiyonu
//! olarak kullanilirsa, this kelimesi global scope'u (window nesnesini)
//! gösterir. Bunu engellemek için object fonksiyonlarini tanimlarken
//! diger (func. expression veya declaration) yontemlerini kullanabilir.


// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================


//? nested
const people = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "coop",
    surname: "SKY",
    dob: "1981",
    job: "developer",
    salary: "110000",
    drivingLicense: true,
  },
};

console.log(people);

console.log("salary of p2 :", people.person2.salary);


//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

console.log(Object.keys(people));
//* people objesinin key'lerini array olarak döndürür.

console.log(Object.values(people));
//* people objesinin value'lerini array olarak döndürür.

console.log(Object.entries(people));
//* people objesinin key ve value'lerini array olarak döndürür.

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

for (let person in people) {
  console.log(person);
  console.log(people[person]);
}

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }


console.log("****************");
for (let key of Object.keys(people)) {
  console.log(key);
}


console.log("****************");
//? people objesindeki tum salary 'leri yazdir
for (let v of Object.values(people)) {
  console.log(v.salary);
  // console.log(v["salary"]);  //* alternatif yazım
}


//? people objesindeki tum salary 'leri yazdir
for (let [k, v] of Object.entries(people)) {
  console.log(`${k} - ${v.salary}`);
}

//! ARRAY METOTLARI ILE;

console.log("********");
Object.keys(people).forEach((p) => console.log(p)); // person1, person2, person3


console.log("********");
Object.values(people).forEach((p) => console.log(p.surname)); // canan, sweat, SKY


//? job = developer olanlarin dob degelerini yazdiriniz.
console.log("*** DOB ****");
Object.values(people).filter((p) => p.job === "developer").forEach((p) => console.log(p.dob)); // 1990, 1981


//********************************************************
//* JSON => Javascript Object Notation
//********************************************************
