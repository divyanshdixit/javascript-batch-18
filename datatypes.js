// js => dynamic datatype


// primitve => (non mutuable/ not changable) => they don't have property and methods

// Numbers
// String
// Boolean
// undefined

// neha => address (reference)

const a = 10; // 1000 => 10
a = 20 // 1001

console.log(a); // 1000

// we cant change the reference for const variable:-

const name = 'divyansh';

// non-primitve (complex) => (mutable/ changable) => they have theier own property and methods

// null => typeof null = object
// Object 
// array => special kind of object 
// ['divyans','dixit']

const obj1 = { // refrence doesn't change 
    // key:value
    fname: 'div' // no reference
} // 2000

obj1 = {}; // 2001

// obj1['fname'] = 'divyansh' // read-inly 
obj1.fname = 'new';

console.log(obj1);
// obj1 = 'noida'; // 2001


const obj2 = { // 5000
    fname:'divyansh' //
}

obj2.fname = 'new value';

console.log(obj2);


// console.log(obj1);
var r = undefined;
var r;


// differnce in var let const

var c = 10 // 1000
c = 20;
console.log(c)

// you can't change the reference 

// const v = 30; // 3000
// v = 40; // 4000
// console.log(v)

null == undefined // true

// null => object 

null === undefined // false

// var => ES5

// there are 3 types of scope:

// global scope
var t = 20;

// function any(){ // functional/local scope 
//     var, let, const t = 10;
// }

// block level scope:
// let , const => es6



{
    const f = 10;
    console.log(f); // 10
}

console.log(f); // undefined

{
    const f = 20;
    console.log(f);
}

// console.log(f);

function sum(){
    var x =10;
    let y = 20;
    const z = 30;

    console.log(x + y + z);
}

sum();

// hoisting :- js default behaviour 

var t = 10;

g = 10;
console.log(g);
// 
// 
var g; // js hoisted later declaration at the top of script and initialize it at the moment

h = 11;
let h; // js hoisted later declaration at the top of script but don't initalize.
console.log(h);

// let h;
// h = 20;
// console.log(h)

const j = 30;
console.log(j);

// redeclaration:

var u = 'name';
var u = 'new';
console.log(u); // new

// can not redeclare the block scope variable
// let v = 'value';
// let v = "again value";



var obj = {
    x : 10,
    y: 20,
    z : 30
}

obj.x, obj.y, obj.z

// destructuring: of object, and array 
var {x,y,z} = obj;
console.log(x,y,z);

const arr = [10,20,30,40];
// const [g,b,c,d] = arr;
console.log(arr);

// spread operation: can not be perform on object, used only with array.
// console.log(...obj)