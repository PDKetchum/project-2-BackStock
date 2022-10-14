const sequelize = require("../config/connection");
const { User, Location, Product, Shelf } = require("../models");

const userData = require("./userData.json");
const locationData = require("./locationData.json");
const productData = require("./productData.json");
const shelfData = require("./shelfData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Location.bulkCreate(locationData);

  await Product.bulkCreate(productData);

  await Shelf.bulkCreate(shelfData);

  process.exit(0);
};

seedDatabase();
