const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest ;

const API = 'https://api.escuelajs.co/api/v1';

function fetchData (urlApi ,call){
    let xhttp = new XMLHttpRequest;
    xhttp.open('GET', urlApi, true);//Abre una conexion con el servidor
    xhttp.onreadystatechange = (event) => {
        if(xhttp.readyState === 4){//Aca vamos a validar el tipo de estado en el que se encuentra 
            if(xhttp.status ===200){//validamos el estado de la respuesta
                call(null,JSON.parse(xhttp.responseText));//Aca vamos a parsear el texto de la respuesta y lo convertimos a un objeto JSON
            }else{
                const error = new Error('Error' + urlApi);
                return call(error,null); //Aca vamos a retornar un error y un null por q no regreso ningun dato
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`,(error1,Data1)=>{//Traemos los datos de la primera api
if (error1) return console.error(error1);
    fetchData(`${API}/products/${Data1[0].id}`,(error2,Data2)=>{//Aca hacemos la segunda peticion para obtener el producto con el id que nos regreso la primera peticion
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${Data2?.category?.id}`,(error3,data3)=>{//Aca hacemos la tercera peticion 
            if(error3) return console.error(error3);
            console.log(Data1[0]);
            console.log(Data2.title);
            console.log(data3.name);

        })
    })
})