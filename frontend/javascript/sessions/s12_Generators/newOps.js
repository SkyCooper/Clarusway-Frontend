//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];

//* 2.YONTEM: DESTRUCTURING
const { name, colors, model, engine } = car; // sırası önemli değil  ama key ile aynı olması gerekli
console.log(name, model, engine, colors);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const {car1, car2} = cars;
console.log(car1);


// const {name, model} = car1 
// const {name, model} = car2
// obje key isimleri aynı olduğundan isim değişikliği zaruri hale geliyor.
//! aynı key:value gibi destruct etmek istediğimiz objenin keyine yeni değer ataması yapabiliyoruz  name : c1name yani car1 in name keyini c1name e atıyorum.
const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
console.log(c1Name, c2Name);


//örnek, bu objelerdeki valuleri alt alta yazdırın
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

//*klasik çözüm
team.forEach((p)=> {
    console.log("**************");
    console.log("Name:", p.name);
    console.log("Surname:", p.surname);
    console.log("Job:", p["job"]);
    console.log("Age:", p.age);
});

//* destructing
team.forEach((p)=> {
    const {name, surname, job, age} = p;
    console.log("**************");
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Age:", age);
});

//todo, function'nın döndürdüğü obje  doğrudan dest. yapılabilir.
const getInfo = () => {
    return {
        id : 1,
        pruductName: "Iphone",
        price: 30000,
    };
};
console.log(getInfo());

const {pruductName, price} = getInfo(); //destrucring yapıldı ve sadece istediğimiz değerleri açtık.
console.log("Pruduct Name:", pruductName);
console.log("Price:", price);


//todo, fonksiyonların obje parametreleri doğrudan dest. yapılabilir.
//todo, 
const calculate = ({id, price}) => {
    console.log(price*1.1);
};

calculate({id:14, price:4285});


//* Nested Object Destructuring
// bmwCar objesinden brand, model,name,surname propertilerini destruct ediniz
const bmwCar = {
    brand: 'BMW',
    models: 1990,
    engine: 1.6,
    owner:{name1: 'Ahmet', surname1: 'Can'},
};

const {brand, models, owner:{name1, surname1}} = bmwCar;
console.log(brand, models, name1, surname1)

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];

//*klasik metod; 
const mehmet = names[1];  //* indexleme

//*destructing ile, sırası önemli, köseli parantez ile yapılıyor.
const [p1, p2, p4] = names;
// const [p1, p2, ,p4] = names; //böyle olursa  Ahmet Mehmet Saffet olurdu..
console.log(p1,p2,p4); // Ahmet Mehmet İsmet

const surNames = ["Demir", "Beton", "Çelik", "Odun"];
const [,,,s1] = surNames; // virgül ile atama yapılacak veri boş geçilir.
console.log(s1);

//*======================================================
//  REST (...) //! --> geriye kalanlar, arta kalanlar gibi
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
//* bmw-mercedes-ferrari bir diziye, geri kalanlar ise değişkene atansın
const vehicles = ["anadol", "reno", "bmw", "mercedes", "ferrari",];

const [anadol,reno, ...restVehicles]= vehicles; // 1-2nci değişkene atadık, kalanları diziye attık
console.log(reno, anadol); // reno anadol
console.log(restVehicles); // [ 'bmw', 'mercedes', 'ferrari' ]

//* REST: (Objects)
const personel = {
    pName: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  };

const { pName, job, ...ageSurname} = personel;
console.log(ageSurname); //{ surname: 'Barry', age: 30 }
//* çıktısı obje olur. tek bir elemt kalsa bile
console.log(pName, job); 

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.
const sum = (x,y) => x+y;
console.log(sum(1, 2, 3, 4, 5, 6));
// sadece ilk 2 argümanı toplar 1+2=3 yapar.


const sumAll = (...numbers) => {
  // rest operatörü aldığı sayıları diziye çevirir.
  console.log(numbers); // [ 1, 2, 3, 4, 5 ] dizi oldu
  return numbers.reduce((acc,val)=> acc+val,0)
  // return numbers.reduce((sum, num) => (sum += num),0) // bu şekilde de yazılabilir.
}
console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5));

// showName'den ilk 2 değer name ve surname olarak değişkene atandı, geri kalanlar titles değikeni içine dizi olarak atandı.
const showName = (name, surname, ...titles) => {
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary); // Noah Adams is a Developer and Instr and Professor and Dad
}
showName(`Noah`, `Adams`, `Developer`, `Instr`, `Professor`, `Dad`);

//*======================================================
//*  SPREAD (...)  -->
//* ======================================================

//todo, Spread operatoru ise iterables olan bir elemani bireysel degerler haline getirir.

const flyingVecihles = ["Aircraft", "Helicopter", "QuadCopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];

const allVehicles1 = [flyingVecihles, automobiles];
const allVehicles2 = [...flyingVecihles, ...automobiles];
console.log(allVehicles1); // içinde 2 dizi olan tek dizi
console.log(allVehicles2); // içinde 7 eleman olan tek dizi

//*Example;
const citrus = ["orange", "lime", "lemon"];
const friuts = ["apple", ...citrus, "banana", "pear"];
console.log(friuts); // 6elemanlı dizi oldu.

//*string spread
const str = "Hello FS12";
const charArray = [...str];
charArray[0] = "X";
console.log(charArray, str); //orjinal str değişmez
console.log(...str); // H e l l o   F S 1 2


//* Max() fonksiyonu örneği,
//*dizileri fonksiyonlara açık bir şekilde parametre olarak vermek için
console.log(Math.max(1,3,5,2,10)); // 10
const nums = [1, 3, 5, 2, 10];
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 10


//* Array Copy
const myNumbers = [1,2,3];
const hisNumbers = [...myNumbers];
console.log(hisNumbers); // birebir kopyası olur.
hisNumbers.push(11);
console.log(hisNumbers); //4 elemanlı oldu, orjinal ise 3 elemanlı değişmez
const herNumbers = [-1, 0, ...myNumbers, 4, 8];


//* Object Copy
const myObj = {a:1, b:2, c:3};
const herObj = {a:2, z:4, k:3};

const copiedObj = {...myObj};
console.log(copiedObj); // birebir kopyası olur.
copiedObj.c = "33"; // sadece kopya değişir, orjinal değişmez

const combinedObj ={...myObj, ...herObj};
console.log(combinedObj); // { a: 2, b: 2, c: 3, z: 4, k: 3 }
//* a her ikisinde olduğundan sona yazılanın değerini alır.
