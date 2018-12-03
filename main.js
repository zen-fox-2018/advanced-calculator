'use strict'

const Calculator = require("./calculator.js")
// execute function on calculator.js in here
const Calc = new Calculator();
console.log(Calc.add(5).subtract(2).divide(3))
