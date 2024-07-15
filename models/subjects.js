subjects.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
});
module.exports = subjects;
