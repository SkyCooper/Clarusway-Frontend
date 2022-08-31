//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");
//?-------------- ÖRNEK -------------------
const dizi = [-5, 15, 22, -4, 45, 78];

const negatifler = [];
const pozitifler = [];

const dizelereAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizelereAyir(dizi);

console.log(negatifler);
console.log(pozitifler);
console.log(dizi);

//?-------------- ÖRNEK -------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

const ortalama = (arr) => {
  let toplam = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    toplam += arr[i];
    count++;
  }
  return `Sayıların ortalaması ${toplam / count}`;
};
console.log(ortalama(notlar));

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//?-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//?--------------------------------------------------------

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudent = (arr) => {
//   let name = prompt("İsim girin:").toLowerCase();
//   let counter = 0;
//   for (let i in arr) {
//     if (arr[i] === name) {
//       counter++;
//     }
// arr[i] === name ? counter++ :
//   }
//   if (counter === 0) {
//     // (!counter) aynı sonucu verir.
//     return `${name} is not found`;
//   } else {
//     return `${name} found ${counter} times`;
//   }
// };

// console.log(findStudent(students));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//! yukarıdaki soru for of ile yapılması,
//* in yerine of, indis yerine item kullanılıyor.

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudent = (arr) => {
  let name = prompt("İsim girin:").toLowerCase();
  let counter = 0;
  for (let item of arr) {
    //todo, ternary
    // item === name ? counter++ : null;  //!else tarafında koşul yok ise null yazılabilir.

    //todo, short-circuit yöntemi:
    //? && true ise çalış
    // item === name && counter++ //! tam doğru syntax karşılığı budur, true ise yap yoksa bişey yok
    //? || false ise çalışır
    // item === name || counter--

    if (item === name) {
      counter++;
    }
  }

  //   return !counter ? `${name} is not found` : `${name} found ${counter} times`;

  if (!counter) {
    // yok ise false ise demek;
    return `${name} is not found`;
  } else {
    return `${name} found ${counter} times`;
  }
};

console.log(findStudent(students));
