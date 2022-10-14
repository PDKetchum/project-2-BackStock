const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Locations extends Model {

}
Locations.init(
    {
    //each  location needs an id for seperate shelfs 
    locationid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
  
   
    
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Locations'
  }
);
module.exports = Locations; 