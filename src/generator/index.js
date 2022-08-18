function* gen(){
    yield 1;//cada uno de estos , es un freno de la funcion
    yield 2;
    yield 3;
}

var g = gen();//la ponemos dentro de una variable

console.log(g.next().value);//con el next la recorremos el ciclo
console.log(g.next().value);
console.log(g.next().value);

function* fnArray(array){
    for(let value of array){
        yield value;
    }
}

var g = fnArray([1,2,3]);

console.log(g.next().value);//va recorriendo el array,por cada next va a imprimir el valor del array
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);//si no existe mas elementos, va a dar undefined