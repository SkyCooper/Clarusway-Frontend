//! What is Typescript?
// TypeScript is an open-source language with continuous development and maintenance by Microsoft. It is a superset of JavaScript. That is, it's JavaScript with a bunch of additional features. 

//! ⚠️ Warning! :
// The typescript code cannot be run in the browser without being compiled.

//? 🎗️ It was designed by Anders Hejlsberg at Microsoft (1 October 2012)

//? Features of TypeScript
// However, it appears that there is no need for another programming language for the client side in the web environment if traditional JS, which is used on almost every site, is owned by many developers, and has a high level of support in the programming community, can handle all of the same work. But TS is more than just a new JS.

// To begin, it should be noted that TS is a strongly typed and compiled language, which may be more familiar to Java, C#, and other strongly typed language programmers, even though the compiler output produces the same JS, which is then executed by the browser. Strong typing, on the other hand, reduces the number of potential errors that can occur when developing in JS.

// Second, TS implements many object-oriented language concepts such as inheritance, polymorphism, encapsulation, access modifiers, and so on.

// Third, the potential of TS makes large complex programs faster and easier to write, and thus easier to maintain, develop, scale, and test than in standard JS.

// Furthermore, it is cross-platform, which means that we can develop on both Windows and macOS or Linux.

//? ➤Advantages of TypeScript over JavaScript :
// - TypeScript always highlights errors during development at compilation time, whereas JavaScript highlights errors at runtime.
// - JavaScript does not support strongly typed or static typing, whereas TypeScript does.
// - TypeScript is compatible with any browser or JavaScript engine.
// - Excellent tooling support, including IntelliSense, which provides active hints as code is added.

//? ➤ Disadvantages of TypeScript over JavaScript :
// - The compilation of TypeScript code takes a long time.
// - Abstract classes are not supported by TypeScript.
// - When we run the TypeScript application in the browser, we must perform a compilation step to convert TypeScript to JavaScript.

//! Installation & Setting Up the Development Environment
// npm install -g typescript
// You can check the installation with tsc --version or tsc -v command.
// Typescript files have .ts extension. App.ts, index.ts etc.
// If you are using Typescript in React, the file extensions should be .tsx instead of .jsx
// tsc --init command creates a configuration file called tsconfig.json

//! Hello World on TS
// ➤ Now let's create and run our first typescript file.
// - Create a new folder and open it with Vscode (or any ide).
// - Create any file with the extension .ts (App.ts or index.ts not compulsory).
// - Write console.log('Hello world'); to our .ts file and save it.
// - Open terminal and run tsc or tsc yourFileName.ts command.
// - See the .js file that is the same as your .ts filename is generated.
// - When you open the .js file, you will see that it is the same as the .ts file. (Because we did not use any typescript features in this file.) As we mentioned before, TS is a superset of JS and every js code is actually a ts code.


//! Type annotation in variable declaration
// string declaration
let message: string = "welcome";
// number declaration
let errorCount: number = 300;
// boolean declaration
let isLoggedIn: boolean = false;
// arrays declaration
let cities1: string[];
const cities2: string[] = ["Delhi", "New York", "London"];
// OR
const cities3: Array<string> = ["Delhi", "New York", "London"];
// Function arguments & Return Types
function add(num1:number, num2:number): number{
  return num1 + num2;
}
// Anonymous Objects
// Here , we are creating an object with two properties . The properties are annotated with the type number & string .

const student1: { id: number; name: string;};
const student {id: 12, name: "Sachin"};

// Union types
// The union types are special . They allow a variable to be of either of two types .
// In the example , the id can be either a string or a number . The Typescript allows you to perform both string & arithmetic operation on the variable id.
let id: string | number
