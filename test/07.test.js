let assert = require('assert');

describe('Euler Problem 7 Tests', function() {
  describe('Solve function', function() {
    it('should return 104743 as the 10001st prime number', function() {
      let solver = require('../src/probs/07.js');
      let result = solver.solve.apply(null, [10001]);
      assert.equal(result, 104743);
    });
  });
});
