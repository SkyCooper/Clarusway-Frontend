// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let sayi1 = 5; //*global scope
console.log(sayi1);

const fonks1 = function () {
  sayi1 = 22; //* sayi1 in değeri değişti
  console.log(sayi1); //*22
};
fonks1();

console.log(sayi1++); //22
console.log(sayi1); //23

console.log(++sayi1); //24
console.log(sayi1); //24
console.log(sayi1++); //24

//!--------------------------

let sayi2 = 7;
console.log(sayi2);

const fonks2 = function () {
  let sayi2 = 11; //*function scope
  console.log(sayi2); //*11
};

fonks2();
console.log(sayi2++); //7

//!--------------------------

if (sayi2 === 8) {
  let sonuc = "Merhaba";
} else {
  sonuc = "Nasilsin"; //! Hoisting oluyor, yani degisken global hale geliyor.
  // console.log(sonuc);
}

console.log(sonuc);
