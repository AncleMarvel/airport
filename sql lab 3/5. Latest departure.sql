select pib, 
tickets.id as ticket_number, 
departure, 
departuretime as departure_time, 
arrival, 
arrivaltime as arrival_time, 
seat_num, 
price as ticket_price,
tickets.airplaneid as airplane_number_in_tickets,
flights.airplaneid as airplane_number_in_flights
from tickets 
join passengers on tickets.passengerid = passengers.passenger_id
join flights on tickets.flightsId = flights.id
join airplanes on tickets.airplaneId = airplanes.id
order by departure_time desc limit 1 