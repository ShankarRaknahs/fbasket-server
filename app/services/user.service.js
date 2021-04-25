const { User } = require("../models");

const getUserById = async (customerId) => {
  return User.find({ customerId: customerId });
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

module.exports = {
  getUserById,
  getUserByEmail,
};
