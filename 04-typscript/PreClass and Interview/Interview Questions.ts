//? Interview Questions & Answers

//! What is Typescript?

// TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strongly typed superset of JavaScript that compiles to plain JavaScript. It is a language for application-scale JavaScript development. TypeScript is quite easy to learn and use for developers familiar with C#, Java and all strong typed languages.

// TypeScript can be executed on Any browser, Any Host, and Any Operating System. TypeScript is not directly run on the browser. It needs a compiler to compile and generate in JavaScript file. TypeScript is the ES6 version of JavaScript with some additional features.


//! Why do we need TypeScript?

// We need TypeScript:

// TypeScript is fast, simple, and most importantly, easy to learn.

// TypeScript supports object-oriented programming features such as classes, interfaces, inheritance, generics, etc.

// TypeScript provides the error-checking feature at compilation time. It will compile the code, and if any error found, then it highlighted the errors before the script is run.

// TypeScript supports all JavaScript libraries because it is the superset of JavaScript.

// TypeScript support reusability by using the inheritance.

// TypeScript make app development quick and easy as possible, and the tooling support of TypeScript gives us autocompletion, type checking, and source documentation.

// TypeScript supports the latest JavaScript features including ECMAScript 2015.

// TypeScript gives all the benefits of ES6 plus more productivity.

// TypeScript supports Static typing, Strongly type, Modules, Optional Parameters, etc.


//! What are the disadvantages of TypeScript?

// TypeScript has the following disadvantages:

// TypeScript takes a long time to compile the code.

// TypeScript does not support abstract classes.

// If we run the TypeScript application in the browser, a compilation step is required to transform TypeScript into JavaScript.

// Web developers are using JavaScript from decades and TypeScript doesn?t bring anything new.

// To use any third party library, the definition file is must. And not all the third party library have definition file available.

// Quality of type definition files is a concern as for how can you be sure the definitions are correct?

//! What is any type, and when to use it?

// There are times when you want to store a value in a variable but don’t know the type of that variable in advance. For example, the value is coming from an API call or the user input. The ‘any’ type allows you to assign a value of any type to the variable of type any.

//! What is void, and when to use the void type?

// The void indicates the absence of type on a variable. It acts as the opposite type to any. It is especially useful in functions that don’t return a value.

// f a variable is of type void, you can only assign the null or undefined values to that variable.

//! Provide the syntax of a function with the type annotations.

// Functions are blocks of code to perform a specific code. Functions can optionally take one or more arguments, process them, and optionally return a value.

// Here’s the TypeScript syntax to create and call a function.

function greet(name: string): string {
  return `Hello, ${name}`;
}

let greeting = greet("Anders");
console.log(greeting);  // "Hello, Anders"


//! How to create objects in TypeScript?

// Objects are dictionary-like collections of keys and values. The keys have to be unique. They are similar to arrays and are also sometimes called associative arrays. However, an array uses numbers to index the values, whereas an object allows you to use any other type as the key.

// In TypeScript, an Object type refers to any value with properties. It can be defined by simply listing the properties and their types. For example,

let pt: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//! How to specify optional properties in TypeScript?

// An object type can have zero or more optional properties by adding a ‘?’ after the property name. 

let pr: { x: number; y: number; z?: number } = {
  x: 10,
  y: 20
};
console.log(pr);

// In the example above, because the property ‘z’ is marked as optional, the compiler won’t complain if we don’t provide it during the initialization

//! Explain how enums work in TypeScript?

// Enums allow us to create named constants. It is a simple way to give more friendly names to numeric constant values. An enum is defined by the keyword enum, followed by its name and the members.

// Consider the following example that defines an enum Team with four values in it.

enum Team {
Alpha,
Beta,
Gamma,
Delta
}
let t: Team = Team.Delta;

// By default, the enums start the numbering at 0. You can override the default numbering by explicitly assigning the values to its members.

// TypeScript also lets you create enums with string values as follows:

enum Author {
  Anders = "Anders",
  Hejlsberg = "Hejlsberg"
};