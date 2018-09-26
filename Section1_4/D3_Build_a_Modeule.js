var greet = function(){
    console.log('Hello');
};
greet();


//greet() is not defined outside the module to protect module

//but can be access by this way


function greet2(){
    console.log('Hi');
};
greet2();
module .exports = greet;
module .exports = greet2;

//this way greet will be expired

