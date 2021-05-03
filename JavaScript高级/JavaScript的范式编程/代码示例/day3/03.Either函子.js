class Left {
    static of(value) {
        return new Left(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return this
    }
}

class Right {
    static of(value) {
        return new Right(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return Right.of(fn(this._value))
    }
}


function parseJSON(str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({errer: e.message})
    }
}

let r = parseJSON('{"naem":"23"}')
console.log(r);
