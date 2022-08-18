import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function fetchData (Url_Api){
    return fetch(Url_Api)
}


fetchData(`${API}/products`)
.then(res => res.json())
.then(data => {
    console.log(data);
    return fetchData(`${API}/products/${data[0].id}`)
})
.then(res => res.json())
.then(data=> {
    console.log(data.title);
    return fetchData(`${API}/categories/${data.category.id}`)
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error))
.finally(() => console.log('finally'));