const fs = require("fs");
const path = require("path");

const loginUser = (request, response) => {
  const filePath = path.join(__dirname, "../..", "db", "users", "users.json");
  const bufferData = fs.readFileSync(filePath);
  const users = JSON.parse(bufferData);

  const user = request.body;

  const isUserExist = users.find(
    el => el.email === user.email && el.password === user.password
  );

  let resp = {
    answer: "Login succes",
    login: true,
    user: isUserExist
  };

  if (!isUserExist) {
    resp = { answer: "Login fail", login: false, user };
  }

  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.write(JSON.stringify(resp));
  response.end();
};

module.exports = loginUser;
