// https://projecteuler.net/problem=6
exports.solve = function (...args) {
    var maxNaturalNumbers = args[0] || 100;
    var sumOfSquares = 0, squareOfSum = 0, difference = 0;

    for (var i = 1; i <= maxNaturalNumbers; i++) {
        sumOfSquares += Math.pow(i, 2);
        squareOfSum += i;
    }

    squareOfSum = Math.pow(squareOfSum, 2);
    difference = squareOfSum - sumOfSquares;

    return difference;
}