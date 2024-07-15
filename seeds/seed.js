const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('userData', userData);
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('users', users);

    // await roles();
    // await subjects();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
