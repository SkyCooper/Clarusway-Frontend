--- usa'den elde edilen kazancı şehirlere göre raporlayınız

SELECT BillingCity, SUM(total) AS TOTAL_INCOME
FROM invoices
WHERE BillingCountry = 'USA'
GROUP By BillingCity
order by 2
---- order by 2, select teki 2nci sütüna göre sırala demek
---- between kullanırken  küçük tarih AND büyük tarih yazılır
----tarihlerin iki tarafıda DAHİLDİR.

----19 Mayıs 2022, Perşembe
--INNER JOIN

--tracks tablosundaki her bir track'ın genre bilgisini getiriniz
SELECT *  ---herşeyi seçersek GenreId çıktıda 2 kere görünür.
FROM tracks
INNER JOIN genres
ON tracks.GenreId = genres.GenreId

-----aynı soru
SELECT tracks.*, genres.Name  --track tablosunun hepsini, genre tablosundan sadece name sütünu al
FROM tracks                   -- GenreId tekrar etmemiş oldu.
INNER JOIN genres
ON tracks.GenreId = genres.GenreId


---- aynı soru farklı sorgu
SELECT A.name AS Track_Name, B.Name AS Genre_Name --track tablosundan name ve genre tablosundan sadece name sütünu al
FROM tracks AS A ---- tracks ismini A olarak atadım
INNER JOIN genres AS B -- genre B olrak değişti
ON A.GenreId = B.GenreId --- tracks.GenreId = genres.GenreId olarak yazılmıştı, SADELEŞTİRDİK

--- hangi türde kaçar adet track var?

SELECT B.name genre_name, COUNT (A.TrackId)
FROM tracks AS A
INNER JOIN genres AS B
on A.GenreId = B.GenreId
GROUP BY B.name

----her bir çalışanın '2010-09-14' tarihinden sonraki satış bilgilerini getiriniz.
SELECT invoices.*, employees.*
FROM employees 
	INNER JOIN customers ON employees.EmployeeId = customers.SupportRepId
	INNER JOIN invoices ON customers.CustomerId = invoices.CustomerId
WHERE invoices.InvoiceDate > '2010-09-14'

--- her invoicedan custumur name'leri bul
--invoiceid ve customer name çıktısını al

SELECT invoices.InvoiceId, customers.FirstName, customers.LastName
FROM invoices
	JOIN customers on invoices.CustomerId = customers.CustomerId --sadece JOIN yazarsak bu INNER JOIN dir.

---- LEFT JOIN----


--- herbir Artist'in Albüm Bilgilerini yazdırınız?
---inner joın
SELECT B.name AS Artist_Name, A.Title,A.ArtistId
FROM albums AS A
	INNER JOIN artists AS B ON A.ArtistId = B.ArtistId
ORDER BY 1 --Artist_Name sütünuna göre, 1inci sütuna göre sıral


--- LEFT JOIN 
-- acaba DB'DEKİ tüm artistlerin Albüm bilgisi mevcut mu?

SELECT artists.name AS Artist_Name, albums.Title, albums.ArtistId
FROM artists --left joınde ana tablo buraya yazılır.
	LEFT JOIN albums 
	ON artists.ArtistId = albums.ArtistId
ORDER BY 2
	
----- aynı soru ana tablo yerleri değişiyor	çıktı da değişir, kontrol et.
SELECT artists.name AS Artist_Name, albums.Title, albums.ArtistId
FROM albums --left joınde ana tablo buraya yazılır.
	LEFT JOIN artists 
	ON artists.ArtistId = albums.ArtistId
ORDER BY 1	


----- her bir artistin track'lerini getiriniz?

SELECT artists.Name AS Artist_Name, albums.Title As Album_Name
FROM artists
INNER JOIN albums on artists.ArtistId = albums.ArtistId
INNER JOIN tracks on tracks.AlbumId = albums.ArtistId

----owen hoca çözümü düzeltilecek slacten mesajla?????

SELECT A.Name AS Track_Name, C.Name AS Artist_Name
FROM tracks AS A
	JOIN albums AS B on A.AlbumId = B.AlbumId
	JOIN artists AS C on B.ArtistId = C.ArtistId

---- her bir track'in bulunduğu faturaları getiriniz?

SELECT tracks.Name, invoices.InvoiceId
FROM tracks
INNER JOIN invoice_items on tracks.TrackId = invoice_items.TrackId
INNER JOIN invoices on invoices.InvoiceId = invoice_items.InvoiceLineId -- owen hoca bunu yazmadı, gerek yok zaten ilki yeter dedi.







	
	
	


