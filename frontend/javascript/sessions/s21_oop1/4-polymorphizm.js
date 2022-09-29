//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    //* bu alanda yazılan bir metod bütün instance'ların belleğinde tek tek yer kaplar

    this.getTitle = function () {
      return this.title;
    };
  }

  //* clas içinde ama constructor dışında yazdıklarımız ES-6 da direk prototype gider
  //* ilave tanımlama yapmaya gerek olmaz.
  //* syntax olarak da function decleration gibidir.

  getAge() {
    return new Date().getFullYear() - this.year;
  }

  getSummary() {
    return `${this.title} written by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  //* Book classından Magazin clasını genişlet
  constructor(title, author, year, month) {
    //* parentin constructorı demek --> Book clasının constructurı
    super(title, author, year); //! Book prototype kopyalandı.
    this.month = month; //* eklenecekleri altına tanımla
  }

  //? aynı fonksiyonu aynı isimle içini değiştirip yeniden yazdı, yani OVERRIDE etti.
  //? parentten aldığını EZDİ.
  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle fakat ayni isimle tanimlanmasi)
  getSummary() {
    return `${this.title} written by ${this.author} in ${this.year} in ${this.month}`;
  }

  //? super keyword sayesinde parentteki override edilen getSummary fonksiyonu da kullanılabilir.
  getSummaryParent() {
    return super.getSummary();
  }
}

//* Magazine objesinden yeni instance
const mag1 = new Magazine("Science", "Einttein", 2001, "September");
console.log(mag1.getSummary());
console.log(mag1.getSummaryParent());
