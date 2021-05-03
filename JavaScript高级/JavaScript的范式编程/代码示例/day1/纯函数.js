const arr = [1,2,3,4,5,6,7]

// 纯函数
console.log(arr.slice(0,3));
console.log(arr.slice(0,3));
console.log(arr.slice(0,3));

//  不纯函数
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));

//  相同的输入 有相同的输出

function getSum (n1,n2){
    return n1+n2
}

// memoize 记忆缓存函数

function memoize (fn){
    const cache = {};
    return function (){
        const key = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(fn,arguments)
    }
}


