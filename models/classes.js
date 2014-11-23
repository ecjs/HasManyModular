var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
  class: String,
  students:[{name: String}]
});

module.exports = mongoose.model('Class', classSchema);
