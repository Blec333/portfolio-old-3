const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Interests extends Model {}

Interests.init(
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "interests",
  }
);

module.exports = Interests;
