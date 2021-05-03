const _ = require('lodash');
// splist
const split = _.curry((sep,str)=>_.split(str,sep))

const join = _.curry((sep,arr)=>_.join(arr,sep))

const map = _.curry((fn,arr)=>_.map(arr,fn))

const logs = _.curry((targ,v)=>{
    console.log(targ,v);
    return v
})

const f = _.flowRight(join('-'),logs('render'),map(_.toLower),split(' '))

console.log(f('NI HAO SHI JIE'));