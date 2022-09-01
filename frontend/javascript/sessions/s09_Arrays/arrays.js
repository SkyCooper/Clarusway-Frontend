// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log("***** ARRAYS ******");

//! array'ler non-primitive dir. içindeki veriler nispeten daha yavaş olan HEAP alanında tutulurken, array adresi daha hızlı çalışan STACK alanında tutulur.

//! const arr = [1,2,3] bu örnekte; array ismi yani adresi olan "arr" STACK'te, içerisinde tuttuğu veriler yani 1,2,3 ise HEAP'te saklanır.

//* Dizi Tanimlama
//* ---------------------------------------------------------
// içerisinde birden fazla veri tuttuğu için array isimleri çoğul olarak verilir.

// ! 1.Yöntem (Array Literal) - Tercih edilen yöntem
const isimler = ["Ahmet", "İsmet", "Can", "canan", "Cooper"];
console.log(isimler);
console.log(typeof isimler); //* object
console.log(isimler.length);

// ! 2.Yöntem (Object Constructor)
const diller = new Array("C++", "javascript", "Assembly", "Go", "Ruby");
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

//! 10 elemanlik bos bir Array oluşturdu, burada tek sayı olursa; bu sayı kadarlık bir boş bir alan oluşturuyor.
const numbers1 = new Array(10);
console.log(numbers1);

//* içine sayı yazılmazsa tek elemanlı array oluşur.
const numbers11 = new Array("deneme");
console.log(numbers11);

// ! 3.Yöntem (Array.of())
//* her iki durumda da tek elemanlı dizi oluşturur.
const veriler = Array.of(10);
console.log(veriler);
const veriler1 = Array.of("deneme");
console.log(veriler1);

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//! Diziden veri okuma
console.log(diller[1]);
const go = diller[3];
console.log(go);

//* son indisi yazdırmak için
console.log(isimler[isimler.length - 1]);

//? at() negatif index kullanılan nadir yerlerden bir tanesi
console.log(isimler.at(-1));

//! Diziye veri yazma;
// const isimler = ["Ahmet", "İsmet", "Can", "canan", "Cooper"];

isimler[1] = "Saffet"; //İsmet olan isim Saffet olarak güncellendi.

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];
//* non-pimitive alanda değişiklik yapılmaz, HEAP'te tutulan primitive alanda değişiklik yapılabilir. let ile tanımlanırsa hata vermezdi.

//? number'ın son elementinin değerini 1 arttır.
console.log(numbers[numbers.length - 1]); // 1
numbers[numbers.length - 1]++;
console.log(numbers); // [3, 2, 2] oldu.

const yaslar = [22, 44, 55];
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar];

console.log(kisiler);

//? kisiler icerisindeki yaslar dizisinde bulunan 55 yasini konsola yazdiriniz.
console.log(kisiler[5][2]);

//? kisiler icerisindeki yaslar dizisinde bulunan 44 yasini bir eksiltiniz.
kisiler[5][1]--;
console.log(kisiler[5][1]); //43

//! JS HAZIR DIZI METOTLARI
// JS’de diziler, Array prototype nesnesinden türemektedir ve içerisinde hazır bir çok metot tanımlanmıştır.
// • Diziyi değiştiren (mutator) metotlar
// • Dizi erişim metotları
// • Dizi iterasyon metotları

//? ===========================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR -- esas diziyi değiştirir.
//? ===========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"];

//* pop() son elemanı siler ve sildigi elemani dondurur.
const silinen = arabalar.pop();
console.log(arabalar, silinen);

//* push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.

const n = arabalar.push("Citroen");
console.log(arabalar, n);

//* unshift dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur.
const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//* dizinin 0. indeks elemanini siler ve silenen elemani dondurur
const audi = arabalar.shift();
console.log(arabalar, audi);

//* splice()
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar);

arabalar.splice(3, 1, "Honda", "Toyota");
console.log(arabalar);

//* Dizinin tamamini ters siraya cevirir.
arabalar.reverse();
console.log(arabalar);

//* sort() Diziyi alfabetik olarak siralar.
isimler.sort();
console.log(isimler);

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir.
const sayilar = [2, 111, 3, 22, 1, 11, 5, 7, 6];
sayilar.sort();
console.log(sayilar);

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a, b) => a - b);
console.log(sayilar);

// sort metodu default olarak array daki elemanları string kabul ederek o şekilde sıralama yapar
//todo, array metodlarının mutate veye does not mutate durumuna dikkat

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1, 2, 4);
console.log(array1);
array1.fill(-1, 1); //* 1. eleman ve sonrasini -1 yap
console.log(array1);

//? ===========================================================
//?  DIZI ERISIM METOTLARI -- diziyi değiştirmaz, elde edilen bilgileri döndürür.
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "üc", "3", "bes", "5", "4", 6];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)); //?true
console.log(sayilar1.includes("5")); //?false

//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.

console.log(sayilar1.indexOf(2)); //? 2
console.log(sayilar1.lastIndexOf(2)); //? 5
console.log(sayilar1.lastIndexOf(4)); //? -1 bulamzsa, yoksa

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------
// const sayilar1 = [3, 5, 2, "2", "üc", 2, "3", "bes", "5"];
let enterNum1 = prompt("Sayı gir1 :");
// let enterNum2 = Number(prompt("Sayı gir2 :"));

if (sayilar1.indexOf(enterNum1) >= 0) {
  console.log(
    `${enterNum1} sayısının tipi ${typeof enterNum1} ve index numarası ${sayilar1.indexOf(
      enterNum1
    )} ayrıca number ${enterNum1} nin index numrası ${sayilar1.indexOf(
      Number(enterNum1)
    )}`
  );
  // console.log(
  //   `${enterNum2} nin tipi ${typeof enterNum2} ve index numarası ${sayilar1.indexOf(
  //     enterNum2
  //   )} ayrıca string ${enterNum2} nin index numrası ${sayilar1.indexOf(
  //     String(enterNum2)
  //   )}`
  // );
} else {
  console.log("Aranan değer bulunamamıştır.");
}

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.
console.log(sayilar1.join("-")); // 3-5-2-2-üc-2-3-bes-5
//* parantez içinde ne varsa onu arasına koyar, hiçbirşey yoksa default virgül koyar.
console.log(sayilar1.join()); //3,5,2,2,üc,2,3,bes,5

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.
console.log(sayilar1.toString());

//* slice()
//*-----------------------------------------------------------
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"];

const yeniArabalar = arabalar1.slice(2); // 2den başla sona kadar bütün elemanları al
console.log(yeniArabalar);
const yeniArabalar1 = arabalar1.slice(1, 3); // 1den başla 3e kadar(dahil değil) elemanları al
console.log(yeniArabalar1);

//* concat()
//*-----------------------------------------------------------
const yazilar = ["Bugün", "hava", "cok", "guzel"];
const numbersArr = [1, 2, 5, 7];
const combinedArr = yazilar.concat(
  true,
  numbersArr,
  ["aslinda", "cok", "sicak"],
  [["x", "y"]]
);
console.log(combinedArr); // sadece dizi değil, içindeki herşeyi concat eder.

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yasArray = [18, 22, 34, 78, 81];
const check = yasArray.every((yas) => yas >= 18);
//* yas dizisi içinde doloş (iterate et) tek tek 18 den büyük mü diye bak, eğer hepsi büyükse (hepsi şartı sağlıyorsa) true döndür, eğer bir tane bile büyük değilse (şartı sağlamıyorsa) false döndür.

console.log(check);
check ? console.log("Herkes 18'den büyük") : console.log("18 yaş altında var");

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 = yasArray.some((yas) => yas >= 80);
console.log(buyuk80);

//todo, burada arrow function yerine klasik fonksiyon tanımlayıp sonra onu some içinde çağırsak da olur.

//* find()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//! yaşı 30'dan büyük olan ilk / son elementi yazdıran kod
// const yasArray = [18, 22, 34, 78, 81];
const buyukIlk30 = yasArray.find((yas) => yas >= 30); //*34
const buyukSon30 = yasArray.findLast((yas) => yas >= 30); //*81

console.log(buyukIlk30, buyukSon30);

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//! yaşı 30'dan büyük olan ilk indisi yazdıran kod

const foundIndex = yasArray.findIndex((yas) => yas >= 30);
console.log(foundIndex); // 2 --> 2nci indexteki 34
