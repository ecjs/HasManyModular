var mongoose = require('mongoose');
var Classes = require('./models/classes.js');

module.exports = {
  addStudent: function(name, classes) {
    Classes.findOneAndUpdate(
    {class: classes},
    {$push: {students: name}},
    {safe: true, upsert: true},
    function(err) {
      if (err) console.log(err);
    }
);
    console.log('added student: ' + name);
  },
  removeStudent: function(name) {
    console.log('student removed: ' + name);
  }
};
