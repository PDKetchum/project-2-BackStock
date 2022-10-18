// bring in all tables
const User = require("./user");
const Product = require("./product");
const Location = require("./location");
const Shelf = require("./shelf");

//adding relations to bring all tables to one

// Shelf.hasMany(Product, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });

// Shelf.hasMany(Location, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });

// Shelf.hasMany(User, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });
Location.hasMany(Product, {
  foreignKey: "location_id"
})
User.hasMany(Location, {
  foreignKey: "stocked_by"
})
Product.belongsTo(Location, {
  foreignKey: "location_id"
})
Location.belongsTo(User, {
  foreignKey: "stocked_by"
})

module.exports = { Shelf, User, Product, Location };
