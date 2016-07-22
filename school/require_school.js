var school = require('./school');

var klasses = [
	{
		klass:'一班级',
		teacherName:'李老师',
		students:['张三','李四', '王五']
	},
	{
		klass:'二班级',
		teacherName:'张老师',
		students:['张四','李五', '王三']
	}
]

school.add(klasses);