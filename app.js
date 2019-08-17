var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.json());

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  // CONNECTED TO MONGODB SERVER
  console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/mongodb_tutorial', {
  useNewUrlParser: true
});

var Book = require('./models/book');

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 4001;

// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book);

// [RUN SERVER]
var server = app.listen(port, function() {
  console.log('Express server has started on port ' + port);
});
