var models = require('../models');
var Product = models.Product;
var faker = require('faker');

models.sequelize
  .sync({ force: true })
  .then(function () {
    Product.bulkCreate({
      name: "Matt",
      description: "Tenga",
      price: 10
    });
    console.log("connected to the database!");
  });