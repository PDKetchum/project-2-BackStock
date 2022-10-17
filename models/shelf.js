// this table links all tables together to show what is in a location

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// create shelf table
class Shelf extends Model {}
Shelf.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Product",
        key: "id",
      },
    },
    user_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Shelf",
  }
);
module.exports = Shelf;
