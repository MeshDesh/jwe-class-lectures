// // function init() {
// //     console.log("Code running")
// // }

// // init()

// // const director = {
// //     name: "S. S. Rajamauli",
// //     profession: 'Director',
// //     movies: ['Bahubali', 'RRR', 'Makkhi'],
// //     getAllMovies: function () { // Method
// //         console.log(this.movies)
// //     }
// // }
// // console.log(director)
// // director.name = "Sachin"

// // console.log(director)

// // DOM Methods

// // 1. getElementsByTagName
// const tags = document.getElementsByTagName('div') // Array of all tags inside Body
// // console.log(tags) // Selected Div

// // 2. getElementsByClassName
// const classes = document.getElementsByClassName('heading-main')
// // console.log(classes[0])

// // 3. getElementById
// const id = document.getElementById('heading-main')

// id.style.color = "blue"

// console.log(id)


// Events
const registerNowButton = document.getElementById('register-now-button')
const errorText = document.getElementById('error')

// By default, Make error invisible
hideErrorMessage()

// Runs everytime you click on Button
const handleRegisterNow = function (event) {
    event.preventDefault()

    // Check if input fields contains valid data
    const name = document.getElementById('input-name')
    const email = document.getElementById('input-email')

    // If Name is not valid
    if (!name.value) {
        showErrorMessage('Name is not valid')
        return
    }

    else if (!email.value) {
        showErrorMessage('Email is not valid')
        return
    }

    hideErrorMessage()
}

// Shows error message
function showErrorMessage(message) {
    // Show Error
    errorText.innerHTML = message

    // Make error visible
    errorText.style.display = 'block'
}

// Hides error message
function hideErrorMessage() {
    errorText.style.display = 'none'
}

registerNowButton.addEventListener('click', handleRegisterNow)