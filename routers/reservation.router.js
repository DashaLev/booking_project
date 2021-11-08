const reservationRouter = require('express').Router();

const { reservationController } = require('../controllers');

reservationRouter.get('/',
    reservationController.getReservations);

module.exports = reservationRouter;
