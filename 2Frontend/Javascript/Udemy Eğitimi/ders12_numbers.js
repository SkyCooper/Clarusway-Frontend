let val;

// val = 10;
// val = '10';
// val = Number('10');
// val = parseInt('10a');       // 10.9 veya 10a çıktısı 10 olur.
// val = parseFloat('10.9');    // 10.9
// val = parseInt('a10a');      // NaN
// val = isNaN('10')            // true,false çıktı verir. boloen tiptir.


// var num = 10.123456789;
// val = num.toPrecision(5);  // parantez içine yazılan sayı kadar basamak değerini yazdırır 10.123
// val = num.toFixed(5) // virgülden sonra 5 basmak yazdırır 10.12346 (yuvarlar)
val = Math.PI;  // sonun paranteze grek yok,property olduğundan
val = Math.round(2.4); // 2 en yakına yuvarlar
val = Math.round(2.5); // 3 en yakına
val = Math.ceil(2.01); // 3 her zaman yukarı yuvarlar
val = Math.floor(2.99); // 2 her zaman aşağı yuvarlar
val = Math.sqrt(64); // karesini alma, 8
val = Math.pow(2, 3); // üssünü alma 2*2*2, 8
val = Math.abs(-8); // mutlak değer alma, 8
val = Math.min(1,2,3,4,5,6,8,20); //minumum bulma, 1
val = Math.max(1,2,3,4,5,6,8,20); //maximum bulma, 20
val = Math.random(); // her seferinde 0-1 arasında bir random sayı verir
val = Math.random()*10; // her seferinde 0-9 arasında bir random ONDALIKLI sayı verir
val = Math.floor(Math.random()*100); // her seferinde 0-99 arasında bir random tam sayı verir
val = Math.floor(Math.random()*100+1); // her seferinde 1-100 arasında bir random tam sayı verir


console.log(val);
console.log(typeof val);



console.log("--- numbers uygulamaları ---");

var num = 15.123456789;

console.log("1-toplamda 3 basmaklı sayı kullan");
console.log(num.toPrecision(3));



console.log("2-ondalık kısmı 3 basamakta sınırla");
console.log(num.toFixed(3));



console.log("3-en yakın sayıya yuvarla");
console.log(Math.round(num));



console.log("4-Aşağı yuvarla");
console.log(Math.floor(num));



console.log("5-Yukarı yuvarla");
console.log(Math.ceil(num));



console.log("6- En küçük ve en büyük sayıları bulu1,2,10,56,20");
console.log("En küçük: ", Math.min(1,2,10,56,20), " En büyük: ", Math.max(1,2,10,56,20));



console.log("7-Sayı aralığını kullanıcının belirleyeceği rastgele sayı üret");
var min = 50;
var max = 100; 
console.log(min+Math.random()*max);  // bu hali ile 50-150 arasında ondalıklı sayı üretir.
console.log(Math.floor(min+Math.random()*(max-min)));  // bu hali ile 50-100 arasında tam sayı üretir.



console.log("8-Bir personelin maaşını hesaplama");
/* 
** Brüt maaş    : 3700 TL
** Brüt mesai   : 10.3 TL
a- Ağustos ayı mesai toplamı 42 saat ise toplama brüt maaş nedir?
b- Brüt maaş üzerinden %25 kesinti olur ise net maaş nedir?
*/

let brMaas = 3700;
let brMesai = 10.3;
let mesaiSuresi = 42;
let toplamBrMaas = (brMesai*mesaiSuresi) + brMaas;
let toplamNetMaas = (toplamBrMaas - (toplamBrMaas*0.25)).toFixed(2);

console.log("Ağustos ayı brüt maaş: ", toplamBrMaas + " TL'dir.");
console.log("Ağustos ayı net maaş: ", toplamNetMaas + " TL'dir.");

