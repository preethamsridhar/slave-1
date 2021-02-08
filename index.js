const justAdd = require('slave-2')

function addFunction (num1, num2, skip=false) {
    return justAdd(num1, num2) * 1000
}

module.exports = addFunction;
