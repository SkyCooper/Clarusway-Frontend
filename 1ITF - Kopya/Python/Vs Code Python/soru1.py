ürünler = {"Elma" : [10,10] , "Armut": [12,5], "Domates" : [8,20], "Biber" : [20, 4]}
alınanlar = {}
toplam = 0
print("""Ürün      Toptan   Alınabilir Birim ve Katları
-----------------------------------
Elma      TL 10            KG 10
Armut     TL 12            KG 5 
Domates   TL 8             KG 20
Biber     TL 20            KG 4 """)
sermaye = int(input("Sermaye miktarını giriniz : "))
while True:
  talepelma = int(input("Almak istediğiniz Elma miktarını giriniz : "))
  taleparmut = int(input("Almak istediğiniz Armut miktarını giriniz : "))
  talepdomates = int(input("Almak istediğiniz Domates miktarını giriniz : "))
  talepbiber = int(input("Almak istediğiniz Biber miktarını giriniz : "))
  if (talepelma % ürünler["Elma"][1] == 0 ) and (taleparmut % ürünler["Armut"][1] == 0 ) and (talepbiber % ürünler["Biber"][1] == 0) and (talepdomates % ürünler["Domates"][1] == 0):
      break
  else:
      print("Lütfen yukarıdaki listeye göre alabileceğiniz ürün katlarını giriniz...")
elmafiyat = talepelma * ürünler["Elma"]
armutfiyat = taleparmut * ürünler["Armut"]
biberfiyat = talepbiber * ürünler["Biber"]
domatesfiyat = talepdomates * ürünler["Domates"]
if(sermaye > biberfiyat) and talepbiber != 0:
    alınanlar.update({"Biber ": talepbiber })
    sermaye -= biberfiyat
    toplam += biberfiyat
    print("biber alındı")
if(sermaye > armutfiyat) and taleparmut !=0:
    alınanlar.update({"Armut": taleparmut}) 
    sermaye -= armutfiyat
    toplam += armutfiyat
    print("armut alındı")
if(sermaye > elmafiyat) and talepelma != 0:
    alınanlar.update({ürünler(0): talepelma})
    sermaye -= elmafiyat
    toplam += elmafiyat
if(sermaye > domatesfiyat) and talepdomates != 0:
    alınanlar.update({"Domates" : talepdomates})
    sermaye -= domatesfiyat
    toplam += domatesfiyat
print(alınanlar, "\tToplam ödediğiniz ücret : ", toplam)
print("para üstü : ", sermaye)
