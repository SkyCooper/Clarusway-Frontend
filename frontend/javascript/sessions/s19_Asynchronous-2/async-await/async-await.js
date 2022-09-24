//*=================================================
//*              ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//! async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durudurulmasini saglar.

//* Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesine ile kodun calismasi devam eder.

//? görüntüsü syntax olarak senkrona benzer, sıralı olarak yazılır fakat asenkron çalışır. Bir kodun işlemin bitmeden kodun aşağıya geçmesini engeller.
//? await kullanmak için mutlaka async keyword gerekir.

// https://newsapi.org/v2/top-headlines?country=us&apiKey=2ae73e0e340345b39a263c6557eb8796

//! apikey .env (enviroment) dosyasına konur ve github da ignore edilir, gözükmez, böylece kullanıcı göremez saklı kalır.

let isError = false;
//* flag mantığı ile bir değişken oluşturduk, render esnasında hata varsa

const getNews = async function () {
  const API_KEY = "2ae73e0e340345b39a263c6557eb8796";
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

  //* çalışan kodlar try bloğuna, muhtemel olacak hataları catch bloğuna yazılır.
  try {
    const res = await fetch(url);
    // console.log(res);
    if (!res.ok) {
      isError = true;
      //* hata varsa flag true olsun,

      throw new Error(`Something went wrong. Code : ${res.status}`);
      //* hata verdirmek için key den bir karakter sildik
      //* hata resmini ekranda görmek için yukarıdaki kod bloğunun kapanması gerekir.
    }
    const data = await res.json();
    const { articles } = data; //!destruct yapıldı ve data. dan kurtulduk
    console.log(articles);
    renderNews(articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newsList = document.getElementById("news-list");
  if (isError) {
    newsList.innerHTML += `
      <h2>News Can not be fetched</h2>
      <img src="./img/404.png" alt="" />
    `;
    return;
  }

  news.forEach((item) => {
    const { title, description, urlToImage, url } = item; //! dest
    newsList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
        </div>
      </div>
    </div>
    `;
  });
};

// getNews();
window.addEventListener("load", getNews);
//* böyle de çağrılabilir fonksiyon
