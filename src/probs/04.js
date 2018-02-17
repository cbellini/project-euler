// https://projecteuler.net/problem=4
function isPalendromeNumber(number) {
    var numString = '' + number;
    var reversedNumString = numString.split('').reverse().join('');

    return (numString.localeCompare(reversedNumString) === 0);
}

exports.solve = function (...args) {
    var product = 0, result = 0;

    for (var i = 100; i <= 999; i++) {
        for (var j = 999; j >= 100; j--) {
            product = i * j;
            if (isPalendromeNumber(product) && product > result) {
                result = product;
                break;
            }
        }
    }

    return result;
}