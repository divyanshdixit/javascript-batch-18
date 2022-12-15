// 1 - length => props. (str.length)

// 2- find a string in a string:
// indexOf(), lastIndexOf(), search()


// indexing:

var x = "D I V Y A N S H" // 8, 7

// last index  = length - 1;

// x.indexOf('what you want to search', where do you want to start (position(optional parameter)) => find the index of first occurance of given text.

// if given text in string is not found return -1.

var str = " return quick quick quick  the brown box fox jumps over the la";

console.log(str.indexOf('quick', 9))
console.log(str.indexOf('quick', 40))


// lastIndexOf('parameter', position(where to start)) => find the index of last occurance of given text in a string.
// "this is a string"
console.log(str.lastIndexOf('quick'));
console.log(str.lastIndexOf('quick', 7))
console.log(str.lastIndexOf('quick', 3))
console.log(str.lastIndexOf('quick', 14))

// regular expression: pattern
// "devilme96#"
// ([A-Z]{1,}[a-z]{1,}[0-9]{1,}(@#$%^&*))

// search(\pattern\) => same as indexOf() // recives either pattern or word
// search(/Divyansh/)
// differenc in search and indexof()

// indexOf() can't recv pattern 
// search() can't take second argument

// /^b(a-z)n$/
// [a-z]
console.log(str.search('brown'))
console.log(str.search(/(b?)[a-z]{1,}[n]/))


// 3 - extract string part from a string:

// slice(start,end), substring(start, end), substr(start, length)

// slice(start index, end index(optional))=> 

// return the extracted part as new string.
// starting index , ending index => if not included then extreact whole string
// ending  index will be (end index - 1), if ending index is 3 , it'll extract till 2nd index 
// it can take -ve aurguments 

var whole = 'get a part of string';
console.log(whole[whole.length-1])
console.log(whole.slice(6,12)) // start < end-1
// (0,19) start < ending
// -ve arguments

console.log(whole.slice(-6)) // -12, -6

console.log(whole.slice(-5, -7)); // give empty string as a result bcz arguments are wrong
// slice(start, end) => start index must less than end index 
// examples => str.slice(6,8), str.slice(-7,-5)


// substring(start, end)

// it's similar to slice, but it cannt take -ve arguments

console.log(whole.substring(5,12))

// substr(start index, length):
// it's similar to slice, second parameter represent the length of the extracted part:
// if first param is -ve , coutn start from end of the string.

console.log(whole.substr(0, 4))
console.log(whole.substr(-8, 50))
var newString = whole.substr(-8, 5);
console.log(newString, whole)

// 4 => Replacing the string content:

// replace("replace this", "replace with")
// replace only first match by default,
// case senstive
// it can take reg ex (regular expression) pattern also.

var befores = "Before replace before before";
console.log(befores.replace('before', "After")) // 3 sec


//  Convert string to upper or lower case:

console.log(befores.toUpperCase(), befores) // 1 sec

// convert all to lower case
// chaining method
console.log(befores.toUpperCase().toLowerCase()) // 1 sec

"asdas" + "sadas"

// ========>

console.log("1" + 2 + 5)
console.log(1 + 2 + '5' + 6 + 8)

// add two or more stings in one :
// concat('one', 'second', ....)
var first = "first";
console.log(first.concat('second'), ''.concat('asdas', 'adsasd'));

// trim(): remove white spaces before/after the string.
// trimStart(), trimEnd(), trimLeft(), trimRight()

var or = "             Divyansh       Dixit                 ";
console.log(or.trimEnd(), or.trimStart())


// extracting string chars:

// charAt(position) => return char at given index
// return empty string if index is not found 

// charCodeAt(position) => return the unicode(ASCII) of char at given index

var str2 = "Div,yansh";
console.log(str2.slice(3,4)) // 
console.log(str2.charAt(3), str2.charCodeAt(0))
// console.log(str2[0]) => loops 
// str2[0] => read-only purpose 
str2[0] = 'A';
// str2.charAt(0);
console.log(str2.charAt(0), str2[0], str2.charCodeAt(0));


// document.getElementById('uname').onkeydown = function(event){
//     console.log(event, event.target.value, event.target.value.charCodeAt( (event.target.value.length) - 1))
//     // console.log(e, e.key, e.which, e.target.value, typeof e.target.value);
//     if(event.keyCode === 32){ // e.target.value == '   '
//         alert('Spaces are not allowed');// 
//         return false;
//     }else{
//         return true;
//     }
// }

// document.getElementById('uname').onchange = function(){
//     console.log(this.value)
//     if(this.value.charCodeAt(0) == 32){
//         alert('spaces are not allowed')
//         this.value = '';
//         return false;
//     }else{
//         return true;
//     }
// } 

// convert string into array:=> 
var str5 = 'doremon'; // ['d', 'o'....]
var t = "custom function / using prototype" //["custom", ""]

// split(delimeter): 

// split string with the delimeter passed:
// if empty string passed as a delimeter then split string by chars and return as an array 
// if omitted or passed delimeter is not found then reutnr whole stirng as an array

// 
console.log(t.split(''));
console.log(str5.split());
console.log(t.split('*'))
console.log('divyansh'.split('-'))

// toString():  it converts anything convertable in string.
var t = 10;

var f = function(){
    var arr = fetch('https://jsonplaceholder.typicode.com/posts')
   return {
       "status":'OK',
       "data":arr
   }
}
var arr = new Array(1,2);
console.log(arr.toString(), )

// console.log([1,2,3] instanceof String);

console.log(f.toString().indexOf('Array') > -1)
if(f.toString().indexOf('function') > -1){
    console.log('variable f is holding a functio')
}
// console.log( Boolean(false) )


// Prototype: parent, all method an props belongs to prototype
// you can add new/own props and method to all stirng.

String.prototype.myCustomFunction = function(param){
    console.log('custom func using prototype ' + param)
    return '';
}

console.log(str2.myCustomFunction(str2), first.myCustomFunction(first));

console.log('divyansh'.split('').reverse().join(''))