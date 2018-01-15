const http = new ezHTTP();

// GET request for posts to testing API  
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//   if (err) {
//     console.log(err);  
//   } else {
//     console.log(response);    
//   }
// });

// GET request for single post to testing API  
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err);  
  } else {
    console.log(response);    
  }
});