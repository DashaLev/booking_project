const { Schema, model } = require('mongoose');

const { PLACE_MODEL, USER_MODEL } = require('../configs');

const placeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: Object,
        required: true,
        trim: true,
        minLength: 5,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 30,
    },
    rooms: {
        type: Object,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    },
    price_per_night: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: USER_MODEL
    }
}, { timestamps: true });

module.exports = model(PLACE_MODEL, placeSchema);
