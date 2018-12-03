'use strict'

const Calculator = require("./calculator.js")

const Calculate = new Calculator(4)
console.log(Calculate.add(2).divide(3).result)
console.log(Calculate.circle())
// execute function on calculator.js in here
