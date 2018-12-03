'use strict'

class Calculator {
  //write your code here
  constructor(num) {
    this.num = num
  }
  add(numAdd) {
    this.num += numAdd
    return this
  }
  subtract(numSubtract) {
    this.num -= numSubtract
    return this
  }
  multiply(numMultiply) {
    this.num *= numMultiply
    return this
  }
  divide(numDivide) {
    this.num /= numDivide
    return this
  }
  square(numSquare) {
    this.num = Math.pow(this.num, numSquare)
    return this
  }
  squareRoot(numSquareRoot) {
    this.num = Math.sqrt(numSquareRoot)
    return this
  }
}

let calculator = new Calculator(0)
console.log(calculator.add(5).add(5).subtract(1).multiply(2).divide(2).square(2));
console.log(calculator.squareRoot(9));



/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
