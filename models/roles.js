roles.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
});
module.exports = roles;
