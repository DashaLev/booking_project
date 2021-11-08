const { Place } = require('../dataBase');

module.exports = {
    getAllPlaces: (query = {}) => {
        const {
            perPage = 20,
            page = 1,
            sortBy = 'createdAt',
            order = 'desc',
            ...filters
        } = query;

        const findObject = {};
        const priceFilter = {};

        Object.keys(filters).forEach((filterParam) => {
            switch (filterParam) {
                case 'country':
                    findObject.country = { $regex: `${filters.country}`, $options: 'i' };
                    break;
                case 'city':
                    findObject.city = { $regex: `${filters.city}`, $options: 'i' };
                    break;
                case 'guests':
                    findObject.guests = { $gte: +filters['guests'] } ;
                    break;
                case 'max_price':
                    Object.assign(priceFilter, { $lte: +filters['max_price'] });
                    break;
                case 'min_price':
                    Object.assign(priceFilter, { $gte: +filters['min_price'] });
                    break;
            }
        });

        if (Object.values(priceFilter).length) {
            findObject.price_per_night = priceFilter;
        }
        console.log(findObject);

        const orderBy = order === 'desc' ? -1 : 1;

        return Place
            .find(findObject)
            .sort({ [sortBy]: orderBy })
            .limit(+perPage)
            .skip((page - 1) * perPage);
    }
};
