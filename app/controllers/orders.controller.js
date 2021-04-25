const catchAsync = require("../utils/catchAsync");
const { ordersService } = require("../services");

const getOrders = catchAsync(async (req, res) => {
  const filter = {};
  const result = await ordersService.queryOrders(filter);
  res.send(result);
});

module.exports = {
  getOrders,
};
