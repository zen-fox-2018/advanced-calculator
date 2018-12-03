'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const Calculate = new Calculator(25)

console.log(Calculate.add(25).square(2).divide(125).divide(4).multiply(Calculate.phi()))
// Calculate.add(25).square(2).divide(125).divide(4).multiply(Calculate.phi()).bulatkan(2)
// console.log(Calculate)
