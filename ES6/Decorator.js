/*
修饰器
 */

 //Decorator修饰器函数,有一个提案将这项功能，引入了 ECMAScript。

 @testable
 class MyTestableClass{
  //....
 }

 function testable(target) {
     target.isTestable = true;
 }

 console.log(MyTestableClass.isTestable);

 //上面代码中，@testable就是一个修饰器。它修改了MyTestableClass这个类的行为，为它加上了静态属性isTestable。testable函数的参数target是MyTestableClass类本身。

function testable1(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}

@testable1(true)
class MyTestableClass1 {}
MyTestableClass1.isTestable // true

@testable1(false)
class MyClass {}
MyClass.isTestable // false

//上面的代码中修饰器可以接受参数。
//修饰器对类的行为是在编译时发生的，而不是在运行时，着意味着，修饰器能在编译阶段运行代码，也就是说，修饰器本质就是编译时执行的函数。

function testproto(target) {
    target.prototype.isTestable = true;
}
@testproto
class Mytestproto{}

let obj = new Mytestproto();
obj.isTestable;//true
//上面代码可以添加实例属性，可以通过目标类的prototype对象操作。修饰器函数testproto是在目标类的prototype对象上添加属性，因此就可以在实例上调用。







/*
2.方法的修饰
修饰器不仅可以修饰类，还可以修饰类的属性。

class Person {
    @readonly
    name() { return `${this.first} ${this.last}` }
}
上面代码中，修饰器readonly用来修饰“类”的name方法。

修饰器函数readonly一共可以接受三个参数。

function readonly(target, name, descriptor){
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    descriptor.writable = false;
    return descriptor;
}

readonly(Person.prototype, 'name', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'name', descriptor);
修饰器第一个参数是类的原型对象，上例是Person.prototype，修饰器的本意是要“修饰”类的实例，但是这个时候实例还没生成，所以只能去修饰原型（这不同于类的修饰，那种情况时target参数指的是类本身）；第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象。

另外，上面代码说明，修饰器（readonly）会修改属性的描述对象（descriptor），然后被修改的描述对象再用来定义属性。

下面是另一个例子，修改属性描述对象的enumerable属性，使得该属性不可遍历。

class Person {
    @nonenumerable
    get kidCount() { return this.children.length; }
}

function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}
下面的@log修饰器，可以起到输出日志的作用。

class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
math.add(2, 4);
上面代码中，@log修饰器的作用就是在执行原始的操作之前，执行一次console.log，从而达到输出日志的目的。
*/



//3.为什么修饰器不能用于函数
//因为存在函数提升。
var counter = 0;

var add = function () {
    counter++;
};

@add
function foo() {
}
//上面的代码，意图是执行后counter等于 1，但是实际上结果是counter等于 0。因为函数提升，使得实际执行的代码是下面这样。

@add
function foo() {
}

var counter;
var add;

counter = 0;

add = function () {
    counter++;
};

//总之，由于存在函数提升，使得修饰器不能用于函数。类是不会提升的，所以就没有这方面的问题。
