var fs = require('fs');
var file = './output.txt';

console.log('开始写入文件的内容');
fs.writeFile(file, '我是通过写入的文件内容', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log('写入文件执行成功');
	console.log('—————— 我是分隔线 ——————');
	console.log('开始读取我写入的内容');
	fs.readFile(file, function(err, data) {
		if (err) {
			return console.error(err);
		}
		console.log('读取写入文件的内容是：' + data);
	});
});