// /* ödev-1
// bir değişken oluştur ve saniye değeri ataması yap
// sonra bunun kaç dakika va kaç saniye olduğunu hesaplayıp yazdır
// mesela--> 1200 için 20 dakika 0 saniye yazmalı */

// // 1nci çözüm
// let saniye = 1222;
// let Dakika = saniye / 60;
// let kalanSaniye = saniye % 60;
// console.log(Dakika)
// console.log(kalanSaniye)
// console.log(`${saniye} saniye : ${Dakika.toFixed()} dakika ve ${kalanSaniye} saniyedir.`)

// console.log("-----------------")


// // 2nci çözüm prompt ile yapılması
// let saniye1 = prompt("saniye değerini giriniz :", "258"); // 1200 default olarak gelir, ama değiştirilebilir. girilen herşey strin olduğu için Number olarak değişmesi gerekir.
// let Dakika1 = Number(saniye1) / 60;
// let kalanSaniye1 = Number(saniye1) % 60;
// console.log(Dakika1)
// console.log(kalanSaniye1)
// console.log(`${saniye1} saniye : ${Dakika1.toFixed()} dakika ve ${kalanSaniye1} saniyedir.`)


// console.log("-----------------")


// // 3ncü çözüm promp ve parseInt kullanımı
// let strinSaniye = prompt("saniye değerini giriniz :", "144"); // 144default olarak gelir, ama değiştirilebilir. girilen herşey strin olduğu için parseInt ile integıra çevrilebilir.
// let saniye2 = parseInt(strinSaniye); // strinten ---> Number dönüşümü yapıldı.

// let Dakika2 = parseInt((saniye2 / 60), 10) ; // sayının bölümünü 10 luk sistemde virgülsüz göster demektir. 144/60=2.466666 fakat burada sadece 2 görünür.
// let kalanSaniye2 = saniye2 % 60;
// console.log(Dakika2)
// console.log(kalanSaniye2)
// console.log(`${saniye2} saniye : ${Dakika2} dakika ve ${kalanSaniye2} saniyedir.`)

// console.log("-----------------")

// /*ödev-2
// bir değişkene fahrenayt cinsinden sıcaklık değeri ataması yap
// sonra bunu celcius olarak çevirip yazdır
// 100 için 37.777778 olmalı, 
// formülü : celcius = 5/9 * (fahrenayt - 32 ) */


// // 1nci çözüm
// let sıcaklık = 100;
// console.log(sıcaklık)
// let derece = 5/9 * (sıcaklık - 32); 
// console.log(derece)
// console.log(`${sıcaklık} Fahrenayt, ${derece} Celciustur.`);

// console.log("-----------------")


// // 2nci çözüm - prompt ve parseInt ile
// let sıcaklık2 = parseInt(prompt("Fahrenayt değerini giriniz:", "100"));
// // yukarıda sonradan string --> Number değişimi yapmıştım, şimdi direk girilen değeri integır yaptım.
// console.log(sıcaklık2)
// let derece2 = (5/9) * (sıcaklık2 - 32); 
// console.log(derece2)
// console.log(`${sıcaklık2} Fahrenayt, ${derece2} Celciustur.`);  // 2 faklı şekilde yazdırılabilir.
// console.log(sıcaklık2 + " Fahrenayt, " + derece2.toFixed(2) + " celcius derecedir."); // virgülden sonra 2 basamak ilerle

// console.log("-----------------")



// /*ödev-3
// bir yılın artık yıl olup olmadığını hesapla
// artık yıl olması için 400 ile modu 0, veya 4 ile modu 0 olmalı ve 100 ile modu 0 olmamalı
// 4100 false değer vermeli */ 

// let girilenYil = parseInt(prompt("Yıl için bir değer giriniz:", "4100"));

// console.log((girilenYil % 400) == 0);
// console.log((girilenYil % 4) == 0 && (girilenYil % 100) != 0);

// let artikYilMi = (girilenYil % 400 == 0) || (girilenYil % 4 == 0 && girilenYil % 100 != 0)
// console.log("Girilen " + girilenYil + " yılı artık yıl mı? :" + artikYilMi);


// /* ödev-4 Sadık Turan - değişkenler ile ilgili soru çözümü.
// Bit müşterinin aşağıdaki bilgileri için değişken oluşturunuz.
// Müşteri adı
// Müşteri soyadı
// Müşteri tc kimlik
// Müşteri sipariş toplamı
// Müşteri cinsiyet
// Müşteri adres
// Müşteri hobiler
// */

// let name = "Cooper";
// let surName = "SKY";
// let fullName = "Cooper SKY", //böyle tam isim tanımlamasıda yapılabilirdi.

// let tck_no = '123456789';   // sayısal bir işlemde kullanılmayacağından dolayı string olarak almak mantıklı
// let siparişToplamı = 210.25  // işlem yapılacağı düşünüldüğünden number olarak alınır

// let cinsiyet = "Erkek";
// let gender = true; // kadın false diye tanımlama yaparak 1 ve sıfır ile sonradan daha kolay işlem yapılabilir.

// let adres = "Ataşehir, İstanbul, Türkiye"; //böyle olabilir
// let adress ={
//     il : "İstanbul",
//     ilçe : "Ataşehir",
//     ülke : "Türkiye"};                 // object olarak tutmak daha kolay erişim sağlar

// let hobiler = "Yüzme, Tiyatro, Futbol"; 
// let hobbies = ["Yüzme", "Tiyatro", "Futbol"]; // liste (array) içinde tutmak daha kolay erişim sağlar
 


// // Aşağıdaki sipariş toplamını hesaplayınız
// let order1 = '100';
// let order2 = '150';
// let toplam1 = parseInt(order1) + Number(order2);
// console.log(toplam1); //250


// // Aşağıdaki sipariş toplamını hesaplayınız
// let order3 = '100.2';
// let order4 = '150.5';
// let toplam2 = Number(order3) + parseFloat(order4);
// console.log(toplam2); // 250.7


// // Aşağıdaki siparişlerin TAMSAYI toplamını hesaplayınız
// let order5 = '100.2';
// let order6 = '150.5';
// let toplam3 =parseInt(order5) + parseInt(order6);
// console.log(toplam3); // 250



// // doğum yılına göre yaşını hesaplayınız.
// const yearOfBirth = 1981; //bu değer bir daha değişmeyeceği için sabit değişkenle tanımlandı.
// console.log(new Date().getFullYear() - yearOfBirth); // güncel yıldan doğum yılı çıkarıldı 41


// // Aşağıdaki string ifadenin karakter sayısını bulunuz.
// let kurs = "Modern Javascript Kursu";
// console.log(kurs.length); // boşluklar dahil 23 karakter


// Kilometre mesafeyi mi olarak değiştirin,
let mesafeKm = 65;
let mesafeMil =  mesafeKm * 1.609344
console.log(mesafeKm + " kilometre = " + mesafeMil.toFixed(2) + " mildir.");
// tofixed ile virgülden sonraki basamak sayısı ayarlanır.


// Dairenin alanını hesaplayınız,
let r = 5;
const pi = 3.14;
area = pi * (r**2); // üssü
console.log(area);

console.log((((2**3)*(3**2))+9)**0.5);
// (8*9)+9 = 81   81 üss 0.5 yani karekökü = 9