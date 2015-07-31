var models = require('../models');
var Product = models.Product;
var Inventory = models.Inventory;
var faker = require('faker');

models.sequelize
  .sync({ force: true })
  .then(function () {
    var productArray = [];
    for (var i = 0; i < 10; i += 1) {
      productArray.push({
        name: faker.commerce.productName(),
        description: faker.commerce.productAdjective() + " " + faker.commerce.productMaterial() ,
        price: parseFloat(faker.commerce.price())
      });
    }

    Product.bulkCreate(productArray);
    console.log("connected to the database!");
  })
  .then(function () {
    var inventoryArray = [];
    for (var i = 0; i < 10; i += 1) {
      inventoryArray.push({
        quantity: faker.random.number(),
        product_id: i + 1
      });
    }
    Inventory.bulkCreate(inventoryArray);
    console.log("connected to the database!");
  });