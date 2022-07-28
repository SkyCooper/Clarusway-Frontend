const firstName = 'Cooper';
const lastName = "Sky";
const age = 41;
let hobbies = "sinema,spor,kitap,yazılım";
let val;

console.log("-- string concat --");

val = firstName + lastName; // boşluksuz birleştirir.
val = firstName + " " + lastName; // araya boşluk koyup birleştirir.
val = 'Cooper';
val += ' Sky'; // Cooper Sky çıktısı verir.
val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.


val = "Benim adım " + firstName + " " + lastName + " " + age + " yaşındayım.";

val = "Benim adım " + firstName + " " + lastName + " " + age + ' yaşındayım. İstanbul\'da yaşıyorum'; // ters slash kullanma,

val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.


console.log("-- string length --");
val = val.length; // 10 çıktısı verir (Cooper Sky) boşluk dahil, tipi number


console.log("-- upper case / lower case--");
val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.
val = val.toUpperCase(); // COOPER SKY
val = val.toLowerCase(); // cooper sky

val = val.indexOf('p'); // çıktı 3, numaralı indexte 
// val = val.indexOf('sky'); // çıktı 7, numaralı indexten başlar sky'ın s harfi 
// val = val.indexOf('a'); // çıktı -1, yani bu ifade içinde yok


val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.
val = val[0]; // C --> indexleme yapılması

console.log("-- substring--");
val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.
val = val.substring(1,4); //oop 1den başla/3e kadar git
// val = val.substring(4); //er Sky 4den başla sona kadar git



console.log("-- slicelama--");
val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.
val = val.slice(5);  // 5ten başla sona kadar al.

console.log("-- replace --");
val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.
// val = val.replace('o', 'a'); //Caoper Sky, sadece bir tanesini değiştirdi
val = val.replace('Cooper', 'Forlan'); // Forlan Sky


console.log("-- trim --");
val = firstName.concat(' ', lastName); // Cooper Sky çıktısı verir.
val = '    ' + val + '    '; // başında ve sonunda boşluk olur.
val = val.trim();  // baştaki ve sondaki boşlukları kaldırır

console.log("-- split --");
val = hobbies.split(','); // ['sinema', 'spor', 'kitap', 'yazılım'] , tipi object olur.



console.log(val);
console.log(typeof val);


console.log("-- Template Literal --");

const fullName = "Cooper Sky";
const city = "Newyork City";
const yearOfBirth = 2003;

let str;

str = 'My name is '+fullName+
      ' I\'m ' + (2022-yearOfBirth)+' years old.'+
      ' and I live in '+city;  // bu şekilde yazım hata vermeden çalışır.
// My name is Cooper Sky I'm 19 years old. and I live in Newyork City

str = `My name is ${fullName} I'm ${2022-yearOfBirth} years old and I live in ${city}` // `` bunun adı back tick
str = `I'm ${(2022-yearOfBirth>=18) ? 'over 18' : 'under 18'} years old` // burada bir koşul karşılaştırm yapabilirim, sonuç 18den büyükse(true) sol taraf, küçükse(false) sağ taraf çalışır. 

console.log(str);


console.log('-- string alıştırmaları --');

var sentence = " Modern java-script dersleri serimizin bu bölümünde javascript string veri tipi uygulamalarını yapıyoruz.  "

var url = "http://coopersky.com/github JAVASCRIPT Derslerı ıleri şevıye";

console.log('1- cümle kaç karakterdir.');
console.log(sentence.length);

console.log('2- cümle kaç kelimeden oluşuyor.');
console.log(sentence.trim().split(" ").length);

console.log('3- Bütün cümleyi küçük/büyük harf çevir.');
console.log(sentence.toLocaleLowerCase());
console.log(sentence.toLocaleUpperCase());

console.log('4- Cümlenin başındaki ve sonundaki boşlukları silin.');
console.log(sentence.trim());

console.log('5- Cümleden - karakterini silin.');
console.log(sentence.replace('-', ''));

console.log('6- Url içinden http:// kısmını çıkarın');
var ht ='http://';
console.log(url.substring(7)); // index no ile
console.log(url.slice(7)); 
console.log(url.substring(ht.length)); // length ile

console.log('7- Url hangi protokol kullanıyor(http , https)');
console.log(url.startsWith('http')); // true 

console.log('8- Url içinde .com ifadesi var mı?');
console.log(url.indexOf('.com')); // çıktısı 16, yani bu indexte var, -1 olsa yok demek 
console.log(url.includes('.com')); // çıktısı varsa true, yoksa false olur.


console.log('9- Url string ifadesini geçerli bir url olarak düzenleyin'); // yani hatalarını düzelt
// http://coopersky.com/github JAVASCRIPT Derslerı ıleri sevıye
console.log(url.toLocaleLowerCase()
                .replace(/ /g, '-')     // replace(' ', '-') sadece ilk boşluğu değiştirir.
                .replace(/ı/g, 'i')     // bütün ı karakterleri i ile değişti.
                .replace('ş', 's')      // tek olduğunda böyle kullanılır.
); // http://coopersky.com/github-javascript-dersleri-ileri-seviye  oldu enson hali

