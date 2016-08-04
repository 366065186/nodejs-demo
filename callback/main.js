var fs = require('fs');

// 阻塞代码实例
console.log('阻塞代码实例');
var data = fs.readFileSync('./input.txt');
console.log(data.toString());
console.log('程序执行结束！\r\n');

// 非阻塞代码实例
console.log('非阻塞代码实例');
fs.readFile('./input.txt', function(error, data) {
	if (error) return console.log(error.stack);
	console.log(data.toString());
	console.log('程序执行结束！\r\n');
});

