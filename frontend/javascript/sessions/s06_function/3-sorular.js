//todo, 4 işlem yapan hesap makinesi fonksiyonunu yazın

const topla = function (n1, n2) {
  return n1 + n2;
};

const cikar = function (n1, n2) {
  if (n1 > n2) {
    return n1 - n2;
  } else {
    return n2 - n1;
  }
};

const carp = function (n1, n2) {
  return n1 * n2;
};

const bol = function (n1, n2) {
  return (n1 / n2).toFixed(2);
};

const hesapMakinesi = function (n1, n2, opretator) {
  let sonuc = 0;
  if (opretator == "+") {
    sonuc = topla(n1, n2);
    // return sonuc;
  } else if (opretator == "-") {
    sonuc = cikar(n1, n2);
    // return sonuc;
  } else if (opretator == "*") {
    sonuc = carp(n1, n2);
    // return sonuc;
  } else if (opretator == "/") {
    sonuc = bol(n1, n2);
    // return sonuc;
  } else {
    sonuc = "Hatalı operator secimi";
    // return sonuc;
  }
  console.log("İşlem Sonucu: ", sonuc);
  return sonuc;
};

// hesapMakinesi(5, 35, "+");
console.log(hesapMakinesi(4, 20, "*"));
// console.log(hesapMakinesi(5, 35, "-"));

console.log("---SwitchCase---");

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    case "p":
      sonuc = `Hatalı operator secimi yapıldı`;
      break;
    default:
      break;
  }
  console.log("SONUC:", sonuc);
  return sonuc;
};

hesapla(3, 5, "+");
console.log(hesapla(4, 3, "/"));

function sum1(n1, n2) {
  return n1 + n2;
}

let sum2 = function (n1, n2) {
  return n1 + n2;
};

sum3 = (n1, n2) => n1 + n2;

console.log(sum1(4, 5));
console.log(sum2(4, 6));
console.log(sum3(4, 7));

let a1 = sum1(3, 2);
let a2 = sum2(3, 2);
let a3 = sum3(3, 2);

console.log(a1, a2, a2);

var num = [7, 12, 143, 54, 37];
num.sort(function (a, b) {
  return b - a;
});
console.log(num);

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// fibonacci →  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//*  Girilen n. terime kadar Fibonacci sayılarının toplamini hesaplayarak yazdiran fonksiyonu Donguler ile kodlayiniz.
//todo, Örnek çıktılar..
// fibonacci(4) = 3
// fibonacci(1) = 1
// fibonacci(8) = 21

  // let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

toplama = function (n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
 fibonacci[i] = fibonacci[i-1] + fibonacci [i-2]
  }
  return fibonacci[n];
};

console.log(toplama(8));
