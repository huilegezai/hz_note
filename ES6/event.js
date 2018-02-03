/**
 * Created by yp-tc-4816 on 2018/2/2.
 */

/*

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
//注册监听
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');
*/



/*
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
    console.log(a, b, this);
    // Prints:
    //   a b MyEmitter {
    //     domain: null,
    //     _events: { event: [Function] },
    //     _eventsCount: 1,
    //     _maxListeners: undefined }
});
myEmitter.emit('event', 'huizai', 'yibao');//还可以传递参数
*/


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter1 = new MyEmitter();
let b = 0;
myEmitter1.on('event', () => {
    console.log(++b);
});
myEmitter1.emit('event');
// Prints: 1
myEmitter1.emit('event');
// Prints: 2

console.log("=========once=============")
const myEmitter2 = new MyEmitter();
let m = 0;
myEmitter2.once('event', () => {//once只监听一次，不能重复监听
    console.log(++m);
});
myEmitter2.emit('event');
// Prints: 1
myEmitter2.emit('event');
// Ignored

