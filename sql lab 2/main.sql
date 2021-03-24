DROP TABLE IF EXISTS public.passengers ;
drop type if exists gender;
CREATE TYPE gender AS ENUM ('Male', 'Female');
CREATE TABLE public.passengers (
	passenger_id serial primary key,
	PIB varchar(50),
	stat gender,
	passport_num numeric
);

drop table if exists public.airplanes;
create table public.airplanes (
	id serial primary key,
	capacity numeric,
	maxSpeed numeric
);

drop table if exists public.flights;
create table public.flights (
	id serial primary key,
	airplaneId int references airplanes on delete cascade on update cascade,
	departure varchar,
	arrival varchar,
	departureTime time,
	arrivalTime time
);

drop table if exists public.tickets;
create table public.tickets (
	id serial primary key,
	passengerId int references passengers on delete cascade on update cascade,
	flightsId int references flights on delete cascade on update cascade,
	airplaneId int references airplanes on delete cascade on update cascade,
	price varchar,
	seat_num numeric
);





