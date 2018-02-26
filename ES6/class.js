//javascript语言中，生成实例对象的传统方法是通过构造函数。
function Point(x,y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1,2);
console.log(p.toString());
//这样的写法很传统的java C++的类要有很大的区别。

//所以ES6引入了Class类的概念。上述代码改用ES6写法如下

//定义类
class Point1 {
    constructor(x, y) { //构造函数
        this.x = x; //this关键字则代表实例对象。
        this.y = y;
    }
    //方法之间不能用逗号隔开。
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
//类的数据类型就是函数，类本身就指向构造函数。

//构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
class Point2 {
    constructor() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}
// 等同于
Point2.prototype = {
    constructor() {},
    toString() {},
    toValue() {},
};


//在类的实例上面调用方法，其实就是调用原型上的方法。
class B {};
let b = new B();
console.log(b.constructor === B.prototype.constructor); //true
//上面的代码中，b是B类的实例，它的constructor方法就是B类原型的constructor方法。



//由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。

class Point3{
    constructor(){
        //....
    }
}

Object.assign(Point3.prototype,{
    toString(){},
    toValue(){}
});

//另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）。


//严格模式

//类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。
//考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。


//constructor方法
//constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，
//如果没有显示定义，一个空的constructor方法会被默认添加。

class Point4{

}
//等同于
class Point5{
    constructor(){}
}

//与 ES5 一样，类的所有实例共享一个原型对象。
var p1 = new Point(2,3);
var p2 = new Point(3,2);
console.log(p1.__proto__ === p2.__proto__);//true

//可以通过实例的__proto__属性为“类”添加方法。
/*
 __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。
 */
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };

p1.printName() // "Oops"
p2.printName() // "Oops"

var p3 = new Point(4,2);
p3.printName() // "Oops"


//不存在变量提升
//类不存在变量提升，这一点与ES5完全不同。

// new Foo();报错
class Foo{};





//7私有方法和私有属性

//1.ES6不提供私有方法，可以在命名上加以区别。
class Widget {

    // 公有方法
    foo (baz) {
        this._bar(baz);
    }

    // 私有方法
    _bar(baz) {
        return this.snaf = baz;
    }

    // ...
}
//有风险，外部还是可以调用这个私有的方法。

//2另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。

class Widget2{
    foo(baz){
        bar.call(this,baz)
    }
    // ...
}

function bar(baz) {
    return this.snaf = baz;
}




//8 this的指向
//类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错


class Logger {
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName } = logger;
// printName(); // TypeError: Cannot read property 'print' of undefined
//上面代码中，printName方法中的this，默认指向Logger类的实例。但是，如果将这个方法提取出来单独使用，this会指向该方法运行时所在的环境，因为找不到print方法而导致报错。


//9 name属性
//由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。
class ponName{}
console.log(ponName.name);
//name属性总是返回紧跟在class关键字后面的类名。



//10 Class 的取值函数（getter）和存值函数（setter）

class MyClass {
    constructor() {
        // ...
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: '+value);
    }
}

let inst = new MyClass();

inst.prop = 123;//set方法，所以执行prop方法。
// setter: 123

inst.prop;
// 'getter'

console.log(inst.prop);
//存值函数和取值函数是设置在属性的 Descriptor 对象上的。



//11 Class 的 Generator方法
//如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
class Foo1 {
    constructor(...args) {
        this.args = args;
    }
    * [Symbol.iterator]() {
        for (let arg of this.args) {
            yield arg;
        }
    }
}

for (let x of new Foo1('hello', 'world')) {
    console.log(x);
}
// hello
// world


//12 class的静态方法
//类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

class foo1{
    static classMethod(){
        return 'hello';
    }
}

console.log(foo1.classMethod());

var foo = new foo1();
// foo.classMethod();//TypeError: foo.classMethod is not a function
//上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

//如果静态方法包含this关键字，这个this指的是类，而不是实例。
class Foo2 {
    static bar() {
        this.baz();
    }

    static baz() {
        console.log('hello');
    }
}
class Foo3 {
    static bar () {
        this.baz();
    }

    baz () {
        console.log('world');
    }
}

Foo2.bar();// hello
// Foo3.bar();// 报错 this.baz is not a function


//父类的静态方法，可以被子类继承
class goo {
    static classMethod(){
        console.log('huilo')
        return 'hello';
    }
}
class ggoo extends goo{

}
ggoo.classMethod();




//13.Class的静态属性和实例属性

