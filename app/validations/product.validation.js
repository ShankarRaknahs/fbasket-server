const Joi = require("joi");
// const { objectId } = require("./custom.validation");

const getProducts = {
  query: Joi.object().keys({
    product_id: Joi.number(),
    orderId: Joi.number(),
    name: Joi.string(),
    quantity: Joi.number(),
  }),
};

module.exports = { getProducts };
