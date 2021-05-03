const _ = require('lodash')

let arr = [213,31,4,31,3,3,34,34]
const obj = {
    a:{
        c:{
            d:12
        }
    }
}

console.log(_.head(arr));
console.log(_.reverse(arr));
console.log(_.isArray(45));
const obj2 = _.cloneDeep(obj)
obj2.a.c.d = 56;
console.log(obj);

