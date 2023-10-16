// // // // // const x = 10

// // // // // // if (x > 15) {
// // // // // //     console.log("X is greater than 15")
// // // // // // } else {
// // // // // //     console.log('X is smaller than 15')
// // // // // // }

// // // // // x > 15 ? console.log("X is greater than 15") : console.log('X is smaller than 15')

// // // // // 2. Nullish coalescing operator => Null || Undefined
// // // // // const x = false

// // // // // const isTruthyValue = x ?? 'Null not found'

// // // // // // console.log(isTruthyValue)

// // // // // if (x == null || x == undefined) {
// // // // //     console.log('Null not found')
// // // // // } else {
// // // // //     console.log(x)
// // // // // }

// // // // // 3. this in JS
// // // // const director = {
// // // //     name: "S. S. Rajamauli",
// // // //     profession: 'Director',
// // // //     movies: ['Bahubali', 'RRR', 'Makkhi'],
// // // //     getAllMovies: function () {
// // // //         console.log(this.movies)
// // // //     }
// // // // }

// // // // director.getAllMovies()
// // // // console.log(this)

// // // // ES6

// // // // 1. Advanced String Interpolation

// // // const firstName = "James"
// // // const secondName = "Bond"
// // // const age = 45

// // // // console.log(firstName + " " + secondName + ". His age is " + age)
// // // console.log(`${firstName} ${secondName}. His age is ${age}`)

// // // 2. Default Params
// // const sum = (a, b = 6) => {
// //     // BEFORE => return a + b // a = 2 & b = undefined => 2 + undefined => NaN(Not a number)
// //     return a + b // a = 2 & b = 6 => 2 + 6 => 8
// // }

// // console.log(sum(2))
// // console.log(sum(2, 8))

// // 3. destructuring of Objects & Array
// // const director = {
// //     name: "S. S. Rajamauli",
// //     profession: 'Director',
// //     movies: ['Bahubali', 'RRR', 'Makkhi'],
// //     getAllMovies: function () {
// //         console.log(this.movies)
// //     }
// // }

// // const name = director.name
// // const profession = director.profession

// // const { name, profession, movies } = director

// // console.log(director.name, name)
// // console.log(director.profession, profession)
// // console.log(director.movies, movies)
// // console.log(director.getAllMovies())

// // array destructuring
// const students = ["Poorvi", "Aradhy", "Om", "Sufyan"]

// // console.log(students[2]) // Om

// // const om = students[2]
// // const Poorvi = students[0]
// // console.log(om) // Om

// const [poorvi, aradhy, om, sufyan] = students
// console.log(sufyan)

// Shades of Functions
// 1. High Order Function
function sum(a, b, func) {
    const result = a + b

    func(result, log) // log2() => Callback Function

    return result
}

function log(result) {
    console.log("Sum function result is ", result)
}

function log2(result, func) {
    console.log("Sum function 2 result is ", result)
    func(result)
}

sum(7, 8, log2)