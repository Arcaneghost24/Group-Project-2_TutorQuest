const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentSubjects: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    academicGoals: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preferredSubjects: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferredTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modeOfTutoring: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upcomingSessions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    pastSessions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    messages: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    notesResources: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    paymentHistory: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    paymentMethods: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;
