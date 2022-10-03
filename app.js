const form = document.querySelector('form')
const taskInput = document.querySelector('#task')
const tasklist = document.querySelector('ul')
const delAllTasks = document.querySelector('#del-tasks')

form.addEventListener('submit', addTask)
tasklist.addEventListener('click', deleteTask)
delAllTasks.addEventListener('click', deleteAllTasks)

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
    taskInput.value = ''
}

function deleteTask(e){
    if(e.target.textContent === 'X'){
        if(confirm('Are you sure you want to delete this task?')){}
            e.target.parentElement.remove()
    }
}

function deleteAllTasks(e){
    //tasklist.innerHTML = ''
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }
}