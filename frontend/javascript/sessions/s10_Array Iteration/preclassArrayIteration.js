//! Array Iteration Functions
//? Array forEach Method
// ➤ JavaScript Array provides the forEach() method that allows you to run a function on every element.

// For example, the following code prints every element of the array to the console:

let letters = ["A", "B", "C", , "E"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}


// ➤ Following code uses forEach() method that does same task above:

letters = ["A", "B", "C", , "E"];
letters.forEach((letter) => {
  console.log(letter);
});

//todo, Notice that empty cell is skipped and no undefined printed

// ➤ The forEach() method iterates over elements in an array and executes a predefined function once per element. The forEach() method takes two arguments:
//? array.forEach(callbackFn [, thisArg]);

// 1. callbackFn function that will be used during each iteration of for loop takes following arguments:
// currentElement: is the current array element being processed.
// index: the index of the currentElement in the array.
// array: the array that calls the forEach() method.

// The index and array are optional.

// 2. thisArg is the value to use as this array when executing the callback. It is optional, but in some cases you may need to use it.
//? forEach((element) => { /* ... */ })
//? forEach((element, index) => { /* ... */ })
//? forEach((element, index, array) => { /* ... */ })


// Example printing array elements with index values:
function printElements(element, index) {
  console.log(`Item ${index}: ${element}`);
}
const prices = [900, 1200, 650, , 2000, 500, 1700];
prices.forEach(printElements);

//todo, forEach() does not execute for elements without values in this case, it skips the third element as it is empty


//! 🎗️ Note:
// Unlike other array iteration methods, forEach() always returns undefined, therefore is not chainable. You can use it at the end of chain though.
// forEach() does not mutate the array, but callbackFn may.
// last but not the least: There is no way to stop or break a forEach() loop other than by throwing an exception. break and continue doesn't work inside forEach(). If you need such behavior, the forEach() method is the wrong tool.

//? What is the output of below code?
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.reduce((accumulator, item) => accumulator + item));  //output 45


//! Array map() Method
// ➤ JavaScript Array provides the map() method creates a new array populated with the results of callback function on every element in the array.

// For example, the following code prints every element of the array to the console:
let sides = [2, 4, 5, 8, 10];
let squares = [];
for (let i = 0; i < sides.length; i++) {
    squares.push(sides[i] ** 2);
}
console.log(squares); //* [4, 16, 25, 64, 100]

// ➤ Following code uses map() method that does same task above:
sides = [2, 4, 5, 8, 10];
squares = sides.map((sides)=> {
    return sides ** 2;
});
console.log(squares); //* same output [4, 16, 25, 64, 100]

// ➤ The map() method iterates over every array element. Its return values are added to the new array. The map() method takes two arguments:
//? array.map(callbackFn [, thisArg]);

// 1. callbackFn function that will be used during each iteration of for loop takes following arguments:
// currentElement: is the current array element being processed.
// index: the index of the currentElement in the array.
// array: the array that calls the forEach() method.

// The index and array are optional.

// 2. thisArg is the value to use as this array when executing the callback. It is optional, but in some cases you may need to use it.
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

// Example printing cities population rounded to million with a decimal like 3.8M :
let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "Chicago", population: 2695598 },
  { name: "New York", population: 8175133 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
const rounded = cities.map((city) => {
  city.population = (city.population / 1000000).toFixed(1) + "M";
  return city;
});
console.log(rounded);

//? output:
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {name: 'Los Angeles', population: '3.8M'}
// 1: {name: 'Chicago', population: '2.7M'}
// 2: {name: 'New York', population: '8.2M'}
// 3: {name: 'Houston', population: '2.1M'}
// 4: {name: 'Philadelphia', population: '1.5M'}
// length: 5




//! Array filter() Method
// ➤ JavaScript Array provides the filter() method that creates a new array which contains a subset of elements of the original array those pass the criteria inside callback function.

// Assume that we have an array of city objects where each object contains name and population property. You want to list cities whose population is less than 3 million. Let's do this with regular for loop:

cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "Chicago", population: 2695598 },
  { name: "New York", population: 8175133 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
let smallCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population < 3000000) {
    smallCities.push(cities[i]);
  }
}
console.log(smallCities);

//? Output :
// (3) [{…}, {…}, {…}]
// 0: {name: 'Chicago', population: 2695598}
// 1: {name: 'Houston', population: 2099451}
// 2: {name: 'Philadelphia', population: 1526006}
// length: 3

// ➤ Following code uses filter() method that does same task above:
cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'Chicago', population: 2695598},
  {name: 'New York', population: 8175133},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];
smallCities = cities.filter((city) => {
  return city.population < 3000000;
});
console.log(smallCities); //* same result

// ➤ The filter() method iterates over elements in an array and executes a predefined function once per element to test the criteria. The filter() method takes two arguments like most of array iteration methods:
//? array.filter(callbackFn [, thisArg]);

// 1. callbackFn function that will be used to test each element with the criteria inside this function. This callback function returns truthy or falsy value to be used for skipping or including currentElement during each iteration of the loop. It takes following arguments:
// currentElement: is the current array element being processed.
// index: the index of the currentElement in the array.
// array: the array that calls the filter() method.

// The index and array are optional.

// 2. thisArg is the value to use as this array when executing the callback. It is optional, but in some cases you may need to use it.
//? filter((element) => { /* ... */ })
//? filter((element, index) => { /* ... */ })
//? filter((element, index, array) => { /* ... */ })

// Since filter() method returns a new array, you can chain the result with other array methods such as sort() and map().

// Example printing cities less than 3 million in ascending order of population:
cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "Chicago", population: 2695598 },
  { name: "New York", population: 8175133 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
cities
  .filter((city) => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map((city) => `${city.name}: ${city.population}`)
  .forEach((c) => console.log(c));

//? Output :
// Philadelphia: 1526006;
// Houston: 2099451;
// Chicago: 2695598;



//! Array reduce() Method
// ➤ JavaScript Array provides the reduce() method executes a reducer callback function on each element of the array and returns a single output value.

// The filter() method iterates over elements in an array and executes a predefined function once per element to test the criteria. The filter() method takes two arguments like most of array iteration methods:
//? array.reduce(callbackFn [, initialValue])

// 1. callbackFn function is often referred to as a reducer. The function is called with the following arguments:
// previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0]. It is also called accumulator
// currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
// currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
// array: the array to traverse.

// 2. The index and array are optional.

// 3. initialValue is optional, if it is not provided the callbackFn function will initialize the previousValue to the first array’s element (array[0]) in the array and the currentValue to the second array’s element (array[1]).

//? reduce((previousValue, currentValue) => { /* ... */ } )
//? reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
//? reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
//? reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Example: we have an array of city objects where each object contains name and population property. You want to calculate total population of cities. Let's do this with regular for loop:

cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'Chicago', population: 2695598},
  {name: 'New York', population: 8175133},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];
let totalPopulation = 0;
for (let i = 0; i < cities.length; i++) {
  totalPopulation += cities[i].population;
}
console.log(totalPopulation); //* 18288809


// Calculating same result using **reduce() method:
cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'Chicago', population: 2695598},
  {name: 'New York', population: 8175133},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];
totalPopulation = cities.reduce((accumulator, currentCity) => {
  return accumulator + currentCity.population;
}, 0);
console.log(totalPopulation); //* 18288809

//! 🎗️ Note:
// Reduce method is the swiss army knife of array functions, and also it is hard to comprehend at first sight. You can find more information on MDN reduce method page;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce