var models = require('../models');
var Product = models.Product;
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
  });