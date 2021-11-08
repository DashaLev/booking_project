const { Place, Reserve} = require('../dataBase');
const { ErrorHandler, ENTITY_NOT_FOUND } = require('../errors');
const { compareDatesReservation } = require('../util');

module.exports = {
    checkPlaceExist: async (req, res, next) => {
        try {
            const { place_id } = req.params;

            const place = await Place.findById(place_id).select('-__v').populate('user_id');

            if (!place) {
                throw new ErrorHandler(ENTITY_NOT_FOUND.message, ENTITY_NOT_FOUND.status);
            }

            req.place = place;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkDatesToReserve: async (req, res, next) => {
        try {
            const place_id = req.place._id;

            const existingReservations = await Reserve.find({ place_id });

            if (!existingReservations.length) {
                return next();
            }

            const { date_from, date_by } = req.body;

            existingReservations.map(item => compareDatesReservation(date_from, date_by,item.date_from, item.date_by))

            next();
        } catch (e) {
            next(e);
        }
    }
};

