const Joi = require("joi");
// const { objectId } = require("./custom.validation");

const getOrders = {
  query: Joi.object().keys({
    orderId: Joi.number(),
    status: Joi.string(),
    quantity: Joi.number(),
  }),
};

module.exports = { getOrders };
