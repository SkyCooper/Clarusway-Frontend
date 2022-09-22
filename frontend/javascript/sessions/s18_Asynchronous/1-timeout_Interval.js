//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri, Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
//* sıralı bir şeklilde yukarıdan aşağıya doğru çalışan programlar, takibi kolaydır.

// const wait = (waitingTimeMilisecond) =>{
//   const startTime = new Date().getTime() // milisecond cinsinden süre verir.
//   while(new Date().getTime() < startTime + waitingTimeMilisecond ) {}
// }

// console.log("Hello");
// // alert("cw") //! blocking code (bu geçmeden alttaki kod çalışmadığından dolayı)

// console.time("timer"); // süreyi ölçmek için başlattı
// wait(3000); //!blocking code
// console.timeEnd("timer"); // sonunda ölçtü, tam 3000 çıkmaz ve herseferinde değişebilir.

// console.log("Cohort-12");

//* Asenkron (setTimeout)  --> bize bir kere zaman oluşturuyor, non-blocking code
//* ------------------------------------------------

// console.log("selamlama başladı");
// setTimeout(()=>{
//   //!non-blocking
//   console.log("selamlama 1sn gecikti");
// },1000)  // içindeki kodu 1saniye sonra getirir.
// // süre 0 bile olsa sonradan gelir, çünkü bir kere kuyruğa girer ve önceliği değişir.

// setTimeout(() => {
//   //!non-blocking
//   console.log("selamlama 0.5sn gecikti");
// }, 500 );  // içindeki kodu 0,5 saniye sonra getirir.
// // üstteki ile süre aynı olsa bu sefer sıraya üstteki önce girer ve önce üstteki görünür.

// console.log("selamlama bitti");

//* Asenkron (setInterval, clearInterval)  --> bize belirli zaman tekrarı oluşturuyor, non-blocking code
//* ------------------------------------------------

console.log("Timer Started");

let counter = 0;
const intervalId = setInterval(() => {
  // fonksiyon dönüş değerini değişkene atadık
  console.log(++counter);
  if (counter > 0) {
    clearInterval(intervalId);
    console.log("Timer Stoped"); // burada olursa
  }
}, 1000); // her 1snde counter 1 arttır demek

// console.log("Timer Stoped");


//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
