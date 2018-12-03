'use strict'

class Calculator {
  //write your code here
  constructor (num ) {
    this._result = num || 0
  }
  add (num) {
    this._result += num
    return this
  }
  subtract (num) { 
    this._result -= num
    return this
  }
  multiply (num) {
    this._result = this.result * num
    return this
  }
  divide (num) {
    this._result = this.result / num
    return this
  }
  square (num) {
    this._result = Math.pow(this.result , num)
    return this
  }
  squareRoot () {
    this._result = Math.sqrt(this.result)
  }
  circle () {
    return Math.PI
  }
   get result () {
    return this._result
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
