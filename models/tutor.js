const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tutor extends Model {}

Tutor.init(
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
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    qualifications: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    preferredAgeGroups: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    hourlyRate: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    modeOfTutoring: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    upcomingSessions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pastSessions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    messages: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    uploadedResources: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    paymentHistory: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    payoutMethods: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tutors',
  }
);

module.exports = Tutor;
