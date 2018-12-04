'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here



var Calculate = new Calculator(100)
console.log(Calculate.add(45).subtract(82).display())

Calculate = new Calculator(100)
console.log(Calculate.multiply(4).divide(50).display())

Calculate = new Calculator(100)
console.log(Calculate.square(2).squareRoot(4).display())

Calculate = new Calculator(100)
console.log(Calculate.circumference().display())

Calculate = new Calculator(100)
console.log(Calculate.diameter().display())





