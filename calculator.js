'use strict'

class Calculator {
  //write your code here
  constructor (n = 0) {
    this.total = n;
  }
  n (n) {
    this.total = n
    return this
  }
  add (n) {
    this.total = this.total + n
    return this
  }
  subtract (n) {
    this.total = this.total - n
    return this
  }
  multiply (n) {
    this.total = this.total * n
    return this
  }
  divide (n) {
    this.total = this.total / n
    return this
  }
  square (n) {
    for (let i = 1 ; i < n ; i++) {
      this.total = this.total * this.total
    }
    return this
  }
  squareRoot (n = 0) {
    this.total = Math.sqrt(this.total)
    return this
  }
  phi () {
    if (!this.total){
      this.total = Math.PI
    } else {
      this.total = Math.PI * this.total
    }
    return this
  }
  clear () {
    this.total = 0
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
