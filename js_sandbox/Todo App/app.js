  //Define UI Variables

const form = document.querySelector('#task-form')
const tasklist = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

//load all event listeners

loadEventListerners()

//load all event listeners
function loadEventListerners(){
    //Add task event
    form.addEventListener('submit', addTask)

    //Remove a task
    tasklist.addEventListener('click', removeTask)

    clearBtn.addEventListener('click', clearTasks)
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task')
    }

    //create li element
    const li = document.createElement('li')

    //Adding class
    li.className = 'collection-item'

    //create TextNode
    li.appendChild(document.createTextNode(taskInput.value))

    //create new link element
    const link = document.createElement('a')

    //Add class
    link.className = 'delete-item secondary-content'

    //Add icon HTML
    link.innerHTML = '<i class ="fa fa-remove"> </i>'

    //Append the link to li
    li.appendChild(link)
    debugger

    // console.log(li)

    // //Append li to ul
    tasklist.appendChild(li)
    debugger
    // console.log(tasklist)

    // //clear input
    taskInput.value = ''
    
    //PREVENTING DEFAULT BEHAVIOUR 
    e.preventDefault()
}

//Delete Task
function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove()
    }
}
}

//clear Tasks
function clearTasks(){
    // tasklist.innerHTML = ''

    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild)
    }


}