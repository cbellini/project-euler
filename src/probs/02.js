// https://projecteuler.net/problem=2
exports.solve = function(...args) {
    let limit = args[0] || 4000000;
    let prev = 1;
    let curr = 2;
    let next = 0;
    let sum = 2;

    do {
        next = prev + curr;
        if (next % 2 === 0) {
            sum += next;
        }

        prev = curr;
        curr = next;
    } while (next <= limit);

    return sum;
};
