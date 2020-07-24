/**
 * 
 * 
 * 
 * @version 2.0.0
 * @author Dinesh
 * @license MIT
 * 
**/

class EasyHTTP {
    //Make a HTTP get request
    get(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make a HTTP post request
    post(url, data){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make a HTTP put request
    put(url, data){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }


    //Make a HTTP DELETE request
    delete(url) {
          return new Promise((resolve, reject) => {
            fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-type': 'application/json'
              }
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted...'))
            .catch(err => reject(err));
          });
        }
}
