const krediTipi = document.querySelector("#krediTipi").value;
const vade = document.querySelector("#vade").value;
const tutar = document.querySelector("#tutar").value;
const buton = document.querySelector("button");

console.log(krediTipi);
console.log(vade);
console.log(tutar);
console.log(buton);

const faiz = () => {
  let faizOrani;
  if (krediTipi == "konut") {
    faizOrani = 1.68;
  } else if (krediTipi == "ihtiyac") {
    faizOrani = 2.25;
  } else if (krediTipi == "arac") {
    faizOrani = 1.9;
  } else {
    alert(`Kredi Tipi Seçimi Yapınız.`);
  }
  return faizOrani;
};

buton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(faiz());
});

const hesapla = () => {
  let taksitTutari;
};

//*PSUDEO KOD;
// değişken tanımlama
// faiz fonksiyonu tanımlanacak
//* konut 1.68, ihtiyac 2.25, arac 1.9
// ödeme tablosu çıktı versin
