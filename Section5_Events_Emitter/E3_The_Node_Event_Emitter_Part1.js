var Emitter = require('./E3_emitter');

var emtr = new Emitter();


//we add two functions into Emitter.on's this.event[type]
//in this way, we add different listeners in different place
//if there are different type of Event happened, we can use only emtr.emit to check all kinds of listener which should be invoked
emtr.on('greet',function(){
    console.log('Somewhere,someone said hello.');
});

emtr.on('greet',function(){
    console.log('A greeting occured!');
})

console.log('Hello');

//we invoke emtr.emit to call the array's functions
//in this way, [type] will be 'greet'
emtr.emit('greet');

//different listeners,different emit names
emtr.on('praise',function(){
    console.log('ky is so great!EZ!');
})
emtr.emit('praise');

emtr.calculate(1,'+', 2);
emtr.calculate(2333,'-',233);