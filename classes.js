var mongoose = require('mongoose');
var Classes = require('./models/classes.js');

module.exports = {
  addClass: function(name) {
    var newclass = new Classes();
    newclass.class = name;
    newclass.students = [];
    newclass.save(function(err, data) {
      if (err) console.log('couldnt create class: ' + err);
      console.log('class added: ' + name);
    });
  }
};
