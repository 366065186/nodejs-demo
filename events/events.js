var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
// 解除默认 10 个事件监听器的限制
// life.setMaxListeners(11);

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

// 删除指定的监听器事件
// life.removeListener('Miss', water);
// 清空所有的监听器事件
// life.removeAllListeners();

var isLife = life.emit('Miss', '汉子');

console.log(isLife);
console.log(life.listeners('Miss').length);
console.log(EventEmitter.listenerCount(life, 'Miss'));