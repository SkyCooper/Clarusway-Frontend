//! Write a function that takes an array of characters and reverses the letters in place.

// Examples:
// reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
// reverse("Happy") ➞ yppaH

let clarusRock = "Clarusway Rocks!";
let ters11 = clarusRock.split("").reverse().join("");
console.log("ters11",ters11);


// let ters2 = "";
// for (let i = deneme.length-1; i >= 0; i--) {
//   ters2 = ters2.concat(deneme[i]);
// }
// console.log(ters2);

const reverseString = (str) => {
    let reverse = "";
for (let i = str.length-1; i >= 0; i--) {
  reverse = reverse.concat(str[i]);
}
return reverse;
}

console.log(reverseString("Happy"));
console.log(reverseString(clarusRock));





//! Write a function that takes an array of characters and reverses the words order.
// Please note that, single word should not be reversed!

// Examples
// Input : 'Clarusway' => Output : 'Clarusway'
// Input : 'days. big make things Little' => Output : 'Little things make big days.'

const reverseSentence = (str) => {
    if (str.split(" ").length == 1){
        return str
    } else {
        let sentence = "";
        for(let i = str.split(" ").length-1 ; i>=0; i-- ) {
            sentence += str.split(" ")[i] + " ";
        }
        return sentence.trimEnd();
    }
}



let str11 = "days. big make things Little"
// let str11 = "days."
// console.log(str11.split(" ").length);
console.log(reverseSentence(str11));


