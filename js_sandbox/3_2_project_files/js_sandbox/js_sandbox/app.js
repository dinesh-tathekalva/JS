document.querySelector('.clear-tasks').addEventListener('click', onClick)


function onClick(e){
// console.log("Clicked")

let val 
val = e
val = e.target
val = e.target.className
val = e.target.classList

e.target.innerText = ' Test'

console.log(val)
}