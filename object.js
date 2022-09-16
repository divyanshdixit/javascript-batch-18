// object=> 
// person => name , city, age, color

var person = {
    name:'divyasnh',
    age:25,
    city:'kanpur',
    color:'fair',
    profile: function(){ // methods
        console.log('my work profile')
    }
}

// key => alphabet
// key => "", '' not used
var obj = {
    key : 'value' //
}

// obj has 2 things: property , methods(functions) => action

// 1=> get the property name:

// syntax=> objctname.propname;
// 2nd syntax => objectname['propname'] => used mostly in loops

console.log(person.name, person.age)

console.log(person['name']) // used only for loops

// 2=> change existing prop value:

person.city = "noida";
person['city'] = 'delhi'

console.log(person);

// 3=> adding new prop:

person.bankBalance = 1;
console.log(person);

// 4=> delete prop:

delete person.name;
console.log(person)

// check if a prop exists or not : objectName.hasOwnProperty('propname') => return true or false

console.log(person.hasOwnProperty('name'));

if(person.hasOwnProperty('name')){
    console.log(person.name)
}

// get the methods:
console.log(person.profile())

// change the value of existing methods
person.profile = function(){
    console.log('new value console')
}
console.log(person.profile())

// add a new method
person.newMethod = function(){
    console.log('new method added')
}
console.log(person)

// delete a method

delete person.newMethod;
console.log(person)

// NEVER COPY ONE OBJECT VALUE TO OTHER:

var x  = 10; // reference 1000
var y = x;  // 1000

y = 20; // 1001
console.log(x);

primtive :

var c = 10 // rfnce 5000
c = 20; // 5001

// non primitive

var obj1 = { // reference  = 2000
    x:10 
}

var obj2 = obj1; // 2000

obj2.x = 20;

obj1.y = 30;

console.log(obj2); // 

// var obj2 = JSON.parse(JSON.stringify(obj1));

// {
//     "x" : 10
// }

// {
//     x: 10
// }