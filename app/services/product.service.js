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

const getSold = async (orders, products) => {
  const result = [];
  await orders.map((order) => {
    const orderedProducts = order.get("products");
    for (let orderedProduct of orderedProducts) {
      const matchingProducts = products.filter(
        (product) => product.product_id === orderedProduct.productId
      );
      const productName =
        matchingProducts.length > 0 ? matchingProducts[0].name : "";

      const soldProductObj = {
        orderId: order.get("orderId"),
        customerId: order.get("customerId"),
        product_id: orderedProduct.productId,
        name: productName,
        quantity: orderedProduct.qty,
        soldPrice: orderedProduct.soldPrice,
        status: order.get("status"),
        date: order.get("date"),
      };

      result.push(soldProductObj);
    }
  });
  return result;
};

module.exports = {
  queryProducts,
  post,
  getSold,
};
