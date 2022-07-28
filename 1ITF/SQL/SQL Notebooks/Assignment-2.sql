--How many tracks does each album have? Your solution should include 
--Album id and its number of tracks sorted from highest to lowest.

SELECT albums.AlbumId, count(tracks.Name) AS Number
FROM albums
JOIN tracks ON albums.AlbumId = tracks.AlbumId
GROUP BY tracks.AlbumId
ORDER BY 2 DESC

SELECT AlbumId,count(TrackId)
FROM  tracks
group by AlbumId
order by count(TrackId) DESC



--Find the album title of the tracks. Your solution should include 
--track name and its album title.

SELECT tracks.Name, albums.Title
FROM tracks
LEFT JOIN albums on tracks.AlbumId = albums.AlbumId


--Find the minimum duration of the track in each album. Your solution should include 
--album id, album title and duration of the track sorted from highest to lowest.

SELECT tracks.AlbumId, albums.Title, tracks.Milliseconds
FROM tracks
JOIN albums ON tracks.AlbumId = albums.AlbumId
GROUP BY tracks.AlbumId
ORDER By tracks.Milliseconds DESC

SELECT albums.AlbumId, albums.Title as album_ismi, MIN(Milliseconds)
FROM albums
LEFT JOIN tracks ON tracks.AlbumId = albums.AlbumId
GROUP BY albums.AlbumId 
ORDER BY Milliseconds DESC

--Find the total duration of each album. 
--Your solution should include album id, 
--album title and its total duration sorted from highest to lowest.

SELECT tracks.AlbumId, albums.Title, SUM(tracks.Milliseconds) AS Toplam_Süre
FROM tracks
JOIN albums ON tracks.AlbumId = albums.AlbumId
GROUP BY tracks.AlbumId
ORDER By Toplam_Süre DESC;

--Based on the previous question, find the albums whose total duration is higher than 70 minutes. 
--Your solution should include album title and total duration.



SELECT albums.Title as album_name, SUM(Milliseconds)
FROM albums 
LEFT JOIN tracks ON tracks.AlbumId = albums.AlbumId 
GROUP BY albums.AlbumId 
HAVING sum(Milliseconds)> 4200000 
ORDER BY sum(tracks.milliseconds) DESC;


SELECT albums.Title, SUM(Milliseconds)
FROM tracks
INNER JOIN albums ON tracks.AlbumId = albums.AlbumId
GROUP BY albums.AlbumId
HAVING SUM(Milliseconds) > 70*60*1000
ORDER BY SUM(Milliseconds) DESC;



SELECT Album_Title, Total_Duration
FROM(SELECT albums.Title AS Album_Title,SUM(tracks.Milliseconds) AS Total_Duration
    FROM tracks
    JOIN albums
    ON tracks.AlbumId = albums.AlbumId
    GROUP BY tracks.AlbumId)
WHERE Total_Duration > (70*60*1000)
ORDER BY Total_Duration DESC;


SELECT A.AlbumId, A.total_duration, albums.Title
FROM(SELECT AlbumId, SUM (Milliseconds) AS TOTAL_DURATION
	FROM tracks
	GROUP BY AlbumId) A INNER JOIN albums ON A.AlbumId = albums.AlbumId
WHERE 	TOTAL_DURATION > 70*60*1000
ORDER BY TOTAL_DURATION

