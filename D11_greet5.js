var greeting = 'Hello world5555!';
function greet(){
    console.log(greeting);
}

// this way the program is protected
//people out side cannot use code other than you want
module.exports = {
    greet:greet
}