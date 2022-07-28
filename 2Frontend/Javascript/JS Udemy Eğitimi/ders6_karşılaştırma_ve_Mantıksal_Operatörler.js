// İLİŞKİSEL KARŞILAŞTIRMA OPERATÖRLERİ
//   <   >    <=    >=   ==    !=    ===    !===
let sayi1 = 10
let sayi2 = 4

console.log(sayi1 > sayi2) // boolen çıktı verir.
console.log(sayi1 < sayi2) // boolen çıktı verir.
console.log(sayi1 >= sayi2) // 
console.log(sayi1 >= sayi2) //
console.log(sayi1 == sayi2) // eşit mi?
console.log(sayi1 != sayi2) // eşit değil mi?


console.log("")

let yas = 30
let metinselyas = '30'
console.log(yas)
console.log(metinselyas)

console.log(yas == metinselyas) // js bunu değer olarak karşılaştırır ve True verir.

console.log(yas === metinselyas) // js bunu hem değer  hemde tip olarak karşılaştırır ve False verir.

console.log(yas !== metinselyas) // js bunu hem değer  hemde tip olarak EŞİT DEĞİL Mİ diye karşılaştırır ve TRUE verir.

console.log("--------------------")

let val; //değişken tanımlandı ama atama yapılmadı
const a = 10;
const b = 5;
const c = 5;
let d = 3;


val = a==b; // a b'ye eşit mi ---> false
val = b==c; // a b'ye eşit olduğundan ---> true
val = b===c; // true, hem değeri hem tipi eşit
val = b==='5'; // değer eşit fakat tip eşit değil ---> false
val = b=='5'; // değer eşit, tipine bakmadı --> true
val = c!=b; // eşit değil mi? false çünkü eşit


console.log(val); // çıktısı konsolda mavi görünür.
console.log(typeof val); // tipi boolen




console.log("--------------------")
console.log("--------------------")


// MANTIKSAL OPERATÖRLER   
// AND      &&      ve
//  OR      ||      veya
// NOT      !       değildir


/*  
and false hassastır. 
true1   &&  true2       --> true2  false bulamadı en son true return etei
true    &&  false       --> false  ilk false aldı
false1  &&  false2     --> false1  ilk false aldı
false   &&  true       --> false   ilk false aldı.

or true hassastır. 
true1   ||  true2       --> true1  ilk true
true    ||  false       --> true  ilk false aldı
false1  ||  false2     --> false2 true bulamadı en son false aldı 
false   ||  true       --> true   ilk true aldı.

not terse çevirir.
!false                  --> true
!true                   --> false

*/

// AND True hassas, hepsi true ise True verir.

console.log((sayi1>5) && (sayi2<10)) // sayi1 büyüktür 5 VE sayi2 küçüktür 10 --> True
console.log((sayi1<5) && (sayi2<10)) // sayi1 küçüktür 5 VE sayi2 küçüktür 10 --> False


// OR False hassas, sadece 1  false var ise false verir.
console.log((sayi1>5) || (sayi2<10)) // sayi1 büyüktür 5 VEYA sayi2 küçüktür 10 --> True
console.log((sayi1<5) || (sayi2<10)) // sayi1 küçüktür 5 VEYA sayi2 küçüktür 10 --> True

console.log("--------------------");


let value; //değişken tanımlandı ama atama yapılmadı
const aa = 10;
const bb = 5;
const cc = 5;
let dd = 3;

value = (aa>bb) && (aa>cc); // true  true1   &&  true2 
value = (aa>bb) || (aa>cc); // true  true1   ||  true2 
value = 5 && 8 && 13; // false arar bulamaz ve en son true 13 yazılır
value = 5 && 0 && 13; // ilk falsie değeri aldı --> 0
value = !(5 && 0) // parantez içinden sıfır gelir false, değili yani not false --> true


console.log(value);
console.log(typeof value);


console.log("--------------------")
console.log("--------------------")



// İŞLEM ÖNCELİĞİ - parantez yoksa; çarpma-bölme-toplama-çıkarma
// yoksa işlem önceliği her zaman parantezdedir.

let sonuc = 4 + 10 / 2 - 1 * 5
// 4 + 10 / 2 - 5
// 4 + 5 - 5
// 9 - 5
// 4
console.log(sonuc) 

let sonuc1 = (4 + 10) / ((2 - 1) * 5)
// (4 + 10) / ((2 - 1) * 5)
// (14) / ((2 - 1) * 5)
// (14) / ((1) * 5)
// (14) / (5)
// 2.8
console.log(sonuc1) 

console.log("----------------") 

let logic = true && false || true || false;
console.log(logic)

console.log(0 && false); //  ilk bulduğu falsie değer --> 0
console.log(false && 0 ); //  ilk bulduğu falsie değer -->false 

console.log("----------------") 
// or true hassastır, ilk gördüğü true yazdırır, yoksa en sona kadar bakar ve son false değeri yazdırır.
console.log(0 || false); // true yok  son bulduğu falsie değer --> false
console.log(false || 0 ); // true yok bulduğu falsie değer --> 0 
console.log(3 || 0 ); // ilk true değer --> 3 
