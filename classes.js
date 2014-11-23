var mongoose = require('mongoose');
var Classes = require('./models/classes.js');

module.exports = {
  addClass: function(name) {
    var newclass = new Classes();
    newclass.class = name;
    newclass.save(function(err, data) {
      if (err) console.log('couldnt create class');
    });
    console.log('class added: ' + name);
  },
  removeClass: function(name) {
    console.log('class removed: ' + name);
  }
};
