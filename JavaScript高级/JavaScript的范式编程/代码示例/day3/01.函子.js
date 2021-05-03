// class Container {
//     constructor(value){
//         this._value = value;
//     }
//     map(fn){
//         return new Container(fn(this._value))
//     }
// }

// const data = new Container(5)
//     .map(x=>x+7)
//     .map(x=>x*2)
//     console.log(data);

//  封装一下

class Container {
   static of(value){
        return new Container(value)
    }

    constructor (value){
        this._value = value;
    }
    map(fn){
        return Container.of(fn(this._value))
    }
}

const data = new Container(5)
    .map(x=>x+7)
    .map(x=>x*2)
    console.log(data);