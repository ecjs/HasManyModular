process.env.MONGO_URL = 'mongodb://localhost/modular_test';
var chai = require('chai');
var expect = chai.expect;
var hasMany = require('../server.js');
var Classes = require('../models/classes.js');

Classes.remove({}, function(err) {
  console.log('collection removed');
});

describe('demonstrate has many', function() {
  before(function(done) {
    hasMany.modify('add', 'class', 'science');
    hasMany.modify('add', 'class', 'math');
    done();
  });
  it('should be able to add a class', function(done) {
    Classes.findOne({class:'science'}, function(err, doc) {
      expect(doc.class).to.equal('science');
      hasMany.modify('add', 'student', 'mark', 'science');
      hasMany.modify('add', 'student', 'bob', 'science');
      done();
    });
  });
  it('should be able to add a student', function(done) {
    Classes.findOne({class:'science'}, function(err, doc) {
      expect(doc.students[0]).to.equal('mark');
      expect(doc.students[1]).to.equal('bob');
      done();
    });
  });
  it('should be able have multiple classes', function(done) {
    Classes.findOne({class:'math'}, function(err, doc) {
      expect(doc.class).to.equal('math');
      done();
    });
  });

});
