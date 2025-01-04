const mySet = new Set();

// Add values
mySet.add('apple');
mySet.add(2);
mySet.add('apple'); // Duplicate, ignored

console.log(mySet)

// Check for value existence
console.log(mySet.has('apple')); // Output: true
console.log(mySet.has('banana')); // Output: false

// Delete a value
mySet.delete('apple');
console.log(mySet.has('apple')); // Output: false

// Clear the Set
mySet.clear();
console.log(mySet.size); // Output: 0



// Iterate over values
const mySet2 = new Set(['a', 'b', 'c']);


// Using keys()
for (const value of mySet2.keys()) {
    console.log(value);
}

// Using values()
for (const value of mySet2.values()) {
    console.log(value);
}

// Using entries()
for (const [value, value2] of mySet2.entries()) {
    console.log(value, value2); // Both values will be the same
}

// Using for...of loop
for (const value of mySet2) {
    console.log(value);
}