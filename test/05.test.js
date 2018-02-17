var assert = require('assert');

describe('Euler Problem 5 Tests', function() {
  describe('Solve function', function() {
    it('should return 232792560 as the smallest positive number that is evenly divisible by all of the numbers from 1 to 20', function() {
      var solver = require('../src/probs/05.js');
      var result = solver.solve.apply(null, [1, 20]);
      assert.equal(result, 232792560);
    });
  });
});