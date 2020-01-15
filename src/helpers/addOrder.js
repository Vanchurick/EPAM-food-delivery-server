const fs = require("fs");
const path = require("path");

const addOrder = data => {
  const filePath = path.join(__dirname, "..", "db", "users", "users.json");
  const bufferData = fs.readFileSync(filePath);
  const users = JSON.parse(bufferData);

  const isUserExist = users.some(el => el.id === data.id);

  if (!isUserExist) {
    return { status: "failed", message: "No user" };
  }

  users.forEach(el => {
    if (el.id === data.id) {
      el.order = data.order;
      el.adress = data.adress;
      el.name = data.name;
      el.email = data.email;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(users));

  return { status: "success", message: "Order added" };
};

module.exports = addOrder;
