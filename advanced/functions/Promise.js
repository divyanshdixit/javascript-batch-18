// promise:

// a code that can take some time to run. (api call)
// a code that must wait for the result (show result)

// promise is an object that links both codes

let promise1 = new Promise(function(resolve, reject){ // Object
    // code that can take sometime: api call

    // resolve(); // run when success
    reject(); // run when failed.
})

promise1
.then((value) => console.log(value), (err) => console.log(err))
.catch(err => console.log(err))

console.log(promise1)

let x = 0;
let y = 2;
let z = 3;

let promise3 = new Promise((resolve, reject) => { // object
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
        if(data)
            resolve(data)
        else 
            reject('can not get the api data from photos')
    })
    // if(z == 3){
    //     resolve(`value is ${z}`)
    // }else{
    //     reject(`error in promise 3`)
    // }
})

let promise2 = new Promise((resolve, reject) => { // object
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        if(data)
            resolve(data)
        else 
            reject('can not get the api data from comments')
    })

    // if(y == 2){
    //     resolve(`value is ${y}`)
    // }else{
    //     reject(`error in promise 2`)
    // }
})

let getValue = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        if(data)
            resolve(data)
        else 
            reject('can not get the api data from posts')
    })
    // if(x == 0){
    //     resolve(`value is ${x}`)
    // }else {
    //     reject(`error in promise 1`)
    // }
})

getValue.then((val) => { // promise 1
    // on success
    console.log('success')
    // val => promise 2
    promise2.then((newVal) => { // promise 2
        // on success of promise 2
        console.log('success 2')
        showPromise2Result(newVal)
        promise3.then((val3) => {
            console.log('success 3');
            show3(val3)
        }, (err) => {
            console.log('failure 3');
            show3(err);
        })
    }, (err) => {
        // on failure of promise 2
        console.log('failure 2')
        showPromise2Result(err);
    })
    show(val);
}, (err) => {
    console.log('failure')
    // on failure
    show(err);
})

function show(value){
    console.log(value)
}

function showPromise2Result(value){
    console.log(value);
}

function show3(value){
    console.log(value)
}

// async/await : use to write promise easier way .

// async: makes a function return a promise.
// await: make a function wait for a promise. 

// async function getDataFromPromise(){
//     return 'hello';
// }

// return Promise.resolve('hello')
let a = 0;
const display = async () => {
    // we can use 
    let promise = new Promise((resolve, reject) => {
        if(!a)
        resolve('resolve1');
        else
        reject('reject')
    })

    // calling any function that returna a promise.
    // await makes js wait till that promise settles and return its result.
    let res = await promise;
    console.log(res);
}

display();


// ex:
// before that:
const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rollNo = [1,2,3,4];
        if(rollNo.includes(1))
            resolve(rollNo);
        else 
            reject('err:...')
    }, 1000);
});

const getPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let obj =  {
                name:'divyansh',
                age:26,
                
            }
        }, 2000)
    })
}