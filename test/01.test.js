var assert = require('assert');

describe('Euler Problem 1 Tests', function() {
  describe('Solve function', function() {
    it('should return 233168 when the input value is 1000', function() {
      var solver = require('../src/probs/01.js');
      var result = solver.solve.apply(null, [1000]);
      assert.equal(result, 233168);
    });
  });
});