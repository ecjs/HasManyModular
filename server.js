//
var mongoose = require('mongoose');

var classes = require('./classes');
var students = require('./students');
var Classes = require('./models/classes.js');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/modular');

exports.modify = function(addRemove, studentOrClass, subject, studentClass) {
  function errors() {

    if (!addRemove || !(addRemove.toString() === 'add' || addRemove.toString() === 'remove')) {
      return console.log('Please specify if you want to add or remove');
    }

    else if (!studentOrClass || !(studentOrClass.toString() === 'student' || studentOrClass.toString() === 'class')) {
      return console.log('Please specify if you want to add/remove a class or student');
    }

    else if (!subject) {
      return console.log('Please specify something to add/remove. Example: add student Mark');
    }
    else if (studentOrClass === 'student' && !studentClass) {
      return console.log('Please specify a class to add student too.');
    }
  }

  function add(type) {
    var which = type === 'student' ? students.addStudent(subject, studentClass) : classes.addClass(subject);
  }

  function remove(type) {
    var which = type === 'student' ? students.removeStudent(subject) : classes.removeClass(subject);
  }

  errors();
  var studentList;
  var which = addRemove.toString() === 'add' ? add(studentOrClass) : remove(studentOrClass);
};
