//! ÖRNEK-1
// Butonumuza tıklandığında web sayfasının arkaplan renginin buton iel aynı renk olmasını sağlayan event yazın

const blueBtn = document.querySelector("button");
const yellowBtn = document.getElementById("yellowBtn");
const greenBtn = document.getElementsByClassName("btn-success");
const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementsByTagName("h1")[0];

blueBtn.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].style.background = "blue";
  document.getElementsByTagName("h1")[0].style.color = "white";
});

yellowBtn.addEventListener("click", function () {
  body.style.background = "yellow";
  h1.style.color = "black";
});

greenBtn[0].addEventListener("click", function () {
  body.style.background = "green";
});

//! HTML-ONCLİCK -ONMOUSEOVER ekleyerek yapma
// const colorChange = (event) => {if (event == "blueBtn") {
//   body.style.background = "blue";
// } else if (event == "yellowBtn") {
//   body.style.background = "yellow";
// } else {
//   body.style.background = "green";
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



//! ilave çözüm - tamamlanmadı, çalışmıyor.
// function colorChange() {
//   document.getElementsByTagName("body")[0].style.background =
//     this.getAttribute("data");
// }

// const buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", colorChange);
// }



//!ÖRNEK-2
// butona her basıldığında sayfanın arkaplan rengini rasgele olarak değiştiren uygulamayı yazınız.
// NOT:Renkler(Mavi,Yeşil,Sarı,Siyah,Pembe v.b)dizide saklanacak Ve aktifolan renk h2 elamanı olarak ekranda yazdırılacaktır.

const change = document.querySelector(".change");
const h2 = document.getElementById("h2");

//! sabit bir diziden seçerek yapma
// change.addEventListener("click", function () {
//   const colors = ["blue", "red", "yellow", "black", "pink", "purple", "aqua", "fuchia"];
//   const randomNumber = Math.floor(Math.random() * colors.length);
//   console.log(randomNumber);
//   document.getElementsByTagName("body")[0].style.background =
//     colors[randomNumber];
//     h2.innerText = `Yeni değişen renk ${colors[randomNumber]}`
//     if(colors[randomNumber] == "black"){
//       h2.style.color = "white"
//     }
// });

//!rastgele üretilen sayı ile random renk yapma
// const codesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const randomNumber = () =>  Math.floor(Math.random() * codesArray.length);
// console.log(randomNumber());

// const randomColor = () => {
//   let hexCode = "#";
//   for (let i = 0; i < 6; i++) {
//     hexCode += codesArray[randomNumber()];
//   }
//   return hexCode;
// };

// change.addEventListener("click", function(){
//   document.getElementsByTagName("body")[0].style.background = randomColor()
//   h2.innerText = `HEX kodu ${randomColor()}`;
// })

//! örnek-3
//  AÇ butonuna basıldığında lamba_on adındaki resmi,KAPA butonuna basıldığında ise lamba_off resmin gösteren uygulamayı yazalım

const lambaOn = document.querySelector(".btnOn");
const lambaOff = document.querySelector(".btnOff");
console.log(lambaOff);

lambaOn.addEventListener("click", function () {
  document.querySelector(".on").classList.add("d-none");
  document.querySelector(".off").classList.remove("d-none");
});

lambaOff.addEventListener("click", function () {
  document.querySelector(".on").classList.remove("d-none");
  document.querySelector(".off").classList.add("d-none");
});

console.log(document.querySelector(".on").classList);
