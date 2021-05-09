console.log('start');

setTimeout(() => {
    console.log('a');
}, 0)

setTimeout(() => {
     
    setTimeout(() => {
        console.log('b');
    }, 1000)

    console.log('c');
}, 2000)

console.log('end');