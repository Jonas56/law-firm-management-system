"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Cases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
      },
      title: {
        type: DataTypes.STRING,
      },
      description: DataTypes.TEXT,
      place: {
        type: DataTypes.STRING,
      },
      result: {
        type: DataTypes.STRING,
      },
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
    await queryInterface.dropTable("Cases");
  },
};
