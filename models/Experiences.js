const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Experiences extends Model {}

Experiences.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateRange: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Mth/Year - Mth/Year",
    },
    cityState: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description5: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description6: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description7: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description8: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description9: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description10: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description11: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description12: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description13: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description14: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description15: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "experiences",
  }
);

module.exports = Experiences;
