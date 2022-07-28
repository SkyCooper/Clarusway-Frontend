<?xml version="1.0" encoding="UTF-8"?><sqlb_project><db path="C:/Users/user/Documents/Clarusway/SQL/CHINOOK DATABASE/chinook.db" readonly="0" foreign_keys="1" case_sensitive_like="0" temp_store="0" wal_autocheckpoint="1000" synchronous="2"/><attached/><window><main_tabs open="structure browser pragmas query" current="3"/></window><tab_structure><column_width id="0" width="300"/><column_width id="1" width="0"/><column_width id="2" width="100"/><column_width id="3" width="3862"/><column_width id="4" width="0"/><expanded_item id="0" parent="1"/><expanded_item id="1" parent="1"/><expanded_item id="2" parent="1"/><expanded_item id="3" parent="1"/></tab_structure><tab_browse><current_table name="4,6:mainalbums"/><default_encoding codec=""/><browse_table_settings><table schema="main" name="albums" show_row_id="0" encoding="" plot_x_axis="" unlock_view_pk="_rowid_"><sort><column index="3" mode="0"/></sort><column_widths><column index="1" value="61"/><column index="2" value="300"/><column index="3" value="59"/></column_widths><filter_values/><conditional_formats/><row_id_formats/><display_formats/><hidden_columns/><plot_y_axes/><global_filter/></table><table schema="main" name="artists" show_row_id="0" encoding="" plot_x_axis="" unlock_view_pk="_rowid_"><sort/><column_widths><column index="1" value="59"/><column index="2" value="300"/></column_widths><filter_values/><conditional_formats/><row_id_formats/><display_formats/><hidden_columns/><plot_y_axes/><global_filter/></table></browse_table_settings></tab_browse><tab_sql><sql name="ddl_create">-- DDL COMMANDS
-- DATA DEFINITION LANGUAGE

CREATE TABLE vacation_table
(
place_id int,
country text,
hotel_name text,
employee_id int,
vacation_lenght int,
budged REAL
);

SELECT * FROM vacation_table; --2 kere çalışıca ilk kayıtları yine insert etti

--drop table komut yetkisi herkese verilmez, tehlikelidir. bütün herşeyi siler.

--truncate' te tablo ismi kalır fakat içi boşaltılır.


--hepsine birden ekleme yapılacağı için tek tek yazmadan values dedik
INSERT INTO vacation_table 
VALUES -- 6 sütun için sırayla veri girişi yaptık.--
(1, 'USA', 'California', 1, 10, 20000),
(2, 'Rwanda', 'Rwanda', 2, 15, 20000),
(3, 'Brazil', 'Rio', 3, 10.5, 20.500);

INSERT INTO vacation_table --null ekleme örneği
VALUES
(5, 'USA', 'California', 6, 10, null)

-----DROP TABLE(önce plan ismi vermiştim sonra table dedim, 2 tane tablo yaptı
--ikisi de ayrı ayrı sildim.(sonradan tekrar tanımlandığı için rengi yeşile döndü
DROP TABLE vacation_table
DROP TABLE vacation_plan

--- drop oldu yeniden tanımlıyoruz.yukarıdan kopyalayıp güncelledik.
--FOREIGN key ekledik. 1 tabloda sadece 1 PRIMARY KEY olur.

CREATE TABLE vacation_table
(
place_id int PRIMARY KEY,
country text,
hotel_name text NOT NULL,
employee_id int,
vacation_lenght int,
budged REAL,
FOREIGN KEY (employee_id) REFERENCES employees(EmployeeId)
);

----vacation_table sütün ekleme; ALTER TABLE
ALTER TABLE vacation_table
ADD city varchar(50) NOT NULL

---TABLODAN SÜTÜN SİLMEK - DROP
ALTER TABLE vacation_table
DROP city ;



--- track tablosu nasıl CREATE yapılmış bakmak için Database Structruce'dan üzeine gelip
--- sağ tıklayıp &quot;Copy Create stetament &quot; dedik ve buraya yapıştırdık.
/*
CREATE TABLE &quot;tracks&quot;
(
    [TrackId] INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    [Name] NVARCHAR(200)  NOT NULL,
    [AlbumId] INTEGER,
    [MediaTypeId] INTEGER  NOT NULL,
    [GenreId] INTEGER,
    [Composer] NVARCHAR(220),
    [Milliseconds] INTEGER  NOT NULL,
    [Bytes] INTEGER,
    [UnitPrice] NUMERIC(10,2)  NOT NULL,
    FOREIGN KEY ([AlbumId]) REFERENCES &quot;albums&quot; ([AlbumId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY ([GenreId]) REFERENCES &quot;genres&quot; ([GenreId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION,
    FOREIGN KEY ([MediaTypeId]) REFERENCES &quot;media_types&quot; ([MediaTypeId]) 
		ON DELETE NO ACTION ON UPDATE NO ACTION
)
*/</sql><current_tab id="0"/></tab_sql></sqlb_project>
