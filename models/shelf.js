// this table links all tables together to show what is in a location

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

// create shelf table
class Shelf extends Model {}
Shelf.init({
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Product",
      key: "id",
    },
  },
  Stocked_By: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "User",
      key: "id",
    },
  },
  LocationID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Locations",
      key: "id",
    },
  },
});
Model.exports = Shelf;
