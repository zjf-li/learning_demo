## 函数式编程

为什么要学习函数式编程

函数式编程的特性（纯函数 柯里化 函数组合等）

函数式编程的应用场景

函数式编程库 lodash

### 为什么要学习函数式编程

函数式编程是非常古老的一个概念，早于第一台计算机的诞生

那我们为什么现在还要学函数式编程？

- 函数式编程是随着React的流行受到越来越多的关注
- Vue3 也开始拥抱函数式编程
- 函数式编程可以抛弃this
- 打包过程中可以更好的利用 tree shaking 过滤无用代码
- 方便测试，方便并行处理
- 有很多库可以帮助我们进行函数式开发：lodash underscore ramda

### 什么是函数式编程

函数式编程（Function Programming，FP），FP是编程范式之一，我们常听说的编程范式还有面向过程编程、面向对象编程

- 面向对象编程的思维方式：把现实世界中实物抽象撑程序世界的类和对象，通过封装，继承和多态来演示事物的联系

- 函数式编程的思维方式：把现实世界的事物和事物之间的联系抽象到程序世界（对运算过程进行抽象）

- 程序的本质：根据输入通过某种运算获得相应的输出，程序开发过程中会涉及很多有输入和输出的函数

- 函数式编程中的函数不是程序中的函数（方法），而是数学的函数即映射关系，例如 y = six（x），x和y的关系

- 相同的输入始终要得到相同的输出（纯函数）

- 函数式编程用来数据（函数）之间的映射


```js
// 非函数式
let num1 = 2;
let num2 = 3;
let sun = num1+num2;

// 函数式
function add (n1,n2){
	return n1+n2
}
let sum = add(2,3)

```

### 为什么说函数是一等公民

- 函数可以存储在变量中 

- 函数可以作为参数

- 函数可以作为返回值


在js中 函数就是一个普通对象（new Function()）, 我们可以把函数存储到变量/数组中，它还可以作为另一个函数的参数和返回值，甚至我们可以在程序运行的时候通过 new Function () 来构造一个新的函数。

```js
// 把函数赋值给变量
let fn = function (){
    console.log('first-class Function')
}
// 一个示例
const BlogController = {
index (posts) { return views.index(posts)},
show (post) { return Views.show(post)},
create (attrs) { return Db.create(attrs)},
update (post,attrs) { return Db.update(post，attrs)},
destroy (post) { return Db.destroy(post) }
}

const BlogController = {
index:views.index,
show (post) { return Views.show(post)},
create (attrs) { return Db.create(attrs)},
update (post,attrs) { return Db.update(post，attrs)},
destroy (post) { return Db.destroy(post) }
}

```

函数是―等公民是我们后面要学习的高阶函数、柯里化等的基础。

### 高阶函数

什么是高阶函数 

- 可以把函数作为参数传递给另一个函数

- 可以把函数作为另一个函数的返回结果


```
手写forEach方法
手写filter方法
手写once函数
```

#### 使用高阶函数的意义

- 抽象可以帮我们屏蔽细节，只需要关注与我们的目标

- 高阶函数是用来抽象通用的问题


#### 常用高阶函数

forEach map filter every some find findIndex reduce sort 。。。 

### 闭包

闭包：函数和其周围的状态（词法环境）的引用绑定在一起形成闭包

可以在另外一个作用域中调用一个函数的内部函数 并访问该函数的作用域中的成员

也就是说正常的函数使用完后会被释放，但是如果你返回一个成员并引用内部的变量，那么函数执行完后不会被引**用**

**闭包的本质：函数在执行的时候会放到一个执行栈上当函数执行完毕后会从执行栈上移除，但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问外部函数的成员**

好处就是延长了变量的作用范围

调试工具  call stack 函数调用栈    Scope 作用域

## 纯函数 

- 纯函数的概念 就是**相同的输入永远会得到相同的输出**，而且没有任何可观察的副作用
- 纯函数就类似数学中的函数 用来描述输入和输出之间的关系
- lodash 就是一个纯函数的功能库 提供了对数组、数字、对象、字符串、函数等操作的一些方法 
- 数组的slice和splice 分别是 纯函数和不纯函数

- silce 返回数组中的指定部分，不会改变原数组
- splice 对数组进行操作返回该数组，会改变原数组

```js
const arr = [1,2,3,4,5,6,7]

// 纯函数
console.log(arr.slice(0,3));
console.log(arr.slice(0,3));
console.log(arr.slice(0,3));

//  不纯函数
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));
console.log(arr.splice(0,3));

//  相同的输入 有相同的输出

function getSum (n1,n2){
    return n1+n2
}
```

函数式编程不会保留计算中间的结果，所以变量是不可变得的 （无状态的）

我们可以把一个函数的执行结果交给另一个函数去处理

### Lodash 纯函数库

看文档

### 纯函数的记忆缓存

- 可缓存

- 因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来

- ```js
  function memoize (fn){
      const cache = {};
      return function (){
          const key = JSON.stringify(arguments)
          cache[key] = cache[key] || fn.apply(fn,arguments)
      }
  }
  ```

- 可测试 

- 纯函数让测试更方便

- 并行处理

- 在多线程环境下并行操作共享的内存出具很可能会出现意外情况

- 纯函数不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数（web worker）

- ### 函数的副作用


纯函数的概念 就是**相同的输入永远会得到相同的输出**，而且**没有任何可观察的副作用**

```js
//  不纯的
let number = 18;
function checkAge (age){
    return age>=number
}
//  纯的 (有硬编码，后续可以通过柯里化解决)

function checkAge(age){
    let number = 18;
    return age>=mini;
}
```

 副作用让一个函数变得不纯， 纯函数的根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用

副作用来源

配置文件

数据库

获取用户的输入

。。。

所有的外部交互都会可能代理副作用，副作用也使方法的通用性下降不适合扩展和可重用性，同时副作用会给程序带来安全隐患，给程序带来不确定性，但是副作用不可能完全禁止，尽可能控制他们在可控范围内发生

### 柯里化（Haskell Brooks Curry）

Haskell Brooks Curry 是一个人的名字 

使用柯里化解决上一个案例中硬编码的问题

```js
// 硬编码写法
function checkAge(age) {
    let number = 18;
    return age >= number;
}

// 常规纯函数写法
function checkAge(number, age) {
    return age >= number
}

// 柯里化写法   不够通用，只能为checkAge服务
function checkAge(number) {
    return function (age) {
        return age >= number
    }
}

// es6
const checkAge = number => (age => (age >= number))

```

#### 柯里化的概念

- 当一个函数有多个参数的时候先传递一部分参数调用他（这部分参数一会永远不变）
- 然后返回一个新的函数接收剩余的参数，返回结果

### Lodash中的柯里化

_.curry（fn）

- 功能：创建一个函数，该函数接收一个或多个f的参数，如果fn所需要的参数都被提供则执行fn 并返回执行的结果，否则继续返回该函数并等待接收剩余的参数
- 参数：需要柯里化的函数
- 返回值：柯里化后的函数

### 柯里化方案

```js
const _ = require('lodash')

const match = _.curry(function(reg,str){
    return str.match(reg)
})

const haveSpace = match(/\s+/g)  // 查找空字符串
const haveNumber= match(/\d+/g)  // 查找数字

console.log(haveSpace('AFDADF DASFDSA '));
console.log(haveNumber('12SFSSAAS'));

const filter = _.curry(function(fn,array){
    return array.filter(fn)
})

const findSpace = filter(haveSpace)

console.log(findSpace(['asfasdf asfsadf','adfadsfasd','ad a']));
```

### 柯里化原理解析

```js

function curry(fn){
    return function curriedFn(...args){
        // 判断实际参数和形参的个数
        if(args.length < fn.length){
            return function(){  // arguments
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        return fn(...args)

    }
}
```

### 柯里化总结

- 柯里化可以让我们给一个函数传递较少的参数得到一个已经记住了某些固定参数的新函数
- 这是一种度函数参数的缓存
- 让函数变得更灵活，让函数的颗粒度更小
- 可以把多元函数转成一元函数，可以组合使用函数产生强大的功能

### 下期知识预告

函数组合



## 函数组合

纯函数和柯里化很容易写出洋葱代码

比如，获取数组的最后一个元素再转换成大写字母，**_.toUpper(_.first(_.reverse(array)))**

函数组合可以让我们把细粒度的函数重新组合生成一个新的函数

#### 数据管道

程序中使用函数处理数据的过程，比如给fn函数输入参数a，然后返回b，这个过程就是管道

![1618835103961](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1618835103961.png)

如果fn函数比较复杂，我们可以把函数fn拆分成多个小函数，此时多了中间运算过程产生 的m和n

下面这张图中可以想象成吧fn这个管道拆分成了3个管道，f1，f2,f3  数据a 通过管道f3 得到结果 m，m再通过管道f2得到结果n，n通过管道f1 得到最终结果b

![1618835217671](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1618835217671.png)

```
fn = compost(f1,f2,f3);
b = fn(a)
```

函数组合（compose）:如果一个函数要经过多个函数处理才能得到最终值，这个时候可以把中间过程的函数合并成一个函数

函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果

函数组合默认是从右到左执行的

#### Lodash 中的组合函数

在lodash中使用 我们可以使用flow 或者flowRight 来对函数进行组合 、

#### Lodash函数组合的原理

```js
const compose = (...args) => {
    return(value) => {

        return args.reduce((acc, fn) => {
            return fn(acc)
        }, value)
    }
}
```

#### 函数组合的结合律

我们既可以把a和b函数结合，还可以把b和a函数组合，结果都是一样的

#### 函数组合的调试

通过自己写辅助函数的方式去调试函数的运行

```
const log = (targ,v)=>{
 console.log(targ,v);
 return v
}
```

#### lodash 的FP模块 （lodash/fp）

lodash的fp模块 提供了实用的对函数式编程友好的方法

提供了不可变 的方法

```js

const fp = require('lodash/fp');

const f = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))
console.log(f('NI HAO SHI JIE'));
```

#### point Free

point Free 我们可以把数据处理的过程定义成与数据无关的合成运算，不需要用到代表数据的那个参数，只要把简单的运算步骤合成到一起，再使用这种模式之前我们需要定义一些辅助的基本运算函数 

- 不需要指明处理的数据
- 只需要合成运算过程
- 需要定义一些辅助的基本运算函数

```
const f = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))
```

#### point Free 的案例使用

把一个字符串的首字母提取并且转换成大写，使用 .  作为分隔符

world wild web ==> W. W. W

先思路分析： 

### Functor （函子）

#### 为什么要学习函子

到目前为止我们已经学习了函数式编程的一些基础，但是我们还没有演示在函数式编程中如何把副作用控制在可控的范围内、异常处理，异步操作等；

#### 什么是Functor

容器：包含值和值得变形关系（这个变形关系就是函数）

函子：是一个特殊的容器，通过一个普通的**对象来实现**，该对象具有map方法，map方法可以运行一个函数对值进行处理（变形关系）

#### 函数使用总结

- #### 函数式编程的运算不直接操作值，而是由函子完成

- 函子就是一个一个实现了map的契约对象

- 我们可以把函子想象成一个盒子，这个盒子里封装了一个值

- 想要处理盒子中的值，我们需要给盒子的map方法传递一个处理值得函数（纯函数），由这个函数来对值进行处理

- 最终map方法返回一个包含新值得盒子（函子）

我们当前使用函子的问题

如果我们的初始值为null，或者操作时异常报错怎么解决

#### mayBe函子

- 我们在编程的过程中可能会遇到很多错误，需要对这些错误做出相应的处理
- mayBe 函子的作用就是可以对外部的空值情况做处理（控制副作用在允许的范围）



注意：虽然mayBe函子帮助我们处理了异常问题，但是我们无法感知到异常的位置

#### Either函子

- Either 俩者中的任何一个，类似于 if ...else 的处理
- 异常会让函数变得不纯，Either 函子可以用来做异常处理

#### IO函子

- IO函子中的_value 是一个函数，这里把函数作为值来处理
- IO函子可以不纯的动作存储到_value 中,延迟执行这个不纯的操作（惰性执行），包装当前的操作纯
- 把不纯的操作交给调用者来处理

#### folktale

##### task异步执行

异步任务的实现过于复杂，我们使用folktale 中的Task来演示

folktale 是一个标准的函数式编程库

和lodash、ramda 不同的是。他没有提供很多功能函数

只提供了一些函数式编程的操作，例如：compose、curry 等，一些函子 Task、Either、Maybe等

我们用2版本来演示folktale

#### pointed函子

pointed函子是实现了of静态方法的函子

of方法是为了避免使用new 来创建对象，更深层的含义是of方法用来把值放到上下文的Context （把值放到容器中，使用map来处理值）

这就是一个概念，理解就好

#### Monad 单子

在