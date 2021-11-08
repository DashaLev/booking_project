const { createPlaceValidator,reservePlaceValidator, updatePlaceValidator } = require('./place.validator');
const { updateUserValidator, createUserValidator, userEmailValidator, userPasswordValidator,
    loginUserValidator } = require('./user.validator');

module.exports = {
    createPlaceValidator,
    reservePlaceValidator,
    updatePlaceValidator,

    createUserValidator,
    loginUserValidator,
    updateUserValidator,
    userEmailValidator,
    userPasswordValidator,
};
