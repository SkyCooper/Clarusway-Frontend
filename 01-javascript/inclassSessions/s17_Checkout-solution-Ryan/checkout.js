const taxRate = 0.18;
const shippingPrice = 450;
const shippingFreePrice = 5000;

window.addEventListener("load", () => {
  calculateCartPrice();

  // set items to LocalStorage
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  // set items to SessionStorage
  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

// dinamik elemanlara en yakın statik element parent olarak seçmek gerekir.
// (.products) divi kapsayıcı STATİK div.
const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  // capturing vs. bubbling
  // console.log(event.target);
  if (event.target.className == "fa-solid fa-minus") {
    // className alınırsa bütün isimler aynen yazılır.
    // console.log("minus btn click");

    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrize(event.target);
      calculateCartPrice();
    } else {
      // ismini almak için eksinin 2 üstüne çıkıp , o parentten h2'yi seçtik
      if (
        confirm(
          `${event.target.parentElement.parentElement.
            querySelector("h2").innerText} will be deleted`
        )
      ) {
        //confirm true-flase verir.
        // remove ile product div silinecek
        event.target.parentElement.parentElement.parentElement.remove();
        //  calculateProductPrize() buna gerek yok zaten silindi,
        calculateCartPrice();
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    // classList alınırsa uniq isim  yazılsa yeter.
    // console.log("plus btn clicked");
    event.target.previousElementSibling.innerText++;
    calculateProductPrize(event.target);
    calculateCartPrice();
  } else if (event.target.className == "remove-product") {
    // console.log("remove btn clicked");
    event.target.parentElement.parentElement.parentElement.remove();
    //  calculateProductPrize() buna gerek yok zaten silindi,
    calculateCartPrice();
  } else {
    console.log("other elements click");
    //  + / -  / remove hariç başka bir yere tıklandı demek,
  }
});

//clickedBtn sadece parametre adı, yukarıdan buraya event.target yolladık ( + / -  butonları)
const calculateProductPrize = (clickedBtn) => {
  // console.log(clickedBtn); // event.target yani + veya - buton
  const productInfoDiv = clickedBtn.parentElement.parentElement;
  // console.log(productInfoDiv); // +/- nin 2 üst parenti
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  // alert(price) ürün fiyatını eriştik
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  // alert(quantity) ürün miktarına eriştik
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  // ürün toplam fiyatına eriştik.
  productTotalDiv.innerText = (price * quantity).toFixed(2);
  // artık  ( + / - )  basınca fiyatı otomatik çarpıyor, aslında string değer ama otomatik number çevriliyor, concat olmadığı sürece
};

// parametre yollamaya gerek yok
const calculateCartPrice = () => {
  //nodelist
  const productsTotalPricesDivs = document.querySelectorAll(
    ".product-line-price"
  );
  // const productsTotalPricesDivs = [...document.getElementsByClassName(
  //   "product-line-price")]  ... spread kullanamk gerekirdi

  let subtotal = 0;
  productsTotalPricesDivs.forEach((div) => {
    subtotal += parseFloat(div.innerText); // stringler number oldu.
  });
  console.log(subtotal);

  const taxPrice = subtotal * localStorage.getItem("taxRate");

  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );

  console.log(shippingPrice);

  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);

  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
