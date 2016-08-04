var fs = require('fs');
var zlib = require('zlib');

// 压缩文件 input.txt 为 input.txt.gz
fs.createReadStream('./input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('./input.txt.gz'));

console.log('压缩完毕');