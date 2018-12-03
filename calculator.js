'use strict'

class Calculator {
  //write your code here
  constructor (total) {
    this.total = total
    
  } 
  add (input) {
    this.total += input
    return this
  }
  subtract (input) {
    this.total -= input
    return this
  }
  multiply (input) {
    this.total *= input
    return this
  }
  divide (input) {
    this.total /= input
    return this
  }
  square (input) {
    // for(let i = 0; i < this.input; i++){
    //   this.total *= this.total
    // }
    this.total = Math.pow(this.total, input)
    return this
  }
  squareRoot () {
    this.total = Math.sqrt(this.total)
    return this
  }
  Pi(){
    this.total *= (22/7)
    return this
  }
}
// const test = new Calculator(64,5)
// console.log(test.squareRoot())
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
