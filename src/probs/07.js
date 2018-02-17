// https://projecteuler.net/problem=7
exports.solve = function (...args) {
    var primeToFind = args[0] || 10001;

    function* primes() {
        let n = 2;

        while (true) {
          if (isPrime(n)) yield n;
          n++;
        }

        function isPrime(num) {
          for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
              return false;
            }
          }
          return true;
        }
    }

    function* take(limit, iterable) {
        for (let x of iterable) {
          if (limit <= 0){
            return;
          }

          limit--;
          yield x;
        }
    }

    var primes = [...take(primeToFind, primes())];

    return primes.slice(-1)[0];
}