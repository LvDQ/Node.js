function Greet(){
    this.greeting = 'Hello world~!';
    this.greet = function(){
        console.log(this.greeting);
    }
}

//no ()behind the Greet!
module.exports = Greet;