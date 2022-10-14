// bring in all tables 
const users = require('./user'); 
const Products =require('./product');
const Locations =require('./locations');
const shelf =require('./shelf');

//adding relations to bring all tables to one

shelf.hasMany(Products, {
    foreignKey: 'productid',
    onDelete: 'CASCADE',
})

shelf.hasMany(Locations, {
    foreignKey: 'locationid',
    onDelete: 'CASCADE',
})

shelf.hasMany(users, {
    foreignKey: 'userid',
    onDelete: 'CASCADE',
})

module.exports = {shelf, users, Products, Locations};