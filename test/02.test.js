let assert = require('assert');

describe('Euler Problem 2 Tests', function() {
  describe('Solve function', function() {
    it('should return 4613732 when the input value is 4000000', function() {
      let solver = require('../src/probs/02.js');
      let result = solver.solve.apply(null, [4000000]);
      assert.equal(result, 4613732);
    });
  });
});
