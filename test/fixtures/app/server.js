var express = require('express');
var path = require('path');

var testApp = express();
var port = 3001;
var testAppDir = path.resolve(__dirname, 'client');
var storage = {}

testMiddleware = function(req,res, next) {
  if (req.method === 'GET') {
    var value;
    if (req.query.q) {
      value = storage[req.query.q];
      res.send(200, value);
    } else {
      res.send(400, 'must specify query');
    }
  } else if (req.method === 'POST') {
    if (req.body.key && req.body.value) {
      storage[req.body.key] = req.body.value;
      res.send(200);
    } else {
      res.send(400, 'must specify key/value pair');
    }
  } else {
    res.send(400, 'only accepts GET/POST');
  }

}

testApp.configure(function() {
  testApp.use(express.static(testAppDir));
  testApp.use(express.json());
  testApp.use(testMiddleware);
});

module.exports = {
  start: function (optionalPort) {
    testApp.listen(optionalPort || port);
  }
}
