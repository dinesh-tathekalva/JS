const deleteItem = document.querySelector('body')

deleteItem.addEventListener('click', runEvent)

function runEvent(e){
    // console.log('clicked')

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('Clicked on X')
        e.target.parentElement.parentElement.remove()
        
    }
}

document.querySelector('form').addEventListener('submit', function(e){

    const task = document.querySelector('#task').value

    let tasks

    if(localStorage.getItem('tasks') === null) {
        tasks = []
        debugger
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
        debugger
    }
    
    tasks.push(task)


    localStorage.setItem('tasks', JSON.stringify(tasks))
    // alert('Task added')

    e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(element => {
    console.log(element)
});