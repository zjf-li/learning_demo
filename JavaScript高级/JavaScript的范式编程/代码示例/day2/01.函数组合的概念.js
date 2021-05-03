const compose = (fn1,fn2)=>{
    return function (value){
       return fn1(fn2(value)) // 洋葱代码并没有减少，只是封装起来了
    }
}

const arr = [1,2,3,4,5,6]

const arrReverse = (arr)=>{
    return arr.reverse()
}
const arrLast = (arr)=>{
    return arr[0]
}

console.log(compose(arrLast,arrReverse)(arr));