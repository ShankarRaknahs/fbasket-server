const { Product } = require("../models");

const queryProducts = async (filter) => {
  const products = await Product.find(filter);
  return products;
};

module.exports = {
  queryProducts,
};
