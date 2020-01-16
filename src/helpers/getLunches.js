const fs = require("fs");
const path = require("path");

const getLunches = params => {
  const limit = 3;
  const page = parseInt(params.page);

  const filePath = path.join(__dirname, "..", "db", "lunches", "lunches.json");
  const bufferData = fs.readFileSync(filePath);
  let lunches = JSON.parse(bufferData);

  if (params.category) {
    lunches = lunches.filter(el => el.category === params.category);
  }

  if (params.sort && params.sort === "expensive") {
    lunches.sort((a, b) => {
      const sumA = a.menu.reduce((acc, el) => acc + el.price, 0);
      const sumB = b.menu.reduce((acc, el) => acc + el.price, 0);
      return sumA - sumB;
    });
  }

  if (params.sort && params.sort === "cheap") {
    lunches.sort((a, b) => {
      const sumA = a.menu.reduce((acc, el) => acc + el.price, 0);
      const sumB = b.menu.reduce((acc, el) => acc + el.price, 0);
      return sumB - sumA;
    });
  }

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};

  if (lastIndex < lunches.length) {
    results.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    };
  }

  results.result = lunches.slice(startIndex, lastIndex);
  results.amount = lunches.length;

  return results;
};

module.exports = getLunches;
