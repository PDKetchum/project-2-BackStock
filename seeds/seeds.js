const sequelize = require("../config/connection");
const { User, Location, Product } = require("../models");

// Import seed data
const userData = require("./userData.json");
const locationData = require("./locationData.json");
const productData = require("./productData.json");

// Insert seeds into tables
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Location.bulkCreate(locationData);

  await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();
