var chalk = require('chalk');
var cat;

function dog(name){
	this.name = name;
	this.stomach = [];
}

dog.prototype.eat = function(){
	this.stomach.push(cat);
}

dog.prototype.sayHi = function(){
	console.log('Hi! I am a dog. My name is '+ chalk.red(this.name));
}

module.exports = dog;