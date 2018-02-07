/**
 * Created by yp-tc-4816 on 2018/2/7.
 */

//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

//Set 本身是一个构造函数，用来生成 Set 数据结构。
const s = new Set();
[2,3,4,5,6,2,2].forEach(x => s.add(x));//add 方法向Set结构加入成员，结果表明Set结构不会添加重复的值。
for (let i of s){
    console.log(i);
}

//Set函数可以接受一个数组（或者具有iterable接口的其他数据结构）作为参数，用来初始化。
 const set = new Set([1,2,3,4]);
 console.log([...set]);
 console.log(set.size);
 //向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。

 let set1 = new Set();
 let a = NaN;
 let b = NaN;
 set.add(a);
 set.add(b);
 console.log(set1);
 //上面代码向 Set 实例添加了两个NaN，但是只能加入一个。这表明，在 Set 内部，两个NaN是相等。

 let set2 = new Set();

 set2.add({});
 console.log(set2.size);

 set2.add({});
 console.log(set2.size);
 //上面代码表示，由于两个空对象不相等，所以它们被视为两个值。

/*

 Set 结构的实例有以下属性。
     Set.prototype.constructor：构造函数，默认就是Set函数。
     Set.prototype.size：返回Set实例的成员总数。
 Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
     add(value)：添加某个值，返回 Set 结构本身。
     delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
     has(value)：返回一个布尔值，表示该值是否为Set的成员。
     clear()：清除所有成员，没有返回值。
 */
let ss = new Set([1,2,3]);
ss.add(4);
console.log(ss);
ss.delete(2);
console.log(ss);
console.log(ss.has(3));
ss.clear();
console.log(ss);

//下面是一个对比，看看在判断是否包括一个键上面，Object结构和Set结构的写法不同。
// 对象的写法
const properties = {
    'width': 1,
    'height': 1
};

if (properties['width']) {
    // do something
}

// Set的写法
const properties1 = new Set();

properties1.add('width');
properties1.add('height');

if (properties1.has('width')) {
    // do something
}


//Array.from方法可以将Set结构转为数组。

const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
console.log(array[0]);

//这就提供了去除数组重复成员的另一种方法。
function dedupe(array) {
    return Array.from(new Set(array));
}
let array1 = dedupe([1,1,2,3,2,3,4]);
console.log(array1);


//遍历操作。

/*
 Set 结构的实例有四个遍历方法，可以用于遍历成员。

 keys()：返回键名的遍历器
 values()：返回键值的遍历器
 entries()：返回键值对的遍历器
 forEach()：使用回调函数遍历每个成员
 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

 */
//keys方法、values方法、entries方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

//

let set3 = new Set(['red','green','blue']);
for (let ite of set3.keys()){
    console.log(ite);
}
for ( let it of set3.values()){
    console.log(it);
}
for (let i of set3.entries()){
    console.log(i);
}
//上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

//Set结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。
//这意味着，可以省略values方法，直接用for...of循环遍历Set。

let set4 = new Set(['green','red','blue']);
for (let x of set4){
    console.log(x);
}


//forEach()方法
//Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

set4.forEach((value,key) => console.log(key + ':' + value));
//上面代码说明，forEach方法的参数就是一个处理函数。该函数的参数与数组的forEach一致，依次为键值、键名、集合本身（上例省略了该参数）。这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。





//遍历的应用

// 扩展运算符(...) 内部使用for...of循环， 所以也可以用于Set结构。
console.log([...set4]);

//而且，数组的map和filter方法也可以间接用于 Set 了
let set5 = new Set([1, 2, 3]);
set5 = new Set([...set5].map(x => x * 2));
// 返回Set结构：{2, 4, 6}
console.log(set5);

let set6 = new Set([1, 2, 3, 4, 5]);
set6 = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}
console.log(set6);


//WeakSet
//WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

//首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
//其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
//这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。
//由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，因此 ES6 规定 WeakSet 不可遍历。

