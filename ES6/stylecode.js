//1 块级作用域
//(1)let取代var
//ES6 提出了两个新的声明变量的命令：let和const。其中，let完全可以取代var，因为两者语义相同，而且let没有副作用。
//var命令存在变量提升效用，let命令没有这个问题。
'use strict';

if(true){
    // console.log(x);报错
    let x = 'hello';
}

for(let i = 0;i < 10;i++){
    console.log(i);
}


//(2)全局常量和线程安全
//在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。




//2字符串
//静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
const a = 'foobar';

//3解构赋值
//使用数组成员对变量赋值时，优先使用解构赋值
const arr = [1,2,3,4];

//bad
const first = arr[0];
const second = arr[1];

//good
const [first,second] = arr;


//函数的参数如果是对象的成员，优先使用解构赋值
//bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
}
//good
function getfullName(obj) {
    const {firstName,lastName} = obj;
}
//best
function getfulName({firstName,lastName}) {

}

//如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。
//bad
function processInput(input) {
    return [left,right,top,bottom];
}
//good
function proceinput(input) {
    return {left,right,top,bottom}
}


//4对象
//单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
// bad
const a = { k1: v1, k2: v2, };
const b = {
    k1: v1,
    k2: v2
};

// good
const a = { k1: v1, k2: v2 };
const b = {
    k1: v1,
    k2: v2,
};
//对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用object.assign方法

// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;
//如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。
// bad
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};




//5数组

//使用扩展运算符（...）拷贝数组。
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];

//使用Array.from方法，将类似数组的对象转为数组。

const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);





//6函数
//立即执行函数可以写成箭头函数的形式
(() => {
    console.log('Welcome to the Internet.');
})();

//那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了this。
//bad
[1,2,3].map(function (x) {
    return x * x;
});
//good
[1,2,3].map((x) => {
   return x * x;
});
//best
[1,2,3].map(x => x*x);





//7Map结构
//注意区分Object和Map，只有模拟现实世界的实体对象时，才使用Object。如果只是需要key: value的数据结构，使用Map结构。因为Map有内建的遍历机制。

let map = new Map(arr);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

for (let item of map.entries()) {
    console.log(item[0], item[1]);
}






//8 class
//总是用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解。
// bad
function Queue(contents = []) {
    this._queue = [...contents];
}
Queue.prototype.pop = function() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
}

// good
class Queue {
    constructor(contents = []) {
        this._queue = [...contents];
    }
    pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
    }
}

//使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。

// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
    Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
    return this._queue[0];
}

// good
class PeekableQueue extends Queue {
    peek() {
        return this._queue[0];
    }
}

// 9模块
//首先，Module语法是JavaScript模块的标准写法，坚持使用这种写法。使用import取代require。
// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1, func2 } from 'moduleA';

//使用export取代module.exports。

// commonJS的写法
var React = require('react');

var Breadcrumbs = React.createClass({
    render() {
        return <nav />;
    }
});

module.exports = Breadcrumbs;

// ES6的写法
import React from 'react';

class Breadcrumbs extends React.Component {
    render() {
        return <nav />;
    }
};

export default Breadcrumbs;



