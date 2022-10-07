// reference error:
var x = 10;
// console.log(y)
// syntax error:
// console.log(y;

    // range error:

    // type error:

    var f = 10;
    // console.log(f())

    // custom error:
    // try: test a block of code for errors
    // catch: handle the error in try block
    // throw: create custom error
    // finally: excute the code after try and catch block regardless of result

    try{
        const result = fetch('https://jsonplaceholder.typicode.com/poss').then((res) => console.log(res));
        console.log(result);
    }catch(e){
        console.log(e, e.message)
    }