const array = [
    1,
    2,
    3,
    4,
    5
];

const revers = arr => arr.reverse();

const first = arr => arr[0];

const compose = (...args) => {
    return(value) => {

        return args.reduce((acc, fn) => {
            return fn(acc)
        }, value)
    }
}
const f = compose(revers, first)
console.log(f(array));
