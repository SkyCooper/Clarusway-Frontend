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
    console.log(price);
};

calculate({id:14, price:4285});

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================

const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];

//*klasik metod; 
const mehmet = names[1];  //* indexleme

//*destructing ile, sırası önemli, köseli parantez ile yapılıyor.
const [p1, p2, p4] = names;
// const [p1, p2, , p4] = names; böyle olursa  Ahmet Mehmet Saffet olurdu..
console.log(p1,p2,p4); // Ahmet Mehmet İsmet


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


const showName = (name, surname, ...titles) => {
  const summary = `${name} ${surname} is a ${titles.join(" and ")}`;
  console.log(summary); // Noah Adams is a Developer and Instr and Professor and Dad
}
showName(`Noah`, `Adams`, `Developer`, `Instr`, `Professor`, `Dad`);

//*======================================================
//*  SPREAD (...)  -->
//* ======================================================
