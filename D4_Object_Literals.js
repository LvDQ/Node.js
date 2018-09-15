var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log('Hello,' + this.firstname +' '+this.lastname);
    }
};

person.greet();

//access object or method of an object another way, other than using dot


console.log(person['firstname']);

person['greet']();