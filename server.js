// Simple command line tool for creating Classes, and then adding students to those Classes.
// example: "server.js add student mark science" This would add the student mark to the class science.
var mongoose = require('mongoose');

var classes = require('./classes');
var students = require('./students');
var Classes = require('./models/classes.js');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/modular');

function errors() {

  if (!addRemove || !(addRemove.toString() === 'add' || addRemove.toString() === 'remove')) {
    console.log('Please specify if you want to add or remove');
    process.exit();
  }

  else if (!studentOrClass || !(studentOrClass.toString() === 'student' || studentOrClass.toString() === 'class')) {
    console.log('Please specify if you want to add/remove a class or student');
    process.exit();
  }

  else if (!subject) {
    console.log('Please specify something to add/remove. Example: add student Mark');
    process.exit();
  }
  else if (studentOrClass === 'student' && !studentClass) {
    console.log('Please specify a class to add student too.');
    process.exit();
  }
}

function add(type) {
  var which = type === 'student' ? students.addStudent(subject, studentClass) : classes.addClass(subject);
}

function remove(type) {
  var which = type === 'student' ? students.removeStudent(subject) : classes.removeClass(subject);
}

function doIt() {
  errors();

  var which = addRemove.toString() === 'add' ? add(studentOrClass) : remove(studentOrClass);
  var classList = Classes.find({'class': studentClass || subject}, function(err, data) {
    if (err) console.log('no classes');
    console.log('Students in ' + studentClass || subject);
    var students = data[0].students;
    console.log(students);
    process.exit();
  });

}

doIt();
