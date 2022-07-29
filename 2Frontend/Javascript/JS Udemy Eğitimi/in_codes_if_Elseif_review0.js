"use strict";

// 29 Temmuz 2022, Cuma

/*
if (koşul) {}
else if (koşul) {}
else {} 

if den sonra mutlaka koşul parantez içine yazılır ve ; kullanmadan süslü parantez açılır
veya parantez içine sadece boolen değer yazılır
else if aynı syntaxla yazılır, elif değil
else bloğunda herhangi bir koşul belirtmeden sadece süslü parantez açılır.

// böylede hata vermeden çalışır.
if (koşul) {
} else if (koşul) {
} else {
} 


// veya böylede çalışır. boşluklar önemsizdir.
if (koşul) {


}

else if (koşul) {

}

else {

} 
*/




// karşılaştırma yapmak için (===) operatörünü kullanmak daha doğru sonuç verecektir.

console.log("--if kullanımı--");
//tek satırda,


//çoklu satırda,


// if ten sonra sadece tek satırlık kod yazılacaksa süslü paranteze gerek yok, ama yine if ten sonra ; kullanılmaz.



// koşul olarak boolen değer kullanma;


// parantez içi zaten boolen bir değere sahip olduğu için direk kullanılabilir.
// Aslında ikiside aynıdır,



console.log("--if/else kullanımı--");




// let benimYasim = 31, onunYasi =25;       //tek satırda tanımlama yapıldı. 
// console.log("Benim yaşım: " + benimYasim + " Onun yaşı: " + onunYasi);
// console.log(`Benim yaşım: ${benimYasim} Onun yaşı: ${onunYasi}`);

// if (benimYasim < onunYasi) {             // 31<25 false olduğundan if çalışmaz
// console.log("Ben senden küçüğüm"); 
// } 
// else {                                   // else çalışır.
//     console.log("Ben ondan büyüğüm");
// }


console.log("--if/else if/else kullanımı--");




// let x = 10; y = 20;  z = 2;

// if (x%2 > y%2) {console.log("x tek y ise çifttir.");} 
// else if(x%2 < y%2) {console.log("x çift y ise tektir.");} 
// else if(x === y) {console.log("x ve y değer ve tip olarak eşittir.");} 
// else if(y/2 === x) {console.log("y/2 ve x değer ve tip olarak eşittir.");} 
// else { console.log("Hiçbir koşul doğru değildir.");}




console.log("--iç içe if kullanımı--");


/*
if (koşul) {
    if (koşul)
    console.log()
}
else {
    console.log()
}
*/




// let sayi1 = 10, sayi2 = 20;
// if (sayi1 > sayi2) {

//     if (sayi2 > 20)
//         console.log("Sayı1 hem sayı2 den hemde 20den büyüktür.");
//     }
//     else {
//         console.log("Else çalışır");       
// }



// ilave koşul ekleme,



// koşul arttırma ve else if ekleme




console.log("--undefined kullanımı--");





console.log("--Ternary ile kullanım--");



// TERNARY YAPI ile aynısının yazılması

// (a>b ise) ? (true) : (false)
// bunun okunuşu, eğer a>b ise(?) c=a+b olsun, değilse(:) c=a-b olsun demektir.



console.log("--SWITCH CASE KULLANIMI--" );

console.log("-----iç içe if else if kullanımı-----" );




console.log("----switch case ile------" );



//  case'ler if/else if gibi kullanılır, hangi case ise onu yap demektir, default ise else gibi kullanılır (şart yazılmaz). eğer break kullanılmazsa case çalışır ve diğer case' geçer.


 
// ternary gösterimi,

