const _ = require('lodash');

const reverse = arr=>arr.reverse();
const first = arr => arr[0];
const toUpper = str =>str.toUpperCase();

const f = _.flow(reverse,first,toUpper);

console.log(f(['onw','tow','therr']));