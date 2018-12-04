'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.input = num
    this.operation = ''
    this.result = num
  }

  add (num2) {
    this.result = this.result + num2
    this.operation += 'added by ' + num2 + ' '
    return this
  }
  subtract (num2) {
    this.result = this.result - num2
    this.operation += 'subtracted by ' + num2 + ' '
    return this
  }
  multiply (num2) {
    this.result = this.result * num2
    this.operation += 'multiplied by '+ num2 + ' '
    return this
  }
  divide (num2) {
    this.result = this.result / num2
    this.operation += 'divided by  '+ num2 + ' '
    return this
  }
  square (num2) {
    this.result = this.result ** num2
    this.operation += 'squared by '+ num2 + ' '
    return this
  }
  squareRoot (num2) {
    this.result =  Math.sqrt(this.result)
    this.operation += 'square rooted '
    return this
  }

  circumference(num2){
    let pi = 22/7
    this.result = Math.round(this.result * pi)
    this.operation += 'diameter to circumference ' 
    return this
  }

  diameter(num2){
    let pi = 22/7
    this.result = Math.round(this.result / pi)
    this.operation += 'circumference to diameter ' 
    return this
  }

  display(){
    let output = 'input: ' + this.input+ "\n" + 'operation: ' + this.operation + "\n" + 'result: ' + this.result + "\n"
    return output
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
