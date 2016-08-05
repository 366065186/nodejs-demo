var fs = require('fs');

console.log('开始创建目录');
fs.mkdir('./tmp/', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('创建目录成功');
});