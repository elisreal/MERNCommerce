const router = require("express").Router();
const productRoutes = require("./products");
const homeRoutes = require("./home");

// routes
router.use("/products", productRoutes);

// router.use("/home", homeRoutes);

module.exports = router;
