'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
 
const myCalculator = new Calculator(0)
console.log(myCalculator.add(3).subtract(1).multiply(2).result)
