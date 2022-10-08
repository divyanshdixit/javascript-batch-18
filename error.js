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
//  throw: create custom error
// finally: excute the code after try and catch block regardless of result

try {
    const result = fetch('https://jsonplaceholder.typicode.com/poss').then((res) => console.log(res));
    console.log(result);
} catch (e) {
    console.log(e, e.message)
}

// finally : let' you excute the block of code after try and catch regardless of the result.

function errorGenerater() {
    let e = document.getElementById('error_demo').value;
    try {
        if (e == "") {
            throw "Please enter any value";
        }
        if (!isNaN(e)) throw "Please enter only string (ERR002)";

        if (e.length > 8) throw "Please enter less than 8 digits";

        if (e.length < 3) throw "Please enter greater than 2 digits";

        if (e.length < 8 && e.length > 2) throw "";

    } catch (error) {
        // DOM
        document.getElementById('error_message').innerHTML = error;
    }
    finally {
        // document.getElementById('error_message').innerHTML  = '';
        document.getElementById('error_demo').value = '';
    }

}

/*
TypeError: data type
ReferenceError: using a vairable with giving any reference
SyntaxError:
rangeError: out of range in number
uriError : error in decoding uri 
*/