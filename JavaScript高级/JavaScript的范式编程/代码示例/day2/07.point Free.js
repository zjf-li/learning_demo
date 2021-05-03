// 非 point Free 模式
// const f = (word)=>{
//     return word.toLowerCase().replace(/\s+/g,'_')
// }

// point Free 
const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g,fp.toLower))