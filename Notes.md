
9/13/2018
### Arguments: 
values you  give your program  that affect how it runs, essentially passing  parameters to a function.


	V8(javascript engine ) core of node.js written by c++

### ECMA Script: 
the standard javascript is based on


	v8 actually written by c++ so it can run by c++ files with #include <include/v8.h>, so node.js also accpet javascript

	client asks for services request Server performs services response to client.

	the benifit of using node.js is use the same language betwwen browser and web servers.

## javascript benifits:

1.Better ways to organize code into reusable pieces

2.ways to deal with files  

3.ways to deal with database

4.The ability to communicate over the internet

5.the ability to accept requests and send responses

6. a way to deal with work that takes a longtime

### Node is a framework to help 

### how to run a js file : 

1.install node.js 

2. open node.js command prompt 

3. node +[file name]

4. help with Visual Studio Code

### MODULE: 
A reusable block of code whose existence does not accidentally impact other code

### Invoke: 
run the function


## D3: Build a Modeule

we can import other .js files to run in specific place by using function `require()` 

`syntax:` requie('./PATH.js');

if we want to use only one function in the Modeule

then in the modeule files: 

	module .exports = [function_variable];

then go to original files run by:

	var [name] = require('[PATH]');
	[name]();


## D4: Object Literals

`Name/Value Pair`: A name which maps to a value by `:`, e.g. `firstname: 'John'`, `firstname: [var_name]`

if we want to build a structure, just use `{}` and link methods or objects by using `,`, for example:

	var person = {
    	firstname: 'John',
    	lastname: 'Doe',
    	greet: function(){
        	console.log('Hello,' + this.firstname +' '+this.lastname);
    	}
	};

we can recall the object or method by `.` ,such as `person.greet();`  - standard way

we can also use bracket `[]` , such as `console.log(person['firstname'])` and `person['greet']();`


## D5: Prototypal Inheritance and function expressions

#### Inheritance:

One object gets access to the properties and methods of another object.

we can set `prototype chain` to add the objects or functions: 

	function Person(firstname, lastname){
    	this.firstname = firstname;
    	this.lastname = lastname;
	};// this ";" actually doesn't matter exist or not
	Person.prototype.greet =function(){
    	console.log('Hello, '+this.firstname +' '+ this.lastname);
	}
	var john = new Person('John', 'Doe');
	console. log(john.firstname);
	var jane = new Person('Jane','Doe');
	jane.greet();

Why we need Person.prototype.greet but not writing in function Person?

Because we want to use function Person to create a new Object, but don't want to print it out, but we might still want to print in the future


## D6: By value, By reference

#### Primitive: 

A type of data that represents a single value.

Like a number or a string. In other words, `not an object`.

Node.js takes advatage of this `passing by reference` `when it comes to objects.`

if pass by `Primitive data`, it passes by `value`

How to pass by reference and values?

Examples here: [D6. By Value, By Reference](./D6_By_Value_By_Reference)


## D7: Immediately Invoked Function Expressions(IIFEs)


#### Scope:

Where in code you have access to particular variable or function.

`Immediately invoked function expression`  just a function immediately invoked.

just add a `()` to immediately invoke the function:

```

(
    function([parameter_name]){
        var firstname= 'John';
        console.log(firstname);
    }([parameters])

);

```

and variables in different scopes are isolated. they are totally different variables in different memory segments


## D9 : How do node modules really work?: module.exports and require

`require` is a function, that you pass a 'path' too.

`module.exports` is what the require function returns.

This works because `your code is actually wrapped in a function` that is given these things as function parameters.


## Json:

`"Jaascript object notation" - A standard for structuring data that is inspired by javascript object literals`

Javascript engines are built to understand it.
```
{
	"firstname": "John",
	"lastname": "Doe",
	"address": {
		"street": "101 Main st.",
		"city": "New York",
		"state": "NY"
	}
}

```

which is pretty easy to parse.

## D10 : More on require

you can return by `module.exports` with `[var_name]` or `objects with name/value pair`:

```
module.exports = greet;

module.exports = {
    English : english,
    Chinese : chinese,
    Spanish : spanish
};
``` 

then you can pass the return to a variable:
```
var greet = require('./D10_greet');
```

then invoke it:

```
greet.English();
greet.Chinese();
greet.Spanish();
```

the require can also import an folder with all of the .js files in the folder.


## `D11: Module Patterns`(Important!)

1. greet1.js
```
module.exports = function(){
    console.log('Hello world');
};

```

app.js

```
var greet = require('./D11_greet1');
greet();
```

2. greet2.js
```
module.exports.greet = function(){
    console.log('Hello world');
}
```

app.js
```

//module.exports.greet = function()
var greet2 = require ('./D11_greet2').greet;
greet2();

//if var greet2 = require('./D11_greet2');
// then we need use by greet2.greet();
```

3. greet3.js
```
function Greet(){
    this.greeting = 'Hello world!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greet();
```

app.js
```
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
```

4. greet4.js
```
function Greet(){
    this.greeting = 'Hello world~!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

//no ()behind the Greet!
module.exports = Greet;
```

app.js
```
//What if I don't want to create the same object?
//do not return a instance created by require, but return a constructor
var greet4 = require('./D11_greet4');
var greet4 = new greet4();
greet4.greet();
```

5. greet5.js
```
var greeting = 'Hello world5555!';
function greet(){
    console.log(greeting);
}

// this way the program is protected
//people out side cannot use code other than you want
module.exports = {
    greet:greet
}
```

app.js
```

//protected way!
var greet5 = require('./greet5').greet;
greet5();
```



`Revealing Module Pattern`: Exposing only the properties and methods you want via an returned object.

A very common and clean way to structure and protect code within modules, which protect module contexts.



## D12: exports vs module.exports

The two var should be just the same, but different when you change one of them. That is because:

`When you set a object var to a premitive data value, it's actually create and point to a new memory.`


`Mutate`: To change somthing.

For example, adding a method or property to an object means you've `mutated` the object.


`Conclusion`: Just use `module.exports` only.

## D13: Requiring Native(Core) Modules

```
var util = require('util');
//if it's core module, don't add './', and then node.js will search core lib modules
var name = 'Tony';

var greeting = util.format('Hello,%s',name);
util.log(greeting);
//output: 16 Sep 11:20:37 - Hello,Tony
```


