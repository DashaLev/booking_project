const { Reserve } = require('../dataBase');

module.exports = {
    getReservations: async (req, res, next) => {
        try {
            const { place_id } = req.query;

            const reservations = await Reserve.find(place_id);

            res.json(reservations);
        } catch (e) {
            next(e);
        }
    }
};

