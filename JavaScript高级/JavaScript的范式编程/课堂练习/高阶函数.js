// forEach  

// function forEach(array,fn){
//     for(let i=0;i<array.length;i++){
//         fn(array[i],i)
//     }
// }

let arr = [0,5,4,2]

// forEach(arr,function(item,i){
//     console.log(item,i);
// })


//  filter 

function filter(array,fn){
    const arr = []
    for(let i=0;i<array.length;i++){
       let result =  fn(array[i],i)
       if(result) {
        arr.push(array[i])
       }
    }
    return arr;
}

let a = filter(arr,function(item){
    return item > 2
})
console.log(a);

//  模拟一个 noce 函数 

function noce(fn){
    let temp = true;
    return function(){
        if(temp){
            temp = false
            fn.apply(fn,arguments)
        }
    }
}

const zfb = noce(function(number){
    console.log('支付宝到账'+number+'元');
})

zfb(1000)
zfb(1000)
zfb(1000)
zfb(1000)

