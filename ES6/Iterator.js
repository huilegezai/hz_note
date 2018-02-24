//集合
//1.数组Array。2.对象object。3.Map  4.Set
//在使用时，可以组合使用它们。这样就需要一种统一的接口机制，来处理所有不同的数据结构

// 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作。及依次处理该数据结构的所有成员。


//Iterator作用
//1.是为各种数据结构，提供一个统一的、简便的访问接口
//2.是使得数据结构的成员能够按某种次序排序
//3.ES6创造了一种新的遍历命令for...of循环，Iterator接口主要提供for...of消费。


//Iterator遍历过程
/*
 （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

 （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

 （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

 （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 */
//每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。




//ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。至于属性名Symbol.iterator，它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为 Symbol 的特殊值，所以要放在方括号内（参见 Symbol 一章）。


//原生具备iterator接口的数据结构
/**
 Array
 Map
 Set
 String
 TypedArray
 函数的 arguments 对象
 NodeList 对象
 */
let arr = ['1','2','3'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
//上面代码中，变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象。

//对于原生部署 Iterator 接口的数据结构，不用自己写遍历器生成函数，for...of循环会自动遍历它们。除此之外，其他数据结构（主要是对象）的 Iterator 接口，都需要自己在Symbol.iterator属性上面部署，这样才会被for...of循环遍历。

