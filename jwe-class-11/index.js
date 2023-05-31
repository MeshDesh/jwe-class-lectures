// 1. setTimeout
// console.log(1)

// // Async function
// setTimeout(() => {
//     console.log(2)
// }, 10)

// console.log(3)

// Async and Await

// console.log(1)

// function delay(func, ms = 100) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(func()) // func1 => James Bond
//         }, ms)
//     })
// }

// // Async function
// function func1() {
//     let name = "James Bond"

//     return name
// }

// function sum() {
//     return 2 + 3
// }

// async function func2() {
//     const name = await delay(func1)

//     console.log(`${name} is a Movie Character`)
// }

// func2()


// function checkPNRStatus() {
//     return true
// }

// function waitTrain(func, ms = 1000) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(func()) // checkPNRStatus => true
//         }, ms)
//     })
// }

// async function goToRailwayStation() {
//     const isSeatConfirmed = await waitTrain(checkPNRStatus)

//     console.log(isSeatConfirmed)
// }

// goToRailwayStation()



// Fetch


async function fetchRandomDog(dog) {
    const response = await fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
    const result = await response.json()
    return result
}

const DOG_NAME = 'labrador'

async function init() {
    const dog = await fetchRandomDog(DOG_NAME)
    console.log(dog)
}

init()

console.log(1)