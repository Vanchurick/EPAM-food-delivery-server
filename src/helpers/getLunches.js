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
      return sumB - sumA;
    });
  }

  if (params.sort && params.sort === "cheap") {
    lunches.sort((a, b) => {
      const sumA = a.menu.reduce((acc, el) => acc + el.price, 0);
      const sumB = b.menu.reduce((acc, el) => acc + el.price, 0);
      return sumA - sumB;
    });
  }

  const startIndex = (page - 1) * limit;
  const lastIndex = page * limit;

  const results = {};

  results.result = lunches.slice(startIndex, lastIndex);

  if (lastIndex < lunches.length) {
    results.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0 && results.result.length !== 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    };
  }

  results.amount = lunches.length;
  results.currentPage = page;

  if (results.result.length === 0) {
    results.result = lunches.slice(0, limit);
    results.currentPage = 1;
  }

  return results;
};

module.exports = getLunches;
