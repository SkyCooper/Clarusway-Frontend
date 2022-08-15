
//! 15 Ağustos 2022 , JS Conditionals

//? ➤ There are 3 types of Conditional Statements in JavaScript:

// if else statement
// ternary if statement
// switch statement
//* short circut



//! The if else Statements
console.log("---The if else Statements---");
// There are 3 forms of if blocks:
//* simple if statement
//* if .. else statement
//* if .. else if .. else statement

// ?Simple if statement
// If a specified condition is true, Use if to specify a code block to be executed. Syntax is simple:

 /*if (condition) {
  // the if block body
  command;
  otherCommand;
  // ...
}
followingCommands(); */

// for single command no need to use curly braces
/* if (condition) command;
followingCommands(); */


// Example: check if the number is positive.

let number = prompt("Enter a number: ");
// enter either positive or negative number to check the output
// check if number is greater than 0
if (number > 0) {
  // the body of the if statement
  console.log("The number is positive");
}
console.log("The if statement is easy");


//? If .. else statement
// If the same condition is false, Use else to specify a code block to be executed. Now we have else option on the table:

// Example: check if the number is positive or negative/zero.

// !number = prompt("Enter a number: ");
// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
} else { // if number is not greater than 0
  console.log("The number is either a negative number or 0");
}
console.log("The if...else statement is easy");


//? If .. else if .. else statement
// If the first condition is false, Use else if to specify a new condition to test. This extended statement gives us more options to compare more than two conditions.

// Example: check if the number is positive, negative or zero.

// !number = prompt("Enter a number: ");
// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
} else if (number == 0) { // check if number is 0
  console.log("The number is 0");
} else { // if number is neither greater than 0, nor zero
  console.log("The number is negative");
}
console.log("The if...else if...else statement is easy");


//3 tamsayı alıp en büyüğünü bulun
//*1nci çözüm yöntemi
const numa = +prompt('sayı1:');
const numb = +prompt('sayı2:');
const numc = +prompt('sayı3:');

if (numa>numb && numa>numc){
  bigNum = numa;
}else if (numb>numa && numb>numc){
  bigNum = numb;
}else{
  bigNum = numc;
}
console.log(`En buyuk sayı : ${bigNum}`);



//* 2'nci çözüm yöntemi
let enBuyuk = numa;

if (numb>=enBuyuk) {
  enBuyuk = numb;
}
if (numc>=enBuyuk) {
  enBuyuk = numc;
}
//!birbirinden bağımsız if blokları ile yapıldı, else/if çalışmadı bunda
console.log(`${enBuyuk} en büyük sayıdır.`);





// We can write if .. else statement inside of an if .. else block.
// Example: nested if .. else statement: check if the number is positive, negative or zero.

//! number = prompt("Enter a number: ");
if (number >= 0) {
  if (number == 0) {
      console.log("You entered number 0");
  } else {
      console.log("You entered a positive number");
  }
} else {
  console.log("You entered a negative number");
}

// Same example with separate if statement: check if the number is positive, negative or zero.
// !number = prompt("Enter a number: ");
// check if number is greater than 0
if (number > 0) {
  console.log("The number is positive");
} 
if (number == 0) { // check if number is 0
  console.log("The number is 0");
} else { // if number is neither greater than 0, nor zero
  console.log("The number is negative");
}
console.log("The if...else if...else statement is easy");



//! Ternary Statement
console.log("---Ternary Statements---");
// ➤ A ternary operator can be used to replace an if .. else statement in certain situations. The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

// ➤ This is an expression, so we can use it on the right side of a statement. Meaning that, we can assign the result to another variable.

// ➤ Where is it used?

// It is usually used in simple comparisons to get a result. Ternary blocks can be nested, however it is not recommended, since makes your code hard to comprehend.

// ➤ How is it structured?
//todo     (condition ? expression1 : expression2)

//? ➤ The ternary operator evaluates the test condition.
// If the condition is true, expression1 is executed.
// If the condition is false, expression2 is executed.


// Let's give some examples:
// Example: passed or failed
let grade = prompt('Enter your score :');
// check the condition
let result = (grade >= 50) ? 'passed' : 'failed';
console.log(`You ${result} the exam. Ternary1`);
//! değişkene atamadan log içinde işlem yapılabilir.S
console.log(`You ${(grade >= 50) ? 'passed' : 'failed'} the exam. Ternary2 log içinde`);



// Example: determine legal status
let age = 15;
let result1;
if (age >= 18) {
      result1 = "You are legal.";
} else {
      result1 = "You are not legal yet.";
}
console.log(result1);

// same code with ternary statement:
age = 15;
let result2 =
    (age >= 18) ? "You are legal." : "You are not legal yet.";
console.log(result2);

// nested ternary (‼️ avoid using): program to check if number is positive, negative or zero

let a = 3;
result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);


//? Short-Circuiting in Conditionals
//todo  AND(&&) short circuit: In case of AND, the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions. If there is an expression with && (logical AND), and the first operand itself is false, then a short circuit occurs, the further expression is not evaluated and false is returned.

let first = 0;
let second = 20;
let third = 30;
result = first && second && third;
console.log(result);

const userLoggedIn = true;
userLoggedIn && console.log('Welcome'); 

//todo  OR(||) short circuit: In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned.

first = 0; // play with values
second = 20;
third = 30;
result = first || second || third;
console.log(result);




//! Switch Statements
console.log("---Switch Statements---");
// ➤ Switch case statement is extended version of if statement for decision making. It is used to compare the value of a variable with multiple values and execute some statements based on the match. Syntax of switch statement is:

/*todo
switch(variable/expression) {
  case value1:  
      //? body of case 1
      break;

  case value2:  
      //? body of case 2
      break;

  case valueN:
      //? body of case N
      break;

  default:
      //? body of default
}
*/


//! 🎗️ Tips:
// The break statement is optional. If the break statement is encountered, the switch statement ends.
// If the break statement is not used, the cases after the matching case are also executed.
// The default clause is also optional.


//todo Example given day number get the day of the week:
let day = 2;
let dayName;
switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName); // Tuesday


//! 🎗️ Tips:
// Switch cases use strict comparison (===). Because of that, the values must be of the same type to match.

a = 3;
switch (a) {
  case "3":
    a = 33;
    break;
  case 2:
    a = 'two';
    break;
  case 3:
    a = 'three';
    break;
  default:
    a = 'not found';
    break;
}
console.log(`The value is ${a}`);

