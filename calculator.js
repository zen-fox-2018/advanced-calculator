'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.result = num
  }

  start (num) {
    this.result += num
    return this
  }

  add (num) {
    this.result += num
    return this
  }
  subtract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    this.result *= num
    return this
  }
  divide (num) {
    this.result /= num
    return this
  }
  square () {
    this.result = this.result**2
    return this
  }

  power (num) {
    this.result = Math.pow(this.result,num)
    return this
  }


  rootOf (num) {
    if(this.result < 0 && num % 2 !== 1) {
      return NaN
    }
    this.result = Math.pow(this.result, 1/num)
    return this
  }

  pi () {
    this.result *= 3.14159265359
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


