var util = require('util');
console.log(util.isDate(new Date()));
// true
console.log(util.isDate({}));
// false