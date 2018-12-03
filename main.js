'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculate = new Calculator(0)
calculate.square(2, 2).add(6).subtract(1).squareRoot()
console.log(calculate.result)

//hitung lingkaran
let calculate2 = new Calculator('phi')
calculate2.multiply(10).multiply(10)
console.log(calculate2.result)