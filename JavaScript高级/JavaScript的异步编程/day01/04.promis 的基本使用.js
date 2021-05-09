// const pormise = new Promise((reslove,reject)=>{
//     // reslove(100)
//     reject('err')
// })

// pormise.then(function(value){
//     console.log(value);
// },function(err){
//     console.log(err);
// })
// console.log('end');



const promise = new Promise((resolve,reject)=>{

    resolve('23')

    console.log(32423);

    // reject('err')
})

// 链式操作
const data = promise
.then((res)=>{
    console.log(res);
    return 'ok'
})
.then(res=>{
    console.log(res);
    return 78
})
.then(res=>res+34)
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
