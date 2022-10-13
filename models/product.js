const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Products extends Model {

}

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ProductName:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Quantity: {
            type: DataTypes.INTEGER,

        }
    }
)

module.exports = Products; 