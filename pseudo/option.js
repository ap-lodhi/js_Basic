// (function(){console.log('heloo')})


// function(){console.log('heloo')}()  //required functon name  syntax error

(function(){console.log('heloo')})(); // it  will print hello

// function(){console.log('heloo')}; //required functon name  syntax


console.log(name)  // undefined
var name ='ANIL'

printName('anil')
var  printName
function printName(name){
    console.log('helo',name)  // heloo anil will print
}

printName =function(name){
    console.log('hey',name)
}
