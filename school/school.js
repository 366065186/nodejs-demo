var klass = require('./klass');

function add(klasses) {
	klasses.forEach(function(item, index){
		console.log('add klass:' + item.klass);
		var teacherName = item.teacherName;
		var students = item.students;

		klass.add(teacherName, students);
	});
}

exports.add = add;