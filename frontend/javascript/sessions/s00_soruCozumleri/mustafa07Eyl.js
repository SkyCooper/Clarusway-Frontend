//! Q-1
/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
*/
const dontGiveMeFive = (start, end) => {
    let counter = 0;
    for(let i = start; i<=end; i++){
        // if(Number(i).toString().slice(-1) == "5"){
        // if(Number(i).toString().includes(5)){
        if(Number(i).toString().search(5) != -1){
            console.log(i);
            continue
        } else{
            console.log(i);
            counter++
        }
    }
  return counter;
}
console.log(Number(-15).toString().slice(-1));

console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,17));
console.log(dontGiveMeFive(-6,6));

//! Q-2
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

const descendingOrder = (n) => {
    // return Number(n.toString().split("").sort((a,b) => b-a).reduce((acc, val) => acc+val));
    // return +(n + "").split("").sort(function (a, b) {return b - a;}).join("");
    // return parseInt(n.toString().split("").sort().reverse().join(""), 10);
    return +n.toString().split("").sort((a,b) => b-a).join("");
}

// stringe çevirmek için;
// n + " "
// String(n)

// number stringe çevirmek için;
// ~~ veya + veya parseInt veya Number,

console.log(descendingOrder(0));
console.log(typeof descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));



//! Q-3
/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/

function evenLast(numbers) {
    let sum = 0;
    for(let i = 0; i<=numbers.length-1; i+=2){
            sum += numbers[i]
    }
return sum * numbers[numbers.length-1];
}


function evenLast1(numbers) {
return numbers.length
?numbers.reduce((x, y, z) => x + (z % 2 ? 0 : y), 0) * numbers[numbers.length - 1]
: 0
}

const evenLast2 = (n) => n.reduce((p, c, i) => (i % 2 ? p : p + c), 0) * n[n.length - 1] || 0;


const evenLast3 = (numbers) => { const even = numbers.filter((a, i) => i % 2 == 0);
  return even.reduce((acc, val) => val * numbers[numbers.length - 1] + acc, 0);
};

const arr = [1,2,3,4,5]
console.log(typeof evenLast(arr));
console.log(evenLast(arr));
console.log(evenLast1(arr));
console.log(evenLast2(arr));
console.log(evenLast3(arr));


//! Q-4
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3,3])       == [1,2,3]
*/

let x = "Cooper";
let y = [1,2,3,4]
console.log(y[-1]);
console.log(x.split(""));
console.log([...x]); // elemanlarına ayırır arasına virgül koyar ve diziye atar.
console.log([...y]); // dizi spread yapılırsa çıktı aynı olur.

const uniqueInOrder = function (iterable) {
    let newArr = [];
    // newArr.push(iterable[0])
    for(let i=0; i<iterable.length-1; i++){
        if(iterable[i] != iterable[i+1]){
            newArr.push(iterable[i]);
        }
    }

return newArr;
};

const uniqueInOrder1 = function (iterable) {
return [...iterable].filter((item, i, arr)=> item != arr[i-1])
};

function uniqueInOrder2(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }
  return result;
}

//benim çözümüm eksik kaldı.
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3, 3]));

console.log(uniqueInOrder1("AAAABBBCCDAABBB"));
console.log(uniqueInOrder1([1, 2, 2, 3, 3, 3]));
console.log(uniqueInOrder2("AAAABBBCCDAABBB"));
console.log(uniqueInOrder2([1, 2, 2, 3, 3, 3]));


//! Q-5
/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

function combine (...obj) {
    let result = {}
    for (const x of obj){
        for (const [key, value] of Object.entries(x)){
            if (!result.hasOwnProperty(key)){
                result[key] = value;
            } else {
                result[key] += value;
            }
        }
    }
    return result;
}

const combine1 = (...params) =>
  params.reduce((a, b) => {
    for (const x in b) {
      a[x] = x in a ? a[x] + b[x] : b[x];
    }
    return a;
  }, {});

console.log(combine(objA, objB))
console.log(combine(objA, objB, objC))
console.log(combine1(objA, objB, objC))


//birinci for dan gelen x           [ { a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 } ]
//ikinci for dan gelen [key,value]  [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]


// let arr = ['a', 'b']
// let a = arr[0]
// let b = arr[1]

// let [key, value] = arr

// console.log(b);

// let x = { a: 10, b: 20, c: 30 }
// console.log(Object.entries(x))