// class firstClass{
//     constructor(){}
//     constructor(name){
//         // super() => working?
//         this.name = name;
//     }
//     showMessage(l){
//         return 'my name is ' + this.name + l;
//     }
// }

// let inst1 = new firstClass('divyansh');
// console.log(inst1) // {name:'divyansh'}
// console.log(inst1.showMessage('kkk'));

// inheritance: parent to child 

// 
// 

class class1{
    constructor(name, color){
        this.name = name;
        // this.color = color;
    }
    static showColor(color){
        this.color = color;
        return this.color
    }
    showName(name){
        return this.name;
    }

    get getName(){ // get/set method name can not be same as property name
        return this.name;
    }

    set getName(newName){
        this.name = newName;
    }
}


var class1obj = new class1('divyansh');
console.log(class1.showColor('green'))
// console.log(class1obj, class1obj.showName(), class1obj.getName);
// class1obj.getName = 'abhishek';
// console.log(class1obj.getName);

// class class2 extends class1{
//     constructor(name,age){
//         super(name); // refers to parent class => class1, calling the constructor method of parent class
//         this.age = age;
//     }
//     showAge(){
//         return this.age;
//     }
// }

// let class2Obj = new class2('divyansh',26);
// console.log(class2Obj.showName(), class2Obj.getName);
// class2Obj.getName = 'cr7'
// console.log(class2Obj.getName)


// static class: they are defined on the class itself.
// can not call static mehtod on obj, only on class 
