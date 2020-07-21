//  Primitive types 
const name  = "Christoph"
console.log(typeof name)

const age = 45
console.log(typeof age)

const test  = true
console.log(typeof test)

const x = null
console.log(typeof x)

let test3
console.log(typeof test3)

const sym = Symbol()
console.log(typeof sym)

//  Reference Type - accessed from memory

const hobbies = ['movies', 'music']
console.log(typeof hobbies)

const address = {
   city: 'San Francisco',
   state: 'California'
}
console.log(typeof address)

const date = new Date()
console.log(typeof date)

// - - - - - - - - -  D      A      T      A          T      Y      P     E     S - - - - - - - -   


let val 
val = 5

//Number to String
val = String(5)
val = String(2+2)

// Boolean to String
val = String(true)

// Date to String
val = String( new Date())

//Array to String
val = String([1,1,2,3,4])

//toString()
val = (5).toString()
val =(true).toString()


// console.log(val)
// console.log(typeof val)
// console.log(val.length)

//Type conversion is the process of converting value from one type to another by us

//String to Number
val = '5'
val =  Number('5')
val = Number(true) //displays 1(binary)
val = Number(false) //displays 0
val = Number(null) //displays 0
val = Number("Spacetime")
val = Number([1,2,3,4])

val = parseInt('100.30')
val = parseFloat('100.30') // for decimals

console.log(val)
console.log(typeof val)
console.log(val.toFixed(3)) //to specify number of decimals to be displayed


//Type coercion is the process of converting value from one type to another but done by JS 

val1 = String(4)
val2 = 5
sum = Number(val1 + val2)
console.log(sum) // prints 45 


// M    A    T    H - - - - - - - - - - - - - - -
val = Math.PI
val = Math.E
val = Math.round(2.4)
val = Math.ceil(2.1)
val = Math.floor(2.9)
val = Math.sqrt(64)
val = Math.abs(-2)
val = Math.pow(8, 2)
val = Math.min(2,33,4,5,6,6,7,2,1)
val = Math.max(1,2,3,1,2,5,99)
val = Math.random()
val = Math.floor(Math.random() * 20 + 1)
console.log(val) 


// S     T     R     I     N    G     S - - - - - - - - - - - - -

const firstName = "Christoph"
const lastName = "Waltz"

const str = "hello, there, this, is Christoph"

val = firstName + lastName

val = firstName+ " " +lastName


val = "Quentin"
val += "Tarantino"

val = "Hello, I like " + firstName + " " + lastName

val = `Hello, I like ${firstName} ${lastName}`

//Escaping - To avoid the single quote power in the middle of a sentence we can use \
// val = 'That's awesome, I can't wait'
val = 'That\'s awesome, I can\'t wait'

//Concat
val = firstName.concat(' ', lastName)

//Change case
val = firstName.toLocaleUpperCase()

//indexOf()
val = firstName.indexOf('h')
val = firstName.lastIndexOf('h')

//charAt()
val = firstName.charAt('2')

//prints letter at the index of input

//substring()
val = firstName.substring(0,4)

//slice
val = firstName.slice(0, 4)
val = firstName.slice(-4) //prints last 4 letters

//split
val = str.split(' ')

//replace
val = str.replace('there', 'Dinesh')

//includes
val = str.includes('foo') // check if the string is part of it

console.log(val)

//- - - - - - - -  A     R     R     A     Y     S ----- - - - - - - - - - - - - - - 

const numbers = [23,34,45,12,32,43,67,87]
val = Array.isArray('numbers')

const numbers = [23,34,45,12,32,43,67,87]

const numbers1 = [1,3,54,23]
const numbers2 = [2,3,6,7,9]
val = Array.isArray('numbers')


//insert into array

numbers[2] = 100 //replaces value at index 2 to 100

// //array mutation
numbers.push(250) //adds number to end of array
numbers.unshift(12) //adds number to beginning of array


numbers.pop()//remove from end of array
numbers.shift() //removes number to beginning of array

//splice values
numbers.splice(1,1) // removes element starting and till the given index 

//concat arrays

val = numbers1.concat(numbers2)


val = numbers.sort((x,y) => x-y)
console.log(val)


// O     B     J     E     C     T      S--- - - - - - - - - - - - - 


const person = {
   firstName : 'Christoph',
   lastName : 'Waltz',
   age : 30,
   email : 'test@aol.com',
   address : {
       city: 'San Francisco',
       state: 'California'
   },
   yearOfBirth : () => 2017 - this.age
}


let val = person.firstName
val = person.yearOfBirth()

console.log(val)


const people = [
   {name: 'john', age: 30},
   {name: 'Chrsitoph', age: 40},
   {name: 'waltz', age: 34}
]

for(i = 0; i<people.length; i++){
   console.log(people[i].name)
}

// D A T E - - - - - -- 
let val
const today = new Date()
const birthday = new Date('09-10-1981')


val = birthday


console.log(val)

// I F - - - - - 
let id = 300

if(id == 101){
    console.log('CORRECT')
}
else{
    console.log('INCORRECT')
}

if(id > 200){
    console.log(`The id is ${id}, it is greater`)
}
else{
    console.log('No, Id is not greater')
}


let color = 'purple'

if(color === 'red'){
    console.log('The color is red')
}
else if(color === 'blue'){ 
    console.log('the color is blue')
}else{
    console.log(' The color is neither red nor blue')
}

let name = 'Christoph'
let age = 25

if(age > 0 && age<=12){
    console.log(`${name} is a child`)
}
else if(age > 12 && age <19){
    console.log(`${name} is a teenager`)
}
else{
    console.log(`${name} is an adult`)
}

if(age < 16 || age > 65){
    console.log(`${name} cannot run in the race because his age is ${age}`)
}
else{
    console.log(`${name} can run in the race`)
}

//T E R N A R Y 

let id = 200

console.log(id === 100 ? 'CORRECT' : 'INCORRECT')


//S W I T C H   C A S E 


let color = 'yellow'

switch (color){
    case 'red': 
        console.log('The color is Red')
        break

    case 'blue':
        console.log('The color is Blue')
        break
    
    default:
        console.log('The color is neither Red nor Blue')
        break

}

let day

switch (new Date().getDay()) {
    case 0:
        day: 'Sunday';
        break;
    
    case 1:
        day: 'Monday';
        break;

    case 2:
        day: 'Tuesday';
        break;

    case 3:
        day: 'Wednesday';
        break;
        
    case 4:
        day: 'Thursday';
        break;

    case 5:
        day: 'Friday';
        break;

    case 6:
        day: 'Saturday';
        break;

    default:
        break;
}

console.log(`Today is ${day}`)


const color = "blue"

switch(color){
    case 'red':
        console.log(`color is ${color}`)
        break;
    
    case 'blue':
        console.log(`color is ${color}`)
        break;
    default:
        console.log('Color is not red or blue')
        break;
}

// F U N C T I O N S
function name (fn = 'Mic', ln = 'reddy') {
    return 'Hello ' + fn + ' ' + ln
}


console.log(name())

const square = function(x=4){
    return x*x
}

console.log(square())

(function(){
    console.log('IIFE Ran')
})();

(function(name){
    console.log('Hey ' + name)
})('Dinesh')

methods

const todoo = {
    add: function(){
        console.log("Adding Todo")
    },
    edit: function(name){
        console.log("Editing Name: " + name)
    }
}

todoo.delete = function(){
    console.log("Delete todo")
}

todoo.add()
todoo.edit('Mickey')
todoo.delete("")


//F  O  R     L  O  O  P
for(i = 0; i< 10; i++){
    if(i === 2){
        console.log("2 is first number")
        continue
    }

    if(i ===5 ){
        break
    }

    console.log("number " + i)
}


//W  H  I  L  E
let i = 0

while(i<10){
    console.log("number" + i)
    i++
}


//D  O    W  H  I  L  E 
let i = 2

do {
    console.log("number" + i)
    i++
}

while(i<10){
    console.log("print")
}

//f o r   E a c h 
cars = ['Tesla', 'Ford', 'Chevy', 'GMC']

cars.forEach(car => {
    console.log(car)
})


//M  A  P
const users = [
    {id: 1, name: 'Christoph'},
    {id: 2, name: 'Waltz'},
    {id: 3, name: 'Disney'},
    {id: 4, name: 'Netflix'},
    {id: 5, name: 'Hulu'}
]
const ids = users.map((user) => {
    // console.log(`${user.id} : ${user.name}`)
    return user.id
})

console.log(ids)

//F O R     I N 
const user = {
    fn: 'Christoph',
    ln: 'Waltz',
    age: 28
}

for(let x in user){
    // console.log(x)
    console.log(`${x} : ${user[x]}`)
}
// confirm
if(confirm('Are you sure')){
    console.log('yes')
}
else{
    console.log('no')
}

//Window.

let val 

val = window.outerHeight
val = window.outerWidth
val = window.innerHeight
val = window.location
val = window.location.hostname
val = window.location.port
console.log(val)

// window.location.href  = 'http://google.com''

// window.location.reload()

// window.history.go()

// scope

var a = 2

function test(){
    var a = 5
    console.log(a)
}

test()

console.log(a)

// we can manipulate/edit DOM with the Selectors like getElementById etc 

// D O M

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);


// Manipulation and Traversing DOM 


// console.log(document.getElementById("task-title"))

// console.log(document.getElementById("task-title").id)
// console.log(document.getElementById("task-title").className)

// //Changing Style
// document.getElementById('task-title').style.background = 'black'
// document.getElementById('task-title').style.background = '#FFF'
// document.getElementById('task-title').style.padding = '5px'

// // Change Content
// document.getElementById('task-title').textContent = 'Task List'
// document.getElementById('task-title').innerText= 'My Tasks'
// document.getElementById('task-title').innerHTML= '<span style= "color: red">Task List</span>'

//Query Selector

// console.log(document.querySelector('#task-title'))
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h5'))

// document.querySelector('li').style.color = 'red'




// const items= document.querySelectorAll('ul.collection li.collection-item')

// items.forEach((item, index)  => {
//   item.textContent = `Hello`
// })

// const listItemsOdd = document.querySelectorAll('li:nth-child(odd)')
// const listItemsEven = document.querySelectorAll('li:nth-child(even)')

// listItemsOdd.forEach(odd =>{
//   odd.style.background = '#ccc'
// })

// for(let i=0; i< listItemsEven.length; i++){
//   listItemsEven[i].style.background = "#f2f2f2"
// }

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

// val = list.childNodes
// val = list.children
// val = list.children[1].textContent = "Change"

// val = list.children
// val = list.children[3].children
// val = list.firstChild

// val = list.firstChild

// val = list.lastChild
// val = list.lastElementChild

// val = list.childElementCount

val = listItem.parentNode
val = listItem.parentElement.parentElement
console.log(val)

// console.log(listItem)

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
document.querySelector('ul.collection').appendChild(li)

const link = document.createElement('a')

link.className='delete-item secondary-content'

link.appendChild(document.createElement('i'))

link.innerHTML = '<i class="fa fa-remove"></i>'

li.appendChild(link)

console.log(link)

//Create element

const newHeading = document.createElement('h2')

newHeading.id = ('task-title')

// adding text 

newHeading.appendChild(document.createTextNode('Tasks'))

//Select Old node
const oldHeading = document.querySelector('#task-title')

const parentNode = document.querySelector('.card-action')

parentNode.replaceChild(newHeading, oldHeading)

// 

const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

val = link.className
val = link.classList
val = link.classList[0]
console.log(link)

console.log(val)
// TYPES OF EVENTS
click 
mouseover 
timeStamp
mousedown
mouseup
mouseenter
mouseleave
mouseover
mouseout

//EVENT LISTENERS
document.querySelector('.clear-tasks').addEventListener('click', onClick)
// document.querySelector('.clear-tasks').addEventListener('mouseover', onClick)

function onClick(e){
// console.log("Clicked")

let val 
val = e
val = e.target
val = e.target.className
val = e.target.classList

val = e.target.innerText = ' Test'

val = e.type

val = e.timeStamp

val = e.clientY
val = e.clientX

val = e.offsetX
val = e.offsetY

console.log(val)
}


const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

const runEvent = e =>{
    console.log(`Event Type: ${e.type}`)

    heading.textContent =`X-Axis: ${e.offsetX}, Y-Axis: ${e.offsetY}`
    document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}

// clearBtn.addEventListener('mousedown', runEvent)
// clearBtn.addEventListener('mouseup', runEvent)
card.addEventListener('mouseenter', runEvent)
card.addEventListener('mouseleave', runEvent)
card.addEventListener('mouseover', runEvent)
card.addEventListener('mouseout', runEvent)
card.addEventListener('mousemove', runEvent)

const form = document.querySelector('form')
const input = document.querySelector('#task')

form.addEventListener('submit', runEvent)

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`)
    console.log(input.value )

    e.preventDefault()

}


const form = document.querySelector('form')
const input = document.querySelector('#task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')

input.value = ''

// input.addEventListener('keydown', runEvent)
// input.addEventListener('keyup', runEvent)
// input.addEventListener('keypress', runEvent)
// input.addEventListener('focus', runEvent)
// input.addEventListener('blur', runEvent)
// input.addEventListener('cut', runEvent)
// input.addEventListener('copy', runEvent)
// input.addEventListener('paste', runEvent)
// input.addEventListener('input', runEvent)
select.addEventListener('change', runEvent)




function runEvent(e) {

    console.log(`E Type: ${e.type}`)
    console.log(e.target.value)
    // heading.innerText = e.target.value
    // // e.preventDefault()
}




//EVENT BUBBLING

document.querySelector('.container').addEventListener('click', runEvents)

document.querySelector('.card-title').addEventListener('click', runEvent)

function runEvent() {
    console.log('clicked')
}
function runEvents() {
    console.log('parent clicked')
}



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


// const name = localStorage.setItem('name', 'Christoph')
// const age = localStorage.setItem('age', '30')

// document.querySelector('#task').value = ''
// const ssname = sessionStorage.setItem('name', 'Waltz')
// const ssage = sessionStorage.setItem('age', '35')

// localStorage.removeItem('age')

// const getName = localStorage.getItem('name')
// console.log(getName)


// CLEARING LOCAL STORAGE
// localStorage.clear()


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



//Prototype
 
//Each object in JS has a prototype.
//Prototype is an object itself. 
//All objects inherits their methods and properties from their prototype
//Object literals inherit from Object.prototype
//Objects that are created from the constructor like Person inherit from Person.prototype
//Ultimately with the prototype chain even the person.prototype leads to the object.prototype
//
//
//
//CLASS
//Any method we add inside the class is added to the prototype
//
//
//
//
//
//
//
//
//
//
//
// CONSTRUCTOR

class Person {
    constructor(fn, ln){
        this.fn = fn
        this.ln = ln

    }
    greeting() {
        return `Hello ${this.fn} ${this.ln}`
    }
}

class Customer extends Person {
    constructor(fn, ln, age){
        super(fn, ln)
        this.age = age
    }

    // print(){
    //     return `My name is ${Fn} ${Ln} and I'm ${age} years old`
    //}

}

const christoph = new Customer('Christoph', 'Waltz', '30')

console.log(christoph.greeting())