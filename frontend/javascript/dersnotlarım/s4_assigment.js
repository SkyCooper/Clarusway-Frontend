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
if (gun === "Pazartesi" || gun === "Salı" || gun === "Çarşamba" || gun == "Perşembe") {
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

// //? 1nci çözüm
// if (maas<asgariUcret) {
//     zam = maas*1.5;
// } else {
//     zam = maas*1.1
// }
// console.log(`Maasınıza ${(zam-maas).toFixed()} lira zam yapılmıştır, yeni maaşınız ${zam} liradır.İf/Else`);


// //?2nci çözüm - switchCase
// switch (true) {
//     case (maas<asgariUcret) : zam = maas*1.5; break;
//     default: (zam = maas*1.1);
// }
// console.log(`Maasınıza ${(zam-maas).toFixed()} lira zam yapılmıştır, yeni maaşınız ${zam} liradır.SwitchCase`);



//?3ncü çözüm-ternary
maas<asgariUcret ? zam = maas*1.5 : zam = maas*1.1 ;
console.log(`Maasınıza ${(zam-maas).toFixed()} lira zam yapılmıştır, yeni maaşınız ${zam} liradır.Ternary`);


//! ODEV4: Kredi Risk Programı
// Console’dan kişinin gelir ve gider miktarını alan
// eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
// değilse Kredi Verilemez 🥺
// şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

const gelir = Number(prompt("Gelirinizi girin:", 22000));
const gider = +prompt("Giderinizi yazın:", 12000);
const ucret = parseInt(5500);

//? 1nci çözüm
const risk = (gelir-gider)>=ucret ? "Risk yok, kredi alabilirsiniz 🤑" : "Maalesef krediye uygun değil, Risk var 🤬";
console.log(risk);


//?2nci çözüm
switch(true){
    case ((gelir-gider) >= ucret) : console.log(`kredi alabilirsiniz 😎`); break;
    case ((gelir-gider) < ucret)  : console.log(`Üzgünüm risk tespit edildi 😥`); break;
    default : console.log(`Yardımcı olamadım`);
}