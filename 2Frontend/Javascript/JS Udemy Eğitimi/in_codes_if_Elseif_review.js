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

const firstName = 'Cooper';
const lastName = 'Sky';
const age = 18;
const isStudent = true;
const school = 'univercity';

// karşılaştırma yapmak için (===) operatörünü kullanmak daha doğru sonuç verecektir.

console.log("--if kullanımı--");
if (firstName == 'Cooper'){console.log("Merhaba Cooper")}

if (lastName === 'Sky'){
    console.log("Merhaba Sky")
}

// if ten sonra sadece tek satırlık kod yazılacaksa süslü paranteze gerek yok, ama yine if ten sonra ; kullanılmaz.

if (age === 18) console.log("18 yaşında");

// koşul olarak boolen değer kullanma;

if (isStudent){
    console.log("Merhaba öğrenci1");
}

if (isStudent===true){
    console.log("Merhaba öğrenci2");
}

if (isStudent===false){
    console.log("Merhaba öğrenci3");
}

if (true){
    console.log("Merhaba öğrenci4");
}


console.log("--if/else kullanımı--");

if (isStudent){
    console.log("Merhaba öğrenci1");
} else {
    console.log("Lütfen Okula Kayıt olun");
}

if (isStudent === false){
    console.log("Merhaba öğrenci1");
} else {
    console.log("Lütfen Okula Kayıt olun");
}


console.log("--if/else if/else kullanımı--");

if (age<18) {
    console.log("18 yaşından küçük");
} else if (age === 18) {
    console.log("18 yaşında");
} else {
    console.log("18 yaşından büyük");
}



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


if (age>=18) {
    if (school === 'univercity') {
        console.log("Tebrikler, Ehliyet alabilirsiniz");
    } else {
        console.log('Eğitim durumu yetersiz');
    }
} else {
    console.log("Ehliyet alamazsınız");
}

// ilave koşul ekleme,
if (age>=18) {
    if ((school === 'univercity') || (school === 'high school')) {
        console.log("Tebrikler, Ehliyet alabilirsiniz");
    } else {
        console.log('Eğitim durumu yetersiz');
    }
} else {
    console.log("Ehliyet alamazsınız");
}

// koşul arttırma ve else if ekleme
if (age > 0 && age<12) {
    console.log("Çocuk");
} else if (age >= 13 && age <= 19) {
    console.log("Ergen");
} else {console.log("Yetişkin");}


console.log("--undefined kullanımı--");
let id;
// number string null undefined

if (typeof id !== 'undefined') {
    console.log("id: " + id);
} else {
    console.log(" No id");

}



console.log("--Ternary ile kullanım--");

let a = 10, b = 5, c = 0;
if (a > b) {        //  burası true olduğundan
    c = a + b;      //  bu kod çalışır 10+5=15
} else {
    c = a - b;
}

console.log("c'nin değeri: " + c);

// TERNARY YAPI ile aynısının yazılması

c = (a > b) ? (a + b) : (a - b);
console.log("c'nin yeni değeri: " + c);
// (a>b ise) ? (true) : (false)
// bunun okunuşu, eğer a>b ise(?) c=a+b olsun, değilse(:) c=a-b olsun demektir.



console.log("--SWITCH CASE KULLANIMI--" );

console.log("-----iç içe if else if kullanımı-----" );

let haftaninKacinciGunu = 1;

if (haftaninKacinciGunu == 1) {
    console.log("Pazartesi" );
} else if (haftaninKacinciGunu == 2) {
    console.log("Salı" );
} else if (haftaninKacinciGunu == 3) {
    console.log("Çarşamba" );
} else if (haftaninKacinciGunu == 4) {
    console.log("Perşembe" );
} else if (haftaninKacinciGunu == 5) {
    console.log("Cuma" ); 
} else {
    console.log("Haftasonu" ); 
}

console.log("----switch case ile------" );

let haftaninGunu = 12; 

//  case'ler if/else if gibi kullanılır, hangi case ise onu yap demektir, default ise else gibi kullanılır (şart yazılmaz). eğer break kullanılmazsa case çalışır ve diğer case' geçer.

switch (haftaninGunu) {
    
    case 1 : console.log("Pazartesi"); break;
    case 2 : console.log("Salı");  break;
    case 3 : console.log("Çarşamba"); break;
    case 4 : console.log("Perşembe"); break;
    case 5 : console.log("Cuma"); break;
    case 6 : console.log("Cumartesi"); break;
    case 7 : console.log("Pazar"); break;
    default : console.log("Geçersiz gün girildi");
}
console.log("Switch case bitti")

let gün;
gün = (haftaninGunu === 6 || haftaninGunu === 7) ? ("Haftasonu") : ("Haftaiçi");
console.log(gün);
