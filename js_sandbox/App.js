// document.querySelector('#button1').addEventListener('click', loadData)

// function loadData(){
//     // console.log(1)
//     const xhr = new XMLHttpRequest()
//     //OPEN
//     xhr.open('GET', 'data.txt', true)
//         console.log('READY STATE', xhr.readyState)

//     //Optional- used for spinner/loader
//     xhr.onprogress = function() {
//          console.log('READY STATE', xhr.readyState)
//     }

//     //Status check
//     xhr.onload = function(){
//         if(this.status === 200){
//             // console.log(this.responseText)
//             document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`
//         }
//     }

//     //OLDER STYLE CODE
//     // xhr.onreadystatechange = function(){
//     // console.log('READY STATE', xhr.readyState)
//     //     if(this.status === 200 && this.readyState ===4){
//     //         console.log(this.responseText)
//     //     }
//     // }

//     //If any error occurs
//     xhr.onerror = function() {
//         console.log('Request error...')
//     }
//     xhr.send()
// }

document.querySelector('#button2').addEventListener('click', loadData)

function loadData(e) {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText)
            let output = ''
            customers.forEach(function(customer) {
                 output += `<ul>
                                <li>ID: ${customer.id} </li>
                                <li>Name: ${customer.name} </li>
                                <li>Company: ${customer.company} </li>
                                <li>Phone: ${customer.phone} </li>
                            </ul>`
            });
            
        document.querySelector('#output').innerHTML = output
    }
    }

    xhr.send()
}



































