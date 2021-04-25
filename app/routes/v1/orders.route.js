const express = require("express");
const router = express.Router();
const validate = require("../../middlewares/validate");
const ordersValidation = require("../../validations/orders.validation");
const ordersController = require("../../controllers/orders.controller");

router
  .route("/")
  .get(validate(ordersValidation.getOrders), ordersController.getOrders);

router
  .route("/:orderId")
  .patch(validate(ordersValidation.patchOrder), ordersController.patchOrder);

module.exports = router;
