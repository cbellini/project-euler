// https://projecteuler.net/problem=5

/**
 * Find the greatest common divisor of two numbers.
 * @param {number} x The first input number.
 * @param {number} y The second input number.
 * @return {number} The greatest common divisor.
 */
function greatestCommonDivisor(x, y) {
    while (y != 0) {
        let z = x % y;
        x = y;
        y = z;
    }

    return x;
}

exports.solve = function(...args) {
    let start = args[0] || 1;
    let end = args[1] || 20;
    let number = 1;
    for (let i = start; i <= end; i++) {
        number = (number * i) / greatestCommonDivisor(number, i);
    }

    return number;
};
