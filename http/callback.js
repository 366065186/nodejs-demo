var str = 'welcome to:';

function school(somehing) {
	console.log(str + ' -> school');
	console.log('school: ' + somehing);
}

function klass(callback, somehing) {
	console.log(str + ' -> klass');
	console.log('klass: ' + somehing);
}

klass(school, ' nodejs');

klass(function(somehing) {
	console.log(str + ' -> books');
	console.log('books: ' + somehing);
}, 'jade');