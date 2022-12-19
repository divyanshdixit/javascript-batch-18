// callback : i'll call u back later

function f1(cb){
// code 
    cb();
}

function f2 () {

}

f2();
f1(() => {});

function sum1 (n1,n2){
    let sum = n1 + n2; // .5sec
    show1(sum);
    // cb(sum)
    return sum;
}

function show1(res1){
    document.getElementById('show1').innerHTML += res1;
}

sum1(1,2,);
// show1(res1);


function add(n1,n2, cb){ // 1
    let sum = n1 + n2;
    show(sum)
    // cb(sum);
    return sum;
    // return fetch('https://jsonplaceholder.typicode.com/posts') // promise
    // .then(res => res.json())
    // .then(data => {show(data))
}

function show(res){
    document.getElementById('show').innerHTML += res;
}
// let res = add().then(d => {console.log(d); d.forEach(itm => {
//     show(itm.title)
// });;});

let res = setTimeout( () => {
    add(4,5); // 9 
},1000);

// show(res);

