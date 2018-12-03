'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.total = number;
  }
  add (number) {
    this.total += number;
      console.log(this.total);
      return this;
  }
  subtract (number) {
    this.total -= number;
    return this;
  }
  multiply (number) {
    this.total *= number; 
    return this;
  }
  divide (number) {
    this.total /= number
    return this;
  }
  square (number) {
    this.total =  Math.pow(this.total, number);
    return this;
  }
  squareRoot () {
    this.total = Math.sqrt(this.total);
    return this;
  }


  pi () {
    this.total *= Math.PI;
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
