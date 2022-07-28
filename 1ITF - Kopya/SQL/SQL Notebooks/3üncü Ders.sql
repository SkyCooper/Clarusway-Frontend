---- toplam kaç stır varsa sayar NULL değerler dahil
SELECT count (*)
FROM invoices

--- NULL değerleri saymadı
SELECT count (BillingState)
FROM invoices

----- 2011-05-16 tarihinden sonra USA veya Kanada'da düzenlenen en yüksek tutara sahip İnvoiceId nedir?
SELECT InvoiceId
FROM invoices
WHERE BillingCountry = 'USA' OR BillingCountry ='Canada'
AND InvoiceDate >'2011-05-16'
ORDER BY total DESC
LIMIT 1

----- kaç adet invoice var?
SELECT count(InvoiceId)
FROM invoices
--- (412)
SELECT count(*)
FROM invoices

SELECT count(*)
FROM invoices
WHERE BillingState IS NOT NULL

----primary key (uniq) olur sadece 1 tane vardır.

--- kaç farklı state de fatura kesilmiştir.(24)
SELECT count(DISTINCT BillingCountry)
FROM invoices
ORDER BY BillingCountry

--- database'de kaç farklı compose var? 
---(3503 composer satırı var
SELECT count(*)
FROM tracks
---2525 composer var,
SELECT count(Composer)
FROM tracks
---852 farklı composer var
SELECT count(DISTINCT composer)
FROM tracks

----en kısa ve en uzun süreli trackleri bul
SELECT min(Milliseconds) as min_dur, max(Milliseconds) as max_dur
FROM tracks

---- bulduk fakat isimleri yok bunun için
SELECT name, Milliseconds
FROM tracks
WHERE Milliseconds = 1071

----mağaza ne kadar para kazandı?(2328.6)

SELECT sum(total)
FROM invoices

----ortalama süreden uzun track isimleri nedir?
--- önce ortalam süre bulunur
SELECT avg(Milliseconds)
FROM tracks
--- sonra bu süreden büyük track isimleri çağırılır.
SELECT name
FROM tracks
WHERE Milliseconds > 393599.212103911
---- her parçanın uzunluğu ve ortalam değerde bulunsun ki kontrol edebileyim
--- 393599.212103911 bu her satırda yazar
SELECT name, Milliseconds, 393599.212103911 AS AVG_DUR
FROM tracks
WHERE Milliseconds > 393599.212103911
ORDER BY Milliseconds ASC


-- GRUP BY Clause(broken by diye sorulur)
-- broken by gender, gender kırılımında grupla demek
-- %99 Aggerate ile birlikte kullanılır.

-- ablumıd ye göre isimleri grupla
SELECT name, count(name)
FROM tracks
GROUP By AlbumId

--- herbir yazarın toplam track sayısını göster
SELECT composer, Count(name)
FROM tracks
GROUP BY Composer
----
SELECT count(*), Count(name), count(DISTINCT name), count (TrackId), count(DISTINCT TrackId)
FROM tracks

-- trackıd uniq olduğu için onu sayarız.
SELECT composer, Count(TrackId)
FROM tracks
GROUP BY Composer

---- her ülkeden kaç müşterim var?
-- çıktı conrty/number olacak

SELECT Country, count (CustomerId) as Customer_Num
FROM customers
GROUP BY Country
ORDER BY 2 DESC
--- burada order by 2 (2nci sütunu sırala demek)

-- her albümün en kısa süreli track'ini bul

SELECT AlbumId, MIN(Milliseconds)
FROM tracks
GROUP BY AlbumId









