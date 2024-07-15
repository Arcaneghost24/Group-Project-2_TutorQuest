const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Student_id = require('./User');
const Tutor_id = require('./User');
class tutor_sessions extends Model {}

tutor_sessions.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'students',
      key: 'id',
    }},
  tutor_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tutors',
      key: 'id',
    }},
  stubject_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  {
    sequelize,
    modelName: 'tutor_sessions'
  }
});

module.exports = tutor_sessions;