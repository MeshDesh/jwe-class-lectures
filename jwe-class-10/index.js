// // // // 1. setTimeout
// // // console.log("1")

// // // setTimeout(function () {
// // //     console.log("Running after 2 sec")
// // // }, 2000)

// // // console.log("2")

// // // 2. setInterval
// // console.log("1")

// // const timerId = setInterval(function () {
// //     console.log("Running after 0.5 sec")
// // }, 500)

// // console.log("2")

// // setTimeout(function () {
// //     clearInterval(timerId)
// // }, 3000)


// 3. // Callback
// // 3. Task 3
// function callback() {
//     console.log("Callback to Friend")
// }

// // 2. Task 2
// function driveHome() {
//     console.log("Driving back to Home")

//     throw Error("Some accident happend")

//     callback()
// }

// // 1. Task 1
// function meetFriend() {
//     console.log("Meeting my friend")

//     try {
//         driveHome()
//     } catch (error) {
//         console.log(error)
//     }
// }

// // meetFriend()

// setTimeout(meetFriend, 500)

// 4. Promise
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 500)
    // resolve(1)
})

// console.log(promise)

// Resolving promise
promise.then(function (value) {
    console.log(value) // 1
    return 2 * value
}).catch(function (value) {
    console.log(value)
}).then(function (value) {
    console.log(value) // 2
    // return 2 * value
})