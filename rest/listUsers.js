var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

//添加的新用户数据
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/listUsers', function(req, res) {
	fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
		if (err) {
			return console.error(err);
		}
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
});

var server = app.listen(8020, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
});