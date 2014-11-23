var mongoose = require('mongoose');
var Classes = require('./models/classes.js');

module.exports = {
  addStudent: function(name, classes) {
    Classes.findOne({class: classes}, function(err, data) {
      if (err) console.log(err);
      data.students.push(name);
      data.save(function(err) {
        if (err) return console.log('error adding student');
        console.log('added student: ' + name);
      });
    }
);
  },
  removeStudent: function(name) {
    console.log('student removed: ' + name);
  }
};
