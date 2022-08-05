// Primitive ve Referans olmak üzere 2 çeşit veri tipi mevcuttur.
// Primitive, değerin kendisinin değişken içinde tutulması demektir.



// Primitive Tipler; Number, String, Boolen, Undefined, Null, Symbol
// Referans  Tipler - Object ;  Array, Map

// 1-Number (Tamsayi, ondalık, negatif hepsi aynı tiptir. )

let sayi = 50
console.log(sayi)
console.log(typeof sayi)

let ondalıksayi = 50.25
console.log(ondalıksayi)
console.log(typeof ondalıksayi)

let negatifsayi = -50
console.log(negatifsayi)
console.log(typeof negatifsayi)

console.log("") // boşluk bırakmak için

// 2-String

let isim = "Cooper"    //çift tırnak
let soyisim = 'Sky'     // tek tırnak

console.log(isim)
console.log(soyisim)
console.log(typeof isim)


let cumle = 'Emre\'nin bilgisayarı'  //Burada kaçış karakteri kullanmak 
let cumle1 = "Emre'nin bilgisayarı"   //veya çift tırnak ile yazmak gerekir.
console.log(cumle)
console.log(cumle1)


// + ile string birleştirme 
let tamisim = isim + ' ' + soyisim // + işareti concat edip birleştirir.
console.log(tamisim) 


// template literal - backtick ile birleştirme
let tamisim2 = `${isim} ${soyisim}`  // alt gr ve 2 kere virgüle bas
console.log(tamisim2)

console.log(`template literal : ${isim} ${soyisim}`) //ayrı ayrı kullanım
console.log(`template literal : ${tamisim2}`) // değişkene atayıp tek kullanım
console.log("template literal : " + tamisim) // concat yapılması

console.log("") // boşluk bırakmak için

// 3-Boolen (True / False)
let asalSayi = true
console.log(asalSayi)
console.log(typeof asalSayi)
console.log("veri türünün değeri " + asalSayi + " veri tipi : " + typeof asalSayi)
console.log(`veri türünün değeri ${asalSayi} veri tipi : ${typeof asalSayi}`)

console.log("") // boşluk bırakmak için

/* truthy ve falsie kavramları */

// truthy (falsie haricindedki herşey true)

// falsie (0, "", null, undefined, NaN)

let crazy = "cooper";   //  true
crazy = "";             //  false
crazy = 0;              //  false
crazy = null;           //  false
crazy = undefined;      //  false
crazy = NaN;            //  false





// 4-Undefined
let renk  // bir değişken tanımlanmış ama değer atanmamış
console.log(renk) // yazdırılınca "Undefined" - "Tanımlanmamış" görünür.
console.log(typeof renk) // tipi de "Undefined" - "Tanımlanmamış" görünür.


console.log("") // boşluk bırakmak için

// 5-Null - boş değer(ama boşluk değil)
let yas = null // bir değişken var ama değeri belli değilse null atama yapılabilir.
console.log(yas) // yazdırılınca "Null" görünür.
console.log(typeof yas) // tipi de "object görünür.
console.log(`değer ${yas}, veri tipi ise ${typeof yas}`)

console.log("") // boşluk bırakmak için


// 6-Symbol - sonradan anlatacak.



// Referans  Tipler - Object ;  


// Array

let names = ['Ali', 'Veli', 'Deli'];
console.log(names);
console.log(names[1]);
console.log(typeof names); // object türüdür.


// Object

let adress = {
    city : 'İstanbul',
    country : 'Turkey'
}
console.log(typeof adress) // object türüdür.


// Fuction

let calculateAge = function(){return 0}
console.log(typeof calculateAge) // function türüdür.

console.log("") // boşluk bırakmak için

// SADIK TURAN -- Değişkenlerde Tip Dönüşümü

let num1 = '5'
let num2 = '10'
console.log(typeof num1) // string türüdür.
console.log(num1 + num2) // 510 olarak concat eder.

let num3 = Number('5')
let num4 = Number('10')
let total = num3 + num4
console.log(typeof total) // number tür oldu
console.log(total) // 5+10 = 15 olarak toplar

console.log("") // boşluk bırakmak için


// number to string
let val // şuanda tipi undefined
val = String(10) // tipi string olur.
console.log(val.length) // uzunluğu --> 2 basamaklı olduğundan cevap 2
console.log(typeof val) // string

console.log("") // boşluk bırakmak için



// bool to string
val = String(true)

console.log(true) // böyle bool tipidir ve mavi yazar
console.log(val) // böyle string tipidir ve siyah yazar
console.log(val.length) // uzunluğu --> 4 karakter(true) olduğundan cevap 4
console.log(typeof val) // string

// date to string
val = new Date()
console.log(typeof val) // object tür

val = String(new Date())
console.log(typeof val) // string türü oldu
console.log(val.length) // uzunluğu --> 45 oldu

console.log("") // boşluk bırakmak için


// Array to string
val = [1,2,3,4]
console.log(typeof val) // object tür

val = String([1,2,3,4])
console.log(typeof val) //  string türü oldu
console.log(val.length) // uzunluğu --> 7 karakter(virgüllr dahil) olduğundan cevap 7


// toString metodu kullanımı

val = (10).toString()
console.log(typeof val) // number'dan string oldu

val = (false).toString()
console.log(typeof val) // bool'dan string oldu



// String to Number

val = Number('10')
console.log(typeof val) //  string ten Number türü oldu
console.log(val.length) // undefined --> çünkü lenght sadece stringlere uygulanaır.
console.log(val.toFixed(3)) // 10.000 virgülden sonra 3 basamak ilerle
console.log("") // boşluk bırakmak için

val = Number(true)
console.log(typeof val) //  bool dan  Number türü oldu
console.log(val.length) // undefined --> çünkü lenght sadece stringlere uygulanaır.
console.log(val.toFixed(2)) // true = 1 ve virgülden sonra 2 basamak ilerle --> 1.00 
console.log("") // boşluk bırakmak için

val = Number(false)
console.log(typeof val) //  bool dan  Number türü oldu
console.log(val) // false = 0 
console.log("") // boşluk bırakmak için

val = Number(null)
console.log(typeof val) //  null dan  Number türü oldu
console.log(val) // null = 0 
console.log("") // boşluk bırakmak için

val = Number('a')
console.log(typeof val) //  stringten Number olmadı --> Not A NUmber
console.log(val) // çıktısı yok çünkü sayıya
console.log("") // boşluk bırakmak için


// parseInt ve parseFloat kullanımı

val = parseInt('10')
console.log(val) // 10
console.log(typeof val) //  string ten Number türü oldu
console.log(val.toFixed(2)) // 10.00 virgülden sonra 2 basamak ilerle




val = parseInt('10.5')
console.log(val) // 10 olarak yuvarladı
console.log(typeof val) //  string ten Number türü oldu
console.log(val.toFixed(2)) // 10.00 virgülden sonra 2 basamak ilerle


val = parseFloat('10.5')
console.log(val) // 10.5 olarak float yazdırır.
console.log(typeof val) //  string ten Number türü oldu
console.log(val.toFixed(2)) // 10.50 virgülden sonra 2 basamak ilerle
console.log(val.toFixed()) // 11 olarak yuvarlama yapar.
