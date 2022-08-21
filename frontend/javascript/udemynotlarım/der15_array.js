let names = ["ece", "efe", "emre", "zeynep"];

let years = [2012, 2017, 1984, 2022, 1981];

let mix = ["sadık", "turan", 1980, null, undefined, ["sinema", "kitap"]];

//! get array item
console.log(names[0]); //ece
console.log(names[3]); // zeynep

//! set array item
names[0] = "ali"; // artık ece değil ali
// names[5] = "veli"; // index ten fazla değer yazılırsa araya empty eleman koyar
names[names.length] = "deli"; // en sona ekler.

//! add array item
years.push(1986); // en sona ekler
years.unshift(1999); // en başa ekler

//! remove array item
years.pop(); // en sondaki elemanı siler 1986
years.shift(); // en sondaki elemanı siler 1999

//! indexof array item
names.indexOf("efe"); // index numarasını verir.
console.log(`index numarası`, names.indexOf("efe")); //1
console.log(`index numarası`, names.indexOf("efeko")); //-1 yani yok

//! reverse array item
names.reverse(); // listeyi terse çevirir.

//! sort array item
years.sort(); // küçükten büyüğe sıralar

//! concat array item
let val = years.concat(names);
console.log(val); // iki diziyi birleştirdi ve  9 elemanlı bir dizi oluştu.

//!splice array item
names.splice(2, 0, "seda");
// 2nci indexten başla 0 eleman sil sedayı ekle
// 2,1 seda olsaydı --> 2nci indexten başla 1 eleman sil sedayı ekle
// (0,1) en baştan başla 1 eleman sil hiç ekleme yapma

//!find

function over18(year) {
  let age = 2022 - year;
  return age >= 18;
}

console.log(over18(1999)); // true gelir. 2022-1999 >= 18

let val1 = years.find(over18);
console.log(val1); //1981
// years dizisi içindeki sayıları tek tek fonksiyona yolla ve ilk true veren değeri getir demek

//!filter
let val2 = years.filter(over18);
console.log(val2); //   [1981,1984]
// years dizisi içindeki sayıları tek tek fonksiyona yolla ve true veren değerleri dizi halinde getir demek

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);

//todo, ALIŞTIRMALAR...
console.log("---Alıştırmaşlar--");

// oluşturma
let cars = ["Bmw", "Mercedes", "Opel", "Mazda"];
console.log(cars);

//? veya diğer yöntem
let cars2 = new Array("Ali", "Veli", "Deli", "Zeki");
console.log(cars2);

// uzunluğu-eleman sayısı
console.log(cars.length);

//ilk ve son elemanı
console.log(`İlk elemman ${cars[0]}, son elemanı ${cars[cars.length - 1]}`);

// Renault dizi sonuna ekle
//* cars[4] = "Renault";
//* cars[cars.length] = "Renault";
cars.push("Renault");
console.log(cars);

// Başına Toyata ekle
cars.unshift("Toyota");
console.log(cars);

// renault sil (sondan)
//* cars.pop();
cars.splice(cars.length - 1, 1);
console.log(cars);

// toyata sil (baştan)
//* cars.shift();
cars.splice(0, 1);
console.log(cars);

// ters çevir
cars.reverse();
console.log(cars);

//alfabetik sırala
cars.sort();
console.log(cars);

// [1,2,5,80] dizisini sıralayın,

let numbers = [11, 5, 2, 80, 15];
console.log(numbers);
numbers.sort();
console.log(numbers); // sıralama sayısal değil alfabetiktir.

// sayısal sıralama yapmak için küçük bir fonksiyon yazdı,
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  if (a == b) return 0;
}
// sonra diziyi fonksiyon iiçine yolladı
console.log(numbers.sort(compare));

// "Opel" dizi elemanı mıdır?
console.log(cars.indexOf("Opel")); // 3 yani var
console.log(cars.includes("Opel")); // true yani var

// let str = "Audi,Porche";  ifadesini diziye çevir.
let str = "Audi,Porche";
let cars3 = str.split(",");
console.log(cars3); // 2 elemanlı dizi oluştu

// oluşturulan dizileri birleştirin
let birlesikCars = cars.concat(cars3);
console.log(`Birleşen dizi :`, birlesikCars);

// oluşturulan diziden son 2 elemanı sil
// birlesikCars.splice((birlesikCars.length-2), 2);
birlesikCars.splice(4, 2); //aynı şey
console.log(`Son ikisi silinen dizi :`, birlesikCars);



// slicelama
birlesikCars = cars.concat(cars3); // tekrar eklendi
console.log(`tekrar eklenen dizi :`, birlesikCars);

console.log(`Slice yapma :`, birlesikCars.slice(4)); // 4ten başla sona kadar git
console.log(`Slice yapma :`, birlesikCars.slice(4, 6)); // 4ten başla 6'ya kadar git, 6yı alma
console.log(`Splice metodu :`, birlesikCars.splice(4, 2)); // silinen son iki elemanı dizi olarak yazdırır.
console.log(`Splice sonrası :`, birlesikCars);


// aşağıdakileri dizi de saklayın
// studentA : Ali Sağlam 2010
// studentB : Veli Çürük 1999
// studentC : Deli Demir 2008

let studentA = ["Ali", "Sağlam", 2010];
let studentB = ["Veli", "Çürük", 1999];
let studentC = ["Deli", "Demir", 2008];

let students = [studentA, studentB, studentC];
console.log(`Students: `,students);
console.log(students[0]);
console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[0][0]);
console.log(students[1][0]);
console.log(students[2][0]);
