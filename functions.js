// regular function:
// arrow function:

function fname(){
    console.log('first');
    // return 'divyansh';
}

fname(); // call the function

var y; // declare
y=10; // define


// function functionName() => declaration 

console.log(add(1));
function add(x=0,y=0){ // parameter
    var a = x; // 1 local scope
    var b = y; // 2

    let res = x + y;
    return res;
}
// console.log(a,b);

 // arguments

// arrow function:=> first intialization then use.

// function name(){return}

// const name = () => {return}
// this => denote parent object 

var adds = (x,y) => {
    let res = x + y;
    return res;
}
console.log(adds(1,2))

