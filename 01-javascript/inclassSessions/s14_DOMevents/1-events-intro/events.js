//* ======================================================
//*                        EVENTS
//* ======================================================

//! 2'nci yöntem
const header = document.querySelector(".header2");
const yazıMavi = () => (header.style.color = "blue");
const yazıSiyah = () => (header.style.color = "black");

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//? EVENTS yazısını seçip ona event tanımlayalım,
const h1 = document.querySelector("header h1");
console.log(h1); // doğru seçim yaptım mı? bakmak için

//! 3'üncü yöntem
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
  // üzendin çıkılınca tekrar düzeltmek veya başka bir özellik vermek gerekir.
};
h1.onmouseout = () => {
  h1.style.color = "black";
  // h1.style.color = "blue";
  h1.style.fontWeight = "900";
};

//! 4'üncü yöntem addEventListener ile yapımı;
h1.addEventListener("click", () => {
  alert("H1 clicked");
});
// h1 block element olduğundan kapladığı heryerde click ve diğer evenler çalışır.

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
//? add butonuna tıklandığında içi boş ise uyarı versin,
//* önce buton seçilir.

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  // if(!input.value) { // input.value === null da yazılabilirdi.
  //   alert("Please enter an item");
  // }else{
  //     alert(`${input.value} entered`)
  // }

  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);
  // ternary yazılması

  input.value = ""; // input içinde değer kalmasın, silinsin diye
});
// sadece id aldığında # gerek yok, addEventListener olduğundan on- gerek yok

//* EXAMPLE-3
//* -------------------------------------------------
//? liste elemanları üzerine gelince büyüsün sonra küçülsün.,

const list = document.querySelectorAll(".list");
console.log(list); // bütün li ler seçildi mi? nodelist olarak

list.forEach((li) => {
    // li.style.transition = "font-size 1s"  //burada css gibi yazıyoruz.
    li.style.transition = "all 0.8s"  //burada css gibi yazıyoruz.
    li.style.lineHeight = "2rem"

  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    // li.style.transform = "translateX(-10px)";

  };

});

//! bunun kutu gibi olanını yap ders için..


//* EXAMPLE-4
//* -------------------------------------------------
//? sayfa refresh yapıldığında input box active olsun / focus olsun,

window.onload = function () {
    document.querySelector("#input").focus();
};


//* EXAMPLE-5
//* -------------------------------------------------
//? sayfa refresh yapıldığında input box active olsun / focus olsun,