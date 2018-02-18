let assert = require('assert');

describe('Euler Problem 6 Tests', function() {
  describe('Solve function', function() {
    it(`should return 25164150 difference between the sum of the squares of
      the first 100 natural numbers and the square of the sum`, function() {
        let solver = require('../src/probs/06.js');
        let result = solver.solve.apply(null, [100]);
        assert.equal(result, 25164150);
    });
  });
});
