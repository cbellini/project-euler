var assert = require('assert');

describe('Euler Problem 2 Tests', function() {
  describe('Solve function', function() {
    it('should return 4613732 when the input value is 4000000', function() {
      var solver = require('../src/probs/02.js');
      var result = solver.solve.apply(null, [4000000]);
      assert.equal(result, 4613732);
    });
  });
});