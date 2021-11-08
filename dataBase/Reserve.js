const { Schema, model } = require('mongoose');

const { RESERVE_MODEL, USER_MODEL, PLACE_MODEL} = require('../configs');

const reserveSchema = new Schema({
    date_from: {
        type: Date,
        required: true,
        trim: true,
    },
    date_by: {
        type: Date,
        required: true,
        trim: true,
    },
    guests: {
        type: Number,
        required: true,
        trim: true
    },
    sum_reservation:{
        type: Number,
        required: true,
        trim: true
    },
    nights_reserved: {
        type: Number,
        required: true,
        trim: true
    },
    place_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: PLACE_MODEL
    },
    currency: {
        type: String,
        required: true,
        trim: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: USER_MODEL
    }
}, { timestamps: true });

module.exports = model(RESERVE_MODEL, reserveSchema);
