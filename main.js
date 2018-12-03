'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const kalkulator = new Calculator()

let result = kalkulator.n(2).multiply(5).squareRoot().square(3).clear().phi().total
let result2 = kalkulator.n(3).subtract(1).add(2).square(2).divide(2).total
let result3 = kalkulator.clear().phi().multiply(7).multiply(2).total
console.log(result);
console.log(result2);
console.log(result3);
