const catchAsync = require("../utils/catchAsync");
const { ordersService } = require("../services");

const getOrders = catchAsync(async (req, res) => {
  const filter = {};
  const result = await ordersService.queryOrders(filter);
  res.send(result);
});

const patchOrder = catchAsync(async (req, res) => {
  const result = await ordersService.patch(req.params.orderId, req.body);
  res.send(result);
});

module.exports = {
  getOrders,
  patchOrder,
};
