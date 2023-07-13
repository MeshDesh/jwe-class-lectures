// // // // console.log("Hi there")
// // // // console.log("Hi there 2")
// // // // console.log("Hello World")

// // // // console.log(2 + 3)

// // // // Create a variable
// // // var x // Initialization

// // // x = 10 // Declaration

// // // var x = 10 // Declaration + Initialization

// // // console.log(x)

// // // // 1. Let
// // // let x = 10
// // // console.log(x) // 10

// // // x = 20
// // // console.log(x) // 20

// // // 2. Const
// // const x = 10
// // console.log(x) // 10

// // x = 20
// // console.log(x) // 20

// // 3. Hoisting
// // console.log(x) // undefined

// // var x = 10 // Declaration + Initialization

// // console.log(x)

// var x // Declaration
// console.log(x) // undefined 

// x = 10 // Initialization

// console.log(x)

// 4. Math Operators
const firstNumber = 10 // Camelcase
const secondNumber = 20

const myName = "Sachin"
const yourName = "Test"

// 1. +
console.log(firstNumber + secondNumber)
console.log(myName + '' + yourName) // SachinTest 
console.log(`${myName} ${yourName}`) // Sachin Test

// 2. -
console.log(firstNumber - secondNumber)
// console.log(myName - yourName) // NaN => Not A Number

// 3. *
console.log(firstNumber * secondNumber)
// console.log(myName * yourName) // NaN => Not A Number

// 4. /
console.log(firstNumber / secondNumber)
console.log(firstNumber / 0)
// console.log(myName / yourName) // NaN => Not A Number


// 5. %
console.log(firstNumber % secondNumber)

// Conditions
// 1. IF

// let marks = 80

// if (marks >= 90) { // 80 >= 90 => false
//     console.log("Your marks are greater than 90.")
// }

// 2. IF ELSE
const isJEECleared = false
const isBITSCleared = false

if (isJEECleared) { // Main Plan
    console.log("Congrats, You cleared JEE")
    console.log("You can join IIT by Aug")
} else if (isBITSCleared) { // Secondary Plan
    console.log("Congrats, You cleared BITS")
    console.log("You can join by Aug")
}
else { // Backup Plan
    console.log("Sorry, Your JEE not cleared")
    console.log("Let's take a admission in private college")
}
