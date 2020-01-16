const getLunches = require("../../helpers/getLunches");

const lunchesRoute = (request, response) => {
  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(getLunches(request.query)));
  response.end();
};

module.exports = lunchesRoute;
