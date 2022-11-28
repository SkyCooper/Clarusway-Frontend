"use strict";
const button = document.getElementById("submit");
const a = document.getElementById("input1");
const b = document.getElementById("input2");
function add(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log(add(+a.value, +b.value));
});
