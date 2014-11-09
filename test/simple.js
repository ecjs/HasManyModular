process.env.MONGO_URL = 'mongodb://localhost/notes_test';
var Classes = require('../models/classes.js');
var chai = require('chai');

var expect = chai.expect;

var spawn = require('child_process');
spawn.exec('node ../server.js add student mark science', function(err, stdout, stdin) {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
});
