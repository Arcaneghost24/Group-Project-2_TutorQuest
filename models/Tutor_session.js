const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutoring_session extends Model {}

Tutoring_session.init(
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
        model: 'users',
        key: 'id',
      },
    },
    tutor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subject',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'tutor_sessions',
  }
);

module.exports = Tutoring_session;
