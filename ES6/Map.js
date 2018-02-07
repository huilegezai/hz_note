/**
 * Created by yp-tc-4816 on 2018/2/7.
 */
/*
 Map
 */
/*
 含义和基本用法
 JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

 为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
 */

const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"
console.log(m.get(o));
m.has(o) // true
m.delete(o) // true
m.has(o) // false


//Map也可以接受一个数组作为参数，该数组的成员是一个个表示键值对的数组。
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

//Map构造函数接受数组作为参数，实际上执行的是下面的算法。
/*
 const items = [
 ['name', '张三'],
 ['title', 'Author']
 ];

 const map = new Map();

 items.forEach(
 ([key, value]) => map.set(key, value)
 );
 */
//如果对同一个键多次赋值，后面的值将覆盖前面的值。
const map1 = new Map();

map1.set(1, 'aaa').set(1, 'bbb');

console.log(map1.get(1)); // "bbb"

//如果读取一个未知的键，则返回undefined。

new Map().get("asasas");
//undefined


const map3 = new Map();

const k1 = ['a'];
const k2 = ['a'];

map3
    .set(k1, 111)
    .set(k2, 222);

map3.get(k1) // 111
map3.get(k2) // 222



/*
 实例的属性和操作方法
 */

//1.size属性
const ma = new Map();
ma.set('foo',true);
ma.set('bar',false);
console.log(ma.size);

//2.set(key,value)
//set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

const k = new Map();
k.set('edition',6);
k.set(262,'standard');
k.set(undefined,'nah');
console.log(k.has(undefined));
//set方法返回的是当前的Map对象，因此可以采用链式写法。
let l = new Map()
    .set(1,'a')
    .set(2,'b')
    .set(3,'c');

//3.get(key)
//get方法读取key对应的键值，如果找不到key，返回undefined。
const j = new Map();
const hello = function () {
    console.log("hello");
}
j.set(hello,"hello es6");
console.log(j.get(hello));

//4.has(key)
//has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
console.log(j.has(hello));

//5.delete(key)
//delete方法删除某个键，返回true。如果删除失败，返回false。
const p = new Map();
p.set(undefined, 'nah');
p.has(undefined)     // true

p.delete(undefined)
p.has(undefined)       // false


//6.clear()
//clear方法清除所有成员，没有返回值。

p.clear();








//遍历方法
/*
 Map 结构原生提供三个遍历器生成函数和一个遍历方法。

 keys()：返回键名的遍历器。
 values()：返回键值的遍历器。
 entries()：返回所有成员的遍历器。
 forEach()：遍历 Map 的所有成员。

 */
const map2 = new Map([
    ['F', 'no'],
    ['T',  'yes'],
]);

for (let key of map2.keys()) {
    console.log(key);
}
// "F"
// "T"

for (let value of map2.values()) {
    console.log(value);
}
// "no"
// "yes"

for (let item of map2.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map2.entries()) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map2) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"
//上面代码最后的那个例子，表示 Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。


//

const map4 = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

[...map4.keys()];
// [1, 2, 3]
[...map4.values()];
// ['one', 'two', 'three']

[...map4.entries()];
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map4];
// [[1,'one'], [2, 'two'], [3, 'three']]




/*

 与其他数据结构的互相转换

 */

//1. Map 转为数组
const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
 const ll = [...myMap];
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]


//2.数组转为Map
new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }

//3.Map转为对象
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

const myMap1 = new Map()
    .set('yes', true)
    .set('no', false);
console.log(strMapToObj(myMap1));
// { yes: true, no: false }

//4.对象转为Map
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

console.log(objToStrMap({yes: true, no: false}));
// Map {"yes" => true, "no" => false}


//5.Map 转为JSON
//Map 转为 JSON 要区分两种情况。
// 1一种情况是，Map 的键名都是字符串，这时可以选择转为对象 JSON。

function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}

let myMap4 = new Map().set('yes', true).set('no', false);
console.log(strMapToJson(myMap4));
// '{"yes":true,"no":false}'
//2另一种情况是，Map 的键名有非字符串，这时可以选择转为数组 JSON。

function mapToArrayJson(map) {
    return JSON.stringify([...map]);
}
let myMap5 = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log(mapToArrayJson(myMap5));
// '[[true,7],[{"foo":3},["abc"]]]'

//6.JSON转为Map

//JSON 转为 Map，正常情况下，所有键名都是字符串。

function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

 console.log(jsonToStrMap('{"yes": true, "no": false}'));
// Map {'yes' => true, 'no' => false}
//但是，有一种特殊情况，整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为 Map。这往往是 Map 转为数组 JSON 的逆操作。

function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));
// Map {true => 7, Object {foo: 3} => ['abc']}
