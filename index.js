const express = require("express");
const app = express();
const data = require("./temp.json");
const cors = require("cors");

var port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});

const whitelist = [
  "http://127.0.0.1:3000",
  "http://localhost:3000",
  "https://fbasket.netlify.app/",
];
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.get("/v1/products", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.get("/v1/orders", function (req, res) {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log("Fbasket server is running on " + port);
});
