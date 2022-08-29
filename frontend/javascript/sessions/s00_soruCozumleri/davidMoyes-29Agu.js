//todo, 29 Ağustos 2022, Pazartesi @F-1450 David Moses workshop

//! Assignment-JS-1: Write a JavaScript program to determine a year is a leap year in the Gregorian calendar.

// bir yılın artık yıl olup olmadığını hesapla
// artık yıl olması için 400 ile modu 0, veya 4 ile modu 0 olmalı ve 100 ile modu 0 olmamalı
// 4100 false değer vermeli */

// let girilenYil = parseInt(prompt("Yıl için bir değer giriniz:", "4100"));

// console.log(girilenYil % 400 == 0);
// console.log(girilenYil % 4 == 0 && girilenYil % 100 != 0);

// let artikYilMi =
//   girilenYil % 400 == 0 || (girilenYil % 4 == 0 && girilenYil % 100 != 0);
// console.log("Girilen " + girilenYil + " yılı artık yıl mı? :" + artikYilMi);

//! Assignment-JS-2: Write a JavaScript program to determine a year is a leap year in the Gregorian calendar.

// let side1 = +prompt("Enter first side");35
// let side2 = +prompt("Enter second side");
// let side3 = +prompt("Enter third side");

// const perimeter = (side1 + side2 + side3) / 2;
// const area = Math.sqrt(
//   perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
// );
// console.log(`Area of triangle is ${area}, perimeter is ${perimeter}.`);

//! Assignment-JS-3: Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.

// const num1 = Number(prompt("Enter number:"));

// if (num1 < 20) {
//   console.log(`Result : ${20 - num1}`);
// } else {
//   console.log(`Result : ${(num1 - 20) * 2}`);
// }

// let result =
//   num1 < 20
//     ? console.log(`Result : ${20 - num1}`)
//     : console.log(`Result : ${(num1 - 20) * 2}`);

//! Write a JavaScript program that takes 3 integers from a user and displays the largest.

// let number1 = +prompt("Enter first number");
// let number2 = +prompt("Enter second number");
// let number3 = +prompt("Enter third number");

// if (numbe555r1 > number2 && number1 > number3) {
//   console.log(`Largest number i44s ${number1}`);
// } else if (number2 > number1 && number2 > number3) {
//   console.log(`Largest number is ${number2}`);
// } else {
//   console.log(`Largest number is ${number3}`);
// }

//! Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.

// let number1 = +prompt("Enter first number");
// let number2 = +prompt("Enter second number");
// let number3 = +prompt("Enter third number");

// let multiplies = number1 * number2 * number3;
// let sign = multiplies > 0 ? "+" : "-";
// console.log(`Multiply : ${multiplies}, The sign is ${sign}`);

//! Write a JavaScript program to check whether a given integer is in the range 50 to 100.

// const num1 = Number(prompt("Enter number:"));
// let check = num1 > 50 && num1 < 100 ? "in range" : "out of range";
// console.log(`Number is ${num1} and ${check}`);

//! Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

// const topla = function (n1, n2) {
//   return n1 + n2;
// };

// const cikar = function (n1, n2) {
//   if (n1 > n2) {
//     return n1 - n2;
//   } else {
//     return n2 - n1;
//   }
// };

// const carp = function (n1, n2) {
//   return n1 * n2;
// };

// const bol = function (n1, n2) {
//   return (n1 / n2).toFixed(2);
// };

// const hesapMakinesi = function (n1, n2, opretator) {
//   let sonuc = 0;
//   if (opretator == "+") {
//     sonuc = topla(n1, n2);
//   } else if (opretator == "-") {
//     sonuc = cikar(n1, n2);
//   } else if (opretator == "*") {
//     sonuc = carp(n1, n2);
//   } else if (opretator == "/") {
//     sonuc = bol(n1, n2);
//   } else {
//     sonuc = "Hatalı operator secimi";
//   }
//   console.log("İşlem Sonucu: ", sonuc);
//   return sonuc;
// };

// hesapMakinesi(5, 8, "+");
// hesapMakinesi(5, 4, "*");

//! Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.
// Example1: input = Tuesday ⇒ output: Tuesday is a weekday
// Example2: input = Saturday⇒ output: Saturday is not a weekday

// let day = "Pazar";
// switch (day) {
//   case "Pazartesi":
//   case "Salı":
//   case "Çarşamba":
//   case "Perşembe":
//   case "Cuma":
//     console.log(`Today is ${day} and it's Weekday 😥`);
//     break;
//   default:
//     console.log(`Today is ${day} and it's Weekend 😁`);
// }

//! Write a JavaScript program that tells the user provided number is odd or even.

// const num1 = Number(prompt("Enter number:"));
// let check = num1 % 2 ? "odd" : "even";
// console.log(`Number is ${num1} and ${check}`);

//! Write a JavaScript program to find a value that is nearest to 100 from two different given integer values.
