// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// Loops
// 1. For
// Start = 1
// End = 100 => i <= 100
// Steps = 1

// for (let i = 1; i <= 100; i = i + 1) {
//     console.log(i) // i => i + 1 => ?? <= 100 => true
// }

// While
// Condition
// Steps

// let i = 1 // Start
// while (i <= 10) { // Ending
//     console.log(i)
//     i = i + 1 // Step

//     if (i == 7) break
// }

// console.log("HERE")

/**
 *
 * i = 1
 * i = 4
 * i = 7
 * i = 10
 * i = 13
 */

// Advanced Data Types
// // 1. Array
// const array = ['Saksham', 'Eshan', 'Para', "Pavoni", 'Anurag']

// for (let rollNo = 0; rollNo < array.length; rollNo = rollNo + 1) {
//     console.log(rollNo, array[rollNo])
// }

// // 2. Object => key: value
// const student = {
//     name: "James Bond", // string
//     class: "12th", // string
//     contact: 1234567890, // number
//     follwers: [ // Array
//         "A"
//     ],
//     info: { // another object
//         anotherInfo: [ // another array

//         ]
//     }
// }

// const keyName = 'contact'

// console.log(student[keyName])
// // console.log(student.class)
// // console.log(student.contact)
// // console.log(student.follwers.length)
// // console.log(student.favMovie.name)


// Functions
// 1. Normal
// const x = 5
// const y = 10
// let sum = x + y
// console.log(sum)

// const a = 7
// const b = 10
// sum = a + b
// console.log(sum)

// // Add two numbers
// function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }

// // Multiply two numbers with Arrow function
// const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber

// // Calling sum function
// console.log(sum(2, 6))
// console.log(sum(2344, 6))
// console.log(multiply(2344, 6))


// Closure

const sum = (firstNumber, secondNumber) => {
    // const x = 5

    const subtract = () => {
        const x = 2
        console.log(x - firstNumber) // 2 - 10 = -5
    }

    subtract()
}

sum(10, 12)