def fiyat(isim, satis, fire, miktar):
    ürünler = {"Elma" : 10 , "Armut": 12, "Domates" : 8, "Biber" : 20}
    kar = satis - (ürünler[isim])
    kalanürün = int(miktar - (miktar * fire / 100))
    kar = kar * kalanürün
    return kar
ürünler = {}
while True:
    isim = input("Ürün ismi giriniz : ").capitalize()
    fire = int(input("Tahmini fire miktarını giriniz : "))
    satis = float(input("Ürün satış fiyatını giriniz : "))
    miktar = int(input("ürün miktarını giriniz : "))
    secim = input("ürün girmeye devam edecekmisiniz [E/H] : ").upper()
    ürünler[isim] = [fiyat(isim, satis, fire, miktar), ]
    if fiyat(isim, satis, fire, miktar) < 0:
        print("Bu üründen zararına satış yapıldı...")
    if secim == "H":
        break
toplam = 0
for i in ürünler:
    toplam += ürünler[i]
print(ürünler)
print("toplam ürünlerden elde edilen kar : ", toplam)elma