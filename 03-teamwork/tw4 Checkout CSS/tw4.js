const prompt = require("prompt-sync")();

// How to define a new array consisting of the squares of the numbers in the given array?
let numbers = [10, 15, 20, 30, 40];

// const newArray = numbers.filter((num) => num2);
const newArray = numbers.map((num) => num * num);
console.log(newArray);

// Make a new array with all of the words in the original array in uppercase.
let avengers = ["iron Man", "captain america", "Black widow", "hulk"];
const newAvengers = avengers.map((item) => item.toUpperCase());
console.log(newAvengers);

// Write a code to copy the array using slice(). The words Iron Man and Captain America should not appear in the new copy.

let avengers1 = [
  "Iron Man",
  "Captain America",
  "Black Widow",
  "Hulk",
  "Hawkeye",
];

const newAvengers1 = avengers1.slice(2);
console.log(newAvengers1);

//! JS-CC-003 : Merge Arrays
// A = [12, 14, 16];
// B = [11, 13, 17];
// expectedOutput = [11, 12, 13, 14, 16, 17];

let a = [12, 14, 16];
let b = [11, 13, 17];
let c = [];

const arrSort = (arr1, arr2) => {
  let newArr = [];
  if (arr1.length != 0 && arr2.length != 0) {
    newArr = arr1.concat(arr2).sort((a, b) => a - b);
  } else {
    return `One of them is empty array`;
  }
  return newArr;
};

console.log(arrSort(a, b));
