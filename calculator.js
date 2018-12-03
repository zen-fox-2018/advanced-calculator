'use strict'

class Calculator {
 
  constructor (nilaiAwal) {
    this.calculation = nilaiAwal; 
  }

  add (input) {
    this.calculation += input;
    return this;
  }

  subtract (input) {
    this.calculation -= input;
    return this;
  }

  multiply (input) {
    this.calculation *= input;
    return this;
  }

  divide (input) {
    this.calculation = this.calculation / input;
    return this;
  }

  square (input) {
    this.calculation = this.calculation ** input;
    return this;
  }

  squareRoot () {
    this.calculation = Math.sqrt(this.calculation);
    return this;
  }

  phi() {
    if (this.calculation % 7 === 0) {
      this.calculation *= 22/7;
    } else {
      this.calculation *= 3.14;
    }
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

// var hitung = new Calculator(1);
// hitung.add(4).subtract(1).multiply(10).divide(2).square(2).squareRoot();
// console.log(hitung);

module.exports = Calculator
