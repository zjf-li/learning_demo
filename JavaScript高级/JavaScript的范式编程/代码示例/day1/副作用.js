//  不纯的
let number = 18;
function checkAge (age){
    return age>=number
}
console.log(checkAge(16));
console.log(checkAge(16));
number = 14;
console.log(checkAge(16));
console.log(checkAge(16));

//  纯的 (有硬编码，后续可以通过柯里化解决)

// function checkAge(age,number){

//     return age>=number;
// }