'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here


const newCalculator = new Calculator(2).add(2).multiply(3).square(2).divide(2).subtract(8).squareRoot().total // input pertama
console.log(newCalculator)
// (Akar((0 + 2 )*3)^2)*Pi
//console.log(newCalculator.add(2).multiply(3).square(2).squareRoot().Pi().total)