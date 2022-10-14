const router = require("express").Router();
const { Location } = require("../../models");

// The `/api/locations` endpoint

router.get("/", async (req, res) => {
  // find all Locations
  try {
    const locationData = await Location.findAll({});
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one Location by its `id` value
  try {
    const locationData = await Location.findByPk(req.params.id, {
      // include: [{ model: Product }],
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

router.post("/", async (req, res) => {
  // create a new Location
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a Location by its `id` value
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
