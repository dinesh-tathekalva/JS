// Create Element
const li = document.createElement('li')

// create classname
li.className = "collection-item"

// create id 
li.id = 'testId'

// add attribute
li.setAttribute('title', 'New Item')

// create text node append 
li.appendChild(document.createTextNode('Mohana'))

//append li as child to ul
var liv=document.querySelector('ul.collection').appendChild(li)

console.log(liv)