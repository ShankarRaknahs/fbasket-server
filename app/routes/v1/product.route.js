const express = require("express");
const router = express.Router();
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product.validation");
const productController = require("../../controllers/product.controller");

router
  .route("/")
  .get(validate(productValidation.getProducts), productController.getProducts);

module.exports = router;
