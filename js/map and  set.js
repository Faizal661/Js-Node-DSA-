//-----------------------  SET  -----------------------------


let map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.get('key1')); // 'value1'

map.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});


console.log(map.size); // 2

//----------------------  MAP  ------------------------------

// let set = new Set();

// set.add('value1');
// set.add('value2');
// set.add('value1'); // Duplicate values are ignored

// console.log(set.has('value1')); // true

// console.log(set.size); // 2

// set.forEach(value => {
//   console.log(value);
// });
