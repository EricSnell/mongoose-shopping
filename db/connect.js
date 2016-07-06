/* The logic for connecting to the database. We will require this anywhere
that needs to connect to the database */

var mongoose = require('mongoose');
var env = require('../environment');
var config = require('./config');

mongoose.connect(config[env].url);