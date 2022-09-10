console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header");
// id si header olan element seçildi ve h1 değişkenine atandı. isim önemli değil
console.log(h1)
h1.style.color = "white";
h1.style.backgroundColor = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const mybutton = document.getElementById("btn");

mybutton.style.background = "black";
mybutton.style.color = "white";
mybutton.style.width = "7rem";
mybutton.style.border = "none";
mybutton.style.borderRadius = "10px";
mybutton.style.padding = "1rem";
mybutton.style.fontSize = "1.2rem";

myInput.style.padding = "1rem";
myInput.style.borderRadius = "10px";


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*EXAMPLE-3
//*-------------------------------------------
const list = document.getElementsByTagName("li")
console.log(list); // HTML collection olarak döner
list[2].style.color = "red";
// HTML Collection'ın 2nci indisindeki eleman
list.item(3).style.color = "green";
// item özelliği ile indise ulaşılabilir.
const elementThree = list.item(3);
//değişkene atama yaptık.
elementThree.style.color = "blue"
elementThree.textContent = "React / Vue / Angular"
// değişkene atama yapılarak içerik değişti, 3 farklı yoldan yapılabilir.
elementThree.innerHTML = "React / Angular"
elementThree.innerText = "Angular"

console.log(list[1].textContent);
console.log(list[1].innerText);
console.log(list[1].innerHTML);


list[4].innerHTML = `<a href="https://www.google.com">Google Web Page</a>`;
// html kodlarını çalıştırır.
// güvenlik problemi var.


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------
const myList  = document.getElementsByClassName("list");
console.log(myList);
console.log(myList[0].innerText); // ilk indis HTML

// myList.forEach((element)=> console.log(elenment);)
//! dizi metodları doğrudan kullanılamaz.


//? Array.from()
// önce başka bir metod ile klasik diziye çevirmek gerekir.
const myListArray = Array.from(myList);
myListArray.forEach((item)=> console.log(item.innerText));
// tek tek yazdırır.
    

//? (...spread ile kullanılabilir.)
[...myList].forEach((item) => console.log(item.innerText));
// tek tek yazdırır.
[...myList].forEach((item) => (item.style.color = "pink"));
// link hariç hepsinin rengini değiştirir.


//* ========================================
//*              QUERYSELECTOR() -- ilk gördüğünü seçer
//* ========================================

//! 1- queryselector() etiket secebilir.
const myLi = document.querySelector("li");
console.log(myLi.innerText);
myLi.style.color = "yellowgreen";

//! 2- queryselector() class secebilir.
const itemList = document.querySelector(".item-list");
itemList.style.background = "grey";


//1 3- queryselector() id secebilir.
const input = document.querySelector("#input");
console.log(input.value);

document.querySelector("#btn").style.cursor = "pointer";
// hover verilemiyor onun için event yapmak lazım.

//? 4- queryselector() ile CSS deki gibi secim yapilabilir.
// .item-list içindeki h2 nasıl seçilir.

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";
itemH2.style.backgroundColor = "yellow";

//input'lardan type button olanı seç,
const myBtn = document.querySelector("input[type='button']");
console.log(myBtn);
// <input id="btn" type="button" value="ADD" style="background: black; color: white; width: 7rem; border: none; border-radius: 10px; padding: 1rem; font-size: 1.2rem; cursor: pointer;">
// burada tırnak tek/çift önemli;



//* ========================================
//*              QUERYSELECTORALL() -- hepsini seçer - nodelist getirir.
//* ========================================

const lists = document.querySelectorAll("ul li");
console.log(lists);  //? nodelist gelir.

//todo, HTML collection de nodelist de tam olarak dizi değil, dizimsi?
//todo, dizilerin bazı özellikleri var, hepsi yok. Prototype içindekiler kullanılır.

lists.forEach((li) => console.log(li.innerText));
//! nodelist de foreach çalışır. HTML collectiondan daha çok metod kullanılır.

//? Array.from() ve (..spread) kullanılabilir.

// css gibi yazarak listeden bir eleman seçme;

// All ile seçim yapınca tek elemanlı nodelist gelir, onun ilk indisini almak lazım
console.log(document.querySelectorAll("section ul li:nth-child(3)")[0].innerText);

// düz seçim yapınca tek eleman geldiğnden direk yazdırılabilir.
console.log(document.querySelector("section ul li:nth-child(3)").innerText);