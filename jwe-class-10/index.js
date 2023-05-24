// 1. setTimeout Function => Run function after n miliseconds
// Arguements => Function & time
// 2 seconds => 2 * 1000 => 2000

// console.log("Starting the program")

// setTimeout(function () {
//     console.log("Running 1")
// }, 0)

// setTimeout(function () {
//     console.log("Running 2")
// }, 10)

// console.log("Ending the program")

// Callback functions

// function callbackA() {
//     console.log("Callback A called")
//     try {
//         callbackB() // Run this even if any error
//     } catch (error) {
//         console.log(error) // Run if any error
//     }
//     callbackB()
// }

// function callbackB() {
//     console.log("Callback B called")
//     try {
//         callbackC() // Run this even if any error
//     } catch (error) {
//         console.log(error) // Run if any error
//     }

// }

// function callbackC() {
//     console.log("Callback C called")
//     throw Error('Something went wrong')
//     callbackD()
// }

// function callbackD() {
//     console.log("Callback D called")
// }

// callbackA()

// Promise
const promise = new Promise(function (resolve, reject) {
    // setTimeout(() => {
    //     reject("Hi")
    // }, 500)
})

console.log(promise)
promise.then(function (result) {
    console.log(result)
}).catch(function (result) {
    console.log(result)
})