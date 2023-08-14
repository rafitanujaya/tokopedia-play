const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/:videoID/products", productController.getProduct);

module.exports = router;
