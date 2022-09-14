
const input = document.getElementById("input");
console.log(input);

const buton = document.querySelector(".btn")
console.log(buton);


function countVowels() {
  return input.value
    .split("")
    .filter((x) => x == "a" || x == "e" || x == "i" || x == "o" || x == "u")
    .length;
  // return (str.match(/[aeiou]/gi) || []).length;
  // return str.replace(/[^aeiou]/gi, "").length;
  // return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

buton.addEventListener("click", function(){
  document.getElementById("result").innerText = 
  `There are ${countVowels()} vowels in  :`
  document.getElementById("sonuc").innerText = 
  `"${input.value}"`
})




