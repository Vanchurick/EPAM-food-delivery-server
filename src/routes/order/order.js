const addOrder = require("../../helpers/addOrder");

const order = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(addOrder(request.body)));
  response.end();
};

module.exports = order;
