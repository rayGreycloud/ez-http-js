/** 
 * ezHTTP Library 
 * Library for making HTTP requests 
 * 
 * @version 2.0.0 
 * @author rayGreycloud 
 * @license MIT 
 *
 **/
 
class ezHTTP {
  
  // GET request 
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json()) 
        .then(data => resolve(data))
        .catch(err => reject(err));  
    });
  }
  
  // POST request 
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json()) 
      .then(data => resolve(data))
      .catch(err => reject(err)); 
    });
  }
  
  // PUT request 
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }
  
  // DELETE request 
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => resolve('User deleted.'))
        .catch(err => reject(err));
    });
  }
    
}