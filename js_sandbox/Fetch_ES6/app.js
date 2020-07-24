const http = new EasyHTTP

//Get users

// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err =>console.log(err))

//     console.log(users)

//User data

// const data = {
//     name: 'Christoph waltz', 
//     username: 'christoph',
//     email:'christoph@gmail.com'
// }

// //Post data
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err =>console.log(err))



//delete data
http.delete('https://jsonplaceholder.typicode.com/users')
    .then( data=> console.log(data))
    .catch(err =>console.log(err))