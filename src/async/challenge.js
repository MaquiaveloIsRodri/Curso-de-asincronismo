import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(Url_Api){
    const response = await fetch(Url_Api);
    const data = await response.json();
    return data;
}


const anotherFunction = async (url) => {
    try{
        const products = await fetchData(`${url}/products`);
        const product = await fetchData(`${url}/products/${products[0].id}`);
        const categories = await fetchData(`${url}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(categories.name);
    }catch(error){
        console.log(error);
    }
}
anotherFunction(API);
