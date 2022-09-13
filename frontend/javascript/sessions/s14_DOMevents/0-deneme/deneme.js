
//! ÖRNEK-1
// Butonumuza tıklandığında web sayfasının arkaplan renginin Yeşil olmasını ve
// Butonun içindeki yazının BAS olarak değiştirilmesini sağlayan kodu yazalım.

const blueBtn = document.querySelector("button");
const yellowBtn = document.getElementById("btn2");
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

const buttons = document.querySelectorAll("button");
console.log(buttons); 

// HTML-ONCLİCK
// const colorChange = (event) => {if (event == "blueBtn") {
//   document.getElementsByTagName("body")[0].style.background = "blue";
// } else if (event == "yellowBtn") {
//   document.getElementsByTagName("body")[0].style.background = "yellow";
// } else {
//   document.getElementsByTagName("body")[0].style.background = "green";
// }};



function colorChange() {
  if (this.id == "blueBtn") {
    document.getElementsByTagName("body")[0].style.background = "blue";
  } else if (this.id == "yellowBtn") {
    document.getElementsByTagName("body")[0].style.background = "yellow";
  } else {
    document.getElementsByTagName("body")[0].style.background = "green";
  }
}

blueBtn.addEventListener("click", colorChange);
yellowBtn.addEventListener("click", colorChange);
greenBtn[0].addEventListener("click",colorChange);

console.log(document.getElementsByTagName("body"));
console.log(document.getElementsByTagName("h1"));



//!ÖRNEK-2
// butona her basıldığında sayfanın arkaplan rengini rasgele olarak değiştiren uygulamayı yazınız.
// NOT:Renkler(Mavi,Yeşil,Sarı,Siyah,Pembe v.b)dizide saklanacak Ve aktifolan renk h1 elamanı olarak ekranda yazdırılacaktır.

const change = document.querySelector(".change");
console.log(change);

function randomNumber(){

}

function randomColor(){

}
change.addEventListener("click", randomColor);
