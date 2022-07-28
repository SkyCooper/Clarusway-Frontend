---- count fonksiyonu
---kaç adet incoice var

SELECT *
FROM	invoices
---- satır saydırdık

SELECT count(*)
FROM	invoices

---- isim verdik çıkan sonuca
SELECT count(*) AS 'satır'
FROM	invoices

--- invoices tablosunda billing state sütünunda NULL olmayan boş olan değeri bulun
--- ödev

SELECT BillingState
FROM invoices
WHERE BillingState = 









