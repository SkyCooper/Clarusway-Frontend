// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

//! while Statement
console.log("--while Statment--");

// The most basic loop in JavaScript is the while loop. The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.

// The syntax of the while loop is:

//? while (condition) {
//? body of loop
//? }

//todo, ➤ Execution flow of while loop is:

// 1-A while loop evaluates the condition inside the parenthesis ().
// 2-If the condition evaluates to true, the code inside the while loop is executed.
// 3-The condition is evaluated again.
// 4-This process continues until the condition is false.
// 5-When the condition evaluates to false, the loop stops the execution If the condition is false, the statement will stop executing within the loop and the power will pass to the statement after the loop.

console.log("----while example----");
let count = 1;
while (count < 10) {
  console.log(count);
  count += 2;
}
// Output:  1  3  5  7  9

//? Use a while loop statement to create a loop that executes a block as long as a condition evaluates to true

console.log("--What is the output mult?--");
let i = 0;
let mult = 5;
while (i < 3) {
  mult = mult * i;
  i++;
}
console.log(`The answer is: ${mult}`);
// Output:  The answer is 0

//todo, inclas sorusu;
//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.


let birSayi = +prompt("1-100 arasında bir sayı giriniz: ");
while (birSayi < 1 || birSayi > 100) {
  console.log("0-100 arasında olmalıdır.");
  birSayi = prompt("Uygun aralıkta bir sayı giriniz");
}

console.log(`Girilen not : ${birSayi} while ile yapıldı.`);


// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================


//! do...while Statement
console.log("--do...while Statment--");

// The do...while loop is similar to the while loop except that the condition check happens at the end of the loop. This means that the loop will always be executed at least once, even if the condition is false.

// The syntax of do...while loop is:

//? do {
//? body of loop
//? } while(condition)

//todo, ➤ Execution flow of do ... while loop is:

// 1-The body of the loop is executed at first. Then the condition is evaluated.
// 2-If the condition evaluates to true, the body of the loop inside the do statement is executed again.
// 3-The condition is evaluated once again.
// 4-If the condition evaluates to true, the body of the loop inside the do statement is executed again.
// 5-This process continues until the condition evaluates to false. Then the loop stops.

console.log("----do..while example print numbers from 0 to 4----");
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5);
// Output:  0 1 2 3 4

console.log(
  "----do..while example sum of positive numbers, when user enters a negative number----"
);

let sumn = 0;
let number = 0;
do {
  sumn += number;
  number = parseInt(prompt("Enter a number: "));
} while (number >= 0);
console.log(`The sum is ${sumn}.`);

// Sample Output:

// Enter a number: 1
// Enter a number: 7
// Enter a number: -1
// The sum is 8.

//todo, Use the do…while statement to create a loop that executes a block until a condition is false.

//! 🎗️ Note:
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

//todo, ınclass aynı soru do-while ile yapımı,
//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz

let not1;
do {
  not1 = +prompt("1-100 arasında bir sayı giriniz: ");
} while (not1 < 1 || not1 > 100)
console.log(`Girilen not : ${not1} while ile yapıldı.`);
// bu çalışır fakat hata kodu yok, 

// do {
//   not1 = +prompt("1-100 arasında bir sayı giriniz: ");
//   if(not1 < 1 || not1 > 100){
//     alert("Not 0-100 arasında olmalıdır.");
//   }
// } while (not1 < 1 || not1 > 100)
// console.log(`Girilen not : ${not1} while ile yapıldı.`);
//! hata kodu veren hali,