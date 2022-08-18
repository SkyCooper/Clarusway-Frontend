//!Soru1
// Girilen 3 sayının ortalamsını alan kodu yazın

// let birinciSayi = +prompt("Say1:", 8);
// let ikinciSayi = +prompt("Say2:", 12);
// let ucuncuSayi = +prompt("Say1:", 10);
// console.log(`Girilen 3 sayının ortalaması ${(birinciSayi+ikinciSayi+ucuncuSayi)/3}`);

//!Soru2
// Klavyeden kenar uzunlukları girilen üçgenin çeşidini veren kodu yazın

// let kenar1 = +prompt("Kenar1", 8);
// let kenar2 = +prompt("Kenar2");
// let kenar3 = +prompt("Kenar3");

// if (kenar1 === kenar2 && kenar1 === kenar3){
//     alert("Eşkenar üçgen");
// } else if (kenar1 !== kenar2 && kenar1 !== kenar3 && kenar2 !== kenar3){
//     alert("Çeşitkenar");
// } else {
//     alert("ikizkenar");
// }

//!Soru3
// Klavyeden vize ve final notlarını alın, geçme notu 50, viz%40 final%60 geçerlidir.

// let vize = Number(prompt("Vize notu:", 50));
// let final = Number(prompt("Final notu:", 50));

// let ortalama = vize*0.4 + final*0.6;
// if (ortalama >= 50) {
//     alert("Geçtiniz, ortalamanız, " + ortalama)
// } else {
//     alert("Kaldınız, ortalamanız, " + ortalama)
// }

//!Soru4
// kendi adınız ekran 5 kere yazdıran kodu tüm döngülerle yazın,

// for (let i = 0; i < 5; i++) {
//   console.log(i + 1 + " cooper, for");
// }

// let sayac1 = 0;
// while (sayac1 < 5) {
//   console.log(sayac1 + 1 + " cooper, while");
//   sayac1++;
// }

// let sayac2 = 0;
// do {
//     console.log(sayac2 + 1 + " cooper, do-while");
//     sayac2++;
// } while (sayac2 < 5);

//!Soru5
// 1-100 arasındaki sayılar toplamını bulan kodu yazın

// let toplam = 0;

// for (let i =1; i<100; i++) {
//     toplam += i;
// }
// console.log(`1-100 arasındaki sayılar toplamı : ${toplam}`);

//!Soru6
// 1-10 arasındaki sayıları sırayla aralarında virgül ile yazan for döngüsü kodu

// let yazilacakMetin = "";
// for (let i = 1; i <= 10; i++) {
//   if (i !== 10) {
//     yazilacakMetin += i + " , ";
//     //!console.log(yazilacakMetin); döngü içinde olursa her seferinde yazar.
//   } else {
//     yazilacakMetin += i;
//   }
// }
// console.log(yazilacakMetin);

//!Soru7
// girilen sayının faktöriyelini bulan kod

// let girilenSayi = parseInt(prompt("Faktöriyel için sayı girin", 5));
// let faktoriyel = 1;
// for(let i = 1; i<=girilenSayi; i++){
// faktoriyel *= i;
// }

// alert(`Girilen ${girilenSayi} sayısının faktoriyeli ${faktoriyel}`)

//!Soru8
// x ve y değerlerini alarak, f(x,y) fonksiyonunu hesaplayan kodu yazın
// x>0 y<0 ise  f(x,y)= 4x+2y+4
// x>0 y=0 ise  f(x,y)= 2x-y+3
// x<0 y>0 ise  f(x,y)= 3x+4y+3

// let x = parseInt(prompt("x değerini gir: "));
// let y = parseInt(prompt("y değerini gir: "));
// let islemSonucu = 0;

// if (x > 0 && y < 0) {
//   islemSonucu = 4 * x + 2 * y + 4;
// } else if (x > 0 && y == 0) {
//   islemSonucu = 2 * x - y + 3;
// } else if (x < 0 && y > 0) {
//   islemSonucu = 3 * x + 4 * y + 3;
// }
// console.warn(islemSonucu);

//!Soru9
// Çarpım tablosu oluşturan kodu yaz

//? alt alta yazan çözüm
// let result;
// for (let i = 1; i<=10; i++) {
//     for (let j = 1; j<=10; j++){
//         result = i * j;
//         console.log(`${i} x ${j} = ${result}`);
//         if(j===10) {console.log("------");}
//     }
// }

//? yan yana yazan çözüm;
// let yazilacakislem = "";
// for (let i = 1; i<=10; i++) {
//     for (let j = 1; j<=10; j++){
//         yazilacakislem += (`${i} x ${j} = ${i*j}`); 
//         if(j===10) {console.log("------");}  //?çıkarılabilir.
//     }
//     console.log(yazilacakislem);
    
//     yazilacakislem = "";
// }



//!Soru10
// Sayı tahmin oyunu (1-100 arasında)
 let uretilenSayi = Math.round(Math.random()*101);
 console.log("Üretilen Sayı : " + uretilenSayi);


 let tahmin = -1;
 while (tahmin != uretilenSayi) {

   tahmin = parseInt(prompt("Bir sayi girin:"));

 }