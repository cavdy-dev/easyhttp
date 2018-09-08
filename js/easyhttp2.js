/**
 * EasyHTTP Library
 * Library for making HTTP Requests (with promises)
 * 
 * @version 2.0.0
 * @author Cavdy
 * @license MIT
 * 
 */

 class EasyHTTP {
     // Make HTTP Get Request
     get(url) {
         return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
         });
     }

     // Make HTTP Post Request
     post(url, data) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(response => response.json())
           .then(data => resolve(data))
           .catch(error => reject(error));
        });
    }

    // Make HTTP Put Request
    put(url, data) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'PUT',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(response => response.json())
           .then(data => resolve(data))
           .catch(error => reject(error));
        });
    }

    // Make HTTP Delete Request
    delete(url) {
        return new Promise((resolve, reject) => {
           fetch(url, {
               method: 'DELETE',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(response => response.json())
           .then(() => resolve('Resource Deleted...'))
           .catch(error => reject(error));
        });
    }
 }