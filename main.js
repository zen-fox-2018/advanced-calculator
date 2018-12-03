'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const oldCalculator = new Calculator(4)

// patttern : √(((((0 + 5) - 1) * 2) / 2) ^ 2)

// Method Chaining
// console.log(oldCalculator.add(5).subtract(1).multiply(2).divide(2).square(2).squareRoot())
console.log(oldCalculator.squareRoot())
