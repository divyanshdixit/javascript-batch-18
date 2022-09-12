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
// 2nd syntax => objectname['propname']

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

// 
