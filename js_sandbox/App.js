// function name (fn = 'Mic', ln = 'reddy') {
//     return 'Hello ' + fn + ' ' + ln
// }


// console.log(name())

// const square = function(x=4){
//     return x*x
// }

// console.log(square())

// (function(){
//     console.log('IIFE Ran')
// })();

// (function(name){
//     console.log('Hey ' + name)
// })('Dinesh')

// methods

// const todoo = {
//     add: function(){
//         console.log("Adding Todo")
//     },
//     edit: function(name){
//         console.log("Editing Name: " + name)
//     }
// }

// todoo.delete = function(){
//     console.log("Delete todo")
// }

// todoo.add()
// todoo.edit('Mickey')
// todoo.delete("")

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