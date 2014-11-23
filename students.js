var mongoose = require('mongoose');
var Classes = require('./models/classes.js');

module.exports = {
  addStudent: function(name, classes) {
    Classes.findOne({class: classes}, function(err, data) {
      if (err) console.log(err);
      data.students.push(name);
      console.log('current students' + data.students);
      data.save(function(err) {
        if (err) return console.log('error adding student: ' + err);
        console.log('added student: ' + name);
        console.log(data.students);
      });
    }
);
  }
};
