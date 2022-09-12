//!çoğul seçilenler HTML collection olarak geri döner, querry selectors de node list olarak

let baslik = document.getElementById("title");
let yeniBaslik = baslik.innerHTML;
yeniBaslik = "değişen başlık";
console.log(yeniBaslik);

// <!-- ➤getElementById() method -->
const p = document.getElementById("message");
console.log(p);
console.log(p.innerHTML);

// <!-- ➤getElementsByClassName() method -->
let menu = document.getElementById("menu");
let items = menu.getElementsByClassName("item");
console.log("menu", menu);
console.log("items", items);

let data1 = [].map.call(items, (item) => item.textContent);
console.log(data1);

console.log("------");
let elements = document.getElementsByClassName("heading-secondary");

let data2 = [].map.call(elements, (elem) => elem.textContent);

console.log(data2);

// <!-- getElementsByName() method -->
let btn = document.getElementById("btnRate");

btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    if (rate.checked) {
      alert(`You rated: ${rate.value}`);
    }
  });
});

// <!-- ➤getElementsByTagName() method -->

let btn1 = document.getElementById("btnCount1");
btn1.addEventListener("click", () => {
  let headings = document.getElementsByTagName("h4");
  console.log(`The number of H2 tags: ${headings.length}`);
});

ele