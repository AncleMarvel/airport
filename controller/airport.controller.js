const db = require('../db');
class AirportController {
    async createPlane(req, res) {
        const { id, capacity, maxspeed } = req.body;
        const text = 'INSERT INTO airplanes (id, capacity, maxspeed) values ($1, $2, $3) RETURNING *';
        const values = [id, capacity, maxspeed];
        const newPlane = await db.query(text, values);
        res.json(newPlane);
    }

    async getPlanes(req, res) {
        const planes = await db.query('SELECT * FROM airplanes');
        res.json(planes.rows);
    }

    async getPlaneById(req, res) {
        const id = req.params.id;
        const plane = await db.query('SELECT * FROM airplanes where id = $1', [id]);
        res.json(plane.rows[0]);
    }

    async updatePlane(req, res) {
        const { id, capacity, maxspeed } = req.body;
        const plane = await db.query('UPDATE airplanes set capacity = $1, maxspeed = $2 where id = $3 RETURNING *', 
        [capacity, maxspeed, id]);
        res.json(plane.rows[0]);
    }

    async deletePlane(req, res) {
        const id = req.params.id;
        const plane = await db.query('DELETE FROM airplanes where id = $1', [id]);
        res.json(plane.rows[0]);
    }

    //-----------------PASSENGERS-----------------
    async createPassenger(req, res) {
        const { passenger_id, pib, stat, passport_num } = req.body;
        const text = 'INSERT INTO passengers (passenger_id, pib, stat, passport_num) values ($1, $2, $3, $4) RETURNING *';
        const values = [passenger_id, pib, stat, passport_num];
        const newPassenger = await db.query(text, values);
        res.json(newPassenger);
    }

    async getPassengers(req, res) {
        const passengers = await db.query('SELECT * FROM passengers');
        res.json(passengers.rows);
    }

    async getPassengerById(req, res) {
        const id = req.params.id;
        const passenger = await db.query('SELECT * FROM passengers where id = $1', [id]);
        res.json(passenger.rows[0]);
    }

    async updatePassenger(req, res) {
        const { passenger_id, pib, stat, passport_num } = req.body;
        const passenger = await db.query('UPDATE passengers set pib = $1, stat = $2, passport_num = $3 where id = $4 RETURNING *', 
        [pib, stat, passport_num, passenger_id]);
        res.json(passenger.rows[0]);
    }

    async deletePassenger(req, res) {
        const id = req.params.id;
        const passenger = await db.query('DELETE FROM passengers where id = $1', [id]);
        res.json(passenger.rows[0]);
    }
}
module.exports = new AirportController();