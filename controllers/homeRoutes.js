const { Location } = require("../models");
const withAuth = require("../utils/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/landingpage");
    return;
  }
  res.render("login");
});
router.get("/locations", withAuth, async (req, res) => {
  const locationData = await Location.findAll({ raw: true });
  res.render("locations", { locations: locationData });
});
router.get("/backstock", withAuth, (req, res) => {
  res.render("backstock");
});
router.get("/landingpage", withAuth, (req, res) => {
  res.render("landingpage");
});

module.exports = router;
