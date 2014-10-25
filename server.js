var mongoose = require('mongoose');
var express = require('express');
var app = express();

// Set public directory
app.use(express.static(__dirname + '/public'));

// Connect to mongoDB database
mongoose.connect('mongodb://localhost/test-db');

// data models
var models = require('./models');

// example of simple GET API
app.get('/api/examples', function (req, res) {
  models.Example.find(function(err, examples) {
    if (err)
      res.send(err);
    res.json(examples);
  });
});

// all other routes -> go to angular
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// run server!
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening @ http://%s:%s', host, port);
});
