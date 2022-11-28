//! ****************** Functions ***************
// Introduction to TypeScript functions
// ➤ The building blocks of any programming language are functions. Since JavaScript is a functional programming language, functions are the most important factor. You may implement object-oriented programming principles like classes, objects, polymorphism, and abstraction using functions.

// The use of functions makes the software reusable, readable, and easy to maintain. Although the concepts of classes and modules are provided by TypeScript, functions still play a critical role in the tyscript language.

// Functions in TypeScript come in two types: named and anonymous.

//? ➤ Named Functions :
// A named function is one where you declare and call a function by its given name.

function add(a: number, b: number): number {
    return a + b;
}
//? ➤ Anonymous Function :
// An anonymous function is one that is defined in the form of an expression. This expression has been saved in a variable. As a result, the function has no name. These functions are called using the variable name in which they are stored.

let fnName = function (x: number, y: number): number {
    return x + y;
}
//? ● Function Parameters :
// Values or arguments provided to a function are referred to as parameters. The compiler in TypeScript expects a function to receive the exact amount and type of arguments specified in the function signature. If the function expects three parameters, the compiler verifies that the user provided values for all three parameters, i.e. it looks for exact matches.

function welcome(message: string, name: string ) : string {
    return `${message} ${name}!`;
}

welcome('Hello','Matthew');
welcome('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
welcome('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.
welcome('Hello',1); // Argument of type 'number' is not assignable to parameter of type 'string'.


//! **************** Function returnType ***********************
// ➤Unlike JavaScript, TypeScript allows you to use type annotations in parameters and return value of a function.
// When a function has a return type, TypeScript compiler checks every return statement against the return type to ensure that the return value is compatible with it.
function add1(a: number, b: number): number {
    return a + b;
}
add1(5,6) // 11
add1('5','6') // Argument of type 'string' is not assignable to parameter of type 'number'.

function add2(a: number, b: number): number {
  return `${a + b}`; //Type 'string' is not assignable to type 'number'.
}
add2(5, 6);

// ●If a function does not return a value, you can use the void type as the return type. The void keyword indicates that the function doesn’t return any value.

function greet(name: string): void {
    console.log(`Hello ${name} `);
}

// The void prevents the code inside the function from returning a value and stops the calling code from assigning the result of the function to a variable.


// ●The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

// Typically, you use the never type to represent the return type of a function that always throws an error. For example:

function raiseError(message: string): never {
    throw new Error(message);
}

// The return type of a function expression with an endless loop is also the never type.

let loop = function () {
    while (true) {
        console.log('This function's return type is never');
    }
}


// ● You can use union types and custom types as parameter or returnType.
type Combine = string | number;

function add(a: string | number, b: Combine): Combine {
    if (typeof a == 'number' && typeof b == 'number') {
        return (a + b)
    } else {
        return String(a) + String(b);
    }
}
add(4, 2) // 6
add('4', '2') //42

//* 🎗️ Note: When you do not annotate the return type, TypeScript will try to infer an appropriate type.


//! ***************** Arrow Functions *******************
// ➤ We can also use arrow functions in TypeScript with or without type annotations.

let multiply = (x: number, y: number): number => {
    return x * y;
}

multiply(10, 5); //returns 50


// ●The above arrow function multiply will be converted into the following JavaScript code after compiled.

var multiply = function (x, y) {
    return x * y;
};
multiply(10, 5); //returns 50


// ●Arrow Functions without parameter:

let hello = (): void => console.log("Hello TypeScript");

hello(); //Output: Hello TypeScript


// ●Additionally, as seen below, there is no need for the curly brackets and the return keyword if the function body simply contains one statement.

let multiply= (a: number, b: number) => a*b;

multiply(5, 2); //returns 10


//! *************** Optional & Default Parameters ****************
//? ➤ Optional Parameters:

// Even if a function in JavaScript provides arguments, you can call it without sending any data. JavaScript therefore by default accept the optional arguments.

// Every function call in TypeScript is examined by the compiler, which raises an error in the following circumstances:

// There are more arguments than the function's declared number of parameters.
// The types of the function's parameters and arguments are incompatible.
// Because the compiler checks the passing arguments carefully, you must annotate optional parameters to tell the compiler to ignore errors when the arguments are omitted.

// Use the ? symbol after the parameter name to make a function argument optional.
function multiply(x: number, y: number, z?: number): number {

    if (typeof z !== 'undefined') {
        return x * y * z;
    }
    return x * y;
}
multiply(10,20) // 200
multiply(5,4,3) // 60
multiply(5) // Expected 2-3 arguments, but got 1.

// ●How this works?

// First, use the ? after the z parameter.
// Second, check if the argument is passed to the function by using the expression typeof z !== 'undefined'.

// 🎗️ Note:
// In the parameter list, the optional parameters should come after the required parameters .


//? ➤ Default Parameters:

// TypeScript provides the option to add default values to parameters. If the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value. Default parameters have the same behaviour as optional parameters. If a value is not passed for the default parameter in a function call, the default parameter must follow the required parameters in the function signature. Hence, default parameters can be omitted while calling a function.

function name(parameter1=defaultValue1,...) {
   // do something
}
// In this syntax, if you don’t pass arguments or pass the undefined into the function when calling it, the function will take the default initialized values for the omitted parameters. For example:
function addTax(price: number, tax = 20): number {
    return price * (1 + tax / 100);
}

addTax(100);  // 120
addTax(100, 30); // 130


//! **************** Function Overloading *****************
// ➤ Function overloadings in TypeScript let you define the relationship between a function's parameter types and result types.

// 🎗️ Note: The function overloading offered by TypeScript are distinct from those supported by other statically-typed languages like C# and Java.

// Let's begin with some simple functions:

function add(x: number, y: number): number {
    return x + y;
}

function addString(m: string, n: string): string {
    return m + n;
}
// In this example:

// The sum of two numbers is returned by the add() function. The concatenation of two strings is returned by the addString() function. A union type can be used to define a variety of types for function parameters and results:

function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

// However, the union type does not accurately describe the relationship between the parameter types and the results. To better describe the relationships between the types used by a function, TypeScript supports function overloadings. For example:

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}

// In this example, we added two overloads to the add() function. The first overload tells the compiler that when the arguments are numbers, the add() function should return a number. The second overload does the same but for a string.

// Each function overload defines a combination of types supported by the add() function. It describes the mapping between the parameters and the result they return.

// Now, when you call the add() function, the code editor suggests that there is an overload function available as shown in the below:

function add(a: number, b: number): number (+1 overload)
let result = add(1,2)


//! **************** Rest Parameters ************
// ➤ A rest parameter allows you to pass zero or more arguments of the specified type to a function. Rest arguments in TypeScript follow the following rules:

// There is only one rest parameter in a function.
// In the parameter list, the rest parameter is listed last.
// The type of the rest parameter is an array type.
// To declare a rest parameter, you prefix the parameter name with three dots and use the array type as the type annotation:

function total(...numbers: number[]): number {
    return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
console.log(add(1, 10, 100, 1000.50)) //1111.50