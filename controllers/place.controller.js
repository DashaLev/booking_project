const { CREATED_STATUS, NO_CONTENT_STATUS, RESERVED_PLACE_RENTER, RESERVED_PLACE_OWNER } = require('../configs');
const { Place, Reserve} = require('../dataBase');
const { placeService, emailService} = require('../services');

module.exports = {
    getPlaces: async (req, res, next) => {
        try {
            const places = await placeService.getAllPlaces(req.query);

            res.json(places);
        } catch (e) {
            next(e);
        }
    },

    getPlacesOneUserById: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            const placesOneUser = await Place.find({ user_id });

            res.json(placesOneUser);
        } catch (e) {
            next(e);
        }
    },

    getPlaceById: (req, res) => {
        const place = req.place;

        res.json(place);
    },

    createPlace: async (req, res, next) => {
        try {
            const { _id } = req.user

            const newPlace = await Place.create({...req.body, user_id:_id});

            res.status(CREATED_STATUS).json(newPlace);
        } catch (e) {
            next(e);
        }
    },

    updatePlace: async (req, res, next) => {
        try {
            const { place_id } = req.params;

            const updatedPlace = await Place
                .findByIdAndUpdate(place_id, { ...req.body }, { new: true, fields: { __v: 0 } });

            res.status(CREATED_STATUS).json(updatedPlace);
        } catch (e) {
            next(e);
        }
    },

    deletePlace: async (req, res, next) => {
        try {
            const { place_id } = req.params;

            await Place.deleteOne(place_id);

            res.sendStatus(NO_CONTENT_STATUS);
        } catch (e) {
            next(e);
        }
    },

    reservePlace: async (req, res, next) => {
        try {
            const { _id:place_id, title, country, city, user_id:
                  { firstName:ownerFirstName, email:ownerEmail } } = req.place;

            const { _id:user_id, firstName:renterFirstName, fullName:renterFullName, email:renterEmail } = req.user;

            const { date_from, date_by } = req.body

            const reservation = await Reserve.create({...req.body, place_id, user_id});

            const emailContext = {
                ...req.body,
                dateFrom: date_from.toISOString().slice(0, 10),
                dateBy: date_by.toISOString().slice(0, 10),
                title,
                country,
                city,
            }

            await emailService.sendMail(renterEmail, RESERVED_PLACE_RENTER, {
                ...emailContext, userName: renterFirstName
            });

            await emailService.sendMail(ownerEmail, RESERVED_PLACE_OWNER, {
                ...emailContext, userName: ownerFirstName, renter: renterFullName
            });

            res.json(reservation);
        } catch (e) {
            next(e);
        }
    }
};

