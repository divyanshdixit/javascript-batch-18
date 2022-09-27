// 

// "",''
// strings are immuatable(not changable)
var x = ' divyansh ';

// length: to get the string length:
// arr[0]

console.log(x.length);

// escaping char: \ => turn the special char into string char

// \' \', \" \", 

var y = " I'm div \"high\" 126\\31 "
console.log(y);


// string can be object.

// class String{
//     constructor(){
        
//     }
// }
// using string constructor:

var f = new String('Divyansh');

console.log(typeof x, typeof f);

var g = 'Divyansh';

// ==, === => comparison == (value compare), === (value and datatype)
console.log(f == g) // true
console.log(f === g) // false

var h = new String('Divyansh');
console.log(f === h)