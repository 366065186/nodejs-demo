var fs = require('fs');

console.log('开始删除目录');

fs.rmdir('./tmp', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('删除目录成功');
});