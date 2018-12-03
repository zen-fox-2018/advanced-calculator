'use strict'

class Calculator {
  //write your code here
  constructor (numberInput) {
    // this.input = numberInput
    this.result = numberInput
    this.tampilan = ''
    this.phiNumber = 3.14
  }

  add (inputAdd) {
    this.result = this.result + inputAdd
    // this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }

  subtract (inputSubstract) {
    this.result = this.result - inputSubstract
    
    return this
  }
  multiply (inputMultiply) {
    this.result = this.result * inputMultiply
    
    return this
  }
  divide (inputDivide) {
    this.result = this.result / inputDivide
    
    return this
  }
  square (inputSquare) {
    this.result = Math.pow(this.result, inputSquare)
    
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    
    return this
  }  

  view(){
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this.tampilan
  }

  // bulatkan(input){
  //   this.result = this.result.toFixed(input)
  //   this.tampilan = `hasil kalkulasi adalah ${this.result}`
    
  // }
}

const testing = new Calculator(10)

// console.log(testing.add(5))
// console.log(testing.multiply(2))
// console.log(testing.add(5).multiply(2).divide(3).square(2).multiply(4).squareRoot())
// console.log(testing.add(5).multiply(2).divide(3).square(2).multiply(4).squareRoot().add(testing.phi()))

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator

