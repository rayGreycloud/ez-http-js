const http = new ezHTTP;

// Testing GET request - get users from testing API
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User data for post and put tests
const data = {
  name: 'Darth Vader',
  username: 'YoshiLover99',
  email: 'dvader@sith.com'
}

// Testing POST request - post new user to testing API 
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
  
// Testing PUT request - post new user to testing API 
// http.put('https://jsonplaceholder.typicode.com/users/1', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
  
// Testing PUT request - post new user to testing API 
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
