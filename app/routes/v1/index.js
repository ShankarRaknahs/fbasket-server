const express = require("express");
const router = express.Router();
const productRoute = require("./product.route");
const ordersRoute = require("./orders.route");
const userRoute = require("./user.route");

const defaultRoutes = [
  {
    path: "/products",
    route: productRoute,
  },
  {
    path: "/customers",
    route: userRoute,
  },
  {
    path: "/orders",
    route: ordersRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
