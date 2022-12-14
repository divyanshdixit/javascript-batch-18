count()
function count(){

}
var f = 10;

// fuinction defined using an expression are not hoisted.

// window.count()
// function expression

// const count = function(){

// }

// function constructor:

const myFunction = new Function("a", 'b', 'return a*b');
console.log(myFunction(4,3))


// IIFE (Self invoking function): it is invoked automatic without being called.

// function declaration can not be self invoked;
// put () around function to indicate it as function expression

// anonymous self invoking function:
// (function(){})()

let x = null;
console.log(x);

/////

(function(){
    x = 15;
})()

// typeof function(){} => function 

// arguments.length 

// arrow function:
// don't have their own this
const arrow = () => { return }

arrow()
// arguments Object: 

function maxVal(){
    console.log(arguments);
    let max = -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i]; // 3
        }
    }
    return max;
}

maxVal(1,3,5,7,8,9,11);

var x = 10; // 1000
var y = x; // 10 // 1001
y = 20;

var t = { // 2000
name:'dasd'
}

var f = t; // 2000

// closures function:

// global vars can be made private(local) with closures.

let a = 4; // global variable
function fun1(){
    let b = 5; // local varaible
    return a*b;
}
fun1()

// //////code 
a = 5; // global var can be changed by all script in the page.
fun1()


// counter by using closures:
// problem:
// let counter = 0;
function add(){
    counter = counter+ 1;
    return counter; // 1
}
add(); // 1
add();// 2
add(); // 3
counter= 0; // prob

add(); // 1

// solu:

function add(){
    let counter = 0;
    counter += 1;
    return counter;
}
add();// 1
add(); // 1
add()
// remove global ciutner and return counter from add() function
// 

// solution: JS inner function
// all function have access to the scope above them
// js support the nested function
function add(){
    let counter = 0; // local 
    function plus(){ // it has access to the vari of parent function
        counter += 1;
    }
    plus();
    return counter;
}

// now we need a closure.
add(); // 1
add(); // 1

const closure = (function(){
    let counter = 0; // local // 1000
    return function(x){
        counter = counter + x;
        return counter; // 1
    }
})();

closure(2) // 1
closure(2) // 1
closure(2) // 1
closure(2) // 1
closure(5) // 2

var u = (
    function(){
        console.log('first')
        return function(){}
    }
)()
console.log(u); // function(){}

closure(); // 1
closure(); // 2


// variable add is assigned to the return vslue of self invking function
// self invoking function runs only oonce , return function expression.
// closure make it possible to have private varibale for a function/
// closure is a function having access to parent scope , even after poarent function has close;

// for closures:

const add = (function(){ // parent
    let counter = 0;
    return function(){ // closure
        counter = counter + 1;
        return counter;
    }
})();

// we can write like this:
const addCount = function(counter){ // closure
    counter = counter + 1;
    return counter;
}
const add = (function(){ // parent
    let counter = 0;
    return addCount(counter);
})();


add(); // 1
add(); // 

add();


function ff(){
    let x = 10;
    let y = 20;
    return [x,y]
}

ff();
console.log(x,y)

// Asynchronus function: 


function show(res){
    document.getElementById('show').innerHTML = res;
}

function adds(n1,n2){
    let sum = n1+n2;
    return sum;
}

let res = adds(4,3);
show(res);