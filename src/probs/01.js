// https://projecteuler.net/problem=1
exports.solve = function (...args) {
    var limit = args[0] || 1000;

    var sum = 0;
    for (var i = 1; i < limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }

    return sum;
}