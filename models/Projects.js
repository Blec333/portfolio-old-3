const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Projects extends Model {}

Projects.init(
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
    },
    estimatedValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "projects",
  }
);

module.exports = Projects;
