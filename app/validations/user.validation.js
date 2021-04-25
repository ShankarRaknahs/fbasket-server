const Joi = require("joi");

const getUser = {
  params: Joi.object().keys({
    customerId: Joi.string(),
  }),
};

module.exports = {
  getUser,
};
