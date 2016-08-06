var path = require('path');
var express = require('express');
var fs = require('fs');
var app = express();

var id = 2;

app.get('/deleteUser', function(req, res) {
	fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data){
		if (err) {
			return console.error(err);
		}
		data = JSON.parse(data);
		delete data['user' + id];
		console.log(data);
		res.end(JSON.stringify(data));
	});
});

var server = app.listen(8020, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址：http://%s:%s', host, port);
});