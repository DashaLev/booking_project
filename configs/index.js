const { FORGOT_PASSWORD, ACTIVATE_ACCOUNT } = require('./action-token-type.enum');

const { MONGO_CONNECT_URL,
    PORT,
    FRONT_END_URL,
    FORGOT_PASSWORD_FRONT_END_URL,
    ACTIVATE_ACCOUNT_FRONT_END_URL,
    JWT_FORGOT_PASSWORD_SECRET,
    JWT_ACTIVATE_ACCOUNT_SECRET,
    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET,
    TRANSPORTER_SENDER_EMAIL,
    TRANSPORTER_SENDER_PASS,
    NODE_ENV, ALLOWED_ORIGIN,
    DEFAULT_ADMIN_PASSWORD } = require('./config');

const { PASSWORD_REGEXP,
    EMAIL_REGEXP,
    AUTHORIZATION,
    CREATED_STATUS,
    NO_CONTENT_STATUS,
    BAD_REQUEST_STATUS,
    DEFAULT_STATUS_ERR,
    DATES_ARE_TAKEN,
    LOGGED_OUT,
    USER_ACTIVATED,
    WRONG_TEMPLATE_NAME,
    CORS_NOT_ALLOWED } = require('./constants');

const { CHANGE_USER_PASSWORD,
    DELETED_USER,
    DELETED_UNACTIVATED_ACCOUNT,
    REGISTERED_USER,
    REMIND_ACTIVATE_ACCOUNT,
    REMIND_LOGIN,
    RESERVED_PLACE_RENTER,
    RESERVED_PLACE_OWNER,
    NEW_USER_PASSWORD,
    UPDATED_USER } = require('./email-actions.enum');

const { ACTION_MODEL, O_AUTH_MODEL, PLACE_MODEL,RESERVE_MODEL, USER_MODEL } = require('./model-names.enum');

const { ACCESS, REFRESH } = require('./token-types.enum');

module.exports = {
    actionTokenTypes: require('./action-token-type.enum'),
    emailActionsEnum: require('./email-actions.enum'),
    actionTypes: require('./token-types.enum'),
    userRoles: require('./user-roles.enum'),

    ACTIVATE_ACCOUNT,
    FORGOT_PASSWORD,

    NODE_ENV,

    MONGO_CONNECT_URL,
    PORT,
    ALLOWED_ORIGIN,

    FRONT_END_URL,
    ACTIVATE_ACCOUNT_FRONT_END_URL,
    FORGOT_PASSWORD_FRONT_END_URL,

    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET,
    JWT_FORGOT_PASSWORD_SECRET,
    JWT_ACTIVATE_ACCOUNT_SECRET,

    TRANSPORTER_SENDER_EMAIL,
    TRANSPORTER_SENDER_PASS,

    DEFAULT_ADMIN_PASSWORD,

    AUTHORIZATION,
    EMAIL_REGEXP,
    PASSWORD_REGEXP,
    CREATED_STATUS,
    NO_CONTENT_STATUS,
    BAD_REQUEST_STATUS,
    DEFAULT_STATUS_ERR,
    CORS_NOT_ALLOWED,
    DATES_ARE_TAKEN,
    LOGGED_OUT,
    USER_ACTIVATED,
    WRONG_TEMPLATE_NAME,

    CHANGE_USER_PASSWORD,
    DELETED_USER,
    DELETED_UNACTIVATED_ACCOUNT,
    REGISTERED_USER,
    REMIND_ACTIVATE_ACCOUNT,
    REMIND_LOGIN,
    RESERVED_PLACE_RENTER,
    RESERVED_PLACE_OWNER,
    NEW_USER_PASSWORD,
    UPDATED_USER,

    ACTION_MODEL,
    O_AUTH_MODEL,
    PLACE_MODEL,
    RESERVE_MODEL,
    USER_MODEL,

    ACCESS,
    REFRESH
};
