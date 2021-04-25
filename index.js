"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

/***************************************************************************************
 *                                    Environment setup                                *
 ***************************************************************************************/

const env = process.env.ENV || "dev";
const conf = require("./config/app.config")[env];

/***************************************************************************************
 *                                   connect Database                                  *
 ***************************************************************************************/

const connectDB = require("./app/db");
connectDB(env);

/***************************************************************************************
 * View engine to provide the basic info about the application in production servers   *
 ***************************************************************************************/

app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
});

/***************************************************************************************
 *                                   Whitelist the known IP's                          *
 ***************************************************************************************/

const whitelist = [
  "http://127.0.0.1:3000",
  "http://localhost:3000",
  "https://fbasket.netlify.app/",
];

/***************************************************************************************
 *                                    Network layer                                    *
 ***************************************************************************************/

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/***************************************************************************************
 *                                    Router                                           *
 ***************************************************************************************/

const v1Router = require("./app/routes/v1/index");
const ApiError = require("./app/utils/ApiError");
const httpStatus = require("http-status");

app.use("/v1", v1Router);
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
});

/***************************************************************************************
 *                       Server boot up and port allotment                             *
 ***************************************************************************************/

app.listen(conf.server_port, () => {
  console.log("Fbasket server is running on " + conf.server_port);
});
