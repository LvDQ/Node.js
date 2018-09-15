//immediately invoked function expression
//just add a () to immediately invoke the function

var firstname = 'Jane';
(
    function(lastname){
        var firstname= 'John';
        console.log(firstname);
        console.log(lastname);
    }()

);

//output JohnDoe


console.log(firstname);
//output Jane

//the two firstnames are in different scopes