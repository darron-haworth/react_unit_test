const mathJs = require('mathjs');

const arithmaticFuctions = {
    sum(a, b) {
        return a + b;
    },

    multiply(a, b) {
        return a * b;
    },

    subtract(a, b) {
        return a - b;
    },

    devided(a, b) {
        return a / b;
    },

    fractionSum(a, b) {
        var a = a.split('/');
        var b = b.split('/');

        var answer = mathJs.add(mathJs.fraction(`${a[0]}/${a[1]}`), mathJs.fraction(`${b[0]}/${b[1]}`));
        var answerToString = answer.n + "/" + answer.d
        return answerToString;
    }
};

module.exports = arithmaticFuctions;