'use strict'

const Calculator = require("./calculator.js")

const calculator = new Calculator(0)
let result = calculator.add(2).multiply(2).squareRoot().phi()

console.log(result.number);

// execute function on calculator.js in here
