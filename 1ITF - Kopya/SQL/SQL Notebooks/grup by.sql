SELECT AlbumId, MIN(Milliseconds)
FROM tracks
GROUP BY AlbumId

--- HER BİR COUNTRYDEN KAZANILAN TOPLAM TUTARI HESAPLAYINIZ
SELECT BillingCountry, SUM(total) AS toplam_income
FROM invoices
GROUP BY BillingCountry

--- HER BİR COUNTRYDEN VE her şehirden KAZANILAN TOPLAM TUTARI HESAPLAYINIZ
SELECT BillingCountry,BillingCity, SUM(total) AS toplam_income
FROM invoices
GROUP BY BillingCountry, BillingCity