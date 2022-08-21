// ? ================================================
// ?                FONKSİYONLAR
// ?=================================================

//!--------------------------------------------------
//! 3.YONTEM  : ARRAY EXPRESSION
//!--------------------------------------------------

//! 3-Arrow Functions

// SINGLE-LINE BLOCK
// const sumNumbers = number => number +number;

// MULTI-LINE BLOCK
// const sumNumbers = number => {
//     const sum = number +number;
//     return sum;
// }

// Regular Function
let aa = 4;
let bb = 2;
function f1() {
  return aa + bb + 100;
}
console.log(f1()); // 4+2+100=106

let hundredify = (a, b) => a + b + 100;
console.log(hundredify(4, 2)); // 4+2+100=106

//! Differences & Limitations:
// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have arguments, or new.target keywords.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.

//! Immediately Invoked Function Expressions (IIFE)
// ➤ Sometimes you don't want to have your function accessible/stored as a variable. You can create an Immediately Invoked Function Expression (IIFE for short). These are essentially self-executing anonymous functions. They have access to the surrounding scope, but the function itself and any internal variables will be inaccessible from outside.

// ➤ An important thing to note about IIFE is that even if you name your function, IIFE are not hoisted like standard functions are and cannot be called by the function name they are declared with.

// named IIFE recursive
(function trian(num) {
  if (num === 1) return 1;
  return num + trian(num - 1);
})(3);
// with anonymous function expression non recursive
(function (num) {
  return (num * (num + 1)) / 2;
})(3);

//todo, Default Parameters
// ➤Default parameters allow you to set a default value for a parameter in a function. For example, if you have a function that takes a parameter called name, you can set a default value for the parameter in the function definition:
function greet3(name = "Guest") {
  console.log(`Hello greet3 ${name}`);
}
greet3(); // Hello Guest
greet3("John"); // Hello John

//todo, Function Scope
// ➤ Every function has a scope. Everything defined within the function is not accessible by code outside the function. Only code within this scope can see the entities defined inside the scope.

let num1 = 10;
var num2 = 20;
console.log("at the global scope");
console.log({ num1, num2 });
func1();
console.log({ num1, num2 });
// console.log({ num3, num4 });  //! Uncaught ReferenceError: num3 is not defined

// function declaration
function func1() {
  let num1 = 101;
  let num2 = 102;
  var num3 = 103;
  console.log("..inside func1");
  if (num1 < num2) {
    console.log("inside if block");
    let num1 = 201;
    // var num2 = 205;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
    // let num3 = 206;
    var num4 = 204;
    num1++;
    num2++;
    num3++;
    num4++;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
  }
  console.log("after if block");
  num3++;
  num4++;
  console.log({ num1, num2 });
  console.log({ num3, num4 });
}

// Functions can be nested inside function body, js is lexically scoped, therefore caution to the scope!

function sameLevel2() {
  let a = 10;
  b = 20;
  console.log({ a, b });
}
function sameLevel1() {
  let a = 30;
  let b = 8;
  console.log({ a, b });
  sameLevel2();
}

let b = 5;
sameLevel1();
console.log({ b });

function outerLevel() {
  let a = 30;
  let b = 8;
  console.log({ a, b });
  innerLevel();
  function innerLevel() {
    let a = 10;
    b = 20;
    console.log({ a, b });
  }
  console.log({ b });
  b = 5;
  console.log({ b });
}
console.log({ b });

//todo, This Keyword
// ➤ The reserved keyword this refers to a method’s calling object, and it can be used to access properties belonging to that object. Here, using the this keyword inside the object function to refer to the cat object and access its name property.

const cat = {
  name: "Kitty",
  age: 8,
  whatName() {
    return this.name;
  },
};
console.log(cat.whatName()); // Output: Kitty

// this in a function

// ➤ Every JavaScript function or method has a this context. For a function defined inside of an object, thiswill refer to that object itself. for a function defined outside of an object, thiswill refer to the global object (window in a browser, globalin Nodejs and globalThis for both to always point to global object).

const school = {
  numStudents: 45,
  maxCapacity: 100,
  availableQuota() {
    // this refers to the school object
    // and it's used to access its properties
    return this.maxCapacity - this.numStudents;
  },
};
console.log(school.availableQuota());

// Arrow functions do not have their own this context.
