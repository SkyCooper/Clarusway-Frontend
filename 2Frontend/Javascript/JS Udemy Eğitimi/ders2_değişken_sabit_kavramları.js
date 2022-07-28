

/*
4 çeşit değişken tanımlama yapılabilir.
Using var       1995-2015 arasında kullanıldı
Using let       2015 sonrasında ve şimdi kullanılıyor.
Using const     sabit değişken atamasında kullanılır.
Using nothing   birşey kullanmadan da atama yapılabilir.
*/

var yasim = 44 // var ile de değişken tanımlanabilir.
console.log(yasim) // çıktısı görünür ama artık kullanılmıyor.
// 2015 öncesinde kullanılıyordu.

var dede = "deneme" // string tanımlama
console.log(dede)

// Değişken tanımlama Kuralları;

/* 
var, let, const ile  değişken tanımlama yapılır.
Sayısal değer ile başyamaz 1yas olmaz yas1
Komut isimleri (keywords) ile tanımlama yapılmaz
Özel Karakterlerden başta sadece ($ ve _) kullanılır
Değişken Case Sensitivdir.  lastname ile lastName farklıdır. 
Tire kullanımına izin verilmez 
Değişken ismi Uniq olmalı
camelCase uygun tanımlama yapılmalı
*/ 

let $deneme; // bu şekiilde kullanım olabilir.
let _deneme;
// let deneme-bedava; ti-re kullanımı yoktur.

let $ = "Hello"; //hatasız çalışır
console.log($);

let $$ = "merhaba"; //hepsi kullanılabilir.
let $$$;
let _lastName = "Johnson";
let _x = 2;
let _100 = 5;


let firstName = "cooper";
let Firstname = "sky";
console.log(firstName, Firstname);

let _sayi = 1907;  // değişken isminde başta özel karakter sadece alt_tire
console.log(_sayi); 

let $sayi = 1999;  // ve dolar $ işareti kullanılır.
console.log($sayi);

let number   // number isimli değişken tanımlandı
number = 66  // değişkene değer atandı
console.log(number) // yazdırıldı
// let number tekrar kullanılamaz hata verir.

// fakat var bu kullanıma izin verir,
var isimlik = "Alex De Souza";
console.log(isimlik)
var isimlik = "alex10combr"; // hata vermeden çalışır.
console.log(isimlik)

{
    var pen = "blue"     // yazılabilir, global gibi davrandığından dışarıda da çalışır.
}

{
    let pencil = "red"   // bu kullanım olmaz parantez içininde kalır, dışarıda çalışmaz.
    //console.log(penci);  // blok kapsamı olduğundan parantez dışında çalışmaz, ama içinde kullanılır.
}

let polo = 55 // polo isimli değişken tanımlandı ve değeri atandı
console.log(polo) // yazdırıldı


let kullanici1 = 'Ahmet'; // böyle ayrı ayrı tanımlama yapılabilir
let yas1 = 25;
let mesaj1 = 'Merhaba';

console.log(kullanici1, yas1, mesaj1) // çıktılar aynı olur.


let kullanici = 'Ahmet',   yas = 25,   mesaj = 'Merhaba';
// veya bu şekilde tek satırda tanımla yapılabilir.
console.log(kullanici, yas, mesaj)


sayi2 = 50 // önce 50 olarak tanımlandı
sayi2 = 60 // sonra 60 oldu
console.log(sayi2) // çıktısı 60 olur , yukarıdan aşağıya doğru okur.
// let ile yapılsaydı hata verirdi.

let fullname ="Sadık Turan" // isim tanımlandı
console.log(fullname)
console.log("")          // boşluk bırakır satırlar arasında
fullname = "Cooper Sky"  // isim değişti
console.log(fullname) 



const piSayisi = 3.14 // SABİT değişkene atama yapıldı
// piSayisi = 4.44 dersem Type Error verir, sabit değişkene tekrar atama yapılmaz
console.log(piSayisi) 

let sayi3; // tanımlandı ama hala atama yapılmadı --> undifined
console.log(sayi3)
sayi3 = 33 // çıktı üstte kaldığı için hala --> undifined
console.log(sayi3) // ama bu çıktı artık 33 olarak döner.


let sayi4 = 4444
console.log(sayi4) 

notum = 50 // (var, let, const) kullanmadan atama yaptım ve hata vermeden çalıştı
console.log(notum) // ama kullanımı uygun değil

let a, b, c;  // tek seferde 3 değişken tanımlandı
a = 3;        // atamalar sonradan yapıldı.
b = 4;
c = a + b;
console.log(a, b, c);


let x, y, z;  // önce değişkenler tek satırda tanımlandı
x = 5; y = 6; z = x + y;  //sonra tek satırda değişken ataması yapmak mümkün
console.log(x, y, z);

let xx = 4 + 5 + 8;
console.log(xx);

let ax = "4" + 5 + 8 // içinde strin ifade olduğu için hepsini concat etti.
console.log(ax);




// Birden fazla değişkeni bir satırda tanımlamak/atama yapmak da mümkündür.
let kisi = 'Ahmet', yasi = 25, mesaji = 'Merhaba'; 
console.log(kisi, yasi, mesaji);


let person="cooper"
let person1 = "cooper" //boşluğa duyarlı değil ama kodun okunabilmesi için iyi olur.



// cont kullanma
// It does not define a constant value. It defines a constant reference to a value.
// 2015 te ES6 ile kullanılmaya başlandı.
// const ile tanımlanan değişken   cannot be Redeclared.  cannot be Reassigned. have Block Scope.

const ugi = 5;
// ugi = 5,5 hata verir
// ugi = ++ugi  veya ugi + 10 da hata verir.
/*  const ugi;
    ugi = 5;  bu kullanımda hata verir, önce tanımlayıp sonra değer atanmaz  */

/* Use const when you declare:
A new Array
A new Object
A new Function
A new RegExp  */

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
/*But you can NOT reassign the array:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; ERROR  */


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";

























// Keyword	    Description
// var	        Declares a variable
// let	        Declares a block variable
// const	    Declares a block constant
// if	        Marks a block of statements to be executed on a condition
// switch	    Marks a block of statements to be executed in different cases
// for	        Marks a block of statements to be executed in a loop
// function	    Declares a function
// return	    Exits a function
// try	        Implements error handling to a block of statements

// keywordler değişken ismi olrak kullanılamaz...!!!
