// this : refers to the parent object it belongs to

// method: object method: this refers to owner object.
// alone : globally
// function: without strict mode
// function: strict mode. 
// event : 

var obj = {
    name: 'asdas',
    getName: function(){ // object method binding..
        console.log(this.name);
    }
}
// console.log(window.obj)

// global object is the owner of this.
// in a browser window is the global object
console.log(this);

// "use strict"

// var x = this;
// console.log(x, this);

// this ina function: 

function uname(){ // default binding
    return this;
}

console.log(uname());

var uname3 = () => {
    return this;
}
console.log(uname3())

// "use strict";

function uname2(){ // previously js doesn;t allow default binding so this is undefiend but now this refers to window obejct.
    console.log(this); // undefined
}

uname2();

// this in event: this refers to HTML element that recieves the event.

{/* <button onclick="clickfunction(event, this)"> click to remove it </button> */}

/*
explicit function binding:
call(), apply():
used to call an object method with another object as an argument:

*/

const o1 = {
    writeName: function(){
        return this.fname + ' ' + this.lname;
    }
}

const o2 = {
    fname:'div',
    lname:'adassdas'
}

console.log(o1.writeName.apply(o2))


var h = () => {
    console.log(this)
}

console.log(h())