'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._result = 0
  }
  get end() {
    return this._result
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
    this._result *= num
    return this 
  }
  divide (num) {
    this._result/= num
    return this
  }
  square (num) {
    this._result = Math.pow(this._result , num)
    return this
  }
  squareRoot () {
    this._result = Math.sqrt(this._result)
    return this
  }
  pi() {
    return Math.PI
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
