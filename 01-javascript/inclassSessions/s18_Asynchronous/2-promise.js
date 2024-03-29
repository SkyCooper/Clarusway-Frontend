//* =================================================
//*                2- Promises
//* =================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){  //* fonksiyon parametreleride birer fonksiyon
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

console.log("Promise");

const myPromise = new Promise((resolve, reject) => {
  // isimler değişebilir ama best practise kullanım budur. Bunlarda fonksiyondur.
  // resolve --> başarılı ise 200 başlar
  // reject --> başarısız ise 400 başlar

  const success = Math.floor(Math.random() * 2);
  console.log(success);
  //* 0,1,2 rastgele bu üç sayıdan birisini üreten bir değişken oluşturduk.
  const data = { a: 1, b: 2 };
  //* data isimli bir obje oluşturup içine temsili olarak değerler yazdık.
  if (success) {
    //* eğer rastgele sayımız 1 veya 2 gelirse yani TRUE ise ekrana Data fetched yaz,
    //* resolve ile yani başarılı ile datayı yazdır.
    console.log("Data fetched");
    resolve(data);
  } else {
    //* eğer rastgele sayımız 0 gelirse yani FALSE ise reject ile hata mesajını yazdır.
    reject(new Error("Fetch halted")); // sıfır gelirse hata kodu çalışır.
  }
});

myPromise
  .then((response) => console.log(response))
  .catch((error) => console.log(error)); // hata verirse error adı yazar --> Error: Fetch halted
