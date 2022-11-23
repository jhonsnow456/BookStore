const Seqeuelize = require("sequelize");

const sequelize = require("../utils/database");

const Product = sequelize.define("product", {
  id: {
    type: Seqeuelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Seqeuelize.STRING,
  price: {
    type: Seqeuelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Seqeuelize.STRING,
    allowNull: false,
  },
  description: {
    type: Seqeuelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
