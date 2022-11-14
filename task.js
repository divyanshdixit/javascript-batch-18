// var age = 19;

// if(age>18){
//     console.log('you can visit this website');
// }else if(age < 18){
//     console.log('never visit this')
// }else{
//     console.log('go fk ')
// }

// 
// var age = 19;

// if(age>18){
//     console.log('you can visit this website');
// }

// if(age == 19){
//     console.log('wahterver')
// }

// if(age < 18){
//     console.log('never visit this')
// }else{
//     console.log('go fk ')
// }


// switch case :
var ages = 20;
switch(ages){ // expressions 18
    case 18:
        console.log('u may eneter this website');
        break;
    case 19:
        console.log('pls grow up enough!');
        break;
    case 20:
        console.log('u can enjoy the party!');
        break;
    default:
        console.log('you are not a human!');
        break;
}

// write a program for swapping of 2 varaible.

var a = 10;
var b = 20;

// without using 3rd , with using 3rd varible

// Reverse a string: without using inbuilt function

// Name: Divy ansh // 8/2 , 
// o/p : hsnayviD


// reverse a number:- 

// % => modules (reminder show)

// fibonacci series: 0 1 1 2 3 5 8 13 21
// no of digits 10
/*

* 
* * 
* * * 
* * * * 
* * * * * 

// 

* * * * * 
* * * *
* * *
* *
*

//

* 
* * 
* * * 
* * * * 
* * * * * 
* * * *
* * *
* *
*

//
    *
   **
  ***
 ****
*****
   

*/
let n = 5;
let res = '';

for(let i=5;i<=1;i--){ // i = 1,2
    for(let j=0; j<i; j++){ // 0<1, 0<2, 0<5, 0<4
        
        res = res + '* ';
        res = res + '*';

    }
    res = res + '\n';
}

// array questions:

// without using inbuild functions:

// **A - find max and min value from array: 
// **B - sort this array in ascending array without using inbuilt function
var array = [4,40,1,0,-1,-100,3,40.01,-100.01,90,-100.1, 40.45, 40.96]


// **A- find the "email" inside the array
// **B- print this array elements in html document inside a div with h1 tag. 
var array1 = ['fname', 'lname', 'email', 'emailid', 'address'];

// **A - find the duplicate number in the given array  and return in a array. 
// **B - remove duplicate number in the given array:
var arr2 = [-1,0,1,2,3,-1,3.4,4,5,3.40,1,2] // here 3.4 is equal to 3.40

// **reverse this array:
var arr3 = [10, '10', 20, '200', 'id'];

// ** find if given number and string both are palindrome or not: (check on google what is palindrome, but don't copy the code 😄)

// test cases:
var num1=121;
var num1=123;
var num1=373;

// test cases:
var str1 = 'racercar';
var str2 = 'racer car'; // it must ignore the space while checking the string is palindrome or not.
var str3 = 'eye';
var str4 = 'DD';


// ** make a click counter: 
// (two button one is for "increment" other one is for "decrement", in html using onclick event write a logic for increment and decrement count on button click respectively)


// 
var arr = [1,2,3,4,5,6,7,8,9];
var arr1 = [1,2,3,4,5,6];
<div>

<div>
1,2,3
</div>

<div>
4,5,6
</div>

<div>
7,8,9
</div>

</div>

// css selectors
. , #
// css combinators

 +, > , ~

/*
captialize code for every word in phrase: 'go to hell'

// 
a        abc         abcd        abcde       abcdef
[a_]    [ab, c_]    [ab,cd]    [ab,cd, e_]  [ab,cd, ef]
*/


// Complete the solution so that the function will break up camel casing, using a space between words.

// "camelCasing"  =>  "camel Casing"
// "camelCasingTest"  =>  "camel Casing Test"
// "identifier"   =>  "identifier"
// ""             =>  ""


/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

// factorial of given number: 5 = 120.

// if no is repeat.. to delte rest of no except one. , if not then delt that number. 

// console.log(arrayDiff( [1,2,2,2,3,3] , [2,3]) ) // result => [1,2,3];
// console.log(arrayDiff( [1,2,2,2,3] , [2,3]) ) // result => [1,2];

// https://github.com/divyanshdixit/javascript/blob/main/questions/basic.txt