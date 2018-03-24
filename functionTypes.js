//The difference between function statement and funciton expression

// funciton statement:
function sayHi() {
    console.log('hi');
}
sayHi();


// funciton expression:
var sayBye = function () {
    console.log('Bye');
}
sayBye();


//the most complex type is:
function callFunction(fun){
    fun();
}
callFunction(sayHi);