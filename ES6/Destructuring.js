/**
 * Created by yp-tc-4816 on 2018/2/3.
 */
//数组和对象的解构赋值
//1.数组的解构赋值

let a = 1;
let b = 2;
let c = 3;
let [a1,b1,c1] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);
console.log(a1);
console.log(b1);
console.log(c1);
//可以从数组中提取值，按照对应位置，对变量赋值
//这种写法属于"模型匹配"，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

var [aa,bb,cc] = [1,2,3];
console.log(aa);
console.log(bb);
console.log(cc);

let [foo,[[bar],bcc]] = [1,[[1],3]];
console.log(foo);
console.log(bar);
console.log(bcc);
//如果解构不成功，变量的值就等于undefined
let [baa,faa] = [1];
console.log(faa);//undefined
let [x,y] = [1,2,3,4,5];//也可以匹配成功

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

//报错
/*
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
*/
let [xx, yy, zz] = new Set(['a', 'b', 'c']);
console.log(xx) // "a"

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth) // 5
//上面代码中，fibs是一个 Generator 函数（参见《Generator 函数》一章），原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。


//默认值
let [fao = true] = [];
 console.log(fao);





 //2.对象的解构赋值

//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

let { br, fbo } = { fbo: "aaa", br: "bbb" };
console.log(br);
console.log(fbo);
let {baz} = {foo:"aaa",bar:"bbb"};
console.log(baz);//undefined

//与数组一样，解构也可以用于嵌套结构的对象
let obj = {
    p:[
        'Hello',
        {yxx:'World'}
    ]
};

let { p : [xyy,{yxx}]} = obj;
console.log(xyy);
console.log(yxx);

//对象的解构也可以指定默认值
var {xyz = 3} = {};
console.log(xyz);

var {x1 = 3} = {x1: null};
console.log(x1) // null
//上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。


//3.字符串的解构赋值
//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
const [a11,b11,c11,d11,e11] = 'hello';
console.log(a11);
console.log(b11);
console.log(c11);
console.log(d11);
console.log(e11);
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length:len} = "hello";
console.log(len);


//4.数值和布尔值的解构赋值
//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let {toString: ss} = 123;
console.log(ss === Number.prototype.toString);// true

let {toString: sw} = true;
console.log(sw === Boolean.prototype.toString);// true


//5.函数参数的解构赋值
//函数的参数也可以使用解构赋值
function add([argX,  argY]){
    console.log(argX+argY);
    return argX + argY;
}

console.log(add([4, 2])); // 3


//6.圆括号问题
//解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

//由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

//但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。



//7.用途,变量的解构赋值用途很多
//(1)变换变量的值
let xhh = 1;
let yhh = 2;
[xhh,yhh] = [yhh,xhh];
console.log(xhh,yhh);
//(2)从函数返回多个值

// 返回一个数组
function example1() {
    return [1, 2, 3];
}
let [ahh, bhh, chh] = example1();

// 返回一个对象
function example2() {
    return {
        fhh: 1,
        boo: 2
    };
}
let { fhh, boo } = example2();
console.log(ahh,bhh,chh,fhh,boo);

//(3)函数参数的定义
//解构赋值可以方便地将一组参数与变量名对应起来

// 参数是一组有次序的值
function f1([x2, y2, z2]) {
    console.log(x2,y2,z2);
}
f1([1, 2, 3]);

// 参数是一组无次序的值
function f2({x, y, z}) {
    console.log(x,y,z);
}
f2({z: 3, y: 2, x: 1});

//(4)提取JSON的数据
//解构赋值对提取JSON对象中的数据，尤其有用
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

//(5)函数参数的默认值
/*
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
     // ... more config
     }) {
    // ... do stuff
};
*/
//指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。


//(6)遍历Map结构
//任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
//如果只想获取健名，或者只想获取键值，可以写成下面这样。
// 获取键名
for (let [key] of map) {
    // ...
    console.log(key);
}

// 获取键值
for (let [,value] of map) {
    // ...
    console.log(value);
}


//(7)输入模块的指定方法
//加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

// const { SourceMapConsumer, SourceNode } = require("source-map");


