const http = new easyHttp;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Post request
const data = {
    title: 'Custom post',
    body: 'This is the body post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});