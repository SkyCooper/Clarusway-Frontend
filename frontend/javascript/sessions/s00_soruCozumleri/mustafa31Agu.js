//* 1. Bölüm Loops

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// const validNumber = () => {
//   let num = prompt("Enter a valid number");

//   if (Number(num)) {
//     console.log("It's a valid number");
//   } else {
//     return validNumber();
//   }
// };

// console.log(validNumber());

//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

// let sayi1 = Number(prompt("Birinci sayı : "));
// let sayi2 = Number(prompt("İkinci sayı : "));

// let ebob = 1;
// let kontrol = 2;

// while (kontrol <= sayi1 && kontrol <= sayi2) {
//   if (sayi1 % kontrol == 0 && sayi2 % kontrol == 0) {
//     ebob = kontrol;
//   }
//   kontrol++;
// }

// if (ebob == 1) {
//   console.log("Girilen sayıların ortak böleni yoktur.");
// } else {
//   console.log(`Girilen sayıların ebob'u ${ebob}`);
// }

//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// const factor = (num) => {
//   let arr = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(factor(12));

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

// const factorial = (num) => {
//   if (num < 0) {
//     return -1;
//   } else if (num == 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };

// console.log(factorial(5));

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

// const divisible = () => {
//   let arr = [];
//   for (let i = 100; i <= 1000; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

// console.log(divisible());

//! Q-6
//? Write a code that prints a multiplication table of numbers 1 to 10.

// const multiTable = () => {
//   let arr = [];
//   for (let i = 1; i <= 10; i++) {
//     arr.push(`multiplication table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//       arr.push(`${i} x ${j} = ${i * j}`);
//     }
//   }
//   return arr;
// };

// console.log(multiTable());

//! Q-7
//? Write a code to draw Whiteball and Powerball numbers for the Powerball lottery game.
//? 5 Whiteball numbers are chosen from 01 to 69 and 1 Powerball number is chosen from 1 to 26.

// const powerball = () => {
//     let powerball = Math.floor(Math.random() * 26) + 1
//     let whiteball = []

//     for (let i = 1; i <= 5; i++){
//         let random = Math.floor(Math.random() * 69) + 1
//         whiteball.push(random)
//     }

//     return `${whiteball.join(', ')}, ${powerball}`
// }

// console.log(powerball())

//* 2. Bölüm Functions

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.
//* süslü kullanılmazsa return gerek yok,
//* default 1.5, girilmez
// const currency = (amount, rate = 1.5) => amount * rate;

// console.log(currency(1000, 1.7));

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

// const type = (x) => typeof x;
// console.log(type(true));

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

const times = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // str[i] === char && count++   //!shortend sol taraf true ise sağ taraf çalışıp artsın
    if (str[i] == char) {
      count++;
    }
  }
  return `${char} occurs ${count} times in ${str}`;
};
console.log(times("Clarusway", "a"));

const times1 = (str, char) => {
  return str.split(char).length - 1;
};
console.log(times1("Clarusway", "a"));

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

const perfectNums = () => {
  let arr = [];

  for (let i = 1; i <= 1000; i++) {
    sum = 0;
    for (let k = 1; k < i; k++) {
      if (!(i % k)) {
        sum += k;
      }
    }
    if (sum === i) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(perfectNums());

//! Q-5
//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses did the user find the number
//? If user can't find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);
