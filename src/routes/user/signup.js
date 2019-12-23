const addUserToDB = require("../../helpers/addUserToDB");

const signUpUser = (request, response) => {
  let resp = addUserToDB(request.body);

  if (!resp) {
    resp = {
      answer: "Such user is exist already, try to login",
      signup: false,
      user: request.body
    };
  }

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(resp));
  response.end();
};

module.exports = signUpUser;
