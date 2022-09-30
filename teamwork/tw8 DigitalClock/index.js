//! Question 2
// 2. When would 'results shown' be logged to the console?

let modal = document.querySelector("#result");
setTimeout(function () {
  modal.classList.remove("hidden");
}, 5000);
console.log("Results shown"); //* A. immediately

//! Question 3
// 3. What is the result in the console of running the code shown?

let Storm = function () {};
Storm.prototype.precip = "rain";

let WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = "snow";

let bob = new WinterStorm();
console.log(Storm.prototype);
console.log(WinterStorm.prototype);
console.log(bob);
console.log(bob.precip);

//! Question 4
// 4. What is the result in the console of running this code?

function logThis() {
  this.desc = "logger";
  console.log(this);
}
new logThis();

//! Question 5
// 5. For the following class, how do you get the value of 42 from an instance of X?

class X {
  get Y() {
    return 42;
  }
}
var x = new X();

console.log(x.Y);

//! Question 7
// 7. What is the result in the console of running the code shown?

var start = 1;
function setEnd() {
  var end = 10;
}
setEnd();
// console.log(end);

//! Question 8
// 8. What will this code log in the console?

function sayHello() {
console.log('hello');
}
console.log(sayHello.prototype);
