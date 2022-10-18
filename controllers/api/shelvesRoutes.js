const { Shelf, Location, Product } = require("../../models");
const router = require("express").Router();
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  // find one Location by its `id` value
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Product, through: Shelf }],
    });

    if (!locationData) {
      res.status(404).json({ message: "No location with this id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
