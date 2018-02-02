/**
 * Created by yp-tc-4816 on 2018/2/2.
 */
/**
 *介绍let和const
*/

//只在let命令所在的代码块内有效。
{
    var a = 0 ;
    let b = 1;
}
console.log(a);
// console.log(b); 报错

for(let i =0;i<10;i++){
    console.log(i);
}
// console.log(i);报错

/**
 * var声明的变量是全局的，只要一个变量，如下i 是全局的，循环结束i的值是10，所以打印出来的c[6]()为10
 * @type {Array}
 */
var c = [];
for(var i =0;i<10;i++){
    c[i] = function () {
        console.log(i)
    }
}
console.log("======")
c[6]();//10
c[4]();//10
//上面代码中，变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i。
// 每一次循环，变量i的值都会发生改变，而循环内被赋给数组a的函数内部的console.log(i)，里面的i指向的就是全局的i。
// 也就是说，所有数组a的成员里面的i，指向的都是同一个i，导致运行时输出的是最后一轮的i的值，也就是 10。


//上面的var用let来代替
let d = [];
for(let j =0;j<10;j++){
    d[j] = function () {
        console.log(j)
    }
}
console.log("======")
d[6]();//10
d[4]();//10
//上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。
// 你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？
// 这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。


for(let k = 0 ; k < 3 ; k++){
    let k = "abc"
    console.log(k);
}
//console.log(k)报错k is not defined

//abc
//abc
//abc
//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
//两个k不是在同一个作用域里面


//var存在变量提升的现象，就是var可以在声明之前使用，值为undefined，let不存在变量提升，在声明之前使用时会报错。
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
//console.log(bar); // 报错ReferenceError
let bar = 2;
//上面代码中，变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。
// 变量bar用let命令声明，不会发生变量提升。这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误。