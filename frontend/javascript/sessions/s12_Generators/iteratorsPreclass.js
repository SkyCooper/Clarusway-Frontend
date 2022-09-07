
//! Iterators
// ➤ Iterators are a new way to loop over any collection in JavaScript. They were introduced in ES6 and have become really popular since they are widely useful and are used in various places.

//! for ... in Statement
// ➤ The for ... in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

// Example :
let obj = { x: 1, y: 2, z: 3 };
for (let a in obj) {
  console.log(a);
}
// Console Output : x y z  --> altalta

//todo, ❗ Warning :
// The for ... in loop should not be used to iterate over arrays where index order is important, because, depending on the JavaScript engine, it could iterate in an arbitrary order. Also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition.

//! for ... of Statement
// ➤ The for ... of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

// Example :
let names = ["Aaron", "James", "Oliver"];
let a;

for (a of names) {
  console.log(a);
}
// Output : Aaron James Oliver  --> altalta

//! Array.from()
// ➤ The Array.from() static method creates a new Array instance from an array-like or iterable object.
//? Array.from(arrayLike, function mapFn(currentValue, index, array) { ... }, thisArg)

// arrayLike An array-like or iterable object to convert to an array.
// mapFn Optional Map function to call on every element of the array. Parameters in mapFn function (currentValue, index, array):
//      currentValue is the current value that we work on
//      index is the index number of this current element
//      array is the array itself

// thisArg Optional Value to use as this when executing mapFn.

// Examples :

// from string
Array.from('foo'); // [ "f", "o", "o" ]

// from set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]

// from map
const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

// from a nodelist
const savings1 = Array.from(document.querySelectorAll('.savings'));
console.log(savings1);

// from a nodelist
const savings2 = Array.from(document.querySelectorAll('.savings'));
console.log(savings2);

// using mapFn function
const movements = Array.from(document.querySelectorAll('.savings'), (el) =>
    Number(el.textContent.replace('$', ''))
);
// we take textContent of each nodelist and put it into newly created array
console.log(movements);

// Using an arrow function as the map function to
// manipulate the elements
console.log(Array.from([1, 2, 3], (x) => x * x));
// [1, 4, 9]


// from new Array object
console.log(Array.from(new Array(5)));
// [undefined, undefined, undefined, undefined, undefined]
// creates an array with 5 elements, all of which are undefined
// this is old syntax

// new syntax
console.log(Array.from({ length: 5 }));
// [undefined, undefined, undefined, undefined, undefined]
// creates an array with 5 elements with assigning length property of an object
// all of them are undefined again

console.log(Array.from({ length: 5 }, (_, i) => i));
// [0, 1, 2, 3, 4]
// as we used mapFn function now we assigned index values as values to this array.


//* Making Range Method with Generators
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
      // setting length property of this new array
    (_, i) => start + i * step
      // adding values from start and every time increasing it with step
  );

console.log(range(4, 10, 1));
// [4, 5, 6, 7, 8, 9]

console.log(range(1, 10, 2));
// [1, 3, 5, 7, 9]


//* Understanding Iterators
// ➤ Iterator is an object which defines a sequence and potentially a return value upon its termination.

// ➤ Iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:
// value: The next value in the iteration sequence.
// done: This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

//* Iterator Function and Usage
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;
  const rangeIterator = {
    next: function () {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
      // this time we assinged number of elements to value.
    },
  };
  return rangeIterator;
}
// ➤ This function returns an iterator object which has next() method to make iterations.

// ➤ This next() method returns an object which has value and done properties.
// - value store current iterated value.
// - done stores true or false value which identifies whether iteration is ended or not.

const it = makeRangeIterator(1, 10, 2);
let result = it.next();
while (!result.done) {
    console.log(result.value); // 1 3 5 7 9
    result = it.next();
}
console.log('Iterated over sequence of size: ', result.value); // [5 numbers returned, that took interval in between: 0 to 10]

// ➤ Now variable it is an object, created by iterator function.
// ➤ We call next() method first. This method returns an object which has value and done properties.
// ➤ We loop on variable it with while loop by calling next() method each time and checking is done property in every loop iteration. While loop ends when we see true in done property.
// ➤ When we see true in done property, value is not part of iteration elements and we stored number of elements in this iteration and so it gives us size/length of this iteration.


//! Generators
// ➤ While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state.

// ➤ Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous.

// ➤ Regular functions return only one, single value (or nothing). Generators can return (“yield”) multiple values, one after another, on-demand.

// Generator Example
function* generateSequence() {
    yield 1;
    console.log('I start working from here');
    yield 2;
    yield 3;
}

const genSeq = generateSequence();
// unlike regular functions, 
// generator functions do not invoke when they are called.

console.log(genSeq);
// output is: generateSequence {}

let item = genSeq.next();
// now we start invoking
// it stops its execution when it sees yield
// and in next calling it will continue after that yield line

while (!item.done) {
    console.log(item);
    item = genSeq.next();
}

console.log(item);
// {value: undefined, done: true}
// done is true

console.log(Array.from(generateSequence()));
// [1, 2, 3]




















