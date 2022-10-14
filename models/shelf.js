// this table links all tables together to show what is in a location

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


// create shelf table 
class shelf extends Model {

}
shelf.init ( {
ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: "Products", 
        key: 'ProductName'
    }
},
Stocked_By: {
    type: DataTypes.STRING,
    allowNull: false, 
    references: {
        model: "user", 
        key: 'name'
    }

},
LocationID: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    references: {
        model: "Locations", 
        key: 'id'
    }
}, 
Amount: {
    type: DataTypes.INTEGER,
    references: {
        model: "Product",
        key: "Quantity"
    }
}, 

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shelf'
    }
    

)
module.exports =shelf; 