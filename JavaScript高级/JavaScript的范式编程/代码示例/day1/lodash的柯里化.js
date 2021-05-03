const _ = require('lodash')

function getSum(a,b,c){
    return a+b+c
}

const currySum = _.curry(getSum)

console.log(currySum(1,2,3));
console.log(currySum(1,2)(3));

const number = currySum(8)

console.log(number(2,10));