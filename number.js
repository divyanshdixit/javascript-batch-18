// js sync 

// Numbers:- 

// var v = new Number(10);

// js has only one type of numbers:

// 64 bit floating point
// intergers(without period) are accurate upto 15 digits

var x = 999999999999999; // 15 digits
console.log(x);
var y = 99999999999999999; // 16 digits
console.log(y);

// js interpreter works from left to right:

console.log(10 + 10 + '10' + 10 + 10); // 3sec

var x = 10; // 1sec
var y = 10;
var z = "The result is :" + x + y;
console.log(z);


// js try to convert strings to numbers in all numeric operations (for addition + it works different as concat)

// if string contains numeric value result will a number

var a = "100";
var b = "10";

//  +  addiotion
//  + concat > addiotion


var c = a + b;  // 10010
var d = a - b; // 90
var e = a * b;
var f = a / b;

console.log(c, d, e, f);


// NaN: not a number
// when try to do airthmatic with non-numeric string will give NaN

// typeof NaN is number:

var g = 100*"a";
console.log(g)

console.log(10 - "10");

// isNaN() => to find out if a value is number or not , returns true if value is not a number, else false.

console.log(isNaN('a'))
// 10 is not a number ? false
// 'a' is not a number ? true

console.log(isNaN('10')) 

// 10 is not a number: false
var j = 100 / "gh";

console.log(j);

console.log(isNaN(NaN));

// not a number is not a number : 

// Infinity => number 

var x = 10; // 
var x = Infinity; // -Infinity

// By default js displys numbers as base to decimals:

/*
// Number Method:

// 1 - toString(base) =>
//  convert numner top string , return number as string:
// binary 
// octal 
// hexadecimal
// o/p number will be from base 2 to base 36

var num = 23;
console.log(typeof num.toString());
console.log(num.toString());

console.log()

isNaN("a")
// 10 is not a number : false

// "a" is not a number: true



// how to convert a number (string) to pure number: 

var t = "100.66999832";
var u = "200";

console.log(parseInt(t), parseInt(u), parseFloat(t).toFixed(2))
console.log(parseInt(t) + parseInt(u))

*/