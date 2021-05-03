function momeize(fn) {
    const obj = {};
    return function () {
        const key = JSON.stringify(arguments);
        obj[key] = obj[key] || fn.apply(fn, arguments)
    }
}

function getSum(n1,n2){
    console.log(n1+n2);
    return n1+n2
  }

const getSumMemo = _.memoize(getSum)
   
 let a = getSumMemo(1,4)