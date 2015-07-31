var faker = require('faker');
var restify = require('restify');

var models = require('./models');

var server = restify.createServer({
  name: 'seed-the-data',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

// server.get('/echo/:name', function (req, res, next) {
//   res.send(req.params);
//   return next();
// });

// server.get('/echo/:name', function (req, res, next) {
//   res.send(req.params);
//   return next();
// });

// server.listen(8080, function () {
//   console.log('%s listening at %s', server.name, server.url);
// });