console.log('global begin');

function ber() {
    console.log('ber task');
}

function foo() {
    console.log('foo task');
    ber()
}

foo();

console.log('global end');
