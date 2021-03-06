const {
    ACCESS_DENIED,
    EMAIL_ALREADY_EXISTS,
    ENTITY_NOT_FOUND,
    FILE_TOO_BIG,
    INVALID_TOKEN,
    NOT_SUPPORTED_FORMAT,
    WRONG_EMAIL_OR_PASSWORD,
    WRONG_TOKEN_TYPE
} = require('./errors.list');

module.exports = {
    ErrorHandler: require('./ErrorHandler'),
    ACCESS_DENIED,
    EMAIL_ALREADY_EXISTS,
    ENTITY_NOT_FOUND,
    FILE_TOO_BIG,
    INVALID_TOKEN,
    NOT_SUPPORTED_FORMAT,
    WRONG_EMAIL_OR_PASSWORD,
    WRONG_TOKEN_TYPE
};
