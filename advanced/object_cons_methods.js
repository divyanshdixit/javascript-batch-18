// Object literal
// new keyword
// object constructor
// Object.create(object)

const p = {
    name:'divyansh',
    age:25
}

delete p.name
const x = p; // 

// const keyword address variable by reference not by value.

// x is not the copy of p object , it;s the same object
// any chnages in x will reflect in p also 

x.name = "abhishek";

// console.log(x.name, p.name);


// deleting object property:

// it's only for JS object
// delete value and key both

// delete doesn't delete inherited props

delete p.age; 
// console.log(p);


// object.prop
// object['prop']

const obj = {
    name:'Srishti',
    age:24,
    hobbies:[
        {
            name:"sleeping", categories:['full day', 'half day'],
        },
        {
            name:"drawing", categories:['sketches', 'caligraphy']
        }
    ]
}

// print the categories using for in loop


// Properties attributes:

// enumerable => true
// configurable => true
// value 
// writable => true

const f = {
    name:'Divyansh',
    age:25,
}

// js object inherit props and methods from their prototype.

console.log(Object.getOwnPropertyDescriptor(f, 'name'))
f.name = 'change'; 
console.log(f.name)
Object.defineProperty(f, 'name', {writable:false})

f.name = "abhi" // this property can't be overwrite bcz writable property attribute is false.
console.log(f);

// adding method:

f.getName =  function(){
    return this.name + this.age;
}

f.getName()

var str = new String();
var obj = {
    
};

obj.kl = 'jjj';

Object.freeze(obj);


Object.defineProperties(obj, {
    'jk':{
        value:'some',
        writable:false
    },
    'kl':{
        value:'somelll',
        writable:false
    }
})
// {jk:'some', kl:'hgjh'}
// Displaying object properties:

// Object.values() => 
// any js object can be converted to array using Object.values()
// get the values of all props and return as an array 

console.log(Object.values(f))

// JSON.stringify() => any js object can be converted to string
// JSON.parse() => any string can be converted to Object

// it will not stringify functions
// in order to do that first convert function using toString()  and then stringify

f.getName = f.getName.toString();

console.log(JSON.stringify(f));

// we can also stringify js array (array to json)

const arr = ['divy', 'dixit', 24]
console.log(arr);
console.log(JSON.stringify(arr))

for(let i in obj.hobbies){
    console.log(obj.hobbies[i].name)
    for(let x in obj.hobbies[i].categories){
        console.log(obj.hobbies[i].categories[x]);
    }
}



// *********************

// creating an object (es5);

// create new object
//  using an existing object
//  as the prototype of new created object

// const a = {
//     lname: 
// }

const person = {
    fname:"Divyansh",
    name: function(){
        console.log(this.fname +  this.lname );
    }
}

const newObj = Object.create(person);

console.log('************');

console.log(newObj);

// add new prop in new object
newObj.lname = "Dixit";

// new property is set on new object but it'll not accessible over original object or prototype
console.log(newObj.fname);

newObj.fname = "Abhishek";

console.log(newObj.fname);

newObj.name();
person.name();


// adding or changing object property:
var detail = {
    fname:'Divansh'
}


Object.defineProperty(objectname, propname, {value:"newchanged value"} ) // add r modifies single prop
Object.defineProperties(objectname, {  // add r modifies one or more props
    propname:{
        value:"",
        writable:true
    },
    propname2:{
        value:'',
        writable:false,
        enumerable:true
    }
})
/*
Object.getOwnPropertyDescriptor(person, 'city') //=> value, writable, enumerable, configurable
Object.getOwnPropertyNames(person) //=> return all props as an array, regardless of enumerable  
Object.getPrototypeOf(newObj) //=> return the prototype of the object(value of internal prototype)
Object.keys(person) // => retun all props as array with enumerable prop is true

// protecting properties:
Object.preventExtensions(object); => prevent adding properties to an object
Object.isExtensible(object) => check if prop can be added to an object or not , if yes it return true
Object.seal(object) => 
// prevent modifies attributes of existing prop(but you can change the values of existing object)
// prvent adding new props(not values)
Object.isSealed(object) => retun true if object is sealed
Object.freeze(object) => prevent any changes to an object
Object.isFrozen(object) => return true if object is freeze.

if(!Object.isFrozen(object)){} else{}
*/

Object.defineProperty(detail, 'fname', {value:"abhi"})
console.log(detail.fname);

// adds or modifies one or more props direclty on an object

Object.defineProperties(detail,{
    fname:{
        value:'Changed again',
        writable:true
        // get and set also we can write here
    },
    city:{
        value:"kanpur",
        writable:true,
        enumerable:false
    }
})
console.log(detail.fname, detail.city);


console.log(Object.getOwnPropertyDescriptor(detail, 'city'))


// get all the properties as an array :

console.log(Object.getOwnPropertyNames(detail));


// get the prototype of specified object:

console.log(Object.getPrototypeOf(detail))
console.log(Object.getPrototypeOf(newObj) == person)

// get all enumerable properties as an array => (it'll get all the property for enumerable property is true)
console.log(Object.keys(detail));

// Object.keys(), Object.values(), Object.entries()
// Protecting props of an object:-

var cobj = {
    name:'divyansh'
}

var other = {
    lname:'asdas'
}

cobj.city = "knaur";

console.log(cobj);

// prevent adding prop to an object
Object.preventExtensions(cobj);

cobj.lname = "dixit";
console.log(cobj, '***');
console.log(Object.getOwnPropertyDescriptor(cobj,'name'));


// 
console.log( Object.isExtensible(cobj))
console.log( Object.isExtensible(other))

// 

Object.seal(cobj);

// Object.defineProperty(cobj, "name", {enumerable:false})
// console.log(Object.getOwnPropertyDescriptor(cobj,'name'));

Object.seal(other)
other.fname = "divyansh";
other.lname = "changed";
console.log(other);

console.log(Object.isSealed(cobj))
console.log(Object.isSealed(other))

// 

Object.freeze(other);
other.lname = "changed again";
console.log(other);

console.log(Object.isFrozen(cobj));
console.log(Object.isFrozen(other));


// adding getter and setter using Object.defineProperty()

Object.defineProperty(objectName, "fullName", {
    get : function() {
        return this.fname + this.lname;
    },

    set : function(params) {
        this.city= params
    }
})

var getSetObj = {
    fname:`divyansh`,
    lname:'dixit',
    city:''
}

Object.defineProperty(getSetObj, 'fullName', {
    get : function() {
        return this.fname + this.lname;
    }
})

Object.defineProperty(getSetObj, 'setCity', {
    set : function(cityName) {
        this.city = cityName
    }
})

// access get property
console.log(getSetObj.fullName);

// access set props

getSetObj.setCity = 'kanpur';

console.log(getSetObj)


// 

var kj = {
    name:'sdasasdas',
    age:25
}

console.log(Object.keys(kj)) // => return array of keys 
console.log(Object.values(kj)) // => return array of values
console.log(Object.entries(kj)) // => return array of array of key-value pair