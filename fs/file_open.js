var fs = require('fs');
var buf = new Buffer(1024);
var len = 5;

// 异步打开
console.log('准备打开文件');
fs.open('./input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log('文件打开成功');
	console.log('—————— 我是分隔线 ——————');
	console.log('截取' + len + '字节后的文件内容。');
	fs.ftruncate(fd, len, function(err) {
		if (err) {
			return console.error(err);
		}
		console.log('文件内容截取成功');
		console.log('—————— 我是分隔线 ——————');
		console.log('准备读取文件');
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
			if (err) {
				return console.error(err);
			}
			console.log(bytes + '字节被读取');
			// 输入读取的字节
			if (bytes > 0) {
				console.log(buf.slice(0, bytes).toString());
			}
		});
		// 关闭文件
		console.log('—————— 我是分隔线 ——————');
		fs.close(fd, function(err) {
			if (err) {
				return console.error(err);
			}
			console.log('文件关闭成功');
		});
	});
});
