var models = require('../models');
var Inventory = models.Inventory;
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
    Inventory.bulkCreate(inventoryArray);
    console.log("connected to the database!");
  });