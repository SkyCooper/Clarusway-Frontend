//! ÖRNEK-1
// Butonumuza tıklandığında web sayfasının arkaplan renginin Yeşil olmasını ve
// Butonun içindeki yazının BAS olarak değiştirilmesini sağlayan kodu yazalım.

const blueBtn = document.querySelector("button");
const yellowBtn = document.getElementById("yellowBtn");
const greenBtn = document.getElementsByClassName("btn-success");

// blueBtn.addEventListener("click", function() {
//     document.getElementsByTagName("body")[0].style.background = "blue"
//     document.getElementsByTagName("h1")[0].style.color = "white"
// })

// yellowBtn.addEventListener("click", function () {
//     document.getElementsByTagName("body")[0].style.background = "yellow";
//     document.getElementsByTagName("h1")[0].style.color = "black"
// });

// greenBtn[0].addEventListener("click", function () {
//   document.getElementsByTagName("body")[0].style.background = "green";
// });

//! HTML-ONCLİCK ekleyerek yapma
// const colorChange = (event) => {if (event == "blueBtn") {
//   document.getElementsByTagName("body")[0].style.background = "blue";
// } else if (event == "yellowBtn") {
//   document.getElementsByTagName("body")[0].style.background = "yellow";
// } else {
//   document.getElementsByTagName("body")[0].style.background = "green";
// }};

//! tek fonksiyon tanımlayıp yapma;
// function colorChange() {
//   if (this.id == "blueBtn") {
//     document.getElementsByTagName("body")[0].style.background = "blue";
//   } else if (this.id == "yellowBtn") {
//     document.getElementsByTagName("body")[0].style.background = "yellow";
//   } else {
//     document.getElementsByTagName("body")[0].style.background = "green";
//   }
// }

// blueBtn.addEventListener("click", colorChange);
// yellowBtn.addEventListener("click", colorChange);
// greenBtn[0].addEventListener("click", colorChange);

// function colorChange() {
//   document.getElementsByTagName("body")[0].style.background =
//     this.getAttribute("data");
// }

// const buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", colorChange);
// }

console.log(document.getElementsByTagName("body"));
console.log(document.getElementsByTagName("h1"));

//!ÖRNEK-2
// butona her basıldığında sayfanın arkaplan rengini rasgele olarak değiştiren uygulamayı yazınız.
// NOT:Renkler(Mavi,Yeşil,Sarı,Siyah,Pembe v.b)dizide saklanacak Ve aktifolan renk h2 elamanı olarak ekranda yazdırılacaktır.

const change = document.querySelector(".change");
const h2 = document.getElementById("h2")

//! sabit bir diziden seçerek yapma
// change.addEventListener("click", function () {
//   const colors = ["blue", "red", "yellow", "black", "pink", "purple"];
//   const randomNumber = Math.floor(Math.random() * colors.length);
//   document.getElementsByTagName("body")[0].style.background =
//     colors[randomNumber];
//     h2.innerHTML = `Yeni değişen renk ${colors[randomNumber]}`
//     if(colors[randomNumber] == "black"){
//       h2.style.color = "white"
//     }
// });

//!rastgele ürerilen sayı ile random renk yapma
// const codesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const randomNumber = () =>  Math.floor(Math.random() * codesArray.length);
// console.log(randomNumber());


// const randomColor = () => {
//   let hexCode = "#";
//   for (let x = 0; x < 6; x++) {
//     hexCode += codesArray[randomNumber()];
//   }
//   return hexCode;
// };

// change.addEventListener("click", function(){
//   document.getElementsByTagName("body")[0].style.background = randomColor()
// })

//! örnek-3
//  AÇ butonuna basıldığında lamba_on adındaki resmi,KAPA butonuna basıldığında ise lamba_off resmin gösteren uygulamayı yazalım

const lambaOn = document.querySelector(".btnOn") 
const lambaOff = document.querySelector(".btnOff") 
console.log(lambaOff);

lambaOn.addEventListener("click", function(){
  document.querySelector(".on").classList.add("d-none")
  document.querySelector(".off").classList.remove("d-none")
})

lambaOff.addEventListener("click", function(){
  document.querySelector(".on").classList.remove("d-none")
  document.querySelector(".off").classList.add("d-none")
})
