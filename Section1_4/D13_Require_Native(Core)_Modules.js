var util = require('util');
//if it's core module, don't add './', and then node.js will search core lib modules
var name = 'Tony';

var greeting = util.format('Hello,%s',name);
util.log(greeting);