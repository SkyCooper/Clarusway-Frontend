//! *********** Types in TypeScript *************
//? any - unknown - void - never types
// The TypeScript supports all of Javascript data types and also brings its additional own special types .

// TypeScript also provides both numeric and string - based enums . Enums allow a developer to define a set of named constants.

//? ➤ Type : any

// any is a type that disables type checking and effectively allows all types to be used. We got no specific type assignment. In essence, it means that any type of data may be stored there. any is very flexible, which may seem amazing at first, but it actually has a lot of disadvantages. You should avoid any at all costs since it effectively negates all of TypeScript's advantages.

// When to use Any ?
// You can use any as a backup if you have some value, some type of data, and you don't know what kind of data would be saved in there and you're performing some runtime checks. (This may be the case when you work with third party libraries and does not want the compiler to throw errors)

// Then you might choose any , but in other circumstances, you should avoid any .

// Be specific about the type of data you're dealing with if you have a possibility of knowing.

//? ➤ Type : unknown

// unknown type means that the type of variable is not known . It is the type - safe counterpart of any .

//* You can assign anything to an unknown type:
let unknownVar: unknown;
unknownVar = false; // boolean
unknownVar = 15; // number
unknownVar = "Hello World"; // String
unknownVar = ["1" , "2" , "3" , "4" , "5"] // Array
unknownVar = { userName: 'admin' , password: '123x' }; // Object
unknownVar = null; // null
unknownVar = undefined; // undefined

//* But cannot assign unknown to any other types:
let value: unknown;
let newValue1: boolean = value; // Error
let newValue2: number = value; // Error
let newValue3: string value; // Error
let newValue4: object = value; // Error
let newValue5: any[] = value; // Error
let newValue6: Function = value; // Error

//* The special types unknown and any can carry any value.
//* unknown is preferred over any. Because it provides safer typing – if you wish to conduct operations on unknown , you must use type assertion or narrow to a specified type.

//? ​➤ Type : void

// In programming languages such as Java, void is used when there is no data. For example, if a function does not return any value then you can specify void as return type.

function sayHi(): void { 
    console.log('Hi!')
} 

let greet: void = sayHi(); 
console.log(greet); //Output: undefined

// There is no meaning to assign void to a variable, as only null or undefined is assignable to void.
let x: void = undefined;
let y: void = null;
let z: void = 1; // Error


//? ➤ Type : never
// The never type represents the value that will never happen .

// We use it as the return type of a function , which does not return a value . For example , the function that always throws an exception is shown below .

  function throwError(errorMsg: string): never {
    throw new Error("Error has occurred");
  }

//* Difference between never and void
// The void type can have undefined or null as a value where as never cannot have any value .
let something: void = null;
let nothing: never = null;
// Error : Type ' null ' is not assignable to type ' never '



//! ****************** TypeScript - Arrays ****************
// ➤ An array is a specific kind of data type that uses a special syntax to sequentially store many values of various data types.

// Like JavaScript, TypeScript has support for arrays. There are two ways to declare an array:

// ●1. Using square brackets. This approach is comparable to how array declaration works in JavaScript.
let lessons: string[] = ['HTML', 'CSS', 'React'];


// ●2. With generic array type, Array
let lessons: Array<string> = ['HTML', 'CSS', 'React'];
let nums: Array<number> = [1 , 2 , 3 , 4];

// Obviously, you could initialize a mix array as shown below, but then you wouldn't benefit from TypeScript's type system.
let arr =  ['HTML', 'CSS', 1,  'React', 4]


// ➤The generic array type syntax used by TypeScript allows an array to hold elements of many data types, as demonstrated below.
let values: (string | number)[] =['HTML', 'CSS', 1, 'React', 4]

// Accessing Array Elements:
values[0]; //returns HTML
values[1]; //returns CSS
values[2]; //returns 1
values[5]; //returns undefined

// ➤Examples for Array assignments
let lessons: Array<string> = ['HTML', 'CSS', 'React'];
lessons[3] = 1; //Type 'number' is not assignable to type 'string'.

let nums: Array<number> = [1 , 2 , 3 , 4];
nums[0] = '1'; //Type 'string' is not assignable to type 'number'.

let values: (string | number)[] =['HTML', 'CSS', 1]
values[3] = 'React' // No error
values[4] = 2 // No error
values[5] = false // Type 'boolean' is not assignable to type 'string | number'.


// 🎗️ Note: The use of Type annotation is not mandatory in TypeScript
let score = [1 , 2 , 3 , 4];

// Because every element in this array is a number, we don't even need to add the type annotation. The compiler may still determine the type of this variable even if the type annotation is removed. If we want to add an element other than number to this array, we still get an error.
let score = [1 , 2 , 3 , 4];
score[4] = '5' //Type 'string' is not assignable to type 'number'.

// But what if we had an empty array :
let score = []

// The type of this variable is any array, which is something we should avoid with any arrays. If we are defining an empty array and we know the type of the variables we will keep in it later, we can write type annotation.
let score: number[] = []


//! *************** Tuples *************
// ➤ Additionally, TypeScript introduces a few additional types and notions that are not present in plain vanilla JavaScript. For example the tuple type. Tuples may be familiar to you now from other programming languages. They are not present in JavaScript.

// ➤ Tuple is an array, but it's a fixed length array. (Actually not just fixed length but also fixed type.)1
// Where may this be useful?

// We often use them when working with a pair of values for example let's say for each user we want to represent two values an id and an a so we declare a variable and annotate it using a special syntax;

let user: [number, string] = [1, 'Matthew'];

// First we add square brackets and then tell the compiler that the first element is going to be a number whereas the second element is going to be a string. We have a fixed length array with exactly two elements nothing more nothing less so if we add a third element here we get a compilation error.

let user: [number, string] = [1, 'Matthew', 'Instructor'];
// Type '[number, string, string]' is not assignable to type '[number, string]'.
// Source has 3 element(s) but target allows only 2.ts(2322)

// Likewise, if we assign a different type than the one we declared, we will get an error.
let user: [number, string] = [1, 'Matthew']
user[0] = 'TypeScript'
//Type 'string' is not assignable to type 'number'.



// If we try to make more than two assignments, we will get an error.
let user: [number, string] = [1, 'Matthew']
user[2] = 'TypeScript'
//Tuple type '[number, string]' of length '2' has no element at index '2'


// ➤All the methods of number objects are visible if we access the first element, and all the properties and methods of string objects are visible if we access the second element.


//* ➤ if we compile our code we're just going to see a regular javascript array in javaScript file.
let user = [1, 'Matthew']; 


// ⚠️ Warning! :
// While tuples are a special method for TS, they are still an array for js. So, we can use array methods on tuple such as pop(), concat() etc. Although we get an error while assigning with index, but new elements can be added to the tuple with the push() method. TS compiler does not give an error in this case.
// But even with the push() method, we cannot assign a variable other than the one specified type in the declaration.
let user: [number, string] = [1, 'Matthew']
user.push('TypeScript')
console.log(user) // [1, 'Matthew', 'TypeScript']

user.push(true) //Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

//* ➤Tuple Arrays
// You may also declare a tuple array.

let instructors: [number, string][] = [[1, 'Matthew'],[2, 'Mark']];
instructors.push([3, 'Ryan']);


//! *************** Enums **************

// ➤ Enums or enumerations are a new data type supported in TypeScript. Enums are commonly used in object-oriented languages like Java and C#. Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript is now also supported for this.

// Enums, which can be either string, numeric or mixed values, allow us to create a group of related values known as named constants.

// An enum can be defined using the enum keyword. As in the example, we define without any = or : and using Pascal Case as the name convention.

enum Roles {  Manager = 1, Instructor, Mentor, Student };

// Above, we have a numeric enum where Manager is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Roles.Manager has the value 1, Instructor has 2, Mentor has 3, and Student has 4.

// We could omit the initializers completely if we wanted:

enum Roles {  Manager, Instructor, Mentor, Student };

// In this case, the value of the Manager is 0 and followed by the others as 1,2,3.

// When we compile our TS code with enum, we get an output like the one below in js.

//* TypeScript code:
enum Roles {  Manager = 1, Instructor, Mentor, Student };

console.log(Roles.Instructor);


//* JavaScript code after compile :
var Roles;
(function (Roles) {
    Roles[Roles["Manager"] = 1] = "Manager";
    Roles[Roles["Instructor"] = 2] = "Instructor";
    Roles[Roles["Mentor"] = 3] = "Mentor";
    Roles[Roles["Student"] = 4] = "Student";
})(Roles || (Roles = {}));

console.log(Roles.Instructor);


// Generated javascript code is pretty verbose it's pretty lengthy now you don't need to worry about understanding this.

// 🎗️ Note:
// If you add const keyword before enum, You get less code after compile.
// const enum Roles { Manager = 1, Instructor, Mentor, Student };
// console.log(Roles.Instructor);
// When you compile the code you will get the following result :
// console.log(2 /* Roles.Instructor */);


//? String & Mixed enums

// ➤ String enumerations are similar, although there are some minor runtime differences. Each member of a string enumeration must be hard initialized with a string literal.
enum Tshirts { Large = 'L', Medium = 'M', Small = 'S', Extra_Small ='XS'}
console.log(Tshirts.Large);   // Output is : L

// ⚠️ String enums don’t have auto-incrementing behavior.

// ➤ As the name of mixed enumerations suggests, they contain both string and numeric data. String values in the same enum will not auto increment, while number values will automatically increment.

enum States {Alabama = 'AL', Arizona = 'AZ', California = 6, Colorado, Connecticut, Florida = 'FL' };
let cl: States = States.Colorado;
console.log(cl) // 7
console.log(States.Connecticut); // 8


//! ************** Union Types ****************
// ➤We can define a variable in TypeScript that can contain several types of values. In other words, TypeScript may combine one or two separate types of data (such as numbers, strings, and so on) into a single type known as a union type. Union types are an effective means of expressing a variable that has numerous kinds. Using the pipe ('|') symbol between two or more data types, they can be merged.

function addOrConcat(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

const add = addOrConcat(3,25);
console.log(add) //28

const concatString = addOrConcat('type','Script');
console.log(concatString) //typeScript

// ➤In the example, the behavior of our function changes according to the type of our inputs. If we give numbers, it does the addition operation, if we give it strings, it performs the concat operation. In this case, we use union type so that our input1 and input2 variables accept both (number | string). If necessary, more than two types can be defined.


//! ****************** Type Aliases | Literal Types ***************
// ➤ We saw union types. It doesn't matter when we will use it in one or two variables, but if we are going to use it in many places in our code, it will make us repeat the code unnecessarily. To prevent this, we use type alias. Also called custom module. Here we will write our own type which acts as union type.



// ➤For this, we have to create our type before we start using it. We define the type alias with the type keyword. Then we give our alias name and equal sing then with pipe We declare our types.

//* type Combine = number | string; //Type Alias Declaration

type Combine = number | string;

function addOrConcat(input1: Combine , input2: Combine ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

const add = addOrConcat(3,25);
console.log(add) //28

const concatString = addOrConcat('type','Script');
console.log(concatString) //typeScript


//? Literal Types
//* String Literal Type
// ➤There are three sets of literal types available in TypeScript; strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

// ➤Let's change our function a little, and specify the add / concat operation with a third parameter. So let's enter two numbers and request them to be concat.

// output: "text" | "number"
// With this definition we have made, the user will be able to enter only 'text' or 'number' as the 3rd parameter and our function will run without errors.
type Combine = number | string; // Type Alias Declaration

function addOrConcat(input1: Combine, input2:Combine, output: "alphaNumeric" | "Numeric") {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' && output == 'Numeric') {
        result = input1 + input2
    } else if(output == 'alphaNumeric'){
        result = input1.toString() + input2.toString()
    }
    return result;
}

const add = addOrConcat(3,25,'Numeric');
console.log(add) //28

const numberConcat = addOrConcat(3,25,'alphaNumeric');
console.log(numberConcat) //325

const concatString = addOrConcat('type','Script','alphaNumeric');
console.log(concatString) //typeScript

const failureAttempt = addOrConcat('type','script','test');  // Argument of type '"test"' is not assignable to parameter of type 'Output'

//  --------------
type pet = 'cat' | 'dog';

let pet1: pet = 'cat';
let pet2: pet = 'dog';
let gator: pet = "horse"; // error


//* Numeric Literal Types
// ➤ Use literal types to restrict the values that a variable can take.
// size: 35 | 38 | 41 | 44 | 47 | 50

type Size = 35 | 38 | 41 | 44 | 47 | 50;

function getSize(size: Size) {
  if (size == 35) {
    return "S";
  } else if (size == 38) {
    return "M";
  } else if (size == 41) {
    return "L";
  } else if (size == 44) {
    return "XL";
  } else if (size == 47) {
    return "XXL";
  } else if (size == 50) {
    return "XXXL";
  }
}

getSize(35);  // OK
getSize(36);  // Argument of type '36' is not assignable to parameter of type '35 | 38 | 41 | 44 | 47 | 50'


//! ************ Custom Types *************
// ➤ We have easily written more than one type with Union type and type alias. Type script allows us to write our own types as well. Below example we defined alignment as 'left', 'center' and 'right' with literal type. We can make this definition outside as custom and use this type when assigning a variable.

// Custom type example :
type alignment = "left"  | "center" | "right"

let h1: alignment = "left"
let h2: alignment = "middle" //Type '"middle"' is not assignable to type 'alignment'.


//!  ***************** Intersection Types **************
// ➤We use the & sign to intersect the types. Here Universal type is an intersection of Combine and Numeric types . So Universal type can take only number type value. Because, when we use intersection with types, the intersected type can only be used.

// For example:

type Combine = string | number;
type Numeric = number | boolean;
type Universal = Combine & Numeric;

let x:Universal = 'hi' //Type 'string' is not assignable to type 'number'.
let y:Universal = false //Type 'boolean' is not assignable to type 'number'.
let z:Universal = 42 //✔


// ➤ Intersection types allow us to combine other types. intersection types can be especially useful when used in conjunction.
type User = {
  id: number;
  name: string;
};

type Admin= {
  privileges: string[];
};


type SuperUser = User & Admin;

const elevatedUser: SuperUser = {
  id: 1,
  name: 'Mark',
  privileges: ['start-database'],
};

// Superuser, which is the intersection of user and admin types, can take the properties of both types.


//! ****************** Nullable Type ******************
// ➤ Typescript is very strict about using null and undefined values by default. Because, as you are probably aware, these values are a common source of application bugs.

// For example:
function hola(userName: string){
    console.log(userName.split(''))
}

hola(null) // Argument of type 'null' is not assignable to parameter of type 'string'.

// 'Argument of type null is not assignable to parameter of type string,' says the error. Where does this originate from?
// Go to your ts.config file and look for a compiler option called 'strict null checks' in the type checking section. This is enabled by default as part of the strict option, so if strict is set to true.

// You can can overwrite it and turn off this feature or you can annotate null (if required undefined also) for variables or function paramaters. Again, we must properly configure the null and undefined scenarios in our code.
function hola(userName: string | null | undefined) {
  if (userName) {
    console.log(userName.split(""));
  } else {
    console.log(["Hola!"]);
  }
}

hola(null);
