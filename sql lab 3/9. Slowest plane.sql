--9. Slowest plane
select id as plane_number, maxspeed from airplanes order by maxspeed desc limit 1