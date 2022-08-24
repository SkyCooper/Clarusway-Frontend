//! Write a function that takes an array of characters and reverses the letters in place.

// Examples:
// reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC
// reverse("Happy") ➞ yppaH

let deneme = "Clarusway Rocks!";

let ters2 = " ";
for (let i = deneme.length; i >= 0; i--) {
  ters2 = ters2.concat(deneme[i]).replace("undefined", "");
}
console.log(ters2);

// let reverseString = function(string) {
//      return string.reverse();
// }

// console.log(reverseString("Happy"));





//! Write a function that takes an array of characters and reverses the words order.
// Please note that, single word should not be reversed!

// Examples
// Input : 'Clarusway' => Output : 'Clarusway'
// Input : 'days. big make things Little' => Output : 'Little things make big days.'

const reverseSentence = (str) => {
    if (str.split("").length === 1){
        return str
    } else {
        let sentence = "";
        for(let i = 0 ; i<= str.split("").length; i++ ) {
            sentence = str.concat(i)
            return sentence
        }
    }
}

let str11 = "days. big make things Little"
console.log(reverseSentence(str11));


