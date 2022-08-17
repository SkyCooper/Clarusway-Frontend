

//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcı44yı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.


let hakCounter = 5;
const rastgeleSayi = Math.round(Math.random() * 100);

console.log(rastgeleSayi);

let tahminSayi;
do {
    tahminSayi = +prompt("0-100 arasında bir tahmin edin");
    hakCounter -=1
    if (tahminSayi === rastgeleSayi) {
        console.log(`Tebrikler ${5-hakCounter} ncı hakta bildiniz`);
        break;
    } else if (tahminSayi < rastgeleSayi) {
        console.log("Tahminini ARTTIR ⏫");
    } else if (tahminSayi > rastgeleSayi) {
        console.log("Tahminini AZALT ⏬ ");
    }
} while (hakCounter>0);

console.log(hakCounter);
if (tahminSayi !== rastgeleSayi){console.log("Üzgünüm Hakkınız bitti 😥");}