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