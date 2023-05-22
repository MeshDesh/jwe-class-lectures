const array = [1, 2, 3, 4, 5]

// for (let i = 0; i <= array.length - 1; i = i + 1) { // i <= array.length - 1 => i <= 5 - 1 => i <= 4
//     makeTwice(array[i]) // i = 2 => array[2] = 3
// }

// function makeTwice(number) { // 3
//     console.log(number * 2) // 3 * 2 = 6
// }

// function mapTwicedNumber(number) {
//     return number * 2
// }

// forEach => ONLY RUN
// array.forEach(makeTwice)

// Map => RUN & RETURN
// const newArray = array.map(mapTwicedNumber)

// console.log(newArray)

// Filter

// // Return all students with height > 3
// const filtredStudents = array.filter(isHeightGreaterThan6)

// function isHeightGreaterThan6(student) {
//     return student > 3
// }

// console.log(filtredStudents)

// Find
// const result = array.find(function (number) {
//     return number > 8
// })

// console.log(result)