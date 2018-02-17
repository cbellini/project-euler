// https://projecteuler.net/problem=5
function greatestCommonDivisor(x, y) {
    while (y != 0) {
        var z = x % y;
        x = y;
        y = z;
    }

    return x;
}

exports.solve = function (...args) {
    var start = args[0] || 1;
    var end = args[1] || 20;
    var number = 1;
    for (var i = start; i <= end; i++) {
        number = (number * i) / greatestCommonDivisor(number, i);
    }

    return number;
}