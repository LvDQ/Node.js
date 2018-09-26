function Emitter(){
    this.events = {};
}

//prototypal inheritance: please look through D5 Prototypal inheritance
//this one add listeners
Emitter.prototype.on = function(type,listener){
    this.events[type] = this.events[type]||[]; //this make sure that property is an array
    this.events[type].push(listener); //adding functions into that array
}

Emitter.prototype.calculate = function(num1,str,num2){
    if(str == '+'){
        console.log(num1+num2);
    } 
    else if(str == '-'){
        console.log(num1-num2);
    }
    else{
        console.log('error');
    }
}

//emit: common terms: hey,something happend
//this one judges and invokes listeners
Emitter.prototype.emit = function(type){
    if(this.events[type]){   //check to see that file was saved is a property name on the object?
        this.events[type].forEach(function(listener){  // if it is , it's going to be an array, and then loop through
            listener();     //to see if there's any functions in that array, and then invoke them
        })
    }
}

module.exports = Emitter;