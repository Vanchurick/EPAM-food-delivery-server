const fs = require("fs");
const path = require("path");

const getProducts = category => {
  const filePath = path.join(
    __dirname,
    "..",
    "db",
    "products",
    "products.json"
  );

  const bufferData = fs.readFileSync(filePath);
  const products = JSON.parse(bufferData);

  return products[category];
};

module.exports = getProducts;
