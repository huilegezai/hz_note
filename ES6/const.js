/**
 * Created by yp-tc-4816 on 2018/2/3.
 */

//介绍const的用法

//const声明一个只读的常量。一旦声明，常量的值就不能改变

const PI = 3.1415;
PI;
// PI= 3;报错，改变常量的值会报错

//const一旦声明变量，就必须立即初始化
// const foo; //Missing initializer in const declaration


//const的作用域和let的命令相同：只在声明所在的块级作用域内有效，声明的变量也是不提声明，同样存在暂时性死区，
//只能在声明的位置后面使用。
//const和let一样不可重复声明。

var message = "Hello!";
let age = 25;

// 以下两行都会报错
// const message = "Goodbye!";
// const age = 30;


//const 的本质
//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

const foo = {}
foo.prop = 123;
console.log(foo.prop);
// foo = {} 报错


//ES6声明变量的六种方法
//ES5
//1.var
//2.function
//ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。

//1.var
//2.let
//3.function
//4.const
//5.import
//6.class
