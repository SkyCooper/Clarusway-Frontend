//



//! length Property

// ➤ length property returns the count of the total number of characters.
// ➤ The length of an empty string is 0.

let x = "Clarusway";
var y = "";

console.log (`x length : ${x.length}`); // 9
console.log (`y length : ${y.length}`); // 0

//! concat() Method
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


//! charAt() Method

// ➤ The charAt() method returns the char value at the specified index in a string.
// ➤The index of the first character is 0 and the index of the last character is string.length-1.

let str = "Clarusway";

console.log(str.charAt(0)); // C
console.log(str.charAt(3)); // r
console.log(str.charAt(str.length-1)); //y

// Also we can use bracket notation `[]` to access the string elements

console.log(str[0]); // C
console.log(str[3]); // r
console.log(str[str.length-1]); //y



//! includes() Method
// ➤ The includes() method specifies whether a string includes the characters of a specified string.
// ➤ This method returns true if the characters are in the string, and if not false.
//todo, ⚠️Warning : The includes() method is case sensitive.

let str1 = "Hello John, welcome to Clarusway.";
let t = str1.includes("welcome");
let f = str1.includes("Welcome");

console.log(`t = ${t}`); // true,
console.log(`f = ${f}`); // false, W harfi büyük olduğundan


//! indexOf() Method
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
console.log(result);  // 12 den başladığı için cevap 32 


//! lastIIndexOf() Method
// ➤ The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let firstResult = str2.lastIndexOf("know");
console.log(`firstResult is ${firstResult} `);  //firstResult is 47 en sonuncusu

let secondResult = str2.lastIndexOf("know", str2.lastIndexOf("know") - 1); // Nested use
console.log(`secondResult is ${secondResult} `); //secondResult is 32  sondan önceki


//! search() Method
// ➤ The search() method searches a string for a given value and returns the position of the match.
// ➤The search() method accepts a regular expression and returns the index of the first match in a string
// ➤ This method returns -1 if the value is not found.

let str3 = "You do not Know what you do not know until you know.";
console.log (str3.search("know"));  //32
console.log (str3.search(/know/i)); //11 To replace case insensitive, use a regular expression with an /i flag (insensitive).
console.log(str3.search('W')); //-1 Capital 'W' is not found in the string
console.log(str3.search(/W/i)); //Disable case sensitive and returns 14


//todo, Q: The two methods, indexOf() and search(), are equal? A: NOT equal. 
// The search() method cannot take a second start position argument. 
// The indexOf() method cannot take powerful search values (regular expressions).


//! replace() Method

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


//! slice() Method
// ➤ The slice() method extracts a section of a string and returns it as a new string.
// ➤ We can use a negative number to select from the end of the string.
// ➤ If you dont use the second parameter, the method will slice out the rest of the string.

const word= "CLARUSWAY";

console.log (word.slice(0, 4)); // CLAR
console.log (word.slice(5, 8)); // SWA
console.log (word.slice(2)); // ARUSWAY
console.log (word.slice(3, -3)); // RUS
console.log (word.slice(-8, -4)); // LARU

//! substring() Method
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


//! split() Method
// ➤ The split() method divides a string into an array of substrings, and returns the new array.
// ➤ The split() method does not alter the original string.

//todo, Syntax: split([separator, [limit]]);


let str5 = "Hello John, welcome to Clarusway."

let arr = str5.split(" ");
console.log (arr); // ['Hello', 'John,', 'welcome', 'to', 'Clarusway.']

arr =  str5.split(" ",2);
console.log (arr); //['Hello', 'John,']

arr =  str5.split(","); // , is the seperator
console.log (arr); // ['Hello John', ' welcome to Clarusway.']

arr =  str5.split(""); // empty string as a  seperator.
console.log (arr); // ['H', 'e', 'l', 'l', 'o', ' ', 'J', 'o', 'h', 'n', ',', ' ', 'w', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'C', 'l', 'a', 'r', 'u', 's', 'w', 'a', 'y', '.']

arr =  str5.split(); // without a  seperator.
console.log (arr); //['Hello John, welcome to Clarusway.']


//! toLowerCase() Method
// ➤ The toLowerCase() method transforms a string to lowercase letters.
// ➤ The toLowerCase() method does not alter the original string, because string is immutable. toLowerCase() method creates a new string in which all characters are lowercased.

let s = "WELCOME TO CLARUSWAY";

console.log(s.toLowerCase()); //welcome to clarusway
console.log(s); //WELCOME TO CLARUSWAY

//! toLocaleLowerCase() method

let word2 = 'PİJAMALI'; // This is a Turkish word (meaning : having pyjamas) mappings in Unicode.

console.log(word2.toLowerCase()); // pi̇jamali  ❌This is not the correct conversion.
console.log(word2.toLocaleLowerCase('tr')); // ✔ pijamalı
console.log(word2.toLocaleLowerCase());     // ✔ pijamalı



//! toUpperCase() Method
// ➤ The toUpperCase() method transforms a string to uppercase letters.
// ➤ The toUpperCase() method does not alter the original string, because string is immutable. toUpperCase() method creates a new string in which all characters are uppercased.

let sentence2 = "welcome to Clarusway";

console.log(sentence2.toUpperCase()); //WELCOME TO CLARUSWAY
console.log(sentence2); //welcome to Clarusway


//! toLocaleUpperCase() method

let city = 'istanbul';

console.log(city.toUpperCase()); // ISTANBUL  ❌This is not the correct conversion.
console.log(city.toLocaleUpperCase('tr')); // ✔ İSTANBUL


//! trim() Method
// ➤ The trim() method eliminates whitespace from both sides of a string.
// ➤The whitespace characters are space, tab, no-break space, etc.
// ➤To remove whitespace characters from the beginning or from the end of a string only, you use the trimStart() or trimEnd() method.
// ➤ The trim() method does not alter the original string.

let str6 = "                 Welcome to Clarusway                 ";

console.log(str6.trim()); // Welcome to Clarusway
console.log(str6.trimStart()); // Welcome to Clarusway                 /
console.log(str6.trimEnd()); //                  Welcome to Clarusway































































































































