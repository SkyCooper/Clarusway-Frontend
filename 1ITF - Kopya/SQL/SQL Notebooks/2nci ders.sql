---- 12 mayıs 20122, Perşembe
---- DISTINCT AlbumId VE MediaTypeId bilgilerini getiriniz

SELECT  DISTINCT AlbumId, MediaTypeId
FROM tracks;
-----

SELECT Title
FROM albums;
-------

SELECT *
FROM tracks
WHERE Composer = 'Jimi Hendrix';
---------

SELECT *
FROM invoices
WHERE total>10
ORDER BY total ASC
LIMIT 4;
-------

SELECT *
FROM invoices
WHERE total > 10;
------

SELECT *
FROM invoices
WHERE total>10
ORDER BY total DESC;
-----------

SELECT *
FROM invoices
WHERE total>10 AND BillingCountry = 'USA'
ORDER BY CustomerId;

-----BİLLİNG COUNTRY usa OLMAYNLAR TOTALA GÖRE SIRALA
SELECT *
FROM invoices
WHERE NOT BillingCountry = 'USA'
ORDER BY total ASC

SELECT *
FROM invoices
WHERE NOT BillingCountry <> 'USA'
ORDER BY total ASC

SELECT *
FROM invoices
WHERE NOT BillingCountry != 'USA'
ORDER BY total ASC

------ BERLİN OLUP  VE TOTAL >2
SELECT * 
FROM invoices
WHERE BillingCity = 'Berlin' and total > 2;

------- doğru çalışmaz parantez olmalı-- 22 satır geldi
SELECT * 
FROM invoices
WHERE BillingCity = 'Berlin' OR BillingCity = 'London' and total > 2;


----- opsiyonel olan parantezli olmalı---- 16 satır geldi
SELECT * 
FROM invoices
WHERE (BillingCity = 'Berlin' OR BillingCity = 'London') and total > 2;

------
SELECT *
FROM invoices
WHERE InvoiceDate BETWEEN '2009-01-01' AND '2010-12-31'
ORDER BY InvoiceDate DESC

----- IN ile yapılanlar OR gibidir.
------ NOT IN ile yapılanlar AND ile yaılabilir.

--- belçika norveç kanada ve usadan sipariş verenlerin isim ve soyisimlerini getir.
SELECT	FirstName, LastName
FROM	customers
WHERE Country IN ('Belgium', 'Norway', 'Canada', 'USA')

------ kontrol için ülkeleride ekledim çıktı doğru mu diye
SELECT	FirstName, LastName, Country
FROM	customers
WHERE Country IN ('Belgium', 'Norway', 'Canada', 'USA')

----- içinde BACH geçen parçaları bul

SELECT *
FROM tracks
WHERE Composer LIKE '%Bach'

----not like olarakta kullanılır.



























