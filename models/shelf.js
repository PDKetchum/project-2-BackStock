// this table links all tables together to show what is in a location

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const product =require('./product');
const locations =require('./backroomLocatations'); 
const user =require('./user'); 
class shelf extends Model {

}
shelf.init ( {
ProductName: {
    type: DataTypes.STRING,
    allowNull: false,
},
Stocked_By: {
    type: DataTypes.STRING,
    allowNull: false, 
},
LocationID: {
    type: DataTypes.INTEGER,
    allowNull: false, 
}

})
Model.exports =shelf; 