'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    if(number === 'phi') this.result = 3.14
    else this.result = number
  }
  add (number) {
    this.result += number
    return this
  }
  subtract (number) {
    this.result -= number
    return this
  }
  multiply (number) {
    this.result *= number
    return this
  }
  divide (number) {
    this.result /= number
    return this
  }
  square (number, input) {
    this.result = Math.pow(number, input)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  equal() {
    return this.result
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
