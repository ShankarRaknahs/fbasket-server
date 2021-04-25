const Joi = require("joi");
// const { objectId } = require("./custom.validation");

const getProducts = {
  query: Joi.object().keys({
    product_id: Joi.number(),
    name: Joi.string(),
    quantity: Joi.number(),
  }),
};

const postProduct = {
  query: Joi.object().keys({
    product_id: Joi.number(),
    name: Joi.string(),
    quantity: Joi.number(),
  }),
};

const getSoldProducts = {
  query: Joi.object().keys({
    product_id: Joi.number(),
    name: Joi.string(),
    quantity: Joi.number(),
  }),
};

module.exports = { getProducts, postProduct, getSoldProducts };
