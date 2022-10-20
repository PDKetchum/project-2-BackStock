// bring in all tables
const User = require("./user");
const Product = require("./product");
const Location = require("./location");

Location.hasMany(Product, {
  foreignKey: "location_id",
});
User.hasMany(Location, {
  foreignKey: "stocked_by",
});
Product.belongsTo(Location, {
  foreignKey: "location_id",
});
Location.belongsTo(User, {
  foreignKey: "stocked_by",
});

module.exports = { User, Product, Location };
