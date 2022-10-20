const sequelize = require("../config/connection");
const { Location, Product, User } = require("../models");
const withAuth = require("../utils/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect("/homepage");
    return;
  }
  res.render("login");
});

// Render each location from database to Locations page
router.get("/locations", withAuth, async (req, res) => {
  const locationData = await Location.findAll({ raw: true });
  res.render("locations", {
    locations: locationData,
    logged_in: req.session.logged_in,
  });
});

// Add the User's name to the homepage
router.get("/homepage", withAuth, async (req, res) => {
  res.render("homepage", {
    userName: req.session.user_name,
    logged_in: req.session.logged_in,
  });
});

// Renders all products to the individual locations page based on id
router.get("/backstock/:id", withAuth, async (req, res) => {
  try {
    const driverData = await Location.findByPk(req.params.id, {
      where: {
        location_id: req.params.id,
      },
      include: [{ model: Product, attributes: ["name", "quantity"] }, User],
    });

    const shelf = driverData.get({ plain: true });
    if (!driverData) {
      res.status(404).json({ message: "No table found with that ID!" });
      return;
    }
    res.render("backstock", {
      Products: shelf,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
