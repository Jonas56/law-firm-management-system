"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Case.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      judge: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enemy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      result: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM({
          values: ["opened", "in progress", "closed"],
        }),
        allowNull: false,
      },
      priority: {
        type: DataTypes.ENUM({
          values: ["low", "medium", "high"],
        }),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Case",
    }
  );
  return Case;
};
