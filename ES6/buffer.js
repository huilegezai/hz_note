/**
 * Created by yp-tc-4816 on 2018/2/2.
 */

//将一个utf8字符串写入buffer，然后打印出来。
var buf = new Buffer(256);
var len = buf.write('\u00bd + \u00bc = \u00be',0);
console.log(len + " bytes: " + buf.toString('utf8',0,len));
//buffer.toString(encoding,start=0,end=buffer.length)
//解码buffer数据并且使用指定的编码返回字符串，转换从start参数指定的位置开始，到end结束。


//将一个ASCII字符串复制进buffer，每次一个字节。
var str = "node.js";
var buf = new Buffer(str.length);
var i;
for(var i =0;i < str.length ; i++){
    buf[i] = str.charCodeAt(i);
}
console.log(buf);


// Buffer.byteLength(string,endcoding='utf8')返回
//返回字符串的实际字节数，这个函数和String.prototype.length不同，后者返回字符串的字符数。

var str = '\u00bd + \u00bc = \u00be';
console.log(str + ":" + str.length + " characters," +Buffer.byteLength(str,'utf8') + "bytes");


 var buf = new Buffer(1234);
 console.log(buf.length);//buf的大小，不是存放内容的大小，而是分配给buffer对象的内存大小。


//buffer.copy()
  var buf1 = new Buffer(26);
  var buf2 = new Buffer(26);
  var i;
  for(var i = 0 ; i < 26 ; i+=1){
      buf1[i] = i + 97;
      buf2[i] = 33;
  }
  buf1.copy(buf2,8,16,20);
  console.log(buf2.toString('ascii',0,25));
  //buffer.slice(start,end)
  var buf3 = buf1.slice(0,3);
  console.log(buf3.toString())