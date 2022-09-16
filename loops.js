// for
// foreach => array 
// for in => just for object
// for of => array, but provide only the values not indexes

// while 
// do while
// for(Intialisation, condtion, incre/decrement)

for(let i=0; i<=5; i++){
    // arr[i] => i= 0
    console.log('current value of i is : ' + i) // 0,1,2,3,4,5
}

// var arr =[1,2,3]=> 0,1,2

// for-in : used only for objects:

var obj = {
    fname:'div',
    lname: 'dd',
    age:26,
    // method1: function(){
    //     console.log('first')
    // }
}

// indexOf(), toString()

// console.log(obj.method1.toString().indexOf('function'))

for(let i in obj){
    // console.log(obj.hasOwnProperty(key))
    console.log(i, obj[i]) 
}

// for-of: used for array/any iterable array , doesn't have indexes provide only values.
var str = 'string';

for(let i of str){
    console.log(i); // s,t,r,i,n,g
}

// forEach: it's a function , work as a loop, doesn't return anyh value, used only for print purpose
// used with arrays.

var htmlTags = ['div','h1', 'h2', 'p'];

// callback: a function passed as an argument in the other function called as callback function
// callback : all CB function are anonymus function

// work: if you have dependency  to other function return value then use a callback function for next step.

htmlTags.forEach( function(item, index, arr){
    console.log(item, index, arr);
    // console.log(res*10);
} ) // argument

// synchromus => js default behaviour

// function forEach(){
//     var t= 10;
//     res = t + 20;
// }

// console.log(res*10); // undefined/NaN