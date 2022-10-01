let url = "https://www.clarusway.com/";
let kursAdi = "Fullstack Developer Course";

// 1- url kaç karakterlidir?

let sonuc;
sonuc = url.length;
console.log("url karakter sayısı: ", sonuc);

// 2- kursAdi kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;
console.log("kursAdi kelime sayısı: ", sonuc);

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");
console.log("url https ile mi başlıyor?: ", sonuc);

// if (sonuc) {
  //   console.log("Evet Başlıyor.");
  // } else {
    //   console.log("Hayır Başlamıyor.");
    // }
    
// 4- kursAdi içerisinde Developer kelimesi var mı?
    
sonuc = kursAdi.indexOf("developer") > -1 ? "evet var" : "hayır yok";
console.log("kursAdi içerisinde Developer kelimesi var mı?: ", sonuc);

// kursAdi = "asd";
sonuc = kursAdi.search(/^[a - z]/) > -1 ? "evet var" : "hayır yok";
console.log("kursAdi içerisinde asd var mı?: ", sonuc);

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.

// https://www.clarusway.com/fullstack-developer-course

console.log(kursAdi);
kursAdi = kursAdi.toLowerCase();
console.log(kursAdi);
kursAdi = kursAdi.replace(/ /g, "-");
console.log(kursAdi);
kursAdi = kursAdi.replaceAll(" ", "-"); // ikinci yöntem.
console.log(kursAdi);

sonuc = url + kursAdi;

console.log("url ve kursAdi birleşmiş hali: ", sonuc);

// 6- verilen stringi boşluklardan parçalayıp tersten yazdıralım.

let x = "Merhaba Ali Veli";
let y = x.split(" ");
console.log(y);  //!["Merhaba", "Ali", "Veli"];
let sonuc1 = "";

for (let i = y.length - 1; i >= 0; i--) {
  sonuc1 += y[i] + " ";
}
console.log(sonuc1);
console.log(sonuc1.length, x.length); // sonundaki bir boşlukktan dolayı karakter sayısı fazla çıkar.

// 7- Stringin tamamını tersten yazdıran fonksiyonu yazalım.

let xx = "Merhaba Ali Veli";
let reverse = (xx) => {
  let sonuc1 = "";

  for (let i = xx.length - 1; i >= 0; --i) {
    sonuc1 += xx[i];
  }
  return sonuc1;
};

console.log(reverse("Merhaba Ali Veli"));


const solution1 = (str) => str.split("").reverse().join("");
const solution2 = (s) => [...s].reverse().join("");

console.log(solution1("world"));
console.log(solution2("world"));
