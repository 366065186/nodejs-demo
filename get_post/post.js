var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res) {
	//定义了一个post变量，用于暂存请求体的信息
	var post = '';
	//通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
	req.on('data', function(chunk){
		post += chunk;
	});
	req.on('end', function() {
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(8020);

console.log('服务器运行成功');