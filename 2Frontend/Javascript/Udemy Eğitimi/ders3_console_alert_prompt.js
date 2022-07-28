// console

let myAge = 44
console.log(myAge) // log kaydını göster demek
console.error('Yanlış işlem yapıldı') // hata mesajı yazdırma
console.warn('Lütfen küçük harf giriniz') // uyarı mesajı yazdırma
 // console.clear() // konsolu temizlem için kullanılır.

 console.table({ad:"Emre", yas:31, soyad:"efe"}) // tablo oluşturmak için kullananılır. 

 console.time("Anahtar") // içindeki anahtarr kelime başta ve sonda aynı olmalı
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
    console.log("deneme")
 console.timeEnd("Anahtar") // bu ikisi arasındaki kodun ne kadar sürdüğünü hesaplar.

// console.clear() 

// alert('Merhaba Dünya') // sitede görünür.

// let sayi = 4285
// alert(sayi)  //böylede kullanılabilir önceden atama yaparak...


// prompt("Lütfen bir sayı giriniz")  // input almak için kullanılıyor.

let sayi2 = prompt("sayi giriniz"); //değer girişi alındı ve değişkebne atama yapıldı.
console.log(sayi2);  // konsola yazdırıldı.

let sayi5 = prompt("sayi giriniz", "100"); // bu kullanımda atanan sayı default olarak prompt içinde gelir. Fakat değişiklik yapılabilir.




