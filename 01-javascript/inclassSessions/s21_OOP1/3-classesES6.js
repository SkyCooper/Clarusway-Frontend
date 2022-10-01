//* ======================================================
//!           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olusturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ve super () ile child class'a gecmektedir.(INHERITANCE)

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    //* bu alanda yazılan bir metod bütün instance'ların belleğinde tek tek yer kaplar

    this.getTitle = function(){
      return this.title
    }
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

//*instance
const book1 = new Book("Simyacı", "Paulo", 1999);
console.log(book1);
console.log(book1.getAge());


//* ======================================================
//!          INHERITANCE (ES6)
//* ======================================================

class Magazine extends Book{ //* Book classından Magazin clasını genişlet
  constructor(title, author, year, month){
    //* parentin constructorı demek --> Book clasının constructurı
    super(title, author, year); //! Book prototype kopyalandı.
    this.month = month; //* eklenecekleri altına tanımla
  }
}

//* Magazine objesinden yeni instance
const mag1 = new Magazine("Science", "Einttein", 2001, "September");
console.log(mag1);
console.log(mag1.getSummary());
