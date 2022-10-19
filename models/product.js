const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    // product needs unique id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //product needs a name
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //product needs a quantity amount
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Product",
  }
);

module.exports = Product;
