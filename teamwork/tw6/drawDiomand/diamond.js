// function diamondOfWidth(n) {
//   var i,
//     diamonds = "*";
//   for (i = 1; i < 2 * n; i++) {
//     document.write("<pre>" + diamonds + "</pre>");
//     diamonds += i < n ? "  *" : "";
//     diamonds = i >= n ? diamonds.slice(3) : diamonds;
//   }
//   document.body.style.textAlign = "center";
//   document.body.style.lineHeight = 0.5;
// }

const input = document.querySelector("#input").value;
console.log(input);

input.addEventListener("click", function(){
diamondOfWidth();
})

function diamondOfWidth() {
  var i,
  diamonds = "*";
  for (i = 1; i < 2 * input.value; i++) {
    document.write("<pre>" + diamonds + "</pre>");
    diamonds += i < input.value ? "  *" : "";
    diamonds = i >= input.value ? diamonds.slice(3) : diamonds;
  }
  document.body.style.textAlign = "center";
  document.body.style.lineHeight = 0.5;
}


// console.log(diamondOfWidth(8));
