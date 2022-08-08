console.log("Ders1");

// alert("deneme");

// let firstName = prompt("Enter your name:");

// alert("firstName : " + firstName);

// let sonuc = confirm("Are you legal?");
// console.log(sonuc);
// bunun sonucu True/False döner

// var hoisting özelliği vardır, hem block, hemde fonksiyon içinde geçerlidir,
// let ise sadece block içinde geçerli olur, dışında anlamsızdır.

var myNumber1 = 11;
console.log(myNumber1);

let v1 = 55;
console.log(v1);

/* 
yukarıda myNumber1 tanımlandı
arada bir sürü kod yazıldı
ve sonra yine aynı değişkene atama yapılırsa
*/

var myNumber1 = 22;
console.log(myNumber1);
// var ile tekrar aynı değişkene atama yapılabilir..

// let v1 = 88;   
// console.log(v1);
// let buna izin vermez, hat verir, Identifier 'v1' has already been declared

// ! const;

const student = {
    name : "cooper",
    age : 41
}
console.log(student);


const otherStudent = student; // adres değil değişken değişti.
otherStudent.name = "Dan Brown";

/* student = {        böyle tanımlama yapılırsa hata verir. 
    name: 'Ryan',     çünkü komple bir obje tanımlıyoruz
    age: 44,          adresi değiştirmeye çalışıyoruz.
  }; */

console.log(otherStudent); 

// ? primitive örnek
// adres değişir, ama let hata vermez.

let num1 = 501;
console.log('num1 :>> ', num1);

num1 = 888;
console.log('num1 :>> ', num1);

let num2 = 467;

num1 = num2;  // 501 değil artk 467 oldu

// num2 = num2 + 3;

console.log(num1, num2);