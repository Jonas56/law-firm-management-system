"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Case }) {
      // define association here
      this.hasMany(Case, {
        foreignKey: "clientId",
        as: "cases",
        onDelete: "CASCADE",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }

  Client.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zipcode: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "clients",
      modelName: "Client",
    }
  );
  return Client;
};
