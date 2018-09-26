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
