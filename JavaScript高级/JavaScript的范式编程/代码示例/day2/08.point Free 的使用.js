// 把一个字符串的首字母提取并且转换成大写，使用 .  作为分隔符

// world wild web ==> W. W. W

const fp = require('lodash/fp')

// const f = fp.flowRight(fp.join('. '),fp.map(fp.first),fp.map(fp.toUpper),fp.split(' '))
const f = fp.flowRight(fp.join('. '),fp.map(fp.flowRight(fp.first,fp.toUpper)),fp.split(' '))

console.log(f('world wild web'));