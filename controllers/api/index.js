const router = require("express").Router();
const employeeRoutes = require("./employeeRoutes");
const locationRoutes = require("./locationsRoutes");
const productRoutes = require("./productsRoutes");

router.use("/employee", employeeRoutes);
router.use("/location", locationRoutes);
router.use("/product", productRoutes);

module.exports = router;
