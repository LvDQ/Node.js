//function statement
function greet(){
    console.log('hi');
}

greet();


//gunction are first-class
function logGreeting(fn){
    fn();
}

logGreeting(greet);

//function expression

var greetMe = function(){
    console.log('Hi Ke');
}

greetMe();

//it's still the first -class

logGreeting(greetMe);

//use a function expression on the fly
logGreeting(
    function(){
        console.log('Hello Ke!');
    }
);