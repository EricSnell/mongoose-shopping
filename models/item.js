// Require the Mongoose module
var mongoose = require('mongoose');
// 'Schema' object that describes the attributes 
var ItemSchema = new mongoose.Schema({
    name: { type: String, required: true }
});
// 'Model' used to construct and query documents that takes the
// schema as an argument so it can validate the inputs
var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;

