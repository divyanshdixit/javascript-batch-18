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
