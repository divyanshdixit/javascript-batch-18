// new Set() => store unique values in collection (iterable Object)

var sets = new Set(); // [enteris  [0 : 'asdas']]

// value add : add()
sets.add("div")
// can not enter duplkicate value.
sets.add("DIV")
console.log(sets, sets.size)

// to delete the value:
sets.delete('div')

var t = 10;
sets.add(t);

// has; check if value exists:
console.log(sets.has('10'))
console.log(sets, sets.size)

// values

console.log(sets.values())
for(let i of sets.values()){ // iterable object / itertor object
    console.log(i);
}

sets.forEach((item, index) => {
    console.log(item, index)
})
