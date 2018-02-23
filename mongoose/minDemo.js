/**
 * dmeo
 * @type {Mongoose}
 */
//引入mongoose模块
var mongoose = require('mongoose');

//通过mongoose.connect连接mongoose数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_helloworld');

//通过mongoose.model定义模型（model）
var Cat = mongoose.model(
    'Cat',{name:String}
);

//通过`new`关键字实例化Cat模型，参数是`{ name: 'Zildjian' }`，创建kitty对象
var kitty = new Cat({name : 'Zildjian'});


//执行kitty.save来保存到数据库
kitty.save(function (err) {
    if(err){
        console.log('save error:' + error);
    }else {
        console.log('save success');
    }
});

