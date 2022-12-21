// JSON: jv object notation. => string data type

var y = {
    name:'divyansh'
}
// js 

// Object to string (json):
JSON.stringify(y);

// json to object:
JSON.parse('[{"name":"divyansh"}]')

var u = JSON.parse(JSON.stringify(y)) // {}
u.name = 'nw';

// JSON, JSONP


