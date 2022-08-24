let a;
//* Arrays Definition
// ➤ In JavaScript, an array is an ordered list of values. Each cell is called an element by index. (zero indexed, starting from zero as the first element)

// You can create an array using two ways:

// Using an array literal, The easiest way to create an array is by using an array literal []. For example,
//! const array1 = ["eat", "sleep"];

// Using the new keyword, You can also create an array using JavaScript's new keyword.
//! const array2 = new Array("eat", "sleep");

// In both of the above examples, we have created an array having two elements.

//? Spaces and line breaks are not important. A declaration can span multiple lines.
// const colors = [
//   "Red",
//   "Blue",
//   "Yellow"
// ];

//* Access array elements
console.log("-- Access array elements -- ");

// ➤ By referring to the index number, you can access an array element. The length property returns the number of elements.

let dailyActivities = [ 'eat', 'work', 'sleep'];
let first = dailyActivities[0]; // eat
let last = dailyActivities[dailyActivities.length - 1]; // sleep
console.log(first, last);

let myArray = ['h', 'e', 'l', 'l', 'o'];
// first element
console.log(myArray[0]);  // "h"
// second element
console.log(myArray[1]); // "e"
// length
console.log(myArray.length); // 5


//* Arrays are Objects
console.log("-- Arrays are Objects -- ");

// ➤ Arrays are also object type. The JavaScript typeof operator returns "object" for arrays.
// ➤ To check if a variable holds an array, use either Array.isArray() method, or instanceof operator:

const myArr = [1, 2, 3];
const myObj = {firstName: "John", lastName: "Doe", age:24};

console.log(typeof myArr); // object
console.log(Array.isArray(myArr)); // true
console.log(myArr instanceof Array); // true

console.log(typeof myObj); // object
console.log(Array.isArray(myObj)); // false
console.log(myObj instanceof Array); // false


//* Add, remove, and change in arrays
//! Adding elements
console.log("-- Adding elements -- ");

// ➤ Use the built-in method push() and unshift() to add elements to an array.
// ➤ The push() method adds one or more elements to the end of an array and returns the new length of the array. For example,
dailyActivities = ['eat', 'work', 'sleep'];

//* add an element at the end
const newLength = dailyActivities.push('exercise');
console.log(dailyActivities); //  ['eat', 'work', 'sleep', 'exercise']
console.log(newLength); // 4


//* ➤ The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. For example,
dailyActivities = ["eat", "work", "sleep"];
//*add an element at the start
const newLength1 = dailyActivities.unshift('get dressed'); 

console.log(dailyActivities); // ['get dressed', 'eat', 'work', 'sleep']
console.log(newLength1); // 4



//* ➤ Add elements or change the elements by accessing the index value.
// Using index value for adding elements to arrays is discouraged, since it may cause unintended side effects.
dailyActivities = [ 'eat', 'sleep'];
// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';
console.log(dailyActivities); // ['eat', 'sleep', 'exercise']


// ➤ Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined:
dailyActivities = [ 'eat', 'sleep'];
// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';
console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]



//! Removing elements
console.log("-- Removing elements -- ");

// ➤ The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
// remove the last element
const removedElement1 = dailyActivities.pop();
//get removed element
console.log(removedElement1); // 'exercise'
console.log(dailyActivities); // ['work', 'eat', 'sleep']


// ➤ The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
dailyActivities = ['work', 'eat', 'sleep'];
// remove the first element
const removedElement2 = dailyActivities.shift();
console.log(removedElement2); // 'work'
console.log(dailyActivities); // ['eat', 'sleep']

//! Changing elements
console.log("-- Changing elements -- ");

// ➤ To change an element of the array, use the index value of the cell you want to replace:
myArray = ['h', 'e', 'l', 'l', 'o'];
// first element
myArray[0] = 'H';
console.log(myArray[0]);  // "H"
// second element
myArray[1] = 'a';
console.log(myArray[1]); // "a"
console.log(myArray); // ['H', 'a', 'l', 'l', 'o']


//! concat() method
console.log("-- concat() method -- ");

// ➤ The concat() method is used to combine two or more arrays.
// ➤ This method does not modify the current arrays but returns a new array that contains the elements of the joined arrays.

const languages1 = ["JavaScript", "Python", "Java"];
const languages2 = ["C", "C++"];

// concatenating two arrays
const new_arr = languages1.concat(languages2);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
const new_arr1 = languages2.concat("Cooper", languages1);
console.log(new_arr1); // [ 'C', 'C++', 'Cooper', 'JavaScript', 'Python', 'Java' ]



//! join() method
console.log("-- join() method -- ");

// ➤ The join() method is used to combine all the elements in an array to create a string, and does not mutates the array.
// ➤ This method takes an element and outputs it inbetween the strings.

//? Array.prototype.join([separator])

// ➤ The join() method accepts a optional argument separator which is a string that separates each pair of adjacent elements of the array in the result string.
// ➤ The separator defaults to a comma , if you don’t pass it to the join() method.
// ➤ In case the array has one element, the join() method returns that element as a string without using the separator.

// Example : join letters
let arr =  ['a', 'b', 'c', 'd'];
console.log(arr.join(''));//returns 'abcd'
console.log(arr.join('-'));//returns 'a-b-c-d'
console.log(arr)//returns ['a', 'b', 'c', 'd']


// Example : join CSS classes
const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(' ');
console.log(btnClass); // btn btn-primary btn-active



//! reverse() method
console.log("-- reverse() method -- ");

// ➤ The reverse() method reverses the array and mutates the array in-place.
// Example :
const cwPaths = [
  "Full-Stack",
  "AWS-Devops",
  "Data Science",
  "Cyber Security",
  "Salesforce",
];
console.log("Original Array: " + cwPaths);

// reversing array order
reversed_arr = cwPaths.reverse();

// reverse() modifies the original array
console.log("Array after reverse(): " + cwPaths);

// reverse() also returns the reversed array
console.log("Return Value of reverse(): " + reversed_arr);


//! sort() method
console.log("-- sort() method -- ");

// ➤ The sort() method sorts elements of an array in-place. Besides returning the sorted array, the sort() method changes the positions of the elements in the original array. It mutates the array.

// ➤ By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.

//todo, ❗ Warning : By default, the sort() function sorts values as strings. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce incorrect result when sorting numbers.
let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort();
console.log("Sayıların string olarak sıralanması " , numbers);
// [ 0, 1, 10, 2, 20, 3, 30 ]


// ➤ To fix this, you need to pass a compare function to the sort() method. The sort() method will use the compare function to determine the orders of elements.

//? array.sort(comparefunction)

// ➤ The compare() function accepts two arguments a and b. The sort() method will sort elements based on the return value of the compare() function with the following rules:

// If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
// If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
// If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.

// Example : fix sort error on numbers
numbers = [0, 1 , 2, 3, 10, 20, 30 ];
numbers.sort( function( a , b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log("Sayıların NUMBER olarak COMPARE ile sıralanması ", numbers);
// [ 0,  1,  2, 3, 10, 20, 30 ]


//! splice() Method
console.log("-- splice() method -- ");

// ➤ The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in-place. To access part of an array without modifying it, see slice().

// ➤ The splice() method returns,
//* An array containing the deleted elements.
//* If only one element is removed, an array of one element is returned.
//* If no elements are removed, an empty array is returned.


//! Delete elements using splice()
let scores = [ 15, 21, 18, 42, 17];
let deletedScores = scores.splice(0, 3);
console.log(scores); // [42, 17]
console.log(deletedScores); // [15, 21, 18]
// ➤ The first parameter (0) determines the position of the first element to delete .
// ➤ The second parameter (3) determines the number of elements to delete. If the second parameter is omitted, then all the elements after first parameter index value will be removed.
// ➤ The splice() returns deleted items in an array, if nothing is deleted, then an empty array [] is returned. The original array is mutated and having the remaining items.


//! Insert  elements using splice()
let colors = ['red', 'green', 'blue'];
let deletedColors = colors.splice(2, 0, 'purple', 'orange');
console.log(colors); // ['red', 'green', 'purple', 'orange', 'blue']
console.log(deletedColors); // [] nothing deleted
// ➤ The first parameter (2) determines the position of the first element to insert .
// ➤ The second parameter (0) determines the number of elements to delete. Nothing will be deleted in this example.
// ➤ The remaining parameters ('purple', 'orange') determines the new elements to be added.
// ➤ The splice() returns deleted items in an array, if nothing is deleted, then an empty array [] is returned. The original array is mutated and having the updated array items.


//! Update  elements using splice()
let colors2 = ['red', 'green', 'purple', 'orange', 'blue'];
let deletedColors2 = colors2.splice(3, 1, 'pink');
console.log(colors2); // ['red', 'green', 'purple', 'pink', 'blue']
console.log(deletedColors2); // ['orange'] is deleted
// ➤ The first parameter (3) determines the position of the first element to insert .
// ➤ The second parameter (1) determines the number of elements to delete. 'orange' will be deleted in this example.
// ➤ The remaining parameter ('pink') determines the new elements to be added.
// ➤ The splice() returns deleted items in an array, In this example it returns ['orange'] . The original array is mutated and having the updated array items.


//! slice() Method
console.log("-- slice() method -- ");

// ➤ The slice() method slices a piece of an array into a new array.
// ➤ The original array will not be modified.
// ➤ The first parameter determines the starting position of the new array. Slice() starts at 0 if the start parameter is unknown.
// ➤The second parameter determines the ending (not included end) position of the new array.If the stop parameter isn't specified, the slice() method will use the array's length as the stop parameter.
// ➤ Both the start and stop parameters can be left blank. In this case, the original array is cloned.
//? Syntax :  slice(start, stop);

let colors3 = ["Red", "Yellow", "Green", "Blue"];
let slicedColors3 = colors3.slice(1, 3);
let newColors3 = colors3.slice();

console.log(colors3);  // ["Red", "Yellow", "Green", "Blue"]
console.log(slicedColors3); //["Yellow", "Green"]
console.log(newColors3);  //["Red", "Yellow", "Green", "Blue"]


//! indexOf() Method
console.log("-- indexOf() method -- ");

// ➤ The indexOf() method returns the position of a specified element in an array at the first occurrence.
// ➤ This method returns -1 if the element is not found.
//? Syntax : indexOf(searchElement, fromIndex)

// ➤ The first parameter determines the item to search for.
// ➤ The second parameter is optional and determines the starting position of the search.

//todo, 🎗️ Note: When comparing the searchElement with the elements in the array, the indexOf() and lastIndexOf() methods use the strict equality comparison algorithm (===).

// Example :
const colors4 = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];

console.log(colors4.indexOf("Green")); // 2
console.log(colors4.indexOf("Green",3)); // 5
console.log(colors4.indexOf("green")); // -1




//! lastIndexOf() Method
console.log("-- lastIndexOf() method -- ");

// ➤ The lastIndexOf() method returns the last index of a specified element in an array.
// ➤ This method returns -1 if the element is not found.
// ➤ Different from the indexOf() method, the lastIndexOf() method searches for the element backward
//? Syntax : lastIndexOf(searchElement, fromIndex)

// ➤ The first parameter determines the item to search for.
// ➤ The second parameter is optional and determines the starting position of the search. If no second parameter is given, it starts from the end of the Array.

// Example :
const colors5 = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];

console.log(colors5.lastIndexOf("Green")); // 5
console.log(colors5.lastIndexOf("Green",3)); // 2
console.log(colors5.lastIndexOf("green")); // -1




//todo, Check Yourself - JS Arrays 
console.log("-- Check Yourself - JS Arrays -- ");

// 1-What is the output of this code?
var x = ["9","25","111","John","James","Aaron"];
console.log (x.sort());  // ["111", "25", "9", "Aaron", "James", "John"];



// 2-What is the output of this code?
colors = ["Red", "Yellow", "Green"];
colors.push("Red");
colors.shift();
console.log(colors);  //Yellow,Green,Red



// 3-What is the output of this code?
colors = ["Red", "Green", "Yellow", "Green" , "Blue", "Green", "Pink", "Green", "Black", "Green"];
var x = colors.lastIndexOf("Green", 8);
console.log(x); // 7











































































































































































