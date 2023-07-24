// const array = [1, 2, 3, 4, 5]

// // for
// let newArray = []

// for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 2)
// }

// console.log(newArray)

// // forEach => Iterate all the items in an array
// const arrayForEach = function (index) {
//     console.log(array[index - 1])
// }

// const forEachResult = array.forEach(arrayForEach)
// console.log(forEachResult) // undefined

// // 2. Map => [2, 4, 6, 8, 10]
// const arrayMap = function (index) {
//     return array[index - 1] * 2
// }

// const mappedArray = array.map(arrayMap)

// console.log(mappedArray)

// // 3. Find => [75, 87, 98, 67, 88, 95] => To become a Topper => Marks >= 98
// const marks = [75, 87, 98, 67, 88, 95]

// const foundItem = marks.find(function (num, index) {
//     return num >= 98
// })

// console.log(foundItem)

// 4. Filter
// // 3. Filter => [75, 87, 98, 67, 88, 95] => To get all marks >= 70
// const marks = [75, 87, 98, 67, 88, 95]

// const foundItem = marks.filter(function (num, index) {
//     return num >= 90
// })

// console.log(foundItem)

// Todo App
const todoSubmitButton = document.getElementById('todo-submit')
const todoDeleteItemButtons = document.getElementsByClassName('todo-item-delete')

// Add Click Event Handler
todoSubmitButton.addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input')

    // Update into DOM
    const todoList = document.getElementById('todo-list')

    // Create a new Li tag
    const listTag = document.createElement('li')
    listTag.innerHTML = `${todoInput.value} <button class="todo-item-delete">Delete</button>`

    // Add into the UL list
    todoList.appendChild(listTag)
})

// todoDeleteItemButtons.forEach(function (todoDeleteItemButton) {
//     // On Deleting an item
//     todoDeleteItemButton.addEventListener('click', function (e) {
//         console.log("HIII")
//     })
// })


// TODO: For Next Class
// for (let todoDeleteItemButton of todoDeleteItemButtons) {
//     // On Deleting an item
//     console.log("HI")
//     todoDeleteItemButton.addEventListener('click', function (e) {
//         this.parentNode.remove()
//     })
// }