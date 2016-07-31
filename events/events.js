var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
life.setMaxListeners(11);

function water(who) {
	console.log('给 ' + who + ' 倒水');
}

life.on('Miss', water);

life.on('Miss', function(who) {
	console.log('给 ' + who + ' 按摩');
});

life.on('Miss', function(who) {
	console.log('给 ' + who + ' 聊天');
});

life.removeListener('Miss', water);
life.removeAllListeners();

var isLife = life.emit('Miss', '汉子');

console.log(isLife);
console.log(life.listeners('Miss').length);
console.log(EventEmitter.listenerCount(life, 'Miss'));