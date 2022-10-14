const router = require("express").Router();
const { Product, User, Location, Shelf } = require("../../models");

// The `/api/products` endpoint

// get all products
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      // include: [
      //   { model: User, through: Shelf, attributes: ["name"] },
      //   { model: Location, through: Shelf, attributes: ["id"] },
      // ],
    });
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// get one product by id
router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: User, through: Shelf, attributes: ["name"] },
        { model: Location, through: Shelf, attributes: ["id"] },
      ],
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post("/", async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update product by id
router.put("/:id", async (req, res) => {
  try {
    let productData = await Product.findByPk(req.params.id);

    if (productData) {
      productData.quantity += req.body.quantity;
      productData = await Product.update(productData);
    } else {
      productData = await Product.create(req.body);
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete product by id
router.delete("/:id", async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with that id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
