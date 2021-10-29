const fruits = ["mango","banana","orange","lemon"]

console.log(fruits.length);

//loop over an array
fruits.forEach(function(item,index,array){
    console.log(item,index);
})

//add an item to the end of an array
let newLength = fruits.push("guava")
console.log(fruits);
//remove an item from the end of an array
let last = fruits.pop()
//remove an item from the beginning
let first = fruits.shift() 
//add an item to the beginning
let newLength = fruits.unshift('Strawberry') 
//find the index of an item
fruits.push('Mango')
let pos = fruits.indexOf('Banana')
//remove an item by index position
let removedItem = fruits.splice(pos, 1) 
//remove items from index position
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)

console.log(vegetables)

console.log(removedItems)
//copy an array
let shallowCopy = fruits.slice() 
//accessing array elements
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'






