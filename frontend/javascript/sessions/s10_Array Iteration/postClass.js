let dizi = [10, 20, 30, 50, 100];

// for (let i in dizi){
//      console.log(i, dizi[i]);
// }

// let i = 0;
// for (let item of dizi) {
//     console.log(i++, item);
// }

// dizi.forEach((i, index) => {
//    console.log(index,i)
// } );

// let degisim = dizi.map((i) => i * 2);
// console.log(degisim, dizi);

// let origin = dizi.map((i, index, arr) => arr[index] = i*2)
// console.log(origin, dizi);

// let buyuk40 = dizi.filter((i) => i>40);
// console.log(buyuk40, dizi);

// let buyuk40Bol2 = dizi.filter((i) => i>40).map((i) => i*2);
// console.log(dizi, buyuk40, buyuk40Bol2);

let maas = [1000, 2000, 3000, 5000, 10000];
//* maaşı 4000 altında olanlara%30, üstündekiler %30 zam yap.

// let zamliMaas1 = maas.filter((i) => i>4000).map((i) => i*1.3);
// console.log(zamliMaas1);

// let zamliMaas2 = maas.filter((i) => i<4000).map((i) => i*1.4);
// console.log(zamliMaas2);

// zamliMaas1.push(maas.filter((i) => i < 4000).map((i) => i * 1.4));
// console.log(zamliMaas1);

//* maaslara %40 zam yapıp 7000 altında olanları ve üstüne olanları bul
// let alt = maas.map((i) => i * 1.4).filter((i) => i < 7000);
// let ust = maas.map((i) => i * 1.4).filter((i) => i >= 7000);
// console.log(alt, ust);


let dizi1 = [10, 30, 100, 40, 20, 50, 200, 35];
dizi1 = dizi1.sort();
console.log(dizi1);

let dizi2 = dizi1.sort((a, b) => a - b);
console.log(dizi2);

let dizi3 = dizi1.sort((a, b) => b - a);
console.log(dizi3);
