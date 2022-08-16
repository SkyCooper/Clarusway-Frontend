//! ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)
const numberOne = +prompt("Number 1", 8);
const numberTwo = +prompt("Number 2", 5);
const operator = prompt("Enter + - * / ", "*");

//? 1nci çözüm
if (operator === "*") {
  execute = numberOne * numberTwo;
} else if (operator === "+") {
  execute = numberOne + numberTwo;
} else if (operator === "-") {
  execute = numberOne - numberTwo;
} else if (operator === "/") {
  execute = numberOne / numberTwo;
} else {
  execute = "You enter invalid operator";
}
console.log(`Answer is : ${execute}`);


//? 2nci çözüm
switch (operator) {
  case "*":
    execute = numberOne * numberTwo;
    break;
  case "+":
    execute = numberOne + numberTwo;
    break;
  case "-":
    execute = numberOne - numberTwo;
    break;
  case "/":
    execute = numberOne * numberTwo;
    break;
  default:
    execute = "You enter invalid operator";
}
console.log(
  `Switch Answer is : ${numberOne} ${operator} ${numberTwo} = ${execute}`
);


//! ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.
// Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
// Cuma -> Teamwork
// Cumartesi ->  InClass + Workshop
// Pazar -> Self-Study
// Aksi takdirde -> Yanlis gun girildi.

const gun = prompt("Haftanın gününü yazınız: ", "Cumartesi");

//?1nci çözüm- switchCase
switch (gun) {
  case "Pazartesi":
  case "Salı":
  case "Çarşamba":
  case "Perşembe":
    etkinlik = "Inclass";
    break;

  case "Cuma":
    etkinlik = "Teamwork";
    break;

  case "Cumartesi":
    etkinlik = "InClass + Workshop";
    break;

  case "Pazar":
    etkinlik = "Self-Study";
    break;

  default:
    etkinlik = "Yanlis gun girildi";
    break;
}

console.log(`Bugün planlı etkinlik : ${etkinlik}`);


//?2nci çözüm - if/Else
if (
  gun === "Pazartesi" ||
  gun === "Salı" ||
  gun === "Çarşamba" ||
  gun == "Perşembe"
) {
  console.log("Bugün planlı etkinlik Inclass");
} else if (gun === "Cuma") {
  console.log("Bugün planlı etkinlik Taemwork");
} else if (gun === "Cumartesi") {
  console.log("Bugün planlı etkinlik InClass ve Workshop");
} else if (gun === "Pazar") {
  console.log("Bugün planlı etkinlik yok Self-Study yapın");
} else {
  console.log("Yanlis gun girildi");
}


//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
//! asgari ücret 5500 olarak alınacaktır.

const asgariUcret = 5500;
const maas = parseInt(prompt("Maasınız girin", 5000));

//? 1nci çözüm
if (maas<asgariUcret) {
    zam = maas*1.5;
} else {
    zam = maas*1.1
}
console.log(`Maasınıza ${(zam-maas).toFixed()} lira zam yapılmıştır, yeni maaşınız ${zam} liradır.İf/Else`);

//?2nci çözüm - switchCase
switch (true) {
    case (maas<asgariUcret) : zam = maas*1.5; break;
    default: (zam = maas*1.1);
}
console.log(`Maasınıza ${(zam-maas).toFixed()} lira zam yapılmıştır, yeni maaşınız ${zam} liradır.SwitchCase`);

//?3ncü çözüm-ternary
maas < asgariUcret ? (zam = maas * 1.5) : (zam = maas * 1.1);
console.log(
  `Maasınıza ${(
    zam - maas
  ).toFixed()} lira zam yapılmıştır, yeni maaşınız ${zam} liradır.Ternary`
);

//! ODEV4: Kredi Risk Programı
// Console’dan kişinin gelir ve gider miktarını alan
// eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
// değilse Kredi Verilemez 🥺
// şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gelir = Number(prompt("Gelirinizi girin:", 22000));
const gider = +prompt("Giderinizi yazın:", 12000);
const ucret = parseInt(5500);

//? 1nci çözüm
const risk =
  gelir - gider >= ucret
    ? "Risk yok, kredi alabilirsiniz 🤑"
    : "Maalesef krediye uygun değil, Risk var 🤬";
console.log(risk);


//?2nci çözüm
switch (true) {
  case gelir - gider >= ucret:
    console.log(`kredi alabilirsiniz 😎`);
    break;
  case gelir - gider < ucret:
    console.log(`Üzgünüm risk tespit edildi 😥`);
    break;
  default:
    console.log(`Yardımcı olamadım`);
}




//todo, YANSILARDAKİ İLAVE ÖDEV SORULARI

//! Soru 1 Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız
// 0 25 arası  FF
// 26 45 arası DD
// 46 65 arası CC
// 66 75 arası BB
// 76 90 arası BA
// 91 100 arası AA olarak çevrilmelidir
// 100 ’den büyük veya 0 ‘dan küçük değerlerde hata mesajı verecektir

const not = Number(prompt("Sınav notunu giriniz:", 72));
if (not>0 && not<= 25) {
  harf = "FF";
} else if (not>26 && not<=45) {
  harf = "DD";
} else if (not>46 && not<=65) {
  harf = "CC";
} else if (not>66 && not<=75) {
  harf = "BB";
} else if (not>76 && not<=90) {
  harf = "BA";
} else if (not>91 && not<=100) {
  harf = "AA";
} else if (not<=0 || not>100) {
  harf = "Yanlış giriş yapıldı";
}
console.log(`${not} karşılığı ${harf}`);

//! Soru 2 Girilen ay ismine karşılık gelen sıra numarası veren programı switch case yapısı kullanarak yazınız

const ay = prompt("Ay ismini yazınız:").toLowerCase();

switch (ay){
  case "ocak" : ayNUmarasi = 1; break;
  case "subat" : ayNUmarasi = 2; break;
  case "mart" : ayNUmarasi = 3; break;
  case "nisan" : ayNUmarasi = 4; break;
  case "mayis" : ayNUmarasi = 5; break;
  case "haziran" : ayNUmarasi = 6; break;
  case "temmuz" : ayNUmarasi = 7; break;
  case "agustos" : ayNUmarasi = 8; break;
  case "eylul" : ayNUmarasi = 9; break;
  case "ekim" : ayNUmarasi = 10; break;
  case "kasim" : ayNUmarasi = 11; break;
  case "aralik" : ayNUmarasi = 12; break;
  default : ayNUmarasi = "hatali giriş";
}

console.log(`Giriline ay ismi ${ay} : sıra numarası ${ayNUmarasi}`);


//! Soru 3 Girilen farklı 3 tamsayının toplamını çarpımını en küçüğünü ve en büyüğünü yazdıran programı yazınız
const n1 = +prompt("Tam sayı-1:", 12);
const n2 = Number(prompt("Tam sayı-2:", 8));
const n3 = parseInt(prompt("Tam sayı-3:", 17));

const toplami = n1+n2+n3;
const carpimi = n1*n2*n3;

if(n1>n2 && n1>n3){
  enBuyuk = n1;
} else if (n2>n1 && n2>n3){
  enBuyuk = n2;
} else {
  enBuyuk = n3;
}


if(n1<n2 && n1<n3){
  enKucuk = n1;
} else if (n2<n1 && n2<n3){
  enKucuk = n2;
} else {
  enKucuk = n3;
}

console.log(`Girilen sayılar : ${n1} ${n2} ${n3}`);
console.log(`Toplamları : ${toplami}, çarpımları : ${carpimi}`);
console.log(`En büyük sayı : ${enBuyuk}, En küçük sayı : ${enKucuk}`);



//! Soru 4 Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız (Ternary deyimi ile yapınız)

const denemeSayi = prompt("Sayınızı yazın:", 8);
const sonucA = (denemeSayi%2 === 0) ? "Çifttir." : "Tektir.";
console.log(`Girilen sayi ${denemeSayi} sayısı ${sonucA}`);



//! Soru 5 Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı tasarlayınız Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.

const celcius = +prompt("Give me celcius :");
const fahrenheit = +prompt("Give me fahrenheit :");
console.log(`${celcius} °C is ${(celcius * 1.8 + 32)} °F`);
console.log(`${fahrenheit}  °F is ${((fahrenheit - 32) / 1.8)} °C`);