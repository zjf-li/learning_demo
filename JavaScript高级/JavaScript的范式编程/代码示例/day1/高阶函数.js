// forEach

function forEach (array,fn){
    for(let i=0;i<array.lenght;i++){
        fn(array[i])
    }
}

//  filter 

function filter(array,fn){
    const result = []
    for(let i = 0;i<array.lenght;i++){
        if(fn(array[i])){
            result.push(array[i])
        }
    }
    return result;
}

//  once
function once(fn){
    let done = true;
    return function (){
        if(done){
            done = false;
            fn.apply(this,arguments)
        }
    }
}

const zfb = once((moany)=>{
    console.log('支付了'+ moany);
    return moany
})

zfb(5)
zfb(5)
zfb(5)
zfb(5)