const Seqeuelize = require("sequelize");

const sequelize = require("../utils/database");

const User = sequelize.define("user", {
  id: {
    type: Seqeuelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Seqeuelize.STRING,
  email: Seqeuelize.STRING,
});

module.exports = User;
