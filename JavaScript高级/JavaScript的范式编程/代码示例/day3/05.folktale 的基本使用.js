
const {compose,curry} = require('folktale/core/lambda')
const {toUpper,first} = require('lodash')

//  第一个参数表示形参的个数
const f = curry(2,(x,y)=>{
    return x+y
})

console.log(f(1,2));
console.log(f(1)(2));

const r = compose(toUpper,first)
console.log(r(['one','two']));