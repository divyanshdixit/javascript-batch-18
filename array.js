// js array used to store the multiple values in single varaible.
// it can store any data type. 

var arr = [ 100, 200, 300, '4' , 'Divyansh', {city:'kanpur'}, [ ], function (){}, true, false ];

// var arr = new Array(1,40);

// indexing start from 0 and goes further and always numerical.
// last index => arr.length - 1

// one type of array:

// index array (numerical indexing)
// associative array (object) => not in js 

{
    name:'divyansh'
}

// [
//     name => 'divyansh'
// ]

// accessing the element of array: refer to the index of array.

console.log(arr[4], arr[5].city)

// changoing the value of array element.
arr[0] = 500;
console.log(arr); 
arr[7] = function(){
    console.log('new function value!')
    return ''
}
console.log(arr[7]())

// new value assign to 0 index
arr[0] = 500;
console.log(typeof arr[0], typeof arr);


// deleting array element create an hole and gives undefined for that index.

delete arr[1];
console.log(arr);
console.log(arr[1])
