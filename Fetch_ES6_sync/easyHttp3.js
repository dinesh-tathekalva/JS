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
    async get(url){
        const response = await fetch(url)
        const resData = await response.json()
        return resData
    }

    //Make a HTTP post request
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }

    //Make a HTTP put request
    async put(url, data){

        const response = await fetch(url, {
            method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
        })
        const resData = await response.json()

        return resData

    }


    //Make a HTTP DELETE request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            }
          })
          const resData = await 'Resource deleted'
        return resData
        }
}
