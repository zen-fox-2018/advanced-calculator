'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.hasil = angka
  }

  //penjumlahan
  add (angka) {
    this.hasil += angka
    return this
  }

  //pengurangan
  subtract (angka) {
    this.hasil -= angka
    return this
  }

  //perkalian
  multiply (angka) {
    this.hasil *= angka
    return this
  }

  //pembagian
  divide (angka) {
    this.hasil /= angka
    return this
  }

  //pangkat2
  square () {
    let pangkat = Math.pow(this.hasil,2)
    this.hasil = pangkat
    return this
  }

  //akar pangkat
  squareRoot () {
    let pangkat = Math.floor(Math.sqrt(this.hasil))
    this.hasil = pangkat
    return this
  }

  //power
  power (angka) {
    let pangkat = Math.pow(this.hasil,angka)
    this.hasil = pangkat
    return this
  }

  //pi
  pi () {
    this.hasil *= 3.14
    return this
  }


}

// let hasil = new Calculator(8)

// console.log(hasil.add(2).add(2));


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
