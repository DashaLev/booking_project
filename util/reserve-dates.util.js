const { ErrorHandler } = require('../errors');
const { BAD_REQUEST_STATUS, DATES_ARE_TAKEN } = require('../configs');

module.exports = {
    compareDatesReservation: (bookDateFrom, bookDateBy, existDateFrom, existDateBy ) => {

        if (bookDateFrom < existDateFrom && bookDateBy < existDateFrom || bookDateFrom > existDateBy ) {
            return;
        }

        throw new ErrorHandler(DATES_ARE_TAKEN, BAD_REQUEST_STATUS);
    }
};
