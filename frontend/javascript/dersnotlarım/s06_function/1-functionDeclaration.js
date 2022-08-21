//! 20 Ağustos 2022, Cumartesi
// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

//? Function Declaration Syntax

// function declaration
// function function_name() {
// function body
// }

// function invocation (calling)
// function_name();

//* Example greeting
function greet() {
  console.log("Hello");
} // it will not output until called!
// calling function
greet();
greet();
greet();

//! Classification of Functions
// 1-Named functions
// 2-Function expressions
// 3-Arrow functions
// 4-Immediately Invoked Function Expressions (IIFE)
// Function() constructor(*)
// Generator functions(*)

//! 1-Named Functions (DECLARATION)
console.log(`---Named Functions---`);
// ➤ As the title suggests, regular declaration of a function which has a name, for example greet function in the previous page.

function selamlama() {
  console.log(`Merhaba`);
}
selamlama();

//todo, function declaration yönteminde, fonksiyon derleyici tarafından özel bir bellek bölgesine konulduğu için HOISTING oluyor, yani yukarıda/aşağıda tanımlama bir önem ifade etmiyor. Nerede istersen orada fonksiyonu invoke edebiliriz/ callinga function yapabiliriz.

sayHi();
// function declaration
function sayHi() {
  console.log("Hello Named Function!");
} // Named function declarations are hoisted.

//todo, Returning a value from functions
// simply using return keyword we get an output
// return keyword is used to pass the result at the end of function execution. If it is dismissed or no value passed right after then undefined is returned.
// return keywords ends the further execution of function code.

function sayHi1() {
  return "Hi!";
}
function sayHi2() {
  console.log("Say Hi 2!");
}
sayHi1(); // no output to the console
console.log(typeof sayHi1()); // string
console.log(typeof sayHi1); // function
sayHi2(); // Hello!
console.log(typeof sayHi2()); // undefined
console.log(typeof sayHi2); // function

//todo, Passing values to functions
// ➤ In JavaScript parameters are passed by value, meaning that outer variable will not be changeable inside function body.
function sayHi3(userName) {
  console.log(`Hello! ${userName}`);
}
sayHi3("Mark");
sayHi3(); // what will be the output? --> undefined, çünkü parametresi yok

function sayHi4(userName, company) {
  console.log(`Hello! ${userName} of ${company}`);
  company = "Apple";
  console.log(`Hello! ${userName} of ${company}`);
}
let userName = "Mark";
let company = "Clarusway";
sayHi4(userName, company);
console.log(company);
sayHi4("Matthew"); // what will be the output?

//todo, Object type variables are passed by reference, meaning that, object's attributes can be changed within function body. Be advised that not the object as a whole.

var anObj = { name: "Matthew" };
console.log(anObj);
// {name: "Matthew"} bir obje tanımladı

function changeObj(obj) {
  obj.name = "Mark";
}
changeObj(anObj);
console.log(anObj);
// {name: "Mark"} --> içine aldığı objenin valuesini değiştirdi
// Matthew iken Mark oldu

function changeObj2(obj) {
  obj = { name: "Mike" };
}
changeObj2(anObj);
console.log(anObj);
// {name: "Mark"}  Mike olarak tanımlanan value Mark oldu

//! 🎗️ Note:
// In JavaScript, hoisting is a characteristic that allows you to use a function or variable before declaring it. A function can be called before declaring it. For example,
greet();
function greet() {
  console.log("Greet Hello");
}
// The function 'greet' is called before it is declared in the above program, and the output is displayed. This is because of the hoisting.

// Only declarations are hoisted when a function is used as an expression, hence an error occurs. As an example;
// program to print the text
// greet1();
// let greet1 = function() {
//     console.log('Hello');
// }
//! burada hata verecektir.
// Output: // Uncaught ReferenceError: greet is not defined
// In your program, hoisting can have unfavorable consequences. Also, to avoid hoisting, define variables and functions first before calling them. When dealing with variables, let is preferable to var.

//todo, örnek1
selamYaz(); //*invoke, call, çağırma

function selamYaz() {
  console.log("SELAM");
}

selamYaz(); //*invoke, call, çağırma
selamYaz(); //*invoke, call, çağırma

//? yukarı aşağı fark etmeden 3 kere fonksiyon çalışır.

//todo, örnek2

// (ad, soyad= "noname"); default parametre ayarlandı.
function selamSoyle(ad, soyad = "") {
  console.log(`Merhaba ${ad} ${soyad}`);
}

selamSoyle("Cooper", "Sky");
selamSoyle("Recep", "Sarrafoğlu");
selamSoyle("Recep"); //? eksik argüman olursa çıktısı undefined olur./default yoksa
//? fakat default parametre tanımlanırsa, boş bırakılınca default değer yazılır.

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//todo, örnek3 yas hesaplaması 3 farklı metod ile yapılması

function yasHesapla(isim, dogumTarihi) {
  // const sonuc = `${isim} in yaşı ${2022 - dogumTarihi} dir.`;
  // const sonuc = `${isim} in yaşı ${new Date().getFullYear() - dogumTarihi} dir.`;
  // return sonuc;
  return `${isim} in yaşı ${new Date().getFullYear() - dogumTarihi} dir.`;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
console.log(yasHesapla("Murat Erden", 1999)); //kullanılabilir ama esas amaç DOM'a yani ekrana yazmak

//todo, örnek4 tek/çift hesaplama

function tekCift(sayi) {
  return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} ÇİFTTİR.`;
}

console.log(`Girilen sayı`, tekCift(5));
console.log(tekCift(8));

//todo, örnek4 prompt ile yapılması,

const n = +prompt("Sayı giriniz:");
console.log(tekCift(n));
