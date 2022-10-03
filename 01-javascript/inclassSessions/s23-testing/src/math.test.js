//** ES& module formatında export
// import {
//   calculateTotal,
//   celsiusToFahrenheit,
//   fahrenheitToCelsius,
//   fibonacci,
// } from "./math";

//! node module formatında export
const {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
} = require("./math.js");

//? içindeki isim açıklama için yazılıyor, aslında önemsiz
//? fakat test edilecek şeyi yazmak best practise kullanım ismini yazmak

//! test for calculateTotal
describe("calculateTotal", () => {
  //* test caselerini burada yazmaya başliyoruz.Günlük konuşma diline yakın
  //* çıktıda daha okunabilir olması için, yoksa ARMUT yazsak da olur.

  //? 1- test edilen fonksiyon silinmiş/değişmiş olmasın
  it("sholud exist", () => {
    expect(calculateTotal).toBeDefined();
  });

  //? 2- fonksiyon 100 lirayı %20 faizle 120 olarak döndürmeli
  it("should return 0.2 tax", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  //? 3- fonksiyon 200 lirayı default faizle (%18) 236 olarak döndürmeli
  it("should return default tax", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});

//! test for celsiusToFahrenheit
describe("celsiusToFahrenheit", () => {
  //? 1- test edilen fonksiyon silinmiş/değişmiş olmasın
  it("sholud exist", () => {
    expect(celsiusToFahrenheit).toBeDefined();
  });

  //? 2- 10C için 50F olmalı
  it("should return a number", () => {
    expect(celsiusToFahrenheit(10)).toBe(50);
  });

  //? 3- 20C için 68F olmalı
  it("should convert 20 C to 68 F", () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});

//! test for fahrenheitToCelsius
describe("fahrenheitToCelsius", () => {
  //? 1- test edilen fonksiyon silinmiş/değişmiş olmasın
  it("sholud exist", () => {
    expect(fahrenheitToCelsius).toBeDefined();
  });

  //? 2- 32F için 0C olmalı
  it("should convert 32F to 0C", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
});

//! test for fibonacci
describe("fibonacci", () => {
  //? 1- test edilen fonksiyon silinmiş/değişmiş olmasın
  it("sholud exist", () => {
    expect(fibonacci).toBeDefined();
  });

  //? 2- fib değer girilmez ise 1 olarak dönmeli
  it("should return a number", () => {
    expect(fibonacci()).toBe(1);
  });

  //? 3- fib 1, 1 olarak return etmeli
  it("should return 1 to 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  //? 4- fib 10, 55 olarak return etmeli
  it("should return 55 for 10th index", () => {
    expect(fibonacci(10)).toBe(55);
  });

  //? 5- fib 0 için hata fırlatmalı
  it("should throw error if number is less than 1", () => {
    expect(() => fibonacci(0)).toThrow(
      new Error("Must enter a number greater than 0")
    );
  });
});


//? NOT: 
//? coverage dosyası üzeinde "reveal in File Explorer" dedikten sonra;
//? açılan pencereden /coverage/lcov-report içinden index.html bulup açıyoruz.
//? burası bize terminalden daha okunabilir, daha detaylı bilgi veriyor.