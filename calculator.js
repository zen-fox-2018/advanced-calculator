'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num
  }
  add (num) {
    this.number = this.number + num
    return this
  }
  subtract (num) {
    this.number = this.number - num
    return this
  }
  multiply (num) {
    this.number = this.number * num
    return this
  }
  divide (num) {
    this.number = this.number / num
    return this
  }
  square (num) {
    this.number = Math.pow(this.number, num)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  phi () {
    this.number = this.number * (22/7)
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
