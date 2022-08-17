//! 17 Ağustos 2022, Çarşamba

//todo, There are three types of traditional loops in javaScript:

// ● for statement
// ● while statement
// ● do...while statement

//todo, ➤These keywords are used to control loop itreations:

// ● break statement
// ● continue statement

//! for Statement
console.log("--for Statment--");

// ➤ The for loop is more complex, but it’s also the most commonly used loop.

// The syntax of the for loop is:
//? for (initializer; condition; iterator) {
//? for loop body
//? }

// The initializer initializes and/or declares variables and executes only once.
// The condition is evaluated.
// If the condition is false, the for loop is terminated.
// If the condition is true, the block of code inside of the for loop is executed.
// The iterator updates the value of initializer when the condition is true.
// The condition is evaluated again. This process continues until the condition is false.

//! ⚠️ Warning! :
// In the for loop, the three expressions are optional. Beware that this usage creates an infinite loop! The following shows the for loop without any expressions:
//? for ( ; ; ) {
//? statements
//?  }

console.log("--------for loop example------");
let sum = 0;
for (let i = 0; i < 6; i++) {
  console.log(i);
  sum += i;
}
console.log(`The total is ${sum}`);
// Output: 0 1 2 3 4 5 The total is 15

//todo, inclas sorusu, 1 den n kadar girilen sayıları toplayan kodu yazın
const girilenSayi = Number(prompt("Sayı gir :"));
sayiToplami = 0;
for (let i = 1; i <= girilenSayi; i++) {
  sayiToplami += i;
  console.log(sayiToplami, i);
}
console.log(`Girilen sayiların toplamı ${sayiToplami}`);

console.log("--What is the output of the following code?---");
let x = 0;
for (let k = 5; k > 3; k--) {
  x += k;
}
console.log("The answer is " + x);
// output The answer is 9

//todo, inclas sorusu, 0-100 arasında 10 adet rastgele sayı üreten kodu yazın
//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar  49.9-->49 yapar
//* Math.ceil() =>sürekli yukariya yuvarlar  49.1-->50 yapar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.  49.1 veya 49.9 --> 49

for (let i = 1; i <= 10; i++) {
  const rastgele = Math.floor(Math.random() * 100) + 1;
  //! const burada hata vermez re-assign değil burada yapılan işlem
  // rastgele = Math.round(Math.random()*100);
  console.log(rastgele);
}

//todo, inclas sorusu, girilen sayının asal olup olmadığını bulan kod

const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
let asal = true;

if (sayi <= 1) {
  alert("Sayi 1'den buyuk olmalidir.");
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asal = false;
      break;
    }
  }

  const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
  console.log(`${sayi} ${sonuc}`);
}

//?2nci çözüm;
nsayisi = +prompt("bir sayi giriniz : ")
let sayac= 0;
for(let i =2; i<nsayisi; i++){
    if(nsayisi % i ==0){
        console.log("sayi asal değildir");
        break;
    }else{
        sayac += 1
    }

}
if(sayac + 2 == nsayisi){
    console.log("sayi asal sayidir..")
}

//todo, Use the JavaScript for statement to create a loop that execute a block based using various(start value, condition, steps) options.

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
// bu çalışır fakat hat kodu yok, 

// do {
//   not1 = +prompt("1-100 arasında bir sayı giriniz: ");
//   if(not1 < 1 || not1 > 100){
//     alert("Not 0-100 arasında olmalıdır.");
//   }
// } while (not1 < 1 || not1 > 100)
// console.log(`Girilen not : ${not1} while ile yapıldı.`);
//! hata kodu veren hali,



//! break Statement
console.log("--break Statment--");

// ➤ The break statement prematurely terminates a loop such as for, do...while, and while loop, a switch, or a label statement.

console.log("----Example print numbers from 0 to 2 using break----");

let d = 0;
while (d < 10) {
  if (d === 3) {
    break;
  }
  console.log(d);
  d += 1;
}
console.log(`d = ${d} after while loop`);

console.log("--What is the output of the following code?--");
let k = 0;
while (k < 10) {
  if (k > 5) {
    break;
  }
  k = k + 1;
}
console.log(`k is ${k}`);

//! continue Statement
console.log("--continue Statment--");

// The continue statement terminates the execution of the statement in the current iteration of a loop and immediately continues to the next iteration.

console.log("--Example print numbers from 4 to 7 excluding 5--");
for (let i = 4; i < 8; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// output 4 6 7

console.log("--What is the output of the following code?--");
for (let i = 2; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// output 2 4

//!  ⚠️ Warning! :
//  Labeled continue is rarely used in JavaScript. Using labeled continue or break makes the code hard to comprehend.

//  label1:
// some code
//  if ( condition ) {
//    continue label1; // or break label1;

//! check yourself
console.log("--check yourself---");

//? Question-1
console.log("--Question-1---");
var sum1 = 0;
for (var j = 3; j < 7; j++) {
  sum1 += j;
  if (j === 3 || sum1 > 10) {
    continue;
  }
  console.log(j);
}
// output 4

//? Question-2
console.log("--Question-2---");
var players = ["Messi ", "Ronaldo ", "Hazard ", "Neymar ", "Salah "];
var text = "";
var m;
for (m = 2; m < players.length; m++) {
  text += players[m];
}
console.log(text);
//output Hazard Neymar Salah

//? Question-3
console.log("--Question-3---");
var n = 0;
var sums = 0;
while (n < 3) {
  var sums = sums + n;
  n++;
}
console.log("The total is: " + sums);
// output The total is: 3
