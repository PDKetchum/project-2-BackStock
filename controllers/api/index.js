const router = require("express").Router();
const userRoutes = require("./userRoutes");
const locationRoutes = require("./locationsRoutes");
const productRoutes = require("./productsRoutes");

router.use("/user", userRoutes);
router.use("/location", locationRoutes);
router.use("/product", productRoutes);

module.exports = router;
