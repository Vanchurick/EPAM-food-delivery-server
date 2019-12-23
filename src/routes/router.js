const express = require("express");
const apiRoutes = express.Router();

const productsRoute = require("./products/products");
const signUpUser = require("./user/signup");
const loginUser = require("./user/loginUser");

apiRoutes
  .get("/products", productsRoute)
  .get("/login", loginUser)
  .post("/signup", signUpUser)
  .get("*", (req, res, next) => {
    res.status(404).send("Route not exists");
  });

module.exports = apiRoutes;
