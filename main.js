'use strict'

const calculate = require("./calculator.js")

// execute function on calculator.js in here

const hitung = new calculate (5);
console.log(hitung.add(5).subtract(1).multiply(10).divide(2).square(2).squareRoot().phi());
