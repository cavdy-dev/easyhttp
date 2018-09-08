const http = new easyHttp;

// version 1 use format

// Get format
// http.get('https://jsonplaceholder.typicode.com/users', function(error, response){
//    if(error) {
//      console.log(error)
//    } else {
//      console.log(response);
//    }
// });

// User Data
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// Post format
// http.post('https://jsonplaceholder.typicode.com/users', data, function(error, response){
//    if(error) {
//      console.log(error)
//    } else {
//      console.log(response);
//    }
// });

// Put format
// http.put('https://jsonplaceholder.typicode.com/users/2', data, function(error, response){
//    if(error) {
//      console.log(error)
//    } else {
//      console.log(response);
//    }
// });

// Delete format
// http.delete('https://jsonplaceholder.typicode.com/users/2', function(error, response){
//    if(error) {
//      console.log(error)
//    } else {
//      console.log(response);
//    }
// });



// version 2 and version 3 use format

// Get format
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// User Data
// const data = {
//     name: 'John Doe',
//     username: 'johndoe',
//     email: 'jdoe@gmail.com'
// }

// Post or Create format
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Put or Update format
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Delete or Remove format
// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));