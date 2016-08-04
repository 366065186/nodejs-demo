var fs = require('fs');

// 创建可读流
var read_data = '';
var readerStream = fs.createReadStream('./input.txt');
// 设置编码为 utf8
readerStream.setEncoding('UTF8');
// 处理事件 ——> data, end and error
readerStream.on('data', function(chunk){
	read_data += chunk;
});
readerStream.on('end', function(){
	console.log(read_data);
	console.log('读取完成');
});
readerStream.on('error', function(error){
	console.log(error.stack);
});

// 创建可写流
var write_data = 'PKCMS 域名地址：pkcms.cn';
var writerStream = fs.createWriteStream('./output.txt');
// 使用 utf8 编码写入数据
writerStream.write(write_data, 'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件 ——> finish and error
writerStream.on('finish', function(){
	console.log('写入完成。');
});
writerStream.on('error', function(err){
	console.log(err.stack);
});

// 管道流
var conduitStream_reader = fs.createReadStream('./input.txt');
var conduitStream_writer = fs.createWriteStream('./output2.txt');
conduitStream_reader.pipe(conduitStream_writer);

console.log('程序执行完毕');