// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================


//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
let strA = "Clarusway";
//Char => C, l, a,....
let strB = " Hello";
let strC = " Full Stack";

console.log(strA, typeof strA);


//!2 - Non-primitive String tanımlama
let strD = new String("Non-Primitive");
console.log(typeof strD);

//?----------------------------------------
console.log(strA.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

let sayim = 5;
let strE = strA + strB + strC + sayim; // Concatination
console.log(strE, typeof strE);


//! length Property
console.log("-- lnegth Property --");

// ➤ length property returns the count of the total number of characters.
// ➤ The length of an empty string is 0.

let x = "Clarusway";
var y = "";

console.log(`x length : ${x.length}`); // 9
console.log(`y length : ${y.length}`); // 0



//* ---------------------------------------------------
//!  concat() - immutable
//* ---------------------------------------------------

console.log("-- concat Property --");

// The concat() method is used to combine two or more strings.

// This method does not modify the current strings but returns a new string that contains the joined strings text.

let s1 = "Hello ";
let s2 = "World!";
let s3 = s1.concat("js " + s2);
console.log(s3);

// ➤ The concat() method can be used instead of the plus(+) operator.

s3 = s1 + s2;
console.log(s3);

x = "a, b";
y = "c, d, e";
let z = x.concat(y);
console.log(z); // a, bc, d, e

console.log(strA.concat(strB));
console.log(strA, strB);

//? Assinging yapılırsa değeri değişir.
strA = strA.concat(strC, " Path");
console.log(strA); 



//todo, in-clas ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

console.log("---- örnek-1 ----");

const esitMi = (str1, str2) =>{
   return str1.toLocaleLowerCase() === str2.toLocaleLowerCase() 
    ? `${str1} ile ${str2} eşittir` : `${str1} ile ${str2} eşit değildir.`
}
//arrow fonnsiyonda süslü kullanılırsa return kullanmak gerekir.
console.log(esitMi("MerHaba", "MERHABA"));
console.log(esitMi("Mer", "Hell"));


// const esitMi = (str1, str2) =>
//     str1.toLocaleLowerCase() === str2.toLocaleLowerCase() 
//     ? `${str1} ile ${str2} eşittir` : `${str1} ile ${str2} eşit değildir.`
// süslü yoksa return kullanmadan da olur.



//* ---------------------------------------------------
//!  localeCompare() , dilleri kıyaslamak için kullanılıyor.
//* ---------------------------------------------------

const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

//? 'BASE: a ≠ b, a = á, a = A'  
//? 'ACCENT: a ≠ b, a ≠ á, a = A'  aksan demek, 
//? 'CASE: a ≠ b, a = á, a ≠ A' 



//! charAt() Method - Belirtilen indexteki karakteri getirir.
console.log("-- charAt() Method --");

// ➤ The charAt() method returns the char value at the specified index in a string.
// ➤The index of the first character is 0 and the index of the last character is string.length-1.

let str = "Clarusway";

console.log(str.charAt(0)); // C
console.log(str.charAt(3)); // r

//todo, son harf için
console.log(str.charAt(str.length - 1)); //y

// Also we can use bracket notation `[]` to access the string elements

console.log(str[0]); // C
console.log(str[3]); // r
console.log(str[str.length - 1]); //y



//* ---------------------------------------------------
//! includes() Method - string içinde arama yapıyor, true/false çıktı veriyor. case sensitivedir, bundan kurtulmak için loLowerCase/toUpperCase yapılabilir.
//* ---------------------------------------------------

// ➤ The includes() method specifies whether a string includes the characters of a specified string.
// ➤ This method returns true if the characters are in the string, and if not false.
//todo, ⚠️Warning : The includes() method is case sensitive.

let str1 = "Hello John, welcome to Clarusway.";
let t = str1.includes("welcome");
let f = str1.includes("Welcome");
let t1 = str1.includes("");

console.log(`t = ${t}`); // true,
console.log(`f = ${f}`); // false, W harfi büyük olduğundan
console.log(`t1 = ${t1}`); // true, verir null karakter var ama derleyici göstermiyor.


const wordTobe = "To be or not to be, that is the question";
console.log(wordTobe.includes("to be"));        //? true
console.log(wordTobe.includes("That"));         //? false
console.log(wordTobe.includes(""));             //? true
console.log(wordTobe.includes("to be", 14));    //? false
console.log(wordTobe.includes("to be", 13));    //? true


//* ---------------------------------------------------
//! indexOf() Method - case sensitivedir. aranan değerin İLK BULDUĞU başlangıç indexini verir.
//* ---------------------------------------------------


// ➤ The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
// ➤ This method returns -1 if the value is not found.

//todo, Syntax :  indexOf(searchString)   indexOf(searchString, position)

let str2 = "You do not know what you do not know until you know.";
let findString = "know";
let result = str2.indexOf(findString);

console.log(`first occurrence of ${findString} is position at ${result} `);
// first occurrence of know is position at 11

// ➤ You can find second or other letters / word in the string with second parameter of indexOf() method. Find the first occurrence of the letter "know" in a string, starting the search at position 12:

result = str2.indexOf("know", 12); //start search from 12th position
console.log(result); // 12 den başladığı için cevap 32


// const wordTobe = "To be or not to be, that is the question";

const toBe = wordTobe.indexOf("or");
console.log(toBe);      //?6
console.log(wordTobe);  //? To be or not to be, that is the question
console.log(strD);  //? String {'Non-Primitive'}
console.log(wordTobe.indexOf("be"));  //? 3 ilk bulduğunun
console.log(wordTobe.lastIndexOf("be"));  //? 16  son bulduğu be'nin
console.log(wordTobe.lastIndexOf("BE"));  //? -1  yani yok, stringlerde negatif index yoktur.

//* ---------------------------------------------------
//! lastIIndexOf() Method - case sensitive
//* ---------------------------------------------------


// ➤ The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let firstResult = str2.lastIndexOf("know");
console.log(`firstResult is ${firstResult} `); //firstResult is 47 en sonuncusu

let secondResult = str2.lastIndexOf("know", str2.lastIndexOf("know") - 1); // Nested use
console.log(`secondResult is ${secondResult} `); //secondResult is 32  sondan önceki



//* ---------------------------------------------------
//! search() Method
//* regular expression(regex)
//* https://www3.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html  nasıl yazılacağına buradan bak.
// any character that is not a word character or whitespace
//? const regex = /[^\w\s]/g;
//* ---------------------------------------------------

const buyukHarf = /[A-Z]/;
const nokta = /[.]/;
const virgul = /[,]/;
console.log(wordTobe.search(buyukHarf)); //? ilk buyuk harfin indeksi 0
console.log(wordTobe.search(virgul)); //?  18
console.log(wordTobe.search(nokta)); //? -1


//todo, örnek kullanım;
// function palindrome() {
//   var str = prompt("enter a sentence: ");
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, "");
//   console.log(lowRegStr);
//   var reverseStr = lowRegStr.split("").reverse().join("");
//   console.log(reverseStr);
//   return reverseStr === lowRegStr;
// }
// console.log(palindrome());

//!  /^[A-Za-z0-9\_]+\@[A-Za-z]+\.[A_Za-z]{2,3}$/ basit bir email validasyon regex patterni


// ➤ The search() method searches a string for a given value and returns the position of the match.
// ➤The search() method accepts a regular expression and returns the index of the first match in a string
// ➤ This method returns -1 if the value is not found.

let str3 = "You do not Know what you do not know until you know.";
console.log(str3.search("know")); //32
console.log(str3.search(/know/i)); //11 To replace case insensitive, use a regular expression with an /i flag (insensitive).
console.log(str3.search("W")); //-1 Capital 'W' is not found in the string
console.log(str3.search(/W/i)); //Disable case sensitive and returns 14


//todo, Q: The two methods, indexOf() and search(), are equal? A: NOT equal.
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


//* ----------------------------------------------------------
//!  replace(searchFor, replaceWith) metodu --immutable
//* ----------------------------------------------------------
let oku = "Oku Baban gibi, saf olma";

console.log(oku.replace("saf olma", "akilli ol"));   //Oku Baban gibi, akilli ol
console.log(oku); //Oku Baban gibi, saf olma

//? assigning yapılmadığı sürece esas değer değişmez.

oku = oku.replace("saf olma", "akilli ol");
console.log(oku);  //Oku Baban gibi, akilli ol
//? artık değişti


// regex ile yapılması
oku = oku.replace(/BASARILI/i, "Zengin");
console.log(oku);  //Oku Baban gibi, Zengin ol

//! NOT: replace metodu eger Regex ile aksi belirtilmiyorsa (g) sadece ilk buldugunu degistirir.




// ➤ The replace() method looks for a string for a given value and returns a new string to replace the specified values.

//todo, ⚠️ Warning :
// The replace() method does not change the string it is called on. It returns a new string.
// By default, the replace() method replaces only the first match and the replace() method is case sensitive.

let myString = "Mr Brown has a brown house and a brown car";
let myNewString = myString.replace("brown", "red");
console.log(myNewString); //Mr Brown has a red house and a brown car sadece ilk bulduğunu değiştirdi
console.log(myString); // Mr Brown has a brown house and a brown car

// ➤ To replace case insensitive, use a regular expression with an /i flag (insensitive).
// ➤/g flag (global) replaces all matches.

myNewString = myString.replace(/brown/gi, "green"); // (global/insensitive)

console.log(myNewString); //Mr green has a green house and a green car
console.log(myString); // Mr Brown has a brown house and a brown car,




//* ----------------------------------------------------------
//!  replaceAll() --immutable, regex kullanmadan hepsini tek seferde değiştirmeyi sağlıyor.
//* ----------------------------------------------------------
let degistir = "daglar daglar yol ver gecem..";
degistir = degistir.replaceAll("daglar", "Dağlar");
console.log(degistir);

//?Regex de kullanilabilir.
let degistir2 =
  "No woman, no cry" +
  " No woman, no cry, eh, yeah" +
  " Little darling, don't shed no tears" +
  " No woman, no cry, eh";

console.log(degistir2.replaceAll(/no/gi, "Hayir"));



//! slice() Method - negatif index kullanılan nadir yerlerden,
// start -inclusive(dahil)  end-exclusive(dahil değil)
// ➤ The slice() method extracts a section of a string and returns it as a new string.
// ➤ We can use a negative number to select from the end of the string.
// ➤ If you dont use the second parameter, the method will slice out the rest of the string.

const word = "CLARUSWAY";

console.log(word.slice(0, 4)); // CLAR
console.log(word.slice(5, 8)); // SWA
console.log(word.slice(2)); // ARUSWAY
console.log(word.slice(3, -3)); // RUS
console.log(word.slice(-8, -4)); // LARU




//! substring() Method - sliceden farkı negatif index kabul etmiyor. hata vermiyor ama esas stringin aynısını verir.
// ➤ The substring() method returns the parts of a string between "start" and "end", index not including "end" itself.
// ➤ If the endIndex parameter is omitted, the substring() method returns the substring at the end of the string.
// ➤ The substring() method does not alter the original string.
// ➤ The substring() method returns an empty string if startIndex and endIndex are equal.
// ➤ When startIndex is bigger than endIndex, substring() reverses the roles: startIndex becomes endIndex and vice versa.
// ➤If either startIndex or endIndex is less than zero or greater than the string.length, the substring() considers it as zero (0) or string.length respectively.

let sentence = "Welcome to Clarusway.";

console.log(sentence.substring(5, 10)); //me to
console.log(sentence.substring(10, 5)); //me to
console.log(sentence.substring(11)); //Clarusway.
console.log(sentence.substring(10, 100)); //Clarusway.

//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";

const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); //? gunduz gece..

console.log(veysel.slice(17, 30)); //? dayim yuruyor.
console.log(veysel.slice(-10)); //? duz gece..
console.log(veysel.slice(-23, -19)); //? yuru

console.log(veysel.substring(17, 30)); //? dayim yuruyor
//! negatif indeks substring ile kullanilamaz.
console.log(veysel.substring(-10)); //? Uzun ince bir yoldayim yuruyorum gunduz gece..






//! split() Method
// ➤ The split() method divides a string into an array of substrings, and returns the new array.
// ➤ The split() method does not alter the original string.

//todo, Syntax: split([separator, [limit]]);

let str5 = "Hello John, welcome to Clarusway.";

let arr = str5.split(" ");
console.log(arr); // ['Hello', 'John,', 'welcome', 'to', 'Clarusway.']

arr = str5.split(" ", 2);
console.log(arr); //['Hello', 'John,']

arr = str5.split(","); // , is the seperator
console.log(arr); // ['Hello John', ' welcome to Clarusway.']

arr = str5.split(""); // empty string as a  seperator.
console.log(arr); // ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'o', 'h', 'n', ',', ' ', 'w', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'C', 'l', 'a', 'r', 'u', 's', 'w', 'a', 'y', '.']

arr = str5.split(); // without a  seperator.
console.log(arr); //['Hello John, welcome to Clarusway.']


//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------
const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" ");
console.log(splited, typeof splited); //! Bosluklara göre ayirarak Array'e cevirdi.


const chars = tarkan.split("");
console.log(chars); //* null karakterine göre harfleri ayırarark bir char dizisi oluşturdu.




//! toLowerCase() Method
// ➤ The toLowerCase() method transforms a string to lowercase letters.
// ➤ The toLowerCase() method does not alter the original string, because string is immutable. toLowerCase() method creates a new string in which all characters are lowercased.

let s = "WELCOME TO CLARUSWAY";
console.log(s.toLowerCase()); //welcome to clarusway
console.log(s); //WELCOME TO CLARUSWAY



//! toLocaleLowerCase() method
let word2 = "PİJAMALI"; // This is a Turkish word (meaning : having pyjamas) mappings in Unicode.

console.log(word2.toLowerCase()); // pi̇jamali  ❌This is not the correct conversion.
console.log(word2.toLocaleLowerCase("tr")); // ✔ pijamalı
console.log(word2.toLocaleLowerCase()); // ✔ pijamalı



//! toUpperCase() Method
// ➤ The toUpperCase() method transforms a string to uppercase letters.
// ➤ The toUpperCase() method does not alter the original string, because string is immutable. toUpperCase() method creates a new string in which all characters are uppercased.

let sentence2 = "welcome to Clarusway";
console.log(sentence2.toUpperCase()); //WELCOME TO CLARUSWAY
console.log(sentence2); //welcome to Clarusway



//! toLocaleUpperCase() method
let city = "istanbul";
console.log(city.toUpperCase()); // ISTANBUL  ❌This is not the correct conversion.
console.log(city.toLocaleUpperCase("tr")); // ✔ İSTANBUL




//! trim() Method
// ➤ The trim() method eliminates whitespace from both sides of a string.
// ➤The whitespace characters are space, tab, no-break space, etc.
// ➤To remove whitespace characters from the beginning or from the end of a string only, you use the trimStart() or trimEnd() method.
// ➤ The trim() method does not alter the original string.

let str6 = "                 Welcome to Clarusway                 ";

console.log(str6.trim()); // Welcome to Clarusway
console.log(str6.trimStart()); // Welcome to Clarusway                 /
console.log(str6.trimEnd()); //                  Welcome to Clarusway


//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = "    Hoş geldin ya şehri Ramazan     ";
console.log(ramazan);
console.log(ramazan.length); // 36
console.log(ramazan.trim());
console.log(ramazan.trim().length); //27




//* ----------------------------------------------------------
//! startsWidth() , endsWith() - case sensitive
//* ----------------------------------------------------------
let word22 = "Sen gulunce guller acar gul pembe!";

console.log(word22.startsWith("Sen"));      //? true
console.log(word22.startsWith("gulunce"));  //? false
console.log(word22.startsWith("gulunce", 4));  //? true

console.log(word22.endsWith("!"));  //? true
console.log(word22.endsWith("acar", 23));  //? true, 23e kadar - hariç
console.log(word22.endsWith("acar", 22));  //? false
console.log(word22.endsWith("acar", 24));  //? false



//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
