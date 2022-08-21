// todo 9 Ağustos 2022, Salı @mark-hoca

// Primitive ve Referans olmak üzere 2 çeşit veri tipi mevcuttur.
// Primitive, değerin kendisinin değişken içinde tutulması demektir.



//? Primitive Tipler; Number, String, Boolen, Undefined, Null, Symbol, BigInt
//* Referans  Tipler - Object ;  Object, Array, Map, Set
//! Fonksiyonlar

let aValue;
console.log("1. " + typeof aValue);
aValue = null; // beware: null is a value, not a reference
console.log("2. " + typeof aValue);
aValue = 42;
console.log("3. " + typeof aValue);
aValue = "Clarusway";
// aValue = 'Clarusway';
// aValue = `Clarusway`;
// 👆 3 ways to define a string
console.log("4. " + typeof aValue);
aValue = true;
console.log("5. " + typeof aValue);
aValue = 1234567890123456789012345678901234567890n;
console.log("6. " + typeof aValue);
aValue = Symbol("Clarusway");
console.log("7. " + typeof aValue);
aValue = { firstName: "John", lastName: "Doe" };
console.log("8. " + typeof aValue);

console.log(0);
console.log(typeof 0);
console.log(3.14);
console.log(typeof 3.14);
console.log('Hello');
console.log(typeof 'Hello');
console.log((8>10));
console.log(typeof (8>10));

// let girdi1 = prompt('Bir ifade giriniz')
// console.log(girdi1, typeof girdi1);

// let girdi2 = +prompt('Bir ifade giriniz') //todo +prompt
//! prompt başına + koyunca type casting olur ve string number olur
// console.log(girdi2, typeof girdi2);
// console.log(typeof typeof girdi2); //? (number) ın tipi stringdir


console.log("----Undefined---");
/* //! Undefined --> tanımlama var, değeri yok   tanımsız
➤ undefined means that a variable is declared but no value is assigned. On the other hand, "is not defined" means the variable is not declared.

➤ The meaning of undefined is “value is not assigned”.

➤ If a variable is declared, but not assigned, then its value is undefined: */

let age;
console.log(age); //*output: "undefined"
//? console.log(userName); // userName is not defined

console.log(myAge);
var myAge = 40;  //* var-undefined verir, let ile tanımlama yapılsa hata verir.
console.log('Merhaba Undefined');

//! consola window + enter yapıp tanımlanan değişken isimlerine bakılabilir. Burası steak, bu örneği hoisting nedir açıklamak için gösterdi ve var kullanmayın, const/let kullanın dedi @mark hoca





// ! Null --> Boşluk/Yokluk anlamına gelir.
console.log("----Null---");
/* ➤ The special null value does not belong to any of the types described above.

null is a special keyword to indicate intentional absence of an object value, null is a primitive type.

➤ In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

➤ It’s just a special value that represents “nothing”, “empty” or “value unknown”.

➤ The code above states that age is unknown. */

let ages = null;
console.log(typeof ages); // ! tipi objecttir.(primitive olmasına rağmen tipi obje oluyor)
//todo -->biz bir değişkene bilerek kasıtlı olarak yok değeri vermek istiyorsak "null" kullanabiliriz. değeri verilmemiş değişkenlere bilerek kasıtlı olarak "undefined" KULLANANMAYINIZ

/* null+3 = 3 (0+3 gibi davranır)
undefined+3 = NaN  */





// ! Numbers --> bütün sayılar number'dır. 
console.log("----Numbers---");
/* ➤ Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc. JavaScript has only one type of number.

➤ A number literal like 42 in JavaScript code is a floating-point value, not an integer. There is no separate integer type in common everyday use. (JavaScript now has a BigInt type, but it was not designed to replace Number for everyday uses. 42 is still a Number, not a BigInt.) */

let x = 7;
console.log(x);
console.log({x}); //? böyle yazınca x:7 diye yazar
let pi = 3.14159;

// ! Some Useful Constants
// NaN: not a number as the name suggests given value is not a valid number
NaN == NaN; // false
NaN === NaN; // false
typeof NaN; // "number"
 
/* //!⚠️Warning! :
When comparing a value whether it is a number or not, use global function`isNaN()`
Be careful when working with string and number conversions, since it is a common error issue. */
Number.MAX_VALUE; // 1.7976931348623157e+308 
//! .noktadan sonra 17 basamak alır  (max doğruluk sınırı)
Number.MAX_SAFE_INTEGER; // 9007199254740991
//!15 basmaklı sayıyı doğru gösterir. 
Number.MIN_VALUE; // 5e-324
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON; // 0.0000000000000002220446049250313
Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity
Number.NaN; // NaN

/* //!➤ Exponential Representation of Numbers

In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count: */

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

// ! Precision
// ➤ Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let xx = 999999999999999;     
let yy = 9999999999999999;
console.log(xx);   //? output = 999999999999999
console.log(yy);   //? output = 10000000000000000 basamak sayısı 15ten fazla olduğu için

// ➤ The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var xa = 0.2 + 0.1;
console.log(xa);   //! output =  0.30000000000000004
console.log(xa.toFixed(2));   //! output =  0.30 ama STRING tip
console.log(+xa.toFixed(2));   //! output =  0.30 + dan dolayı number

// ➤ To solve the problem above, it helps to multiply and divide:
let xxa = 0.2 + 0.1;
console.log(xxa);   // output =  0.30000000000000004
let yya = (0.2*10 + 0.1*10) / 10;
console.log(yya);   // output =  0.3

// ! ➤ Decimal
let myNumber = 32;
// myNumber is a decimal number

// !➤ Hexadecimal
myNumber = 0x5AD;
console.log(myNumber);
// myNumber equals to 1453 in decimal
// To write a number in hexadecimal, prepend 0x to the number, like 0x41. Please note that digits in the number can only contain 0..9 and A..F.

// !➤ Octal
let num1 = 015;
let num2 = 025;
let result = num1 + num2;
console.log(`result is ${result}`); // result is 34
num1 = 15;
num2 = 025;
console.log(`result is ${result}`);// result is 36
num1 = 015;
num2 = 25;
console.log(`result is ${result}`);// result is 38
num1 = 15;
num2 = 25;
console.log(`result is ${result}`);// result is 40 isn't it weird?
let numOctal = 0o1234567;
// To write a number in octal, prepend 0o to the number, like 0o42. Prefer 0o over 0 only to avoid misinterpretation. Please note that digits in the number cannot be greater 7.

// !➤ Binary
myNumber = 0b10011101;
console.log(myNumber);
// myNumber equals to 157 in decimal
// To write a number in binary, prepend 0b to the number, like 0b101. Please note that digits in the number can only contain 0 and 1.

// !➤ Thousand Separator --> okunabilirlik için
let binary1= 0b1001_1101_0001_1100_0101;
let decimal1 = 123_456_789_000;
let octal1 = 0o123_4567;
let hexa1 = 0xAF12_0108_FD5D;
// For the sake of readibility, we can use _ in between digits of a number, base 2, 10, 16. Example:






/* //! Strings
console.log("----String---");
➤ Scripts are defined as the sequence of characters.
➤ In JavaScript, strings are used for storing and manipulating text.
➤ A string can be any content that shows up inside quotation marks.

We can use backticks(template literal) ,double or single-quotes */

let firstName = `John`;
let lastName = "Doe";
let myCity = 'Tysons';
console.log(`I'm ${firstName} ${lastName}. I live in ${myCity}`);
console.log("I'm " + firstName + " " + lastName + ". I live in " + myCity);

// We can use quotes inside a string unless they don't match the quotes encompassing the string.
let text1 = "I'm John";
let text2 = `She said, "Go ahead"`;
let text3 = `Altgr ve virgülden çıkıyor`
console.log(text3);
console.log(typeof text3);

// If we need to use quotes inside the string, we can use backslash ( \ ) //! escape character.
let text = "He said, \"I am a new programmer.\"";
console.log(text);    // output : He said, "I am a new programmer."

let userName = 'Cooper';
console.log('Merhaba', userName, 'normal');
console.log(`Merhaba, ${userName} backtick`);
console.log(`2 + 3 = , ${2+3} içinde işlem yapılır.`);
console.log(userName.length); // 6 uzunluğu --> property
console.log(userName.concat(` Sky`)); // Cooper Sky diye concat eder --> method

/* //! Breaking Long Code Lines
➤ For best readability, programmers often like to avoid code lines longer than 80 characters.
➤ If a JavaScript statement does not fit on one line, the best place to break it is after an operator: */

// document.getElementById("demo").innerHTML =  //! Break a code line after 
// "Hello Dolly!"; 






// ! Booleans
console.log("----Boolen---");
// ➤ A JavaScript Boolean can have one of two values, either true or false.

// ➤ Boolean data type is useful when we need to have one of two values, such as true/false, yes/no, etc.

// The Boolean() Function
// ➤ You can use the Boolean() function to find out if an expression (or a variable) is true:
Boolean (3 > 2);     //return true
Boolean (2 < 3);     //return true
Boolean (2 > 3);     //return false 
Boolean (2 == 3);    //return false 

// ➤ The Boolean value of everything with a non empty value is true.
Boolean("Hello World");
Boolean(5);
Boolean(-5);
Boolean("false");
Boolean(" ");
Boolean('0');
Boolean(3.14 + 8);   //All of these values return true

// ➤ The Boolean value of everything without a "value" is false.
// ➤ The Boolean value of 0, null, empty string, undefined, is false.
Boolean("");
Boolean(``);
Boolean(0);
Boolean(-0);
Boolean(null);
let f; //undefined
Boolean(f);   //All of these values return false






// ! BigInt
console.log("----BigInt---");
// ➤ The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

// ➤ A BigInt is created by appending n to the end of an integer or by calling the constructor.

// ➤ You can obtain the safest value that can be incremented with Numbers by using the constant Number.MAX_SAFE_INTEGER. With the introduction of BigInts, you can operate with numbers beyond the Number.MAX_SAFE_INTEGER.
const xq = Number.MAX_SAFE_INTEGER;
console.log( typeof xq, xq);
// number 9007199254740991
const yq = BigInt(xq + 1);
console.log(typeof yq, yq);
// bigint 9007199254740992n

// ➤ You can use the operators +, *, -, **, and % with BigInts—just like with Numbers. A BigInt is not strictly equal to a Number, but it is loosely so.

// ➤ A BigInt behaves like a Number in cases where it is converted to Boolean: if, ||, &&, Boolean, !.

// ➤ BigInts cannot be operated on interchangeably with Numbers. Instead, a TypeError will be thrown.

// 🎗️Tips:
// You will not need BigInt in your daily coding tasks. You may need BigInt for extraordinary calculations only.


// ! Symbol
console.log("----Symbol---");
// ➤ Symbol is a primitive value.

// ➤ A value having the data type Symbol can be referred to as a "Symbol value". In a JavaScript runtime environment, a symbol value is created by invoking the function Symbol, which dynamically produces an anonymous, unique value. A symbol may be used as an object property.

// ➤ Symbol can have an optional description, but for debugging purposes only.

// ➤ A Symbol value represents a unique identifier. For example:
// Here are two symbols with the same description:
let Sym1 = Symbol("Sym");
let Sym2 = Symbol("Sym");
console.log(Sym1 === Sym2); // returns "false"

// ➤ Symbol type is a new feature in ECMAScript 2015. There is no ECMAScript 5 equivalent for Symbol.

// ➤ In some programming languages, the symbol data type is referred to as an "atom."





// ! Objects --> non-primitive
console.log("----Objects---");
// ➤ Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

// ➤ In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. In the same way, JavaScript objects can have properties, which define their characteristics.

// Object properties
// ➤ A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object.
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

// ➤ The above example could also be written using an object initializer, which is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}):
const myCars = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  color: 'Black'
}; 
console.log(myCars); //? çıktısı aynı sıra ile olmayabilir, tarayıcı konsolu alfabetik yazdırır.

// ➤ Properties of JavaScript objects can also be accessed or set using a bracket notation
myCars['make'] = 'Ford';  // make key'in valuesi
myCars.model = "Mustang";
myCars.color = 'Red';
console.log(myCars.color); //Red 
console.log(myCars); //! rengi Red oldu.
myCars.sunroof = false;
console.log(myCars); //! sunroof:false eklendi.

// objelere fonksiyon ekleme, burada araba yaşını hesaplayan fonsiyon ekledi

myCars.age = function(current){
  console.log(current - this.year);  //* ikiside çalışır
  console.log(current - myCars.year);
}

myCars.age(2022); // 2022-1969 = 53 verir.





































































































