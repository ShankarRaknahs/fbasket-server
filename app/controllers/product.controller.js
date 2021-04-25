const catchAsync = require("../utils/catchAsync");
const { productService } = require("../services");

const getProducts = catchAsync(async (req, res) => {
  const filter = {};
  const result = await productService.queryProducts(filter);
  res.send(result);
});

module.exports = {
  getProducts,
};
