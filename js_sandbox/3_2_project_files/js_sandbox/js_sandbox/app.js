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



