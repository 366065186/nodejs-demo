var http = require('http');
var cheerio = require('cheerio');
var url = 'http://blog.pkcms.cn/';

function filterChapters(html) {
	var $ = cheerio.load(html);
	var actives = $('.excerpt');
	var activesData = [];
	actives.each(function(item){
		var active = $(this);
		var activeTitle = active.find('h2').children('a').text();
		var activeUrl = active.find('h2').children('a').attr('href');
		var activeData = {
			activeTitle:activeTitle,
			activeUrl:activeUrl
		}
		activesData.push(activeData);
	});
	return activesData;
}

function printActivesInfo(activesData) {
	activesData.forEach(function(item){
		var title = item.activeTitle;
		var url = item.activeUrl;
		console.log(title + "\n\r" + url + "\n\r");
	});
}

http.get(url, function(res){
	var html = '';
	// data 事件会将 HTML 代码拼接进来
	res.on('data', function(data){
		html += data;
	});
	// end 事件 将拼接好的 html 输出
	res.on('end', function(){
		var activesData = filterChapters(html);
		printActivesInfo(activesData);
	});
}).on('error', function(){
	console.log('获取源码失败');
});