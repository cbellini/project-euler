// https://projecteuler.net/problem=3
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

    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

exports.solve = function (...args) {
    var number = args[0] || 600851475143;
    var isStillFactorable = true, tempResult = number, factor = 2;

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