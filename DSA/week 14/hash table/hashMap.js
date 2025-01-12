const myMap = new Map();

// Set values
myMap.set('apple', 1);
myMap.set(2, 'hello');

// console.log(myMap)

// Get values
console.log(myMap.get('apple')); // Output: 1
console.log(myMap.get(2)); // Output: 'hello'

// Check for key existence
console.log(myMap.has('apple')); // Output: true
console.log(myMap.has('banana')); // Output: false

// Delete a key-value pair
myMap.delete('apple');
console.log(myMap.has('apple')); // Output: false

// Clear the Map
myMap.clear();
console.log(myMap.size); // Output: 0

// Iterate over key-value pairs
const myMap2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// console.log(myMap2)

for (const [key, value] of myMap2.entries()) {
    console.log(`${key}: ${value}`);
}

for( const key of myMap2.keys()){
    console.log(key)
}

for( const value of myMap2.values()){
    console.log(value)
}





