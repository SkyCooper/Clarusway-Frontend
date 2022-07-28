// Aritmetik Operatörler +  -  /  *  %

let sayi1 = 10
let sayi2 = 2

let sonuc = sayi1 + sayi2 // 12
sonuc = sayi1 - sayi2 // 8 -- let kullanmadan atama yapıldı ve sonuc değişkeninin değeri değişti
sonuc = sayi1 * sayi2 // 20
sonuc = sayi1 / sayi2 // 5 standart bölme yapar
sonuc = sayi1 % sayi2 // 0 -- modülüs kalanı verir. 
sonuc = sayi1 ** sayi2 // 10 üssü 2 = 100

console.log(sonuc)

let xx = 4 + 5 + 8;
console.log(xx);  // 17 olur.

let val; //değişken tanımlandı ama atama yapılmadı
const a = 10;
const b = 5;

val = a + b;  // 15  val değeri bu durumda her seferinde değişir.
val = a - b; // 5
val = a * b; // 50
val = a / b; // 2
val = a % b; // 0

console.log(val); 
console.log(typeof val);

console.log("------------------"); 

// stringle kullanımı;

let isim = 'Cooper'
let soyisim = 'Sky'
let tamisim = isim + soyisim // birleştirir
console.log(tamisim)

let tamisim1 = isim - soyisim // NaN çıktı verir.
console.log(tamisim1) // Not A Number

let yas = 30 //number
console.log(yas + 30) // 30+30=60 olur

let metinOlarakYas = '30' // string
console.log(metinOlarakYas + 30) // 30+30=3030 olur

console.log(yas - 10) // 30-10=20 olur
console.log(metinOlarakYas - 10) // 30-10=20 olur, Js bunu matematiksel olarak algılar.

console.log(yas * 10) // 30*10=300 olur
console.log(metinOlarakYas * 10) // 30*10=300 olur, Js bunu matematiksel olarak algılar.

console.log(yas / 10) // 30/10=3 olur
console.log(metinOlarakYas / 10) // 30/10=3 olur, Js bunu matematiksel olarak algılar.

let ax = "4" + 5 + 8 // içinde strin ifade olduğu için hepsini concat etti.
console.log(ax);   // 458

console.log('')

// Arttırma azaltma operatörleri

let sayi3 = 20
console.log(sayi3)

sayi3++  // = sayi3 + 1 demektir bu kullanım  // 20+1= 21
++sayi3  // de yazılabilir  //21+1=22
console.log(sayi3)

sayi3--  //sayi3 - 1 demektir bu kullanım // 22-1=21
--sayi3 // 21-1=20
console.log(sayi3)

sayi4 = 30
console.log("Sayi 4 :" + sayi4) // sayi4 şuanda 30
console.log("Sayi 4 :" + sayi4++) // sayi4 hala 30 görünüyor, çünkü önce yazdırdı sonra arttırdı ama aslında şu anda sayi4 31 oldu
console.log(sayi4) // 31
console.log("Sayi 4 :" + ++sayi4) // sayi4 31 di, önce arttırdı 32 oldu sonra yazdırdı.
console.log("Sayi 4 :" + (++sayi4)) // sayi4 32 di, önce arttırdı 33 oldu sonra yazdırdı.
//parantezli kullanımı

sayi5 = 50
console.log(++sayi5) // önce arttırdı sonra yazdırdı 51
console.log(sayi5++) // önce yazdırdı sonra arttırdı 51, ama aslında değer değişti 52 oldu.
console.log(sayi5) //  52 




// Aritmetik atama operatörleri
//  +=   -=   *=   /=


let number1 = 10
let number2 = 4
number2 += number1  // number2 = number2 + number1 demektir.
console.log(number2) // 14 olur.
number1 -= 1
console.log(number1) // 10-1 = 9 olur.

console.log("-------------------") 


let value;
let num = 20;

value = num;    // 20
value += num;   // 20 +20 = 40 olur
value -= 5;     // 40 - 5 = 35 tir.
value *= 2;     // 35*2=70
value /= 7;     // 70/7=10
value %= 3;     // 10%3 ten kalan = 1 olur.


console.log(value);
console.log(typeof value);
