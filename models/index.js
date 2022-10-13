// bring in all tables 
const users = require('./user'); 
const products =require('./product');
const Locations =require('./backroomLocatations');
const shelf=require('./shelf');

//adding relations to bring all tables to one

shelf.hasmany(products, {
    foreignKey: 'productid',
    onDelete: 'CASCADE',
})

shelf.hasmany(Locations, {
    foreignKey: 'locationid',
    onDelete: 'CASCADE',
})

shelf.hasmany(users, {
    foreignKey: 'userid',
    onDelete: 'CASCADE',
})

module.exports = {shelf};