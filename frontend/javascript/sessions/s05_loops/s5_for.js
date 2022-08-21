// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

//todo, There are three types of traditional loops in javaScript:

// ● for statement
// ● while statement
// ● do...while statement

//todo, ➤These keywords are used to control loop itreations:

// ● break statement
// ● continue statement

//! for Statement
console.log("--for Statment--");

// ➤ The for loop is more complex, but it’s also the most commonly used loop.

// The syntax of the for loop is:
//? for (initializer; condition; iterator) {
//? for loop body
//? }

// The initializer initializes and/or declares variables and executes only once.
// The condition is evaluated.
// If the condition is false, the for loop is terminated.
// If the condition is true, the block of code inside of the for loop is executed.
// The iterator updates the value of initializer when the condition is true.
// The condition is evaluated again. This process continues until the condition is false.

//! ⚠️ Warning! :
// In the for loop, the three expressions are optional. Beware that this usage creates an infinite loop! The following shows the for loop without any expressions:
//? for ( ; ; ) {
//? statements
//?  }

console.log("--------for loop example------");
let sum = 0;
for (let i = 0; i < 6; i++) {
  console.log(i);
  sum += i;
}
console.log(`The total is ${sum}`);
// Output: 0 1 2 3 4 5 The total is 15

//todo, inclas sorusu, 1 den n kadar girilen sayıları toplayan kodu yazın
const girilenSayi = Number(prompt("Sayı gir :"));
sayiToplami = 0;
for (let i = 1; i <= girilenSayi; i++) {
  sayiToplami += i;
  console.log(sayiToplami, i);
}
console.log(`Girilen sayiların toplamı ${sayiToplami}`);

console.log("--What is the output of the following code?---");
let x = 0;
for (let k = 5; k > 3; k--) {
  x += k;
}
console.log("The answer is " + x);
// output The answer is 9

//todo, inclas sorusu, 0-100 arasında 10 adet rastgele sayı üreten kodu yazın
//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar  49.9-->49 yapar
//* Math.ceil() =>sürekli yukariya yuvarlar  49.1-->50 yapar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.  49.1 veya 49.9 --> 49

for (let i = 1; i <= 10; i++) {
  const rastgele = Math.floor(Math.random() * 100) + 1;
  //! const burada hata vermez re-assign değil burada yapılan işlem
  // rastgele = Math.round(Math.random()*100);
  console.log(rastgele);
}

//todo, inclas sorusu, girilen sayının asal olup olmadığını bulan kod

const sayi = Number(prompt("Pozitif Bir sayi giriniz:"));
let asal = true;

if (sayi <= 1) {
  alert("Sayi 1'den buyuk olmalidir.");
} else {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asal = false;
      break;
    }
  }

  const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
  console.log(`${sayi} ${sonuc}`);
}

//?2nci çözüm;
nsayisi = +prompt("bir sayi giriniz : ")
let sayac= 0;
for(let i =2; i<nsayisi; i++){
    if(nsayisi % i ==0){
        console.log("sayi asal değildir");
        break;
    }else{
        sayac += 1
    }

}
if(sayac + 2 == nsayisi){
    console.log("sayi asal sayidir..")
}

//todo, Use the JavaScript for statement to create a loop that execute a block based using various(start value, condition, steps) options.