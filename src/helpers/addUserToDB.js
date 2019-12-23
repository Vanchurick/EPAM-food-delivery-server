const fs = require("fs");
const path = require("path");
const shortId = require("shortid");

addUserToDB = user => {
  const filePath = path.join(__dirname, "..", "db", "users", "users.json");
  const bufferData = fs.readFileSync(filePath);
  const users = JSON.parse(bufferData);

  const isUserExist = users.some(el => el.email === user.email);

  if (isUserExist) {
    return !isUserExist;
  }

  user.id = shortId();
  users.push(user);

  fs.writeFileSync(filePath, JSON.stringify(users));

  return user;
};

module.exports = addUserToDB;
