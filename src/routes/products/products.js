const url = require("url");
const getProducts = require("../../helpers/getProducts");
const getCategory = require("../../helpers/getCategory");

const productsRoute = (request, response) => {
  const parsedUrl = url.parse(request.url);

  const category = getCategory(parsedUrl.query);

  const products = getProducts(category);

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(products));
  response.end();
};

module.exports = productsRoute;
