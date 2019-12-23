const express = require("express");
const app = express();

const { expressAppErrorHandler } = require("./helpers/errorHandlers");

const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/router");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", router)
    .use(expressAppErrorHandler);

  app.listen(port);

  console.log("Server was started at http://localhost:" + port);
};

module.exports = startServer;
