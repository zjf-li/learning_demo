
const fp = require('lodash/fp');

const f = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))
console.log(f('NI HAO SHI JIE'));