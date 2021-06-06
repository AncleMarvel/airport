const Router = require("express");
const router = new Router(); 
const airportController = require('../controller/airport.controller');

router.post('/plane', airportController.createPlane);
router.get('/plane', airportController.getPlanes);
router.get('/plane/:id', airportController.getPlaneById);
router.put('/plane', airportController.updatePlane);
router.delete('/plane/:id', airportController.deletePlane);

router.post('/passenger', airportController.createPassenger);
router.get('/passenger', airportController.getPassengers);
router.get('/passenger/:id', airportController.getPassengerById);
router.put('/passenger', airportController.updatePassenger);
router.delete('/passenger/:id', airportController.deletePassenger);


module.exports = router; 