const express = require("express");
const router = express.Router();
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product.validation");
const productController = require("../../controllers/product.controller");

router
  .route("/")
  .get(validate(productValidation.getProducts), productController.getProducts);

router
  .route("/:productId")
  .post(validate(productValidation.postProduct), productController.postProduct);

router
  .route("/sold")
  .get(
    validate(productValidation.getSoldProducts),
    productController.getSoldProducts
  );

module.exports = router;
