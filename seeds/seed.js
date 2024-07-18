const sequelize = require('../config/connection');
const { User, Subject } = require('../models');

const userData = require('./userData.json');
const subjectData = require('./subjects.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('userData', userData);
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('users', users);

    const subjects = await Subject.bulkCreate(subjectData, {
      returning: true,
    });
    console.log('subjects', subjects);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();
