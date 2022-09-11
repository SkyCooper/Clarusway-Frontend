//todo, ihsan hoca workshop

//! fonksiyon ile yapılmış çözüm;

let isimler = "";
function notVer() {
  let sayacIsim = Number(prompt("Kaç öğrenci verisi gireceksiniz : "));
  for (let i = 1; i <= sayacIsim; i++) {
    let sayacNot = Number(
      prompt(`${i}. öğrenci kaç adet adet not gireceksiniz`)
    );
    let isim = prompt("öğrenci ismini giriniz : ");
    let toplam = 0;
    let ort = 0;
    for (let i = 1; i <= sayacNot; i++) {
      let not = Number(prompt(`${isim} için ${i}. notunu giriniz :`));
      toplam += not;
    }
    ort = toplam / sayacNot;
    isimler += isim + " = " + ort + "     ";
  }
  console.log(isimler);
}
function notSorgula(isim, isimler) {
  if (isimler.search(isim) != -1) {
    console.log(
      isimler.slice(
        isimler.search(isim),
        isimler.search(isim) + isim.length + 6
      )
    );
  } else {
    console.log("Yanlış isim girildi...");
  }
}
while (true) {
  let menü = prompt("1 - öğretmen menü\n2 - öğrenci menü\n 0 - exit");
  if (menü == "1") {
    notVer();
  } else if (menü == "2") {
    let isim = prompt("Lütfen isminizi giriniz : ");
    notSorgula(isim, isimler);
  } else if (menü == "0") {
    break;
  }
}

// //! fonksiyonsuz çözüm;

// let isimler = "";
// while (true) {
//   let menu = prompt(
//     "1 - Ogretmen menu\n2 - Ogrenci menu\n 0 - Exit\n(ogrenci menude notların gorünebilmesi icin ogretmen menuden notların girilmesi gerekir...)"
//   );

//   if (menu == 0) {
//     break;
//   } else if (menu == 1) {
//     let sayac = +prompt("kac adet ogrenci verisi gireceksiniz : ");
//     let isim = "";
//     for (let i = 1; i <= sayac; i++) {
//       isim = prompt(`${i}. ogrenci ismini giriniz : `);
//       if (i == 1) {
//         isimler = isim + " = ";
//       } else {
//         isimler += "     " + isim + " = ";
//       }
//       let sayac2 = +prompt(`${isim} icin kac adet not gireceksiniz : `);
//       let not = 0;
//       let ort = 0;
//       let etki = 0;
//       for (let j = 1; j <= sayac2; j++) {
//         not = +prompt(`${j}. notu giriniz : `);
//         etki = +prompt(`bu not yuzde kac etkili(0-100 arası rakam yazınız) : `);
//         ort += (not * etki) / 100;
//       }
//       isimler += ort;
//       console.log("ogrenci isimleri ve notlari basariyla eklendi...");
//     }
//     // console.log(isimler);
//   }
//   if (menu == 2) {
//     let name = prompt("Lutfen aradıgınız ismi giriniz : ");
//     let index = isimler.search(name);
//     if (index != -1) {
//       console.log(isimler.slice(index, index + 6 + name.length));
//     } else {
//       console.log("kayit bulunamadi....");
//     }
//   }
// }
