// 1. setTimeout
// console.log(1)

// // Async function
// setTimeout(() => {
//     console.log(2)
// }, 10)

// console.log(3)

// Async and Await

console.log(1)

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, ms)
    })
}

async function init() {
    const result = await delay(2000) // Delay of 2 secs
    console.log(result) // 3
    console.log(2) // 2
}

init()

/**
 * 1
 * 3
 * 2
 * 
 * AWAIT & THEN OR CATCH
 * 
 */