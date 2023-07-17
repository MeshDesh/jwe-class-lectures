// // // // // Loops
// // // // // 1. For
// // // // // for(STARTING, ENDING, STEPS)

// // // // for (let i = 0; i < 10; i = i + 1) { // (i < 10) -> 0 => 1 => 2 => 3 .... 9 => 10 < 10 => False
// // // //     // if (i == 5) {
// // // //     //     break
// // // //     // }
// // // //     console.log("HI", i) // 1st => HI 0 | 2nd => 0 + 7 => i = 7 => HI 7 | 3rd => 7(i) + 7 => 14 => 14 < 10 => False => Breaks
// // // // }

// // // // console.log("Loop broken")

// // // // 2. Scoping
// // // if (true) {
// // //     let x = 6
// // //     console.log(x)
// // // }

// // // console.log(x)

// // // // console.log(window) // Global

// // // Equality
// // console.log(4 == 6) // false
// // console.log(4 > 6) // false
// // console.log(4 < 6) // true

// // console.log('4' == 4) // true
// // console.log('4' === 4) // false

// // Array
// const criketers = ["Sachin", "Dhoni", "Dravid", "Harbhajan"]

// // const firstCricketer = "Sachin"
// // const secondCricketer = "Dhoni"
// // const thirdCricketer = "Dravid"

// // console.log(firstCricketer)

// // console.log(criketers[1])
// // console.log(criketers.length)

// // for (let i = 0; i < criketers.length; i = i + 1) {
// //     console.log(criketers[i]) // 0 => Sachin | 1 => Dhoni | 2 => Dravid
// // }

// console.log(criketers[33])

// Object
const book = {
    name: "Murder at Orient Express",
    page: 200,
    author: "Agatha Cristie",
    isAvailable: true,
    anotherBooks: [
        {
            name: "Murder at Orient Express",
            page: 200,
            author: "Agatha Cristie",
            isAvailable: true,
        },
        {
            name: "Murder at Orient Express",
            page: 200,
            author: "Agatha Cristie",
            isAvailable: true,
        }
    ]
}

const key = 'name'

console.log(book[key])
console.log(book.name)
console.log(book.anotherBooks[0])