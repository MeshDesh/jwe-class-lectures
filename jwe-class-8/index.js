// Shades of Function

// 1. Immediately Invoked/Called Function
// function init() { // Parameters
//     console.log("Program running fine.")
// }

// init() // Arguments

// (function () {
//     console.log("Program running fine.")

//     const x = 6

//     console.log(x) // 6
// })()

// console.log(x) // Error

// // 2. Currying function
// function calculator(firstNumber) {
//     return function (secondNumber) {
//         return firstNumber + secondNumber // 5 + secondNumber
//     }
// }

// const result = calculator(5)
// console.log(result(6))
// /**
//  * function () {
//         return firstNumber + secondNumber
//     }
//  */


// DOM
// console.log(document)

// Functions and Methods - 
// functions when called alone.
// Methods when used insde an object

// const headings = document.getElementsByTagName('h1')

// // Update text after 2 sec
// setTimeout(function () {
//     headings[0].innerHTML = "AA"
// }, 2000)

// Get element by ID
const heading = document.getElementById('heading-primary')

// Update color from JS
heading.style.color = "Green"


// Events
// heading.onclick = function (ev) {
//     console.log("Heading element clicked")
// }

// heading.addEventListener('click', headingElementClicked)

// function headingElementClicked() {
//     console.log("Heading element clicked")
// }

// console.log(heading.onclick)

// let obj = {
//     name: "Sachin"
// }

// console.log(obj)

// obj.test = "1"

// console.log(obj)


// Handle Forms in JS

// When user tries to submit the details, Check if they're valid

const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', sendDataToServer)

function sendDataToServer(event) {
    event.preventDefault()

    // 1. Validate user input
    const isInputsValidated = validateUserInput()

    // 2. Send data to server
    if (isInputsValidated) handleSendData()
    else console.log("Error")
}

function validateUserInput() {
    // Check if input is having some data
    const name = document.getElementById('name')
    const email = document.getElementById('email')

    if (name.value) {
        if (email.value) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }

    // if (!name.value || !email.value) return false
    // return true
}

function handleSendData() {
    console.log("User data sent to server")
}