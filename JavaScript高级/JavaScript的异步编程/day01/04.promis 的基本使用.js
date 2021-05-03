const pormise = new Promise((reslove,reject)=>{
    // reslove(100)
    reject('err')
})

pormise.then(function(value){
    console.log(value);
},function(err){
    console.log(err);
})
console.log('end');