var greet = require('./D11_greet1');
greet();


//module.exports.greet = function()
var greet2 = require ('./D11_greet2').greet;
greet2();

//if var greet2 = require('./D11_greet2');
// then we need use by greet2.greet();


//return new object
var greet3 = require('./D11_greet3');
greet3.greet();
greet3.greeting = 'Change hello world!';

var greet3b = require('./D11_greet3');
greet3b.greet();

//Output Change hello world!
// the two object are the same one!
//because there are cachedModules
//Object passed by reference

//What if I don't want to create the same object?
//do not return a instance created by require, but return a constructor
var greet4 = require('./D11_greet4');
var greet4 = new greet4();
greet4.greet();


//protected way!
var greet5 = require('./greet5').greet;
greet5();