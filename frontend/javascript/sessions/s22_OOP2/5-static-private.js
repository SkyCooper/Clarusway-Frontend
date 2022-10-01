//* ======================================================
//todo,       OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin  # (hash) kullanilir.

//* Private degiskenler dogrudan erisilemezler.
//! Bunlara erismek icin class icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar kullanilir.

//* Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //*privatte değişken class içinde, constructor içinde/dışında olabilir.
  #id = "123456"; // direk dışarıda tanımlama
  // #id; ön // 1-içinde tanımlamak önce oluşturuyoruz.
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.#id = "4444"  // 2-sonra değer ataması yapıyoruz.

    this.getTitle = function () {
      return this.title;
    };
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenler okunabilir.
  //? Bu tip metotlara getter metot denilir.
  //! getter metotlari class icerisinde tanimlanmalidir.

  //* class içinde, constructor dışında
  //* private Id'ye nasıl erişim yapılacağı için metod yazıyoruz.
  getId() {
    return this.#id;
  }

  //? Class icerisinde public metotlar yardimiyla private degiskenlere yazilabilir.
  //? Bu tip metotlara setter metot denilir.
  //! setter metotlar class icerisinde tanimlanmalidir.
  setId(id) {
    this.#id = id;
  }

  getSummary() {
    return `${this.title} written by ${
      this.author
    }, so its age is ${this.#computeAge()}`;
  }

  //* private method
  #computeAge() {
    return new Date().getFullYear() - this.year;
  }
}

const book1 = new Book("Simyacı", "Poulo Coelho", 1988);
console.log(book1);
console.log(book1.title); // Simyacı
console.log(book1.id); // undefined gelir

//? Private bir degiskenin degeri class disindan dogrudan okunamaz.
// console.log(book1.#id); okunamaz
//! Private field '#id' must be declared in an enclosing class
//? Private degiskeni okuma getter metot ile yapılır.
console.log(book1.getId()); // artık okuyabiliyor.
//* bu şöyle demek, sen istediğin gibi okuyamazsın, benim istediğim gibi yazarsan okuyabilirsin

//? Private bir degiskenin degeri class disindan dogrudan degistirilemez
// book1.#id = "11111";  // hata verir.
//? Private degiskene deger atama setter metod ile yapılır.
book1.setId("00000");
console.log(book1.getId());

//? Private metodlar class dışından erişilemez
// console.log(book1.computeAge()); // is not a function hatası verir.
// console.log(book1.#computeAge()); // class dışından erişilemez hatası verir.

//? ancak class içindeki başka bir fonksiyon içinden erişilebililir.
console.log(book1.getSummary());
