let assert = require('assert');

describe('Euler Problem 4 Tests', function() {
  describe('Solve function', function() {
    it(`should return 906609 as the largest palindrome made from the product
        of two 3-digit numbers`, function() {
          let solver = require('../src/probs/04.js');
          let result = solver.solve.apply(null);
          assert.equal(result, 906609);
    });
  });
});
