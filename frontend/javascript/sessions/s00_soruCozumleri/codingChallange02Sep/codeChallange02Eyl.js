//! Code Challenge Fest -1
//? 02 Eylül 2022, Cuma

//todo, Pack-1
// Easy - Array Sort CW-Repo ID: JS-CC-27
// Difficult - TR National ID Validator CW-Repo ID: JS-CC-17

//todo, Pack-2
// Easy - Roll the Dices CW-Repo ID: JS-CC-26
// Difficult - Student Registration Form CW-Repo ID: JS-CC-19

//todo, Pack-3
// Easy - Camel Case Formatter CW-Repo ID: JS-CC-25
// Difficult - Random Password Generator CW-Repo ID: JS-CC-24

//todo, Pack-4
// Easy - Email Validator CW-Repo ID: JS-CC-05
// Difficult - US SSN (Social Security Number ) Validator CW-Repo ID: JS-CC-28

//! JS-CC-026 : Roll the Dices
// The purpose of this coding challenge is to create two dice, shake them the desired number of times, and write a function that prints the results as text.

// Expected Outcome:
// if first dice is 1 and second dice is 6, output should be 'one - six'

//? For example :
// call this function with dices(10) Yo should display all 10 result.
// And display the result in the following format on the console:

//? For Example:
// 1st dice: 2 2nd dice: 3 output => 'two' - 'three'
// 1st dice: 6 2nd dice: 4 output => 'four' - 'six' Always dsiplay the low dice first.

const roll = (number) => {
  for (let i = 1; i <= number; i++) {
    let rol1 = Math.ceil(Math.random() * 6);
    let rol2 = Math.ceil(Math.random() * 6);
    const arr = ["one", "two", "three", "four", "five", "six"];
    if (rol1 > rol2) {
      console.log(`${i}. times => ${arr[rol2 - 1]} - ${arr[rol1 - 1]}`);
    } else {
      console.log(`${i}. times => ${arr[rol1 - 1]} - ${arr[rol2 - 1]}`);
    }
  }
};
roll(10);

//! JS-CC-019 : Student Registration
// The purpose of this coding challenge is to display the data given as string in the browser console.

const arr = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];

const student = (a) => {
  // console.log(a);
  a.map((str) => {
    // console.log(str);
    let result = str.split(" ");
    // console.log(str.split(" "));
    console.log(`Student Nr: ${result[0]}\n
First Name: ${result[2]}\n
Last Name: ${result[3].slice(0, -1)}\n
Location: ${result[4].replace(/,$/, "")}\n
Program: ${result[5]}\n
==========================`);
  });
};
student(arr);

//! JS-CC-005 : Email Validator
// The purpose of this coding challenge is to create a function that will check the given email address valid or not.
// Problem Statement
// Write a function that takes email variable and return true or false and write console invalid or valid.
// Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. :
// Capital letters are allowed.
// An email should not start with '@' symbol and should not contain more than one '@' sign.
// There should be at least two characters after the '.' sign. (like .co or .com)
// There should be at least one '. after the '@' sign.

//* For examples:
// name.last_Name@company.com -> 🆗 Valid
// name.143@company.co -> 🆗 Valid
// name.last-Name@company.com -> ❌ Dashes are not allowed
// name.last_Name@company.c -> ❌ There should be at least two characters after the '.' sign.
// name.last_Name@company -> ❌ There should be at least one '. after the '@' sign.

const emailValidator = (email) => {
  const regexPatern = /^[A-Za-z0-9\_]+\@[A-Za-z]+\.[A_Za-z]{2,3}$/;

  // yazılış-1 (1-2-3 hepsi aynı sonucu verir, sadece 1 tanesini yazmak yeterli)
  if (regexPatern.test(email)) {
    console.log(`your email is true`);
  } else {
    console.log(`Your email is false`);
  }

  // yazılış-2
  regexPatern.test(email)
    ? console.log(`Your email is true`)
    : console.log(`Your email is false`);

  // yazılı-3
  regexPatern.test(email) && console.log(`your email is true`);
  !regexPatern.test(email) || console.log(`your email is false`);
};
emailValidator("osmanmerhaba@gmail.com");

//** alternatif çözüm-1 */
const email = "osmanmerhaba@gmail.com";
function isValid(frm) {
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    console.log("Invalid");
    return false;
  } else {
    console.log("Valid");
    return true;
  }
}
isValid(email);

//* ****alternatif çözüm - 2****
let chars = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";

function ValidateEmailAddress(str) {
  let atSymbol = 0;
  let dotCheck = str.length - 1 - str.lastIndexOf(".");
  if (dotCheck == 0 || dotCheck == 1) return `invalid . position`;

  for (const i of str.toLowerCase()) {
    if (i === "@") atSymbol++;
    if (chars.includes(i)) {
    } else {
      return `invalid character detected in email address '${i}'`;
    }
  }

  console.log(str.indexOf("@"), str.lastIndexOf("."));

  if (
    atSymbol > 1 ||
    str.indexOf("@") == 0 ||
    !atSymbol ||
    str.indexOf("@") > str.lastIndexOf(".")
  )
    return `invalid '@' count or position`;
  return `${str} is a valid email address`;
}

console.log(ValidateEmailAddress("mark.m@clarusway.com"));

//* ****alternatif çözüm - 3****
const emailValidation = (email) => {
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.match(emailformat)
    ? console.log("Valid email address!")
    : console.log("You have entered an invalid email address!");
};
emailValidation("can.ocalir@gmail.com");

//! JS-CC-027 : Return the requested element from an array.
// The purpose of this coding challenge is to create a function that will take two parameters. The first parameter
// should be an array and the second parameter should be a positive integer. The function will sort the array and
// return the smallest nth (n = second parameter) element. Return an error message if the second parameter is
// greater than the number of elements of the array.

// Expected Outcome
// For Example:
// Input : ([10,50,61,17,82,95,9,11,12,13],3)
// Output : 11 (3rd smallest element)

// Input : ([10,50],4)
// Output : Out of range

const sortArr = function (arr, n) {
  if (n > arr.length || n <= 0) {
    return "Out of range";
  }
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  // array.sort() mutater func.
  return arr[n - 1];
};

const sample = [2, 35, 14, 3, 12, 15];

console.log(sortArr(sample, 2));

//! JS-CC-007 : TR Identity Number Validation
// Purpose of the this coding challenge is to write a code that given TR Identity Number, returns valid or invalid.
// Valid TR Identity Number must follow these rules:
// 1. TR Identity Number actually consists of 9 digits, the last 2 digits have been added for
// control/verification purposes.
// 2. The ID number cannot start with 0.
// 3. The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10
// digits.
// 4. Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in
// the 2nd, 4th, 6th and 8th digits.
// 5. The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
// 6. When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the
// ones digit (mod 10) gives the 11th digit.

//* Valid TR Identity Numbers for checking
//? Here are randomly generated valid ID numbers. You can use them to test your code.
// 34444185856
// 10880383988
// 14702551364
// 90091059698
// 32413045316
// 12835718432
// 53963153566
// 11111111110

const IdControl = function (str) {
  if (str.length !== 11 || +str[0] === 0) {
    return "Id is invalid";
  }

  let even = +str[1] + +str[3] + +str[5] + +str[7];
  // 0 - 2 - 4 - 6 - 8
  let odd = +str[0] + +str[2] + +str[4] + +str[6] + +str[8];
  // 1 - 3 - 5 - 7 - 9

  const s10 = (odd * 7 - even) % 10;
  const s11 = (even + odd + s10) % 10;

  return s10 === +str[9] && s11 === +str[10]
    ? "TR Id is valid"
    : "TR Id is invalid";
};
console.log(IdControl("14702551364"));

//*** alternatif çözüm-1 */

let check = (tc) => {
  tc = "" + tc;
  let sumTek = 0;
  let sumCift = 0;
  let sum = 0;
  let flag = true;
  if (tc[0] == 0) {
    flag = "false1";
  } else {
    for (let i = 0; i < 9; i++) {
      if (i % 2 == 0) {
        sumTek += Number(tc[i]);
      } else {
        sumCift += Number(tc[i]);
      }
    }
    sumTek = (sumTek * 7 - sumCift) % 10;
    console.log(sumTek);
    if (sumTek == tc[9]) {
      for (let i = 0; i < 10; i++) {
        sum += Number(tc[i]);
      }
      console.log(sum);
      if (sum % 10 != tc[10]) {
        flag = "false2";
      }
    } else {
      flag = "false3";
    }
  }
  return flag;
};

console.log(check(11111111110));

//! JS-CC-028 : SSN (Social Security Number) Validator
// The purpose of this coding challenge is to create a function that will check the given SSN (Social Security Number) is valid or not valid.

// Problem Statement
// Valid a SSN (Social Security Number);
// should have 9 digits. 522-82-5151
// should be divided into 3 parts by hyphen (-).
// The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
// The second part should have 2 digits and it should be from 01 to 99.
// The third part should have 4 digits and it should be from 0001 to 9999.

//? Random Valid SSN numbers for check your code:
// 268-26-3556
// 237-86-7532
// 304-92-5339
// 510-72-0765
// 504-58-0987

let checkSgk = (id) => {
  id = "" + id;
  console.log(id);
  id = id.split("-");
  console.log(id);
  flag = true;
  for (i in id) {
    if (i == 0) {
      if (Number(id[i]) > 667 && Number(id[i]) < 899) {
        flag = "false1";
      }
    } else if (i == 1) {
      if (Number(id[i] > 99)) {
        flag = "false4";
      }
    } else if (i == 2) {
      if (Number(id[i] > 9999)) {
        flag = "false2";
      }
    } else {
      flag = "false3";
    }
  }
  return flag;
};

console.log(checkSgk("268-26-3556"));

//! JS-CC-025 : Camelizes the Sentences
// The purpose of this coding challenge is to create a function that will take text in kebab case format or with spaces and output it in camel case format.
// Expected Outcome
// For Example:
// Input : JavaScript coding ChAlLenge
// Output : javaScriptCodingChallenge

// Input : JavaScript-coding-challenge
// Output : JavaScriptCodingChallenge

// Input : javaScriptCodingChallenge
// Output : javaScriptCodingChallenge

let camelCase = (id) => {
  if (id.includes("-")) {
    id = id.split("-");
  } else {
    id = id.split(" ");
  }
  for (i in id) {
    id[i] = id[i][0].toUpperCase() + id[i].slice(1, id[i].length).toLowerCase();
  }
  return id.join("");
};

console.log(camelCase("Javascript-code-woRld-pyTHon"));

//! JS-CC-024 : Random Password Generator
// Purpose of the this coding challenge is to write a code that can generate random password for 10 characters
// as default and expected constraints below.

// Expected Outcome
// password length must be equal to 10
// there should be 3 numbers
// and there should 2 symbols from below:
//* !@#$%^&*()\_+~|}{[]:;?><,./-=
// there should be minimum 1 lower and 1 upper case letters,

//? valid samples:
// Aa123&!xyz
// Aa@/456stu
// 123aA(p?rs

//? invalid samples:
// AB123&!XYZ    no lower case letters
// ab123&!xyz    no upper case letters
// Aa@c456stu    only one symbol
// 12aA(p?rsz    only two numbers

//* çözüm-1**********
let passChars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 10;
let password = "";
for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * passChars.length);
  password += passChars.substring(randomNumber, randomNumber + 1);
}
console.log(`Random pasword : `, password);

//* çözüm-2**********
function passwordGenerator() {
  let password = [];
  let specialCharacters = "!@#$%^&*(_+~|}{[]:;?><,./-=";
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 3; i++) {
    password.push(Math.floor(Math.random() * 10));
  }
  for (let i = 0; i < 2; i++) {
    password.push(specialCharacters[Math.floor(Math.random() * 27)]);
  }
  password.push(letters[Math.floor(Math.random() * 26)]);
  password.push(letters[Math.floor(Math.random() * 26) + 26]);
  for (let i = 0; i < 3; i++) {
    password.push(letters[Math.floor(Math.random() * 52)]);
  }
  // console.log(password.join(""));
  for (let i = password.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = password[i];
    password[i] = password[j];
    password[j] = temp;
  }
  return password.join("");
}

console.log(`Generated password : `, passwordGenerator());
