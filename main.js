'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const Calculate = new Calculator(25)

console.log(Calculate.add(25).square(2).divide(40).add(Calculate.phiNumber).view())

