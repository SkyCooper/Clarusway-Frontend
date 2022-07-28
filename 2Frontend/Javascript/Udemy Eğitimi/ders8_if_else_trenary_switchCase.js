/*
if (koşul) {}
else if (koşul) {}
else {} 

if den sonra mutlaka koşulu parantez içine yaz ve ; kullanmadan süslü parantez aç
else if aynı syntaxla yazılır, elif değil
else koşulsuz direk süsülü parantez.

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

// iç içe if kullanımı;
if (koşul) {
    if (koşul)
    console.log()
}
else {
    console.log()
}
*/





let benimYasim = 31; onunYasi =25;   //tek satırda tanımlama yapıldı. 
console.log(benimYasim, onunYasi);

if (benimYasim < onunYasi) {      // 31<25 false olduğundan if çalışmaz
console.log("Ben senden küçüğüm"); 
} 
else {                            // else çalışır.
    console.log("Ben ondan büyüğüm");
}




let x = 10; y = 20;  z = 2;

if (x%2 > y%2) {console.log("x tek y ise çifttir.");} 
else if(x%2 < y%2) {console.log("x çift y ise tektir.");} 
else if(x === y) {console.log("x ve y değer ve tip olarak eşittir.");} 
else if(y/2 === x) {console.log("y/2 ve x değer ve tip olarak eşittir.");} 
else { console.log("Hiçbir koşul doğru değildir.");}


// if ten sonra sadece tek satırlık kod yazılacaksa süslü paranteze gerek yok, ama yine if ten sonra ; kullanılmaz

let myname = "cooper";
if (myname == "cooper")    // burada = , ==, === hepsi true verir.
console.log("Hello cooper");
console.log("Nasılsın")   // süslü parantez olmazsa koşul doğru olmasa bile bu satır mutlaka çalışır, onu if ten ayrı bir kod bloğu olarak algılar.

let mysname = "sky";
if (mysname == "sky") {
    console.log("Hello sky");
    console.log("How are you")  // şuanda koşul sağlanmazsa iki satırda çalışmaz.
}    



let sayi1 = 10, sayi2 = 20;
if (sayi1 > sayi2) {

    if (sayi2 > 20)
        console.log("Sayı1 hem sayı2 den hemde 20den büyüktür.");
    }
    else {
        console.log("Else çalışır");       
}



// boolen değişken ile koşul tanımlama;

let asalSayiMi = true; 

if (asalSayiMi == true) {} // böyle kullanım genel syntax için doğru fakat

if (asalSayiMi) {} // parantez içi zaten boolen bir değere sahip olduğu için direk böyle kullanılabilir. Aslında ikiside aynıdır.


let a = 10, b = 5, c = 0;
if (a > b) {        //  burası tru olduğundan
    c = a + b;      //  bu kod çalışır 10+5=15
} else {
    c = a - b;
}

console.log("c'nin değeri: " + c);

// TERNARY YAPI ile aynısının yazılması

// bunun okunuşu, eğer a>b ise(?) c=a+b olsun, değilse(:) c=a-b olsun demektir.

c = (a > b) ? (a + b) : (a - b);
console.log("c'nin yeni değeri: " + c);

// SWITCH CASE KULLANIMI
console.log("-----iç içe if else if kullanımı-----" );

let haftaninKacinciGunu = 7;

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

let haftaninGunu = 1; 

//  case'ler if/else if gibi kullanılır, hangi case ise onu yap demektir, default ise else gibi kullanılır (şart yazılmaz). eğer break kullanılmazsa case çalışır ve diğer case' geçer.

switch (haftaninGunu) {

    case 1 : console.log("Pazartesi"); // break;
    case 2 : console.log("Salı"); // break;
    case 3 : console.log("Çarşamba"); break;
    case 4 : console.log("Perşembe"); break;
    case 5 : console.log("Cuma"); break;
    case 6 : console.log("Cumartesi"); break;
    case 7 : console.log("Pazar"); break;
    default : console.log("Geçersiz gün girildi");
}
console.log("Switch case bitti")




























