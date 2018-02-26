/**
 * class的继承
 */
// extends 关键字
class point{

}
class ColorPoint extends point{

}
//这两个类是一样的，ColorPoint继承了类Point的所以属性和方法，

class ColorPoint1 extends point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
let cp = new ColorPoint1();
//上面的代码中，子类的constructor函数中没有调用super()时就会报错。如果子类没有定义constructor函数，这个方法会被默认添加。
//另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint2 extends Point {
    constructor(x, y, color) {
        // this.color = color; // ReferenceError
        super(x, y);
        this.color = color; // 正确
    }
}
let co = new ColorPoint2()
//上面代码中，子类的constructor方法没有调用super之前，就使用this关键字，结果报错，而放在super方法之后就是正确的。





//2.Object.getPrototypeOf方法可以用来从子类上获取父类。

console.log(Object.getPrototypeOf(ColorPoint) === point);
// true
// 因此，可以使用这个方法判断，一个类是否继承了另一个类。




//3.super关键字

//super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

//第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。

//注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。

class A {
    constructor() {
        console.log(new.target.name);
    }
}
class B extends A {
    constructor() {
        super();
    }
}
class C extends A {
    constructor() {
        super();
    }
}
new A() // A
new B() // B
//上面代码中，new.target指向当前正在执行的函数。可以看到，在super()执行时，它指向的是子类B的构造函数，而不是父类A的构造函数。也就是说，super()内部的this指向的是B。


//作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
/*
 class A {}

 class B extends A {
       m() {
          super(); // 报错
        }
 }
 */


//ES6 通过suoer调用父类的方法时，方法内部的this指向子类。

class aa {
    constructor(){
        this.x = 1;
    }
    print(){
        console.log(this.x);
    }
}
class bb extends aa{
    constructor(){
        super();
        this.x = 2;
    }
    m(){
        super.print();
    }
}

let ab = new bb();
ab.m();
//上面代码中，super.print()虽然调用的是A.prototype.print()，但是A.prototype.print()内部的this指向子类B，导致输出的是2，而不是1。也就是说，实际上执行的是super.print.call(this)。
