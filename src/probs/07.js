// https://projecteuler.net/problem=7
exports.solve = function(...args) {
    let primeToFind = args[0] || 10001;

    /**
    * Generate prime numbers.
    */
    function* primes() {
        let n = 2;

        while (true) {
          if (isPrime(n)) yield n;
          n++;
        }

        /**
         * Add two numbers.
         * @param {number} num The input number.
         * @return {boolean} Return true if the number is prime.
         */
        function isPrime(num) {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
              return false;
            }
          }
          return true;
        }
    }

    /**
     * Generate results from a generator function.
     * @param {number} limit The number of results to generate.
     * @param {function} iterable The generator function.
     * @yield {array} List of generated results.
     */
    function* take(limit, iterable) {
        for (let x of iterable) {
          if (limit <= 0) {
            return;
          }

          limit--;
          yield x;
        }
    }

    let primeNumbers = [...take(primeToFind, primes())];

    return primeNumbers.slice(-1)[0];
};
