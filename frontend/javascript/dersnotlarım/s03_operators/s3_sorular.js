//todo SORU-1 in-class sorusu; kullanıcan iki sayı alın ve çarpma ve bölme yapın
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
console.log(
  `${num1} x ${num2} is ${num1 * num2}, \n${num1} / ${num2} is ${num1 / num2}`
);

//todo SORU-2 in-class sorusu; kenar uzunlukları verilen üçgenin alanının bulunması
let side1 = +prompt("Enter first side");
let side2 = +prompt("Enter second side");
let side3 = +prompt("Enter third side");

const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(
  perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
);

console.log(`Area of triangle is ${area}, perimeter is ${perimeter}.`);

//todo SORU-3 in-class sorusu; dikdörgen çevresini kullanıcıdan kenar uzunluğu alarak hesaplayın
side1 = +prompt("Enter first number");
side2 = +prompt("Enter second number");
console.log(`Rectangle area is ${(side1 + side1) * 2}`);

//todo SORU-4 in-class sorusu; dairenin alanını bulun
let radius = +prompt("Enter first number");
console.log(`Circle alan is ${radius ** 2 * Math.PI}`);

//todo SORU-5 in-class sorusu; dairenin çevresini bulun
console.log(`Circle çevre is ${radius * 2 * Math.PI}`);

//todo SORU-6 in-class sorusu; fahrenayt/celcius dönüşümü yapın
//! 1nci çözüm
const celcius = +prompt("Give me celcius :");
const fahrenheit = +prompt("Give me fahrenheit :");
console.log(`${celcius} °C is ${celcius * 1.8 + 32} °F`);
console.log(`${fahrenheit}  °F is ${(fahrenheit - 32) / 1.8} °C`);

//! 2nci çözüm @matthew
let cTemp = +prompt("Enter celcius temperature");
const cToFahr = (cTemp * 9) / 5 + 32;
console.log(`${cTemp}°C equals ${cToFahr.toFixed(2)}°F`);

let fTemp = +prompt("Enter fahrenheit temperature");
const fToCel = ((fTemp - 32) * 5) / 9;
console.log(`${fTemp}°F equals  ${fToCel.toFixed(2)}°C`);

//todo SORU-7 in-class sorusu; bugünün tarihinin yıl, ay, ve gününü yazdırın
const today = new Date();
console.log(today);
console.log(today.getFullYear()); // 2022
console.log(today.getMonth()); // 7nci index +1 eklemek gerekir.
console.log(today.getDate()); // Ayın kaçıncı günü,
console.log(today.getDay()); // haftanın kaçıncı günü 3ncü index +1 eklemek gerekir
console.log(today.getHours());
console.log(
  `Day of month ${today.getDate()},month of year ${
    today.getMonth() + 1
  }, year is ${today.getFullYear()}`
);

console.log(`day of month is ${today.getDate()}`);
console.log(`month of year is ${today.getMonth() + 1}`);
console.log(`year is ${today.getFullYear()}`);

//todo SORU-7 in-class sorusu; 3 sayı alın kullanıcıdan
let number1 = +prompt("Enter first number");
let number2 = +prompt("Enter second number");
let number3 = +prompt("Enter third number");
console.log(
  `${number1 % 10 == number2 % 10} , ${number2 % 10 == number3 % 10} , ${
    number3 % 10 == number1 % 10
  }`
);

const answer =
  number1 % 10 == number2 % 10 ||
  number2 % 10 == number3 % 10 ||
  number3 % 10 == number1 % 10; // === ile yapılması daha doğru olur.
console.log(`There are at least 2 numbers having same first digit: ${answer}`);

//! 2nci çözüm @matthew
let p = +prompt("Enter first number");
let q = +prompt("Enter second number");
let r = +prompt("Enter third number");
const result = p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
console.log(`There are at least 2 numbers having same first digit: ${result}`);
