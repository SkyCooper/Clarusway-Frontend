// Date Object

let d = new Date(); // bilgisayarın güncel tarih/saatini tanımladım.


console.log(d);     // Tue Jul 19 2022 14:19:11 GMT+0300 (GMT+03:00) çıktısını verir.
console.log(typeof d);  // object türündedir.


// Get Metodları; şimdiki tarih/saat içinden istediğimiz almak için kullanılır.
// 19 Temmuz 2022,Salı günü yapıldı
console.log(d.getDate());     // 19 çıktısını verir. --> sadece günü al
console.log(d.getDay());     //  2 çıktısını verir. --> haftanın kaçıncı günü
// 0 pazar, 1 pazartesi, 2,3,4,5,6 Cumartesi gibi
console.log(d.getFullYear());     //  2022 çıktısını verir. --> sadece yıl
console.log(d.getHours());     //  14 çıktısını verir. --> saat kaç ise onu gösterir.
console.log(d.getMonth());     //  6 çıktısını verir. --> kaçıncı aydayım
// 0 ocak, 1 şubat, 2,3,4,5,6 Temmuz gibi
console.log(d.getSeconds());     //  anlık saniye çıktısını verir.


console.log("------------------------");
let e = new Date(); // bilgisayarın güncel tarih/saatini tanımladım.
console.log(e);     // Tue Jul 19 2022 14:19:11 GMT+0300 (GMT+03:00) çıktısını verir.




// Set Metodları; Elimizdeki tarih/saat içinden istediğimiz bilgileri değiştirmek için kullanılır.
e.setFullYear(1999);    // 2022 olan tarihi 1999 yaptım
e.setMonth(0);          // 6 olan ay artık 0 oldu
e.setDate(23);          // anlık 19 olan gün artık 23 oldu
// e.setDay kullanılmıyor, çüngü hangi güne ayarlandı ise otomatik olarak onu veriyor.
e.setHours(10);         // anlık 14 olan saat 10 oldu
e.setMinutes(44);       // 44 olarak değişti
e.setSeconds(33);       // 33 oldu



console.log(e.getFullYear());       //  1999 çıktısını verir. --> set ile değiştiği için 
console.log(e.getMonth());          //  0 çıktısını verir. --> set ile değiştiği için 
console.log(e.getDate());           // 23 çıktısını verir. --> set ile değiştiği için 
console.log(e.getDay());            // date 23 olduğu için 6 çıktısını verir. --> haftanın kaçıncı günü
// 0 pazar, 1 pazartesi, 2,3,4,5,6 Cumartesi gibi
console.log(e.getHours());          //  10 çıktısını verir. --> saat set ile değiştiği için.
// 0 ocak, 1 şubat, 2,3,4,5,6 Temmuz gibi
console.log(e.getMinutes());     //  44  --> set ile değiştiği için 
console.log(e.getSeconds());     //  33  --> set ile değiştiği için 


console.log("------------------------");
console.log("doğum tarihinden hesaplama yapma");
// doğum tarihinden hesaplama yapma;

let birthday = new Date(1981,8,7);  // 1981 yılı,  8inci ay (0 dan başladığı için Eylül -->8), 7nci gün
console.log(birthday);

console.log(d.getFullYear() - birthday.getFullYear());  // güncel yıldan benim doğum yılımı çıkardı --> 41
console.log(e.getFullYear() - birthday.getFullYear());  // 1999 yılından benim doğum yılımı çıkardı --> 18

console.log(d.getMonth() - birthday.getMonth());        // güncel aydan benim doğum ayımı çıkardı --> -2
// çünkü şuanda güncel ay 6 , doğum ayı 8 olduğu için cevap -2 oldu
console.log(d.getDate() - birthday.getDate());          // güncel günden benim doğum günümü çıkardı --> 12
// çünkü şuanda güncel gün 19 , doğum günü 7 olduğu için cevap 19-7=12 oldu




// Date & Time uygulamaları; (25 Temmuz 2022, Pazartesi günü yapıldı)


// Uygulama-1
console.log("--Şimdiki tarih gün/ay/yıl bigilerini yazdırın--"); 

let dt = new Date();
console.log(dt.getFullYear(), dt.getMonth(), dt.getDay());

console.log("--Tarih ve saat bilg içeren bir Date objesi oluşturun--");

let dtobje1 = new Date('11/5/2012 08:10:44'); // ay/gün/yıl
let dtobje2 = new Date(2012, 10, 5, 08, 10, 44); // yıl/ay/gün (ay bir eksik)
console.log(dtobje1);
console.log(dtobje2);

console.log("--1/1/1990 tarihinden bir gün öncesini gösterin--");
let dtonce = new Date('1/1/1990'); // verilen tarihi tanımladık,
let ayınKacıncıGunu = dtonce.getDate(); // kaçıncı gün ona baktık,
dtonce.setDate(ayınKacıncıGunu-1); // set metodu ile bulduğumuz günden 1 çıkarıp bir gün önceye gittik,
console.log(dtonce); // artık tarih 31 Aralık 1989 oldu.



// Uygulama-2
console.log("--iki tarrih arasında geçen zamanı bulunuz--");
let dtStart = new Date ('1/1/1990');
let dtEnd = new Date('1/1/1991');
let fark = dtEnd - dtStart;

console.log(fark) // sonuç milisecond olarak gelir.
console.log('milisaniye : ' + fark);


let farkSaniye = fark / 1000;
console.log('saniye : ' + farkSaniye);
let farkDakika = farkSaniye / 60;
console.log('dakika : ' + farkDakika);
let farkSaat = farkDakika / 60;
console.log('saat : ' + farkSaat);
let farkGun = farkSaat / 24;
console.log('Gün : ' + farkGun);



// Uygulama-3
console.log("--Yaş hesaplaması nasıl yapılır?--");

let bday = new Date ('9/7/1981');   // Eylülün 7si 1981 yılı
console.log(bday.getTime()); // çıkan sonuç 1970 yılından bday tarihine kadar olan milisaniye farkıdır.
console.log(Date.now()); // 1970 yılından şimdiki zamana kadar olan milisaniye farkı

let yasFarkıMilisaniye = Date.now() - bday.getTime(); // bday den bugüne kadar olan fark milisaniye cinsinden bulundu.
let yasFarkıYıl = new Date(yasFarkıMilisaniye);
console.log(yasFarkıYıl.getFullYear()-1970);





// Uygulama-4
console.log("--Her sene mayıs ayının 2. haftası pazar günü kutlalan Anneler Günü 2023 yılında hangi gün olacak ,bulunuz--");

let annelerGunu = new Date(); // bir date object oluşturuldu.
annelerGunu.setHours(0,0,0,0); // saat/dakika/saniye/milisaniye sıfırlandı ihtiyaç olmadığı için
annelerGunu.setFullYear(2023); // yılı 2023 oldu
annelerGunu.setDate(1);  // 1nci gün oldu
annelerGunu.setMonth(4); // 4ncü index yani 5nci ay Mayıs oldu

// tarih şu anda 2019 yılı mayıs ayı 1nci gün olarak ayarlandı.
console.log(annelerGunu.getDay()); // çıkan sonuç 1, yani Pazatesi günü

// bu döngü ile gün pazar olana kdar günü 1 arttırıp ilk hafta pazar olana kadar devam ediyoruz. 
while (annelerGunu.getDay() != 0) {
    annelerGunu.setDate(annelerGunu.getDate() + 1)
}

// daha sonra çıkan güne +7 ekleyip 2nci hafta pazar günü tarihini buluyoruz.
annelerGunu.setDate(annelerGunu.getDate() + 7);
console.log(annelerGunu);  // 14 Mayıs 2023, Pazar oluyor sonuç




// benim ilave denemem
console.log("--2012 yılı Kasım ayı 5nci günü hangi gündür, yukarıdaki yöntemle hesaplayın--");
let kasim5 = new Date(); //obje oluştu
console.log(kasim5);
kasim5.setFullYear(2012); // yıl 2012 oldu
console.log(kasim5);
kasim5.setMonth(10); // ay kasım oldu
console.log(kasim5);
kasim5.setDate(5);
kasim5.getDate()
console.log(kasim5.getDay()); // çıktısı 1 oldu, yani pazartesi
console.log(kasim5); // çıktısı Monday oldu, yani pazartesi










































