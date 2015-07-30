var models = require('../models');
var Product = models.inventory;
var faker = require('faker');

models.sequelize
  .sync({ force: true })
  .then(function () {
    var inventoryArray = [];
    for (var i = 0; i < 10; i += 1) {
      inventoryArray.push({
        quantity: parseFloat(faker.random.number())
      });
    }

    Product.bulkCreate(productArray);
    console.log("connected to the database!");
  });