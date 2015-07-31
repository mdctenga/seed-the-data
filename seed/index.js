var models = require('../models');
var Product = models.Product;
var Inventory = models.Inventory;
var Order = models.Order;
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

    console.log("seeding products!");
    Product.bulkCreate(productArray);
  })
  .then(function () {
    var inventoryArray = [];
    for (var i = 0; i < 10; i += 1) {
      inventoryArray.push({
        quantity: faker.random.number(),
        product_id: i + 1
      });
    }
    console.log("seeding inventory!");
    Inventory.bulkCreate(inventoryArray);
  })
  .then(function () {
    var orderArray = [];
    for (var i = 0; i < 10; i += 1) {
      orderArray.push({
        name: faker.name.firstName(),
        quantity: faker.random.number(),
        product_id: i + 1
      });
    }
    console.log("seeding order!");
    Order.bulkCreate(orderArray);
  });