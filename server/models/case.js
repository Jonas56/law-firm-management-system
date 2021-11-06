"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Client }) {
      // define association here
      this.belongsTo(User, { foreignKey: "userId", as: "user" });
      this.belongsTo(Client, { foreignKey: "clientId", as: "client" });
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        clientId: undefined,
        userId: undefined,
        createdAt: undefined,
        updatedAt: undefined,
      };
    }
  }
  Case.init(
    {
      userId: {
        type: DataTypes.UUID,
      },
      clientId: {
        type: DataTypes.UUID,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a title field" },
          notEmpty: { msg: "The title field shouldn't be empty" },
        },
      },
      description: DataTypes.TEXT,
      judge: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a judge field" },
          notEmpty: { msg: "The judge field shouldn't be empty" },
        },
      },
      enemy: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a enemy field" },
          notEmpty: { msg: "The judge field shouldn't be empty" },
        },
      },
      place: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a place field" },
          notEmpty: { msg: "The place field shouldn't be empty" },
        },
      },
      result: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a result field" },
          notEmpty: { msg: "The result field shouldn't be empty" },
        },
      },
      status: {
        type: DataTypes.ENUM({
          values: ["opened", "in progress", "closed"],
        }),
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a status field" },
          notEmpty: { msg: "The status field shouldn't be empty" },
        },
      },
      priority: {
        type: DataTypes.ENUM({
          values: ["low", "medium", "high"],
        }),
        allowNull: false,
        validate: {
          notNull: { msg: "The case should contain a priority field" },
          notEmpty: { msg: "The priority field shouldn't be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "cases",
      modelName: "Case",
    }
  );
  return Case;
};
