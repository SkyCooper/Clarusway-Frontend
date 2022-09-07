//! Destructuring, Rest & Spread
//* Destructuring Assignment
// ➤ Destructuring allows for easy access to the values of arrays or objects for the purpose of assigning them to variables.

// ➤ Spread takes out all elements or all properties and distributes them in a new array or object. Destructuring allows you to pull out single elements or properties and store them in variables for both arrays and objects.

// ➤ There are two types of destructuring: Object destructuring and Array destructuring.

//? Object Destructuring
// ➤ Object destructuring allows you to create new variables using an object property as the value.
let note = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
};
// traditional way
const id = note.id;
const title = note.title;
const date = note.date;

// destructuring
const { id, title, date } = note;
console.log(id, title, date);

//! 🎗️ Note:
// Destructuring an object does not modify the original object. You could still call the original note with all its entries intact.

// ➤ It is possible to assign a custom name to a destructured property.
const { id: noteId, title, date } = note;
console.log(noteId, title, date);

// ➤ You can also destructure nested objects. For example, if you have a nested object, you can destructure it as follows:
note = {
  id: 1,
  title: "My first note",
  date: "01/01/1970",
  author: {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  },
};
const { id,  title,  date,  author: { firstName, lastName, email },} = note;
console.log(`${firstName} ${lastName}`, id, title, date, email);

// ➤ Destructuring an object is not only useful for reducing the amount of code that you have to write; it also allows you to target your access to the properties you care about.

// ➤ Finally, destructuring can be used to access the object properties of primitive values. For example, String is a global object for strings, and has a length property:
const { length } = 'A string';
console.log(length); // 8


//? Array Destructuring
// ➤ Array destructuring allows you to create new variables using an array item as a value.

// ➤ Arrays in JavaScript are guaranteed to preserve their order, so in this case the first index will always be a year, the second will be the month, and so on. Knowing this, you can create variables from the items in the array:

let date = [1970, 4, 20];
// traditional way
const year = date[0];
const month = date[1];
const day = date[2];

// destructuring
const [year, month, day] = date;
console.log(day, month, year); // 20 4 1970
// skip the second item
const [year2, , day2] = date;
console.log(day2, year2); // 20 1970

// ➤ Nested arrays can be destructured as well:
const nestedArray = [1, 2, 3, [4, 5, 6], 7];
const [first, second, third, [fourth, fifth, sixth], seventh] = nestedArray;
// first = 1, second = 2, third = 3, fourth = 4, fifth = 5, sixth = 6, seventh = 7

// ➤ Destructuring syntax can be applied to destructure the parameters in a function. To test this out, you will destructure the keys and values out of Object.entries().
note = {
  id: 1,
  title: "My first note",
  date: "25/04/1977",
};

// Using forEach
Object.entries(note).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Using a for loop
for (let [key, value] of Object.entries(note)) {
  console.log(`${key}: ${value}`);
}

// ➤ Object destructuring and array destructuring can be combined in a single destructuring assignment. Default parameters can also be used with destructuring, as seen in this example that sets the default date to new Date().
note = {
  title: 'My first note',
  author: {
    firstName: 'Sherlock',
    lastName: 'Holmes',
  },
  tags: ['personal', 'writing', 'investigations'],
};
// Then destructure the object, while also setting a new date variable with the default of new Date():

const {title,date = new Date(), author: { firstName }, tags: [personalTag, writingTag],} = note;
console.log(date); // outputs the current date

//! 🎗️ Note:
// The destructuring assignment syntax adds a lot of flexibility to JavaScript and allows you to write more succinct code.
// react useState is a good example of destructuring.
// Destructuring assignment is not available in strict mode. source

//? Spread and Rest Operator
// ➤ The spread and rest operators both use the same triple period syntax:  //!  ...

// ➤ The application determines whether you’re using it as the spread or as the rest operator.

// ➤ The rest operator is used to merge a list of function arguments into an array.

// ➤ Conversely, the spread operator allows you to pull elements out of an array or pull the properties out of an object.

// ➤ The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable).

// ➤ The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.


//! Spread Operator
// ➤ Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// ➤ Below are examples to demonstrate the spread operator:
//todo, Array Example:
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers]; // spread operator
console.log(newNumbers);

// copy array using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, 11, ...arr2, 7, 8, 9];
console.log(arr3); // expected output: [1, 2, 3, 11, 4, 5, 6, 7, 8, 9]

// clone array using spread operator
let ar1 = [1, 2, 3];
let ar2 = ar1;

console.log(ar1); // [1, 2, 3]
console.log(ar2); // [1, 2, 3]

// append an item to the array
ar1.push(4);

console.log(ar1); // [1, 2, 3, 4]
console.log(ar2); // [1, 2, 3, 4]

// with spread operator
let array1 = [1, 2, 3];

// copy using spread syntax
let array2 = [...array1];

console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3]

// append an item to the array
array1.push(4);

console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3]

//todo, Object Example:
const person = {
  name: "John",
  age: 30,
};

const newPerson = {
  ...person, // spread operator
  city: "New York",
};

// newPerson will be { name: 'John', age: 30, city: 'New York' }
console.log(newPerson);

//todo, String Example:
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue); // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// ➤ For example, the push() method of an array object allows you to add one or more elements to an array. If you want to pass an array to the push() method, you need to use apply() method as follows:

// The first solution looks verbose. The second one uses the spread operator to improve the readability of the code:
// 1st
let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];
[].push.apply(rivers, moreRivers);
console.log(rivers);
// 2nd
rivers.push(...moreRivers);
console.log(rivers);

// ➤ The spread operator is useful for cloning both arrays and objects. Both are reference types rather than primitives. This means that, if they are reassigned, the pointer, rather than the value, is copied.

// ➤ If you want to truly make a copy, a new object should be created with only the properties rather than the entire being copied. Copying reference types safely while eliminating side-effects, or alterations of the copied original, can be problematic.

// ➤ The spread operator avoids side-effects by providing a shallow clone of the object or array.

//! Rest Operator
// ➤ Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

// ➤ In the example below, the ... used as a rest operator is merging the arguments into an array. The filter() method will execute a function on every element in the passed-in array. The filter() method will then return a true or false boolean if the element is equal to 1. In JavaScript === (three equal signs) checks for type and value equality so that el must also be a number.

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
// only calculate number values
function sum2(...args) {
  return args
    .filter(function (e) {
      return typeof e === 'number';
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    }, 0);
}
console.log(sum2(1, 2, 3, 4, 5, 'aa')); // 15

// The difference between rest parameters and the arguments object

// There are some differences between rest parameters and the arguments object:

// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
// The arguments object has additional functionality specific to itself (like the callee property).
// The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.
// Using the rest parameter will pass the arguments as array elements.
//! 🎗️ Note:
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript. A function definition's last parameter can be prefixed with "..." (three dot characters), which will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. _Only the last parameter_ in a function definition can be a rest parameter.
const filter = (...args) => args.filter((el) => el === 1);
console.log(filter(1, 2, 3)); // [1]




