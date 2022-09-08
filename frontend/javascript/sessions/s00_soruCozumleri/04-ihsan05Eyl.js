//! 1) - verilen sayının basamak değerlerini birbiri ile çarpacağız. kaç defada tek haneli basamağa ulaşıyor?
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

let tekhane = (sayi) => {
  sayi = "" + sayi;
  sayi = sayi.split("");
  let toplam = 1;
  let counter = 0;
  while (sayi.length > 1) {
    for (let i = 0; i < sayi.length; i++) {
      toplam *= sayi[i];
    }
    sayi = ("" + toplam).split("");
    toplam = 1;
    counter++;
  }
  return counter;
};
console.log(tekhane(999));


//* yöntem2
function persistence(num) {
  var times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
}

console.log(persistence(999));

//! 2) - verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.
// input                   output
// 15     =>   (1111)  =>    4
// 14     =>   (1110)  =>    3

let binary = (sayi) => {
  sayi = sayi.toString(2);
  console.log(sayi);
  sayi = ("" + sayi).split("0");
  let counter = 0;
  for (let item of sayi) {
    console.log("item : ", item);
    if (item == "1") {
      counter++;
    }
  }
  return counter;
};
console.log(binary(20));


//* yöntem 2
countBits = (n) => n.toString(2).split("0").join("").length;


//! 3) verilen bir dizideki eksik olan sayıyı bulma,
//todo, sayı üretmek için fonksiyon tanımlama-1
function range(start, end) {
    return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}
var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
console.log(result);


//todo, sayı üretmek için fonksiyon tanımlama-2
console.log(Array.from(Array(10).keys()));


//* yöntem 1
let bul = (array) => {
  //   1,2,3,4,6,7,8,9,10  1,2,3,4,5,6,7,8,9,10
  array = array.sort((a, b) => a - b);
  console.log(array);
  for (let i = 1; i < 11; i++) {
    if (i != array[i - 1]) {
      return i;
    }
  }
};
console.log(Array.from(Array(12).keys()));
console.log(bul([1, 2, 3, 10, 6, 7, 8, 9, 4]));



//* yöntem 2
function findMissing(normal, missing) {
  sumNormal = (normal.length * (normal.length + 1)) / 2;
  const sumWithInitial = missing.reduce((a, b) => a + b);
  return sumNormal - sumWithInitial;
}
console.log(findMissing([1, 2, 3, 4, 5, 6], [1, 2, 3, 5, 6]));


//* yöntem 3
let bul2 = (array) => {
  array = array.sort((a, b) => a - b);
  console.log(array);
  if (array[0] != 1) {
    return 1;
  } else {
    for (let i in array) {
      if (array[Number(i) + 1] - array[Number(i)] != 1) {
        return Number(array[i] + 1);
      }
    }
  }
};
console.log(bul2([10, 2, 3, 5, 6, 8, 7, 9, 4]));

//! 4) verilen dizide hangi elemanın kaç defa geçtiğini çıktı veren fonksiyon?
let count = (dizi) => {
    let ilk = [];
    let son = [];
    dizi.forEach((element) => {
    let count = 0;
    let eleman = "";
    for (let item of dizi) {
        if (element === item) {
            count++;
            eleman = item;
        }
    }
    ilk = [eleman, count];
    if (!son.length) {
        son = son.concat(ilk);
    } else {
      let counter = 0;
      for (let i = 0; i < son.length; i += 2) {
          if (son[i] !== eleman) {
              counter++;
            }
        }
        if (counter * 2 == son.length) {
            son = son.concat(ilk);
        }
    }
  });
  return son;
};
let dizi1 = ["ali", "veli", "ali", "veli", "veli", "2", 2, 2, 2];
console.log(count(dizi1));





//! 5) fonsiyona iki adet parametre gelecek. ikinci parametre ilk gelen parametrinin rakamlarının üstü olacak ve her rakamda artacak.
// bu rakamların toplamı ilk gelen sayının tam katı olursa kat sayısını tam katı olmazsa -1 i return edecek.

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1  => return 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2  => return 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 => return 51