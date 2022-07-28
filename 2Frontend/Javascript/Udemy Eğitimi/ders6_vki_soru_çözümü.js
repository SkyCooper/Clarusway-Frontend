/* sadık turan ders-9
1-Can ve Ada nın boy kilo bilgilerini alın
2-Alınan bilgiler göre VKİ hesapla ** formül = kilo / boy karesi
3-Hesaplanan indexe bilgilerine göre karşılaştırma yapın
4-Aşağıdaki tabloya göre Can ve Ada hangi gruba giriyor;
        0    - 18.4 :    Zayıf
        18.5 - 24.9 :   Normal
        25.0 - 29.9 :   Fazla Kilolu
        30.0 - 34.9 :   Şişman(Obez)
*/


// 1
const canKilo = parseFloat(prompt("Kilonuzu giriniz: ", 65));
const canBoy = parseFloat(prompt("Boyunuzu giriniz: ", 1.75));

const adaKilo = parseFloat(prompt("Kilonuzu giriniz: ", 55));
const adaBoy = parseFloat(prompt("Boyunuzu giriniz: ", 1.68));


// 2
const canVKI = (canKilo / canBoy**2).toFixed(2);
const adaVKI = (adaKilo / adaBoy**2).toFixed(2);

console.log("Can VKİ:" + canVKI + " , Ada VKİ: " + adaVKI);
 

// 3 
console.log("Can'ın VKI Ada'dan büyük mü? " + (canVKI > adaVKI)); // true


// 4  hangi cevap true ise o aralıktadır.
let adaZayif = (adaVKI>=0) && (adaVKI<=18.4);
let adaNormal = (adaVKI>=18.5) && (adaVKI<=24.9);
let adaKilolu = (adaVKI>=25.0) && (adaVKI<=29.9);
let adaObez = (adaVKI>=30.0) && (adaVKI<=34.9);

console.log("Ada zayıf mı? :" + adaZayif)
console.log("Ada Normal mi? :" + adaNormal)  // true
console.log("Ada Kilolu mu? :" + adaKilolu)
console.log("Ada obez mi? :" + adaObez)

let canZayif = (canVKI>=0) && (canVKI<=18.4);
let canNormal = (canVKI>=18.5) && (canVKI<=24.9);
let canKilolu = (canVKI>=25.0) && (canVKI<=29.9);
let canObez = (canVKI>=30.0) && (canVKI<=34.9);

console.log("can zayıf mı? :" + canZayif)
console.log("can Normal mi? :" + canNormal)  // true 
console.log("can Kilolu mu? :" + canKilolu)
console.log("can obez mi? :" + canObez)