const joi = require('joi');

const { EMAIL_REGEXP, PASSWORD_REGEXP, userRoles } = require('../configs');

const createUserValidator = joi.object({
    firstName: joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .trim()
        .required(),
    lastName: joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .trim()
        .required(),
    age: joi
        .number()
        .required(),
    email: joi
        .string()
        .regex(EMAIL_REGEXP)
        .required(),
    role: joi
        .string()
        .allow(...Object.values(userRoles)),
    password:joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required()
});

const loginUserValidator = joi.object({
    email: joi
        .string()
        .regex(EMAIL_REGEXP)
        .required(),
    password: joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required()
});

const updateUserValidator = joi.object({
    name: joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .trim()
        .required()
});

const userEmailValidator = joi.object({
    email: joi
        .string()
        .regex(EMAIL_REGEXP)
});

const userPasswordValidator = joi.object({
    password:joi
        .string()
        .regex(PASSWORD_REGEXP)
        .required()
});

module.exports = {
    createUserValidator,
    loginUserValidator,
    updateUserValidator,
    userEmailValidator,
    userPasswordValidator
};

