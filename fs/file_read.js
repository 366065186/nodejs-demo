var fs = require('fs');

// 异步读取
fs.readFile('./input.txt', function(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log('异步读取内容：' + data);
});

// 同步读取
var data = fs.readFileSync('./input.txt');
console.log('同步读取内容：' + data);

console.log('程序执行完毕');