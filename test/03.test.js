let assert = require('assert');

describe('Euler Problem 3 Tests', function() {
  describe('Solve function', function() {
    it('should return 6857 when the input value is 600851475143', function() {
      let solver = require('../src/probs/03.js');
      let result = solver.solve.apply(null, [600851475143]);
      assert.equal(result, 6857);
    });
  });
});
