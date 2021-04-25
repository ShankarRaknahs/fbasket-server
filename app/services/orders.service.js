const { Order } = require("../models");

const queryOrders = async (filter) => {
  const orders = await Order.find(filter);
  return orders;
};

module.exports = {
  queryOrders,
};
