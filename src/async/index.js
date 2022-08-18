const fnAsync = ()=>{
    return new Promise ((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve('async/await'), 2000)
        : reject(new Error('Error async/await'))
    });
}

const anotherFunction = async () =>{
    const awaitFn = await fnAsync();
    console.log(awaitFn);
}

console.log('Before');
anotherFunction();
console.log('After');
