
// click event for buttons
document.querySelector('.button1').addEventListener('click', getText)
document.querySelector('.button2').addEventListener('click', getJson)
document.querySelector('.button3').addEventListener('click', getExternal)

//Get data from text file
function getText(){
    fetch('text.txt')
    .then(function(res){
         return res.text()
    })
    .then (function(data){
        document.querySelector('#output').innerHTML = data
    }).catch(function(err){
        console.log(err)
    })
}

//Get data from JSON file
function getJson(){
    fetch('posts.json')
    .then(function(res){
         return res.json()
    })
    .then (function(data){
        console.log(data)
        let output = ''
        data.forEach(function(post){
            output += `<li>${post.title} </li>`
        })
        document.querySelector('#output').innerHTML = output
    }).catch(function(err){
        console.log(err)
    })
}

//Get data from external API
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
         return res.json()
    })
    .then (function(data){
        console.log(data)
        let output = ''
        data.forEach(function(user){
            output += `<li>${user.login} </li>`
        })
        document.querySelector('#output').innerHTML = output
    }).catch(function(err){
        console.log(err)
    })
}