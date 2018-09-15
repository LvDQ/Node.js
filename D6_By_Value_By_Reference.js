// pass by value

function change(b){
    b=2;
}

var a =1;
change(a);
console.log(a);

// answer = 1;



// pass by reference
function changeObj(d){
    d.prop1=function(){};
    d.prop2 = {};
}
var c = {}; //create new object;
c.prop1 = {}; //init c.prop1 is an empty object
changeObj(c);
console.log(c); // output