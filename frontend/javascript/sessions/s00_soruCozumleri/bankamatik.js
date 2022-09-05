//* bankamatikten para çekme fonksiyonu,

const hesapA = {
  ad: "Cooper",
  hesapNo: "123456",
  bakiye: 2000,
  ekHesap: 1000,
};

const hesapB = {
  ad: "Jack",
  hesapNo: "789123",
  bakiye: 3000,
  ekHesap: 2000,
};

const hesaplar = {
  hesapA: {
    ad: "Cooper",
    hesapNo: "123456",
    bakiye: 2000,
    ekHesap: 1000,
    paraCinsi: ["dolar", "euro", "TL"],
  },
  hesapB: {
    ad: "Jack",
    hesapNo: "789123",
    bakiye: 3000,
    ekHesap: 2000,
    paraCinsi: ["dolar", "euro", "TL"],
  },
};

// console.log(hesaplar.hesapB.paraCinsi[1]);

const paraCek = (hesap, miktar) => {
  console.log(`Merhaba ${hesap.ad}`);
  if (hesap.bakiye >= miktar) {
    hesap.bakiye -= miktar;
    console.log("Paranızı çekebilirsiniz.");
  } else {
    let toplam = hesap.bakiye + hesap.ekHesap;
    if (toplam >= miktar) {
      if (confirm(`Ek hesabınızı kullanmak ister misiniz?`)) {
        console.log("Paranızı çekebilirsiniz.");
        let bakiye = hesap.bakiye;
        let ekHesap = miktar - bakiye;
        hesap.bakiye = 0;
        hesap.ekHesap = hesap.ekHesap - ekHesap;
      } else {
        console.log(
          `${hesap.hesapNo} numaralı hesabınızda ${miktar} lira bulunmamaktadır.`
        );
      }
    } else {
      console.log(`Üzgünüz, yetersiz bakiye`);
    }
  }
};

paraCek(hesapA, 500);
paraCek(hesapA, 500);
paraCek(hesapA, 1500);
paraCek(hesapA, 500);
