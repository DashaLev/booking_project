const placeRouter = require('express').Router();

const { placeController } = require('../controllers');
const { placeMiddleware, userMiddleware, authMiddleware } = require('../middlewares');
const { createPlaceValidator, updatePlaceValidator, reservePlaceValidator }= require('../validators');

placeRouter.get('/',
    placeController.getPlaces);

placeRouter.post('/',
    userMiddleware.validationMiddleware(createPlaceValidator),
    authMiddleware.checkAccessToken,
    placeController.createPlace);

placeRouter.get('/:user_id',
    userMiddleware.checkUserExistById,
    placeController.getPlacesOneUserById);

placeRouter.put('/:place_id',
    userMiddleware.validationMiddleware(updatePlaceValidator),
    authMiddleware.checkAccessToken,
    placeMiddleware.checkPlaceExist,
    placeController.updatePlace);

placeRouter.post('/:place_id',
    userMiddleware.validationMiddleware(reservePlaceValidator),
    authMiddleware.checkAccessToken,
    placeMiddleware.checkPlaceExist,
    placeMiddleware.checkDatesToReserve,
    placeController.reservePlace);

placeRouter.delete('/:place_id',
    authMiddleware.checkAccessToken,
    placeMiddleware.checkPlaceExist,
    placeController.deletePlace);

placeRouter.get('/:user_id/:place_id',
    userMiddleware.checkUserExistById,
    placeMiddleware.checkPlaceExist,
    placeController.getPlaceById);

module.exports = placeRouter;
