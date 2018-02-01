const router = require("express").Router();
const productController = require("../../controllers/productController");

// Matches with "/api/product"
router
  .route("/")
  .get(productController.findAll)

module.exports = router;
