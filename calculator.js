'use strict'

class Calculator {
  //write your code here
  constructor(number) {
    this.getResult = number
  }
  add(input) {
    this.getResult += input
    return this
  }
  subtract(input) {
    this.getResult -= input
    return this
  }
  multiply(input) {
    this.getResult *= input
    return this
  }
  divide(input) {
    this.getResult /= input
    return this
  }
  square(exponent) {
    this.getResult = Math.pow(this.getResult, exponent)
    return this
  }
  squareRoot() {
    this.getResult = Math.sqrt(this.getResult)
    return this
  }

  PI() {
    this.getResult = Math.PI
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
