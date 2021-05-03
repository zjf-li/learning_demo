function curry(fn) {
    return function curriedFn(...args) {
        // 判断实际参数和形参的个数
        if (args.length < fn.length) {
            return function () { // arguments
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return fn(...args)

    }
}

function getSum(a, b, c) {
    return a + b + c;
}

const curryGetSum = curry(getSum)

console.log(curryGetSum(1, 2, 3));
console.log(curryGetSum(8)(1, 2));
console.log(curryGetSum(1, 3)(5));


function curry(fn) {
    return function cur(...args) {
        if (args.length < fn.length) {
            return function () { // arguments
                return cur(...args.concat(Array.from(arguments)))
            }
        }
        return fn(args)
    }
}
