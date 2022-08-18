import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

const newProduct = {
    "title": "Rodrigo en curso",
    "price": 10,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

function fetchDataPost (Url_Api,data){
    const PostFetch = fetch(Url_Api, {
        method: 'POST',//va siempre en mayuscula
        mode: 'cors',//Estos son los permisos que va a tener
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
    return PostFetch;
}

fetchDataPost(API+'/products',newProduct)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))