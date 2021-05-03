window.$ = function(selsect){
   const selsectList = document.querySelectorAll(selsect)
   if(selsectList?.length>1){
       return selsectList
   }
   return selsectList[0]
}
// 专题课
