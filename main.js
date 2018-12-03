'use strict'

const Calculator = require("./calculator.js")

var num = new Calculator(2)

console.log(num.add(2).subtract(2).multiply(3).divide(3).result);
console.log(num.square(2).squareRoot().result);
console.log(num.pi().result);

// execute function on calculator.js in here
