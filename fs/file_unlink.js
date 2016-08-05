var fs = require('fs');

console.log('开始删除文件');
fs.unlink('./delete.txt', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('删除文件成功');
});