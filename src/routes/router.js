const express = require("express");
const apiRoutes = express.Router();

const productsRoute = require("./products/products");
const signUpUser = require("./user/signup");
const loginUser = require("./user/loginUser");
const orderRoute = require("./order/order");
const lunchesRoute = require("./lunches/lunches.js");

apiRoutes
  .get("/menu", productsRoute)
  .get("/lunches", lunchesRoute)
  .post("/login", loginUser)
  .post("/signup", signUpUser)
  .post("/order", orderRoute)
  .get("*", (req, res, next) => {
    res.status(404).send("Route not exists");
  });

module.exports = apiRoutes;
