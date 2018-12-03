'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;
  }
  add (inputNumber) {
    this.number += inputNumber;
    return this;
  }
  subtract (inputNumber) {
    this.number -= inputNumber;
    return this;
  }
  multiply (inputNumber) {
    this.number *= inputNumber;
    return this;
  }
  divide (inputNumber) {
    this.number /= inputNumber;
    return this;
  }
  square (inputNumber) {
    this.number = Math.pow(this.number, inputNumber);
    return this;
  }
  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this;
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
