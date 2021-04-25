const { Order } = require("../models");

const queryOrders = async (filter) => {
  const orders = await Order.find(filter);
  return orders;
};

const patch = async (orderId, data) => {
  const filter = { orderId: orderId };
  const result = await Order.findOneAndUpdate(filter, data);
  return result;
};

module.exports = {
  queryOrders,
  patch,
};
