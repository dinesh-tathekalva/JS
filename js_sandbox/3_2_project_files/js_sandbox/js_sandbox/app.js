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
