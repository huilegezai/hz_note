/**
 * Created by yp-tc-4816 on 2018/2/2.
 */
/**
 * 服务器实例，访问http://127.0.0.1:8124会返回Hello World
 */
var http = require('http');
http.createServer(function (requset,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello World\n');
}).listen(8124);
console.log("server running at http://127.0.0.1:8124");
