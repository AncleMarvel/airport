-- Drop table

DROP TABLE IF EXISTS public.passengers ;

drop type if exists gender;
CREATE TYPE gender AS ENUM ('Male', 'Female');

CREATE TABLE public.passengers (
	passenger_id SERIAL,
	PIB varchar(50),
	stat gender,
	passport_num numeric,
	seat_num numeric
);