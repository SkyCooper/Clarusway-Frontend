


//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

const tarkan = "Gel gunduzle gece olalim, gel gökyüzünde yildiz olalım.";

const kelime = (str) => (str.split(" ")).length

console.log(kelime(tarkan)); 


// const kelime = (str) => {
//  let result = str.split(" ");
//  result = result.length;
//  return result;
// }



//! ODEV2:
//! ----------------------------------------------------------
const youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE";
// output -->  https://youtu.be/b7vfp5G4brE

let shortYoutube = youtube.replace("www.", "").replace("be.com/watch?v=", ".be/");
console.log(shortYoutube);


let metin = "https://www.youtube.com/watch?v=b7vfp5G4brE";
let kes = metin.split("=", 2);
let link = "https://youtu.be/" + kes[1];
console.log(link);