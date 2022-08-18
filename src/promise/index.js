
const cows = 15;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(cows);
    }else {
        reject(cows);
    }
})

countCows.then(result => {
    console.log(result);
}).catch(error => {//retorna si llega haber un error
    console.log(error);
}).finally(() => {//retorna cierre de la promesa
    console.log('finally');
})