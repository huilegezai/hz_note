/**
 * 定义实际模型代码
 * @type {Mongoose}
 */


var mongoose = require('mongoose');
//定义Schema

UserSchema = new mongoose.Schema({
   username:{//真实姓名
       type:String,
       require:true
   },
   password:{//密码
       type:String,
       require:true
   }
});

//定义Model
var UserModel = mongoose.model('User',UserSchema);
//暴露接口
module.exports = UserModel;