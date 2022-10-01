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

  setPrice(price){
    const taxRate = 1.1;  //* %10 KDV si var
    this.price = Math.trunc(price * taxRate);  //* fiyatı KDV ekleyip güncelledi.
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
  //! fonksiyonellikle ve ayni parametre listesi ile yeniden tanimlanmasi)
  getSummary() {
    return `${this.title} written by ${this.author} in ${this.year} in ${this.month}`;
  }

  //? super keyword sayesinde parentteki override edilen getSummary fonksiyonu da kullanılabilir.
  getSummaryParent() {
    return super.getSummary();
  }

  setPrice(price, taxRate = 1.1){  //* taxrate de parametrik oldu, OVERLOAD
this.price = Math.trunc(price * taxRate)
  }
}

//? Parent
const book1 = new Book("Simyacı", "Poulo Coelho", 1988)
console.log(book1); //* burada price property yok
book1.setPrice(100) //* şimdi tanımlandı
console.log(book1); //* price 110 olarak geldi.


//? Magazine objesinden yeni instance
const mag1 = new Magazine("Science", "Einttein", 2001, "September");
console.log(mag1.getSummary());
console.log(mag1.getSummaryParent());

mag1.setPrice(50)  //* taxRate parametresi yazılmaz ise NaN gelir. Eğer fonksiyon tanımlanırken default değer atanmamışsa
console.log(mag1);


//? JS'de overloading, parent-child class arasinda kullanilir.
//? Ancak diger bir cok dilde ayni metot ayni class icerisinde de farkli paramtreler ile tekrar tekrar yazilabilir.
//? overloading
// function x(string a, string b) {
//   return a + b;
// }

// //? overloading
// function x(integer a, integer b) {
//   return a + b;
// }

// x(1, 2);
// x("1","2")