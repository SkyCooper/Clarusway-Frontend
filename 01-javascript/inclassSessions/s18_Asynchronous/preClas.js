//! ➤ setTimeout
// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

//* setTimeout(function, milliseconds);
// function - a function containing a block of code
// milliseconds - the time after which the function is executed
// The setTimeout() method returns an intervalID, which is a positive integer.

// program to display a text using setTimeout method
function hello() {
  console.log("Hello world");
}
let intervalId = setTimeout(hello, 3000);
console.log("This message is shown first");
console.log("Id: " + intervalId);

//! Note: The setTimeout() method is useful when you want to execute a block of once after some time. For example, showing a message to a user after the specified time

// Cancel timeout before calling on given time
// If you want to stop this function call, you can use the clearTimeout() method.

//* clearTimeout(intervalID);
// Here, the intervalID is the return value of the setTimeout() method.
// program to stop the setTimeout() method
let count = 0;

// function creation
function increaseCount() {
  count += 1;
  console.log(count);
}

let id = setTimeout(increaseCount, 3000);
clearTimeout(id);
console.log('setTimeout is stopped.');
// expected output: setTimeout is stopped


//! Display Time Every 3 Second
// The setTimeout() method calls the function only once after the time interval (here 3 seconds).
// program to display time every 3 seconds
function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
  setTimeout(showTime, 3000);
}
showTime(); 
// 08:00:44
// 08:00:47
// 08:00:50
// 08:00:53
// 08:00:56
// 08:00:59
// 08:01:02
// 08:01:05

// The above program is recursive, meaning calling itself until the memory runs out.

// Note: If you need to execute a function multiple times, it's better to use the setInterval() method.


//! ➤ setInterval
// The setInterval() method repeats a block of code at every given timing event.
//* setInterval(function, milliseconds);
// function - a function containing a block of code
// milliseconds - the time interval between the execution of the function
// The setInterval() method returns an intervalID which is a positive integer.
// program to display a text using setInterval method
function hello() {
  console.log('Hello world');
}
setInterval(hello, 2000);

// Output
// Hello world
// Hello world
// Hello world
// Hello world
// Hello world
// ....


// In the above program, the setInterval() method calls the greet() function every 2000 milliseconds(2 second). The program displays the text Hello world once every 2 seconds.

//! Note: The setInterval() method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.



// ● Display Time Every 5 Seconds
// program to display time every 5 seconds
function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}
let display = setInterval(showTime, 5000);
// Output
// "7:42:03 PM"
// "7:42:08 PM"
// "7:42:13 PM"
// ....

// The above program displays the current time once every 5 seconds.



//! ➤ Clearinterval
// If you want to stop this function call, you can use the clearInterval() method.
//* clearInterval(intervalID);
// Use clearInterval() Method
// program to stop the setInterval() method after five times
let count1 = 0;
let interval = setInterval(function () {
  count1 += 1;
  if (count1 === 5) {
    clearInterval(interval);
  }
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);
}, 2000);

// Output:

// Note: If you only need to execute a function one time, it's better to use the setTimeout() method.

// You can pass additional parameters as much as needed to both setTimeout() and setInterval() by appending parameters just after the milliseconds:
setTimeout(function, milliseconds, parameter1, ....paramenterN);
setInterval(function, milliseconds, parameter1, ....paramenterN);

// example
function greet(firstName, lastName) {
    console.log('Hello' + ' ' + firstName + ' ' + lastName);
}
setInterval(greet, 2000, 'Barry', 'Mitchell')


//! ➤ Callback Hell
// If you want write async codes depended to each other, you may use nested callback. But this is not good programming approach. It is hard to understand and maintain of the callback hell.
setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);