9/25/2018


## E1 : Events:

`Event`: Something that has happend in our app that we can respond to

In Node we actually talk about two different kinds of events.

`System Events`: C++ core from libuv. 

`Custom Events`: Javascript core. -- event emitter



## E2: Javascript aside: Object properties, First class functions,and arrays

```
//functions and arrays

var arr =[];

// syntax: arr.push(function(){})
// we just push 3 functions into this array, but not invoked
arr.push(function(){
    console.log('Hello world 1');
});
arr.push(function(){
    console.log('Hello world 2');
});
arr.push(function(){
    console.log('Hello world 3');
});

// forEach is a kind of  a loop, invoke three functions
arr.forEach(function(item){
    item();
})
```


## E3: Event Emitter Part1

`Event Listener`: The code that responds to an event.

In javascript's case, the listener will be a function.



