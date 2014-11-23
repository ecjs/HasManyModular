var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
  class: String,
  students:[{type: String}]
});

module.exports = mongoose.model('Class', classSchema);
