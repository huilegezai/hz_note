/**
 * Created by yp-tc-4816 on 2018/4/19.
 * js基础概念
 */
var message1 = 'javascript';
var message2 = true;
var message3 = 55;
var message4 ;
var message5 = function () {

};
var message6 = {};

console.log(typeof message1)
console.log(typeof message2)
console.log(typeof message3)
console.log(typeof message4)
console.log(typeof message5)
console.log(typeof message6)
/*
 string
 boolean
 number
 undefined
 function
 object

 */
//十进制
var intnum = 55;
//八进制
// var octalnum = 070;
// console.log(octalnum)
//十六进制
var hexnum = 0xA;
console.log(Number.MIN_VALUE);//number保存的最小值
console.log(Number.MAX_VALUE);//number保存的最大值

//NaN ,用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误）
console.log(NaN == NaN);//false

/*
Number(),parseInt(),parseFloat()
 */

var num1 = Number("hello");
var num2 = Number("");
var num3 = Number("0000011");
var num4 = Number(true);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
/*
 NaN
 0
 11
 1
 */
var par1 = parseInt("1234blue");
var par2 = parseInt("");
var par3 = parseInt("0xA");
var par4 = parseInt(22.9);
var par5 = parseInt("070");
var par6 = parseInt("70");
var par7 = parseInt("0xf");
console.log(par1);
console.log(par2);
console.log(par3);
console.log(par4);
console.log(par5);
console.log(par6);
console.log(par7);
/*
 1234
 NaN
 10
 22
 70
 70
 15
 */

var str = 10;
console.log(str.toString());
var str1 = true;
console.log(str1.toString());
// console.log(undefined.toString()); undefined没有toString方法
// console.log(null.toString()); null没有toString方法

