function sum(num1 , num2 ){
    return num1 + num2;
}//Primera function 

function calc(num1 , num2 , callback){
    return callback(num1 , num2);
}//Aca desarrollamos la funcion con el callback

console.log(calc(2 , 3 , sum));//Aca se coloca sin parentesis el callback para que se ejecute


setTimeout(()=>{
    console.log('Hola mundo');
},2000);//Aca va a recibir una funcion y un tiempo de espera


function gritting(name){
    console.log(`Hola ${name}`);
}
setTimeout(gritting,2000,'Rodrigo')//Primero se debe pasar la funcion , luego el tiempo de espera y luego los argumentos que se va a pasar a la funcion
