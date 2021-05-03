// // 硬编码写法
// function checkAge(age) {
//     let number = 18;
//     return age >= number;
// }

// // 常规纯函数写法
// function checkAge(number, age) {
//     return age >= number
// }

// // 柯里化写法
// function checkAge(number) {
//     return function (age) {
//         return age >= number
//     }
// }

// // es6
// const checkAge = number => (age => (age >= number))


// ! 硬编码的方式
// function checkAge(age) {
//     const number = 18;
//     return age >= number
// }

// ! 纯函数的方式去写

// function checkAge(age, number) {
//     return age >= number;
// }

// ! 柯里化的方式 颗粒化

function checkAge(number) {
    return function (age) {
        return age >= number
    }
}


const _ = require('lodash');

// curry 的参数是一个函数,返回值是一个被柯里化后的函数
const f = _.curry(function (a, b, c) {
    return a + b + c
})

const g  = f(1,2)(9)
console.log(g);

