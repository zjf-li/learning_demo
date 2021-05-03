const _ = require('lodash')

const match = _.curry(function(reg,str){
    return str.match(reg)
})

const haveSpace = match(/\s+/g)  // 查找空字符串
const haveNumber= match(/\d+/g)  // 查找数字

console.log(haveSpace('AFDADF DASFDSA '));
console.log(haveNumber('12SFSSAAS'));

const filter = _.curry(function(fn,array){
    return array.filter(fn)
})

const findSpace = filter(haveSpace)

console.log(findSpace(['asfasdf asfsadf','adfadsfasd','ad a']));