// https://projecteuler.net/problem=6
exports.solve = function(...args) {
    let maxNaturalNumbers = args[0] || 100;
    let sumOfSquares = 0;
    let squareOfSum = 0;
    let difference = 0;

    for (let i = 1; i <= maxNaturalNumbers; i++) {
        sumOfSquares += Math.pow(i, 2);
        squareOfSum += i;
    }

    squareOfSum = Math.pow(squareOfSum, 2);
    difference = squareOfSum - sumOfSquares;

    return difference;
};
