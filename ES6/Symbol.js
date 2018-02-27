//Symbol原始数据类型，表示独一无二的值。

//ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。

//Symbol是javascript语言的第七中数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。Symbol值通过Symbol函数生成。是独一无二的


let s = Symbol();
console.log(typeof s);//symbol


//对象的属性现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

//注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

let s1 = Symbol('foo');
let s2 = Symbol('bar');
console.log(s1);
console.log(s2);

//如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个Symbol值。
 const obj = {
     toString(){
         return 'abc';
     }
 };
 const sym = Symbol(obj);
 console.log(sym);

//Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的。
// 没有参数的情况
let sm1 = Symbol();
let sm2 = Symbol();

console.log(sm1 === sm2); // false

// 有参数的情况
let sy1 = Symbol('foo');
let sy2 = Symbol('foo');

console.log(sy1 === sy2); // false


//Symbol 值不能与其他类型的值进行运算，会报错。
let le = Symbol('huizai');
// le + 'huizaizai';//Cannot convert a Symbol value to a string

//但是，Symbol 值可以显式转为字符串。
let ksym = Symbol('mString');
console.log(String(ksym));

//另外，Symbol 值也可以转为布尔值，但是不能转为数值。
console.log(Boolean(ksym));
// console.log(Number(ksym)); Cannot convert a Symbol value to a number






//2.作为属性名的Symbol
// 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let b = {
    [mySymbol]: 'Hello!'
};

// 第三种写法
let c = {};
Object.defineProperty(c, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
console.log(a[mySymbol]); // "Hello!"
console.log(b[mySymbol]); // "Hello!"
console.log(c[mySymbol]); // "Hello!"
//注意，Symbol 值作为对象属性名时，不能用点运算符。用方括号。


//4.属性名的遍历
//Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。


//Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。



