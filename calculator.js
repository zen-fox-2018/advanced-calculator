'use strict'

class Calculator {
  //write your code here
  constructor (numberInput) {
    this.input = numberInput
    this.result = numberInput
    this.tampilan = ''
    // this.phiNumber = this.phi()
  }

  add (inputAdd) {
    this.result = this.result + inputAdd
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }

  subtract (inputSubstract) {
    this.result = this.result - inputSubstract
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }
  multiply (inputMultiply) {
    this.result = this.result * inputMultiply
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }
  divide (inputDivide) {
    this.result = this.result / inputDivide
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }
  square (inputSquare) {
    this.result = Math.pow(this.result, inputSquare)
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    this.tampilan = `hasil kalkulasi adalah ${this.result}`
    return this
  }

  phi(){
    let phiNumber =  3.14
    return phiNumber
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

