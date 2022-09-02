//! JavaScript Objects & Classes

//! JavaScript Objects

// ➤ In previous lessons, we learned that JavaScript variables are containers for data values. Objects are useful for storing data in an organized manner.

// ➤ Object is a built-in data type for storing unordered data of any type. Key-value pairs are stored in objects using a key and a value. This data is also called properties.

// ➤ A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// ➤ When the value is a function, it is called a method. Methods are functions that are stored inside objects.

// ➤ There are two methods in the given example. The first one is pre-ES6 syntax and the latter is written in ES6 style. They are both identical.

// ➤ JavaScript is an object-based language. Everything is an object in JavaScript.

//! The Object Constructor
// ➤ In practice, you often need to create many similar objects like the person object.

// ➤ Object Literals are a way to create objects without using the Object() constructor, as in the previous page.
let person1 = {
  firstName: "John",
  lastName: "Doe",
};

// ➤ Another way to create objects is to use the Object() constructor. Object Constructors are a way to create objects without using the object initializer / literal syntax.
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";

// ➤ A constructor function is a regular function with the following convention:

// starts with a capital letter like Person, Document, etc.
// should be called only with the new operator.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//* 🎗️ Note: this is a special keyword that refers to the current object. It is not a variable. It reflects the object that calls/owns the function. This keyword will be covered later.


// ➤ To create an object from this constructor, we use the new operator:

// the new operator creates a new empty object
// the new operator invokes the constructor function with the this keyword bound to the new object
// the new operator returns the new object

let person11 = new Person("John", "Doe");
console.log(person1); // { firstName: 'John', lastName: 'Doe'}
let person22 = new Person("Jane", "Doe");
console.log(person2); // { firstName: 'Jane', lastName: 'Doe'}


//! Accessing Object Properties
// ➤ Properties are the values associated with a JavaScript object. A JavaScript object is a collection of unordered properties. Properties can usually be changed, added, and deleted, but some are read only.

// Properties are usually strings.
// Properties can be any value, including functions(then we call them as methods).
// Properties are the values associated with a key.
// Properties are accessed using the dot notation.
// or can be accessed using the square bracket notation.

const itSchool = { 
  name: 'Clarusway', 
  location: 'U.S.', 
  established: '2019', 
};
console.log(itSchool.name); // Expected Output : 'Clarusway'
console.log(itSchool["location"]); // Expected Output : "U.S."

// ➤ We can add new properties to an object using either the dot notation or the bracket notation:
itSchool.firstAlumniYear = '2020'; // added new property
itSchool['First Graduate Year'] = '2020';
console.log(itSchool); // Expected Output : { name: 'Clarusway', location: 'U.S.', established: '2019', firstAlumniYear: 2020, First Graduate Year: '2020'}

// ➤ We can modify existing properties using either the dot notation or the bracket notation:
itSchool.established = '2020'; // modified property
itSchool['First Graduate Year'] = '2021';
console.log(itSchool); // Expected Output : {name: 'Clarusway', location: 'U.S.', established: '2020', firstAlumniYear: '2020', First Graduate Year: '2021'}

// ➤ Delete properties is done using the delete keyword:
delete itSchool.established;
delete itSchool['First Graduate Year'];
console.log(itSchool); // Expected Output: {name: 'Clarusway', location: 'U.S.', firstAlumniYear: '2020'}

// ➤ An object can also contain another object. For example,

// nested object
const student = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
// accessing property of student object
console.log(student.marks); // {science: 70, math: 75}
// accessing property of marks object
console.log(student.marks.science); // 70



// There are two ways to access object properties.

//* 1.objectName.propertyName
//* 2.objectName['propertyName']

const dog = {
  name: "Rocky",
  legs: 4,
  tail: 1,
  qualities: ["loyalty", "companionship"],
};

console.log(dog.name);      // Rocky
console.log(dog["name"]);   // Rocky


//! Object Methods
// ➤ Objects can also contain methods. Methods are functions that are stored inside objects.

const person3 = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function() {
    // return this.firstName + " " + this.lastName;
    // or using template lateral notation
    return `${this.firstName} ${this.lastName}`;
  },
  greet: function() { console.log('hello'); },
  greet2() { console.log('hello2'); }
};
console.log(person3.fullName()); // John Doe
person3.greet(); // hello
person3.greet2(); // hello2


//! Prototypes
// ➤ Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.

// ➤ Object-oriented JavaScript uses prototypal inheritance. Other programming languages like Java, C#, and C++ uses Class-based inheritance .

// The class keyword, however, has been introduced to JavaScript in ES2015, but it is just syntactical sugar, JavaScript remains prototype-based

// ➤ JavaScript objects inherit properties and methods from other objects. The prototype property of an object is where we can define methods and properties that we want other objects to inherit. We can also use the prototype property to set up what the constructor function should return when new is used.

// ➤ You can create an object in JavaScript using an object constructor function.
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}
// creating objects
const person1a = new Person();
const person1b = new Person();

// Prototype Inheritance
// ➤ In JavaScript, we can create an object without defining its class. Objects can also directly inherit properties from other objects. This feature sets JavaScript apart from class-based languages, where classes inherit from other classes. In JavaScript, every function and object has a property named prototype by default.
function Person () {
    this.name = 'John',
    this.age = 23
}
const person = new Person();
// checking the prototype value
console.log(Person.prototype); // { ... }

// Prototype Chain
// ➤ Each object holds a link to another object, called its prototype. That object also has a prototype, and this continues until we reach an object in which the prototype is null. The resulting series of inter-connected objects is called the prototype chain.

// ➤ So the JS engine will always try to first look for properties that are locally present inside an object. It tries to look for the property or method in its prototype. If it’s still not able to find the property inside the prototype so it moves to the prototype of the prototype. Finally, if the property exist inside the Object.prototype, then it runs as expected. If not, returnd undefined.


//! JavaScript Classes
// ➤ A class is a type of function, but we use the keyword class and assign the properties within a constructor() method instead of using the keyword function to initiate it.

// Class Definition
// ➤ Classes are "special functions," and the class syntax has two components just as you can describe function expressions and function declarations: class expressions and class declarations.

// The class keyword, however, has been introduced to JavaScript in ES2015, but it is just syntactical sugar, JavaScript remains prototype-based.

// ➤ The standard way to define a class is to use a declaration of class. You use the class keyword with the class name to designate a class, and always add the constructor() method.

// class Dog {
//   constructor(name, foot) {
//     this.dogName = name;
//     this.foot = foot;
//   }
// }

// ➤ Now you can create objects using the Dog class:

// myDog = new Dog("Buldog"); 

// Methods
// ➤ The constructor method is unique, it is where you initialize property, it is named automatically when a class is initialized, and it must have the exact name "constructor," also, if you don't have a constructor method, JavaScript can add an invisible and empty constructor method.
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current() {
    return "I have a " + this.dogName + " and it has " + this.foot + " legs";
  }
}
myDog = new Dog("Buldog", 4);
console.log(myDog.current());
// Output : I have a Buldog and it has 4 legs


// Private properties and methods
// ➤ A class defines properties and methods that are shared by all instances of that class. Private properties and methods are not accessible outside the class. # character is used to mark private properties and methods.
class PersonA {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#privateAge = 10;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
let person2a = new PersonA("John", "Doe");
console.log(person2a.fullName()); // Expected Output : "John Doe"

// Static Methods
// ➤ Static methods are defined on the class itself, and not on the prototype.

// ➤ That means you cannot call a static method on the object, but on the class:
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  static hello() {
    return "Hello";
  }
}
myDog = new Dog("Buldog");
console.log(Dog.hello());

// Output : Hello

// Inheritance
// ➤ To create a class inheritance, use the extends keyword.

// ➤ A class created with a class inheritance inherits all the methods from another class:
class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current() {
    return "I have a " + this.dogName;
  }
}

class Specy extends Dog {
  constructor(name, foot, char) {
    super(name, foot);
    this.character = char;
  }
  show() {
    return this.current() + ", it is  " + this.character;
  }
}

myDog = new Specy("Buldog", 4, "curious");
console.log(myDog.show());

// Output : I have a Buldog, it is  curious

// ➤ The super() method refers to the parent class.

// ➤ By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

//! Getters and Setters
// ➤ Classes also allows us to use getters and setters.

// ➤ To add getters and setters in the class, use the get and set keywords.

// Example :
class Song {
  constructor(genre) {
    this.genre = genre;
  }
  get sgenre() {
    return this.genre;
  }
  set sgenre(newgenre) {
    this.genre = newgenre;
  }
}
mysong = new Song("Classical");
console.log(`My favourite is ${mysong.sgenre}`);

// Output : My favourite is Classical

//* 🎗️ Note:
// Even if the getter is a method, you do not use parentheses when you want to get the property value.


// ➤ To use a setter, use the same syntax as when you set a property value, without parentheses.
// Example :
class Song {
  constructor(genre) {
    this.genre = genre;
  }
  get sgenre() {
    return this.genre;
  }
  set sgenre(newgenre) {
    this.genre = newgenre;
  }
}

mysong = new Song("Classical");
mysong.sgenre = "Jazz";

console.log(`My favourite is ${mysong.sgenre}`);

// Output : My favourite is Jazz













