/* Contains the logic for creating, reading, updating, and deleting 
items (CRUD). It is separated out from the HTTP routes that HTTP logic doesn't 
get mixed with application logic */

var Item = require('../models/item');

// Adds item to the database
exports.save = function(name, callback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, item);
    });
};

// Fetches item from the database
exports.list = function(callback) {
    Item.find(function(err, items) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, items);
    });
};

exports.del = function(name, callback) {
    Item.findByIdAndRemove(name, function(err, item) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, item);
    });


}