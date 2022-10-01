const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
arr1.sort() === arr1,
arr2.sort() == arr2,
arr1.sort() === arr2.sort()
);

console.log(arr1.sort());
console.log(arr2.sort());
console.log(arr1 === arr2);

const notifications = 1;
console.log(
  `You have ${notifications} notification${notifications > 1 ? "s" : ""}`
);

const topics = ["cooking", "art", "history"];
const [first] = ["cooking", "art", "history"];
console.log(first);


const [, , daltones] = ["Joe", "Jack", "William", "Averell"];
console.log(daltones);


const numbers = [1, 2, 3, 4, 5];
const [x, y, ...restof] = numbers;
console.log(restof);