//-----------------------  SET  -----------------------------


// let map = new Map();

// // Adding entries
// map.set('key1', 'value1');
// map.set('key2', 'value2');

// // Retrieving values
// console.log(map.get('key1')); // 'value1'

// // Iterating over entries
// map.forEach((value, key) => {
//   console.log(`${key} => ${value}`);
// });

// // Size of the map
// console.log(map.size); // 2


//----------------------  MAP  ------------------------------

let set = new Set();

// Adding values
set.add('value1');
set.add('value2');
set.add('value1'); // Duplicate values are ignored

// Checking existence
console.log(set.has('value1')); // true

// Size of the set
console.log(set.size); // 2

// Iterating over values
set.forEach(value => {
  console.log(value);
});
