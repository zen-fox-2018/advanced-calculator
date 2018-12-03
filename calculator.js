'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this._number = number || 0;
  }
  add (num) {
    // return "hello"
    this._number += num;
    return this
  }
  subtract (num) {
    this._number -= num;
    return this;
  }
  multiply (num) {
    this._number *= num;
    return this;
  }
  divide (num) {
    this._number /= num;
    return this;
  }
  square (num) {
    this._number = Math.sqrt(num);
    return this
  }
  squareRoot (num) {
    this._number = Math.pow(this._number, num);
    return this
  }
  findCircle(num) {
    this._number *= Math.PI(num);
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
