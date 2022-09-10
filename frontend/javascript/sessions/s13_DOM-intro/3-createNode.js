
console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newP = document.createElement("p");
// bir p elemneti oluştu --> on the air.

newP.id = "new-par";
newP.setAttribute("class", "new-class");
// id ve class ataması yapıldı

const text = document.createTextNode("Burası yeni p element yazısı");
// içindeki yazı oluştu ama halen havada

newP.appendChild(text);
// şimdi yazı ile etiket birleşti

console.log(newP);
 
// fakat halen gözükmüyor.
// nereye ekleyeceğimizi seçiyoruz.
const h2 = document.querySelector(".item-list h2");
// h2 den sonraya eklemek için önce h2 yi tanımladık, sonrası için after, öncesi için before
h2.after(newP);
// h2.before(newP);


//? getAttribute()
console.log(newP.getAttribute("class")); // varsa ismini verir.
console.log(newP.getAttribute("id"));
console.log(newP.getAttribute("name"));  // yoksa null döner

//? classList
console.log(newP.classList.contains("par")); //? true
newP.classList.add("new-class");
console.log(newP);
newP.classList.remove("new-class");

//? INNER HTML (Ciddi Guenlik aciklari var)
const ul = document.querySelector("ul");
ul.innerHTML += `<li id="list-id" class="list">Boostrap</li>`;

