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
    return sonuc;
  } else if (opretator == "-") {
    sonuc = cikar(n1, n2);
    return sonuc;
  } else if (opretator == "*") {
    sonuc = carp(n1, n2);
    return sonuc;
  } else if (opretator == "/") {
    sonuc = bol(n1, n2);
    return sonuc;
  } else {
    sonuc = "Hatalı operator secimi";
    return sonuc;
  }
  console.log("İşlem Sonucu: ", sonuc);
  return sonuc;
};

hesapMakinesi(5, 35, "+");
console.log(hesapMakinesi(4, 20, "p"));
console.log(hesapMakinesi(5, 35, "+"));

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

hesapla(3, 5, "p");
console.log(hesapla(4, 3, "/"));
