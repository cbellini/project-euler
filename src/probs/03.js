// https://projecteuler.net/problem=3

/**
 * Determine if a number is prime.
 * @param {number} num The input number.
 * @return {boolean} Return true if the number is prime.
 */
function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

exports.solve = function(...args) {
    let number = args[0] || 600851475143;
    let isStillFactorable = true;
    let tempResult = number;
    let factor = 2;

    for (; factor <= Number.MAX_VALUE && tempResult !== 1; ++factor) {
        if (!isPrimeNumber(factor)) {
            continue;
        }

        isStillFactorable = true;
        while (isStillFactorable) {
            isStillFactorable = (tempResult % factor === 0);
            if (isStillFactorable) {
                tempResult = Math.floor(tempResult / factor);
            }
        }
    }

    return (factor - 1);
}