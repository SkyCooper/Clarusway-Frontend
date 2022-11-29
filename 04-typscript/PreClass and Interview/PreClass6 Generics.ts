//! *************** Generics **************
// ➤ In this section, we will learn about generics in TypeScript.

// ➤ In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types. So, components can be called or used with a variety of data types.

// ➤ Generics are a way to help us write dynamic, flexible code. To explain what generics are, let’s take a look at the example below:

function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// ➤ The above function takes an array of numbers as its parameter and returns a random element from the array. Assuming that you need to get a random element from an array of strings. This time, you may come up with a new function:

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// ➤ Maybe next time you will need to get a random element in an array of objects. Creating a new function every time you want to get a random element from a new array type is not a good practice, and actually it is repeating redundant code.

// ➤ Generics are reusable components (be it a function, an object, a class) that can be used multiple times for multiple variable types, like a string, a number, boolean, or an object type etc.

// ➤ One solution for this issue is to set the type of the array argument as any[]. By doing this, you need to write just one function that works with an array of any type.

function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
let numbers = [1, 5, 7, 4, 2, 9];
let employees = ["Mark", "John", "Jack", "Robert"];

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(employees));

// ➤ But this function is not really practical for two reasons:

// 1.The compiler doesn’t know what the type of the return value will be. It doesn’t allow you to enforce the type of the returned element. In other words, it isn’t type-safe.
// 2.Because of the above, the IDE won’t know what value type will be returned from the function, resulting in higher difficulty to access its properties, we would have to be sure beforehand. The program could also crash if an undefined variable is used later on.

// ➤ Note that, we can access the length property of string, but if it returns a number neither the compiler nor the IDE knows this because we are losing information about return type. While the example above is technically a generic function, let’s now improve it by making use of TypeScript so that we can know what type will be returned from getRandomElement:

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// ➤ This function uses type variable T. The T allows you to capture the type that is provided at the time of calling the function. Also, the function uses the T type variable as its return type.

// ➤ This getRandomElement() function is generic because it can work with any data type including string, number, objects,…

// ➤ By convention, we use the letter T as the type variable. However, you can freely use other letters such as U, V Y, …

let numbers = [1, 5, 7, 4, 2, 9];
let employees = ["Mark", "John", "Jack", "Robert"];

let selectedNumber = getRandomElement<number>(numbers);
console.log(selectedNumber);
let selectedEmp = getRandomElement<string>(employees);
console.log(selectedEmp);

// ➤ Arrays have built-in generics. The constant payments is an array that will accept any value that is of type number. The function printAll will also accept any array of T type as an argument, turning printAll into a generic function.

const payments: Array = [1.94, 2.33];
payments.push(-2.99);
// payments.push('4.42'); // Not possible.
// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll(['Apple', 'Banana']);
printAll([1, 3, 5]);
// printAll([1, 'string', 5]); // Not possible.

//? Generic Interfaces and Classes
// ➤ When creating interfaces and classes in TypeScript, it can be useful to use generic type parameters to set the shape of the resulting objects. For example, a class could have properties of different types depending on what is passed in to the constructor.

// ➤ A generic interface/class has a generic type parameter list in an angle brackets < > that follows its name:

interface interfaceName<T> {
  field: T;
  new (aKey: T);
}
class className<T> {
  field: T;
  constructor(aField: T) {
    this.field = aField;
  }
}

// This make the type parameter T visible to all members of the interface.

// The type parameter list can have one or multiple types. For example:

interface interfaceName<U, V> {
  // ...
}
class className<K, T> {
  //...
}

// ➤ The following code shows a generic interface that defines key / value pair:

interface Pair<K, V> {
  key: K;
  value: V;
}
let day: Pair<string, number> = {
  key: "Monday",
  value: 0,
};
console.log(day);

// ➤ The following declare an interface that describes an index type:

interface Options<T> {
  [name: string]: T;
}
let inputOptions: Options<boolean> = {
  disabled: false,
  hidden: true,
};

// Generic Class Stack Example
// ➤ A stack is a data structure that works on the last-in-first-out (or LIFO) principle. It means that the first element you place into the stack is the last element you can get from the stack.

// ➤ Typically, a stack has a size. By default, it is empty. The stack has two main operations:

// ​ ● Push: push an element into the stack.

// ​ ● Pop: pop an element from the stack.

// The following shows a complete generic Stack class called Stack<T>:

class Stack<T> {
  private items: T[] = [];
  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  isFull(): boolean {
    return this.items.length === this.size;
  }
  push(element: T): void {
    if (this.items.length === this.size) {
      throw new Error("The stack is overflow!");
    }
    this.items.push(element);
  }
  pop(): T {
    if (this.items.length == 0) {
      throw new Error("The stack is empty!");
    }
    return <T>this.items.pop();
  }
}

// ➤ Usage example:

function randBetween(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
let numbers = new Stack<number>(5);
while (!numbers.isFull()) {
  let n = randBetween(1, 10);
  console.log(`Push ${n} into the stack.`);
  numbers.push(n);
}
while (!numbers.isEmpty()) {
  let n = numbers.pop();
  console.log(`Pop ${n} from the stack.`);
}

//? Generic Constraints
// ➤ In some situations, a generic type parameter needs to allow only certain shapes to be passed into the generic. To create this additional layer of specificity to your generic, you can put constraints on your parameter. A constraint is specified after the generic type in the angle brackets.

// ➤ A generic constraint is simply a way to put some constraints to a type. Suppose we have a generic function like this,

function getStuff<T>(arg: T) {}


getStuff("Clarusway IT School"); //✅
getStuff(42); //✅
getStuff([]); //✅
getStuff({}); //✅
getStuff(null); //✅
getStuff(undefined);//✅

// ➤ Use extends keyword to constrain the type parameter to a specific type.

// ● As you notice that null and undefined are allowed. To disallow null & undefined values we need to apply a constraint on the T type. By adding extends {}, typescript can filter out null and undefined, allowing only primitive types and object types as parameter type, by adding extends object typescript filters primitives as well.

function getStuff<T extends object>(arg: T) {
  return arg;
}
getStuff({company: "Clarusway IT School"}); //✅
getStuff([]); //✅
getStuff({}); //✅
getStuff('Message string'); //❌
getStuff(42); //❌
getStuff(null); //❌
getStuff(undefined); //❌

// ➤ Use extends keyof to constrain a type that is the property of another object.

// ● Assume that we have a Blog object. We need to write a function that updates given object's some of existing properties (not all of them required), not the non-existent props, e.g. no new property addition.

interface Blog {
    id: string;
    title: string;
    categories: string[];
    tags: string[];
    topicImageUrl?: string;
    content: string;
}
function update<O extends object, K extends keyof O>
         (obj: O, key: K, newValue: O[K]): O {
    return { ...obj, [key]: newValue };
}
const draft: Partial<Blog> = {
    title: 'How to become web developer?'
}
update(draft, "tags", ["Web", "Frontend", "Backend"]); //✅
update(draft, "author", "John Doe"); //❌ author property does not exist



