//object properties and methods

var obj={
    greet:'Hello'
}

console.log(obj.greet);

console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);


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

// forEach is a kind of  a loop
arr.forEach(function(item){
    item();
})