
  const _ = require('lodash')

function getSum(n1,n2){
    console.log(n1+n2);
    return n1+n2
  }

  const getSumMemo = _.memoize(getSum)
   
 let a = getSumMemo(1,4)
 let b = getSumMemo(1,4)
 let c = getSumMemo(1,4)
 let d = getSumMemo(1,4)

 console.log(a,b,c,d);
