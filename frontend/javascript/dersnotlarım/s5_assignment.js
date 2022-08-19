//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcı44yı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

//* Tahmin oyununda 5 haktan sonra oyun bitince, tebrikler bildiniz veya üzgünüm bilemediniz tuttuğum sayi ...dır. yazan ve sonrasında yeniden oynamak istermisiniz diye soran, cevap evet ise tekrar 5 tahmin hakkı veren, hayır ise oynadığın için teşekkürler yazan algoritmayı oluşturun.

while (true) {
  let hakCounter = 5;
  const rastgeleSayi = Math.round(Math.random() * 100);

  console.log(rastgeleSayi);

  let tahminSayi;
  do {
    tahminSayi = +prompt("0-100 arasında bir tahmin edin");
    if (tahminSayi === rastgeleSayi) {
      console.log(`Tebrikler ${6 - hakCounter} ncı hakta bildiniz`);
      break;
    } else if (tahminSayi < rastgeleSayi) {
      console.log("Tahminini ARTTIR ⏫");
      hakCounter -= 1;
    } else if (tahminSayi > rastgeleSayi) {
      console.log("Tahminini AZALT ⏬ ");
      hakCounter -= 1;
    }
  } while (hakCounter > 0);

  if (tahminSayi !== rastgeleSayi) {
    console.log("Üzgünüm Hakkınız bitti 😥");
  }
  let soruSor = prompt("Tekrar oynamak istermisin (E/H):").toLowerCase();

  if (soruSor == "e" || soruSor == "E") {
    alert("Tekrar başlıyoruz, HAZIR MISIN?");
  } else {
    console.log("Oynadığın için teşekkürler");
    break;
  }
}

//* kullanıcıdan sayi girmesini isteyen ve q/Q yazana kadar giriş alıp sonunda ... kere sayı girişi yapıldı ve girilen sayıların ortalaması ... dır çıktısı veren kodu do/while ile yazın.

// //!çözüm1
// let girilenSayi = 0;
// let toplam = 0;
// let sayac = 0;

// do {
//   girilenSayi = prompt("Bir sayi giriniz:");

//   if (girilenSayi == "q" || girilenSayi == "Q") {
//     break;
//   } else if (girilenSayi <= 0) {
//     alert("Pozitif sayı giriniz");
//   } else {
//     toplam += +girilenSayi;
//     sayac += 1;
//   }
// } while (girilenSayi != "q" && girilenSayi != "Q");

// console.log(
//   `Toplamda ${sayac} kere sayı girişi yaptınız, girdiğiniz sayıların ortalaması ${
//     toplam / sayac
//   }`
// );

// //!çözüm2
let numbers = 0;
let count = 0;
let sumNumbers = 0;

do {
  numbers = prompt("1-100 arasında bir sayı giriniz ");

  if (numbers == "q" || numbers == "Q") {
    console.log(
      `Çıkış yapıldı, ${count} geçerli sayı girildi, ortalaması ${(
        sumNumbers / count
      ).toFixed(2)}`
    );
    break;
  } else if (numbers <= 0 || numbers > 100) {
    alert("Girdiğiniz sayı belirtilen (1-100) aralık dışındadır");
  } else {
    sumNumbers += +numbers;
    ++count;
  }
} while (true);
