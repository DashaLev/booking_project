const { Schema, model } = require('mongoose');

const { userRoles, USER_MODEL } = require('../configs');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        select:false
    },
    role: {
        type: String,
        default: userRoles.USER,
        enum: Object.values(userRoles)
    },
    is_active: {
        type: Boolean,
        required: true,
        default: false
    }

}, { id: false, timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
})

module.exports = model(USER_MODEL, userSchema);
