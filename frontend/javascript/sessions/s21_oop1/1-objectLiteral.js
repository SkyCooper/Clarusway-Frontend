//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "Simyacı",
  author: "Paulo Coelho",
  year: 1999,
  getSummery: function () {
    return `${this.title} written by ${this.author} in ${this.year}`;
  },
  //* arrow kullanılmıyır, çünkü this yanlış çalışıyor.
};

console.log(book1);
//* konsolda görünen prototype bu objenin nereden türetildiğini gösterir.
console.log(book1.getSummery());

console.log(book1.hasOwnProperty("title")); // true
//* book1 içinde title key'i var mı? Boolen feğer döndürür.
//* hasOwnProperty() fonksiyonunu biz yazmadık, OBJECT klasından miras aldı.

const book2 = {
  title: "Animal Farm",
  author: "George Orwell",
  year: 1876,
  getSummery: function () {
    return `${this.title} written by ${this.author} in ${this.year}`;
  },
};

console.log(book2);
console.log(book2.getSummery());

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir. Seri üretim için elverişli değildir. 
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)