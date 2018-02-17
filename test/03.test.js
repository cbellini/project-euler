var assert = require('assert');

describe('Euler Problem 3 Tests', function() {
  describe('Solve function', function() {
    it('should return 6857 when the input value is 600851475143', function() {
      var solver = require('../src/probs/03.js');
      var result = solver.solve.apply(null, [600851475143]);
      assert.equal(result, 6857);
    });
  });
});