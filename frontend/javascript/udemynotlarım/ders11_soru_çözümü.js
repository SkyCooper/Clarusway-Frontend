// 22 Temmuz 2022, Cuma

/* 2 basamaklı sayı üreten Küçük bir piyango oyunu tasarlayın ve kullanıcının sayıyı tahmin etmesini isteyin;

Kullanıcı doğru bilirse 100 TL, basamkları ters blirse(56 -- yerine 65)  50 TL, sadece bir basamağını bilirse amorti olarak 2  TL kazanır. 

Math.random() foksiyonu 0 dahil -1 hariç ratsgele sayı üretir. mesela 0,56
Sonra bunu istediğin aralığın üst sınırı ile çarparsan o aralıkta sayı üretmiş olursun 
(Math.random() * 10) +1   ile 1-10 arasında 10 dahil sayı üretilir.
Math.floor() ile ondalıklıdan tam sayı dönüşü yapılabilir.
*/

let piyango = Math.floor((Math.random() * 90)+10);  // 10-99 arası sayı üretir.
// mesela 0,999999 üretti * 90 = 89,9991+10 = 99,99 ---> yuvarlayınca 99 olur.
// mesela 0 üretti * 90 = 0+10 = 10 ---> yuvarlayınca 10 olur.
// veya 0,566666 üretti * 90 = 50,4+10 = 60,4 ---> yuvarlayınca 64 olur.

// let piyango = 48;   kodu denemek için yazdım doğru çalışıyormu diye
let tahmin = parseInt(prompt("Tahmin edilen sayıyı giriniz :"));
// string olan değeri , number yaptı

console.log(`Piyango sayısı: ${piyango}, tahmin sayısı: ${tahmin}`);



// basamak değerlerini bulmak için;
let piyangoBirlerBasamagi = piyango % 10;
let piyangoOnlarBasamagi = Math.floor(piyango / 10);
console.log(`Piyango sayısı onlar basamağı: ${piyangoOnlarBasamagi}, birler basamağı: ${piyangoBirlerBasamagi}`);

// basamak değerlerini bulmak için;
let tahminBirlerBasamagi = tahmin % 10;
let tahminOnlarBasamagi = Math.floor(tahmin / 10);
console.log(`Tahmin sayısı onlar basamağı: ${tahminOnlarBasamagi}, birler basamağı: ${tahminBirlerBasamagi}`);

// koşulları kontrol ediyoruz sırayla;

if (piyango === tahmin){
    console.log("Tebrikler, bildiniz!! 100 TL kazandınız.");
} else if (piyangoBirlerBasamagi  === tahminOnlarBasamagi && piyangoOnlarBasamagi === tahminBirlerBasamagi) {
    console.log("Sayıları ters bildiniz!! 50 TL kazandınız.");   
} else if (piyangoBirlerBasamagi === tahminBirlerBasamagi ||
    piyangoOnlarBasamagi === tahminOnlarBasamagi) {
    console.log("Sadece amorti olrak 2 TL kazandınız.");   
} else {
    console.log("Üzgünüm, tekrar deneyin.");   
}