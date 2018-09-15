
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