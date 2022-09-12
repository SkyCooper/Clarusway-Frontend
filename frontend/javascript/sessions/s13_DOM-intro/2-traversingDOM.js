console.log("**** TRAVERSING DOM ****");

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------

// bulunduğumuz yerden bit üste gitmek için

const list = document.querySelector(".list");
const ul = list.parentNode;
ul.style.border = "2px solid red";

console.log(list.parentNode.parentNode.parentNode);
// list --> ul --> section --> main
console.log(list.parentNode.parentNode.parentNode.parentNode.parentNode);

console.log(list.parentElement.parentElement.parentElement);
// aynısı farklı kullanım

//! closest(): 
console.log(list.closest("section"));
// parentinde section varsa yazdır yoksa bulmaz
const itemListSec = list.closest("section");
// seçip değişkene atama yapıldı
itemListSec.style.background = "grey";



//* 2- Aşağı Yonde traverse
//*----------------------------------------------

const addItem = document.querySelector(".add-item");
console.log(addItem.children);
// çıktısı HTML collection olur.
// [h2, input#input, input#btn, input: input#input, btn: input#btn]

const h2 = addItem.children[0];
// HTML collection içinden ilk indis seçildi
h2.style.color = "blue"; //ADD NEW ITEM yazısı mavi oldu.

console.log(addItem.parentNode.parentNode.children[0]);
// yani additem ın 2 üst paranti --> body --> onunda çocuklarının ilk indisi --> header

console.log(ul.firstElementChild.innerText); // HTML
// ul nin eleman olan ilk childı
console.log(ul.lastElementChild.innerText); // Django
// ul nin eleman olan son childı


//* 3- Yatay Yonde traverse
//*----------------------------------------------

const myList = ul.children;
console.log(myList); // [li.list, li.list, li.list, li.list, li.list]
const javascript = myList[2];

// siblinglerinden css ulaşmak istiyorum
const css = javascript.previousElementSibling;
console.log(css.innerText); // CSS

// siblinglerinden react ulaşmak / değiştirmek istiyorum
const react = javascript.nextElementSibling;
react.style.color = "yellow";

// siblinglerinden HTML seçmek istiyorum
console.log(javascript.previousElementSibling.previousElementSibling.innerText); // HTML
console.log(ul.firstElementChild.innerText); // HTML

