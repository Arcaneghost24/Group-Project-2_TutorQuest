const User = require('./User');
// const Student = require('./Student');
const Tutor = require('./Tutor');
const TutorSessions = require('./tutor_sessions');

// Student.hasMany(TutorSessions, { foreignKey: 'student_id' });
Tutor.hasMany(TutorSessions, { foreignKey: 'tutor_id' });
// TutorSessions.belongsTo(Student, { foreignKey: 'student_id' });
TutorSessions.belongsTo(Tutor, { foreignKey: 'tutor_id' });

module.exports = { Tutor, TutorSessions };
module.exports = { User };
