var fs = require('fs');
var path = './tmp';

console.log('开始读取 ' + path + ' 目录');

fs.readdir(path, function(err, files) {
	if (err) {
		return console.error(err);
	}
	files.forEach(function(file) {
		console.log(file);
	});
});