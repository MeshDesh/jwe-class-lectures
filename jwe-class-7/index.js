// // Undefined & Null
// const x = undefined
// const y = null

// if (x) { // if(undefined) => Falsy Value
//     console.log("X value exists")
// } else if (y) { // if(null) => Falsy Value
//     console.log("Y value exists")
// } else {
//     console.log("Both are falsy values")
// }

// // Conditional Branching
// const x = 2

// // if (x > 3) { // ?
// //     console.log("X is greater than 3")
// // } else { // :
// //     console.log("X is less than 3")
// // }

// x > 3 ? console.log("X is greater than 3") : console.log("X is less than 3")
// // Condition ? If true : If false

// // Nullish coalescing operator '??’ => Only Focuses on Null and Undefined
// const nullNumber = false
// const realNumber = 5

// const a = nullNumber ?? realNumber
// console.log(a) // false

// // Optional Operator '||' => Focuses on Falsy Values
// const nullNumber2 = false
// const realNumber2 = 5

// const b = nullNumber2 || realNumber2
// console.log(b) // 5

// // this keyword
// const director = {
//     name: 'S.S. Rajamouli',
//     profession: 'Director',
//     movies: ['Bahubali', 'RRR'],
//     getMovies: function () {
//         return this.movies // ['Bahubali', 'RRR']
//     },
// }

// console.log(director.getMovies()) // ['Bahubali', 'RRR']
// console.log(director.getLatestMovies()) // undefined() => Error

// ES6
// // 1. let & const
// var x = 5
// let y = 10
// const z = 20

// // String Interpolation
// const sum = 10

// let string = 'Sum is ' + sum

// string = `Sum is ${sum + 6}` // ${sum + 6} => 10 + 6 => 16 // Sum is 16
// console.log(string)

// // Default parameters in JS
// const sum = (a, b = 8) => a + b // 2 + 1 = 3

// console.log(sum(2, 1))

// // Destructuring in Objects and Arrays
// const director = {
//     name: 'S.S. Rajamouli',
//     profession: 'Director',
//     movies: ['Bahubali', 'RRR'],
//     getMovies: function () {
//         return this.movies
//     },
// }

// const { name, profession, getLatestMovie, movies } = director

// console.log(name)
// console.log(movies)

// const [firstMovie, latestMovie] = movies
// console.log(firstMovie, latestMovie)


// Shades of Functions
// 1. High Order Function
const calculator = (firstNumber, secondNumber, func) => {
    return func(firstNumber, secondNumber)
}

const add = (firstNumber, secondNumber) => firstNumber + secondNumber
const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber
const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber
const divide = (firstNumber, secondNumber) => firstNumber / secondNumber

// Calling Add
console.log(calculator(2, 5, add))
// Calling Subtract
console.log(calculator(2, 5, subtract))
// Calling Multiply
console.log(calculator(2, 5, multiply))
// Calling Divide
console.log(calculator(2, 5, divide))