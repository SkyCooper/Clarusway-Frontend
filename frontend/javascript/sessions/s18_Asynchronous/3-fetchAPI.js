//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

//! süslü kullanılırsa return kullanmayı unutma

console.log("FETCH");
fetch("https://api.github.com/users")
  // status: 200 --> yani başarılı  400-->client hatası 500-->server hatası
  // ilave bir şey yazılmaz ise GET olarak çalışır, veri çeker.
  // çoğu ihtimali başarılı kabul eder, bana bir response geldiyse başarıdır gibi
  .then((response) => response.json())
  // ham haline response denir bestPractise
  // bunu json fotmatına çevirmek gerekli
  .then((data) => updateDOM(data))
  // verinin işlenmesi data ile yapılır, bestPractise, isim önemsiz.
  .catch((err) => console.log(err));
// başarısız olursa hatayı yaklamak için catch kullanılır.

//? hata durmunu simüle etmek için api isminden sondaki s harfini sildi;
// fetch("https://api.github.com/user")
//   .then((response) => {
//     console.log(response);
//     //!Error handling
//     if (!response.ok) {
//       //*paket düzfün gelmedi, false oldu ok: false,
//       throw new Error("Something went wrong!!");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));



//**API den veri çekip DOM'a yazdırmak için bir örnek çözümü yaptı */
const updateDOM = (users) => {
  console.log(users);
  const userDiv = document.querySelector(".users");
  // sabit olan kapsayıcı div seçti
  users.forEach((user) => {
    //! const {login, avatar_url} = user  ile destruct yapılsa
    //! her defasında user. yazmaya gerek olmaz.
    console.log(user); //30 elemanı tek tek obje olarak konsola basar
    userDiv.innerHTML += ` <h2> ${user.login}</h2>
      <img src="${user.avatar_url}"  width="300px" alt="">`;
  });
};
