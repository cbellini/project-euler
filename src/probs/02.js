// https://projecteuler.net/problem=2
exports.solve = function (...args) {
    var limit = args[0] || 4000000;
    var prev = 1, curr = 2, next = 0, sum = 2;

    do {
        next = prev + curr;
        if (next % 2 === 0) {
            sum += next;
        }

        prev = curr;
        curr = next;
    } while (next <= limit);

    return sum;
}