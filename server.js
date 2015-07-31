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

server.get('/products', function (req, res, next) {
  res.send(req.params);
});

server.get('/products/:id', function (req, res, next) {
  res.send(req.params);
});

server.get('/orders', function (req, res, next) {
  res.send(req.params);
});

server.get('/orders/:id', function (req, res, next) {
  res.send(req.params);
});

server.listen(config.port, function () {
  console.log('%s listening at %s', server.name, server.url);
});