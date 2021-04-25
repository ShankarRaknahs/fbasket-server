const { Product } = require("../models");

const queryProducts = async (filter) => {
  const products = await Product.find(filter);
  return products;
};

const post = async (productId, data) => {
  const filter = { product_id: productId };
  const result = await Product.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true,
  });
  return result;
};

module.exports = {
  queryProducts,
  post,
};
