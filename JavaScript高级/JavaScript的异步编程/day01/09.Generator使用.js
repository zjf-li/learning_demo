function *ber(){
    console.log('render');
 const res = yield 'foo'
 console.log(res);
}

const generator = ber()
generator.next()
generator.next('56')