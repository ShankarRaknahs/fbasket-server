const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema, "products");
