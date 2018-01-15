const http = new ezHTTP();

// GET request for posts to testing API  
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
//   if (err) {
//     console.log(err);  
//   } else {
//     console.log(response);    
//   }
// });

// // GET request for single post to testing API  
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//   if (err) {
//     console.log(err);  
//   } else {
//     console.log(response);    
//   }
// });

// POST request to add post to testing API  
// const data = {
//   userId: 500,
// //  id: 200,
//   title: "A Made-up Title",
//   body: "Yada Yada Yada Bing Bing Bing\nYada Yada Yada Bing Bing Bing"
// };
// 
// http.post(
//   'https://jsonplaceholder.typicode.com/posts',
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);  
//     } else {
//       console.log(response);    
//     }
//   }
// );

// PUT request to testing API to update post
const data = {
  userId: 1,
  id: 1,
  title: "A Made-up Title",
  body: "Yada Yada Yada Bing Bing Bing\nYada Yada Yada Bing Bing Bing"
};

http.put(
  `https://jsonplaceholder.typicode.com/posts/${data.id}`,
  data,
  function (err, response) {
    if (err) {
      console.log(err);  
    } else {
      console.log(response);    
    }
  }
);
