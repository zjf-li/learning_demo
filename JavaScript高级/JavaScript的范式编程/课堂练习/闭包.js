
// function mackPower(power,number){
//     return Math.pow(number,power)
// }
// // 基本工资+绩效工资
// console.log(mackPower(2,2));
// console.log(mackPower(2,6));
// console.log(mackPower(2,9));
// console.log(mackPower(9,9));

function gz(jb){
    return function (jx){
        return jb+jx
    }
}
const gzV1 = gz(15000)
const gzV2 = gz(12000)
const gzV3 = gz(9000)


console.log(gzV1(2000));
console.log(gzV2(2000));
console.log(gzV3(3000));