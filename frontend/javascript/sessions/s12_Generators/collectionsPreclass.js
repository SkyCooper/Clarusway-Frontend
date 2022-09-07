//! Collections
// Most major programming languages have several types of data collections. Python has lists, tuples, and dictionaries. Java has lists, sets, maps, queues. Ruby has hashes and arrays. JavaScript, up until now, had only arrays. Objects and arrays were the workhorses of JavaScript. ES6 introduces four new data structures that will add power and expressiveness to the language: Map, and Set

//! Map
// ➤ Map is similar to objects in JavaScript that allows us to store elements of any type in a key/value pair.

// A Map object iterates its elements in insertion order.
// Better performance
// Keys can have any data type
// Easy to iterate
// Easy to compute size
// Use when you simply need to map key to values
// Use when you need keys that are not strings

// ➤ By definition, a Map object holds key-value pairs where values of any type can be used as either keys or values. In addition, a Map object remembers the original insertion order of the keys. However, unlike an object, a map can contain objects, functions and other data types as key.

// To create a new Map, you use the following syntax:
//? let map = new Map([iterable]);


// ➤ The Map() accepts an optional iterable object whose elements are key-value pairs.

// ➤ The map doesn’t have any restrictions on the keys names. You can use keys names like toString, constructor, etc. without consequences.

// JavaScript Map vs Object
//? Map	                                                        Object
// contain any data type including objects as keys.	            only contain strings and symbols as keys.
// can be directly iterated and their value can be accessed.	can be iterated by accessing its keys.
// The number of elements can be determined by size property.	The number of elements of an object can be determined manually.
// performs better for adding/removing of elements frequently.	does not perform well for adding/removing of elements frequently.


//* Map() Methods
// new Map() – creates the map. new Map(iterable) – creates the map wtih given array-like object.
// map.size – returns the current element count.
// clear() – removes all elements from the map object.
// delete(key) – removes an element specified by the key. It returns if the element is in the map, or false if it does not.
// get(key) – returns the value associated with the key. If the key does not exist, it returns undefined.
// has(key) – returns true if a value associated with the key exists, otherwise, return false.
// set(key, value) – sets the value for the key in the map object. It returns the map object itself therefore you can chain this method with other methods.
// For looping over a map, there are 5 methods:
//      map.keys() – returns an iterable for keys,
//      map.values() – returns an iterable for values,
//      map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
//      maps have forEach method as arrays,
//      for .. of statement can be used.

//* Create a new Map object
//? let myMap = new Map(); 

const myMap = new Map([
 [1, 2],
 [3, 4],
 [5, 6],
]); 
// first numbers in Arrays are key, second numbers are values assinged to these keys

//* Add elements to a Map
myMap.set("1", "string value");

myMap.set(1, "number 1");

myMap.set(true, "boolean");

console.log(myMap);
// Output :  {1 => 'number 1', 3 => 4, 5 => 6, '1' => 'string value', true => 'boolean'}

//* Get an element from a map by key
console.log(myMap.get('1')); //string value
console.log(myMap.get(1)); //number 1


// Check the existence of an element by key
console.log(myMap.has('1')); // true
console.log(myMap.has('2')); // false


//* Iterate over map
// iterate over keys
for (let key of myMap.keys()) console.log(key); 
//1 3 5 '1' true

// iterate over values
for (let key of myMap.values()) console.log(key);  
// number 1 4 6 string value boolean

// iterate over map with key value pair
for (let [key, value] of myMap) console.log(key, value); 
// 1 'number 1' -  3 4 - 5 6 - 1 string value - true 'boolean'

// iterate over map with forEach()
myMap.forEach((value, key) => console.log(key, value)); 
//1 'number 1' -  3 4 - 5 6 - 1 string value - true 'boolean'


//* What is the output? 
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function cleanArr(arr) {
  let map = new Map();
  for (let value of arr) {
    let key = value.toLowerCase().split("").sort().join("");
    map.set(key, value);
  }
  return Array.from(map.values());
}

console.log(cleanArr(arr));




//! Set
// ➤A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// ➤A Set is a collection of unique values. Unlike a Map, a Set is conceptually more similar to an Array than an Object, since it is a list of values and not key/value pairs. However, Set is not a replacement for Arrays, but rather a supplement for providing additional support for working with duplicated data.

// ➤Sets are ordered lists of values that contain no duplicates. Instead of being indexed like arrays are, sets are accessed using keys. Sets already exist in Java, Ruby, Python, and many other languages. One difference between ES6 Sets and those in other languages is that the order matters in ES6 (not so in many other languages).


// Use when you need to work with unique values
// Use when high-performance is really important
// Use to remove duplicates from arrays



//* JavaScript Set vs Object
// ➤The differences from a regular Object:
//      Any keys, objects can be keys.
//      Additional convenient methods, the size property.


//* Performance
// ➤The Set has method checks if a value is in a Set object. In particular, it is, on average, faster than the Array.prototype.includes method when an Array object has a length equal to a Set object’s size.

//* Set Methods , ➤its main methods are:
// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
// For looping over a set, there are 4 methods:
//      set.values() – returns an iterable for values. set.keys(), method is an alias for this method ( for compatibility with Map), hence the set.keys() behaves exactly the same and returns values of Set elements,
//      set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map. it’s used by default in for..of.
//      sets have forEach method as arrays,
//      for .. of statement can be used.

// ➤The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

//? 🎗️ Note:
// Iteration over `Map` and `Set` is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

//* Set Examples
const mySet = new Set();

mySet.add(1); // added a number into set
mySet.add(2);
mySet.add(2); // does nothing

mySet.add('string'); // added a string into set

const obj = { a: 1, b: 2 }; 
mySet.add(obj); // added an object into set

console.log(mySet);

mySet.add({ a: 1, b: 2 }); // now we have 2 objects in this set. Although both objects has same key and values both of them appear in the set as these objects are not same objects in memory.
console.log(mySet);

console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

mySet.delete(1); // deleted from set


//* Iteration over Sets
for (let value of mySet) console.log(value);
// 2
// string
// {a: 1, b: 2} 
// {a: 1, b: 2}

mySet.forEach((value, i) => console.log(value, i));
// as set has no key, here value and i both display same value
// 2 2
// string string
// {a: 1, b: 2} {a: 1, b: 2}
// {a: 1, b: 2} {a: 1, b: 2}



//! WeakMap
// ➤The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values. The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore. The WeakMap API is the same as the Map API.

// ➤Methods and properties are:
// new WeakMap() – creates the map. new WeakMap(iterable) – creates the weakmap with given array-like object.
// wmap.set(key, value) – stores the value by the key. can be chained.
// wmap.get(key) – returns the value by the key, undefined if key doesn’t exist in weakmap.
// wmap.has(key) – returns true if the key exists, false otherwise.
// wmap.delete(key) – removes the value by the key.

//? Map vs WeakMap
// ➤ A WeakMap is just a Map with 3 important differences:
// The keys must be objects,
// The keys are referenced weakly,
// WeakMap is a black box, there is no way to retrieve the keys or the size of a WeakMap.

//* Use Cases
// ➤The most common use case of a WeakMap is to store additional data on an object.

// How many times each button has been pressed by a user?
// Prevents the memory leak problem by maintaining a “weak” reference to the object. This allows us to store the click counts without modifying the button object or causing problems with garbage collection.

// var btn1 = document.getElementById("red-btn");
// const map = new WeakMap();
// map.set(btn1, 0);
// btn1.addEventListener("click", () => map.set(btn1, map.get(btn1) + 1));
  

// store additional data related to some object without modifying it or worrying about memory management!
// in caching for example shopping chart of user:
const cache = new WeakMap();
function computeTotalPrice(chart) {
  if (cache.has(chart)) {
    return cache.get(chart);
  } else {
    let total = 0;
    chart.forEach((item) => (total += item.price));
    cache.set(chart, total);
    return total;
  }
}

//* monitoring DOM changes
// We can also store additional information of the DOM nodes without modifying them. The Google Polymer project uses WeakMaps to keep track of DOM node edits, removals, and changes!

//* Store private data of a class
// However this approach is a less common use case, we can also use WeakMap ,since it is a black box, to store private data on classes and objects.


//! WeakSet
// ➤WeakSet object lets you store weakly held objects in a collection. WeakSets are collections of objects only. They cannot contain arbitrary values of any type, as sets can. The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore.

//* ➤Methods and properties are:
// new WeakSet() – creates the map. new WeakSet(iterable) – creates the weakset with given array-like object.
// wset.add(anObj) – appends a new object to the end of a WeakSet object.
// wset.delete(anObj) – removes the specified element from a WeakSet object.
// wset.has(anObj) – returns true if the anObj exists, false otherwise.

//? Set vs WeakSet
// ➤A WeakSet is just a Set with some important differences:
// Sets can store any value. WeakSets are collections of objects only.
// WeakSet does not have size property.
// WeakSet does not have clear, keys, values, entries, forEach methods.
// WeakSet is not iterable.
// The objects are referenced weakly, an object in WeakSet can be garbage collected if there is no other reference to it.


//? References
// https://www.programiz.com/javascript/map-weakmap
// https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/
// https://javascript.info/map-set#map
// https://javascript.plainenglish.io/weakmaps-illustrated-8169ce4764bb
// https://dmitripavlutin.com/maps-vs-plain-objects-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#keyed_collections
// https://www.digitalocean.com/community/tutorials/understanding-map-and-set-objects-in-javascript
// https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b





