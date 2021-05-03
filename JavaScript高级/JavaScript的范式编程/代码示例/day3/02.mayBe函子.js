class MayBe {
    static of(value){
        return new MayBe(value)
    }

    constructor(value){
        this._value = value;
    }
    map(fn){
        return this.isErr() ? MayBe.of(null):MayBe.of(fn(this._value))
    }
    isErr(){
        return this._value ===null || this._value === undefined;
    }
}

const r = MayBe.of('safdsfsa')
            .map(x=>x.toUpperCase())
            .map(x=>null)
            .map(x=>x.split(''))
            console.log(r);