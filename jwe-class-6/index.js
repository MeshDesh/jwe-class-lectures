// // // // // // Loops
// // // // // // 1. For
// // // // // // for(STARTING, ENDING, STEPS)

// // // // // for (let i = 0; i < 10; i = i + 1) { // (i < 10) -> 0 => 1 => 2 => 3 .... 9 => 10 < 10 => False
// // // // //     // if (i == 5) {
// // // // //     //     break
// // // // //     // }
// // // // //     console.log("HI", i) // 1st => HI 0 | 2nd => 0 + 7 => i = 7 => HI 7 | 3rd => 7(i) + 7 => 14 => 14 < 10 => False => Breaks
// // // // // }

// // // // // console.log("Loop broken")

// // // // // 2. Scoping
// // // // if (true) {
// // // //     let x = 6
// // // //     console.log(x)
// // // // }

// // // // console.log(x)

// // // // // console.log(window) // Global

// // // // Equality
// // // console.log(4 == 6) // false
// // // console.log(4 > 6) // false
// // // console.log(4 < 6) // true

// // // console.log('4' == 4) // true
// // // console.log('4' === 4) // false

// // // Array
// // const criketers = ["Sachin", "Dhoni", "Dravid", "Harbhajan"]

// // // const firstCricketer = "Sachin"
// // // const secondCricketer = "Dhoni"
// // // const thirdCricketer = "Dravid"

// // // console.log(firstCricketer)

// // // console.log(criketers[1])
// // // console.log(criketers.length)

// // // for (let i = 0; i < criketers.length; i = i + 1) {
// // //     console.log(criketers[i]) // 0 => Sachin | 1 => Dhoni | 2 => Dravid
// // // }

// // console.log(criketers[33])

// // Object
// // const book = {
// //     name: "Murder at Orient Express",
// //     page: 200,
// //     author: "Agatha Cristie",
// //     isAvailable: true,
// //     anotherBooks: [
// //         {
// //             name: "Murder at Orient Express",
// //             page: 200,
// //             author: "Agatha Cristie",
// //             isAvailable: true,
// //         },
// //         {
// //             name: "Murder at Orient Express",
// //             page: 200,
// //             author: "Agatha Cristie",
// //             isAvailable: true,
// //         }
// //     ]
// // }

// // const key = 'name'

// // console.log(book[key])
// // console.log(book.name)
// // console.log(book.anotherBooks[0])

// // // Undefined & Null
// // let x
// // let y = null

// // console.log(x)
// // console.log(y)

// // Falsy Values
// let x
// let y = false
// let z = 0
// let a = 5
// let b = ""
// const array = [] // Called by ref

// if (x != undefined) {
//     console.log(x)
// }

// if (y != null) {
//     console.log(y)
// }

// if (z != undefined && z !== null && z !== "" && z !== false && z !== 0) {
//     console.log(z)
// }

// if (a) {
//     console.log(a)
// }

// if (b) {
//     console.log(b)
// }

// array.push(2)

// if (array.length) { // array.length = 0 => if(0) {}
//     console.log("Array exists")
// }

// Function
// 1. Normal

// // Add two numbers
// const result = function sum(a, b) {
//     // console.log(a + b)
//     return a + b
// }

// // console.log(sum(2, 4)) // 1. 
// const result = sum(2, 4) // 2. 
// console.log(result)

// console.log(result(7, 9)) // 3. 

// 2. Arrow Function
// const sum = (a, b) => {
//     return a + b
// }

const sum = (a, b) => a + b

console.log(sum(1, 2))