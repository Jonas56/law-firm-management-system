"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Clients", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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

      description: DataTypes.TEXT,
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Clients");
  },
};
