// Handles Add Item event
const handleAddItem = (event) => {
    // Stop the refresh
    event.preventDefault()

    // 1. Capture the input field value
    const todoInputField = document.getElementById('todo-input')
    console.log(todoInputField.value)

    // 2. Append them into Todo list
    // 2A. Create an li element
    const listElement = document.createElement('li')

    // 2B. Add text into li Item
    listElement.innerHTML = `<p class="todo-item-text">${todoInputField.value}</p>
                        <button class="todo-item-delete" onclick=handleDeleteItem()>Delete</button>`

    // 2C. Get the List Container
    const listContainer = document.getElementById('todo-list-container')

    // 2D. Append item to container
    listContainer.appendChild(listElement)
}

// Handle Delete Item
const handleDeleteItem = (event) => {
    console.log("Deleting item")
}

const todoSubmitButton = document.getElementById('todo-submit')

// Event handlers
todoSubmitButton.addEventListener('click', handleAddItem)