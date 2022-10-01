const buton = document.querySelector("button");
const baslik = document.querySelector("#baslik");
console.log(baslik);

console.log(krediTipi);
console.log(vade);
console.log(tutar);
console.log(buton);

function faiz() {
  let krediTipi = document.querySelector("#krediTipi").value;
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
}

function virgul(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const hesapla = () => {
  const vade = document.querySelector("#vade").value;
  const tutar = document.querySelector("#tutar").value;
  let tipi = document.querySelector("#krediTipi").value;
  
  let taksitTutari =
    (tutar * ((faiz() / 100) * Math.pow(1 + faiz() / 100, vade))) /
    (Math.pow(1 + faiz() / 100, vade) - 1).toFixed(2);

  document.getElementById("krediMiktari").innerText = tutar + " TL";
  document.getElementById("krediTipiTablo").innerText = tipi.toUpperCase();
  document.getElementById("vadesi").innerText = vade;
  document.getElementById("faizOrani").innerText = "% "+ faiz();
  document.getElementById("taksitTutari").innerText =
    virgul(taksitTutari.toFixed() + " TL");
  document.getElementById("genelToplam").innerText =
    virgul((taksitTutari * vade).toFixed() + " TL");
  document.getElementById("plan").classList.remove("d-none")
};

buton.addEventListener("click", function (e) {
  e.preventDefault();
  hesapla();
  buton.classList.remove("btn-warning")
  buton.classList.add("btn-primary")
  baslik.classList.remove("text-warning");
  baslik.classList.add("text-primary");
});

//*PSUDEO KOD;
// değişken tanımlama
// faiz fonksiyonu tanımlanacak
//* konut 1.68, ihtiyac 2.25, arac 1.9
// ödeme tablosu çıktı versin
