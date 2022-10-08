var arr1 = [1,2,3];
var arr2 = [4,5]
var marr = arr1.concat([4,5,6], [7,8,9]);
console.log(marr); // [1....9]
// console.log(arr1.push(...arr2), arr1);

// console.log(arr1.concat([4,5]))

console.log(marr.slice(0,3))
console.log(marr.slice(-4))

var arr = [10,20,30,40];
console.log(arr.copyWithin(3,2,4))

var obj = arr.entries(); // [key, value] array iterator object
var obj = arr.keys();
var obj = arr.values();

for(key of obj){
    console.log(key)
}

var items = ['abd','abd','abc']
console.log(items.every( (val) => {
    return val.indexOf('b') > -1
}))

console.log(items.filter( (val) => { // ['abc']
    return val.indexOf('b') > -1// true, false
}))

console.log(items.find((val) => {
    return val == 'abc';
}))

console.log(items.includes('abc'));

console.log(items.find((val) => {
    return val.indexOf('ab') > -1 
}))

console.log(
    items.map((val,index) => {
        return val+2
    })
)

var values = [1,2,3,4];


console.log(
    values.reduce((sum, val) => {
        console.log(sum,val)
        return sum = sum + val; // 0+1 =1 + 2
    })
)