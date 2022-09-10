let fullStack = {
languages: ["JavaScript", "React", "HTML"],
jira: true,
gitHub: true,
difficulty: 8,
}
for(let k=0; k<fullStack.languages.length; k++){
console.log(fullStack.languages[k]);
}
//output : JavaScript, React, HTML

Object.keys(fullStack).forEach((element) => {
  console.log(element);
});


const myCar = {
make : 'ford',
model : 'Mustang',
year : 1965,
color : 'Black'
}


myCar.age = 2022;

// myCar.age(2022) //Output: 57


// JS-CC-004 : Roman Numerals
// Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

// Example: 1000=M 900=CM 90=XC
// 2008 is written as MMVIII:
// 2000=MM 8=VIII

// Problem Statement
// Write a function that takes normal number( 8, 148, 457 ) and convert to Roman Numerals( VIII, CXLVIII, CDLVII )

// Please note that, there is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

function romanize(num) {
  if (isNaN(num)) return NaN;
 let digits = String(+num).split(""),
    key = ["",      "C",      "CC",      "CCC",      "CD",      "D",      "DC",      "DCC",      "DCCC",      "CM",      "",      "X",      "XX",      "XXX",      "XL",      "L",      "LX",
      "LXX",      "LXXX",      "XC",      "",      "I",      "II",      "III",      "IV",      "V",
      "VI",      "VII",      "VIII",      "IX",    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

function romanize1(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;
}

console.log(romanize(1000));
console.log(romanize1(1000));
console.log(convertToRoman(1000));

//ihsan hoca çözümü,
let doRoma = (number) => {
    let arr = ("" + number).split("");
  //   let arr = [...(String(number))]
  //   let arr = [...(number.toString())]
  while (arr.length < 4) {
    arr.splice(0, 0, "0");
  }
  let birler = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let onlar = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  let yuzler = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let binler = ["", "M", "MM", "MMM"];
  return binler[arr[0]] + yuzler[arr[1]] + onlar[arr[2]] + birler[arr[3]];
};

console.log(doRoma(34));



//* ilave çözüm
function romanNum(num) {
  const romanNums = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["M", "MM", "MMM"],
  ];

  const numArr = num
    .toString()
    .split("")
    .map((n) => Number(n));
  const result = numArr
    .reverse()
    .map((n, i) => romanNums[i][n - 1])
    .reverse()
    .join("");

  return result;
}