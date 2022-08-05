SELECT 1;

/* SELECT  
bu satırlar arasını
yorum satırı haline getirir.

*/
SELECT 2;

--SELECT sadece bu satırı yorum satırı yapar.
---- hangi satırı çalıştırmak istersek o satırı seçip (play , f5, ctrl+enter) yapmalıyız.

SELECT 1+1;

SELECT 2 AS value;

SELECT 2 AS col_1, 'Hello World' AS col_2, 70000 AS col_3, 2018 AS col_4;

-- Tracks tablosundan track name sütununu getiren bir sorgu (quary) yazınız.

SELECT	name
FROM	tracks;

-- Tracks tablosundan track name ve composer sütunlarını getiren bir sorgu (quary) yazınız.

SELECT	name, Composer
FROM	tracks;

-----------Tracks tablosunun tamamı için * (asteriks) koyuyorum.(3503 tane satır geldi)
SELECT	*
FROM	tracks;

--- DISTINCT KULLANIMI (duplıcate) olan satırları UNIQ YAPTI VE 853 SATIRA DÜŞTÜ.
---- DISTINCT SÜTUNLARI DEĞİL SATIRLARI SADELEŞTİRİP UNIQ YAPAR.

SELECT	DISTINCT Composer
FROM	tracks;

--------------- DISTINCT SÜTUNLARI DEĞİL SATIRLARI SADELEŞTİRİP UNIQ YAPAR. önemli ayrıntı.
SELECT	DISTINCT MediaTypeId, GenreId
FROM	tracks;
--------
SELECT	DISTINCT MediaTypeId, GenreId
FROM	tracks;


---- 12 mayıs 20122, Perşembe
---- DISTINCT AlbumId VE MediaTypeId bilgilerini getiriniz

SELECT  DISTINCT AlbumId, MediaTypeId
FROM tracks;

SELECT Title
FROM albums;

SELECT *
FROM tracks
WHERE Composer = 'Jimi Hendrix';

----- 10 dolardan yüksek tutara sahip invoiceleri getir.
SELECT *
FROM invoices
WHERE total > 10;

-----LİMİT CLAUSE

SELECT *
FROM invoices
WHERE total>10
ORDER BY total ASC
LIMIT 4;










