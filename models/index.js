const User = require('./User');
const Subject = require('./Subject');
const TutorSession = require('./Tutor_session');
const Role = require('./Role');

User.hasOne(Role, { as: 'userRole' });
// User.hasMany(TutorSession, { foreignKey: 'user_id' });

// TutorSession.belongsTo(User, { foreignKey: 'user_id' });

Subject.belongsToMany(User, {
  through: {
    model: TutorSession,
  },
});

// Tutor.belongsTo(User, { foreignKey: 'roletype' });
// Student.belongsTo(User, { foreignKey: 'roletype' });

module.exports = { User, Subject, TutorSession };
