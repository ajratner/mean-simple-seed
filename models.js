var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exampleSchema = new Schema({
  stringVal: String,
  arrayVal: Array,
});

module.exports = {
  Example : mongoose.model('Example', exampleSchema)
}
