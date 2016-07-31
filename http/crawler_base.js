var http = require('http');
var url = 'http://blog.pkcms.cn/';

http.get(url, function(res){
	var html = '';
	// data 事件会将 HTML 代码拼接进来
	res.on('data', function(data){
		html += data;
	});
	// end 事件 将拼接好的 html 输出
	res.on('end', function(){
		console.log(html);
	});
}).on('error', function(){
	console.log('获取源码失败');
});