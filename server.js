// Connects us to the Mongo database
require('./db/connect');

var express = require('express');
var bodyParser = require('body-parser');
var itemRoutes = require('./routes/item');
var app = express();

// Setting up middleware to parse the HTTP request body into JSON
app.use(bodyParser.json());
// Serves the static files
app.use(express.static('public'));
// Item routes
app.use('/', itemRoutes);
// 404 status page as a catch call
app.use('*', function(req, res) {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(8080, function() {
    console.log('Listening on port 8080');
});

exports.app = app;