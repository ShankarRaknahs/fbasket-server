const express = require("express");
const router = express.Router();
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

router
  .route("/:customerId")
  .get(validate(userValidation.getUser), userController.getUser);

module.exports = router;
