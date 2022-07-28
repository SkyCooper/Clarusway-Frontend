// for döngüsü --> TEKRAR SAYISI bellidir, ...kere çalış demektir.

// ismini ekrana 5 kere yazdır.

for (let i = 0; i < 5; i++)
console.log("cooper");  // çıktısı 5 cooper olur.

// önce ilk atama ile i değişkenine 0 değeri atandı, sonra şart'a baktı i 5'den küçük mü? true ise ismi yazdırdı ve sonra i'yi arttırdı

// tek satırlık ifadeler için süslü paranteze gerek yok ama fazla satır için var

for (let i = 0; i < 5; i++) {   // çıktısı 5 kere görünür.
    console.log("my name is cooper"); 
    console.log("sky");
}

for (i = 0, j = 0; (i +j) < 20; i += 5, j += 2) {
    console.log("i+j döngüsü çalıştı"); 
    console.log("i değeri : " + i + " -- j değeri : " + j);
}

// sonsuz döngü oluşturan kod örneği, yorumdan çıkarma
/*
for (; ;) {
    
}
*/

//  for döngü sonuna ; koyma, yoksa döngü çalışmadan orada biter
for (let i = 0; i < 5; i++);  
console.log("cooper");  // çıktısı cooper olur.

for (let i = 0; i < 5; i++)  
console.log("döngü " + i);  // 0 dan 4'e kadar 5 kere çalışır.


// WHILE DÖNGÜSÜ --> TEKRAR SAYISI belli değil , doğru olduğu sürece çalış demektir.

console.log("---------while--------")
let sayi = 5;  
while (sayi < 15) {         // sayi 15'ten küçük olduğu sürece
    console.log("Merhaba while");
    sayi++;
}                   // çıktısı 5 Merhaba olur.


console.log("---------for--------")
for (let i = 5; i < 15; i++)  
console.log("Merhaba for");  // for ile aynısını yapma


console.log("--------- do while--------")
// önce değişkene bak, sonra kodu mutlaka 1 kere çalıştırıp yazdırmayı yap, sonra değişkeni arttır, sonra şarta bak, sağlıyorsa çalışmaya devam et.
let yas = 5;
do {
    console.log("Merhaba do while");
    yas++;
} while (yas < 15);


// while ile do/while farkı, while şart doğru ise çalışmaya başlar, do/while her halükarda en 1 kere mutlaka çalışır ve sonra şart kontrolü yapar ve while sonuna ; konur.


// break , continue, return kullanımı
























