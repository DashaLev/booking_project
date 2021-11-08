const { userRoles: { ADMIN, MANAGER }, DEFAULT_ADMIN_PASSWORD } = require('../configs');
const { User } = require('../dataBase');
const { passwordService } = require('../services');

module.exports = async () => {
    const userAdminRole = await User.findOne({ role: ADMIN });
    const userManagerRole = await User.findOne({ role: MANAGER });

    if (!userAdminRole) {
        const hashedPassword = await passwordService.hash(DEFAULT_ADMIN_PASSWORD);

        await User.create({
            firstName: 'Rick',
            lastName: 'Sanchez',
            age: 29,
            email: 'admin@gmail.com',
            password: hashedPassword,
            role: ADMIN,
            is_active: true
        });
    }

    if (!userManagerRole) {
        const hashedPassword = await passwordService.hash(DEFAULT_ADMIN_PASSWORD);

        await User.create({
            firstName: 'Jane',
            lastName: 'Oystein',
            age: 28,
            email: 'mnager@gmail.com',
            password: hashedPassword,
            role: MANAGER,
            is_active: true
        });
    }
};

