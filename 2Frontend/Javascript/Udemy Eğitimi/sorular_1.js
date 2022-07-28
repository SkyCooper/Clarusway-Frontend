/*
Bir hafta boyunca günlük %7 sabit kâr getiren kripto para borsasına bir coin yatırmış olsaydınız, 7. günün sonunda 1000 dolarınız ne kadara ulaşırdı? Sonunda kaç para kar etmiş olurdunuz?  */

let para = 1000;
let karOrani = 1.07;
let karliPara = para * karOrani ** 7;
let kazanc = karliPara - para;

console.log("Ana para : " + para);
console.log("Karlı para : " + karliPara);
console.log("Kazanç : " + kazanc);
console.log(`${para} lira günlük yüzde ${karOrani} ile 7 gün sonunda ${karliPara.toFixed(2)} lira olur ve toplam ${kazanc} lira kar elde eder. `);


/* kullanıcıdan boy ve kilo bilgilelerini isteyerek vücut kitle indexi hesaplayan küçük bir program yazınız ,
Vücut kitle indeksi, vücut ağırlığının boy uzunluğunun karesine bölünmesiyle (kg/m²) hesaplanır.
VKİ = kg / boy**2
18, 5 kg/m² ‘nin altındaki sonuçlar: İdeal kilonun altında
18, 5 kg/m² ile 24, 9 kg/m² arasındaki sonuçlar: İdeal kiloda
25 kg/m² ile 29, 9 kg/m² arasındaki sonuçlar: İdeal kilonun üstünde
30 kg/m² ile 39, 9 kg/m² arasındaki sonuçlar: İdeal kilonun çok üstünde (obez)
40 kg/m² üzerindeki sonuçlar: İdeal kilonun çok üstünde (morbid obez)
*/


let boy = prompt("Boyunuzu girin: ", "1.72");
let kilo = prompt("Kilonuzu girin: ", "72");
let vki = (kilo / boy**2).toFixed(1);

if(vki < 18.5){
    console.log("İdeal kilonun altında");
} else if (vki >= 18.5 && vki < 24.9) {
    console.log("İdeal kiloda");
} else if ( vki > 25 && vki < 29.9) {
    console.log("İdeal kilonun üstünde");
} else if (vki > 30 && vki < 39.9) {
    console.log("İdeal kilonun çok üstünde (obez)");
} else {
    console.log("İdeal kilonun çok fazla üstünde (morbid obez)");
}

console.log(`Boyunuz ${boy} m., kilonuz ${kilo} kg., ve Vücut Kitle İndexiniz : ${vki}`);