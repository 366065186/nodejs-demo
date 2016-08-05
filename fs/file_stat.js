var fs = require('fs');

fs.stat('./input.txt', function(err, stats) {
	if (err) {
		return console.error(err);
	}
	console.log('这个是不是文件：' + stats.isFile());
	console.log('这个是不是目录：' + stats.isDirectory());
	console.log(stats);
});