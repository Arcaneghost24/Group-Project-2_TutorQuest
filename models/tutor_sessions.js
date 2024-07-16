const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class tutor_sessions extends Model {}

tutor_sessions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students',
        key: 'id',
      },
    },
    tutor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tutors',
        key: 'id',
      },
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'tutor_sessions',
  }
);

module.exports = tutor_sessions;
