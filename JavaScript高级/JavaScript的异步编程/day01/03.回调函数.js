
function foo(callbakc){
    console.log('你去买菜');
    setTimeout(()=>{
        callbakc()
    },3000)
}

foo(function(){
    console.log('你要先...');
})