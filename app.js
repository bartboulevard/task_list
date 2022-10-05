const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const tasklist = document.querySelector('ul')
const delAllTasks = document.querySelector('#del-tasks')

form.addEventListener('submit', addTask)
tasklist.addEventListener('click', deleteTask)
delAllTasks.addEventListener('click', deleteAllTasks)
document.addEventListener('DOMContentLoaded', getTasks)

function addTask(e){
    // create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken 2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    // add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    addTaskLS(taskInput.value)
    taskInput.value = ''
    e.preventDefault()
}

function deleteTask(e){
    if(e.target.textContent === 'X'){
        if(confirm('Are you sure you want to delete this task?')){}
            e.target.parentElement.remove()
            deleteTaskLS(e.target.parentElement.textContent.slice(0, -1))
    }
}

function deleteAllTasks(e){
    //tasklist.innerHTML = ''
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }
    localStorage.removeItem('tasks')
}

function addTaskLS(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTaskLS(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((taskLS, taskIndex) => {
        if(taskLS === task){
            tasks.splice(taskIndex, 1)
        }
    })
}

function getTasks(){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(task))
        li.className = 'collection-item'
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken 2 secondary-content'
        a.setAttribute('href', '#')
        li.appendChild(a)
        // add to list
        const ul = document.querySelector('ul')
        ul.appendChild(li)
    })
}