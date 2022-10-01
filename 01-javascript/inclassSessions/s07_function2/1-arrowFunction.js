// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 3.YONTEM  : ARRAY FUNCTION
//!--------------------------------------------------

//! 3-Arrow Functions

// SINGLE-LINE BLOCK
// const sumNumbers = number => number +number;

// MULTI-LINE BLOCK
// const sumNumbers = number => {
//     const sum = number +number;
//     return sum;
// }

// Regular Function
let aa = 4;
let bb = 2;
function f1() {
  return aa + bb + 100;
}
console.log(f1()); // 4+2+100=106

let hundredify = (a, b) => a + b + 100;
console.log(hundredify(4, 2)); // 4+2+100=106

//! Differences & Limitations:
// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have arguments, or new.target keywords.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.

//! Immediately Invoked Function Expressions (IIFE)
// ➤ Sometimes you don't want to have your function accessible/stored as a variable. You can create an Immediately Invoked Function Expression (IIFE for short). These are essentially self-executing anonymous functions. They have access to the surrounding scope, but the function itself and any internal variables will be inaccessible from outside.

// ➤ An important thing to note about IIFE is that even if you name your function, IIFE are not hoisted like standard functions are and cannot be called by the function name they are declared with.

// named IIFE recursive
(function trian(num) {
  if (num === 1) return 1;
  return num + trian(num - 1);
})(3);
// with anonymous function expression non recursive
(function (num) {
  return (num * (num + 1)) / 2;
})(3);

//todo, Default Parameters
// ➤Default parameters allow you to set a default value for a parameter in a function. For example, if you have a function that takes a parameter called name, you can set a default value for the parameter in the function definition:
function greet3(name = "Guest") {
  console.log(`Hello greet3 ${name}`);
}
greet3(); // Hello Guest
greet3("John"); // Hello John

//todo, Function Scope
// ➤ Every function has a scope. Everything defined within the function is not accessible by code outside the function. Only code within this scope can see the entities defined inside the scope.

let num1 = 10;
var num2 = 20;
console.log("at the global scope");
console.log({ num1, num2 });
func1();
console.log({ num1, num2 });
// console.log({ num3, num4 });  //! Uncaught ReferenceError: num3 is not defined

// function declaration
function func1() {
  let num1 = 101;
  let num2 = 102;
  var num3 = 103;
  console.log("..inside func1");
  if (num1 < num2) {
    console.log("inside if block");
    let num1 = 201;
    // var num2 = 205;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
    // let num3 = 206;
    var num4 = 204;
    num1++;
    num2++;
    num3++;
    num4++;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
  }
  console.log("after if block");
  num3++;
  num4++;
  console.log({ num1, num2 });
  console.log({ num3, num4 });
}

// Functions can be nested inside function body, js is lexically scoped, therefore caution to the scope!

function sameLevel2() {
  let a = 10;
  b = 20;
  console.log({ a, b });
}
function sameLevel1() {
  let a = 30;
  let b = 8;
  console.log({ a, b });
  sameLevel2();
}

let b = 5;
sameLevel1();
console.log({ b });

function outerLevel() {
  let a = 30;
  let b = 8;
  console.log({ a, b });
  innerLevel();
  function innerLevel() {
    let a = 10;
    b = 20;
    console.log({ a, b });
  }
  console.log({ b });
  b = 5;
  console.log({ b });
}
console.log({ b });

//todo, This Keyword
// ➤ The reserved keyword this refers to a method’s calling object, and it can be used to access properties belonging to that object. Here, using the this keyword inside the object function to refer to the cat object and access its name property.

const cat = {
  name: "Kitty",
  age: 8,
  whatName() {
    return this.name;
  },
};
console.log(cat.whatName()); // Output: Kitty

// this in a function

// ➤ Every JavaScript function or method has a this context. For a function defined inside of an object, thiswill refer to that object itself. for a function defined outside of an object, thiswill refer to the global object (window in a browser, globalin Nodejs and globalThis for both to always point to global object).

const school = {
  numStudents: 45,
  maxCapacity: 100,
  availableQuota() {
    // this refers to the school object
    // and it's used to access its properties
    return this.maxCapacity - this.numStudents;
  },
};
console.log(school.availableQuota());

// Arrow functions do not have their own this context.

//todo, inclass

//todo, ÖRNEK-1 silindir hacmini hesaplayan kod.
// const r = +prompt("yarıçap giriniz:");
// const h = Number(prompt("yükseklik giriniz:"));

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r} , ${h} => Hacmi : ${hacimHesapla(r, h).toFixed(2)}`);

//todo, ÖRNEK-2 Doğum tarihini parametre olarak alan ve ana programa yaşı hesaplayıp döndüren fonksiyonu yazınız

// const tarih = Number(prompt("Doğum tarihin giriniz:"));

// //!Arrow func
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// // kısa yazılmış syntax
// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// console.log(`Doğum tarihi : ${tarih} , Yaşınız: ${yasHesapla(tarih)}`);
// //? console.log("YASINIZ:" + yasHesapla2(tarih));
//Funct expression ve arrow func yontemlerinde
// Once fonks tanimlanmalidir sonra cagrilmalidir.
// Aksi takdirde hata alırsiniz.

// //?-----------------------------------------

// //!Function Expression --> syntax tek satırlık değilse çok benziyor.
// const yasHesapla2 = function(tarih){
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// //?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla3(tarih));
// // taımlamadan önce çağırmada hata vermez.

// //! Func Declaration yontemi ile tanimlama
// function yasHesapla3(tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// }

//todo, ÖRNEK-3
//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// fibonacci →  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//*  Girilen n. terime kadar Fibonacci sayılarının toplamini hesaplayarak yazdiran fonksiyonu Donguler ile kodlayiniz.

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;

  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    // çözümde değişkenleri güncelleyerek yaptı, //!shifting yaptı.
    console.log(toplam);
    // bütün toplamları konsolda tek tek ygörmek için
  }
  return fib2;
};

// let stringResult = "1,1";
// // f(n) = f(n-1) + f(n-2)
// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let toplam = 0;

//   for (let i = 2; i < n; i++) {
//     toplam = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = toplam;
//     stringResult += "," + fib2;
//   }

//   return fib2;
// };

const n = +prompt("n sayısını girin");
if (n <= 0) {
  console.log("Sıfırdan büyük bir sayı giriniz");
} else {
  console.log(`FIBO(${n}) = ${fibo(n)}`);
}
