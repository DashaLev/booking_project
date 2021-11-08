const joi = require('joi');

const createPlaceValidator = joi.object({
    title: joi
        .string()
        .min(5)
        .required(),
    country: joi
        .string()
        .required(),
    city: joi
        .string()
        .required(),
    address: joi
        .object()
        .required(),
    description: joi
        .string()
        .min(30)
        .required(),
    rooms: joi
        .object()
        .required(),
    guests: joi
        .number()
        .required(),
    price_per_night: joi
        .number()
        .required(),
    currency: joi
        .string()
        .required()
});

const updatePlaceValidator = joi.object({
    title: joi
        .string()
        .min(5),
    address: joi
        .string(),
    description: joi
        .string()
        .min(30),
    rooms: joi
        .object(),
    max_guests: joi
        .number(),
    price_one_person: joi
        .number(),
    currency: joi
        .string()
});

const reservePlaceValidator = joi.object({
    date_from: joi
        .date()
        .required(),
    date_by: joi
        .date()
        .required(),
    guests: joi
        .number()
        .required(),
    sum_reservation: joi
        .number()
        .required(),
    nights_reserved: joi
        .number()
        .required(),
    currency: joi
        .string()
        .required()
})

module.exports = {
    createPlaceValidator,
    reservePlaceValidator,
    updatePlaceValidator
};

