"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Case }) {
      // define association here
      this.hasMany(Case, {
        foreignKey: "userId",
        as: "cases",
        onDelete: "CASCADE",
      });
    }

    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        password: undefined,
      };
    }
  }
  User.init(
    {
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {},
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );

  User.addHook("beforeCreate", async (user) => {
    if (user.password) {
      const saltRounds = 10;
      user.password = await bcrypt.hash(user.password, saltRounds);
    } else {
      user.password = null;
    }
  });
  return User;
};
