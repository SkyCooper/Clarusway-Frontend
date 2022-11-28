//! Type Assertions
// What is Type Assertions?
// ➤ You may occasionally find yourself in a scenario where you know more about the value of a variable than TS. This frequently occurs when you know that an entity's type may be more particular than its present type. In other languages, type assertion is similar to typecasting, but it does not perform any extra tests or data reorganization. The type conversion has no effect during program execution and is solely utilized by the compiler. TS expects that the programmer will do all of the relevant checks.

// ● When we want to change a variable from one type to another such as any to number etc, we use Type assertion. There are two methods for converting types.

//* The first is the syntax of angle brackets <>:
let someValue: unknown = "this is a string";
console.log(someValue.length) //? Object is of type 'unknown'.

// Although the content of someValue variable is a string, we get an error when we want to use the length property. Because its type is unknown.

// Now, let's change the type here and see if we can get the result. In the bracket method, we write the type we want to use in bracket in front of the variable name. (<string>someValue)
let someValue: unknown = "this is a string";
console.log((<string>someValue).length) //? 16

// 🎗️ Note! :You cannot use angle bracket syntax <> with some libraries such as React. For this reason, you should use the as keyword for type assertions.

//* The second is as syntax:
let someValue: unknown = "this is a string";
console.log((someValue as string).length) //? 16

// ⚠️ Warning! : The type of the original variable does not change with the type assertion.


//! Type Assertions with HTML Elements
// ➤ While the type script is manipulating the DOM, it can determine the HTML elements according to their types. Typescript cannot enter our HTM code and analyze it. The type changes depending on how we access the HTML elements.

// Our examples will be based on the following HTML code.
    <body>
        <p id='paragraph'>This is a paragraph</p>
      
    </body>

// ➤ HTMLParagraphElement
// We can access the p element in our HTML file in various ways.

let paragraph1 = document.querySelector('p')
let paragraph2 = document.querySelectorAll('p')
let paragraph3 = document.querySelectorAll('p')[0]
let paragraph4 = document.getElementById('paragraph')

// paragraph1 : Since we reach the DOM with querySelector('p'), typescript knows for sure that we will receive an object of type HTMLParagraphElement. So here the type of paragraph1 is //* HTMLParagraphElement.

// paragraph2 : In this example we used querySelectorAll('p') . Therefore, we will return a node list and this variable will be considered as //* NodeListOf<HTMLParagraphElement> by typescript.

// paragraph3 : Since we have reached the first element in //* NodeListOf<HTMLParagraphElement>, the type will be HTMLParagraphElement here too.

// paragraph4 : The type of each element we access with id is defined as //* HTMLElement.

// ➤ So how do we define the type of the elements we access with id?
// We can do it by type assertion.

let paragraph5 = (<HTMLParagraphElement>document.getElementById('paragraph'))
let paragraph6 = document.getElementById('paragraph') as HTMLParagraphElement

// With the two different assertion methods as above, we can assign a type to an HTML element that we access with id. The type of paragraph5 and paragraph6 will be //* HTMLParagraphElement.

//? ⚠️ Warning! :
// TypeScript doesn't read our HTML code, TypeScript only knows that it's some HTML element.

//! Type Assertions with HTML Elements - 2

    <body>
        <a href="https://www.clarusway.com">Clarusway</a>

        <img src="https://www.clarusway.com/logo.png">

        <input type="number" id="input">
    
    </body>


let anchor = document.querySelector('a')!
let img1 = document.querySelector('img')!

let input1 = document.querySelector('input')! 
let input2 = document.getElementById('input')!


// 🎗️ Note:
// While accessing the dom elements, we need to check as a developer that they are not null. After checking, if we put an exclamation point ! at the end of the statement, typescript knows that it will always return a value and it will never be null.

// ➤ HTMLAnchorElement : In our first example, since we get our a tag with querySelector, the type of our anchor variable will be HTMLAnchorElement. When we write the variable name in vscode and press the dot, methods get related to a tag.

// ➤ HTMLImageElement : TypeScript recognizes our img elements and offers methods related to it.

// ➤ HTMLInputElement : The element we reach with querySelector('input') identified as typescript HTMLInputElement. VScode offer us value,type,focus,checked etc. It allows us to access the properties of the input element. It should be noted that the value of the HTMLInputElement is always a string.

// ➤ HTMLElement : All elements that we obtain with the getElementById method are classified as HTMLElement. In order to use their private methods, the appropriate type a conversion must be made with the type assertion method.


let input3 = <HTMLInputElement>document.getElementById('input')!
let input4 = document.getElementById('input')! as HTMLInputElement

// With Type assertion (Same in both methods), we convert the HTMLElement whose id is reached to HTMLInputElement.