
//! 11 Ağustos 2022 
//todo F3673-Cooper
//* Js Preclass
//? Better Comments
// Clarusway

/**
* 11 Ağustos 2022
* * 11 Ağustos 2022
* ! Clarusway
* ? Better Comments
* todo F3673-Cooper
*/

//! yukarıdaki bölüm yorumların nasıl farklı yapılacağını açıklamak için yazılmıştır, baktıktan sonra silebilirsiniz, iyi çalışmalar.

// !Operators
// ➤ Let's take a simple 3 + 2 phrase equals 5. Number 3 and 2 are operands and ‘+’ is the operator.
// ➤ Expressions rely on operators to create a single value from one or more values.

// ➤ JavaScript supports the operators of the following types.
// ● Assignment Operators
// ● Arithmetic Operators
// ● Comparison Operators
// ● Logical Operators
// ● Bitwise Operators, Bitwise operators are rarely used in everyday programming.
// ● Other Operators

// !Assignment Operators
console.log("----Assignment Operators----");
// ➤ Assignment operators assign values to JavaScript variables.

// = Assignment operator
let aNumber = 4; // 4
console.log(aNumber);

// += Addition assignment
aNumber += 6; // aNumber = aNumber + 6
console.log(aNumber);

// -= Substraction assignment
aNumber -= 2; // aNumber = aNumber - 2
console.log(aNumber);

// *= Multiplication assignment
aNumber *= 2; // aNumber = aNumber * 2
console.log(aNumber);

// /= Division assignment
aNumber /= 2; // aNumber = aNumber / 2
console.log(aNumber);

// %= Remainder assignment
aNumber %= 7; // aNumber = aNumber % 7
console.log(aNumber);
// new aNumber value will be the remainder of division by 7

// **= Exponentiation Assignment
aNumber **= 2; // aNumber = aNumber ** 2
console.log(aNumber);

// 🎗️ Note:
// Common assignment operator is =. You will be familiar to other assignment operators such as +=, -=, *= with arithmetic operators.


// !Arithmetic Operators
console.log("----Arithmetic Operators----");
// ➤ Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.

// + Addition operator.
let a = 20 + 30;
console.log (a); //50 

// - Subtraction operator.
a = 5;
b = 2;
console.log ("a - b = ", a - b); //3 

// * Multiplication operator.
a = 4;
b = 2;
console.log("a * b = ", a * b);  // 8 

// / Division operator.
a = 4;
b = 2;
console.log("a / b = ", a / b);  // 2 

// % Modulus (Remainder) operator.
a = 9;
b = 2;
console.log("a % b = ", a % b);  // 1 

// ** Exponentiation operator.
a = 2;
b = 3;
console.log("a ** b = ", a** b);  // 8 



// ➤ Postfix/prefix increment and postfix/prefix decrement operators.
// ?When you use the ++ operator as a prefix, such as ++var, the value of var is increased by one and then returned.
// ?When you use the ++ operator as a postfix, such as var++, the original value of var is returned first, then var is incremented by 1.

// A++ Postfix increment operator.
a = 34;
b = a++; //todo a'nın ilk değerini b'ye atadı, sonra a'yı arttırdı
console.log (b); //34
console.log (a); //35

// A-- Postfix decrement operator.
a = 8;
b = a--; //todo a'nın ilk değerini b'ye atadı, sonra a'yı azalttı
console.log (b); //8
console.log (a); //7

// ++A Prefix increment operator.
a = 12;
b = ++a; //todo a'nın değerini arttırıp b'ye atadı, sonra a'da arttı.
console.log (b); //13
console.log (a); //13

// --A Prefix decrement operator.
a = 23;
b = --a; //todo a'nın değerini azaltıp b'ye atadı, sonra a'da azaldı.
console.log (b); //22
console.log (a); //22

// 🎗️ Note:
// Operator associativity and precedence is important for the calculations. The table lists operators in order from highest precedence (19) to lowest precedence


// !Comparison Operators
console.log("----Comparison Operators----");
// ➤ Comparison operators are used to determine equality or difference between variables or values in logical statements.

//* ➤ All comparison operators return Boolean (true or false).

// == Equality operator.
console.log("-Equality Operator-");
aa = 5, bb = 2, cc = 'Clarusway';
console.log(aa == 5);     // true
console.log(bb == '2');   // true
console.log(cc == 'clarusway');  // false

// 🎗️ Note:
// == is a comparison operator, but = is an assignment operator. using = instead of == leads to unwanted results.

//? != Inequality operator.
console.log("-Inequality Operator-");
a = 3, c = 'Clarusway';
console.log(a != 2); // true
console.log(c != 'clarusway'); // true

// === Strict equality operator.
console.log("-Strict equality Operator-");
console.log(2 === 2); // true
console.log(2 === '2'); // false

// 🎗️ Note:
// The difference between == and === is that: == evaluates to true if the operands are equal, however, === evaluates to true only if the operands are equal and of the same type.


//? !== Strict inequality operator.
console.log("-Strict inequality Operator-");
a = 2, c = 'Clarusway';
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(c !== 'clarusway'); // true


// < Less than operator.
console.log("- < Less than Operator-");
a = 3, b = 2;
console.log(a < 2); // false
console.log(b < 3); // true


// > Greater than operator.
console.log("- > Greater than Operator-");
a = 3;
console.log(a > 2); // true


// <= Less than or equal operator.
console.log("- <= Less than or equal Operator-");
a = 2;
console.log(a <= 3); // true
console.log(a <= 2); // true


// >= Greater than or equal operator.
console.log("- >= Greater than or equal Operator-");
a = 3;
console.log(a >= 3); //true

// 🎗️ Note:
// => is not an operator, but the notation for Arrow functions


// !Logical Operators
console.log("----Logical Operators----");
// ➤ Logical operators, also known as Boolean Operators, are used to determine the logic between variables or values and return true or false.

//? ➤ ! Logical NOT
console.log("- ! Logical NOT Operator-");

// true if the operand is false and vice-versa. In short it reverses boolean value.
a = true, b = false;
console.log(!a); // false
console.log(!b); // true


//? ➤ && Logical AND
console.log("- && Logical AND Operator-");

// true if both the operands/boolean values are true, else evaluates to false
a = true, b = false;
c = 8;
console.log(a && a); // true
console.log(a && b);  // false
console.log((c > 2) && (c < 2)); // false

//? ➤ || Logical OR
console.log("- || Logical OR Operator-");

// true if either of the operands/boolean values are true, else evaluates to false if both are false
a = true, b = false, c = 4;
console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true


//? ➤ Operator Chaining
console.log("-Operator Chaining-");

// && operator evaluates all expressions and returns the last expression if all expressions are evaluated as true. Otherwise, it returns the ﬁrst value that is evaluated as false.

// || operator evaluates the expressions left to right and returns the ﬁrst value that is evaluated as true or the last value if none of them is true.

a = 2, b = 3, c = 7;
d = a && b && c;
e = a || b || c;
console.log(d); // 7
console.log(e); // 2

a = 1, b = 0, c = 5;
d = a && b && c;
console.log(d); // 0
a = "", b = 0; c = null;
e = a || b || c;
console.log(e); // null

//* 🎗️ Note:
//todo  The following values are always falsy:
// false
// 0 (zero)
// -0 (minus zero)
// 0n (BigInt zero)
// '', "", `` (empty string)
// null
// undefined
// NaN

//todo  Everything else is truthy:
// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)


//! Nullish Coalescing Operator
console.log("----Nullish Coalescing Operator----");
// ➤ The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// ➤ ES2020 introduced the nullish coalescing operator denoted by the double question marks (??). The nullish coalescing operator is a logical operator that accepts two values:

//? value1 ?? value2

// ➤The nullish coalescing operator returns the first value (value1) if the second one (value2) is null or undefined. Technically, the nullish coalescing operator is equivalent to the following block:

//!
// const result = value1;
// if (result === null || result === undefined) {
//   result = value2;
// }

// A nullish value is a value that is either null or undefined.

// Why nullish coalescing operator? When assigning a default value to a variable, you often use the logical OR operator (||). For example:

let count;
result = count || 1;
console.log(result); // 1

// ➤However, the logical OR operator (||) sometimes confuses if you consider 0 or empty strings '' as a valid value like this:

count = 0;
result = count || 1;
console.log(result); // 1
// desired result should be 0, therefore using coalescing operator is a better choice

//! ?? solundaki count2 null/undefined ise sağındaki değeri ver yani 1
//! ?? solundaki count2 null/undefined değilse count2 değerini ver yani 0
let count2 = 0;
let result2 = count2 ?? 1;
console.log(result2); // 0

// The nullish coalescing operator helps you to avoid this pitfall. It only returns the second value when the first one is either null or undefined.

// ➤The nullish coalescing operator is short-circuited Similar to the logical OR and AND operators, the nullish coalescing operator does not evaluate the second value if the first operand is neither undefined nor null.

// ➤The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator. It may throw an error if it is used with || and && operators. Use with parentheses to explicitly specify operator precedences.

//! result = null || undefined ?? 'OK'; // SyntaxError
result2 = (null || undefined) ?? 'OK';
console.log(result); // 'OK'

// ➤There is also ? operator, which is the nullish coalescing operator for object properties. If there would be cases where an object property is undefined, then accessing sub properties might throw an error. See the following example:

const obj = {
    a: {
      b: { key: 'Some Value' },
        },
      d:{ key: 'My value',}
    };
  console.log(obj.a.b.key); // 'Some Value'
//!   console.log(obj.a.c.key); // error, breaks the execution
  console.log(obj.a.c?.key); // undefined, does not break the execution



  

  //! Other Operators
  console.log("----Other Operators----");
// ➤ Other operators are used in JavaScript:

// + as string concatenation operator is used to concatenate (join) two or more strings.
console.log('Clarus' + 'way');
a = 'Full-Stack';
a += ' Developer';  // a = a + ' Developer';
console.log(a);


// + as type conversion operator is used to convert strings to number data type.
a = '55';
console.log(a, typeof a); // 55 string
b = +a;
console.log(b, typeof b);// 55 number


//? typeof type information operator is used to determine type of given variable. See the example above.

//? instanceof object type query operator is used to determine object type of given object.
const arr = [1, 2, 3];
console.log(arr instanceof Array);// true

// delete deletes an object's property, or an element of an array
const user = { fullName: "John Doe", age: 40}
console.log(user);
delete user.age; // user = { fullName: "John Doe"}
console.log(user);


//* ? : Ternary Operator will be covered in the next section.

// , Comma Operator evaluates multiple operands and returns the value of the last operand.
let last = (1, 3, 7); // 7
console.log(last);