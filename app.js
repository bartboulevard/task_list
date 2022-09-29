const form = document.querySelector('form')
const taskInput = document.querySelector('#task')

const tasklist = document.querySelector('ul')

//form.addEventListener('submit', addTask)
tasklist.addEventListener('click', deleteTask)

//function addTask(e){...}

function deleteTask(e){
    if(e.target.textContent === 'X'){
        if(confirm('Are you sure you want to delete this task?')){}
            e.target.parentElement.remove()
    }
}