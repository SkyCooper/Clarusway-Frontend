//! Bir dizideki pozitif ve negatif sayıların toplamını hesaplayan uygulamayı For döngüsü ile yazınız topla adında bir fonksiyonda hesaplamayı yapınız

const dizi = [-5, 15, 22, -4, 45, -7];

// let negatif = 0;
// let pozitif = 0;
// for(let i=0; i<dizi.length; i++){
//     if (dizi[i] < 0){
//         negatif += dizi[i];
//     }else{
//         pozitif += dizi[i];
//     }
// }

// console.log(`Negatif sayılar toplamı : ${negatif}, pozitif sayılar toplamı : ${pozitif}`);

const topla = (arr) => {
  let negatif = 0;
  let pozitif = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negatif += arr[i];
    } else {
      pozitif += arr[i];
    }
  }
  console.log(
    `Negatif sayılar toplamı : ${negatif}, pozitif sayılar toplamı : ${pozitif}`
  );
};

topla(dizi);

//! Bir dizideki tüm elemanların toplamını bulan programı FOR IN ile yazınız.

//* for ile;
let toplam = 0;
for (let i = 0; i < dizi.length; i++) {
  toplam += dizi[i];
}
console.log(`Toplam for: `, toplam);

//* for in ile;
toplam = 0;
for (let i in dizi) {
  toplam += dizi[i];
}
console.log(`Toplam for IN : `, toplam);

//! İki ayrı dizideki eşleşen indis elemanları birleştirerek ayrı bir diziye saklayan uygulamayı FOR IN ile yazınız

const adlar = ["Ahmet", "Can", "Mustafa", "Ayşe", "Elif"];
const soyAdlar = ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

let adSoyad = [];
for (let i in adlar) {
  adSoyad[i] = adlar[i] + " " + soyAdlar[i];
}
console.log(`Ad Soyad birleşimi : `, adSoyad);

const birlestir = (arr1, arr2) => {
  let adSoyad = [];
  for (let i in arr1) {
    adSoyad[i] = arr1[i] + arr2[i];
  }
  console.log(`Ad Soyad birleşim fonksiyon ile : `, adSoyad);
};

birlestir(adlar, soyAdlar);

//! Dizideki elemanları birleştirerek tek bir String haline getiren uygulamayı FOR OF ile yazınız

let arabalar = ["BMW", "Volvo", "Mini"];

let yazi = "";

for (let item of arabalar) {
  yazi += item + " ";
}
console.log(yazi);
