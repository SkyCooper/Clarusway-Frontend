// Write a function that takes an array of characters and reverses the letters in place.

// Examples:
// reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
// reverse("Happy") ➞ yppaH

// let reverseString = function(string) {
//      return string.reverse();
// }

// console.log(reverseString("Happy"));

// Write a function that takes an array of characters and reverses the words order.
// Please note that, single word should not be reversed!

// Examples
// Input : 'Clarusway' => Output : 'Clarusway'
// Input : 'days. big make things Little' => Output : 'Little things make big days.'


let deneme = "Clarusway Rocks!";
// let ters = deneme.slice();
// console.log(deneme, ters);

let ters2 = " ";
for (let i = deneme.length; i>=0; i--){
    ters2 = ters2.concat(deneme[i]);  
}
console.log(ters2);

ters2 = deneme[::-1]
