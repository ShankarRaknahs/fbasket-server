const catchAsync = require("../utils/catchAsync");
const { productService } = require("../services");
const { ordersService } = require("../services");

const getProducts = catchAsync(async (req, res) => {
  const filter = {};
  const result = await productService.queryProducts(filter);
  res.send(result);
});

const postProduct = catchAsync(async (req, res) => {
  const result = await productService.post(req.params.productId, req.body);
  res.send(result);
});

const getSoldProducts = catchAsync(async (req, res) => {
  const filter = {};
  const orders = await ordersService.queryOrders(filter);
  const products = await productService.queryProducts(filter);
  const result = await productService.getSold(orders, products);
  res.send(result);
});

module.exports = {
  getProducts,
  postProduct,
  getSoldProducts,
};
