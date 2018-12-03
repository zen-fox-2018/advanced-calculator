'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.calculate = num
  }

  add (a) {
    this.calculate += a
    return this
  }

  subtract (a) {
    this.calculate -= a
    return this
  }

  multiply (a) {
    this.calculate *= a
    return this
  }

  divide (a) {
    this.calculate /= a
    return this
  }

  square(a) {
    this.calculate = Math.pow(this.calculate, a)
    return this
  }

  squareRoot() {
    this.calculate = Math.sqrt(this.calculate)
    return this
  }

  phi() {
    if (this.calculate % 7 === 0) {
      this.calculate = this.calculate * 22 / 7
    } else {
      this.calculate *= 3.14
    }
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
