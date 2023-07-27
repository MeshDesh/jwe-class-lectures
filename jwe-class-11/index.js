// // const promise = new Promise((resolve) => {
// //     setTimeout(() => {
// //         resolve("Promise Resolved")
// //     }, 3000)
// // })

// // // console.log(promise)

// // promise.then((value) => {
// //     console.log(value)
// // })

// // Async Await
// function delay(seconds) {
//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(seconds * 2)
//         }, seconds * 1000)
//     })

//     return promise
// }

// async function init() {
//     try {
//         const result = await delay(1)
//         const result2 = await delay(result)
//         const result3 = await delay(result2)

//         console.log(result3)
//     } catch (error) {
//         console.log(error)
//     }
// }

// init()

// Fetch API
const fetchRandomDog = async () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((response) => {
            // Check if API succesfull
            if (response.status === "success") {
                return response.message
            }
        })
}

const handleFetchButton = async () => {
    // Get Dog Element from DOM
    const dogImage = document.getElementById("dog-image")

    // Get the image link
    const imageLink = await fetchRandomDog()

    dogImage.setAttribute("src", imageLink)
}

const fetchButton = document.getElementById("fetch-button")

fetchButton.addEventListener("click", handleFetchButton)
