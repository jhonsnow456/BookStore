const Sequelize = require("sequelize");

const sequelize = new Sequelize("bookstore", "root", "amanthakur", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
