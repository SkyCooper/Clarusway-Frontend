
//! Regex count lowercase letters - 8kyu
// Your task is simply to count the total number of lowercase letters in a string.


// Examples
// lowercaseCount("abc"); ===> 3
// lowercaseCount("abcABC123"); ===> 3
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

function lowercaseCount(str) {
  //     return str.replace(/[^qwertyuopasdfghjklizxcvbnm]/g, "").length;
  return str.match(/[a-z]/g || []).length;
}

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));



//! Array.diff - 6kyu
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// const arrayDiff = (arr1, arr2) => {
//   arr1.filter((arr2)=>arr2.split(""))
// }

// console.log(arrayDiff([1, 2], [1])); // [2]
// console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
// console.log(arrayDiff([], [1, 2])); // []

//! Is the date today - 8kyu
// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.
// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
  //Code goes here.
}

console.log(isToday());
const today = new Date();
console.log(today);

//! Alternate capitalization - 7kyu
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

//? klasik uzun çözüm,
// const capitalize = (str) => {
//   const arr1 = [];
//   const arr2 = [];
//   for(let i=0; i < str.length; i++){
//     if(i%2 == 0){
//       arr1.push(String(str[i]).toUpperCase());
//     }else{
//       arr1.push(str[i]);
//     }
//   }
//   for(let i=0; i < str.length; i++){
//     if(i%2 !== 0){
//       arr2.push(String(str[i]).toUpperCase());
//     }else{
//       arr2.push(str[i]);
//     }
//   }
//   return [arr1.join(""), arr2.join("")];
// }

//? map ile çözüm
function capitalize(str) {
  let str1 = [...str]
    .map((item, i) => (i % 2 == 0 ? item.toUpperCase() : item))
    .join("");
  let str2 = [...str]
    .map((item, i) => (i % 2 !== 0 ? item.toUpperCase() : item))
    .join("");
  return [str1, str2];
}

//! reduce ile;
// function capitalize(s) {
//     return [...s].reduce((acc, val, i) => {
//         acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
//         acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
//         return acc;
//     }, ['', '']);
// };

console.log(capitalize("abcdef"));
console.log(capitalize("codewars"));

//! Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  if (year < 100) {
    return 1;
  } else {
    return year % 100 > 0 ? Number((year / 100).toFixed()) + 1 : year / 100;
  }
}

console.log(century(11784));

//! Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
  let sum = 0;
  for (item of games) {
    if (item[0] > item[2]) {
      sum += 3;
    } else if (item[0] == item[2]) {
      sum += 1;
    }
  }
  return sum;
}

const games1 = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
]; //30
const games2 = [
  "1:1",
  "2:2",
  "3:3",
  "4:4",
  "2:2",
  "3:3",
  "4:4",
  "3:3",
  "4:4",
  "4:4",
]; //10

// const points = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
// const points = (a) =>
//   a.reduce((r, e) => {
//     const x = e[0];
//     const y = e[2];
//     return r + (x > y ? 3 : x < y ? 0 : 1);
//   }, 0);

console.log(points(games1));
console.log(points(games2));

//! Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const getAverage = (marks) => {
  return parseInt(marks.reduce((acc, val) => (acc += val), 0) / marks.length);
};

console.log(getAverage([2, 2, 2, 2]));

//! Array plus array - 8kyu
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

const arrayPlusArray = (arr1, arr2) => {
  return (
    arr1.reduce((acc, val) => (acc += val), 0) +
    arr2.reduce((acc, val) => (acc += val), 0)
  );
  //  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  //  return [...arr1, ...arr2].reduce((a, b) => a + b);
};

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));

//! Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {};

//! Is he gonna survive? - 8kyu
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  //   return dragons * 2 <= bullets ? true : false;
  return bullets >= dragons * 2;
}
console.log(hero(10, 5));
console.log(hero(7, 4));

//! Cat years, Dog years - 8kyu
// I have a cat and a dog.I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears]

//* NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const animalYears = (number) => {
  if (number == 1) {
    return [1, 15, 15];
  }
  if (number == 2) {
    return [2, 24, 24];
  }
  if (number >= 3) {
    return [number, 24 + (number - 2) * 4, 24 + (number - 2) * 5];
  }
};

// const animalYears = (humanYears) => [
//   humanYears,
//   (humanYears - 1 ? 16 : 11) + 4 * humanYears,
//   (humanYears - 1 ? 14 : 10) + 5 * humanYears,
// ];

// const animalYears = (x) =>  x == 1 ? [1, 15, 15] : x == 2 ? [2, 24, 24] : [x, 24 + 4 * (x - 2), 24 + 5 * (x - 2)];

console.log(animalYears(1));
console.log(animalYears(2));
console.log(animalYears(5));

//! Vowel Count-7kyu
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  // return str
  //   .split("")
  //   .filter((x) => x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
  //   .length;
  // return (str.match(/[aeiou]/gi) || []).length;
  // return str.replace(/[^aeiou]/gi, "").length;
  // return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("abracadabra")); //5

//! Adding Arrays-7kyu
// Create a function that takes an array of letters, and combines them into words in a sentence.
// The array will be formatted as so:

const liveLife = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

const theMit = [
  ["T", "M", "i", "t", "p", "o", "t", "c"],
  ["h", "i", "s", "h", "o", "f", "h", "e"],
  ["e", "t", "", "e", "w", "", "e", "l"],
  ["", "o", "", "", "e", "", "", "l"],
  ["", "c", "", "", "r", "", "", ""],
  ["", "h", "", "", "h", "", "", ""],
  ["", "o", "", "", "o", "", "", ""],
  ["", "n", "", "", "u", "", "", ""],
  ["", "d", "", "", "s", "", "", ""],
  ["", "r", "", "", "e", "", "", ""],
  ["", "i", "", "", "", "", "", ""],
  ["", "a", "", "", "", "", "", ""],
];

// Pattern you need to produce, use a loop to iterate through the index of each element,
// and use map to grab each element to loop through.
// arr[0][0] + arr[1][0] + arr[2][0]
// arr[0][1] + arr[1][1] + arr[2][1]
// arr[0][2] + arr[1][2] + arr[2][2]

const arrAdder = (arr) => {
  let str = "";
  for (let i = 0; i <= arr[0].length - 1; i++) {
    for (let k = 0; k <= arr.length - 1; k++) {
      str += arr[k][i];
    }
    str += " ";
  }
  return str.trimEnd();
};

// const arrAdder = (arr) => arr[0].map((_, i) => arr.map((_, j) => arr[j][i]).join("")).join(" ");

// const arrAdder = (arr) => arr[0].map((_, idx) => arr.reduce((pre, val) => pre + val[idx], ``)).join(` `);

console.log(arrAdder(liveLife));
console.log(arrAdder(theMit));

//! List Filtering - 7kyu
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

const filter_list = (arr) => {
  // return arr.filter((item)=> typeof(item) == "number")
  return arr.filter((item) => Number.isInteger(item));
};

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

let a = 1;
let b = "1";
console.log(typeof a);
console.log(typeof b);

//! Regex validate PIN code - 7 kyu
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

const validatePIN = (pin) => {
  // if (
  //   (pin.length == 4 || pin.length == 6) &&
  //   pin.split("").every((item) => typeof item == "number")
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // if (
  //   (!isNaN(pin) && Number.isInteger(pin) && pin.toString().length == 4) ||
  //   pin.toString().length == 6
  // ) {
  //   return true;
  // } else {
  //   return false;
  // }

  // return /^(\d{4}|\d{6})$/.test(pin);
  return /^([0-9]{4}|[0-9]{6})$/.test(pin);
};

console.log(validatePIN("a234"));
console.log(validatePIN(1234));
console.log(validatePIN("098765"));
console.log(validatePIN("12345"));
