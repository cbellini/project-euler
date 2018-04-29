// https://projecteuler.net/problem=8
exports.solve = function(...args) {
    let inputString = args[0];
    let numOfAdjacentDigits = parseInt(args[1]);

    if (!(/^-{0,1}\d+$/.test(inputString))) {
        throw new Error('Input not numeric');
    }

    let inputSeries = inputString.split('').map(Number);
    let inputLength = inputSeries.length;
    let greatestProduct = 0;
    let currentGreatestProduct = greatestProduct;

    for (let i = 0; i < inputLength - 1; ++i) {
        let currentDigitWindow = inputSeries.slice(i, i + numOfAdjacentDigits);

        currentGreatestProduct = currentDigitWindow.reduce((a, b) => a * b);

        if (currentGreatestProduct > greatestProduct) {
            greatestProduct = currentGreatestProduct;
        }
    }

    return greatestProduct;
};
