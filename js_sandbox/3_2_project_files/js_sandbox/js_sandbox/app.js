
//EVENT DELEGATION

// const deleteItem = document.querySelector('.delete-item')

// deleteItem.addEventListener('click', runEvent)

const deleteItem = document.querySelector('body')

deleteItem.addEventListener('click', runEvent)

function runEvent(e){
    // console.log('clicked')

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('Clicked on X')
        e.target.parentElement.parentElement.remove()
        
    }
}

