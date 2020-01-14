const addUserToDB = require("../../helpers/addUserToDB");

const signUpUser = (request, response) => {
  let user = addUserToDB(request.body);

  let resp = {
    status: "success",
    user: { email: user.email, name: user.name, id: user.id }
  };

  if (!user) {
    resp = {
      status: "failed",
      message: "User with this email is exist. Try to login",
      user: null
    };
  }

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(resp));
  response.end();
};

module.exports = signUpUser;
