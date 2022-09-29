//* ======================================================
//!             OOP - Object Constructor (ES5)
//* ======================================================

//* Javascript, prototype-temelli bir dildir.
//* Butun JavaScript nesneleri (objects) ozellikleri (properties)
//* ve metotlari bir prototipten miras olarak almaktadir.
//* Object prototipi, prototip miras zincirinin en tepesinde yer almaktadir.
//* Ornegin Date ve Array nesneleri Object.prototype'dan miras almaktadir.

//? Object Constructor

//* constructor olduğunu belli etmek için baş harfini BÜYÜK yazdık
function Book(t, author, year) {
  //* this ile yazılan oluşacak obejenin keyidir, paramatre ismi ile aynı olmak zorunda değildir.
  this.title = t;
  (this.author = author),
    (this.year = year),
    (this.getSummery = function () {
      return `${this.title} written by ${this.author} in ${this.year}`;
    });
}

//? new keyword'u Book Constructor'ini parameterler ile cagirmaktadir.
//? Constructor ise Book nesnesinden bir ornek (instance) olusturmaktadir.
//? Constructor, mantiksal bir ifade iken instance fiziksel bir olusum gibi dusunulebilir.
//? Contructor'da tanimlanmis tum degisken ve fonksiyonlar olusturulan her bir instance'da hayat bulmus olur.

//* kalıp oluştu, seri üretime geçiyoruz.

//* instance
const book1 = new Book("Simyacı", "Paulo", 1999);
book1.price = "100"; //* sadece book1 de oluşur, 2 de olmaz.
console.log(book1);

//* instance
const book2 = new Book("Kasagi", "Omer", 1895);
console.log(book2.getSummery());

//! Prototype, belirli bir Nesne'nin (Object) tum instance'larina kolay bir sekilde metotlar tanimlamaya izin vermektedir.
//! Prototip alaninda bir metot tanimlamanin avantaji bu metot'un olusan tum instance'larin belleginde yer kaplamamasi ancak tum instance'larin bu metota ulasabilmesidir.
//? bütün instance'larda ortak olan şeyler prototype yazılmalı, mesela price her üründe farklı olabilir, onun için aslında constructor içine yazmak mantıklı
//? fakat getAge gibi tarih hesaplaması hepsinde ortak olduğunda prototype içinde yazmak mantıklı

//* yeni ilave yazılan fonksiyonu constructor içinde değil Genel alanda PROTOTYPE alanında yazdık.
Book.prototype.getAge = function () {
  return new Date().getFullYear() - this.year;
};
//* Ornegin Book nesnesinin tum instance'lari getAge() fonksiyonunu miras alabilir.
//* Ancak, getAge() fonksiyonu bellekte sadece bir yer kaplamaktadir.

//* prototype içine ilave bilgi de eklenebilir.
Book.prototype.paper = "Color";

console.log(book1, book2); //* prototype içinde görünür.
console.log(book1.getAge()); // 23

//* Bir nesnenin prototiplerine .prototype ile erisilebilir.
//* Ancak bir instance'in prototiplerine .__proto__ ile erisilmektedir.

console.log(Book.prototype); // Book objesinin prototypei
console.log(book1.__proto__); // book1 instance'sinin prototypei

//* ======================================================
//!             INHERITANCE - Kalıtım (ES5)
//* ======================================================

//* book objesinde magazine üretilecek,
//?Sub-Class

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  //* magazine title, author, year bunları Book'tan çağırdı,
  this.month = month; //* sonra yeni özellik eklendi
  //* Book + mounth gibi birşey oldu.
}

//! Prototype miras almak için Object.create()metodu kullanılır.
Magazine.prototype = Object.create(Book.prototype);

//*instance
const mag1 = new Magazine("Science", "Einttein", 2021, "September");
console.log(mag1);
console.log(mag1.getSummery()); // çalışır
// console.log(mag1.getAge()); //  79.satır yorum satırı ise çalışmaz, çünkü prototypeda tanımlandı.

//! Prototipler doğrudan miras olarak gelmez, create() yapmak lazım.
console.log(mag1.getAge()); // 79.satır yorum değilse çalışır, çünkü prototypeda tanımlandı.
console.log(mag1.paper); // Color olarak gelir.
