// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 2.YONTEM  : FUNCTION EXPRESSION
//!--------------------------------------------------

//!  2-Anonymous functions (EXPRESSİON)

//todo, önce fonksiyom tanımlanıp sonra çağırılması gerekir, ve değişkene atanarak kullanılır. Daha temiz/anlaşılır kod yazmaya fayda sağlar.

//* Named function
function sayHi5() {
  return "Hi5 Hello!";
}
sayHi5();

// Anonymous function --> return olduğundan çıktısı yok
const sayHi6 = function () {
  return "Hi6 Hello!";
};
sayHi6(); //çıktı vermez
console.log(sayHi6()); // Hi6 Hello! çıktısını verir.

//* anonymous function expression
const sayHi7 = function () {
  console.log("Hello!");
  console.trace();
};
// named function expression
const sayHi8 = function greett() {
  console.log("Hello!");
  console.trace();
};
sayHi7();
sayHi8();

//! Note:
// Function expressions in JavaScript are not hoisted, unlike function declaration. You can't use function expressions before you create them:
// If you declare a named function expression. This name is then local only to the function body (scope). This is used for debugging and required in ES5 only

//TODO, TEKCİFT expression yöntemi ile yapılması

// function tekCift(sayi) {
//   return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} ÇİFTTİR.`;
// }

//* console.log(tekCift1(5)); tanımlamadan önce çağırılırsa hata verir.

const tekCift1 = function (sayi) {
  return sayi % 2 ? `${sayi} TEKTİR` : `${sayi} ÇİFTTİR.`;
};

console.log(tekCift1(5));

//TODO, girilen 3 sayının en büyüğünü bulan kod

//* bu örnek için default olrak 0 girilmez, eksi sayılardan büyük olacağı için sonuç yanlış olur. ( Number.MAX_VALUE kullanılabilir. başına eksi koyarak,  Number.MİN_VALUE  eksi değildir, 0,000000gibi en küçük pozitif sayıdır. )

const buyukBul = function (n1, n2, n3) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

const n1 = +prompt("Sayi1:");
const n2 = +prompt("Sayi2:");
const n3 = +prompt("Sayi3:");

console.log("Girilen syıların en büyüğü: ", buyukBul(n1, n2, n3));
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//? Daha önceden if/else ile yapılmış hali
// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }