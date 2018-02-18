// https://projecteuler.net/problem=4

/**
 * Determine if a number is a palendrome.
 * @param {number} number The input number.
 * @return {boolean} Return true if the number is a palendrome.
 */
function isPalendromeNumber(number) {
    let numString = '' + number;
    let reversedNumString = numString.split('').reverse().join('');

    return (numString.localeCompare(reversedNumString) === 0);
}

exports.solve = function(...args) {
    let product = 0;
    let result = 0;

    for (let i = 100; i <= 999; i++) {
        for (let j = 999; j >= 100; j--) {
            product = i * j;
            if (isPalendromeNumber(product) && product > result) {
                result = product;
                break;
            }
        }
    }

    return result;
};
