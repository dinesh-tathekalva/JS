//Create element

const newHeading = document.createElement('h2')

newHeading.id = ('task-title')

// adding text 

newHeading.appendChild(document.createTextNode('Tasks'))

//Select Old node
const oldHeading = document.querySelector('#task-title')

const parentNode = document.querySelector('.card-action')

parentNode.replaceChild(newHeading, oldHeading)


console.log()

