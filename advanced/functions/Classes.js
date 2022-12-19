class firstClass{
    constructor(name){
        // super() => working?
        this.name = name;
    }
    showMessage(){
        return 'my name is ' + this.name;
    }
}

let inst1 = new firstClass('divyansh');
console.log(inst1) // {name:'divyansh'}
console.log(inst1.showMessage());