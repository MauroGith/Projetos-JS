const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const liHTML = text => {
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center bg-info" data-js = "li">
            <span>${text}</span>
            <i class="far fa-trash-alt delete text-danger" data-js="trash"></i>
        </li>
        `
}

const insertTodo = event => {
    const inputValue = event.target.add.value.trim()
    if(inputValue.length) {
        liHTML(inputValue)
        event.target.reset()
    }
}

const removeTodo = event => {
    const clickedElement = event.target
    const todoLis = document.querySelectorAll('[data-js = "li"]')
    const trashIcons = document.querySelectorAll('[data-js = "trash"]')

    trashIcons.forEach((trash, index) => 
        {if(clickedElement === trash) todoLis[index].remove()})
}

const addHidenClass = event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(todosContainer.children)
        .filter(todo =>  !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
}

const removeHidenClass = event => {
    const inputValue = event.target.value.trim().toLowerCase()

    Array.from(todosContainer.children)
        .filter(todo =>  todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    insertTodo(event)
})

todosContainer.addEventListener('click', event => {
    removeTodo(event)
})

inputSearchTodo.addEventListener('input', event => {
    addHidenClass(event)
    removeHidenClass(event)
})
