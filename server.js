var faker = require('faker');
var restify = require('restify');
var config = require('./config/config.json');

var models = require('./models');

var server = restify.createServer({
  name: 'seed-the-data',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/products', function (req, res) {
  models.Product.findAll()
    .then(function (products) {
      return res.json(products);
    });
});

server.get('/products/:id', function (req, res) {
  models.Product.findById(req.params.id)
    .then(function (product) {
      if(product) {
        return res.json(product);
      } else {
        res.json({});
      }
    });
});

server.get('/orders', function (req, res, next) {
  models.Product.findAll()
    .then(function (products) {
      return res.json(products);
    });
});

// server.post('/orders', function (req, res, next) {
//   res.send(req.params);
// });

server.get('/orders/:id', function (req, res, next) {
  models.Product.findById(req.params.id)
    .then(function (product) {
      if(product) {
        return res.json(product);
      } else {
        res.json({});
      }
    });
});

server.listen(config.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});