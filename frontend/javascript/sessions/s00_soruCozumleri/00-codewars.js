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
  return str
    .split("")
    .filter((x) => x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
    .length;

  // return (str.match(/[aeiou]/gi) || []).length;
  // return str.replace(/[^aeiou]/gi, "").length;
  //  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("abracadabra")); //5

//! Adding Arrays
// Create a function that takes an array of letters, and combines them into words in a sentence.
// The array will be formatted as so:
const liveLife = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

const arrAdder = (arr) => {
  let str = "";
  for (let i = 0; i < arr.length-1; i++) {
    for (let k = 0; k <= i; k++){
     str += arr[i][k];
    }
        
  }
  return str;
};

console.log(arrAdder(liveLife));
