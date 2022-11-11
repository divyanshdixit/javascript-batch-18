// good to have name constructor function with camelcase

// Object Function constructor:


function Person(f, l, a, c){
    this.fname = f;
    this.lname = l;
    this.age   = a;
    this.color = c;
    // this.size = s;
}


// const j = new Person('asd','sa'...);

// Person.prototype.size = '20'

// we can't add prop or method from outside the constr fucntion:

// Person.city = "lko" (not possible)

// Blueprints:-

//  we need blueprints for creating many obejct of same types

// for creating same object type we need object const function

// objects of same type are created by calling the constructor fucntion with "new" keyword:

// const fnames = ['div','div1'];
// const lnames = ['div','div1'];
// const ages = [25,'div1'];
// const colors = ['div','div1'];

// for(let i=0;i<2;i++){
//     var x = 'obj'+i; // obj0, obj1
//     x = new Person(fnames[i],lnames[i], ages[i],colors[i]) // 
//     console.log(x);
// }

// in a constructor function this doesn't have any value , 
// the value of "this" will become the new object when it is created


// adding a new prop in existing object

// obj1.city = "asdasdsd";
// obj2.city = "kanpr";


// adding a prop to constructor  from outside:

// for adding we need to use prototype:

// Prototype: All Js objects inherit props and methids from a prototype
// so we can add new prop and methods using prototype

// adding new prop:


// adding new mehtod using prototype
Person.prototype.getName= function () {
    return this.fname + this.lname
}
const d = new Date();

const obj1 = new Person('div','dixit', 25,'fair');
console.log(Object.getPrototypeOf(obj1).constructor);
Person.prototype.size = '10';
console.log(obj1.size);
const obj2 = new Person('div1','dixit1', 26,'fair1')

console.log(obj1, obj2)
obj2.size = "20";
console.log(obj2);

console.log(obj1.size, obj1.getName(), obj2.size)

// Prototype: run, walk, stand

const f = {
    name:'adsasd',
    getName:function(){

    },
} 

const g = {
    fname:'adsasd',
    getCity:function (params) {
        
    }
}

const h = {
    lname:'adsasd'
}

// 
// Object accessors: (getters and setters)

// ES5 2009 introduce it.
// they allow to define object accessors (computed prop).

// use and call oibject method as a property

// simple syntax
// secure data quality
// they acces js function as a prop

// getter (get keyword):

const p = {
    name:"Divyanh",
    city:"",
    lname:"Dixit",
    // fullName:function(){
    //     return this.name;
    // },
    get fullName(){ // work as a prop
        return this.name;
    },

    get cityName(){
        return this.city;
    },

    set setCity(cityname){
        this.city = cityname;
    },

    get UserDetails(){
        return this.name + ' ' + this.lname + ' ' + this.city
    },

    set ChangeLname(newLname){
        this.lname = newLname;
    }

}

var arr = ['dixit', 'dixit2', 'dixit3'];

// console.log(p.getName());
console.log(p.fullName);
console.log(p.cityName); // ''
p.setCity = "new city";
console.log(p.cityName);
console.log(p.UserDetails);
p.ChangeLname = "ddd"

/*
const a = "a";
const b = "b";
const c = "c";
// create a set and add existing variables and litterals
const letters = new Set([a,b,c,"d"]);
// letters.add(a)
// letters.add(b)
// letters.add(c)
console.log(letters);
letters.delete(c);
console.log(letters.entries());
console.log(letters.keys());
letters.clear()
console.log(letters.values());
const x = function (a, b) {return a * b};
var g = "some";
console.log(g, window.g);
*/