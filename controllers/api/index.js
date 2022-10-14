const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const locationRoutes = require("./locationsRoutes");
const productRoutes = require("./productsRoutes");
const shelvesRoutes = require("./shelvesRoutes");

router.use("/user", userRoutes);
router.use("/location", locationRoutes);
router.use("/product", productRoutes);
router.use("/shelves", shelvesRoutes);

module.exports = router;
