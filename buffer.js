// 数组形式
var buf = new Buffer(26);
for (var i=0; i<26; i++) {
	buf[i] = i+97;
}
console.log(buf.toString());
console.log(buf.toJSON(buf));
console.log('\r\n');

// 字符形式
var url = new Buffer('www.pkcms.cn');
console.log(url.toString());
console.log(url.toJSON(url));
console.log('\r\n');

// 缓冲区合并
var name = new Buffer('PKCMS博客');
var name_url = Buffer.concat([name, url]);
console.log('name_url：'+name_url.toString());
console.log('\r\n');

// 缓冲区比较
var buf_abc = new Buffer('ABC');
var buf_abcd = new Buffer('ABCD');
var result = buf_abc.compare(buf_abcd);
if(result < 0) {
   console.log(buf_abc + " 在 " + buf_abcd + "之前");
}else if(result == 0){
   console.log(buf_abc + " 与 " + buf_abcd + "相同");
}else {
   console.log(buf_abc + " 在 " + buffer2 + "之后");
}
console.log('\r\n');

// 拷贝缓冲区
var buf_copy_to = new Buffer(3);
buf_abc.copy(buf_copy_to);
console.log('buf_copy_to content:'+buf_copy_to.toString());
console.log('\r\n');

// 缓冲区裁剪
var buf_slice_to = buf_abcd.slice(0,2);
console.log('buf_slice_to content:' + buf_slice_to);
console.log('\r\n');

// 缓冲区长度
console.log('buffer length: ' + buf_abcd.length);
console.log('\r\n');
