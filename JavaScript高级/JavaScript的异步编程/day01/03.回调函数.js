
function foo(callbakc){
    console.log('你去买菜');


    a('洗菜',()=>{
     a ('切菜',()=>{
        a ('切菜',()=>{})
   
             
         })

    })

}
function a(str,fn){
    console.log(str);
    fn()
}

foo(function(){
    console.log('你要先...');
})